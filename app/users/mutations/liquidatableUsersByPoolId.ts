import prisma from "db"
import { resolver } from "blitz"
import { gqlSdkV2, gqlSdkMatic } from "integrations/subgraph"
import { getOnChainReserves } from "integrations/conracts/poolDataProvider"
import { addresses } from "app/core/constants"
import { fetchNextUserReserves } from "app/refresh/_updateUserReserve"
import { getMongoClient } from "db/mongo"
import { getFormattedUsers } from "./updateUsers"
import * as z from "zod"

async function updateUsers(gqlSdk: typeof gqlSdkV2, poolId: string) {
  const MIN_HF = 1.5
  const { db } = await getMongoClient()
  const userIds = await prisma.aaveUser.findMany({
    where: { poolId: poolId, healthFactor: { lte: MIN_HF } },
    select: { userId: true, poolId: true },
  })
  const users = await db
    .collection("UserReserve")
    .aggregate([
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
    ])
    .toArray()
  console.log(`USERS BELOW ${MIN_HF}:`, users.length)
  const { reserves, usdPriceEth } = await getOnChainReserves(poolId)
  console.time("formatting")
  const formattedUsers = getFormattedUsers(poolId, users, usdPriceEth, reserves)
  console.timeEnd("formatting")
  return formattedUsers
}

export const LiquidatableUsers = z.object({
  poolId: z.string(),
})

export default resolver.pipe(resolver.zod(LiquidatableUsers), async ({ poolId }) => {
  if ((Object.values(addresses.ADDRESS_PROVIDERS.MATIC) as string[]).includes(poolId)) {
    await fetchNextUserReserves(poolId, gqlSdkMatic)
    return (await updateUsers(gqlSdkMatic, poolId)).filter(
      (u) => u.healthFactor !== -1 && u.healthFactor < 1
    )
  }
  if ((Object.values(addresses.ADDRESS_PROVIDERS.V2) as string[]).includes(poolId)) {
    await fetchNextUserReserves(poolId, gqlSdkV2)
    return (await updateUsers(gqlSdkV2, poolId)).filter(
      (u) => u.healthFactor !== -1 && u.healthFactor < 1
    )
  }
})
