import { CHAINS } from "app/core/constants"
import db from "db"
import { gqlSdkV2 } from "integrations/subgraph"

const LIMIT = 1000

const reserveParamsIdToPoolReserve = (rawReserveId: string) => {
  const [, , reserveId, poolId] = rawReserveId.split("0x")
  return { reserveId: `0x${reserveId}`, poolId: `0x${poolId}` }
}

export const fetchReserveParamsHistoryItems = async (
  chain: keyof typeof CHAINS,
  gqlClient: typeof gqlSdkV2
) => {
  const historyItem = await db.reserveHistoryItem.findFirst({
    where: { chain },
    select: { timestamp: true },
    orderBy: { timestamp: "desc" },
  })

  const result = await gqlClient.query({
    reserveParamsHistoryItems: [
      {
        first: LIMIT,
        orderBy: "timestamp",
        where: {
          timestamp_gte: historyItem?.timestamp || 0,
        },
      },
      {
        id: true,
        timestamp: true,
        totalLiquidity: true,
        availableLiquidity: true,
        liquidityIndex: true,
        liquidityRate: true,
        variableBorrowIndex: true,
        variableBorrowRate: true,
        priceInEth: true,
        priceInUsd: true,
        utilizationRate: true,
        stableBorrowRate: true,
        lifetimeFlashLoanPremium: true,
        lifetimeReserveFactorAccrued: true,
        lifetimeDepositorsInterestEarned: true,
        lifetimeFlashLoans: true,
        lifetimeScaledVariableDebt: true,
        lifetimePrincipalStableDebt: true,
        lifetimeCurrentVariableDebt: true,
      },
    ],
  })
  const requests = result.reserveParamsHistoryItems.map((record) => {
    const { reserveId, poolId } = reserveParamsIdToPoolReserve(record.id)
    return { ...record, chain, reserveId, poolId }
  })
  console.log(`writing ${requests.length} reserveParamsHistoryItems`)
  if (requests?.length) {
    await db.reserveHistoryItem.createMany({
      data: requests,
      skipDuplicates: true,
    })
  }
  if (result.reserveParamsHistoryItems.length === LIMIT) {
    return (
      result.reserveParamsHistoryItems.length +
      (await fetchReserveParamsHistoryItems(chain, gqlClient))
    )
  }
  return result.reserveParamsHistoryItems.length
}
