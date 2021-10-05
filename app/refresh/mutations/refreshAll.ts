import { addresses, CHAINS } from "app/core/constants"
import { updateUsers } from "app/users/mutations/updateUsers"
import { resolver } from "blitz"
import { gqlSdkAvalanche, gqlSdkMatic, gqlSdkV1, gqlSdkV2 } from "integrations/subgraph"
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
  const promises: Promise<number>[] = []
  promises.push(
    updateReserves(gqlSdkV2, addresses.ADDRESS_PROVIDERS.V2.AAVE),
    updateReserves(gqlSdkV2, addresses.ADDRESS_PROVIDERS.V2.AMM),
    updateReserves(gqlSdkMatic, addresses.ADDRESS_PROVIDERS.POLYGON.AAVE),
    updateReserves(gqlSdkAvalanche, addresses.ADDRESS_PROVIDERS.AVALANCHE.AAVE),
    ...Object.values(addresses.ADDRESS_PROVIDERS.V1)
      .map((poolId) => {
        return [fetchNextLiquidations(poolId, gqlSdkV1)]
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
    ...Object.values(addresses.ADDRESS_PROVIDERS.AVALANCHE)
      .map((poolId) => {
        return [
          fetchNextLiquidations(poolId, gqlSdkAvalanche),
          fetchNextDeposits(poolId, gqlSdkAvalanche),
          fetchNextBorrows(poolId, gqlSdkAvalanche),
          fetchNextRepays(poolId, gqlSdkAvalanche),
          fetchNextWithdrawals(poolId, gqlSdkAvalanche),
          fetchNextFlashLoans(poolId, gqlSdkAvalanche),
        ]
      })
      .flat()
  )
  promises.push(
    ...Object.values(addresses.ADDRESS_PROVIDERS.V2).map((poolId) =>
      fetchNextUserReserves(poolId, gqlSdkV2)
    ),
    ...Object.values(addresses.ADDRESS_PROVIDERS.POLYGON).map((poolId) =>
      fetchNextUserReserves(poolId, gqlSdkMatic)
    ),
    ...Object.values(addresses.ADDRESS_PROVIDERS.AVALANCHE).map((poolId) =>
      fetchNextUserReserves(poolId, gqlSdkAvalanche)
    )
  )
  await Promise.all(promises.flat())
}

export async function refreshUsers() {
  for (const poolId of Object.values(addresses.ADDRESS_PROVIDERS.AVALANCHE)) {
    await updateUsers(poolId)
  }
  for (const poolId of Object.values(addresses.ADDRESS_PROVIDERS.V2)) {
    await updateUsers(poolId)
  }
  for (const poolId of Object.values(addresses.ADDRESS_PROVIDERS.POLYGON)) {
    await updateUsers(poolId)
  }
}

export default resolver.pipe(async () => {
  return refreshAll()
})
