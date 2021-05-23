import { resolver } from "blitz"
import db, { Prisma } from "db"

interface GetAaveUserReservesInput extends Pick<Prisma.AaveUserFindManyArgs, "where"> {}

export default resolver.pipe(async ({ where }: GetAaveUserReservesInput) => {
  const [total, borrowers, liquidityProviders, hfDangerZone, abandoned] = await Promise.all([
    db.aaveUser.count({ where }),
    db.aaveUser.count({
      where: { totalBorrowsETH: { gt: 0 }, ...where },
    }),
    db.aaveUser.count({
      where: { totalLiquidityETH: { gt: 0 }, ...where },
    }),
    db.aaveUser.count({
      where: { healthFactor: { gt: 1, lte: 1.2 }, ...where },
    }),
    db.aaveUser.count({
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
