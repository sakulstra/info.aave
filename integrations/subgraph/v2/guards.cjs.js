
var AToken_possibleTypes = ['AToken']
module.exports.isAToken = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAToken"')
  return AToken_possibleTypes.includes(obj.__typename)
}



var ATokenBalanceHistoryItem_possibleTypes = ['ATokenBalanceHistoryItem']
module.exports.isATokenBalanceHistoryItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isATokenBalanceHistoryItem"')
  return ATokenBalanceHistoryItem_possibleTypes.includes(obj.__typename)
}



var Borrow_possibleTypes = ['Borrow']
module.exports.isBorrow = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBorrow"')
  return Borrow_possibleTypes.includes(obj.__typename)
}



var ChainlinkAggregator_possibleTypes = ['ChainlinkAggregator']
module.exports.isChainlinkAggregator = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isChainlinkAggregator"')
  return ChainlinkAggregator_possibleTypes.includes(obj.__typename)
}



var ChainlinkENS_possibleTypes = ['ChainlinkENS']
module.exports.isChainlinkENS = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isChainlinkENS"')
  return ChainlinkENS_possibleTypes.includes(obj.__typename)
}



var ClaimIncentiveCall_possibleTypes = ['ClaimIncentiveCall']
module.exports.isClaimIncentiveCall = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isClaimIncentiveCall"')
  return ClaimIncentiveCall_possibleTypes.includes(obj.__typename)
}



var ContractToPoolMapping_possibleTypes = ['ContractToPoolMapping']
module.exports.isContractToPoolMapping = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContractToPoolMapping"')
  return ContractToPoolMapping_possibleTypes.includes(obj.__typename)
}



var Deposit_possibleTypes = ['Deposit']
module.exports.isDeposit = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeposit"')
  return Deposit_possibleTypes.includes(obj.__typename)
}



var FlashLoan_possibleTypes = ['FlashLoan']
module.exports.isFlashLoan = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFlashLoan"')
  return FlashLoan_possibleTypes.includes(obj.__typename)
}



var IncentivesController_possibleTypes = ['IncentivesController']
module.exports.isIncentivesController = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIncentivesController"')
  return IncentivesController_possibleTypes.includes(obj.__typename)
}



var IncentivizedAction_possibleTypes = ['IncentivizedAction']
module.exports.isIncentivizedAction = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIncentivizedAction"')
  return IncentivizedAction_possibleTypes.includes(obj.__typename)
}



var LiquidationCall_possibleTypes = ['LiquidationCall']
module.exports.isLiquidationCall = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLiquidationCall"')
  return LiquidationCall_possibleTypes.includes(obj.__typename)
}



var MapAssetPool_possibleTypes = ['MapAssetPool']
module.exports.isMapAssetPool = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMapAssetPool"')
  return MapAssetPool_possibleTypes.includes(obj.__typename)
}



var OriginationFeeLiquidation_possibleTypes = ['OriginationFeeLiquidation']
module.exports.isOriginationFeeLiquidation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOriginationFeeLiquidation"')
  return OriginationFeeLiquidation_possibleTypes.includes(obj.__typename)
}



var Pool_possibleTypes = ['Pool']
module.exports.isPool = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPool"')
  return Pool_possibleTypes.includes(obj.__typename)
}



var PoolConfigurationHistoryItem_possibleTypes = ['PoolConfigurationHistoryItem']
module.exports.isPoolConfigurationHistoryItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPoolConfigurationHistoryItem"')
  return PoolConfigurationHistoryItem_possibleTypes.includes(obj.__typename)
}



var PriceHistoryItem_possibleTypes = ['PriceHistoryItem']
module.exports.isPriceHistoryItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPriceHistoryItem"')
  return PriceHistoryItem_possibleTypes.includes(obj.__typename)
}



var PriceOracle_possibleTypes = ['PriceOracle']
module.exports.isPriceOracle = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPriceOracle"')
  return PriceOracle_possibleTypes.includes(obj.__typename)
}



var PriceOracleAsset_possibleTypes = ['PriceOracleAsset']
module.exports.isPriceOracleAsset = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPriceOracleAsset"')
  return PriceOracleAsset_possibleTypes.includes(obj.__typename)
}



var Protocol_possibleTypes = ['Protocol']
module.exports.isProtocol = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProtocol"')
  return Protocol_possibleTypes.includes(obj.__typename)
}



var Query_possibleTypes = ['Query']
module.exports.isQuery = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



var RebalanceStableBorrowRate_possibleTypes = ['RebalanceStableBorrowRate']
module.exports.isRebalanceStableBorrowRate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRebalanceStableBorrowRate"')
  return RebalanceStableBorrowRate_possibleTypes.includes(obj.__typename)
}



var RedeemUnderlying_possibleTypes = ['RedeemUnderlying']
module.exports.isRedeemUnderlying = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRedeemUnderlying"')
  return RedeemUnderlying_possibleTypes.includes(obj.__typename)
}



var Referrer_possibleTypes = ['Referrer']
module.exports.isReferrer = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReferrer"')
  return Referrer_possibleTypes.includes(obj.__typename)
}



var Repay_possibleTypes = ['Repay']
module.exports.isRepay = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepay"')
  return Repay_possibleTypes.includes(obj.__typename)
}



var Reserve_possibleTypes = ['Reserve']
module.exports.isReserve = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReserve"')
  return Reserve_possibleTypes.includes(obj.__typename)
}



var ReserveConfigurationHistoryItem_possibleTypes = ['ReserveConfigurationHistoryItem']
module.exports.isReserveConfigurationHistoryItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReserveConfigurationHistoryItem"')
  return ReserveConfigurationHistoryItem_possibleTypes.includes(obj.__typename)
}



var ReserveParamsHistoryItem_possibleTypes = ['ReserveParamsHistoryItem']
module.exports.isReserveParamsHistoryItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReserveParamsHistoryItem"')
  return ReserveParamsHistoryItem_possibleTypes.includes(obj.__typename)
}



var SToken_possibleTypes = ['SToken']
module.exports.isSToken = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSToken"')
  return SToken_possibleTypes.includes(obj.__typename)
}



var STokenBalanceHistoryItem_possibleTypes = ['STokenBalanceHistoryItem']
module.exports.isSTokenBalanceHistoryItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSTokenBalanceHistoryItem"')
  return STokenBalanceHistoryItem_possibleTypes.includes(obj.__typename)
}



var StableDebtToken_possibleTypes = ['StableDebtToken']
module.exports.isStableDebtToken = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStableDebtToken"')
  return StableDebtToken_possibleTypes.includes(obj.__typename)
}



var StableTokenDelegatedAllowance_possibleTypes = ['StableTokenDelegatedAllowance']
module.exports.isStableTokenDelegatedAllowance = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStableTokenDelegatedAllowance"')
  return StableTokenDelegatedAllowance_possibleTypes.includes(obj.__typename)
}



var Subscription_possibleTypes = ['Subscription']
module.exports.isSubscription = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSubscription"')
  return Subscription_possibleTypes.includes(obj.__typename)
}



var Swap_possibleTypes = ['Swap']
module.exports.isSwap = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSwap"')
  return Swap_possibleTypes.includes(obj.__typename)
}



var SwapHistory_possibleTypes = ['SwapHistory']
module.exports.isSwapHistory = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSwapHistory"')
  return SwapHistory_possibleTypes.includes(obj.__typename)
}



var UsageAsCollateral_possibleTypes = ['UsageAsCollateral']
module.exports.isUsageAsCollateral = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUsageAsCollateral"')
  return UsageAsCollateral_possibleTypes.includes(obj.__typename)
}



var UsdEthPriceHistoryItem_possibleTypes = ['UsdEthPriceHistoryItem']
module.exports.isUsdEthPriceHistoryItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUsdEthPriceHistoryItem"')
  return UsdEthPriceHistoryItem_possibleTypes.includes(obj.__typename)
}



var User_possibleTypes = ['User']
module.exports.isUser = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUser"')
  return User_possibleTypes.includes(obj.__typename)
}



var UserReserve_possibleTypes = ['UserReserve']
module.exports.isUserReserve = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserReserve"')
  return UserReserve_possibleTypes.includes(obj.__typename)
}



var UserTransaction_possibleTypes = ['Borrow','Deposit','LiquidationCall','OriginationFeeLiquidation','RebalanceStableBorrowRate','RedeemUnderlying','Repay','Swap','UsageAsCollateral']
module.exports.isUserTransaction = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserTransaction"')
  return UserTransaction_possibleTypes.includes(obj.__typename)
}



var VToken_possibleTypes = ['VToken']
module.exports.isVToken = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isVToken"')
  return VToken_possibleTypes.includes(obj.__typename)
}



var VTokenBalanceHistoryItem_possibleTypes = ['VTokenBalanceHistoryItem']
module.exports.isVTokenBalanceHistoryItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isVTokenBalanceHistoryItem"')
  return VTokenBalanceHistoryItem_possibleTypes.includes(obj.__typename)
}



var VariableDebtToken_possibleTypes = ['VariableDebtToken']
module.exports.isVariableDebtToken = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isVariableDebtToken"')
  return VariableDebtToken_possibleTypes.includes(obj.__typename)
}



var VariableTokenDelegatedAllowance_possibleTypes = ['VariableTokenDelegatedAllowance']
module.exports.isVariableTokenDelegatedAllowance = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isVariableTokenDelegatedAllowance"')
  return VariableTokenDelegatedAllowance_possibleTypes.includes(obj.__typename)
}



var WETHReserve_possibleTypes = ['WETHReserve']
module.exports.isWETHReserve = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isWETHReserve"')
  return WETHReserve_possibleTypes.includes(obj.__typename)
}



var _Block__possibleTypes = ['_Block_']
module.exports.is_Block_ = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "is_Block_"')
  return _Block__possibleTypes.includes(obj.__typename)
}



var _Meta__possibleTypes = ['_Meta_']
module.exports.is_Meta_ = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "is_Meta_"')
  return _Meta__possibleTypes.includes(obj.__typename)
}
