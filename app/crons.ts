import cron from "node-cron"
// import { addresses } from "./core/constants"
// import { updateUsers } from "./users/mutations/updateUsers"
// import "./bot/main"
import { refreshAll } from "./refresh/mutations/refreshAll"

refreshAll()

cron.schedule("*/30 * * * *", () => {
  console.log("refresh")
  refreshAll()
})
