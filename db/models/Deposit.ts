export type Deposit = {
  _id: string
  userId: string
  poolId: string
  reserveId: string
  underlyingAsset: string
  onBehalfOfId: string
  referrerId: string | null
  amount: number
  timestamp: number
}
