import { resolver } from "blitz"
import db, { Prisma } from "db"

interface GetAaveUserInput
  extends Pick<Prisma.AaveUserFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(async ({ where, orderBy }: GetAaveUserInput) => {
  return {
    items: await db.aaveUser.findMany({ where, orderBy }),
  }
})
