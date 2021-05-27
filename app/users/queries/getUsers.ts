import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetAaveUserReservesInput
  extends Pick<Prisma.AaveUserFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  async ({ where, orderBy, skip = 0, take = 100 }: GetAaveUserReservesInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const { items, hasMore, nextPage, count } = await paginate({
      skip,
      take,
      count: () => db.aaveUser.count({ where }),
      query: (paginateArgs) =>
        db.aaveUser.findMany({
          ...paginateArgs,
          where,
          orderBy,
          select: {
            lastUpdateTimestamp: true,
            healthFactor: true,
            totalBorrowsETH: true,
            totalCollateralETH: true,
            totalLiquidityETH: true,
            userId: true,
            poolId: true,
            id: true,
          },
        }),
    })

    return {
      items,
      nextPage,
      hasMore,
      count,
    }
  }
)