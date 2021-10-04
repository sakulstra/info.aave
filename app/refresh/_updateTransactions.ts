import { normalize } from "@aave/protocol-js"
import db from "db"
import { LiquidationCall } from "db/models/LiquidationCall"
import { Deposit } from "db/models/Deposit"
import { Borrow } from "db/models/Borrow"
import { FlashLoan } from "db/models/FlashLoan"
import { Repay } from "db/models/Repay"
import { Withdrawal } from "db/models/Withdrawal"
import { getMongoClient, ORDER } from "db/mongo"
import { gqlSdkV1, gqlSdkV2 } from "integrations/subgraph"

const LIMIT = 1000

const reserveIdToPoolReserve = (rawReserveId: string) => {
  const [, underlyingAsset, poolId] = rawReserveId.split("0x")
  return { underlyingAsset: `0x${underlyingAsset}`, poolId: `0x${poolId}` }
}

export const fetchNextLiquidations = async (
  poolId: string,
  gqlClient: typeof gqlSdkV2 | typeof gqlSdkV1
) => {
  const { db: nativeDb } = await getMongoClient()
  const liquidationCall = await nativeDb.collection<LiquidationCall>("LiquidationCall").findOne(
    {
      poolId,
    },
    { sort: { timestamp: ORDER.DESC } }
  )

  const result = await (gqlClient as typeof gqlSdkV2).query({
    liquidationCalls: [
      {
        first: LIMIT,
        orderBy: "timestamp",
        where: {
          timestamp_gte: liquidationCall?.timestamp || 0,
          pool: poolId,
        },
      },
      {
        id: true,
        user: {
          id: true,
        },
        liquidator: true,
        collateralReserve: {
          id: true,
          decimals: true,
        },
        collateralAmount: true,
        principalReserve: {
          id: true,
          decimals: true,
        },
        principalAmount: true,
        timestamp: true,
      },
    ],
  })
  const requests = result.liquidationCalls.map(
    ({
      id,
      user,
      collateralReserve,
      principalReserve,
      liquidator,
      collateralAmount,
      principalAmount,
      ...rest
    }) => {
      const { underlyingAsset: collateralUnderlyingAsset, poolId } = reserveIdToPoolReserve(
        collateralReserve.id
      )
      const { underlyingAsset: principalUnderlyingAsset } = reserveIdToPoolReserve(
        principalReserve.id
      )
      // user + reserve + pool
      const record: LiquidationCall = {
        ...rest,
        _id: id,
        userId: user.id,
        poolId,
        liquidatorId: liquidator,
        collateralUnderlyingAsset,
        collateralReserveId: collateralReserve.id,
        principalUnderlyingAsset,
        principalReserveId: principalReserve.id,
        collateralAmount: Number(normalize(collateralAmount, collateralReserve.decimals)),
        principalAmount: Number(normalize(principalAmount, principalReserve.decimals)),
      }
      return record
    }
  )
  console.log(`writing ${requests.length} liquidations`)
  if (requests?.length) {
    await nativeDb
      .collection<LiquidationCall>("LiquidationCall")
      .insertMany(requests, { ordered: false })
      .catch((e) => console.log("ignore write error"))
  }
  if (result.liquidationCalls.length === LIMIT) {
    return result.liquidationCalls.length + (await fetchNextLiquidations(poolId, gqlClient))
  }
  return result.liquidationCalls.length
}

export const fetchNextDeposits = async (poolId: string, gqlClient: typeof gqlSdkV2) => {
  const { db: nativeDb } = await getMongoClient()
  const deposit = await nativeDb.collection<Deposit>("Deposit").findOne(
    {
      poolId,
    },
    { sort: { timestamp: ORDER.DESC } }
  )

  const result = await gqlClient.query({
    deposits: [
      {
        first: LIMIT,
        orderBy: "timestamp",
        where: {
          timestamp_gte: deposit?.timestamp || 0,
          pool: poolId,
        },
      },
      {
        id: true,
        user: {
          id: true,
        },
        onBehalfOf: {
          id: true,
        },
        amount: true,
        reserve: {
          id: true,
          decimals: true,
        },
        referrer: {
          id: true,
        },
        timestamp: true,
      },
    ],
  })
  const requests = result.deposits.map(
    ({ id, user, onBehalfOf, reserve, referrer, amount, ...rest }) => {
      const { underlyingAsset, poolId } = reserveIdToPoolReserve(reserve.id)
      // user + reserve + pool
      const record: Deposit = {
        ...rest,
        _id: id,
        userId: user.id,
        poolId,
        reserveId: reserve.id,
        underlyingAsset,
        onBehalfOfId: onBehalfOf.id,
        referrerId: referrer?.id ?? null,
        amount: Number(normalize(amount, reserve.decimals)),
      }
      return record
    }
  )
  console.log(`writing ${requests.length} deposits`)
  if (requests?.length) {
    await nativeDb
      .collection<Deposit>("Deposit")
      .insertMany(requests, { ordered: false })
      .catch((e) => console.log("ignore write error"))
  }
  if (result.deposits.length === LIMIT) {
    return result.deposits.length + (await fetchNextDeposits(poolId, gqlClient))
  }
  return result.deposits.length
}

export const fetchNextBorrows = async (poolId: string, gqlClient: typeof gqlSdkV2) => {
  const { db: nativeDb } = await getMongoClient()
  const borrow = await db.borrow.findFirst({
    where: { poolId },
    select: { timestamp: true },
    orderBy: { timestamp: "desc" },
  })

  const result = await gqlClient.query({
    borrows: [
      {
        first: LIMIT,
        orderBy: "timestamp",
        where: {
          timestamp_gte: borrow?.timestamp || 0,
          pool: poolId,
        },
      },
      {
        id: true,
        user: {
          id: true,
        },
        onBehalfOf: {
          id: true,
        },
        amount: true,
        reserve: {
          id: true,
          decimals: true,
        },
        referrer: {
          id: true,
        },
        borrowRateMode: true,
        timestamp: true,
      },
    ],
  })
  const requests = result.borrows.map(
    ({ id, user, onBehalfOf, reserve, referrer, amount, ...rest }) => {
      const { underlyingAsset, poolId } = reserveIdToPoolReserve(reserve.id)
      // user + reserve + pool
      const record: Borrow = {
        ...rest,
        _id: id,
        userId: user.id,
        poolId,
        underlyingAsset,
        reserveId: reserve.id,
        onBehalfOfId: onBehalfOf.id,
        referrerId: referrer?.id ?? null,
        amount: Number(normalize(amount, reserve.decimals)),
      }
      return record
    }
  )
  console.log(`writing ${requests.length} borrows`)
  if (requests?.length) {
    await nativeDb
      .collection<Borrow>("Borrow")
      .insertMany(requests, { ordered: false })
      .catch((e) => console.log("ignore write error"))
  }
  if (result.borrows.length === LIMIT) {
    return result.borrows.length + (await fetchNextBorrows(poolId, gqlClient))
  }
  return result.borrows.length
}

export const fetchNextRepays = async (poolId: string, gqlClient: typeof gqlSdkV2) => {
  const { db: nativeDb } = await getMongoClient()
  const repay = await db.repay.findFirst({
    where: { poolId },
    select: { timestamp: true },
    orderBy: { timestamp: "desc" },
  })

  const result = await gqlClient.query({
    repays: [
      {
        first: LIMIT,
        orderBy: "timestamp",
        where: {
          timestamp_gte: repay?.timestamp || 0,
          pool: poolId,
        },
      },
      {
        id: true,
        user: {
          id: true,
        },
        onBehalfOf: {
          id: true,
        },
        amount: true,
        reserve: {
          id: true,
          decimals: true,
        },
        timestamp: true,
      },
    ],
  })
  const requests = result.repays.map(({ id, user, onBehalfOf, reserve, amount, ...rest }) => {
    const { underlyingAsset, poolId } = reserveIdToPoolReserve(reserve.id)
    // user + reserve + pool
    const record: Repay = {
      ...rest,
      _id: id,
      userId: user.id,
      poolId,
      underlyingAsset,
      reserveId: reserve.id,
      onBehalfOfId: onBehalfOf.id,
      amount: Number(normalize(amount, reserve.decimals)),
    }
    return record
  })
  console.log(`writing ${requests.length} repays`)
  if (requests?.length) {
    await nativeDb
      .collection<Repay>("Repay")
      .insertMany(requests, { ordered: false })
      .catch((e) => console.log("ignore write error"))
  }
  if (result.repays.length === LIMIT) {
    return result.repays.length + (await fetchNextRepays(poolId, gqlClient))
  }
  return result.repays.length
}

export const fetchNextWithdrawals = async (poolId: string, gqlClient: typeof gqlSdkV2) => {
  const { db: nativeDb } = await getMongoClient()
  const repay = await db.withdrawal.findFirst({
    where: { poolId },
    select: { timestamp: true },
    orderBy: { timestamp: "desc" },
  })

  const result = await gqlClient.query({
    redeemUnderlyings: [
      {
        first: LIMIT,
        orderBy: "timestamp",
        where: {
          timestamp_gte: repay?.timestamp || 0,
          pool: poolId,
        },
      },
      {
        id: true,
        user: {
          id: true,
        },
        onBehalfOf: {
          id: true,
        },
        amount: true,
        reserve: {
          id: true,
          decimals: true,
        },
        timestamp: true,
      },
    ],
  })
  const requests = result.redeemUnderlyings.map(
    ({ id, user, onBehalfOf, reserve, amount, ...rest }) => {
      const { underlyingAsset, poolId } = reserveIdToPoolReserve(reserve.id)
      // user + reserve + pool
      const record: Withdrawal = {
        ...rest,
        _id: id,
        userId: user.id,
        poolId,
        underlyingAsset,
        reserveId: reserve.id,
        onBehalfOfId: onBehalfOf.id,
        amount: Number(normalize(amount, reserve.decimals)),
      }
      return record
    }
  )
  console.log(`writing ${requests.length} redeems`)
  if (requests?.length) {
    await nativeDb
      .collection<Withdrawal>("Withdrawal")
      .insertMany(requests, { ordered: false })
      .catch((e) => console.log("ignore write error"))
  }
  if (result.redeemUnderlyings.length === LIMIT) {
    return result.redeemUnderlyings.length + (await fetchNextWithdrawals(poolId, gqlClient))
  }
  return result.redeemUnderlyings.length
}

export const fetchNextFlashLoans = async (poolId: string, gqlClient: typeof gqlSdkV2) => {
  const { db: nativeDb } = await getMongoClient()
  const repay = await db.flashLoan.findFirst({
    where: { poolId },
    select: { timestamp: true },
    orderBy: { timestamp: "desc" },
  })

  const result = await gqlClient.query({
    flashLoans: [
      {
        first: LIMIT,
        orderBy: "timestamp",
        where: {
          timestamp_gte: repay?.timestamp || 0,
          pool: poolId,
        },
      },
      {
        id: true,
        initiator: {
          id: true,
        },
        amount: true,
        totalFee: true,
        reserve: {
          id: true,
          decimals: true,
        },
        timestamp: true,
      },
    ],
  })
  const requests = result.flashLoans.map(
    ({ id, initiator, reserve, amount, totalFee, ...rest }) => {
      const { underlyingAsset, poolId } = reserveIdToPoolReserve(reserve.id)
      // user + reserve + pool
      const record: FlashLoan = {
        ...rest,
        _id: id,
        initiatorId: initiator.id,
        poolId,
        reserveId: reserve.id,
        underlyingAsset,
        amount: Number(normalize(amount, reserve.decimals)),
        totalFee: Number(normalize(totalFee, reserve.decimals)),
      }
      return record
    }
  )
  console.log(`writing ${requests.length} flashs`)
  if (requests?.length) {
    await nativeDb
      .collection<FlashLoan>("FlashLoan")
      .insertMany(requests, { ordered: false })
      .catch((e) => console.log("ignore write error"))
  }
  if (result.flashLoans.length === LIMIT) {
    return result.flashLoans.length + (await fetchNextFlashLoans(poolId, gqlClient))
  }
  return result.flashLoans.length
}
