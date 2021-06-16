import { MongoClient } from "mongodb"

export const mongoClient = new MongoClient(process.env.DATABASE_URL as string, {
  useUnifiedTopology: true,
  poolSize: 10,
  // readPreference: "nearest",
})

export async function getMongoClient() {
  if (!mongoClient.isConnected()) {
    await mongoClient.connect()
    mongoClient
      .db("aave")
      .collection("AaveUser")
      .createIndex({ userId: 1, poolId: 1 }, { unique: true, background: true })
    mongoClient
      .db("aave")
      .collection("AaveUser")
      .createIndex({ healthFactor: 1, poolId: 1 }, { background: true })
    mongoClient
      .db("aave")
      .collection("UserReserve")
      .createIndex({ userId: 1, poolId: 1, reserveId: 1 }, { unique: true, background: true })
    mongoClient.db("aave").collection("UserReserve").createIndex({ currentTotalDebt: 1 })
    mongoClient.db("aave").collection("UserReserve").createIndex({ scaledATokenBalance: 1 })
    mongoClient
      .db("aave")
      .collection("UserReserve")
      .createIndex({ usageAsCollateralEnabledOnUser: 1 })
  }
  return { client: mongoClient, db: mongoClient.db("aave") }
}
