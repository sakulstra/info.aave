import { resolver } from "blitz"
import db from "db"

export default resolver.pipe(async () => {
  return {
    reserves: await db.reserve.findMany({
      select: { underlyingAsset: true, symbol: true, poolId: true },
      orderBy: { symbol: "asc" },
    }),
  }
})
