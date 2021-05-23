import { calculateAverageRate, v2 } from "@aave/protocol-js"
import { resolver } from "blitz"
import dayjs from "dayjs"
import db, { Prisma } from "db"

const getAverageRates = <T extends string>(
  name: T,
  previousReserve: {
    variableBorrowIndex: string
    liquidityIndex: string
    timestamp: number
  } | null,
  currentReserve: {
    variableBorrowIndex: string
    liquidityIndex: string
    timestamp: number
  } | null
) => {
  return {
    [`${name}VariableBorrowRate`]:
      previousReserve && currentReserve
        ? calculateAverageRate(
            previousReserve.variableBorrowIndex,
            currentReserve.variableBorrowIndex,
            previousReserve.timestamp,
            currentReserve.timestamp
          )
        : "0",
    [`${name}LiquidityRate`]:
      previousReserve && currentReserve
        ? calculateAverageRate(
            previousReserve.liquidityIndex,
            currentReserve.liquidityIndex,
            previousReserve.timestamp,
            currentReserve.timestamp
          )
        : "0",
  } as {
    [K in T as `${K}VariableBorrowRate` | `${K}LiquidityRate`]: string
  }
}

interface GetReservesInput extends Pick<Prisma.ReserveFindManyArgs, "where"> {}

export default resolver.pipe(async ({ where }: GetReservesInput) => {
  const reserves = await db.reserve.findMany({ where })
  const historyItems30dAgo = await Promise.all(
    reserves.map((reserve) =>
      db.reserveHistoryItem.findFirst({
        where: {
          reserveId: reserve.underlyingAsset,
          poolId: reserve.poolId,
          timestamp: { lte: dayjs().unix() - 30 * 24 * 60 * 60 },
        },
        orderBy: { timestamp: "desc" },
      })
    )
  )
  const historyItems90dAgo = await Promise.all(
    reserves.map((reserve) =>
      db.reserveHistoryItem.findFirst({
        where: {
          reserveId: reserve.underlyingAsset,
          poolId: reserve.poolId,
          timestamp: { lte: dayjs().unix() - 90 * 24 * 60 * 60 },
        },
        orderBy: { timestamp: "desc" },
      })
    )
  )
  return {
    reserves: v2.formatReserves(
      reserves.map((reserve, ix) => {
        return {
          ...reserve,
          ...getAverageRates<"avg30Days">(
            "avg30Days",
            { ...reserve, timestamp: reserve.lastUpdateTimestamp },
            historyItems30dAgo[ix]
          ),
          ...getAverageRates<"avg90Days">(
            "avg90Days",
            { ...reserve, timestamp: reserve.lastUpdateTimestamp },
            historyItems90dAgo[ix]
          ),
        }
      }),
      dayjs().unix()
    ),
  }
})
