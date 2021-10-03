import { MongoClient } from "mongodb"

export const mongoClient = new MongoClient(process.env.DATABASE_URL as string)

export async function getMongoClient() {
  await mongoClient.connect()
  const db = mongoClient.db()
  db.collection("User").createIndex({ userId: 1, poolId: 1 }, { unique: true, background: true })
  db.collection("User").createIndex({ healthFactor: 1, poolId: 1 }, { background: true })
  db.collection("UserReserve").createIndex(
    { userId: 1, poolId: 1, reserveId: 1 },
    { unique: true, background: true }
  )
  db.collection("UserReserve").createIndex({ currentTotalDebt: 1 })
  db.collection("UserReserve").createIndex({ scaledATokenBalance: 1 })
  db.collection("UserReserve").createIndex({ usageAsCollateralEnabledOnUser: 1 })
  db.collection("Deposit").createIndex({ poolId: 1, timestamp: -1 })
  db.collection("Deposit").createIndex({ id: 1 }, { unique: true })
  db.collection("Withdrawal").createIndex({ poolId: 1, timestamp: -1 })
  db.collection("Withdrawal").createIndex({ id: 1 }, { unique: true })
  db.collection("Borrow").createIndex({ poolId: 1, timestamp: -1 })
  db.collection("Borrow").createIndex({ id: 1 }, { unique: true })
  db.collection("Repay").createIndex({ poolId: 1, timestamp: -1 })
  db.collection("Repay").createIndex({ id: 1 }, { unique: true })
  db.collection("UserReserve").createIndex({ poolId: 1, lastUpdateTimestamp: -1 })
  db.collection("RatesHistoryCache").createIndex({ poolId: 1, timestamp: 1, network: 1 })
  return { client: mongoClient, db }
}
