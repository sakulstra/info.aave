import { resolver } from "blitz"
import { z } from "zod"
import { addresses } from "app/core/constants"
import { getMongoClient } from "db/mongo"
import { User, Reserve, UserReserve } from "db"
import { v2 } from "@aave/protocol-js"
import dayjs from "dayjs"
import { getOnChainReserves } from "integrations/conracts/poolDataProvider"
import { formatUserSummary, FormatUserSummaryRequest } from "@aave/math-utils"

export function getUser(
  userReserves: (FormatUserSummaryRequest["rawUserReserves"]["0"] & {
    lastUpdateTimestamp: number
  })[],
  userId: string,
  poolId: string,
  now: number,
  usdPriceMarketReferenceCurrency: string,
  marketReferenceCurrencyDecimals: number
) {
  const result = formatUserSummary({
    currentTimestamp: now,
    marketReferenceCurrencyDecimals,
    usdPriceMarketReferenceCurrency,
    rawUserReserves: userReserves,
  })
  const record: Omit<User, "id"> & { reservesData: v2.ComputedUserReserve[] } = {
    userId,
    poolId,
    healthFactor: Number(result.healthFactor),
    totalBorrowsETH: Number(result.totalBorrowsMarketReferenceCurrency),
    totalBorrowsUSD: Number(result.totalBorrowsUSD),
    totalCollateralETH: Number(result.totalCollateralMarketReferenceCurrency),
    totalCollateralUSD: Number(result.totalCollateralUSD),
    totalLiquidityETH: Number(result.totalLiquidityMarketReferenceCurrency),
    totalLiquidityUSD: Number(result.totalLiquidityUSD),
    availableBorrowsETH: Number(result.availableBorrowsMarketReferenceCurrency),
    currentLiquidationThreshold: Number(result.currentLiquidationThreshold),
    currentLoanToValue: Number(result.currentLoanToValue),
    reservesData: result.userReservesData as any,
    lastUpdateTimestamp: userReserves.reduce((acc, reserve) => {
      if (reserve.lastUpdateTimestamp > acc) return reserve.lastUpdateTimestamp
      return acc
    }, 0),
  }
  return record
}

export function getFormattedUsers(
  poolId: string,
  users: { _id: string; reserves: UserReserve[] }[],
  reserves: (Reserve & { priceInMarketReferenceCurrency: string })[],
  usdPriceMarketReferenceCurrency: string,
  marketReferenceCurrencyDecimals: number
) {
  const now = dayjs().unix()
  const reserveMap = reserves.reduce((acc, reserve) => {
    acc[reserve.id] = reserve
    return acc
  }, {} as { [key: string]: Reserve & { priceInMarketReferenceCurrency: string } })
  return users.map((user) => {
    return getUser(
      user.reserves.map((userReserve) => ({
        ...userReserve,
        reserve: reserveMap[userReserve.reserveId],
      })),
      user._id,
      poolId,
      now,
      usdPriceMarketReferenceCurrency,
      marketReferenceCurrencyDecimals
    )
  })
}

export async function refreshUsers(
  poolId: string,
  _users: { _id: string; reserves: UserReserve[] }[],
  reserves: (Reserve & { priceInMarketReferenceCurrency: string })[],
  usdPriceMarketReferenceCurrency: string,
  marketReferenceCurrencyDecimals: number
) {
  const { db } = await getMongoClient()
  if (_users.length) {
    const chunk = 50000
    for (let i = 0, j = _users.length; i < j; i += chunk) {
      console.log(i)
      const temp = _users.slice(i, i + chunk)
      const users = getFormattedUsers(
        poolId,
        temp,
        reserves,
        usdPriceMarketReferenceCurrency,
        marketReferenceCurrencyDecimals
      )
      await db.collection("User").bulkWrite(
        users.map(({ reservesData, ...user }) => ({
          replaceOne: {
            filter: { userId: user.userId, poolId: poolId },
            replacement: user,
            upsert: true,
          },
        })),
        { ordered: false }
      )
    }
  }
}

export async function updateUsers(poolId: string, marketReferenceCurrencyDecimals: number) {
  const { db } = await getMongoClient()
  const [{ reserves, usdPriceEth }, users] = await Promise.all([
    getOnChainReserves(poolId),
    db
      .collection("UserReserve")
      .aggregate(
        [
          {
            $match: {
              poolId,
            },
          },
          {
            $group: {
              _id: "$userId",
              reserves: {
                $push: "$$ROOT",
              },
            },
          },
        ],
        { allowDiskUse: true }
      )
      .toArray(),
  ])
  console.log("USERS", users.length)
  // TODO: debug if this type conflict is a problem
  refreshUsers(poolId, users as any, reserves as any, usdPriceEth, marketReferenceCurrencyDecimals)
}

export const UpdateUsers = z.object({
  poolId: z.string(),
})

export default resolver.pipe(resolver.zod(UpdateUsers), async ({ poolId }) => {
  if ((Object.values(addresses.ADDRESS_PROVIDERS.POLYGON) as string[]).includes(poolId)) {
    return await updateUsers(poolId, 18)
  }
  if ((Object.values(addresses.ADDRESS_PROVIDERS.V2) as string[]).includes(poolId)) {
    return await updateUsers(poolId, 18)
  }
  if ((Object.values(addresses.ADDRESS_PROVIDERS.AVALANCHE) as string[]).includes(poolId)) {
    return await updateUsers(poolId, 8)
  }
})
