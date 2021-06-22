import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"
import { LiquidationCall } from "db/entities/LiquidationCall"
import { getOrm } from "db/mongo"

const clean = (obj) => Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null))

export interface GetLiquidationsInput
  extends Pick<Prisma.LiquidationCallFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

const order = {
  desc: -1,
  asc: 1,
}

export default resolver.pipe(
  async ({ where, orderBy, skip = 0, take = 100 }: GetLiquidationsInput) => {
    const orderField = orderBy ? Object.keys(orderBy)[0] : "timestamp"
    const orderDirection = orderBy ? Object.values(orderBy)[0] : "desc"
    const orm = await getOrm()
    const repo = orm.em.getRepository(LiquidationCall)
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const { items, hasMore, nextPage, count } = await paginate({
      skip,
      take,
      count: () => db.liquidationCall.count({ where }),
      query: (paginateArgs) =>
        repo.find(clean(where), {
          offset: paginateArgs.skip,
          populate: true,
          limit: paginateArgs.take,
          orderBy: { [orderField]: order[orderDirection] },
          having: where,
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
