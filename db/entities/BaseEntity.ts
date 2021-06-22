import { PrimaryKey, Property, SerializedPrimaryKey } from "@mikro-orm/core"
// import { ObjectId } from '@mikro-orm/mongodb';

export abstract class BaseEntity {
  @PrimaryKey()
  _id!: string

  @SerializedPrimaryKey()
  id!: string

  // @Property()
  // createdAt = new Date();

  // @Property({ onUpdate: () => new Date() })
  // updatedAt = new Date();
}
