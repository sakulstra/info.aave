import { addresses, CHAINS } from "app/core/constants"
import { updateUsers } from "app/users/mutations/updateUsers"
import { resolver } from "blitz"
import { gqlSdkMatic, gqlSdkV1, gqlSdkV2 } from "integrations/subgraph"
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
  const promises: Promise<any>[] = []
  if (process.env.MODE !== "BOT") {
    promises.push(
      updateReserves(gqlSdkV2, addresses.ADDRESS_PROVIDERS.V2.AAVE),
      updateReserves(gqlSdkV2, addresses.ADDRESS_PROVIDERS.V2.AMM),
      updateReserves(gqlSdkMatic, addresses.ADDRESS_PROVIDERS.POLYGON.AAVE),
      ...Object.values(addresses.ADDRESS_PROVIDERS.V1)
        .map((poolId) => {
          return [
            fetchNextLiquidations(poolId, gqlSdkV1),
            //fetchNextDeposits(poolId, gqlSdkV2),
            //fetchNextBorrows(poolId, gqlSdkV2),
            //fetchNextRepays(poolId, gqlSdkV2),
            //fetchNextWithdrawals(poolId, gqlSdkV2),
            //fetchNextFlashLoans(poolId, gqlSdkV2),
            //fetchNextUserReserves(poolId, gqlSdkV2),
          ]
        })
        .flat(),
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
      ...Object.values(addresses.ADDRESS_PROVIDERS.POLYGON)
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
      fetchReserveParamsHistoryItems(CHAINS.ETHEREUM, gqlSdkV2),
      fetchReserveParamsHistoryItems(CHAINS.POLYGON, gqlSdkMatic)
    )
  }
  promises.push(
    ...Object.values(addresses.ADDRESS_PROVIDERS.V2).map((poolId) =>
      fetchNextUserReserves(poolId, gqlSdkV2)
    ),
    ...Object.values(addresses.ADDRESS_PROVIDERS.POLYGON).map((poolId) =>
      fetchNextUserReserves(poolId, gqlSdkMatic)
    )
  )
  await promises
  console.log("txnUpdates", promises)
  await Promise.all([
    ...Object.values(addresses.ADDRESS_PROVIDERS.POLYGON).map((poolId) => updateUsers(poolId)),
    ...Object.values(addresses.ADDRESS_PROVIDERS.V2).map((poolId) => updateUsers(poolId)),
  ])
}

export default resolver.pipe(async () => {
  return refreshAll()
})
