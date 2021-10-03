import { addresses } from "../constants"

export function explorerLink({ poolId, tx }) {
  const fixedTx = tx.replace(/:.*/, "")
  if (Object.values(addresses.ADDRESS_PROVIDERS.POLYGON).includes(poolId)) {
    return `https://polygonscan.com/tx/${fixedTx}`
  }
  if (Object.values(addresses.ADDRESS_PROVIDERS.AVALANCHE).includes(poolId)) {
    return `https://cchain.explorer.avax.network/tx/${fixedTx}`
  }
  return `https://etherscan.io/tx/${fixedTx}`
}
