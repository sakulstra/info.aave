import { resolver } from "blitz"
import * as z from "zod"
import { gqlSdkV2, gqlSdkMatic } from "integrations/subgraph"
import { addresses } from "app/core/constants"
import { getMongoClient } from "db/mongo"
import { AaveUser, Reserve, UserReserve } from "db"
import { normalize, v2 } from "@aave/protocol-js"
import dayjs from "dayjs"
import { getOnChainReserves } from "integrations/conracts/poolDataProvider"
import { computeRawUserSummaryDataOptimized, formatReserves } from "app/core/utils/liquidationMath"

export function getUser(
  reserveMap: { [key: string]: any },
  userReserves: UserReserve[],
  usdPriceEth: string,
  userId: string,
  poolId: string,
  now: number
) {
  const result = computeRawUserSummaryDataOptimized(
    reserveMap,
    userReserves.map((userReserve) => ({
      ...userReserve,
      reserve: reserveMap[`${userReserve.reserveId}${userReserve.poolId}`],
    })),
    userId,
    usdPriceEth,
    now
  )
  const record: Omit<AaveUser, "id"> & { reservesData: v2.ComputedUserReserve[] } = {
    userId,
    poolId,
    healthFactor: Number(result.healthFactor),
    totalBorrowsETH: Number(normalize(result.totalBorrowsETH, 18)),
    totalBorrowsUSD: 0,
    totalCollateralETH: Number(normalize(result.totalCollateralETH, 18)),
    totalCollateralUSD: 0,
    totalLiquidityETH: Number(normalize(result.totalLiquidityETH, 18)),
    totalLiquidityUSD: 0,
    availableBorrowsETH: 0,
    currentLiquidationThreshold: Number(result.currentLiquidationThreshold),
    currentLoanToValue: Number(result.currentLoanToValue),
    reservesData: result.reservesData as any,
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
  usdPriceEth: string,
  reserves: Reserve[]
) {
  const now = dayjs().unix()
  const formattedReserves = formatReserves(reserves, now)

  const reserveMap = formattedReserves.reduce((acc, reserve) => {
    acc[reserve.id] = reserve
    return acc
  }, {} as { [key: string]: Reserve })
  return users.map((user) => {
    return getUser(reserveMap, user.reserves, usdPriceEth, user._id, poolId, now)
  })
}

export async function refreshUsers(
  poolId: string,
  _users: { _id: string; reserves: UserReserve[] }[],
  usdPriceEth: string,
  reserves: Reserve[]
) {
  const users = await getFormattedUsers(poolId, _users, usdPriceEth, reserves)
  const { db } = await getMongoClient()
  await db.collection("AaveUser").bulkWrite(
    users.map(({ reservesData, ...user }) => ({
      replaceOne: {
        filter: { userId: user.userId, poolId: poolId },
        replacement: user,
        upsert: true,
      },
    })),
    { ordered: false }
  )
  return users
}

export async function updateUsers(gqlSdk: typeof gqlSdkV2, poolId: string) {
  const { db } = await getMongoClient()
  const [{ usdPriceEth, reserves }, users] = await Promise.all([
    getOnChainReserves(poolId),
    db
      .collection("UserReserve")
      .aggregate([
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
      ])
      .toArray(),
  ])
  console.log("USERS", users.length)
  await refreshUsers(poolId, users, usdPriceEth, reserves)
}

export const UpdateUsers = z.object({
  poolId: z.string(),
})

export default resolver.pipe(resolver.zod(UpdateUsers), async ({ poolId }) => {
  if ((Object.values(addresses.ADDRESS_PROVIDERS.MATIC) as string[]).includes(poolId)) {
    //await fetchNextUserReserves(poolId, gqlSdkMatic)
    return await updateUsers(gqlSdkMatic, poolId)
  }
  if ((Object.values(addresses.ADDRESS_PROVIDERS.V2) as string[]).includes(poolId)) {
    //await fetchNextUserReserves(poolId, gqlSdkV2)
    return await updateUsers(gqlSdkV2, poolId)
  }
})