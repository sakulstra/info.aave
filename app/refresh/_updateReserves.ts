import db from "db"
import { gqlSdkV2 } from "integrations/subgraph"

const fixSymbol = (symbol: string) => {
  return symbol
    .toUpperCase()
    .replace(/^A?AMM/, "")
    .replace(/^A?AM/, "")
}

export async function updateReserves(gqlSdk: typeof gqlSdkV2, poolId: string) {
  const reserve = await db.reserve.findFirst({
    where: { poolId },
    select: { lastUpdateTimestamp: true },
    orderBy: { lastUpdateTimestamp: "desc" },
  })

  const result = await gqlSdk.query({
    reserves: [
      {
        orderBy: "lastUpdateTimestamp",
        where: { lastUpdateTimestamp_gte: reserve?.lastUpdateTimestamp || 0, pool: poolId },
      },
      {
        id: true,
        underlyingAsset: true,
        name: true,
        symbol: true,
        decimals: true,
        liquidityRate: true,
        liquidityIndex: true,
        variableBorrowIndex: true,
        averageStableRate: true,
        baseLTVasCollateral: true,
        usageAsCollateralEnabled: true,
        reserveLiquidationBonus: true,
        lastUpdateTimestamp: true,
        reserveLiquidationThreshold: true,
        stableBorrowRateEnabled: true,
        stableBorrowRate: true,
        isFrozen: true,
        isActive: true,
        borrowingEnabled: true,
        reserveFactor: true,
        optimalUtilisationRate: true,
        stableRateSlope1: true,
        stableRateSlope2: true,
        variableRateSlope1: true,
        variableRateSlope2: true,
        stableDebtLastUpdateTimestamp: true,
        availableLiquidity: true,
        baseVariableBorrowRate: true,
        variableBorrowRate: true,
        totalPrincipalStableDebt: true,
        totalScaledVariableDebt: true,
        lifetimeFlashLoanPremium: true,
        lifetimeReserveFactorAccrued: true,
        lifetimeDepositorsInterestEarned: true,
        lifetimeFlashLoans: true,
        lifetimeLiquidated: true,
        aToken: {
          id: true,
        },
        vToken: {
          id: true,
        },
        sToken: {
          id: true,
        },
        price: {
          priceInEth: true,
        },
      },
    ],
  })
  console.log(`writing ${result.reserves.length} reserves`)
  const requests = result.reserves.map(({ id, aToken, vToken, sToken, price, ...rest }) => {
    const ids = id.split("0x")
    const poolId = `0x${ids[2]}`
    const record = {
      ...rest,
      aTokenId: aToken.id,
      vTokenId: vToken.id,
      sTokenId: sToken.id,
      poolId,
      priceInEth: price.priceInEth,
      symbol: fixSymbol(rest.symbol),
    }
    return db.reserve.upsert({
      where: {
        underlyingAsset_poolId: { poolId, underlyingAsset: rest.underlyingAsset },
      },
      create: { id, ...record },
      update: record,
    })
  })
  if (requests?.length) await db.$transaction(requests)
  return requests.length
}
