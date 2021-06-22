import { resolver } from "blitz"
import db, { Prisma } from "db"

export interface GetUserReservesInput extends Pick<Prisma.UserFindManyArgs, "where"> {}

export default resolver.pipe(async ({ where }: GetUserReservesInput) => {
  const [total, borrowers, liquidityProviders, hfDangerZone, abandoned] = await Promise.all([
    db.user.count({ where }),
    db.user.count({
      where: { totalBorrowsETH: { gt: 0 }, ...where },
    }),
    db.user.count({
      where: { totalLiquidityETH: { gt: 0 }, ...where },
    }),
    db.user.count({
      where: { healthFactor: { gt: 1, lte: 1.2 }, ...where },
    }),
    db.user.count({
      where: { totalLiquidityETH: { equals: 0 }, ...where },
    }),
  ])

  return {
    total,
    borrowers,
    liquidityProviders,
    hfDangerZone,
    abandoned,
  }
})
