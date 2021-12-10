import db from "db"
import { getMongoClient } from "db/mongo"
import { gqlSdkV2 } from "integrations/subgraph"

const LIMIT = 1000

export const fetchNextUserReserves = async (poolId: string, gqlSdk: typeof gqlSdkV2) => {
  const lastUpdated =
    (
      await db.userReserve.findFirst({
        where: { poolId },
        select: { lastUpdateTimestamp: true },
        orderBy: { lastUpdateTimestamp: "desc" },
      })
    )?.lastUpdateTimestamp || 1

  const result = await gqlSdk.query({
    userReserves: [
      {
        subgraphError: "deny",
        first: LIMIT,
        orderBy: "lastUpdateTimestamp",
        orderDirection: "asc",
        where: {
          lastUpdateTimestamp_gte: lastUpdated,
          pool: poolId,
        },
      },
      {
        id: true,
        scaledATokenBalance: true,
        usageAsCollateralEnabledOnUser: true,
        stableBorrowRate: true,
        variableBorrowIndex: true,
        lastUpdateTimestamp: true,
        scaledVariableDebt: true,
        principalStableDebt: true,
        stableBorrowLastUpdateTimestamp: true,
        currentTotalDebt: true,
        reserve: {
          id: true,
          decimals: true,
        },
      },
    ],
  })
  const requests = result.userReserves.map(({ id, reserve, ...rest }) => {
    // user + reserve + pool
    const ids = id.split("0x")
    const userId = `0x${ids[1]}`
    const underlyingAsset = `0x${ids[2]}`
    const poolId = `0x${ids[3]}`
    const record = {
      ...rest,
      userId,
      poolId,
      reserveId: reserve.id,
      underlyingAsset,
      decimals: reserve.decimals,
    }
    return record
  })

  console.log(`writing ${requests.length} userReserves`)
  if (requests?.length) {
    const { db } = await getMongoClient()
    const bulk = db.collection("UserReserve").initializeOrderedBulkOp()
    requests.map((request) => {
      bulk.find({ userId: request.userId, reserveId: request.reserveId }).upsert().updateOne({
        $set: request,
      })
    })
    await bulk.execute()
  }
  if (result.userReserves.length === LIMIT) {
    return result.userReserves.length + (await fetchNextUserReserves(poolId, gqlSdk))
  }
  return result.userReserves.length
}
