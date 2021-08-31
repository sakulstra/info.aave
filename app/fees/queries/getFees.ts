import { Network, BigNumber, pow10 } from "@aave/protocol-js"
import { addresses } from "app/core/constants"
import { resolver } from "blitz"
import { getMongoClient } from "db/mongo"
import { gqlSdkMatic, gqlSdkV1, gqlSdkV2 } from "integrations/subgraph"
import { z } from "zod"

type V1Reserve = {
  lifetimeFlashloanDepositorsFee: string
  lifetimeFlashloanProtocolFee: string
  lifetimeOriginationFee: string
  lifetimeDepositorsInterestEarned: string
  priceInUsd: string
  reserve: {
    decimals: number
    symbol: string
  }
}

function calculateV1Fees({
  reserves,
  reservesOneDayAgo,
}: {
  reserves: V1Reserve[]
  reservesOneDayAgo: V1Reserve[]
}) {
  return reserves.reduce((acc, reserve) => {
    const oneDayAgo = reservesOneDayAgo.find((r) => r.reserve.symbol === reserve.reserve.symbol)
    toUsd(
      new BigNumber(reserve.lifetimeDepositorsInterestEarned).minus(
        oneDayAgo?.lifetimeDepositorsInterestEarned || 0
      ),
      reserve.reserve.decimals,
      reserve.priceInUsd
    )
    return acc
      .plus(
        toUsd(
          new BigNumber(reserve.lifetimeDepositorsInterestEarned).minus(
            oneDayAgo?.lifetimeDepositorsInterestEarned || 0
          ),
          reserve.reserve.decimals,
          reserve.priceInUsd
        )
      )
      .plus(
        toUsd(
          new BigNumber(reserve.lifetimeOriginationFee).minus(
            oneDayAgo?.lifetimeOriginationFee || 0
          ),
          reserve.reserve.decimals,
          reserve.priceInUsd
        )
      )
      .plus(
        toUsd(
          new BigNumber(reserve.lifetimeFlashloanDepositorsFee).minus(
            oneDayAgo?.lifetimeFlashloanDepositorsFee || 0
          ),
          reserve.reserve.decimals,
          reserve.priceInUsd
        )
      )
      .plus(
        toUsd(
          new BigNumber(reserve.lifetimeFlashloanProtocolFee).minus(
            oneDayAgo?.lifetimeFlashloanProtocolFee || 0
          ),
          reserve.reserve.decimals,
          reserve.priceInUsd
        )
      )
  }, new BigNumber(0))
}

async function getV1ReservesSnapshot(
  gqlClient: typeof gqlSdkV1,
  network: string,
  poolId: string,
  timestamp: number,
  forceRefresh: boolean
) {
  const { db } = await getMongoClient()
  const cache = await db.collection("RatesHistoryCache").findOne({ timestamp, network, poolId })
  if (cache && !forceRefresh) return cache.data
  const result = await gqlClient.query({
    reserves: [
      {
        where: {
          pool: poolId,
        },
      },
      {
        id: true,
        paramsHistory: [
          {
            where: { timestamp_lte: timestamp },
            orderBy: "timestamp",
            orderDirection: "desc",
            first: 1,
          },
          {
            id: true,
            priceInUsd: true,
            reserve: {
              decimals: true,
              symbol: true,
            },
            lifetimeFlashloanDepositorsFee: true,
            lifetimeFlashloanProtocolFee: true,
            lifetimeOriginationFee: true,
            lifetimeDepositorsInterestEarned: true,
          },
        ],
      },
    ],
  })
  const reserves = result.reserves.map((r) => r.paramsHistory[0])
  await db
    .collection("RatesHistoryCache")
    .updateOne(
      { timestamp, network, version: 1 },
      { $set: { timestamp, network, poolId, data: reserves } },
      { upsert: true }
    )
  return reserves
}

type V2Reserve = {
  lifetimeFlashLoanPremium: string
  lifetimeReserveFactorAccrued: string
  lifetimeDepositorsInterestEarned: string
  priceInUsd: string
  reserve: {
    decimals: number
    symbol: string
  }
}

function toUsd(value, decimals, usdPrice) {
  return new BigNumber(value).dividedBy(pow10(decimals)).multipliedBy(usdPrice)
}

function calculateV2Fees({
  reserves,
  reservesOneDayAgo,
}: {
  reserves: V2Reserve[]
  reservesOneDayAgo: V2Reserve[]
}) {
  return reserves.reduce((acc, reserve) => {
    const oneDayAgo = reservesOneDayAgo.find((r) => r.reserve.symbol === reserve.reserve.symbol)
    if (!oneDayAgo) return 0
    return acc
      .plus(
        toUsd(
          new BigNumber(reserve.lifetimeDepositorsInterestEarned).minus(
            oneDayAgo?.lifetimeDepositorsInterestEarned || 0
          ),
          reserve.reserve.decimals,
          reserve.priceInUsd
        )
      )
      .plus(
        toUsd(
          new BigNumber(reserve.lifetimeFlashLoanPremium).minus(
            oneDayAgo?.lifetimeFlashLoanPremium || 0
          ),
          reserve.reserve.decimals,
          reserve.priceInUsd
        )
      )
      .plus(
        toUsd(
          new BigNumber(reserve.lifetimeReserveFactorAccrued).minus(
            oneDayAgo?.lifetimeReserveFactorAccrued || 0
          ),
          reserve.reserve.decimals,
          reserve.priceInUsd
        )
      )
  }, new BigNumber(0))
}

async function getV2ReservesSnapshot(
  gqlClient: typeof gqlSdkV2,
  network: string,
  poolId: string,
  timestamp: number,
  forceRefresh: boolean
) {
  const { db } = await getMongoClient()
  const cache = await db.collection("RatesHistoryCache").findOne({ timestamp, network, poolId })
  if (cache && !forceRefresh) return cache.data
  const result = await gqlClient.query({
    reserves: [
      {
        where: {
          pool: poolId,
        },
      },
      {
        id: true,
        paramsHistory: [
          {
            first: 1,
            orderBy: "timestamp",
            where: {
              timestamp_lte: timestamp,
            },
            orderDirection: "desc",
          },
          {
            id: true,
            timestamp: true,
            priceInUsd: true,
            reserve: {
              decimals: true,
              symbol: true,
            },
            lifetimeFlashLoanPremium: true,
            lifetimeReserveFactorAccrued: true,
            lifetimeDepositorsInterestEarned: true,
          },
        ],
      },
    ],
  })
  const reserves = result.reserves.map((r) => r.paramsHistory[0])
  await db
    .collection("RatesHistoryCache")
    .updateOne(
      { timestamp, network, poolId },
      { $set: { poolId, timestamp, network, data: reserves } },
      { upsert: true }
    )
  return reserves
}

export const GetFees = z.object({
  timestamp: z.number(),
  forceRefresh: z.boolean().optional(),
  poolId: z.string(),
})

export default resolver.pipe(
  resolver.zod(GetFees),
  async ({ timestamp, forceRefresh = false, poolId }) => {
    if (timestamp > Math.floor(new Date().getTime() / 1000))
      throw new Error(`Can't query future fees`)
    const oneDayAgo = timestamp - 24 * 60 * 60

    if ((Object.values(addresses.ADDRESS_PROVIDERS.V1) as string[]).includes(poolId)) {
      const mainnetV1 = await getV1ReservesSnapshot(
        gqlSdkV1,
        Network.mainnet,
        poolId,
        timestamp,
        forceRefresh
      )
      const mainnetV1_1d = await getV1ReservesSnapshot(
        gqlSdkV1,
        Network.mainnet,
        poolId,
        oneDayAgo,
        forceRefresh
      )
      return {
        last24hFees: calculateV1Fees({
          reserves: mainnetV1,
          reservesOneDayAgo: mainnetV1_1d,
        }).toString(),
      }
    }
    if ((Object.values(addresses.ADDRESS_PROVIDERS.V2) as string[]).includes(poolId)) {
      const mainnetV2 = await getV2ReservesSnapshot(
        gqlSdkV2,
        Network.mainnet,
        poolId,
        timestamp,
        forceRefresh
      )
      const mainnetV2_1d = await getV2ReservesSnapshot(
        gqlSdkV2,
        Network.mainnet,
        poolId,
        oneDayAgo,
        forceRefresh
      )
      return {
        last24hFees: calculateV2Fees({
          reserves: mainnetV2,
          reservesOneDayAgo: mainnetV2_1d,
        }).toString(),
      }
    }
    if ((Object.values(addresses.ADDRESS_PROVIDERS.POLYGON) as string[]).includes(poolId)) {
      const polygonV2 = await getV2ReservesSnapshot(
        gqlSdkMatic,
        Network.polygon,
        poolId,
        timestamp,
        forceRefresh
      )
      const polygonV2_1d = await getV2ReservesSnapshot(
        gqlSdkMatic,
        Network.polygon,
        poolId,
        oneDayAgo,
        forceRefresh
      )
      return {
        last24hFees: calculateV2Fees({
          reserves: polygonV2,
          reservesOneDayAgo: polygonV2_1d,
        }).toString(),
      }
    }
  }
)
