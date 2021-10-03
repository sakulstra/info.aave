export type LiquidationCall = {
  _id: string
  userId: string
  liquidatorId: string
  poolId: string
  collateralReserveId: string | null
  collateralUnderlyingAsset: string
  collateralAmount: number
  principalReserveId: string | null
  principalUnderlyingAsset: string
  principalAmount: number
  timestamp: number
}
