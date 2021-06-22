import { Entity, Property } from "@mikro-orm/core"
import { BaseEntity } from "./BaseEntity"

@Entity({ collection: "Reserve" })
export class Reserve extends BaseEntity {
  @Property()
  symbol!: string
}
