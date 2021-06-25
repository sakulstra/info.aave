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
      .collection("User")
      .createIndex({ userId: 1, poolId: 1 }, { unique: true, background: true })
    mongoClient
      .db("aave")
      .collection("User")
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
    mongoClient.db("aave").collection("Deposit").createIndex({ poolId: 1, timestamp: -1 })
    mongoClient.db("aave").collection("Withdrawal").createIndex({ poolId: 1, timestamp: -1 })
    mongoClient.db("aave").collection("Borrow").createIndex({ poolId: 1, timestamp: -1 })
    mongoClient.db("aave").collection("Repay").createIndex({ poolId: 1, timestamp: -1 })
    mongoClient
      .db("aave")
      .collection("UserReserve")
      .createIndex({ poolId: 1, lastUpdateTimestamp: -1 })
    mongoClient
      .db("aave")
      .collection("ReserveHistoryItem")
      .createIndex({ poolId: 1, timestamp: -1 })
  }
  return { client: mongoClient, db: mongoClient.db("aave") }
}
