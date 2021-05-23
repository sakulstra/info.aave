var ClaimReward_possibleTypes = ["ClaimReward"]
module.exports.isClaimReward = function (obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isClaimReward"')
  return ClaimReward_possibleTypes.includes(obj.__typename)
}

var Query_possibleTypes = ["Query"]
module.exports.isQuery = function (obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}

var Redeem_possibleTypes = ["Redeem"]
module.exports.isRedeem = function (obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRedeem"')
  return Redeem_possibleTypes.includes(obj.__typename)
}

var Stake_possibleTypes = ["Stake"]
module.exports.isStake = function (obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStake"')
  return Stake_possibleTypes.includes(obj.__typename)
}

var StakePosition_possibleTypes = ["StakePosition"]
module.exports.isStakePosition = function (obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStakePosition"')
  return StakePosition_possibleTypes.includes(obj.__typename)
}

var StakeToken_possibleTypes = ["StakeToken"]
module.exports.isStakeToken = function (obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStakeToken"')
  return StakeToken_possibleTypes.includes(obj.__typename)
}

var Subscription_possibleTypes = ["Subscription"]
module.exports.isSubscription = function (obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSubscription"')
  return Subscription_possibleTypes.includes(obj.__typename)
}

var Transfer_possibleTypes = ["Transfer"]
module.exports.isTransfer = function (obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTransfer"')
  return Transfer_possibleTypes.includes(obj.__typename)
}

var _Block__possibleTypes = ["_Block_"]
module.exports.is_Block_ = function (obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "is_Block_"')
  return _Block__possibleTypes.includes(obj.__typename)
}

var _Meta__possibleTypes = ["_Meta_"]
module.exports.is_Meta_ = function (obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "is_Meta_"')
  return _Meta__possibleTypes.includes(obj.__typename)
}
