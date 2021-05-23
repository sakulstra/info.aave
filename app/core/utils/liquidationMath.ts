import {
  v2,
  valueToBigNumber,
  valueToZDBigNumber,
  calculateHealthFactorFromBalances,
  getEthAndUsdBalance,
  BigNumberValue,
  BigNumber,
  USD_DECIMALS,
  getCompoundedStableBalance,
  pow10,
  rayToWad,
  rayMul,
  wadToRay,
  calculateCompoundedInterest,
  getReserveNormalizedIncome,
} from "@aave/protocol-js"
import { Reserve } from "db"

export function getEthBalance(
  balance: BigNumberValue,
  priceInEth: BigNumberValue,
  decimals: number
) {
  const balanceInEth = valueToZDBigNumber(balance)
    .multipliedBy(priceInEth)
    .dividedBy(pow10(decimals))
  return balanceInEth.toString()
}

export function getCumulatedInterest(
  _reserveIndex: BigNumberValue,
  _reserveRate: BigNumberValue,
  _lastUpdateTimestamp: number,
  currentTimestamp: number
) {
  const compoundedInterest = calculateCompoundedInterest(
    _reserveRate,
    currentTimestamp,
    _lastUpdateTimestamp
  )
  return rayMul(compoundedInterest, _reserveIndex)
}

export function getCompoundedBalance(
  _principalBalance: BigNumberValue,
  cumulatedInterest: BigNumberValue
): BigNumber {
  const principalBalance = valueToZDBigNumber(_principalBalance)
  if (principalBalance.eq("0")) {
    return principalBalance
  }

  const principalBalanceRay = wadToRay(principalBalance)

  return rayToWad(rayMul(principalBalanceRay, cumulatedInterest))
}

export function getLinearBalance(balance: BigNumberValue, reserveNormalizedIncome: BigNumber) {
  return rayToWad(rayMul(wadToRay(balance), reserveNormalizedIncome))
}

export function computeUserReserveData(
  poolReserve: v2.ReserveData & {
    reserveNormalizedIncome: BigNumber
    cumulatedInterest: BigNumber
  },
  userReserve: v2.UserReserveData,
  currentTimestamp: number
) {
  const {
    price: { priceInEth },
    decimals,
  } = poolReserve
  const underlyingBalance = getLinearBalance(
    userReserve.scaledATokenBalance,
    poolReserve.reserveNormalizedIncome
  ).toString()
  const underlyingBalanceETH = getEthBalance(underlyingBalance, priceInEth, decimals)

  const variableBorrows = getCompoundedBalance(
    userReserve.scaledVariableDebt,
    poolReserve.cumulatedInterest
  ).toString()

  const variableBorrowsETH = getEthBalance(variableBorrows, priceInEth, decimals)

  const stableBorrows = getCompoundedStableBalance(
    userReserve.principalStableDebt,
    userReserve.stableBorrowRate,
    userReserve.stableBorrowLastUpdateTimestamp,
    currentTimestamp
  ).toString()

  const stableBorrowsETH = getEthBalance(stableBorrows, priceInEth, decimals)

  return {
    ...userReserve,
    underlyingBalance,
    underlyingBalanceETH,
    variableBorrows,
    variableBorrowsETH,
    stableBorrows,
    stableBorrowsETH,
    totalBorrows: valueToZDBigNumber(variableBorrows).plus(stableBorrows).toString(),
    totalBorrowsETH: valueToZDBigNumber(variableBorrowsETH).plus(stableBorrowsETH).toString(),
  }
}

export function computeRawUserSummaryDataOptimized(
  poolReservesData: {
    [key: string]: v2.ReserveData & {
      reserveNormalizedIncome: BigNumber
      cumulatedInterest: BigNumber
    }
  },
  rawUserReserves: v2.UserReserveData[],
  userId: string,
  usdPriceEth: BigNumberValue,
  currentTimestamp: number
) {
  let totalLiquidityETH = valueToZDBigNumber("0")
  let totalCollateralETH = valueToZDBigNumber("0")
  let totalBorrowsETH = valueToZDBigNumber("0")
  let currentLtv = valueToBigNumber("0")
  let currentLiquidationThreshold = valueToBigNumber("0")

  const userReservesData = rawUserReserves.map((userReserve) => {
    const poolReserve = poolReservesData[userReserve.reserve.id]
    if (!poolReserve) {
      throw new Error("Reserve is not registered on platform, please contact support")
    }
    const computedUserReserve = computeUserReserveData(poolReserve, userReserve, currentTimestamp)
    totalLiquidityETH = totalLiquidityETH.plus(computedUserReserve.underlyingBalanceETH)
    totalBorrowsETH = totalBorrowsETH
      .plus(computedUserReserve.variableBorrowsETH)
      .plus(computedUserReserve.stableBorrowsETH)

    // asset enabled as collateral
    if (poolReserve.usageAsCollateralEnabled && userReserve.usageAsCollateralEnabledOnUser) {
      totalCollateralETH = totalCollateralETH.plus(computedUserReserve.underlyingBalanceETH)
      currentLtv = currentLtv.plus(
        valueToBigNumber(computedUserReserve.underlyingBalanceETH).multipliedBy(
          poolReserve.baseLTVasCollateral
        )
      )
      currentLiquidationThreshold = currentLiquidationThreshold.plus(
        valueToBigNumber(computedUserReserve.underlyingBalanceETH).multipliedBy(
          poolReserve.reserveLiquidationThreshold
        )
      )
    }
    return computedUserReserve
  })

  if (currentLtv.gt(0)) {
    currentLtv = currentLtv.div(totalCollateralETH).decimalPlaces(0, BigNumber.ROUND_DOWN)
  }
  if (currentLiquidationThreshold.gt(0)) {
    currentLiquidationThreshold = currentLiquidationThreshold
      .div(totalCollateralETH)
      .decimalPlaces(0, BigNumber.ROUND_DOWN)
  }

  const healthFactor = calculateHealthFactorFromBalances(
    totalCollateralETH,
    totalBorrowsETH,
    currentLiquidationThreshold
  )

  return {
    id: userId,
    totalLiquidityETH: totalLiquidityETH.toString(),
    totalCollateralETH: totalCollateralETH.toString(),
    totalBorrowsETH: totalBorrowsETH.toString(),
    currentLoanToValue: currentLtv.toString(),
    currentLiquidationThreshold: currentLiquidationThreshold.toString(),
    healthFactor: healthFactor.toString(),
    reservesData: userReservesData,
  }
}

export const formatReserves = (reserves: Reserve[], now: number) => {
  return reserves.map((r) => ({
    ...r,
    aTokenAddress: r.aTokenId,
    stableDebtTokenAddress: r.sTokenId,
    variableDebtTokenAddress: r.vTokenId,
    price: {
      priceInEth: r.priceInEth,
    },
    reserveNormalizedIncome: getReserveNormalizedIncome(
      r.liquidityRate,
      r.liquidityIndex,
      r.lastUpdateTimestamp,
      now
    ),
    cumulatedInterest: getCumulatedInterest(
      r.variableBorrowIndex,
      r.variableBorrowRate,
      r.lastUpdateTimestamp,
      now
    ),
  }))
}
