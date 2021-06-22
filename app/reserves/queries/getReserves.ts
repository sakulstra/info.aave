import { calculateAverageRate, v2 } from "@aave/protocol-js"
import { resolver } from "blitz"
import dayjs from "dayjs"
import db, { Prisma } from "db"
import { getMongoClient } from "db/mongo"

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

export interface GetReservesInput extends Pick<Prisma.ReserveFindManyArgs, "where"> {}

export default resolver.pipe(async ({ where }: GetReservesInput) => {
  // const { db } = await getMongoClient()
  // might be a solution with mongo 5, but not right now as on 4.4 $expr doesn't use indexes...
  /*const reserves2 = await db
    .collection("Reserve")
    .aggregate([
      {
        $lookup: {
          from: "ReserveHistoryItem",
          let: {
            reserveId: "$_id",
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    {
                      $eq: ["$reserveId", "$$reserveId"],
                    },
                    {
                      $lte: ["$timestamp", dayjs().unix() - 30 * 24 * 60 * 60],
                    },
                  ],
                },
              },
            },
            {
              $sort: {
                timestamp: -1,
              },
            },
            {
              $limit: 1,
            },
          ],
          as: "ago30d",
        },
      },
      {
        $lookup: {
          from: "ReserveHistoryItem",
          let: {
            reserveId: "$_id",
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    {
                      $eq: ["$reserveId", "$$reserveId"],
                    },
                    {
                      $lte: ["$timestamp", dayjs().unix() - 90 * 24 * 60 * 60],
                    },
                  ],
                },
              },
            },
            {
              $sort: {
                timestamp: -1,
              },
            },
            {
              $limit: 1,
            },
          ],
          as: "ago90d",
        },
      },
      {
        $unwind: {
          path: "$ago30d",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $unwind: {
          path: "$ago90d",
          preserveNullAndEmptyArrays: true,
        },
      },
    ])
    .toArray()
    */

  const reserves = await db.reserve.findMany({ where })
  const historyItems30dAgo = await Promise.all(
    reserves.map((reserve) =>
      db.reserveHistoryItem.findFirst({
        where: {
          reserveId: reserve.id,
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
          reserveId: reserve.id,
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
            historyItems30dAgo[ix] //reserve.ago30d
          ),
          ...getAverageRates<"avg90Days">(
            "avg90Days",
            { ...reserve, timestamp: reserve.lastUpdateTimestamp },
            historyItems90dAgo[ix] //reserve.ago90d
          ),
        }
      }),
      dayjs().unix()
    ),
  }
})
