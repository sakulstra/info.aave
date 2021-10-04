export type Borrow = {
  _id: string
  userId: string
  poolId: string
  reserveId: string
  underlyingAsset: string
  onBehalfOfId: string
  referrerId: string | null
  amount: number
  borrowRateMode: string
  timestamp: number
}
