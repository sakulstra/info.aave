import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

export interface GetUserReservesInput
  extends Pick<Prisma.UserFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  async ({ where, orderBy, skip = 0, take = 100 }: GetUserReservesInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const { items, hasMore, nextPage, count } = await paginate({
      skip,
      take,
      count: () => db.user.count({ where }),
      query: (paginateArgs) =>
        db.user.findMany({
          ...paginateArgs,
          where,
          orderBy,
          select: {
            lastUpdateTimestamp: true,
            healthFactor: true,
            totalBorrowsUSD: true,
            totalCollateralUSD: true,
            totalLiquidityUSD: true,
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
