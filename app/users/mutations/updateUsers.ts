import { resolver } from "blitz"
import { z } from "zod"
import { addresses } from "app/core/constants"
import { getMongoClient } from "db/mongo"
import { User, Reserve, UserReserve } from "db"
import { normalize, v2 } from "@aave/protocol-js"
import dayjs from "dayjs"
import { getOnChainReserves } from "integrations/conracts/poolDataProvider"
import { computeRawUserSummaryDataOptimized, formatReserves } from "app/core/utils/liquidationMath"

export function getUser(
  reserveMap: { [key: string]: any },
  userReserves: UserReserve[],
  userId: string,
  poolId: string,
  now: number
) {
  const result = computeRawUserSummaryDataOptimized(
    reserveMap,
    userReserves.map((userReserve) => ({
      ...userReserve,
      reserve: reserveMap[userReserve.reserveId],
    })),
    userId,
    now
  )
  const record: Omit<User, "id"> & { reservesData: v2.ComputedUserReserve[] } = {
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
  reserves: Reserve[]
) {
  const now = dayjs().unix()
  const formattedReserves = formatReserves(reserves, now)

  const reserveMap = formattedReserves.reduce((acc, reserve) => {
    acc[reserve.id] = reserve
    return acc
  }, {} as { [key: string]: Reserve })
  return users.map((user) => {
    return getUser(reserveMap, user.reserves, user._id, poolId, now)
  })
}

export async function refreshUsers(
  poolId: string,
  _users: { _id: string; reserves: UserReserve[] }[],
  reserves: Reserve[]
) {
  const users = getFormattedUsers(poolId, _users, reserves)
  const { db } = await getMongoClient()
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
  return users
}

export async function updateUsers(poolId: string) {
  const { db } = await getMongoClient()
  const [{ reserves }, users] = await Promise.all([
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
  refreshUsers(poolId, users as any, reserves as any)
}

export const UpdateUsers = z.object({
  poolId: z.string(),
})

export default resolver.pipe(resolver.zod(UpdateUsers), async ({ poolId }) => {
  if ((Object.values(addresses.ADDRESS_PROVIDERS.POLYGON) as string[]).includes(poolId)) {
    //await fetchNextUserReserves(poolId, gqlSdkMatic)
    return await updateUsers(poolId)
  }
  if ((Object.values(addresses.ADDRESS_PROVIDERS.V2) as string[]).includes(poolId)) {
    //await fetchNextUserReserves(poolId, gqlSdkV2)
    return await updateUsers(poolId)
  }
})
