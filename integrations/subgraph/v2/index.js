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
    url: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v2',
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
  timestamp: 'timestamp',
  scaledATokenBalance: 'scaledATokenBalance',
  currentATokenBalance: 'currentATokenBalance',
  index: 'index',
}

module.exports.enumATokenOrderBy = {
  id: 'id',
  pool: 'pool',
  underlyingAssetAddress: 'underlyingAssetAddress',
  underlyingAssetDecimals: 'underlyingAssetDecimals',
  tokenContractImpl: 'tokenContractImpl',
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
}

module.exports.enumChainlinkAggregatorOrderBy = {
  id: 'id',
  oracleAsset: 'oracleAsset',
}

module.exports.enumChainlinkEnsOrderBy = {
  id: 'id',
  aggregatorAddress: 'aggregatorAddress',
  underlyingAddress: 'underlyingAddress',
  symbol: 'symbol',
}

module.exports.enumClaimIncentiveCallOrderBy = {
  id: 'id',
  incentivesController: 'incentivesController',
  user: 'user',
  amount: 'amount',
}

module.exports.enumContractToPoolMappingOrderBy = {
  id: 'id',
  pool: 'pool',
}

module.exports.enumDepositOrderBy = {
  id: 'id',
  pool: 'pool',
  user: 'user',
  onBehalfOf: 'onBehalfOf',
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
  initiator: 'initiator',
  timestamp: 'timestamp',
}

module.exports.enumIncentivesControllerOrderBy = {
  id: 'id',
  rewardToken: 'rewardToken',
  rewardTokenDecimals: 'rewardTokenDecimals',
  rewardTokenSymbol: 'rewardTokenSymbol',
  precision: 'precision',
  emissionEndTimestamp: 'emissionEndTimestamp',
  incentivizedActions: 'incentivizedActions',
  claimIncentives: 'claimIncentives',
}

module.exports.enumIncentivizedActionOrderBy = {
  id: 'id',
  incentivesController: 'incentivesController',
  user: 'user',
  amount: 'amount',
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

module.exports.enumMapAssetPoolOrderBy = {
  id: 'id',
  pool: 'pool',
  underlyingAsset: 'underlyingAsset',
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
}

module.exports.enumPoolOrderBy = {
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
  usdDependentAssets: 'usdDependentAssets',
  fallbackPriceOracle: 'fallbackPriceOracle',
  tokens: 'tokens',
  usdPriceEthHistory: 'usdPriceEthHistory',
  tokensWithFallback: 'tokensWithFallback',
  lastUpdateTimestamp: 'lastUpdateTimestamp',
  version: 'version',
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
  timestamp: 'timestamp',
}

module.exports.enumRedeemUnderlyingOrderBy = {
  id: 'id',
  pool: 'pool',
  user: 'user',
  onBehalfOf: 'onBehalfOf',
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
  onBehalfOf: 'onBehalfOf',
  reserve: 'reserve',
  userReserve: 'userReserve',
  amount: 'amount',
  timestamp: 'timestamp',
}

module.exports.enumReserveConfigurationHistoryItemOrderBy = {
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
}

module.exports.enumSTokenBalanceHistoryItemOrderBy = {
  id: 'id',
  userReserve: 'userReserve',
  principalStableDebt: 'principalStableDebt',
  currentStableDebt: 'currentStableDebt',
  timestamp: 'timestamp',
  avgStableBorrowRate: 'avgStableBorrowRate',
}

module.exports.enumSTokenOrderBy = {
  id: 'id',
  pool: 'pool',
  underlyingAssetAddress: 'underlyingAssetAddress',
  underlyingAssetDecimals: 'underlyingAssetDecimals',
  tokenContractImpl: 'tokenContractImpl',
}

module.exports.enumStableDebtTokenOrderBy = {
  id: 'id',
  pool: 'pool',
  underlyingAssetAddress: 'underlyingAssetAddress',
  underlyingAssetDecimals: 'underlyingAssetDecimals',
}

module.exports.enumStableTokenDelegatedAllowanceOrderBy = {
  id: 'id',
  fromUser: 'fromUser',
  toUser: 'toUser',
  amountAllowed: 'amountAllowed',
  userReserve: 'userReserve',
}

module.exports.enumSwapHistoryOrderBy = {
  id: 'id',
  fromAsset: 'fromAsset',
  toAsset: 'toAsset',
  fromAmount: 'fromAmount',
  receivedAmount: 'receivedAmount',
  swapType: 'swapType',
}

module.exports.enumSwapOrderBy = {
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

module.exports.enumUserReserveOrderBy = {
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
}

module.exports.enumVTokenBalanceHistoryItemOrderBy = {
  id: 'id',
  userReserve: 'userReserve',
  scaledVariableDebt: 'scaledVariableDebt',
  currentVariableDebt: 'currentVariableDebt',
  timestamp: 'timestamp',
  index: 'index',
}

module.exports.enumVTokenOrderBy = {
  id: 'id',
  pool: 'pool',
  underlyingAssetAddress: 'underlyingAssetAddress',
  underlyingAssetDecimals: 'underlyingAssetDecimals',
  tokenContractImpl: 'tokenContractImpl',
}

module.exports.enumVariableDebtTokenOrderBy = {
  id: 'id',
  pool: 'pool',
  underlyingAssetAddress: 'underlyingAssetAddress',
  underlyingAssetDecimals: 'underlyingAssetDecimals',
}

module.exports.enumVariableTokenDelegatedAllowanceOrderBy = {
  id: 'id',
  fromUser: 'fromUser',
  toUser: 'toUser',
  amountAllowed: 'amountAllowed',
  userReserve: 'userReserve',
}

module.exports.enumWethReserveOrderBy = {
  id: 'id',
  address: 'address',
  symbol: 'symbol',
  name: 'name',
  decimals: 'decimals',
  updatedTimestamp: 'updatedTimestamp',
  updatedBlockNumber: 'updatedBlockNumber',
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
