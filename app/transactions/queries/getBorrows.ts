import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetBorrowsInput
  extends Pick<Prisma.BorrowFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(async ({ where, orderBy, skip = 0, take = 100 }: GetBorrowsInput) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const { items, hasMore, nextPage, count } = await paginate({
    skip,
    take,
    count: () => db.borrow.count({ where }),
    query: (paginateArgs) =>
      db.borrow.findMany({
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
