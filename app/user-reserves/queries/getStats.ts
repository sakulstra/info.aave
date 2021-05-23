import { resolver } from "blitz"
import dayjs from "dayjs"
import db, { Prisma } from "db"

interface GetFormattedUserReservesInput
  extends Pick<Prisma.FormattedUserReserveFindManyArgs, "where"> {}

export default resolver.pipe(async ({ where }: GetFormattedUserReservesInput) => {
  const [reserves, emptyReserves, activeReserves24h, activeReserves30d] = await Promise.all([
    db.formattedUserReserve.count({ where }),
    db.formattedUserReserve.count({
      where: { scaledATokenBalance: 0, currentTotalDebt: 0, ...where },
    }),
    db.formattedUserReserve.count({
      where: { lastUpdateTimestamp: { gte: dayjs().unix() - 60 * 60 * 24 }, ...where },
    }),
    db.formattedUserReserve.count({
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
