import { Entity, Property } from "@mikro-orm/core"
import { BaseEntity } from "./BaseEntity"

@Entity({ collection: "Reserve" })
export class Reserve extends BaseEntity {
  @Property()
  aTokenId!: string

  @Property()
  vTokenId!: string

  @Property()
  sTokenId!: string

  @Property()
  priceInEth!: string

  @Property()
  underlyingAsset!: string

  @Property()
  poolId!: string

  @Property()
  reserveLiquidationBonus!: string

  @Property()
  reserveLiquidationThreshold!: string

  @Property()
  name!: string

  @Property()
  symbol!: string

  @Property()
  liquidityRate!: string

  @Property()
  liquidityIndex!: string

  @Property()
  variableBorrowIndex!: string

  @Property()
  averageStableRate!: string

  @Property()
  stableBorrowRate!: string

  @Property()
  baseLTVasCollateral!: string

  @Property()
  reserveFactor!: string

  @Property()
  stableRateSlope1!: string

  @Property()
  stableRateSlope2!: string

  @Property()
  variableRateSlope1!: string

  @Property()
  variableRateSlope2!: string

  @Property()
  optimalUtilisationRate!: string

  @Property()
  availableLiquidity!: string

  @Property()
  baseVariableBorrowRate!: string

  @Property()
  variableBorrowRate!: string

  @Property()
  totalPrincipalStableDebt!: string

  @Property()
  totalScaledVariableDebt!: string

  @Property()
  stableBorrowRateEnabled!: boolean

  @Property()
  usageAsCollateralEnabled!: boolean

  @Property()
  isActive!: boolean

  @Property()
  isFrozen!: boolean

  @Property()
  borrowingEnabled!: boolean

  @Property()
  stableDebtLastUpdateTimestamp!: number

  @Property()
  lastUpdateTimestamp!: number

  @Property()
  decimals!: number

  @Property()
  lifetimeFlashLoanPremium!: string

  @Property()
  lifetimeReserveFactorAccrued!: string

  @Property()
  lifetimeDepositorsInterestEarned!: string

  @Property()
  lifetimeFlashLoans!: string

  @Property()
  lifetimeLiquidated!: string
}
