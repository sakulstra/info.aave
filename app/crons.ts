import cron from "node-cron"
// import { addresses } from "./core/constants"
// import { updateUsers } from "./users/mutations/updateUsers"
// import "./bot/main"
import { refreshAll, refreshUsers } from "./refresh/mutations/refreshAll"

refreshAll()

cron.schedule("*/5 * * * *", () => {
  refreshAll()
})

cron.schedule("*/20 * * * *", () => {
  refreshUsers()
})
