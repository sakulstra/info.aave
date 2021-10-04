import prisma from "db"
import { resolver } from "blitz"
import { gqlSdkV2, gqlSdkMatic } from "integrations/subgraph"
import { getOnChainReserves } from "integrations/conracts/poolDataProvider"
import { addresses } from "app/core/constants"
import { fetchNextUserReserves } from "app/refresh/_updateUserReserve"
import { getMongoClient } from "db/mongo"
import { getFormattedUsers } from "./updateUsers"
import { z } from "zod"

async function updateUsers(poolId: string) {
  const MIN_HF = 1.4
  const { db } = await getMongoClient()
  const userIds = await db
    .collection("User")
    .find(
      { poolId, healthFactor: { $lte: MIN_HF }, totalBorrowsETH: { $gte: 0.00001 } },
      { projection: { userId: 1 } }
    )
    .toArray()
  const [users, { reserves }] = await Promise.all([
    db
      .collection("UserReserve")
      .aggregate(
        [
          {
            $match: {
              userId: { $in: userIds.map((u) => u.userId) },
              poolId,
              $or: [
                { currentTotalDebt: { $ne: "0" } },
                { scaledATokenBalance: { $ne: "0" }, usageAsCollateralEnabledOnUser: true },
              ],
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
    getOnChainReserves(poolId),
  ])
  console.log(`USERS BELOW ${MIN_HF}:`, users.length)
  // TODO: check type mismatch
  const formattedUsers = getFormattedUsers(poolId, users as any, reserves as any)
  return formattedUsers
}

export const LiquidatableUsers = z.object({
  poolId: z.string(),
})

export async function liquidatableByPoolId(poolId: string) {
  if ((Object.values(addresses.ADDRESS_PROVIDERS.POLYGON) as string[]).includes(poolId)) {
    await fetchNextUserReserves(poolId, gqlSdkMatic).catch((e) =>
      console.log("error fetching data")
    )
    return (await updateUsers(poolId)).filter(
      (u) => u.healthFactor !== -1 && u.healthFactor < 1.000001
    )
  }
  if ((Object.values(addresses.ADDRESS_PROVIDERS.V2) as string[]).includes(poolId)) {
    await fetchNextUserReserves(poolId, gqlSdkV2).catch((e) => console.log("error fetching data"))
    return (await updateUsers(poolId)).filter((u) => u.healthFactor !== -1 && u.healthFactor < 1)
  }
}

export default resolver.pipe(resolver.zod(LiquidatableUsers), async ({ poolId }) => {
  return await liquidatableByPoolId(poolId)
})
