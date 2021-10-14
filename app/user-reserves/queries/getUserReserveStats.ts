import { resolver } from "blitz"
import dayjs from "dayjs"
import db, { Prisma } from "db"

export interface GetUserReservesInput extends Pick<Prisma.UserReserveFindManyArgs, "where"> {}

export default resolver.pipe(async ({ where }: GetUserReservesInput) => {
  const [reserves, emptyReserves, activeReserves24h, activeReserves30d] = await Promise.all([
    db.userReserve.count({ where }),
    db.userReserve.count({
      where: { scaledATokenBalance: "0", currentTotalDebt: "0", ...where },
    }),
    db.userReserve.count({
      where: { lastUpdateTimestamp: { gte: dayjs().unix() - 60 * 60 * 24 }, ...where },
    }),
    db.userReserve.count({
      where: { lastUpdateTimestamp: { gte: dayjs().unix() - 60 * 60 * 24 * 30 }, ...where },
    }),
  ])

  return {
    emptyReserves: emptyReserves,
    nonEmptyReserves: reserves - emptyReserves,
    activeReserves24h,
    activeReserves30d,
  }
})
