import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

export interface GetUserReservesInput
  extends Pick<Prisma.UserReserveFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  async ({ where, orderBy, skip = 0, take = 100 }: GetUserReservesInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const { items, hasMore, nextPage, count } = await paginate({
      skip,
      take,
      count: () => db.userReserve.count({ where }),
      query: (paginateArgs) =>
        db.userReserve.findMany({
          ...paginateArgs,
          where,
          orderBy,
          include: { reserve: true },
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
