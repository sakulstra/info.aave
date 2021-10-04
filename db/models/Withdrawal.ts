export type Withdrawal = {
  _id: string
  userId: string
  poolId: string
  reserveId: string
  underlyingAsset: string
  onBehalfOfId: string
  amount: number
  timestamp: number
}
