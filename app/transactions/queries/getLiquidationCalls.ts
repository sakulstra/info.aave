import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

export interface GetLiquidationsInput
  extends Pick<Prisma.LiquidationCallFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  async ({ where, orderBy, skip = 0, take = 100 }: GetLiquidationsInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const { items, hasMore, nextPage, count } = await paginate({
      skip,
      take,
      count: () => db.liquidationCall.count({ where }),
      query: (paginateArgs) =>
        db.liquidationCall.findMany({
          ...paginateArgs,
          where,
          orderBy,
          include: { collateralReserve: true, principalReserve: true },
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
