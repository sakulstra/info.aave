import {
  FieldsSelection,
  GraphqlOperation,
  ClientOptions,
  Observable,
} from '@genql/runtime'
import { SubscriptionClient } from 'subscriptions-transport-ws'
export * from './schema'
import {
  QueryRequest,
  QueryPromiseChain,
  Query,
  SubscriptionRequest,
  SubscriptionObservableChain,
  Subscription,
} from './schema'
export declare const createClient: (options?: ClientOptions) => Client
export declare const everything: { __scalar: boolean }
export declare const version: string

export interface Client {
  wsClient?: SubscriptionClient

  query<R extends QueryRequest>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<Query, R>>

  subscription<R extends SubscriptionRequest>(
    request: R & { __name?: string },
  ): Observable<FieldsSelection<Subscription, R>>

  chain: {
    query: QueryPromiseChain

    subscription: SubscriptionObservableChain
  }
}

export type QueryResult<fields extends QueryRequest> = FieldsSelection<
  Query,
  fields
>

export declare const generateQueryOp: (
  fields: QueryRequest & { __name?: string },
) => GraphqlOperation
export type SubscriptionResult<
  fields extends SubscriptionRequest
> = FieldsSelection<Subscription, fields>

export declare const generateSubscriptionOp: (
  fields: SubscriptionRequest & { __name?: string },
) => GraphqlOperation

export declare const enumATokenBalanceHistoryItemOrderBy = {
  id: 'id',
  userReserve: 'userReserve',
  balance: 'balance',
  userBalanceIndex: 'userBalanceIndex',
  interestRedirectionAddress: 'interestRedirectionAddress',
  redirectedBalance: 'redirectedBalance',
  timestamp: 'timestamp',
} as const

export declare const enumATokenOrderBy = {
  id: 'id',
  pool: 'pool',
  underlyingAssetAddress: 'underlyingAssetAddress',
  underlyingAssetDecimals: 'underlyingAssetDecimals',
} as const

export declare const enumBorrowRateMode = {
  None: 'None',
  Stable: 'Stable',
  Variable: 'Variable',
} as const

export declare const enumBorrowOrderBy = {
  id: 'id',
  pool: 'pool',
  user: 'user',
  reserve: 'reserve',
  userReserve: 'userReserve',
  amount: 'amount',
  borrowRate: 'borrowRate',
  borrowRateMode: 'borrowRateMode',
  accruedBorrowInterest: 'accruedBorrowInterest',
  referrer: 'referrer',
  timestamp: 'timestamp',
} as const

export declare const enumChainlinkAggregatorOrderBy = {
  id: 'id',
  oracleAsset: 'oracleAsset',
} as const

export declare const enumContractToPoolMappingOrderBy = {
  id: 'id',
  pool: 'pool',
} as const

export declare const enumDepositOrderBy = {
  id: 'id',
  pool: 'pool',
  user: 'user',
  reserve: 'reserve',
  userReserve: 'userReserve',
  amount: 'amount',
  referrer: 'referrer',
  timestamp: 'timestamp',
} as const

export declare const enumFlashLoanOrderBy = {
  id: 'id',
  pool: 'pool',
  reserve: 'reserve',
  target: 'target',
  amount: 'amount',
  totalFee: 'totalFee',
  protocolFee: 'protocolFee',
  timestamp: 'timestamp',
} as const

export declare const enumLiquidationCallOrderBy = {
  id: 'id',
  pool: 'pool',
  user: 'user',
  collateralReserve: 'collateralReserve',
  collateralUserReserve: 'collateralUserReserve',
  collateralAmount: 'collateralAmount',
  principalReserve: 'principalReserve',
  principalUserReserve: 'principalUserReserve',
  principalAmount: 'principalAmount',
  liquidator: 'liquidator',
  timestamp: 'timestamp',
} as const

export declare const enumOrderDirection = {
  asc: 'asc',
  desc: 'desc',
} as const

export declare const enumOriginationFeeLiquidationOrderBy = {
  id: 'id',
  pool: 'pool',
  user: 'user',
  collateralReserve: 'collateralReserve',
  collateralUserReserve: 'collateralUserReserve',
  principalReserve: 'principalReserve',
  principalUserReserve: 'principalUserReserve',
  feeLiquidated: 'feeLiquidated',
  liquidatedCollateralForFee: 'liquidatedCollateralForFee',
  timestamp: 'timestamp',
} as const

export declare const enumPoolConfigurationHistoryItemOrderBy = {
  id: 'id',
  pool: 'pool',
  lendingPool: 'lendingPool',
  lendingPoolCore: 'lendingPoolCore',
  lendingPoolParametersProvider: 'lendingPoolParametersProvider',
  lendingPoolManager: 'lendingPoolManager',
  lendingPoolConfigurator: 'lendingPoolConfigurator',
  lendingPoolLiquidationManager: 'lendingPoolLiquidationManager',
  lendingPoolDataProvider: 'lendingPoolDataProvider',
  proxyPriceProvider: 'proxyPriceProvider',
  lendingRateOracle: 'lendingRateOracle',
  feeProvider: 'feeProvider',
  timestamp: 'timestamp',
} as const

export declare const enumPoolOrderBy = {
  id: 'id',
  protocol: 'protocol',
  lendingPool: 'lendingPool',
  lendingPoolCore: 'lendingPoolCore',
  lendingPoolParametersProvider: 'lendingPoolParametersProvider',
  lendingPoolManager: 'lendingPoolManager',
  lendingPoolConfigurator: 'lendingPoolConfigurator',
  lendingPoolLiquidationManager: 'lendingPoolLiquidationManager',
  lendingPoolDataProvider: 'lendingPoolDataProvider',
  proxyPriceProvider: 'proxyPriceProvider',
  lendingRateOracle: 'lendingRateOracle',
  feeProvider: 'feeProvider',
  history: 'history',
  lastUpdateTimestamp: 'lastUpdateTimestamp',
  reserves: 'reserves',
  depositHistory: 'depositHistory',
  redeemUnderlyingHistory: 'redeemUnderlyingHistory',
  borrowHistory: 'borrowHistory',
  swapHistory: 'swapHistory',
  usageAsCollateralHistory: 'usageAsCollateralHistory',
  rebalanceStableBorrowRateHistory: 'rebalanceStableBorrowRateHistory',
  repayHistory: 'repayHistory',
  flashLoanHistory: 'flashLoanHistory',
  liquidationCallHistory: 'liquidationCallHistory',
  originationFeeLiquidationHistory: 'originationFeeLiquidationHistory',
} as const

export declare const enumPriceHistoryItemOrderBy = {
  id: 'id',
  asset: 'asset',
  price: 'price',
  timestamp: 'timestamp',
} as const

export declare const enumPriceOracleAssetPlatform = {
  Simple: 'Simple',
  Uniswap: 'Uniswap',
} as const

export declare const enumPriceOracleAssetType = {
  Simple: 'Simple',
  Composite: 'Composite',
} as const

export declare const enumPriceOracleAssetOrderBy = {
  id: 'id',
  oracle: 'oracle',
  priceInEth: 'priceInEth',
  priceSource: 'priceSource',
  isFallbackRequired: 'isFallbackRequired',
  type: 'type',
  platform: 'platform',
  dependentAssets: 'dependentAssets',
  lastUpdateTimestamp: 'lastUpdateTimestamp',
  priceHistory: 'priceHistory',
  fromChainlinkSourcesRegistry: 'fromChainlinkSourcesRegistry',
} as const

export declare const enumPriceOracleOrderBy = {
  id: 'id',
  proxyPriceProvider: 'proxyPriceProvider',
  usdPriceEth: 'usdPriceEth',
  usdPriceEthMainSource: 'usdPriceEthMainSource',
  usdPriceEthFallbackRequired: 'usdPriceEthFallbackRequired',
  fallbackPriceOracle: 'fallbackPriceOracle',
  tokens: 'tokens',
  usdPriceEthHistory: 'usdPriceEthHistory',
  tokensWithFallback: 'tokensWithFallback',
  lastUpdateTimestamp: 'lastUpdateTimestamp',
} as const

export declare const enumProtocolOrderBy = {
  id: 'id',
  pools: 'pools',
} as const

export declare const enumRebalanceStableBorrowRateOrderBy = {
  id: 'id',
  pool: 'pool',
  user: 'user',
  reserve: 'reserve',
  userReserve: 'userReserve',
  borrowRateFrom: 'borrowRateFrom',
  borrowRateTo: 'borrowRateTo',
  accruedBorrowInterest: 'accruedBorrowInterest',
  timestamp: 'timestamp',
} as const

export declare const enumRedeemUnderlyingOrderBy = {
  id: 'id',
  pool: 'pool',
  user: 'user',
  reserve: 'reserve',
  userReserve: 'userReserve',
  amount: 'amount',
  timestamp: 'timestamp',
} as const

export declare const enumReferrerOrderBy = {
  id: 'id',
  deposits: 'deposits',
  borrows: 'borrows',
} as const

export declare const enumRepayOrderBy = {
  id: 'id',
  pool: 'pool',
  user: 'user',
  reserve: 'reserve',
  userReserve: 'userReserve',
  amountAfterFee: 'amountAfterFee',
  fee: 'fee',
  timestamp: 'timestamp',
} as const

export declare const enumReserveConfigurationHistoryItemOrderBy = {
  id: 'id',
  reserve: 'reserve',
  usageAsCollateralEnabled: 'usageAsCollateralEnabled',
  borrowingEnabled: 'borrowingEnabled',
  stableBorrowRateEnabled: 'stableBorrowRateEnabled',
  isActive: 'isActive',
  isFreezed: 'isFreezed',
  reserveInterestRateStrategy: 'reserveInterestRateStrategy',
  baseLTVasCollateral: 'baseLTVasCollateral',
  reserveLiquidationThreshold: 'reserveLiquidationThreshold',
  reserveLiquidationBonus: 'reserveLiquidationBonus',
  timestamp: 'timestamp',
} as const

export declare const enumReserveParamsHistoryItemOrderBy = {
  id: 'id',
  reserve: 'reserve',
  variableBorrowRate: 'variableBorrowRate',
  variableBorrowIndex: 'variableBorrowIndex',
  utilizationRate: 'utilizationRate',
  stableBorrowRate: 'stableBorrowRate',
  averageStableBorrowRate: 'averageStableBorrowRate',
  liquidityIndex: 'liquidityIndex',
  liquidityRate: 'liquidityRate',
  totalLiquidity: 'totalLiquidity',
  totalLiquidityAsCollateral: 'totalLiquidityAsCollateral',
  availableLiquidity: 'availableLiquidity',
  totalBorrows: 'totalBorrows',
  totalBorrowsVariable: 'totalBorrowsVariable',
  totalBorrowsStable: 'totalBorrowsStable',
  priceInEth: 'priceInEth',
  priceInUsd: 'priceInUsd',
  timestamp: 'timestamp',
  lifetimeFlashloanDepositorsFee: 'lifetimeFlashloanDepositorsFee',
  lifetimeFlashloanProtocolFee: 'lifetimeFlashloanProtocolFee',
  lifetimeOriginationFee: 'lifetimeOriginationFee',
  lifetimeDepositorsInterestEarned: 'lifetimeDepositorsInterestEarned',
  aTokenTotalSupply: 'aTokenTotalSupply',
  lifetimeRepayments: 'lifetimeRepayments',
  lifetimeWithdrawals: 'lifetimeWithdrawals',
  lifetimeLiquidity: 'lifetimeLiquidity',
  lifetimeBorrows: 'lifetimeBorrows',
} as const

export declare const enumReserveOrderBy = {
  id: 'id',
  underlyingAsset: 'underlyingAsset',
  pool: 'pool',
  symbol: 'symbol',
  name: 'name',
  decimals: 'decimals',
  usageAsCollateralEnabled: 'usageAsCollateralEnabled',
  borrowingEnabled: 'borrowingEnabled',
  stableBorrowRateEnabled: 'stableBorrowRateEnabled',
  isActive: 'isActive',
  isFreezed: 'isFreezed',
  price: 'price',
  reserveInterestRateStrategy: 'reserveInterestRateStrategy',
  optimalUtilisationRate: 'optimalUtilisationRate',
  variableRateSlope1: 'variableRateSlope1',
  variableRateSlope2: 'variableRateSlope2',
  stableRateSlope1: 'stableRateSlope1',
  stableRateSlope2: 'stableRateSlope2',
  baseVariableBorrowRate: 'baseVariableBorrowRate',
  baseLTVasCollateral: 'baseLTVasCollateral',
  reserveLiquidationThreshold: 'reserveLiquidationThreshold',
  reserveLiquidationBonus: 'reserveLiquidationBonus',
  utilizationRate: 'utilizationRate',
  totalLiquidity: 'totalLiquidity',
  totalLiquidityAsCollateral: 'totalLiquidityAsCollateral',
  availableLiquidity: 'availableLiquidity',
  totalBorrows: 'totalBorrows',
  totalBorrowsStable: 'totalBorrowsStable',
  totalBorrowsVariable: 'totalBorrowsVariable',
  liquidityRate: 'liquidityRate',
  variableBorrowRate: 'variableBorrowRate',
  stableBorrowRate: 'stableBorrowRate',
  averageStableBorrowRate: 'averageStableBorrowRate',
  liquidityIndex: 'liquidityIndex',
  variableBorrowIndex: 'variableBorrowIndex',
  aToken: 'aToken',
  lastUpdateTimestamp: 'lastUpdateTimestamp',
  lifetimeDepositorsInterestEarned: 'lifetimeDepositorsInterestEarned',
  aTokenTotalSupply: 'aTokenTotalSupply',
  lifetimeLiquidity: 'lifetimeLiquidity',
  lifetimeBorrows: 'lifetimeBorrows',
  lifetimeBorrowsStable: 'lifetimeBorrowsStable',
  lifetimeBorrowsVariable: 'lifetimeBorrowsVariable',
  lifetimeRepayments: 'lifetimeRepayments',
  lifetimeWithdrawals: 'lifetimeWithdrawals',
  lifetimeLiquidated: 'lifetimeLiquidated',
  lifetimeFeeOriginated: 'lifetimeFeeOriginated',
  lifetimeFeeCollected: 'lifetimeFeeCollected',
  lifetimeFlashLoans: 'lifetimeFlashLoans',
  lifetimeFlashloanDepositorsFee: 'lifetimeFlashloanDepositorsFee',
  lifetimeFlashloanProtocolFee: 'lifetimeFlashloanProtocolFee',
  userReserves: 'userReserves',
  depositHistory: 'depositHistory',
  redeemUnderlyingHistory: 'redeemUnderlyingHistory',
  borrowHistory: 'borrowHistory',
  usageAsCollateralHistory: 'usageAsCollateralHistory',
  swapHistory: 'swapHistory',
  rebalanceStableBorrowRateHistory: 'rebalanceStableBorrowRateHistory',
  repayHistory: 'repayHistory',
  flashLoanHistory: 'flashLoanHistory',
  liquidationCallHistory: 'liquidationCallHistory',
  originationFeeLiquidationHistory: 'originationFeeLiquidationHistory',
  paramsHistory: 'paramsHistory',
  configurationHistory: 'configurationHistory',
  deposits: 'deposits',
} as const

export declare const enumSwapOrderBy = {
  id: 'id',
  pool: 'pool',
  user: 'user',
  reserve: 'reserve',
  userReserve: 'userReserve',
  borrowRateFrom: 'borrowRateFrom',
  borrowRateModeFrom: 'borrowRateModeFrom',
  borrowRateTo: 'borrowRateTo',
  borrowRateModeTo: 'borrowRateModeTo',
  accruedBorrowInterest: 'accruedBorrowInterest',
  timestamp: 'timestamp',
} as const

export declare const enumUsageAsCollateralOrderBy = {
  id: 'id',
  pool: 'pool',
  user: 'user',
  reserve: 'reserve',
  userReserve: 'userReserve',
  fromState: 'fromState',
  toState: 'toState',
  timestamp: 'timestamp',
} as const

export declare const enumUsdEthPriceHistoryItemOrderBy = {
  id: 'id',
  oracle: 'oracle',
  price: 'price',
  timestamp: 'timestamp',
} as const

export declare const enumUserBorrowHistoryItemOrderBy = {
  id: 'id',
  userReserve: 'userReserve',
  totalBorrows: 'totalBorrows',
  borrowRate: 'borrowRate',
  borrowRateMode: 'borrowRateMode',
  originationFee: 'originationFee',
  timestamp: 'timestamp',
} as const

export declare const enumUserReserveOrderBy = {
  id: 'id',
  pool: 'pool',
  reserve: 'reserve',
  user: 'user',
  usageAsCollateralEnabledOnUser: 'usageAsCollateralEnabledOnUser',
  userBalanceIndex: 'userBalanceIndex',
  principalATokenBalance: 'principalATokenBalance',
  redirectedBalance: 'redirectedBalance',
  interestRedirectionAddress: 'interestRedirectionAddress',
  interestRedirectionAllowance: 'interestRedirectionAllowance',
  principalBorrows: 'principalBorrows',
  borrowRate: 'borrowRate',
  borrowRateMode: 'borrowRateMode',
  variableBorrowIndex: 'variableBorrowIndex',
  originationFee: 'originationFee',
  lastUpdateTimestamp: 'lastUpdateTimestamp',
  aTokenBalanceHistory: 'aTokenBalanceHistory',
  borrowStateHistory: 'borrowStateHistory',
  usageAsCollateralHistory: 'usageAsCollateralHistory',
  depositHistory: 'depositHistory',
  redeemUnderlyingHistory: 'redeemUnderlyingHistory',
  borrowHistory: 'borrowHistory',
  swapHistory: 'swapHistory',
  rebalanceStableBorrowRateHistory: 'rebalanceStableBorrowRateHistory',
  repayHistory: 'repayHistory',
  liquidationCallHistory: 'liquidationCallHistory',
  originationFeeLiquidationHistory: 'originationFeeLiquidationHistory',
} as const

export declare const enumUserTransactionOrderBy = {
  id: 'id',
  pool: 'pool',
  user: 'user',
  timestamp: 'timestamp',
} as const

export declare const enumUserOrderBy = {
  id: 'id',
  borrowedReservesCount: 'borrowedReservesCount',
  reserves: 'reserves',
  depositHistory: 'depositHistory',
  redeemUnderlyingHistory: 'redeemUnderlyingHistory',
  usageAsCollateralHistory: 'usageAsCollateralHistory',
  borrowHistory: 'borrowHistory',
  swapHistory: 'swapHistory',
  rebalanceStableBorrowRateHistory: 'rebalanceStableBorrowRateHistory',
  repayHistory: 'repayHistory',
  liquidationCallHistory: 'liquidationCallHistory',
  originationFeeLiquidationHistory: 'originationFeeLiquidationHistory',
} as const

export declare const enumSubgraphErrorPolicy = {
  allow: 'allow',
  deny: 'deny',
} as const
