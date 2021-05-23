import cron from "node-cron"
import { refreshAll } from "./refresh/mutations/refreshAll"

console.log("crons!!!")
cron.schedule("*/3 * * * *", () => {
  console.log("refresh")
  refreshAll()
})
