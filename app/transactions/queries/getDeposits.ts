import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetDepositsInput
  extends Pick<Prisma.DepositFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(async ({ where, orderBy, skip = 0, take = 100 }: GetDepositsInput) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const { items, hasMore, nextPage, count } = await paginate({
    skip,
    take,
    count: () => db.deposit.count({ where }),
    query: (paginateArgs) =>
      db.deposit.findMany({
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
})
