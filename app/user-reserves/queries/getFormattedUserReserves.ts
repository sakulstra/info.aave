import { paginate, resolver } from "blitz"
import dayjs from "dayjs"
import db, { Prisma } from "db"
import { getOnChainReserves } from "integrations/conracts/poolDataProvider"
import { computeUserReserveData, formatReserves } from "app/core/utils/liquidationMath"
import { getOrm } from "db/mongo"
import { UserReserve } from "db/entities/UserReserve"

// deduplicate
const clean = (obj) => Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null))

export interface GetUserReservesInput
  extends Pick<Prisma.UserReserveFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

/**
 * unfinished endpoint to return calculated user-data for a reserve
 */
export default resolver.pipe(
  async ({ where, orderBy, skip = 0, take = 100 }: GetUserReservesInput) => {
    if (!where?.poolId) return "you need to provide a poolId"
    if (!where?.reserveId) return "you need to provide a reserveId"
    // TODO: don't fetch all reserves when we only need one
    const now = dayjs().unix()
    const reserves = await getOnChainReserves(where.poolId)
    const poolReserve = formatReserves(reserves.reserves as any, now).find(
      (reserve) => reserve.id === where.reserveId
    )

    const orm = await getOrm()
    const repo = orm.em.getRepository(UserReserve)

    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const { items, hasMore, nextPage, count } = await paginate({
      skip,
      take,
      count: () => db.userReserve.count({ where }),
      query: async (paginateArgs) => {
        const userReserves = await repo.find(clean(where), {
          // offset: paginateArgs.skip,
          // limit: paginateArgs.take,
          having: where,
          // populate: true,
        })
        console.log(userReserves.length)
        return userReserves
          .map((userReserve) =>
            computeUserReserveData(
              poolReserve as any,
              { ...userReserve, reserve: poolReserve } as any,
              now
            )
          )
          .map(({ _id, poolId, reserve, reserveId, ...rest }: any) => rest)
          .filter(
            (r) =>
              r.underlyingBalance !== "0" || r.variableBorrows !== "0" || r.stableBorrows !== "0"
          )
      },
    })

    return items
  }
)
