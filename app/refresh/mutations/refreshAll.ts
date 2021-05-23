import { addresses, CHAINS } from "app/core/constants"
import { updateUsers } from "app/users/mutations/updateUsers"
import { resolver } from "blitz"
import { getMongoClient } from "db/mongo"
import { gqlSdkMatic, gqlSdkV2 } from "integrations/subgraph"
import { fetchReserveParamsHistoryItems } from "../_updateReserveParamsHistoryItems"
import { updateReserves } from "../_updateReserves"
import {
  fetchNextBorrows,
  fetchNextDeposits,
  fetchNextFlashLoans,
  fetchNextLiquidations,
  fetchNextRepays,
  fetchNextWithdrawals,
} from "../_updateTransactions"
import { fetchNextUserReserves } from "../_updateUserReserve"

export async function refreshAll() {
  const promises = await Promise.all([
    updateReserves(gqlSdkV2, addresses.ADDRESS_PROVIDERS.V2.AAVE),
    updateReserves(gqlSdkV2, addresses.ADDRESS_PROVIDERS.V2.AMM),
    updateReserves(gqlSdkMatic, addresses.ADDRESS_PROVIDERS.MATIC.AAVE),
    ...Object.values(addresses.ADDRESS_PROVIDERS.V2)
      .map((poolId) => {
        return [
          fetchNextLiquidations(poolId, gqlSdkV2),
          fetchNextDeposits(poolId, gqlSdkV2),
          fetchNextBorrows(poolId, gqlSdkV2),
          fetchNextRepays(poolId, gqlSdkV2),
          fetchNextWithdrawals(poolId, gqlSdkV2),
          fetchNextFlashLoans(poolId, gqlSdkV2),
        ]
      })
      .flat(),
    ...Object.values(addresses.ADDRESS_PROVIDERS.MATIC)
      .map((poolId) => {
        return [
          fetchNextLiquidations(poolId, gqlSdkMatic),
          fetchNextDeposits(poolId, gqlSdkMatic),
          fetchNextBorrows(poolId, gqlSdkMatic),
          fetchNextRepays(poolId, gqlSdkMatic),
          fetchNextWithdrawals(poolId, gqlSdkMatic),
          fetchNextFlashLoans(poolId, gqlSdkMatic),
        ]
      })
      .flat(),
    // fetchReserveParamsHistoryItems(CHAINS.ETHEREUM, gqlSdkV2),
    // fetchReserveParamsHistoryItems(CHAINS.MATIC, gqlSdkMatic),
  ])
  console.log("txnUpdates", promises)
  await Promise.all([
    ...Object.values(addresses.ADDRESS_PROVIDERS.V2).map((poolId) =>
      fetchNextUserReserves(poolId, gqlSdkV2)
    ),
    ...Object.values(addresses.ADDRESS_PROVIDERS.MATIC).map((poolId) =>
      fetchNextUserReserves(poolId, gqlSdkMatic)
    ),
  ])
  for (const poolId of Object.values(addresses.ADDRESS_PROVIDERS.MATIC) as string[]) {
    //await fetchNextUserReserves(poolId, gqlSdkMatic)
    await updateUsers(gqlSdkMatic, poolId)
  }
  for (const poolId of Object.values(addresses.ADDRESS_PROVIDERS.V2) as string[]) {
    //await fetchNextUserReserves(poolId, gqlSdkV2)
    await updateUsers(gqlSdkV2, poolId)
  }
}

export default resolver.pipe(async () => {
  return refreshAll()
})
