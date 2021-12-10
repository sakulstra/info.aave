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
  timestamp: 'timestamp',
  scaledATokenBalance: 'scaledATokenBalance',
  currentATokenBalance: 'currentATokenBalance',
  index: 'index',
} as const

export declare const enumATokenOrderBy = {
  id: 'id',
  pool: 'pool',
  underlyingAssetAddress: 'underlyingAssetAddress',
  underlyingAssetDecimals: 'underlyingAssetDecimals',
  tokenContractImpl: 'tokenContractImpl',
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
  onBehalfOf: 'onBehalfOf',
  reserve: 'reserve',
  userReserve: 'userReserve',
  amount: 'amount',
  borrowRate: 'borrowRate',
  borrowRateMode: 'borrowRateMode',
  referrer: 'referrer',
  timestamp: 'timestamp',
  stableTokenDebt: 'stableTokenDebt',
  variableTokenDebt: 'variableTokenDebt',
} as const

export declare const enumChainlinkAggregatorOrderBy = {
  id: 'id',
  oracleAsset: 'oracleAsset',
} as const

export declare const enumChainlinkEnsOrderBy = {
  id: 'id',
  aggregatorAddress: 'aggregatorAddress',
  underlyingAddress: 'underlyingAddress',
  symbol: 'symbol',
} as const

export declare const enumClaimIncentiveCallOrderBy = {
  id: 'id',
  incentivesController: 'incentivesController',
  user: 'user',
  amount: 'amount',
} as const

export declare const enumContractToPoolMappingOrderBy = {
  id: 'id',
  pool: 'pool',
} as const

export declare const enumDepositOrderBy = {
  id: 'id',
  pool: 'pool',
  user: 'user',
  onBehalfOf: 'onBehalfOf',
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
  initiator: 'initiator',
  timestamp: 'timestamp',
} as const

export declare const enumIncentivesControllerOrderBy = {
  id: 'id',
  rewardToken: 'rewardToken',
  rewardTokenDecimals: 'rewardTokenDecimals',
  rewardTokenSymbol: 'rewardTokenSymbol',
  precision: 'precision',
  emissionEndTimestamp: 'emissionEndTimestamp',
  incentivizedActions: 'incentivizedActions',
  claimIncentives: 'claimIncentives',
} as const

export declare const enumIncentivizedActionOrderBy = {
  id: 'id',
  incentivesController: 'incentivesController',
  user: 'user',
  amount: 'amount',
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

export declare const enumMapAssetPoolOrderBy = {
  id: 'id',
  pool: 'pool',
  underlyingAsset: 'underlyingAsset',
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
  active: 'active',
  pool: 'pool',
  lendingPool: 'lendingPool',
  lendingPoolCollateralManager: 'lendingPoolCollateralManager',
  lendingPoolConfiguratorImpl: 'lendingPoolConfiguratorImpl',
  lendingPoolImpl: 'lendingPoolImpl',
  lendingPoolConfigurator: 'lendingPoolConfigurator',
  proxyPriceProvider: 'proxyPriceProvider',
  lendingRateOracle: 'lendingRateOracle',
  configurationAdmin: 'configurationAdmin',
  timestamp: 'timestamp',
} as const

export declare const enumPoolOrderBy = {
  id: 'id',
  protocol: 'protocol',
  lendingPool: 'lendingPool',
  lendingPoolCollateralManager: 'lendingPoolCollateralManager',
  lendingPoolConfiguratorImpl: 'lendingPoolConfiguratorImpl',
  lendingPoolImpl: 'lendingPoolImpl',
  lendingPoolConfigurator: 'lendingPoolConfigurator',
  proxyPriceProvider: 'proxyPriceProvider',
  lendingRateOracle: 'lendingRateOracle',
  configurationAdmin: 'configurationAdmin',
  ethereumAddress: 'ethereumAddress',
  emergencyAdmin: 'emergencyAdmin',
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
  active: 'active',
  paused: 'paused',
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
  usdDependentAssets: 'usdDependentAssets',
  fallbackPriceOracle: 'fallbackPriceOracle',
  tokens: 'tokens',
  usdPriceEthHistory: 'usdPriceEthHistory',
  tokensWithFallback: 'tokensWithFallback',
  lastUpdateTimestamp: 'lastUpdateTimestamp',
  version: 'version',
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
  timestamp: 'timestamp',
} as const

export declare const enumRedeemUnderlyingOrderBy = {
  id: 'id',
  pool: 'pool',
  user: 'user',
  onBehalfOf: 'onBehalfOf',
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
  onBehalfOf: 'onBehalfOf',
  reserve: 'reserve',
  userReserve: 'userReserve',
  amount: 'amount',
  timestamp: 'timestamp',
} as const

export declare const enumReserveConfigurationHistoryItemOrderBy = {
  id: 'id',
  reserve: 'reserve',
  usageAsCollateralEnabled: 'usageAsCollateralEnabled',
  borrowingEnabled: 'borrowingEnabled',
  stableBorrowRateEnabled: 'stableBorrowRateEnabled',
  isActive: 'isActive',
  isFrozen: 'isFrozen',
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
  totalATokenSupply: 'totalATokenSupply',
  totalLiquidityAsCollateral: 'totalLiquidityAsCollateral',
  availableLiquidity: 'availableLiquidity',
  priceInEth: 'priceInEth',
  priceInUsd: 'priceInUsd',
  timestamp: 'timestamp',
  totalScaledVariableDebt: 'totalScaledVariableDebt',
  totalCurrentVariableDebt: 'totalCurrentVariableDebt',
  totalPrincipalStableDebt: 'totalPrincipalStableDebt',
  lifetimePrincipalStableDebt: 'lifetimePrincipalStableDebt',
  lifetimeScaledVariableDebt: 'lifetimeScaledVariableDebt',
  lifetimeCurrentVariableDebt: 'lifetimeCurrentVariableDebt',
  lifetimeLiquidity: 'lifetimeLiquidity',
  lifetimeRepayments: 'lifetimeRepayments',
  lifetimeWithdrawals: 'lifetimeWithdrawals',
  lifetimeBorrows: 'lifetimeBorrows',
  lifetimeLiquidated: 'lifetimeLiquidated',
  lifetimeFlashLoans: 'lifetimeFlashLoans',
  lifetimeFlashLoanPremium: 'lifetimeFlashLoanPremium',
  lifetimeReserveFactorAccrued: 'lifetimeReserveFactorAccrued',
  lifetimeDepositorsInterestEarned: 'lifetimeDepositorsInterestEarned',
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
  isFrozen: 'isFrozen',
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
  totalATokenSupply: 'totalATokenSupply',
  totalLiquidityAsCollateral: 'totalLiquidityAsCollateral',
  availableLiquidity: 'availableLiquidity',
  totalPrincipalStableDebt: 'totalPrincipalStableDebt',
  totalScaledVariableDebt: 'totalScaledVariableDebt',
  totalCurrentVariableDebt: 'totalCurrentVariableDebt',
  totalDeposits: 'totalDeposits',
  liquidityRate: 'liquidityRate',
  averageStableRate: 'averageStableRate',
  variableBorrowRate: 'variableBorrowRate',
  stableBorrowRate: 'stableBorrowRate',
  liquidityIndex: 'liquidityIndex',
  variableBorrowIndex: 'variableBorrowIndex',
  aToken: 'aToken',
  vToken: 'vToken',
  sToken: 'sToken',
  reserveFactor: 'reserveFactor',
  lastUpdateTimestamp: 'lastUpdateTimestamp',
  stableDebtLastUpdateTimestamp: 'stableDebtLastUpdateTimestamp',
  aEmissionPerSecond: 'aEmissionPerSecond',
  vEmissionPerSecond: 'vEmissionPerSecond',
  sEmissionPerSecond: 'sEmissionPerSecond',
  aTokenIncentivesIndex: 'aTokenIncentivesIndex',
  vTokenIncentivesIndex: 'vTokenIncentivesIndex',
  sTokenIncentivesIndex: 'sTokenIncentivesIndex',
  aIncentivesLastUpdateTimestamp: 'aIncentivesLastUpdateTimestamp',
  vIncentivesLastUpdateTimestamp: 'vIncentivesLastUpdateTimestamp',
  sIncentivesLastUpdateTimestamp: 'sIncentivesLastUpdateTimestamp',
  lifetimeLiquidity: 'lifetimeLiquidity',
  lifetimePrincipalStableDebt: 'lifetimePrincipalStableDebt',
  lifetimeScaledVariableDebt: 'lifetimeScaledVariableDebt',
  lifetimeCurrentVariableDebt: 'lifetimeCurrentVariableDebt',
  lifetimeRepayments: 'lifetimeRepayments',
  lifetimeWithdrawals: 'lifetimeWithdrawals',
  lifetimeBorrows: 'lifetimeBorrows',
  lifetimeLiquidated: 'lifetimeLiquidated',
  lifetimeFlashLoans: 'lifetimeFlashLoans',
  lifetimeFlashLoanPremium: 'lifetimeFlashLoanPremium',
  lifetimeDepositorsInterestEarned: 'lifetimeDepositorsInterestEarned',
  lifetimeReserveFactorAccrued: 'lifetimeReserveFactorAccrued',
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

export declare const enumSTokenBalanceHistoryItemOrderBy = {
  id: 'id',
  userReserve: 'userReserve',
  principalStableDebt: 'principalStableDebt',
  currentStableDebt: 'currentStableDebt',
  timestamp: 'timestamp',
  avgStableBorrowRate: 'avgStableBorrowRate',
} as const

export declare const enumSTokenOrderBy = {
  id: 'id',
  pool: 'pool',
  underlyingAssetAddress: 'underlyingAssetAddress',
  underlyingAssetDecimals: 'underlyingAssetDecimals',
  tokenContractImpl: 'tokenContractImpl',
} as const

export declare const enumStableDebtTokenOrderBy = {
  id: 'id',
  pool: 'pool',
  underlyingAssetAddress: 'underlyingAssetAddress',
  underlyingAssetDecimals: 'underlyingAssetDecimals',
} as const

export declare const enumStableTokenDelegatedAllowanceOrderBy = {
  id: 'id',
  fromUser: 'fromUser',
  toUser: 'toUser',
  amountAllowed: 'amountAllowed',
  userReserve: 'userReserve',
} as const

export declare const enumSwapHistoryOrderBy = {
  id: 'id',
  fromAsset: 'fromAsset',
  toAsset: 'toAsset',
  fromAmount: 'fromAmount',
  receivedAmount: 'receivedAmount',
  swapType: 'swapType',
} as const

export declare const enumSwapOrderBy = {
  id: 'id',
  pool: 'pool',
  user: 'user',
  reserve: 'reserve',
  userReserve: 'userReserve',
  borrowRateModeFrom: 'borrowRateModeFrom',
  borrowRateModeTo: 'borrowRateModeTo',
  stableBorrowRate: 'stableBorrowRate',
  variableBorrowRate: 'variableBorrowRate',
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

export declare const enumUserReserveOrderBy = {
  id: 'id',
  pool: 'pool',
  reserve: 'reserve',
  user: 'user',
  usageAsCollateralEnabledOnUser: 'usageAsCollateralEnabledOnUser',
  scaledATokenBalance: 'scaledATokenBalance',
  currentATokenBalance: 'currentATokenBalance',
  scaledVariableDebt: 'scaledVariableDebt',
  currentVariableDebt: 'currentVariableDebt',
  principalStableDebt: 'principalStableDebt',
  currentStableDebt: 'currentStableDebt',
  currentTotalDebt: 'currentTotalDebt',
  stableBorrowRate: 'stableBorrowRate',
  oldStableBorrowRate: 'oldStableBorrowRate',
  liquidityRate: 'liquidityRate',
  stableBorrowLastUpdateTimestamp: 'stableBorrowLastUpdateTimestamp',
  variableBorrowIndex: 'variableBorrowIndex',
  aTokenincentivesUserIndex: 'aTokenincentivesUserIndex',
  vTokenincentivesUserIndex: 'vTokenincentivesUserIndex',
  sTokenincentivesUserIndex: 'sTokenincentivesUserIndex',
  aIncentivesLastUpdateTimestamp: 'aIncentivesLastUpdateTimestamp',
  vIncentivesLastUpdateTimestamp: 'vIncentivesLastUpdateTimestamp',
  sIncentivesLastUpdateTimestamp: 'sIncentivesLastUpdateTimestamp',
  lastUpdateTimestamp: 'lastUpdateTimestamp',
  stableTokenDelegatedAllowances: 'stableTokenDelegatedAllowances',
  variableTokenDelegatedAllowances: 'variableTokenDelegatedAllowances',
  aTokenBalanceHistory: 'aTokenBalanceHistory',
  vTokenBalanceHistory: 'vTokenBalanceHistory',
  sTokenBalanceHistory: 'sTokenBalanceHistory',
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
  unclaimedRewards: 'unclaimedRewards',
  lifetimeRewards: 'lifetimeRewards',
  incentivesLastUpdated: 'incentivesLastUpdated',
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
  incentivizedActions: 'incentivizedActions',
  claimIncentives: 'claimIncentives',
} as const

export declare const enumVTokenBalanceHistoryItemOrderBy = {
  id: 'id',
  userReserve: 'userReserve',
  scaledVariableDebt: 'scaledVariableDebt',
  currentVariableDebt: 'currentVariableDebt',
  timestamp: 'timestamp',
  index: 'index',
} as const

export declare const enumVTokenOrderBy = {
  id: 'id',
  pool: 'pool',
  underlyingAssetAddress: 'underlyingAssetAddress',
  underlyingAssetDecimals: 'underlyingAssetDecimals',
  tokenContractImpl: 'tokenContractImpl',
} as const

export declare const enumVariableDebtTokenOrderBy = {
  id: 'id',
  pool: 'pool',
  underlyingAssetAddress: 'underlyingAssetAddress',
  underlyingAssetDecimals: 'underlyingAssetDecimals',
} as const

export declare const enumVariableTokenDelegatedAllowanceOrderBy = {
  id: 'id',
  fromUser: 'fromUser',
  toUser: 'toUser',
  amountAllowed: 'amountAllowed',
  userReserve: 'userReserve',
} as const

export declare const enumWethReserveOrderBy = {
  id: 'id',
  address: 'address',
  symbol: 'symbol',
  name: 'name',
  decimals: 'decimals',
  updatedTimestamp: 'updatedTimestamp',
  updatedBlockNumber: 'updatedBlockNumber',
} as const

export declare const enumSubgraphErrorPolicy = {
  allow: 'allow',
  deny: 'deny',
} as const
