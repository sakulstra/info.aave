const { MongoMemoryReplSet } = require("mongodb-memory-server")
const path = require("path")

// TODO: create path if it doesn't exist
console.log("you have to create a database folder one level above")
const dbPath = path.join(process.cwd(), "../database")

const replSet = new MongoMemoryReplSet({
  instanceOpts: [{ port: 27017, dbPath }],
  replSet: { storageEngine: "wiredTiger", dbName: "aave", name: "rs0" },
})

async function start() {
  await replSet.waitUntilRunning()
  const uri = await replSet.getUri()
  console.log(uri)
}

start()
