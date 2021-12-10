const {
  linkTypeMap,
  createClient: createClientOriginal,
  generateGraphqlOperation,
  assertSameVersion,
} = require('@genql/runtime')
var typeMap = linkTypeMap(require('./types.cjs'))

var version = '2.8.0'
assertSameVersion(version)

module.exports.version = version

module.exports.createClient = function(options) {
  options = options || {}
  var optionsCopy = {
    url: 'https://api.thegraph.com/subgraphs/name/aave/protocol-multy-raw',
    queryRoot: typeMap.Query,
    mutationRoot: typeMap.Mutation,
    subscriptionRoot: typeMap.Subscription,
  }
  for (var name in options) {
    optionsCopy[name] = options[name]
  }
  return createClientOriginal(optionsCopy)
}

module.exports.enumATokenBalanceHistoryItemOrderBy = {
  id: 'id',
  userReserve: 'userReserve',
  balance: 'balance',
  userBalanceIndex: 'userBalanceIndex',
  interestRedirectionAddress: 'interestRedirectionAddress',
  redirectedBalance: 'redirectedBalance',
  timestamp: 'timestamp',
}

module.exports.enumATokenOrderBy = {
  id: 'id',
  pool: 'pool',
  underlyingAssetAddress: 'underlyingAssetAddress',
  underlyingAssetDecimals: 'underlyingAssetDecimals',
}

module.exports.enumBorrowRateMode = {
  None: 'None',
  Stable: 'Stable',
  Variable: 'Variable',
}

module.exports.enumBorrowOrderBy = {
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
}

module.exports.enumChainlinkAggregatorOrderBy = {
  id: 'id',
  oracleAsset: 'oracleAsset',
}

module.exports.enumContractToPoolMappingOrderBy = {
  id: 'id',
  pool: 'pool',
}

module.exports.enumDepositOrderBy = {
  id: 'id',
  pool: 'pool',
  user: 'user',
  reserve: 'reserve',
  userReserve: 'userReserve',
  amount: 'amount',
  referrer: 'referrer',
  timestamp: 'timestamp',
}

module.exports.enumFlashLoanOrderBy = {
  id: 'id',
  pool: 'pool',
  reserve: 'reserve',
  target: 'target',
  amount: 'amount',
  totalFee: 'totalFee',
  protocolFee: 'protocolFee',
  timestamp: 'timestamp',
}

module.exports.enumLiquidationCallOrderBy = {
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
}

module.exports.enumOrderDirection = {
  asc: 'asc',
  desc: 'desc',
}

module.exports.enumOriginationFeeLiquidationOrderBy = {
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
}

module.exports.enumPoolConfigurationHistoryItemOrderBy = {
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
}

module.exports.enumPoolOrderBy = {
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
}

module.exports.enumPriceHistoryItemOrderBy = {
  id: 'id',
  asset: 'asset',
  price: 'price',
  timestamp: 'timestamp',
}

module.exports.enumPriceOracleAssetPlatform = {
  Simple: 'Simple',
  Uniswap: 'Uniswap',
}

module.exports.enumPriceOracleAssetType = {
  Simple: 'Simple',
  Composite: 'Composite',
}

module.exports.enumPriceOracleAssetOrderBy = {
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
}

module.exports.enumPriceOracleOrderBy = {
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
}

module.exports.enumProtocolOrderBy = {
  id: 'id',
  pools: 'pools',
}

module.exports.enumRebalanceStableBorrowRateOrderBy = {
  id: 'id',
  pool: 'pool',
  user: 'user',
  reserve: 'reserve',
  userReserve: 'userReserve',
  borrowRateFrom: 'borrowRateFrom',
  borrowRateTo: 'borrowRateTo',
  accruedBorrowInterest: 'accruedBorrowInterest',
  timestamp: 'timestamp',
}

module.exports.enumRedeemUnderlyingOrderBy = {
  id: 'id',
  pool: 'pool',
  user: 'user',
  reserve: 'reserve',
  userReserve: 'userReserve',
  amount: 'amount',
  timestamp: 'timestamp',
}

module.exports.enumReferrerOrderBy = {
  id: 'id',
  deposits: 'deposits',
  borrows: 'borrows',
}

module.exports.enumRepayOrderBy = {
  id: 'id',
  pool: 'pool',
  user: 'user',
  reserve: 'reserve',
  userReserve: 'userReserve',
  amountAfterFee: 'amountAfterFee',
  fee: 'fee',
  timestamp: 'timestamp',
}

module.exports.enumReserveConfigurationHistoryItemOrderBy = {
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
}

module.exports.enumReserveParamsHistoryItemOrderBy = {
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
}

module.exports.enumReserveOrderBy = {
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
}

module.exports.enumSwapOrderBy = {
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
}

module.exports.enumUsageAsCollateralOrderBy = {
  id: 'id',
  pool: 'pool',
  user: 'user',
  reserve: 'reserve',
  userReserve: 'userReserve',
  fromState: 'fromState',
  toState: 'toState',
  timestamp: 'timestamp',
}

module.exports.enumUsdEthPriceHistoryItemOrderBy = {
  id: 'id',
  oracle: 'oracle',
  price: 'price',
  timestamp: 'timestamp',
}

module.exports.enumUserBorrowHistoryItemOrderBy = {
  id: 'id',
  userReserve: 'userReserve',
  totalBorrows: 'totalBorrows',
  borrowRate: 'borrowRate',
  borrowRateMode: 'borrowRateMode',
  originationFee: 'originationFee',
  timestamp: 'timestamp',
}

module.exports.enumUserReserveOrderBy = {
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
}

module.exports.enumUserTransactionOrderBy = {
  id: 'id',
  pool: 'pool',
  user: 'user',
  timestamp: 'timestamp',
}

module.exports.enumUserOrderBy = {
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
}

module.exports.enumSubgraphErrorPolicy = {
  allow: 'allow',
  deny: 'deny',
}

module.exports.generateQueryOp = function(fields) {
  return generateGraphqlOperation('query', typeMap.Query, fields)
}
module.exports.generateMutationOp = function(fields) {
  return generateGraphqlOperation('mutation', typeMap.Mutation, fields)
}
module.exports.generateSubscriptionOp = function(fields) {
  return generateGraphqlOperation('subscription', typeMap.Subscription, fields)
}
module.exports.everything = {
  __scalar: true,
}

var schemaExports = require('./guards.cjs')
for (var k in schemaExports) {
  module.exports[k] = schemaExports[k]
}
