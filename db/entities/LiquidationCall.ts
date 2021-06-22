import { Entity, IdentifiedReference, OneToOne, Property } from "@mikro-orm/core"
import { BaseEntity } from "./BaseEntity"
import { Reserve } from "./Reserve"

@Entity({ collection: "LiquidationCall" })
export class LiquidationCall extends BaseEntity {
  @Property()
  userId!: string

  @Property()
  liquidatorId!: string

  @Property()
  poolId!: string

  @Property()
  collateralReserveId!: string

  @OneToOne({ entity: () => Reserve, fieldName: "collateralReserveId" })
  collateralReserve!: IdentifiedReference<Reserve>

  @Property()
  collateralUnderlyingAsset!: string

  @Property()
  collateralAmount!: number

  @Property()
  principalReserveId!: string

  @OneToOne({ entity: () => Reserve, fieldName: "principalReserveId" })
  principalReserve!: IdentifiedReference<Reserve>

  @Property()
  principalUnderlyingAsset!: string

  @Property()
  principalAmount!: number

  @Property()
  timestamp!: number
}
