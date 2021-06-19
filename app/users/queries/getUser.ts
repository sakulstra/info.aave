import { resolver } from "blitz"
import db, { Prisma } from "db"

interface GetUserInput
  extends Pick<Prisma.UserFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(async ({ where, orderBy }: GetUserInput) => {
  return {
    items: await db.user.findMany({ where, orderBy }),
  }
})
