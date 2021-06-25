import { Entity, IdentifiedReference, OneToOne, Property } from "@mikro-orm/core"
import { BaseEntity } from "./BaseEntity"
import { Reserve } from "./Reserve"

@Entity({ collection: "UserReserve" })
export class UserReserve extends BaseEntity {
  @Property()
  userId!: string

  @Property()
  poolId!: string

  @Property()
  underlyingAsset!: string

  @Property()
  principalStableDebt!: string

  @Property()
  scaledATokenBalance!: string

  @Property()
  scaledVariableDebt!: string

  @Property()
  currentTotalDebt!: string

  @Property()
  stableBorrowRate!: string

  @Property()
  variableBorrowIndex!: string

  @Property()
  lastUpdateTimestamp!: number

  @Property()
  stableBorrowLastUpdateTimestamp!: number

  @Property()
  usageAsCollateralEnabledOnUser!: boolean

  @Property()
  reserveId!: string

  @OneToOne({ entity: () => Reserve, fieldName: "collateralReserveId" })
  reserve!: IdentifiedReference<Reserve>
}
