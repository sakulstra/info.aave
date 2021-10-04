export type FlashLoan = {
  _id: string
  initiatorId: string
  poolId: string
  reserveId: string
  underlyingAsset: string
  amount: number
  totalFee: number
  timestamp: number
}
