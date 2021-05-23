import { normalize } from "@aave/protocol-js"
import db, { Borrow, Deposit, FlashLoan, LiquidationCall, Repay, Withdrawal } from "db"
import { gqlSdkV2 } from "integrations/subgraph"

const LIMIT = 1000

const reserveIdToPoolReserve = (rawReserveId: string) => {
  const [, reserveId, poolId] = rawReserveId.split("0x")
  return { reserveId: `0x${reserveId}`, poolId: `0x${poolId}` }
}

export const fetchNextLiquidations = async (poolId: string, gqlClient: typeof gqlSdkV2) => {
  const liquidationCall = await db.liquidationCall.findFirst({
    where: { poolId },
    select: { timestamp: true },
    orderBy: { timestamp: "desc" },
  })

  const result = await gqlClient.query({
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
      user,
      collateralReserve,
      principalReserve,
      liquidator,
      collateralAmount,
      principalAmount,
      ...rest
    }) => {
      const { reserveId: collateralReserveId, poolId } = reserveIdToPoolReserve(
        collateralReserve.id
      )
      const { reserveId: principalReserveId } = reserveIdToPoolReserve(principalReserve.id)
      // user + reserve + pool
      const record: LiquidationCall = {
        ...rest,
        userId: user.id,
        poolId,
        liquidatorId: liquidator,
        collateralReserveId,
        principalReserveId,
        collateralAmount: Number(normalize(collateralAmount, collateralReserve.decimals)),
        principalAmount: Number(normalize(principalAmount, principalReserve.decimals)),
      }
      return record
    }
  )
  console.log(`writing ${requests.length} liquidations`)
  if (requests?.length) {
    await db.liquidationCall.createMany({
      data: requests,
      skipDuplicates: true,
    })
  }
  if (result.liquidationCalls.length === LIMIT) {
    return result.liquidationCalls.length + (await fetchNextLiquidations(poolId, gqlClient))
  }
  return result.liquidationCalls.length
}

export const fetchNextDeposits = async (poolId: string, gqlClient: typeof gqlSdkV2) => {
  const deposit = await db.deposit.findFirst({
    where: { poolId },
    select: { timestamp: true },
    orderBy: { timestamp: "desc" },
  })

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
    ({ user, onBehalfOf, reserve, referrer, amount, ...rest }) => {
      const { reserveId, poolId } = reserveIdToPoolReserve(reserve.id)
      // user + reserve + pool
      const record: Deposit = {
        ...rest,
        userId: user.id,
        poolId,
        reserveId,
        onBehalfOfId: onBehalfOf.id,
        referrerId: referrer?.id ?? null,
        amount: Number(normalize(amount, reserve.decimals)),
      }
      return record
    }
  )
  console.log(`writing ${requests.length} deposits`)
  if (requests?.length) {
    await db.deposit.createMany({
      data: requests,
      skipDuplicates: true,
    })
  }
  if (result.deposits.length === LIMIT) {
    return result.deposits.length + (await fetchNextDeposits(poolId, gqlClient))
  }
  return result.deposits.length
}

export const fetchNextBorrows = async (poolId: string, gqlClient: typeof gqlSdkV2) => {
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
    ({ user, onBehalfOf, reserve, referrer, amount, ...rest }) => {
      const { reserveId, poolId } = reserveIdToPoolReserve(reserve.id)
      // user + reserve + pool
      const record: Borrow = {
        ...rest,
        userId: user.id,
        poolId,
        reserveId,
        onBehalfOfId: onBehalfOf.id,
        referrerId: referrer?.id ?? null,
        amount: Number(normalize(amount, reserve.decimals)),
      }
      return record
    }
  )
  console.log(`writing ${requests.length} borrows`)
  if (requests?.length) {
    await db.borrow.createMany({
      data: requests,
      skipDuplicates: true,
    })
  }
  if (result.borrows.length === LIMIT) {
    return result.borrows.length + (await fetchNextBorrows(poolId, gqlClient))
  }
  return result.borrows.length
}

export const fetchNextRepays = async (poolId: string, gqlClient: typeof gqlSdkV2) => {
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
  const requests = result.repays.map(({ user, onBehalfOf, reserve, amount, ...rest }) => {
    const { reserveId, poolId } = reserveIdToPoolReserve(reserve.id)
    // user + reserve + pool
    const record: Repay = {
      ...rest,
      userId: user.id,
      poolId,
      reserveId,
      onBehalfOfId: onBehalfOf.id,
      amount: Number(normalize(amount, reserve.decimals)),
    }
    return record
  })
  console.log(`writing ${requests.length} repays`)
  if (requests?.length) {
    await db.repay.createMany({
      data: requests,
      skipDuplicates: true,
    })
  }
  if (result.repays.length === LIMIT) {
    return result.repays.length + (await fetchNextRepays(poolId, gqlClient))
  }
  return result.repays.length
}

export const fetchNextWithdrawals = async (poolId: string, gqlClient: typeof gqlSdkV2) => {
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
    ({ user, onBehalfOf, reserve, amount, ...rest }) => {
      const { reserveId, poolId } = reserveIdToPoolReserve(reserve.id)
      // user + reserve + pool
      const record: Withdrawal = {
        ...rest,
        userId: user.id,
        poolId,
        reserveId,
        onBehalfOfId: onBehalfOf.id,
        amount: Number(normalize(amount, reserve.decimals)),
      }
      return record
    }
  )
  console.log(`writing ${requests.length} redeems`)
  if (requests?.length) {
    await db.withdrawal.createMany({
      data: requests,
      skipDuplicates: true,
    })
  }
  if (result.redeemUnderlyings.length === LIMIT) {
    return result.redeemUnderlyings.length + (await fetchNextWithdrawals(poolId, gqlClient))
  }
  return result.redeemUnderlyings.length
}

export const fetchNextFlashLoans = async (poolId: string, gqlClient: typeof gqlSdkV2) => {
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
  const requests = result.flashLoans.map(({ initiator, reserve, amount, totalFee, ...rest }) => {
    const { reserveId, poolId } = reserveIdToPoolReserve(reserve.id)
    // user + reserve + pool
    const record: FlashLoan = {
      ...rest,
      initiatorId: initiator.id,
      poolId,
      reserveId,
      amount: Number(normalize(amount, reserve.decimals)),
      totalFee: Number(normalize(totalFee, reserve.decimals)),
    }
    return record
  })
  console.log(`writing ${requests.length} flashs`)
  if (requests?.length) {
    await db.flashLoan.createMany({
      data: requests,
      skipDuplicates: true,
    })
  }
  if (result.flashLoans.length === LIMIT) {
    return result.flashLoans.length + (await fetchNextFlashLoans(poolId, gqlClient))
  }
  return result.flashLoans.length
}
