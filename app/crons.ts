import cron from "node-cron"
// import { addresses } from "./core/constants"
// import { updateUsers } from "./users/mutations/updateUsers"
import { refreshAll, refreshUsers } from "./refresh/mutations/refreshAll"

// fetch all new transactions
cron.schedule("*/5 * * * *", () => {
  refreshAll()
})

// update users (calculation & db intensive)
cron.schedule("*/20 * * * *", () => {
  refreshUsers()
})
