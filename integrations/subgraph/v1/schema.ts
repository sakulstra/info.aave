import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    BigDecimal: any,
    BigInt: any,
    Boolean: boolean,
    Bytes: any,
    ID: string,
    Int: number,
    String: string,
}

export interface AToken {
    /**
     * AToken address
     * 
     */
    id: Scalars['ID']
    pool: Pool
    underlyingAssetAddress: Scalars['Bytes']
    underlyingAssetDecimals: Scalars['Int']
    __typename: 'AToken'
}

export interface ATokenBalanceHistoryItem {
    /**
     * userReserve + txHash
     * 
     */
    id: Scalars['ID']
    userReserve: UserReserve
    balance: Scalars['BigInt']
    userBalanceIndex: Scalars['BigInt']
    interestRedirectionAddress: Scalars['Bytes']
    redirectedBalance: Scalars['BigInt']
    timestamp: Scalars['Int']
    __typename: 'ATokenBalanceHistoryItem'
}

export type ATokenBalanceHistoryItem_orderBy = 'id' | 'userReserve' | 'balance' | 'userBalanceIndex' | 'interestRedirectionAddress' | 'redirectedBalance' | 'timestamp'

export type AToken_orderBy = 'id' | 'pool' | 'underlyingAssetAddress' | 'underlyingAssetDecimals'

export interface Borrow {
    /**
     * tx hash
     * 
     */
    id: Scalars['ID']
    pool: Pool
    user: User
    reserve: Reserve
    userReserve: UserReserve
    amount: Scalars['BigInt']
    borrowRate: Scalars['BigInt']
    borrowRateMode: BorrowRateMode
    accruedBorrowInterest: Scalars['BigInt']
    referrer?: Referrer
    timestamp: Scalars['Int']
    __typename: 'Borrow'
}

export type BorrowRateMode = 'None' | 'Stable' | 'Variable'

export type Borrow_orderBy = 'id' | 'pool' | 'user' | 'reserve' | 'userReserve' | 'amount' | 'borrowRate' | 'borrowRateMode' | 'accruedBorrowInterest' | 'referrer' | 'timestamp'

export interface ChainlinkAggregator {
    id: Scalars['ID']
    oracleAsset: PriceOracleAsset
    __typename: 'ChainlinkAggregator'
}

export type ChainlinkAggregator_orderBy = 'id' | 'oracleAsset'

export interface ContractToPoolMapping {
    id: Scalars['ID']
    pool: Pool
    __typename: 'ContractToPoolMapping'
}

export type ContractToPoolMapping_orderBy = 'id' | 'pool'

export interface Deposit {
    /**
     * tx hash
     * 
     */
    id: Scalars['ID']
    pool: Pool
    user: User
    reserve: Reserve
    userReserve: UserReserve
    amount: Scalars['BigInt']
    referrer?: Referrer
    timestamp: Scalars['Int']
    __typename: 'Deposit'
}

export type Deposit_orderBy = 'id' | 'pool' | 'user' | 'reserve' | 'userReserve' | 'amount' | 'referrer' | 'timestamp'

export interface FlashLoan {
    /**
     * tx hash
     * 
     */
    id: Scalars['ID']
    pool: Pool
    reserve: Reserve
    target: Scalars['Bytes']
    amount: Scalars['BigInt']
    totalFee: Scalars['BigInt']
    protocolFee: Scalars['BigInt']
    timestamp: Scalars['Int']
    __typename: 'FlashLoan'
}

export type FlashLoan_orderBy = 'id' | 'pool' | 'reserve' | 'target' | 'amount' | 'totalFee' | 'protocolFee' | 'timestamp'

export interface LiquidationCall {
    /**
     * tx hash
     * 
     */
    id: Scalars['ID']
    pool: Pool
    user: User
    collateralReserve: Reserve
    collateralUserReserve: UserReserve
    collateralAmount: Scalars['BigInt']
    principalReserve: Reserve
    principalUserReserve: UserReserve
    principalAmount: Scalars['BigInt']
    liquidator: Scalars['Bytes']
    timestamp: Scalars['Int']
    __typename: 'LiquidationCall'
}

export type LiquidationCall_orderBy = 'id' | 'pool' | 'user' | 'collateralReserve' | 'collateralUserReserve' | 'collateralAmount' | 'principalReserve' | 'principalUserReserve' | 'principalAmount' | 'liquidator' | 'timestamp'

export type OrderDirection = 'asc' | 'desc'

export interface OriginationFeeLiquidation {
    /**
     * tx hash
     * 
     */
    id: Scalars['ID']
    pool: Pool
    user: User
    collateralReserve: Reserve
    collateralUserReserve: UserReserve
    principalReserve: Reserve
    principalUserReserve: UserReserve
    feeLiquidated: Scalars['BigInt']
    liquidatedCollateralForFee: Scalars['BigInt']
    timestamp: Scalars['Int']
    __typename: 'OriginationFeeLiquidation'
}

export type OriginationFeeLiquidation_orderBy = 'id' | 'pool' | 'user' | 'collateralReserve' | 'collateralUserReserve' | 'principalReserve' | 'principalUserReserve' | 'feeLiquidated' | 'liquidatedCollateralForFee' | 'timestamp'

export interface Pool {
    id: Scalars['ID']
    protocol: Protocol
    lendingPool?: Scalars['Bytes']
    lendingPoolCore?: Scalars['Bytes']
    lendingPoolParametersProvider?: Scalars['Bytes']
    lendingPoolManager?: Scalars['Bytes']
    lendingPoolConfigurator?: Scalars['Bytes']
    lendingPoolLiquidationManager?: Scalars['Bytes']
    lendingPoolDataProvider?: Scalars['Bytes']
    proxyPriceProvider?: Scalars['Bytes']
    lendingRateOracle?: Scalars['Bytes']
    feeProvider?: Scalars['Bytes']
    history: PoolConfigurationHistoryItem[]
    lastUpdateTimestamp: Scalars['Int']
    reserves: Reserve[]
    depositHistory: Deposit[]
    redeemUnderlyingHistory: RedeemUnderlying[]
    borrowHistory: Borrow[]
    swapHistory: Swap[]
    usageAsCollateralHistory: UsageAsCollateral[]
    rebalanceStableBorrowRateHistory: RebalanceStableBorrowRate[]
    repayHistory: Repay[]
    flashLoanHistory: FlashLoan[]
    liquidationCallHistory: LiquidationCall[]
    originationFeeLiquidationHistory: OriginationFeeLiquidation[]
    __typename: 'Pool'
}

export interface PoolConfigurationHistoryItem {
    /**
     * tx hash
     * 
     */
    id: Scalars['ID']
    pool: Pool
    lendingPool?: Scalars['Bytes']
    lendingPoolCore?: Scalars['Bytes']
    lendingPoolParametersProvider?: Scalars['Bytes']
    lendingPoolManager?: Scalars['Bytes']
    lendingPoolConfigurator?: Scalars['Bytes']
    lendingPoolLiquidationManager?: Scalars['Bytes']
    lendingPoolDataProvider?: Scalars['Bytes']
    proxyPriceProvider?: Scalars['Bytes']
    lendingRateOracle?: Scalars['Bytes']
    feeProvider?: Scalars['Bytes']
    timestamp: Scalars['Int']
    __typename: 'PoolConfigurationHistoryItem'
}

export type PoolConfigurationHistoryItem_orderBy = 'id' | 'pool' | 'lendingPool' | 'lendingPoolCore' | 'lendingPoolParametersProvider' | 'lendingPoolManager' | 'lendingPoolConfigurator' | 'lendingPoolLiquidationManager' | 'lendingPoolDataProvider' | 'proxyPriceProvider' | 'lendingRateOracle' | 'feeProvider' | 'timestamp'

export type Pool_orderBy = 'id' | 'protocol' | 'lendingPool' | 'lendingPoolCore' | 'lendingPoolParametersProvider' | 'lendingPoolManager' | 'lendingPoolConfigurator' | 'lendingPoolLiquidationManager' | 'lendingPoolDataProvider' | 'proxyPriceProvider' | 'lendingRateOracle' | 'feeProvider' | 'history' | 'lastUpdateTimestamp' | 'reserves' | 'depositHistory' | 'redeemUnderlyingHistory' | 'borrowHistory' | 'swapHistory' | 'usageAsCollateralHistory' | 'rebalanceStableBorrowRateHistory' | 'repayHistory' | 'flashLoanHistory' | 'liquidationCallHistory' | 'originationFeeLiquidationHistory'

export interface PriceHistoryItem {
    id: Scalars['ID']
    asset: PriceOracleAsset
    price: Scalars['BigInt']
    timestamp: Scalars['Int']
    __typename: 'PriceHistoryItem'
}

export type PriceHistoryItem_orderBy = 'id' | 'asset' | 'price' | 'timestamp'

export interface PriceOracle {
    id: Scalars['ID']
    proxyPriceProvider: Scalars['Bytes']
    usdPriceEth: Scalars['BigInt']
    usdPriceEthMainSource: Scalars['Bytes']
    usdPriceEthFallbackRequired: Scalars['Boolean']
    fallbackPriceOracle: Scalars['Bytes']
    tokens: PriceOracleAsset[]
    usdPriceEthHistory: UsdEthPriceHistoryItem[]
    tokensWithFallback: PriceOracleAsset[]
    lastUpdateTimestamp: Scalars['Int']
    __typename: 'PriceOracle'
}

export interface PriceOracleAsset {
    id: Scalars['ID']
    oracle: PriceOracle
    priceInEth: Scalars['BigInt']
    priceSource: Scalars['Bytes']
    isFallbackRequired: Scalars['Boolean']
    type: PriceOracleAssetType
    platform: PriceOracleAssetPlatform
    dependentAssets: PriceOracleAsset[]
    lastUpdateTimestamp: Scalars['Int']
    priceHistory: PriceHistoryItem[]
    fromChainlinkSourcesRegistry: Scalars['Boolean']
    __typename: 'PriceOracleAsset'
}

export type PriceOracleAssetPlatform = 'Simple' | 'Uniswap'

export type PriceOracleAssetType = 'Simple' | 'Composite'

export type PriceOracleAsset_orderBy = 'id' | 'oracle' | 'priceInEth' | 'priceSource' | 'isFallbackRequired' | 'type' | 'platform' | 'dependentAssets' | 'lastUpdateTimestamp' | 'priceHistory' | 'fromChainlinkSourcesRegistry'

export type PriceOracle_orderBy = 'id' | 'proxyPriceProvider' | 'usdPriceEth' | 'usdPriceEthMainSource' | 'usdPriceEthFallbackRequired' | 'fallbackPriceOracle' | 'tokens' | 'usdPriceEthHistory' | 'tokensWithFallback' | 'lastUpdateTimestamp'

export interface Protocol {
    id: Scalars['ID']
    pools: Pool[]
    __typename: 'Protocol'
}

export type Protocol_orderBy = 'id' | 'pools'

export interface Query {
    protocol?: Protocol
    protocols: Protocol[]
    contractToPoolMapping?: ContractToPoolMapping
    contractToPoolMappings: ContractToPoolMapping[]
    poolConfigurationHistoryItem?: PoolConfigurationHistoryItem
    poolConfigurationHistoryItems: PoolConfigurationHistoryItem[]
    pool?: Pool
    pools: Pool[]
    priceHistoryItem?: PriceHistoryItem
    priceHistoryItems: PriceHistoryItem[]
    usdEthPriceHistoryItem?: UsdEthPriceHistoryItem
    usdEthPriceHistoryItems: UsdEthPriceHistoryItem[]
    chainlinkAggregator?: ChainlinkAggregator
    chainlinkAggregators: ChainlinkAggregator[]
    priceOracleAsset?: PriceOracleAsset
    priceOracleAssets: PriceOracleAsset[]
    priceOracle?: PriceOracle
    priceOracles: PriceOracle[]
    atoken?: AToken
    atokens: AToken[]
    referrer?: Referrer
    referrers: Referrer[]
    deposit?: Deposit
    deposits: Deposit[]
    redeemUnderlying?: RedeemUnderlying
    redeemUnderlyings: RedeemUnderlying[]
    borrow?: Borrow
    borrows: Borrow[]
    swap?: Swap
    swaps: Swap[]
    usageAsCollateral?: UsageAsCollateral
    usageAsCollaterals: UsageAsCollateral[]
    rebalanceStableBorrowRate?: RebalanceStableBorrowRate
    rebalanceStableBorrowRates: RebalanceStableBorrowRate[]
    repay?: Repay
    repays: Repay[]
    flashLoan?: FlashLoan
    flashLoans: FlashLoan[]
    liquidationCall?: LiquidationCall
    liquidationCalls: LiquidationCall[]
    originationFeeLiquidation?: OriginationFeeLiquidation
    originationFeeLiquidations: OriginationFeeLiquidation[]
    reserveConfigurationHistoryItem?: ReserveConfigurationHistoryItem
    reserveConfigurationHistoryItems: ReserveConfigurationHistoryItem[]
    reserveParamsHistoryItem?: ReserveParamsHistoryItem
    reserveParamsHistoryItems: ReserveParamsHistoryItem[]
    reserve?: Reserve
    reserves: Reserve[]
    atokenBalanceHistoryItem?: ATokenBalanceHistoryItem
    atokenBalanceHistoryItems: ATokenBalanceHistoryItem[]
    userBorrowHistoryItem?: UserBorrowHistoryItem
    userBorrowHistoryItems: UserBorrowHistoryItem[]
    userReserve?: UserReserve
    userReserves: UserReserve[]
    user?: User
    users: User[]
    userTransaction?: UserTransaction
    userTransactions: UserTransaction[]
    /** Access to subgraph metadata */
    _meta?: _Meta_
    __typename: 'Query'
}

export interface RebalanceStableBorrowRate {
    /**
     * tx hash
     * 
     */
    id: Scalars['ID']
    pool: Pool
    user: User
    reserve: Reserve
    userReserve: UserReserve
    borrowRateFrom: Scalars['BigInt']
    borrowRateTo: Scalars['BigInt']
    accruedBorrowInterest: Scalars['BigInt']
    timestamp: Scalars['Int']
    __typename: 'RebalanceStableBorrowRate'
}

export type RebalanceStableBorrowRate_orderBy = 'id' | 'pool' | 'user' | 'reserve' | 'userReserve' | 'borrowRateFrom' | 'borrowRateTo' | 'accruedBorrowInterest' | 'timestamp'

export interface RedeemUnderlying {
    /**
     * tx hash
     * 
     */
    id: Scalars['ID']
    pool: Pool
    user: User
    reserve: Reserve
    userReserve: UserReserve
    amount: Scalars['BigInt']
    timestamp: Scalars['Int']
    __typename: 'RedeemUnderlying'
}

export type RedeemUnderlying_orderBy = 'id' | 'pool' | 'user' | 'reserve' | 'userReserve' | 'amount' | 'timestamp'

export interface Referrer {
    id: Scalars['ID']
    deposits: Deposit[]
    borrows: Borrow[]
    __typename: 'Referrer'
}

export type Referrer_orderBy = 'id' | 'deposits' | 'borrows'

export interface Repay {
    /**
     * tx hash
     * 
     */
    id: Scalars['ID']
    pool: Pool
    user: User
    reserve: Reserve
    userReserve: UserReserve
    amountAfterFee: Scalars['BigInt']
    fee: Scalars['BigInt']
    timestamp: Scalars['Int']
    __typename: 'Repay'
}

export type Repay_orderBy = 'id' | 'pool' | 'user' | 'reserve' | 'userReserve' | 'amountAfterFee' | 'fee' | 'timestamp'

export interface Reserve {
    /**
     * Reserve address
     * 
     */
    id: Scalars['ID']
    underlyingAsset: Scalars['Bytes']
    pool: Pool
    symbol: Scalars['String']
    name: Scalars['String']
    decimals: Scalars['Int']
    usageAsCollateralEnabled: Scalars['Boolean']
    borrowingEnabled: Scalars['Boolean']
    stableBorrowRateEnabled: Scalars['Boolean']
    isActive: Scalars['Boolean']
    isFreezed: Scalars['Boolean']
    price: PriceOracleAsset
    reserveInterestRateStrategy: Scalars['Bytes']
    optimalUtilisationRate: Scalars['BigInt']
    variableRateSlope1: Scalars['BigInt']
    variableRateSlope2: Scalars['BigInt']
    stableRateSlope1: Scalars['BigInt']
    stableRateSlope2: Scalars['BigInt']
    baseVariableBorrowRate: Scalars['BigInt']
    baseLTVasCollateral: Scalars['BigInt']
    reserveLiquidationThreshold: Scalars['BigInt']
    reserveLiquidationBonus: Scalars['BigInt']
    utilizationRate: Scalars['BigDecimal']
    totalLiquidity: Scalars['BigInt']
    totalLiquidityAsCollateral: Scalars['BigInt']
    availableLiquidity: Scalars['BigInt']
    totalBorrows: Scalars['BigInt']
    totalBorrowsStable: Scalars['BigInt']
    totalBorrowsVariable: Scalars['BigInt']
    liquidityRate: Scalars['BigInt']
    variableBorrowRate: Scalars['BigInt']
    stableBorrowRate: Scalars['BigInt']
    averageStableBorrowRate: Scalars['BigInt']
    liquidityIndex: Scalars['BigInt']
    variableBorrowIndex: Scalars['BigInt']
    aToken: AToken
    lastUpdateTimestamp: Scalars['Int']
    lifetimeDepositorsInterestEarned: Scalars['BigInt']
    aTokenTotalSupply: Scalars['BigInt']
    lifetimeLiquidity: Scalars['BigInt']
    lifetimeBorrows: Scalars['BigInt']
    lifetimeBorrowsStable: Scalars['BigInt']
    lifetimeBorrowsVariable: Scalars['BigInt']
    lifetimeRepayments: Scalars['BigInt']
    lifetimeWithdrawals: Scalars['BigInt']
    lifetimeLiquidated: Scalars['BigInt']
    lifetimeFeeOriginated: Scalars['BigInt']
    lifetimeFeeCollected: Scalars['BigInt']
    lifetimeFlashLoans: Scalars['BigInt']
    lifetimeFlashloanDepositorsFee: Scalars['BigInt']
    lifetimeFlashloanProtocolFee: Scalars['BigInt']
    userReserves: UserReserve[]
    depositHistory: Deposit[]
    redeemUnderlyingHistory: RedeemUnderlying[]
    borrowHistory: Borrow[]
    usageAsCollateralHistory: UsageAsCollateral[]
    swapHistory: Swap[]
    rebalanceStableBorrowRateHistory: RebalanceStableBorrowRate[]
    repayHistory: Repay[]
    flashLoanHistory: FlashLoan[]
    liquidationCallHistory: LiquidationCall[]
    originationFeeLiquidationHistory: OriginationFeeLiquidation[]
    paramsHistory: ReserveParamsHistoryItem[]
    configurationHistory: ReserveConfigurationHistoryItem[]
    deposits: Deposit[]
    __typename: 'Reserve'
}

export interface ReserveConfigurationHistoryItem {
    /**
     * tx hash
     * 
     */
    id: Scalars['ID']
    reserve: Reserve
    usageAsCollateralEnabled: Scalars['Boolean']
    borrowingEnabled: Scalars['Boolean']
    stableBorrowRateEnabled: Scalars['Boolean']
    isActive: Scalars['Boolean']
    isFreezed: Scalars['Boolean']
    reserveInterestRateStrategy: Scalars['Bytes']
    baseLTVasCollateral: Scalars['BigInt']
    reserveLiquidationThreshold: Scalars['BigInt']
    reserveLiquidationBonus: Scalars['BigInt']
    timestamp: Scalars['Int']
    __typename: 'ReserveConfigurationHistoryItem'
}

export type ReserveConfigurationHistoryItem_orderBy = 'id' | 'reserve' | 'usageAsCollateralEnabled' | 'borrowingEnabled' | 'stableBorrowRateEnabled' | 'isActive' | 'isFreezed' | 'reserveInterestRateStrategy' | 'baseLTVasCollateral' | 'reserveLiquidationThreshold' | 'reserveLiquidationBonus' | 'timestamp'

export interface ReserveParamsHistoryItem {
    /**
     * tx hash
     * 
     */
    id: Scalars['ID']
    reserve: Reserve
    variableBorrowRate: Scalars['BigInt']
    variableBorrowIndex: Scalars['BigInt']
    utilizationRate: Scalars['BigDecimal']
    stableBorrowRate: Scalars['BigInt']
    averageStableBorrowRate: Scalars['BigInt']
    liquidityIndex: Scalars['BigInt']
    liquidityRate: Scalars['BigInt']
    totalLiquidity: Scalars['BigInt']
    totalLiquidityAsCollateral: Scalars['BigInt']
    availableLiquidity: Scalars['BigInt']
    totalBorrows: Scalars['BigInt']
    totalBorrowsVariable: Scalars['BigInt']
    totalBorrowsStable: Scalars['BigInt']
    priceInEth: Scalars['BigInt']
    priceInUsd: Scalars['BigDecimal']
    timestamp: Scalars['Int']
    lifetimeFlashloanDepositorsFee: Scalars['BigInt']
    lifetimeFlashloanProtocolFee: Scalars['BigInt']
    lifetimeOriginationFee: Scalars['BigInt']
    lifetimeDepositorsInterestEarned: Scalars['BigInt']
    aTokenTotalSupply: Scalars['BigInt']
    lifetimeRepayments: Scalars['BigInt']
    lifetimeWithdrawals: Scalars['BigInt']
    lifetimeLiquidity: Scalars['BigInt']
    lifetimeBorrows: Scalars['BigInt']
    __typename: 'ReserveParamsHistoryItem'
}

export type ReserveParamsHistoryItem_orderBy = 'id' | 'reserve' | 'variableBorrowRate' | 'variableBorrowIndex' | 'utilizationRate' | 'stableBorrowRate' | 'averageStableBorrowRate' | 'liquidityIndex' | 'liquidityRate' | 'totalLiquidity' | 'totalLiquidityAsCollateral' | 'availableLiquidity' | 'totalBorrows' | 'totalBorrowsVariable' | 'totalBorrowsStable' | 'priceInEth' | 'priceInUsd' | 'timestamp' | 'lifetimeFlashloanDepositorsFee' | 'lifetimeFlashloanProtocolFee' | 'lifetimeOriginationFee' | 'lifetimeDepositorsInterestEarned' | 'aTokenTotalSupply' | 'lifetimeRepayments' | 'lifetimeWithdrawals' | 'lifetimeLiquidity' | 'lifetimeBorrows'

export type Reserve_orderBy = 'id' | 'underlyingAsset' | 'pool' | 'symbol' | 'name' | 'decimals' | 'usageAsCollateralEnabled' | 'borrowingEnabled' | 'stableBorrowRateEnabled' | 'isActive' | 'isFreezed' | 'price' | 'reserveInterestRateStrategy' | 'optimalUtilisationRate' | 'variableRateSlope1' | 'variableRateSlope2' | 'stableRateSlope1' | 'stableRateSlope2' | 'baseVariableBorrowRate' | 'baseLTVasCollateral' | 'reserveLiquidationThreshold' | 'reserveLiquidationBonus' | 'utilizationRate' | 'totalLiquidity' | 'totalLiquidityAsCollateral' | 'availableLiquidity' | 'totalBorrows' | 'totalBorrowsStable' | 'totalBorrowsVariable' | 'liquidityRate' | 'variableBorrowRate' | 'stableBorrowRate' | 'averageStableBorrowRate' | 'liquidityIndex' | 'variableBorrowIndex' | 'aToken' | 'lastUpdateTimestamp' | 'lifetimeDepositorsInterestEarned' | 'aTokenTotalSupply' | 'lifetimeLiquidity' | 'lifetimeBorrows' | 'lifetimeBorrowsStable' | 'lifetimeBorrowsVariable' | 'lifetimeRepayments' | 'lifetimeWithdrawals' | 'lifetimeLiquidated' | 'lifetimeFeeOriginated' | 'lifetimeFeeCollected' | 'lifetimeFlashLoans' | 'lifetimeFlashloanDepositorsFee' | 'lifetimeFlashloanProtocolFee' | 'userReserves' | 'depositHistory' | 'redeemUnderlyingHistory' | 'borrowHistory' | 'usageAsCollateralHistory' | 'swapHistory' | 'rebalanceStableBorrowRateHistory' | 'repayHistory' | 'flashLoanHistory' | 'liquidationCallHistory' | 'originationFeeLiquidationHistory' | 'paramsHistory' | 'configurationHistory' | 'deposits'

export interface Subscription {
    protocol?: Protocol
    protocols: Protocol[]
    contractToPoolMapping?: ContractToPoolMapping
    contractToPoolMappings: ContractToPoolMapping[]
    poolConfigurationHistoryItem?: PoolConfigurationHistoryItem
    poolConfigurationHistoryItems: PoolConfigurationHistoryItem[]
    pool?: Pool
    pools: Pool[]
    priceHistoryItem?: PriceHistoryItem
    priceHistoryItems: PriceHistoryItem[]
    usdEthPriceHistoryItem?: UsdEthPriceHistoryItem
    usdEthPriceHistoryItems: UsdEthPriceHistoryItem[]
    chainlinkAggregator?: ChainlinkAggregator
    chainlinkAggregators: ChainlinkAggregator[]
    priceOracleAsset?: PriceOracleAsset
    priceOracleAssets: PriceOracleAsset[]
    priceOracle?: PriceOracle
    priceOracles: PriceOracle[]
    atoken?: AToken
    atokens: AToken[]
    referrer?: Referrer
    referrers: Referrer[]
    deposit?: Deposit
    deposits: Deposit[]
    redeemUnderlying?: RedeemUnderlying
    redeemUnderlyings: RedeemUnderlying[]
    borrow?: Borrow
    borrows: Borrow[]
    swap?: Swap
    swaps: Swap[]
    usageAsCollateral?: UsageAsCollateral
    usageAsCollaterals: UsageAsCollateral[]
    rebalanceStableBorrowRate?: RebalanceStableBorrowRate
    rebalanceStableBorrowRates: RebalanceStableBorrowRate[]
    repay?: Repay
    repays: Repay[]
    flashLoan?: FlashLoan
    flashLoans: FlashLoan[]
    liquidationCall?: LiquidationCall
    liquidationCalls: LiquidationCall[]
    originationFeeLiquidation?: OriginationFeeLiquidation
    originationFeeLiquidations: OriginationFeeLiquidation[]
    reserveConfigurationHistoryItem?: ReserveConfigurationHistoryItem
    reserveConfigurationHistoryItems: ReserveConfigurationHistoryItem[]
    reserveParamsHistoryItem?: ReserveParamsHistoryItem
    reserveParamsHistoryItems: ReserveParamsHistoryItem[]
    reserve?: Reserve
    reserves: Reserve[]
    atokenBalanceHistoryItem?: ATokenBalanceHistoryItem
    atokenBalanceHistoryItems: ATokenBalanceHistoryItem[]
    userBorrowHistoryItem?: UserBorrowHistoryItem
    userBorrowHistoryItems: UserBorrowHistoryItem[]
    userReserve?: UserReserve
    userReserves: UserReserve[]
    user?: User
    users: User[]
    userTransaction?: UserTransaction
    userTransactions: UserTransaction[]
    /** Access to subgraph metadata */
    _meta?: _Meta_
    __typename: 'Subscription'
}

export interface Swap {
    /**
     * tx hash
     * 
     */
    id: Scalars['ID']
    pool: Pool
    user: User
    reserve: Reserve
    userReserve: UserReserve
    borrowRateFrom: Scalars['BigInt']
    borrowRateModeFrom: BorrowRateMode
    borrowRateTo: Scalars['BigInt']
    borrowRateModeTo: BorrowRateMode
    accruedBorrowInterest: Scalars['BigInt']
    timestamp: Scalars['Int']
    __typename: 'Swap'
}

export type Swap_orderBy = 'id' | 'pool' | 'user' | 'reserve' | 'userReserve' | 'borrowRateFrom' | 'borrowRateModeFrom' | 'borrowRateTo' | 'borrowRateModeTo' | 'accruedBorrowInterest' | 'timestamp'

export interface UsageAsCollateral {
    /**
     * tx hash
     * 
     */
    id: Scalars['ID']
    pool: Pool
    user: User
    reserve: Reserve
    userReserve: UserReserve
    fromState: Scalars['Boolean']
    toState: Scalars['Boolean']
    timestamp: Scalars['Int']
    __typename: 'UsageAsCollateral'
}

export type UsageAsCollateral_orderBy = 'id' | 'pool' | 'user' | 'reserve' | 'userReserve' | 'fromState' | 'toState' | 'timestamp'

export interface UsdEthPriceHistoryItem {
    id: Scalars['ID']
    oracle: PriceOracle
    price: Scalars['BigInt']
    timestamp: Scalars['Int']
    __typename: 'UsdEthPriceHistoryItem'
}

export type UsdEthPriceHistoryItem_orderBy = 'id' | 'oracle' | 'price' | 'timestamp'

export interface User {
    /**
     * user address
     * 
     */
    id: Scalars['ID']
    borrowedReservesCount: Scalars['Int']
    reserves: UserReserve[]
    depositHistory: Deposit[]
    redeemUnderlyingHistory: RedeemUnderlying[]
    usageAsCollateralHistory: UsageAsCollateral[]
    borrowHistory: Borrow[]
    swapHistory: Swap[]
    rebalanceStableBorrowRateHistory: RebalanceStableBorrowRate[]
    repayHistory: Repay[]
    liquidationCallHistory: LiquidationCall[]
    originationFeeLiquidationHistory: OriginationFeeLiquidation[]
    __typename: 'User'
}

export interface UserBorrowHistoryItem {
    /**
     * userReserve + txHash
     * 
     */
    id: Scalars['ID']
    userReserve: UserReserve
    totalBorrows: Scalars['BigInt']
    borrowRate: Scalars['BigInt']
    borrowRateMode: BorrowRateMode
    originationFee: Scalars['BigInt']
    timestamp: Scalars['Int']
    __typename: 'UserBorrowHistoryItem'
}

export type UserBorrowHistoryItem_orderBy = 'id' | 'userReserve' | 'totalBorrows' | 'borrowRate' | 'borrowRateMode' | 'originationFee' | 'timestamp'

export interface UserReserve {
    /**
     * user address + reserve address
     * 
     */
    id: Scalars['ID']
    pool: Pool
    reserve: Reserve
    user: User
    usageAsCollateralEnabledOnUser: Scalars['Boolean']
    userBalanceIndex: Scalars['BigInt']
    principalATokenBalance: Scalars['BigInt']
    redirectedBalance: Scalars['BigInt']
    interestRedirectionAddress: Scalars['Bytes']
    interestRedirectionAllowance: Scalars['Bytes']
    principalBorrows: Scalars['BigInt']
    borrowRate: Scalars['BigInt']
    borrowRateMode: BorrowRateMode
    variableBorrowIndex: Scalars['BigInt']
    /**
     * Amount in currency units included as fee
     * 
     */
    originationFee: Scalars['BigInt']
    lastUpdateTimestamp: Scalars['Int']
    aTokenBalanceHistory: ATokenBalanceHistoryItem[]
    borrowStateHistory: UserBorrowHistoryItem[]
    usageAsCollateralHistory: UsageAsCollateral[]
    depositHistory: Deposit[]
    redeemUnderlyingHistory: RedeemUnderlying[]
    borrowHistory: Borrow[]
    swapHistory: Swap[]
    rebalanceStableBorrowRateHistory: RebalanceStableBorrowRate[]
    repayHistory: Repay[]
    liquidationCallHistory: LiquidationCall[]
    originationFeeLiquidationHistory: OriginationFeeLiquidation[]
    __typename: 'UserReserve'
}

export type UserReserve_orderBy = 'id' | 'pool' | 'reserve' | 'user' | 'usageAsCollateralEnabledOnUser' | 'userBalanceIndex' | 'principalATokenBalance' | 'redirectedBalance' | 'interestRedirectionAddress' | 'interestRedirectionAllowance' | 'principalBorrows' | 'borrowRate' | 'borrowRateMode' | 'variableBorrowIndex' | 'originationFee' | 'lastUpdateTimestamp' | 'aTokenBalanceHistory' | 'borrowStateHistory' | 'usageAsCollateralHistory' | 'depositHistory' | 'redeemUnderlyingHistory' | 'borrowHistory' | 'swapHistory' | 'rebalanceStableBorrowRateHistory' | 'repayHistory' | 'liquidationCallHistory' | 'originationFeeLiquidationHistory'

export type UserTransaction = (Borrow | Deposit | LiquidationCall | OriginationFeeLiquidation | RebalanceStableBorrowRate | RedeemUnderlying | Repay | Swap | UsageAsCollateral) & { __isUnion?: true }

export type UserTransaction_orderBy = 'id' | 'pool' | 'user' | 'timestamp'

export type User_orderBy = 'id' | 'borrowedReservesCount' | 'reserves' | 'depositHistory' | 'redeemUnderlyingHistory' | 'usageAsCollateralHistory' | 'borrowHistory' | 'swapHistory' | 'rebalanceStableBorrowRateHistory' | 'repayHistory' | 'liquidationCallHistory' | 'originationFeeLiquidationHistory'

export interface _Block_ {
    /** The hash of the block */
    hash?: Scalars['Bytes']
    /** The block number */
    number: Scalars['Int']
    __typename: '_Block_'
}


/** The type for the top-level _meta field */
export interface _Meta_ {
    /**
     * Information about a specific subgraph block. The hash of the block
     * will be null if the _meta field has a block constraint that asks for
     * a block number. It will be filled if the _meta field has no block constraint
     * and therefore asks for the latest  block
     * 
     */
    block: _Block_
    /** The deployment ID */
    deployment: Scalars['String']
    /** If `true`, the subgraph encountered indexing errors at some past block */
    hasIndexingErrors: Scalars['Boolean']
    __typename: '_Meta_'
}

export type _SubgraphErrorPolicy_ = 'allow' | 'deny'

export interface ATokenRequest{
    /**
     * AToken address
     * 
     */
    id?: boolean | number
    pool?: PoolRequest
    underlyingAssetAddress?: boolean | number
    underlyingAssetDecimals?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ATokenBalanceHistoryItemRequest{
    /**
     * userReserve + txHash
     * 
     */
    id?: boolean | number
    userReserve?: UserReserveRequest
    balance?: boolean | number
    userBalanceIndex?: boolean | number
    interestRedirectionAddress?: boolean | number
    redirectedBalance?: boolean | number
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ATokenBalanceHistoryItem_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),userReserve?: (Scalars['String'] | null),userReserve_not?: (Scalars['String'] | null),userReserve_gt?: (Scalars['String'] | null),userReserve_lt?: (Scalars['String'] | null),userReserve_gte?: (Scalars['String'] | null),userReserve_lte?: (Scalars['String'] | null),userReserve_in?: (Scalars['String'][] | null),userReserve_not_in?: (Scalars['String'][] | null),userReserve_contains?: (Scalars['String'] | null),userReserve_not_contains?: (Scalars['String'] | null),userReserve_starts_with?: (Scalars['String'] | null),userReserve_not_starts_with?: (Scalars['String'] | null),userReserve_ends_with?: (Scalars['String'] | null),userReserve_not_ends_with?: (Scalars['String'] | null),balance?: (Scalars['BigInt'] | null),balance_not?: (Scalars['BigInt'] | null),balance_gt?: (Scalars['BigInt'] | null),balance_lt?: (Scalars['BigInt'] | null),balance_gte?: (Scalars['BigInt'] | null),balance_lte?: (Scalars['BigInt'] | null),balance_in?: (Scalars['BigInt'][] | null),balance_not_in?: (Scalars['BigInt'][] | null),userBalanceIndex?: (Scalars['BigInt'] | null),userBalanceIndex_not?: (Scalars['BigInt'] | null),userBalanceIndex_gt?: (Scalars['BigInt'] | null),userBalanceIndex_lt?: (Scalars['BigInt'] | null),userBalanceIndex_gte?: (Scalars['BigInt'] | null),userBalanceIndex_lte?: (Scalars['BigInt'] | null),userBalanceIndex_in?: (Scalars['BigInt'][] | null),userBalanceIndex_not_in?: (Scalars['BigInt'][] | null),interestRedirectionAddress?: (Scalars['Bytes'] | null),interestRedirectionAddress_not?: (Scalars['Bytes'] | null),interestRedirectionAddress_in?: (Scalars['Bytes'][] | null),interestRedirectionAddress_not_in?: (Scalars['Bytes'][] | null),interestRedirectionAddress_contains?: (Scalars['Bytes'] | null),interestRedirectionAddress_not_contains?: (Scalars['Bytes'] | null),redirectedBalance?: (Scalars['BigInt'] | null),redirectedBalance_not?: (Scalars['BigInt'] | null),redirectedBalance_gt?: (Scalars['BigInt'] | null),redirectedBalance_lt?: (Scalars['BigInt'] | null),redirectedBalance_gte?: (Scalars['BigInt'] | null),redirectedBalance_lte?: (Scalars['BigInt'] | null),redirectedBalance_in?: (Scalars['BigInt'][] | null),redirectedBalance_not_in?: (Scalars['BigInt'][] | null),timestamp?: (Scalars['Int'] | null),timestamp_not?: (Scalars['Int'] | null),timestamp_gt?: (Scalars['Int'] | null),timestamp_lt?: (Scalars['Int'] | null),timestamp_gte?: (Scalars['Int'] | null),timestamp_lte?: (Scalars['Int'] | null),timestamp_in?: (Scalars['Int'][] | null),timestamp_not_in?: (Scalars['Int'][] | null)}

export interface AToken_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),underlyingAssetAddress?: (Scalars['Bytes'] | null),underlyingAssetAddress_not?: (Scalars['Bytes'] | null),underlyingAssetAddress_in?: (Scalars['Bytes'][] | null),underlyingAssetAddress_not_in?: (Scalars['Bytes'][] | null),underlyingAssetAddress_contains?: (Scalars['Bytes'] | null),underlyingAssetAddress_not_contains?: (Scalars['Bytes'] | null),underlyingAssetDecimals?: (Scalars['Int'] | null),underlyingAssetDecimals_not?: (Scalars['Int'] | null),underlyingAssetDecimals_gt?: (Scalars['Int'] | null),underlyingAssetDecimals_lt?: (Scalars['Int'] | null),underlyingAssetDecimals_gte?: (Scalars['Int'] | null),underlyingAssetDecimals_lte?: (Scalars['Int'] | null),underlyingAssetDecimals_in?: (Scalars['Int'][] | null),underlyingAssetDecimals_not_in?: (Scalars['Int'][] | null)}

export interface Block_height {hash?: (Scalars['Bytes'] | null),number?: (Scalars['Int'] | null)}

export interface BorrowRequest{
    /**
     * tx hash
     * 
     */
    id?: boolean | number
    pool?: PoolRequest
    user?: UserRequest
    reserve?: ReserveRequest
    userReserve?: UserReserveRequest
    amount?: boolean | number
    borrowRate?: boolean | number
    borrowRateMode?: boolean | number
    accruedBorrowInterest?: boolean | number
    referrer?: ReferrerRequest
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Borrow_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),user?: (Scalars['String'] | null),user_not?: (Scalars['String'] | null),user_gt?: (Scalars['String'] | null),user_lt?: (Scalars['String'] | null),user_gte?: (Scalars['String'] | null),user_lte?: (Scalars['String'] | null),user_in?: (Scalars['String'][] | null),user_not_in?: (Scalars['String'][] | null),user_contains?: (Scalars['String'] | null),user_not_contains?: (Scalars['String'] | null),user_starts_with?: (Scalars['String'] | null),user_not_starts_with?: (Scalars['String'] | null),user_ends_with?: (Scalars['String'] | null),user_not_ends_with?: (Scalars['String'] | null),reserve?: (Scalars['String'] | null),reserve_not?: (Scalars['String'] | null),reserve_gt?: (Scalars['String'] | null),reserve_lt?: (Scalars['String'] | null),reserve_gte?: (Scalars['String'] | null),reserve_lte?: (Scalars['String'] | null),reserve_in?: (Scalars['String'][] | null),reserve_not_in?: (Scalars['String'][] | null),reserve_contains?: (Scalars['String'] | null),reserve_not_contains?: (Scalars['String'] | null),reserve_starts_with?: (Scalars['String'] | null),reserve_not_starts_with?: (Scalars['String'] | null),reserve_ends_with?: (Scalars['String'] | null),reserve_not_ends_with?: (Scalars['String'] | null),userReserve?: (Scalars['String'] | null),userReserve_not?: (Scalars['String'] | null),userReserve_gt?: (Scalars['String'] | null),userReserve_lt?: (Scalars['String'] | null),userReserve_gte?: (Scalars['String'] | null),userReserve_lte?: (Scalars['String'] | null),userReserve_in?: (Scalars['String'][] | null),userReserve_not_in?: (Scalars['String'][] | null),userReserve_contains?: (Scalars['String'] | null),userReserve_not_contains?: (Scalars['String'] | null),userReserve_starts_with?: (Scalars['String'] | null),userReserve_not_starts_with?: (Scalars['String'] | null),userReserve_ends_with?: (Scalars['String'] | null),userReserve_not_ends_with?: (Scalars['String'] | null),amount?: (Scalars['BigInt'] | null),amount_not?: (Scalars['BigInt'] | null),amount_gt?: (Scalars['BigInt'] | null),amount_lt?: (Scalars['BigInt'] | null),amount_gte?: (Scalars['BigInt'] | null),amount_lte?: (Scalars['BigInt'] | null),amount_in?: (Scalars['BigInt'][] | null),amount_not_in?: (Scalars['BigInt'][] | null),borrowRate?: (Scalars['BigInt'] | null),borrowRate_not?: (Scalars['BigInt'] | null),borrowRate_gt?: (Scalars['BigInt'] | null),borrowRate_lt?: (Scalars['BigInt'] | null),borrowRate_gte?: (Scalars['BigInt'] | null),borrowRate_lte?: (Scalars['BigInt'] | null),borrowRate_in?: (Scalars['BigInt'][] | null),borrowRate_not_in?: (Scalars['BigInt'][] | null),borrowRateMode?: (BorrowRateMode | null),borrowRateMode_not?: (BorrowRateMode | null),accruedBorrowInterest?: (Scalars['BigInt'] | null),accruedBorrowInterest_not?: (Scalars['BigInt'] | null),accruedBorrowInterest_gt?: (Scalars['BigInt'] | null),accruedBorrowInterest_lt?: (Scalars['BigInt'] | null),accruedBorrowInterest_gte?: (Scalars['BigInt'] | null),accruedBorrowInterest_lte?: (Scalars['BigInt'] | null),accruedBorrowInterest_in?: (Scalars['BigInt'][] | null),accruedBorrowInterest_not_in?: (Scalars['BigInt'][] | null),referrer?: (Scalars['String'] | null),referrer_not?: (Scalars['String'] | null),referrer_gt?: (Scalars['String'] | null),referrer_lt?: (Scalars['String'] | null),referrer_gte?: (Scalars['String'] | null),referrer_lte?: (Scalars['String'] | null),referrer_in?: (Scalars['String'][] | null),referrer_not_in?: (Scalars['String'][] | null),referrer_contains?: (Scalars['String'] | null),referrer_not_contains?: (Scalars['String'] | null),referrer_starts_with?: (Scalars['String'] | null),referrer_not_starts_with?: (Scalars['String'] | null),referrer_ends_with?: (Scalars['String'] | null),referrer_not_ends_with?: (Scalars['String'] | null),timestamp?: (Scalars['Int'] | null),timestamp_not?: (Scalars['Int'] | null),timestamp_gt?: (Scalars['Int'] | null),timestamp_lt?: (Scalars['Int'] | null),timestamp_gte?: (Scalars['Int'] | null),timestamp_lte?: (Scalars['Int'] | null),timestamp_in?: (Scalars['Int'][] | null),timestamp_not_in?: (Scalars['Int'][] | null)}

export interface ChainlinkAggregatorRequest{
    id?: boolean | number
    oracleAsset?: PriceOracleAssetRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ChainlinkAggregator_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),oracleAsset?: (Scalars['String'] | null),oracleAsset_not?: (Scalars['String'] | null),oracleAsset_gt?: (Scalars['String'] | null),oracleAsset_lt?: (Scalars['String'] | null),oracleAsset_gte?: (Scalars['String'] | null),oracleAsset_lte?: (Scalars['String'] | null),oracleAsset_in?: (Scalars['String'][] | null),oracleAsset_not_in?: (Scalars['String'][] | null),oracleAsset_contains?: (Scalars['String'] | null),oracleAsset_not_contains?: (Scalars['String'] | null),oracleAsset_starts_with?: (Scalars['String'] | null),oracleAsset_not_starts_with?: (Scalars['String'] | null),oracleAsset_ends_with?: (Scalars['String'] | null),oracleAsset_not_ends_with?: (Scalars['String'] | null)}

export interface ContractToPoolMappingRequest{
    id?: boolean | number
    pool?: PoolRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ContractToPoolMapping_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null)}

export interface DepositRequest{
    /**
     * tx hash
     * 
     */
    id?: boolean | number
    pool?: PoolRequest
    user?: UserRequest
    reserve?: ReserveRequest
    userReserve?: UserReserveRequest
    amount?: boolean | number
    referrer?: ReferrerRequest
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Deposit_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),user?: (Scalars['String'] | null),user_not?: (Scalars['String'] | null),user_gt?: (Scalars['String'] | null),user_lt?: (Scalars['String'] | null),user_gte?: (Scalars['String'] | null),user_lte?: (Scalars['String'] | null),user_in?: (Scalars['String'][] | null),user_not_in?: (Scalars['String'][] | null),user_contains?: (Scalars['String'] | null),user_not_contains?: (Scalars['String'] | null),user_starts_with?: (Scalars['String'] | null),user_not_starts_with?: (Scalars['String'] | null),user_ends_with?: (Scalars['String'] | null),user_not_ends_with?: (Scalars['String'] | null),reserve?: (Scalars['String'] | null),reserve_not?: (Scalars['String'] | null),reserve_gt?: (Scalars['String'] | null),reserve_lt?: (Scalars['String'] | null),reserve_gte?: (Scalars['String'] | null),reserve_lte?: (Scalars['String'] | null),reserve_in?: (Scalars['String'][] | null),reserve_not_in?: (Scalars['String'][] | null),reserve_contains?: (Scalars['String'] | null),reserve_not_contains?: (Scalars['String'] | null),reserve_starts_with?: (Scalars['String'] | null),reserve_not_starts_with?: (Scalars['String'] | null),reserve_ends_with?: (Scalars['String'] | null),reserve_not_ends_with?: (Scalars['String'] | null),userReserve?: (Scalars['String'] | null),userReserve_not?: (Scalars['String'] | null),userReserve_gt?: (Scalars['String'] | null),userReserve_lt?: (Scalars['String'] | null),userReserve_gte?: (Scalars['String'] | null),userReserve_lte?: (Scalars['String'] | null),userReserve_in?: (Scalars['String'][] | null),userReserve_not_in?: (Scalars['String'][] | null),userReserve_contains?: (Scalars['String'] | null),userReserve_not_contains?: (Scalars['String'] | null),userReserve_starts_with?: (Scalars['String'] | null),userReserve_not_starts_with?: (Scalars['String'] | null),userReserve_ends_with?: (Scalars['String'] | null),userReserve_not_ends_with?: (Scalars['String'] | null),amount?: (Scalars['BigInt'] | null),amount_not?: (Scalars['BigInt'] | null),amount_gt?: (Scalars['BigInt'] | null),amount_lt?: (Scalars['BigInt'] | null),amount_gte?: (Scalars['BigInt'] | null),amount_lte?: (Scalars['BigInt'] | null),amount_in?: (Scalars['BigInt'][] | null),amount_not_in?: (Scalars['BigInt'][] | null),referrer?: (Scalars['String'] | null),referrer_not?: (Scalars['String'] | null),referrer_gt?: (Scalars['String'] | null),referrer_lt?: (Scalars['String'] | null),referrer_gte?: (Scalars['String'] | null),referrer_lte?: (Scalars['String'] | null),referrer_in?: (Scalars['String'][] | null),referrer_not_in?: (Scalars['String'][] | null),referrer_contains?: (Scalars['String'] | null),referrer_not_contains?: (Scalars['String'] | null),referrer_starts_with?: (Scalars['String'] | null),referrer_not_starts_with?: (Scalars['String'] | null),referrer_ends_with?: (Scalars['String'] | null),referrer_not_ends_with?: (Scalars['String'] | null),timestamp?: (Scalars['Int'] | null),timestamp_not?: (Scalars['Int'] | null),timestamp_gt?: (Scalars['Int'] | null),timestamp_lt?: (Scalars['Int'] | null),timestamp_gte?: (Scalars['Int'] | null),timestamp_lte?: (Scalars['Int'] | null),timestamp_in?: (Scalars['Int'][] | null),timestamp_not_in?: (Scalars['Int'][] | null)}

export interface FlashLoanRequest{
    /**
     * tx hash
     * 
     */
    id?: boolean | number
    pool?: PoolRequest
    reserve?: ReserveRequest
    target?: boolean | number
    amount?: boolean | number
    totalFee?: boolean | number
    protocolFee?: boolean | number
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FlashLoan_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),reserve?: (Scalars['String'] | null),reserve_not?: (Scalars['String'] | null),reserve_gt?: (Scalars['String'] | null),reserve_lt?: (Scalars['String'] | null),reserve_gte?: (Scalars['String'] | null),reserve_lte?: (Scalars['String'] | null),reserve_in?: (Scalars['String'][] | null),reserve_not_in?: (Scalars['String'][] | null),reserve_contains?: (Scalars['String'] | null),reserve_not_contains?: (Scalars['String'] | null),reserve_starts_with?: (Scalars['String'] | null),reserve_not_starts_with?: (Scalars['String'] | null),reserve_ends_with?: (Scalars['String'] | null),reserve_not_ends_with?: (Scalars['String'] | null),target?: (Scalars['Bytes'] | null),target_not?: (Scalars['Bytes'] | null),target_in?: (Scalars['Bytes'][] | null),target_not_in?: (Scalars['Bytes'][] | null),target_contains?: (Scalars['Bytes'] | null),target_not_contains?: (Scalars['Bytes'] | null),amount?: (Scalars['BigInt'] | null),amount_not?: (Scalars['BigInt'] | null),amount_gt?: (Scalars['BigInt'] | null),amount_lt?: (Scalars['BigInt'] | null),amount_gte?: (Scalars['BigInt'] | null),amount_lte?: (Scalars['BigInt'] | null),amount_in?: (Scalars['BigInt'][] | null),amount_not_in?: (Scalars['BigInt'][] | null),totalFee?: (Scalars['BigInt'] | null),totalFee_not?: (Scalars['BigInt'] | null),totalFee_gt?: (Scalars['BigInt'] | null),totalFee_lt?: (Scalars['BigInt'] | null),totalFee_gte?: (Scalars['BigInt'] | null),totalFee_lte?: (Scalars['BigInt'] | null),totalFee_in?: (Scalars['BigInt'][] | null),totalFee_not_in?: (Scalars['BigInt'][] | null),protocolFee?: (Scalars['BigInt'] | null),protocolFee_not?: (Scalars['BigInt'] | null),protocolFee_gt?: (Scalars['BigInt'] | null),protocolFee_lt?: (Scalars['BigInt'] | null),protocolFee_gte?: (Scalars['BigInt'] | null),protocolFee_lte?: (Scalars['BigInt'] | null),protocolFee_in?: (Scalars['BigInt'][] | null),protocolFee_not_in?: (Scalars['BigInt'][] | null),timestamp?: (Scalars['Int'] | null),timestamp_not?: (Scalars['Int'] | null),timestamp_gt?: (Scalars['Int'] | null),timestamp_lt?: (Scalars['Int'] | null),timestamp_gte?: (Scalars['Int'] | null),timestamp_lte?: (Scalars['Int'] | null),timestamp_in?: (Scalars['Int'][] | null),timestamp_not_in?: (Scalars['Int'][] | null)}

export interface LiquidationCallRequest{
    /**
     * tx hash
     * 
     */
    id?: boolean | number
    pool?: PoolRequest
    user?: UserRequest
    collateralReserve?: ReserveRequest
    collateralUserReserve?: UserReserveRequest
    collateralAmount?: boolean | number
    principalReserve?: ReserveRequest
    principalUserReserve?: UserReserveRequest
    principalAmount?: boolean | number
    liquidator?: boolean | number
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LiquidationCall_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),user?: (Scalars['String'] | null),user_not?: (Scalars['String'] | null),user_gt?: (Scalars['String'] | null),user_lt?: (Scalars['String'] | null),user_gte?: (Scalars['String'] | null),user_lte?: (Scalars['String'] | null),user_in?: (Scalars['String'][] | null),user_not_in?: (Scalars['String'][] | null),user_contains?: (Scalars['String'] | null),user_not_contains?: (Scalars['String'] | null),user_starts_with?: (Scalars['String'] | null),user_not_starts_with?: (Scalars['String'] | null),user_ends_with?: (Scalars['String'] | null),user_not_ends_with?: (Scalars['String'] | null),collateralReserve?: (Scalars['String'] | null),collateralReserve_not?: (Scalars['String'] | null),collateralReserve_gt?: (Scalars['String'] | null),collateralReserve_lt?: (Scalars['String'] | null),collateralReserve_gte?: (Scalars['String'] | null),collateralReserve_lte?: (Scalars['String'] | null),collateralReserve_in?: (Scalars['String'][] | null),collateralReserve_not_in?: (Scalars['String'][] | null),collateralReserve_contains?: (Scalars['String'] | null),collateralReserve_not_contains?: (Scalars['String'] | null),collateralReserve_starts_with?: (Scalars['String'] | null),collateralReserve_not_starts_with?: (Scalars['String'] | null),collateralReserve_ends_with?: (Scalars['String'] | null),collateralReserve_not_ends_with?: (Scalars['String'] | null),collateralUserReserve?: (Scalars['String'] | null),collateralUserReserve_not?: (Scalars['String'] | null),collateralUserReserve_gt?: (Scalars['String'] | null),collateralUserReserve_lt?: (Scalars['String'] | null),collateralUserReserve_gte?: (Scalars['String'] | null),collateralUserReserve_lte?: (Scalars['String'] | null),collateralUserReserve_in?: (Scalars['String'][] | null),collateralUserReserve_not_in?: (Scalars['String'][] | null),collateralUserReserve_contains?: (Scalars['String'] | null),collateralUserReserve_not_contains?: (Scalars['String'] | null),collateralUserReserve_starts_with?: (Scalars['String'] | null),collateralUserReserve_not_starts_with?: (Scalars['String'] | null),collateralUserReserve_ends_with?: (Scalars['String'] | null),collateralUserReserve_not_ends_with?: (Scalars['String'] | null),collateralAmount?: (Scalars['BigInt'] | null),collateralAmount_not?: (Scalars['BigInt'] | null),collateralAmount_gt?: (Scalars['BigInt'] | null),collateralAmount_lt?: (Scalars['BigInt'] | null),collateralAmount_gte?: (Scalars['BigInt'] | null),collateralAmount_lte?: (Scalars['BigInt'] | null),collateralAmount_in?: (Scalars['BigInt'][] | null),collateralAmount_not_in?: (Scalars['BigInt'][] | null),principalReserve?: (Scalars['String'] | null),principalReserve_not?: (Scalars['String'] | null),principalReserve_gt?: (Scalars['String'] | null),principalReserve_lt?: (Scalars['String'] | null),principalReserve_gte?: (Scalars['String'] | null),principalReserve_lte?: (Scalars['String'] | null),principalReserve_in?: (Scalars['String'][] | null),principalReserve_not_in?: (Scalars['String'][] | null),principalReserve_contains?: (Scalars['String'] | null),principalReserve_not_contains?: (Scalars['String'] | null),principalReserve_starts_with?: (Scalars['String'] | null),principalReserve_not_starts_with?: (Scalars['String'] | null),principalReserve_ends_with?: (Scalars['String'] | null),principalReserve_not_ends_with?: (Scalars['String'] | null),principalUserReserve?: (Scalars['String'] | null),principalUserReserve_not?: (Scalars['String'] | null),principalUserReserve_gt?: (Scalars['String'] | null),principalUserReserve_lt?: (Scalars['String'] | null),principalUserReserve_gte?: (Scalars['String'] | null),principalUserReserve_lte?: (Scalars['String'] | null),principalUserReserve_in?: (Scalars['String'][] | null),principalUserReserve_not_in?: (Scalars['String'][] | null),principalUserReserve_contains?: (Scalars['String'] | null),principalUserReserve_not_contains?: (Scalars['String'] | null),principalUserReserve_starts_with?: (Scalars['String'] | null),principalUserReserve_not_starts_with?: (Scalars['String'] | null),principalUserReserve_ends_with?: (Scalars['String'] | null),principalUserReserve_not_ends_with?: (Scalars['String'] | null),principalAmount?: (Scalars['BigInt'] | null),principalAmount_not?: (Scalars['BigInt'] | null),principalAmount_gt?: (Scalars['BigInt'] | null),principalAmount_lt?: (Scalars['BigInt'] | null),principalAmount_gte?: (Scalars['BigInt'] | null),principalAmount_lte?: (Scalars['BigInt'] | null),principalAmount_in?: (Scalars['BigInt'][] | null),principalAmount_not_in?: (Scalars['BigInt'][] | null),liquidator?: (Scalars['Bytes'] | null),liquidator_not?: (Scalars['Bytes'] | null),liquidator_in?: (Scalars['Bytes'][] | null),liquidator_not_in?: (Scalars['Bytes'][] | null),liquidator_contains?: (Scalars['Bytes'] | null),liquidator_not_contains?: (Scalars['Bytes'] | null),timestamp?: (Scalars['Int'] | null),timestamp_not?: (Scalars['Int'] | null),timestamp_gt?: (Scalars['Int'] | null),timestamp_lt?: (Scalars['Int'] | null),timestamp_gte?: (Scalars['Int'] | null),timestamp_lte?: (Scalars['Int'] | null),timestamp_in?: (Scalars['Int'][] | null),timestamp_not_in?: (Scalars['Int'][] | null)}

export interface OriginationFeeLiquidationRequest{
    /**
     * tx hash
     * 
     */
    id?: boolean | number
    pool?: PoolRequest
    user?: UserRequest
    collateralReserve?: ReserveRequest
    collateralUserReserve?: UserReserveRequest
    principalReserve?: ReserveRequest
    principalUserReserve?: UserReserveRequest
    feeLiquidated?: boolean | number
    liquidatedCollateralForFee?: boolean | number
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OriginationFeeLiquidation_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),user?: (Scalars['String'] | null),user_not?: (Scalars['String'] | null),user_gt?: (Scalars['String'] | null),user_lt?: (Scalars['String'] | null),user_gte?: (Scalars['String'] | null),user_lte?: (Scalars['String'] | null),user_in?: (Scalars['String'][] | null),user_not_in?: (Scalars['String'][] | null),user_contains?: (Scalars['String'] | null),user_not_contains?: (Scalars['String'] | null),user_starts_with?: (Scalars['String'] | null),user_not_starts_with?: (Scalars['String'] | null),user_ends_with?: (Scalars['String'] | null),user_not_ends_with?: (Scalars['String'] | null),collateralReserve?: (Scalars['String'] | null),collateralReserve_not?: (Scalars['String'] | null),collateralReserve_gt?: (Scalars['String'] | null),collateralReserve_lt?: (Scalars['String'] | null),collateralReserve_gte?: (Scalars['String'] | null),collateralReserve_lte?: (Scalars['String'] | null),collateralReserve_in?: (Scalars['String'][] | null),collateralReserve_not_in?: (Scalars['String'][] | null),collateralReserve_contains?: (Scalars['String'] | null),collateralReserve_not_contains?: (Scalars['String'] | null),collateralReserve_starts_with?: (Scalars['String'] | null),collateralReserve_not_starts_with?: (Scalars['String'] | null),collateralReserve_ends_with?: (Scalars['String'] | null),collateralReserve_not_ends_with?: (Scalars['String'] | null),collateralUserReserve?: (Scalars['String'] | null),collateralUserReserve_not?: (Scalars['String'] | null),collateralUserReserve_gt?: (Scalars['String'] | null),collateralUserReserve_lt?: (Scalars['String'] | null),collateralUserReserve_gte?: (Scalars['String'] | null),collateralUserReserve_lte?: (Scalars['String'] | null),collateralUserReserve_in?: (Scalars['String'][] | null),collateralUserReserve_not_in?: (Scalars['String'][] | null),collateralUserReserve_contains?: (Scalars['String'] | null),collateralUserReserve_not_contains?: (Scalars['String'] | null),collateralUserReserve_starts_with?: (Scalars['String'] | null),collateralUserReserve_not_starts_with?: (Scalars['String'] | null),collateralUserReserve_ends_with?: (Scalars['String'] | null),collateralUserReserve_not_ends_with?: (Scalars['String'] | null),principalReserve?: (Scalars['String'] | null),principalReserve_not?: (Scalars['String'] | null),principalReserve_gt?: (Scalars['String'] | null),principalReserve_lt?: (Scalars['String'] | null),principalReserve_gte?: (Scalars['String'] | null),principalReserve_lte?: (Scalars['String'] | null),principalReserve_in?: (Scalars['String'][] | null),principalReserve_not_in?: (Scalars['String'][] | null),principalReserve_contains?: (Scalars['String'] | null),principalReserve_not_contains?: (Scalars['String'] | null),principalReserve_starts_with?: (Scalars['String'] | null),principalReserve_not_starts_with?: (Scalars['String'] | null),principalReserve_ends_with?: (Scalars['String'] | null),principalReserve_not_ends_with?: (Scalars['String'] | null),principalUserReserve?: (Scalars['String'] | null),principalUserReserve_not?: (Scalars['String'] | null),principalUserReserve_gt?: (Scalars['String'] | null),principalUserReserve_lt?: (Scalars['String'] | null),principalUserReserve_gte?: (Scalars['String'] | null),principalUserReserve_lte?: (Scalars['String'] | null),principalUserReserve_in?: (Scalars['String'][] | null),principalUserReserve_not_in?: (Scalars['String'][] | null),principalUserReserve_contains?: (Scalars['String'] | null),principalUserReserve_not_contains?: (Scalars['String'] | null),principalUserReserve_starts_with?: (Scalars['String'] | null),principalUserReserve_not_starts_with?: (Scalars['String'] | null),principalUserReserve_ends_with?: (Scalars['String'] | null),principalUserReserve_not_ends_with?: (Scalars['String'] | null),feeLiquidated?: (Scalars['BigInt'] | null),feeLiquidated_not?: (Scalars['BigInt'] | null),feeLiquidated_gt?: (Scalars['BigInt'] | null),feeLiquidated_lt?: (Scalars['BigInt'] | null),feeLiquidated_gte?: (Scalars['BigInt'] | null),feeLiquidated_lte?: (Scalars['BigInt'] | null),feeLiquidated_in?: (Scalars['BigInt'][] | null),feeLiquidated_not_in?: (Scalars['BigInt'][] | null),liquidatedCollateralForFee?: (Scalars['BigInt'] | null),liquidatedCollateralForFee_not?: (Scalars['BigInt'] | null),liquidatedCollateralForFee_gt?: (Scalars['BigInt'] | null),liquidatedCollateralForFee_lt?: (Scalars['BigInt'] | null),liquidatedCollateralForFee_gte?: (Scalars['BigInt'] | null),liquidatedCollateralForFee_lte?: (Scalars['BigInt'] | null),liquidatedCollateralForFee_in?: (Scalars['BigInt'][] | null),liquidatedCollateralForFee_not_in?: (Scalars['BigInt'][] | null),timestamp?: (Scalars['Int'] | null),timestamp_not?: (Scalars['Int'] | null),timestamp_gt?: (Scalars['Int'] | null),timestamp_lt?: (Scalars['Int'] | null),timestamp_gte?: (Scalars['Int'] | null),timestamp_lte?: (Scalars['Int'] | null),timestamp_in?: (Scalars['Int'][] | null),timestamp_not_in?: (Scalars['Int'][] | null)}

export interface PoolRequest{
    id?: boolean | number
    protocol?: ProtocolRequest
    lendingPool?: boolean | number
    lendingPoolCore?: boolean | number
    lendingPoolParametersProvider?: boolean | number
    lendingPoolManager?: boolean | number
    lendingPoolConfigurator?: boolean | number
    lendingPoolLiquidationManager?: boolean | number
    lendingPoolDataProvider?: boolean | number
    proxyPriceProvider?: boolean | number
    lendingRateOracle?: boolean | number
    feeProvider?: boolean | number
    history?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PoolConfigurationHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PoolConfigurationHistoryItem_filter | null)},PoolConfigurationHistoryItemRequest] | PoolConfigurationHistoryItemRequest
    lastUpdateTimestamp?: boolean | number
    reserves?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Reserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Reserve_filter | null)},ReserveRequest] | ReserveRequest
    depositHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null)},DepositRequest] | DepositRequest
    redeemUnderlyingHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RedeemUnderlying_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RedeemUnderlying_filter | null)},RedeemUnderlyingRequest] | RedeemUnderlyingRequest
    borrowHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Borrow_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Borrow_filter | null)},BorrowRequest] | BorrowRequest
    swapHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null)},SwapRequest] | SwapRequest
    usageAsCollateralHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UsageAsCollateral_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UsageAsCollateral_filter | null)},UsageAsCollateralRequest] | UsageAsCollateralRequest
    rebalanceStableBorrowRateHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RebalanceStableBorrowRate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RebalanceStableBorrowRate_filter | null)},RebalanceStableBorrowRateRequest] | RebalanceStableBorrowRateRequest
    repayHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Repay_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Repay_filter | null)},RepayRequest] | RepayRequest
    flashLoanHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (FlashLoan_orderBy | null),orderDirection?: (OrderDirection | null),where?: (FlashLoan_filter | null)},FlashLoanRequest] | FlashLoanRequest
    liquidationCallHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidationCall_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidationCall_filter | null)},LiquidationCallRequest] | LiquidationCallRequest
    originationFeeLiquidationHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (OriginationFeeLiquidation_orderBy | null),orderDirection?: (OrderDirection | null),where?: (OriginationFeeLiquidation_filter | null)},OriginationFeeLiquidationRequest] | OriginationFeeLiquidationRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PoolConfigurationHistoryItemRequest{
    /**
     * tx hash
     * 
     */
    id?: boolean | number
    pool?: PoolRequest
    lendingPool?: boolean | number
    lendingPoolCore?: boolean | number
    lendingPoolParametersProvider?: boolean | number
    lendingPoolManager?: boolean | number
    lendingPoolConfigurator?: boolean | number
    lendingPoolLiquidationManager?: boolean | number
    lendingPoolDataProvider?: boolean | number
    proxyPriceProvider?: boolean | number
    lendingRateOracle?: boolean | number
    feeProvider?: boolean | number
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PoolConfigurationHistoryItem_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),lendingPool?: (Scalars['Bytes'] | null),lendingPool_not?: (Scalars['Bytes'] | null),lendingPool_in?: (Scalars['Bytes'][] | null),lendingPool_not_in?: (Scalars['Bytes'][] | null),lendingPool_contains?: (Scalars['Bytes'] | null),lendingPool_not_contains?: (Scalars['Bytes'] | null),lendingPoolCore?: (Scalars['Bytes'] | null),lendingPoolCore_not?: (Scalars['Bytes'] | null),lendingPoolCore_in?: (Scalars['Bytes'][] | null),lendingPoolCore_not_in?: (Scalars['Bytes'][] | null),lendingPoolCore_contains?: (Scalars['Bytes'] | null),lendingPoolCore_not_contains?: (Scalars['Bytes'] | null),lendingPoolParametersProvider?: (Scalars['Bytes'] | null),lendingPoolParametersProvider_not?: (Scalars['Bytes'] | null),lendingPoolParametersProvider_in?: (Scalars['Bytes'][] | null),lendingPoolParametersProvider_not_in?: (Scalars['Bytes'][] | null),lendingPoolParametersProvider_contains?: (Scalars['Bytes'] | null),lendingPoolParametersProvider_not_contains?: (Scalars['Bytes'] | null),lendingPoolManager?: (Scalars['Bytes'] | null),lendingPoolManager_not?: (Scalars['Bytes'] | null),lendingPoolManager_in?: (Scalars['Bytes'][] | null),lendingPoolManager_not_in?: (Scalars['Bytes'][] | null),lendingPoolManager_contains?: (Scalars['Bytes'] | null),lendingPoolManager_not_contains?: (Scalars['Bytes'] | null),lendingPoolConfigurator?: (Scalars['Bytes'] | null),lendingPoolConfigurator_not?: (Scalars['Bytes'] | null),lendingPoolConfigurator_in?: (Scalars['Bytes'][] | null),lendingPoolConfigurator_not_in?: (Scalars['Bytes'][] | null),lendingPoolConfigurator_contains?: (Scalars['Bytes'] | null),lendingPoolConfigurator_not_contains?: (Scalars['Bytes'] | null),lendingPoolLiquidationManager?: (Scalars['Bytes'] | null),lendingPoolLiquidationManager_not?: (Scalars['Bytes'] | null),lendingPoolLiquidationManager_in?: (Scalars['Bytes'][] | null),lendingPoolLiquidationManager_not_in?: (Scalars['Bytes'][] | null),lendingPoolLiquidationManager_contains?: (Scalars['Bytes'] | null),lendingPoolLiquidationManager_not_contains?: (Scalars['Bytes'] | null),lendingPoolDataProvider?: (Scalars['Bytes'] | null),lendingPoolDataProvider_not?: (Scalars['Bytes'] | null),lendingPoolDataProvider_in?: (Scalars['Bytes'][] | null),lendingPoolDataProvider_not_in?: (Scalars['Bytes'][] | null),lendingPoolDataProvider_contains?: (Scalars['Bytes'] | null),lendingPoolDataProvider_not_contains?: (Scalars['Bytes'] | null),proxyPriceProvider?: (Scalars['Bytes'] | null),proxyPriceProvider_not?: (Scalars['Bytes'] | null),proxyPriceProvider_in?: (Scalars['Bytes'][] | null),proxyPriceProvider_not_in?: (Scalars['Bytes'][] | null),proxyPriceProvider_contains?: (Scalars['Bytes'] | null),proxyPriceProvider_not_contains?: (Scalars['Bytes'] | null),lendingRateOracle?: (Scalars['Bytes'] | null),lendingRateOracle_not?: (Scalars['Bytes'] | null),lendingRateOracle_in?: (Scalars['Bytes'][] | null),lendingRateOracle_not_in?: (Scalars['Bytes'][] | null),lendingRateOracle_contains?: (Scalars['Bytes'] | null),lendingRateOracle_not_contains?: (Scalars['Bytes'] | null),feeProvider?: (Scalars['Bytes'] | null),feeProvider_not?: (Scalars['Bytes'] | null),feeProvider_in?: (Scalars['Bytes'][] | null),feeProvider_not_in?: (Scalars['Bytes'][] | null),feeProvider_contains?: (Scalars['Bytes'] | null),feeProvider_not_contains?: (Scalars['Bytes'] | null),timestamp?: (Scalars['Int'] | null),timestamp_not?: (Scalars['Int'] | null),timestamp_gt?: (Scalars['Int'] | null),timestamp_lt?: (Scalars['Int'] | null),timestamp_gte?: (Scalars['Int'] | null),timestamp_lte?: (Scalars['Int'] | null),timestamp_in?: (Scalars['Int'][] | null),timestamp_not_in?: (Scalars['Int'][] | null)}

export interface Pool_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),protocol?: (Scalars['String'] | null),protocol_not?: (Scalars['String'] | null),protocol_gt?: (Scalars['String'] | null),protocol_lt?: (Scalars['String'] | null),protocol_gte?: (Scalars['String'] | null),protocol_lte?: (Scalars['String'] | null),protocol_in?: (Scalars['String'][] | null),protocol_not_in?: (Scalars['String'][] | null),protocol_contains?: (Scalars['String'] | null),protocol_not_contains?: (Scalars['String'] | null),protocol_starts_with?: (Scalars['String'] | null),protocol_not_starts_with?: (Scalars['String'] | null),protocol_ends_with?: (Scalars['String'] | null),protocol_not_ends_with?: (Scalars['String'] | null),lendingPool?: (Scalars['Bytes'] | null),lendingPool_not?: (Scalars['Bytes'] | null),lendingPool_in?: (Scalars['Bytes'][] | null),lendingPool_not_in?: (Scalars['Bytes'][] | null),lendingPool_contains?: (Scalars['Bytes'] | null),lendingPool_not_contains?: (Scalars['Bytes'] | null),lendingPoolCore?: (Scalars['Bytes'] | null),lendingPoolCore_not?: (Scalars['Bytes'] | null),lendingPoolCore_in?: (Scalars['Bytes'][] | null),lendingPoolCore_not_in?: (Scalars['Bytes'][] | null),lendingPoolCore_contains?: (Scalars['Bytes'] | null),lendingPoolCore_not_contains?: (Scalars['Bytes'] | null),lendingPoolParametersProvider?: (Scalars['Bytes'] | null),lendingPoolParametersProvider_not?: (Scalars['Bytes'] | null),lendingPoolParametersProvider_in?: (Scalars['Bytes'][] | null),lendingPoolParametersProvider_not_in?: (Scalars['Bytes'][] | null),lendingPoolParametersProvider_contains?: (Scalars['Bytes'] | null),lendingPoolParametersProvider_not_contains?: (Scalars['Bytes'] | null),lendingPoolManager?: (Scalars['Bytes'] | null),lendingPoolManager_not?: (Scalars['Bytes'] | null),lendingPoolManager_in?: (Scalars['Bytes'][] | null),lendingPoolManager_not_in?: (Scalars['Bytes'][] | null),lendingPoolManager_contains?: (Scalars['Bytes'] | null),lendingPoolManager_not_contains?: (Scalars['Bytes'] | null),lendingPoolConfigurator?: (Scalars['Bytes'] | null),lendingPoolConfigurator_not?: (Scalars['Bytes'] | null),lendingPoolConfigurator_in?: (Scalars['Bytes'][] | null),lendingPoolConfigurator_not_in?: (Scalars['Bytes'][] | null),lendingPoolConfigurator_contains?: (Scalars['Bytes'] | null),lendingPoolConfigurator_not_contains?: (Scalars['Bytes'] | null),lendingPoolLiquidationManager?: (Scalars['Bytes'] | null),lendingPoolLiquidationManager_not?: (Scalars['Bytes'] | null),lendingPoolLiquidationManager_in?: (Scalars['Bytes'][] | null),lendingPoolLiquidationManager_not_in?: (Scalars['Bytes'][] | null),lendingPoolLiquidationManager_contains?: (Scalars['Bytes'] | null),lendingPoolLiquidationManager_not_contains?: (Scalars['Bytes'] | null),lendingPoolDataProvider?: (Scalars['Bytes'] | null),lendingPoolDataProvider_not?: (Scalars['Bytes'] | null),lendingPoolDataProvider_in?: (Scalars['Bytes'][] | null),lendingPoolDataProvider_not_in?: (Scalars['Bytes'][] | null),lendingPoolDataProvider_contains?: (Scalars['Bytes'] | null),lendingPoolDataProvider_not_contains?: (Scalars['Bytes'] | null),proxyPriceProvider?: (Scalars['Bytes'] | null),proxyPriceProvider_not?: (Scalars['Bytes'] | null),proxyPriceProvider_in?: (Scalars['Bytes'][] | null),proxyPriceProvider_not_in?: (Scalars['Bytes'][] | null),proxyPriceProvider_contains?: (Scalars['Bytes'] | null),proxyPriceProvider_not_contains?: (Scalars['Bytes'] | null),lendingRateOracle?: (Scalars['Bytes'] | null),lendingRateOracle_not?: (Scalars['Bytes'] | null),lendingRateOracle_in?: (Scalars['Bytes'][] | null),lendingRateOracle_not_in?: (Scalars['Bytes'][] | null),lendingRateOracle_contains?: (Scalars['Bytes'] | null),lendingRateOracle_not_contains?: (Scalars['Bytes'] | null),feeProvider?: (Scalars['Bytes'] | null),feeProvider_not?: (Scalars['Bytes'] | null),feeProvider_in?: (Scalars['Bytes'][] | null),feeProvider_not_in?: (Scalars['Bytes'][] | null),feeProvider_contains?: (Scalars['Bytes'] | null),feeProvider_not_contains?: (Scalars['Bytes'] | null),lastUpdateTimestamp?: (Scalars['Int'] | null),lastUpdateTimestamp_not?: (Scalars['Int'] | null),lastUpdateTimestamp_gt?: (Scalars['Int'] | null),lastUpdateTimestamp_lt?: (Scalars['Int'] | null),lastUpdateTimestamp_gte?: (Scalars['Int'] | null),lastUpdateTimestamp_lte?: (Scalars['Int'] | null),lastUpdateTimestamp_in?: (Scalars['Int'][] | null),lastUpdateTimestamp_not_in?: (Scalars['Int'][] | null)}

export interface PriceHistoryItemRequest{
    id?: boolean | number
    asset?: PriceOracleAssetRequest
    price?: boolean | number
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PriceHistoryItem_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),asset?: (Scalars['String'] | null),asset_not?: (Scalars['String'] | null),asset_gt?: (Scalars['String'] | null),asset_lt?: (Scalars['String'] | null),asset_gte?: (Scalars['String'] | null),asset_lte?: (Scalars['String'] | null),asset_in?: (Scalars['String'][] | null),asset_not_in?: (Scalars['String'][] | null),asset_contains?: (Scalars['String'] | null),asset_not_contains?: (Scalars['String'] | null),asset_starts_with?: (Scalars['String'] | null),asset_not_starts_with?: (Scalars['String'] | null),asset_ends_with?: (Scalars['String'] | null),asset_not_ends_with?: (Scalars['String'] | null),price?: (Scalars['BigInt'] | null),price_not?: (Scalars['BigInt'] | null),price_gt?: (Scalars['BigInt'] | null),price_lt?: (Scalars['BigInt'] | null),price_gte?: (Scalars['BigInt'] | null),price_lte?: (Scalars['BigInt'] | null),price_in?: (Scalars['BigInt'][] | null),price_not_in?: (Scalars['BigInt'][] | null),timestamp?: (Scalars['Int'] | null),timestamp_not?: (Scalars['Int'] | null),timestamp_gt?: (Scalars['Int'] | null),timestamp_lt?: (Scalars['Int'] | null),timestamp_gte?: (Scalars['Int'] | null),timestamp_lte?: (Scalars['Int'] | null),timestamp_in?: (Scalars['Int'][] | null),timestamp_not_in?: (Scalars['Int'][] | null)}

export interface PriceOracleRequest{
    id?: boolean | number
    proxyPriceProvider?: boolean | number
    usdPriceEth?: boolean | number
    usdPriceEthMainSource?: boolean | number
    usdPriceEthFallbackRequired?: boolean | number
    fallbackPriceOracle?: boolean | number
    tokens?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceOracleAsset_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceOracleAsset_filter | null)},PriceOracleAssetRequest] | PriceOracleAssetRequest
    usdPriceEthHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UsdEthPriceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UsdEthPriceHistoryItem_filter | null)},UsdEthPriceHistoryItemRequest] | UsdEthPriceHistoryItemRequest
    tokensWithFallback?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceOracleAsset_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceOracleAsset_filter | null)},PriceOracleAssetRequest] | PriceOracleAssetRequest
    lastUpdateTimestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PriceOracleAssetRequest{
    id?: boolean | number
    oracle?: PriceOracleRequest
    priceInEth?: boolean | number
    priceSource?: boolean | number
    isFallbackRequired?: boolean | number
    type?: boolean | number
    platform?: boolean | number
    dependentAssets?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceOracleAsset_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceOracleAsset_filter | null)},PriceOracleAssetRequest] | PriceOracleAssetRequest
    lastUpdateTimestamp?: boolean | number
    priceHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceHistoryItem_filter | null)},PriceHistoryItemRequest] | PriceHistoryItemRequest
    fromChainlinkSourcesRegistry?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PriceOracleAsset_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),oracle?: (Scalars['String'] | null),oracle_not?: (Scalars['String'] | null),oracle_gt?: (Scalars['String'] | null),oracle_lt?: (Scalars['String'] | null),oracle_gte?: (Scalars['String'] | null),oracle_lte?: (Scalars['String'] | null),oracle_in?: (Scalars['String'][] | null),oracle_not_in?: (Scalars['String'][] | null),oracle_contains?: (Scalars['String'] | null),oracle_not_contains?: (Scalars['String'] | null),oracle_starts_with?: (Scalars['String'] | null),oracle_not_starts_with?: (Scalars['String'] | null),oracle_ends_with?: (Scalars['String'] | null),oracle_not_ends_with?: (Scalars['String'] | null),priceInEth?: (Scalars['BigInt'] | null),priceInEth_not?: (Scalars['BigInt'] | null),priceInEth_gt?: (Scalars['BigInt'] | null),priceInEth_lt?: (Scalars['BigInt'] | null),priceInEth_gte?: (Scalars['BigInt'] | null),priceInEth_lte?: (Scalars['BigInt'] | null),priceInEth_in?: (Scalars['BigInt'][] | null),priceInEth_not_in?: (Scalars['BigInt'][] | null),priceSource?: (Scalars['Bytes'] | null),priceSource_not?: (Scalars['Bytes'] | null),priceSource_in?: (Scalars['Bytes'][] | null),priceSource_not_in?: (Scalars['Bytes'][] | null),priceSource_contains?: (Scalars['Bytes'] | null),priceSource_not_contains?: (Scalars['Bytes'] | null),isFallbackRequired?: (Scalars['Boolean'] | null),isFallbackRequired_not?: (Scalars['Boolean'] | null),isFallbackRequired_in?: (Scalars['Boolean'][] | null),isFallbackRequired_not_in?: (Scalars['Boolean'][] | null),type?: (PriceOracleAssetType | null),type_not?: (PriceOracleAssetType | null),platform?: (PriceOracleAssetPlatform | null),platform_not?: (PriceOracleAssetPlatform | null),dependentAssets?: (Scalars['String'][] | null),dependentAssets_not?: (Scalars['String'][] | null),dependentAssets_contains?: (Scalars['String'][] | null),dependentAssets_not_contains?: (Scalars['String'][] | null),lastUpdateTimestamp?: (Scalars['Int'] | null),lastUpdateTimestamp_not?: (Scalars['Int'] | null),lastUpdateTimestamp_gt?: (Scalars['Int'] | null),lastUpdateTimestamp_lt?: (Scalars['Int'] | null),lastUpdateTimestamp_gte?: (Scalars['Int'] | null),lastUpdateTimestamp_lte?: (Scalars['Int'] | null),lastUpdateTimestamp_in?: (Scalars['Int'][] | null),lastUpdateTimestamp_not_in?: (Scalars['Int'][] | null),fromChainlinkSourcesRegistry?: (Scalars['Boolean'] | null),fromChainlinkSourcesRegistry_not?: (Scalars['Boolean'] | null),fromChainlinkSourcesRegistry_in?: (Scalars['Boolean'][] | null),fromChainlinkSourcesRegistry_not_in?: (Scalars['Boolean'][] | null)}

export interface PriceOracle_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),proxyPriceProvider?: (Scalars['Bytes'] | null),proxyPriceProvider_not?: (Scalars['Bytes'] | null),proxyPriceProvider_in?: (Scalars['Bytes'][] | null),proxyPriceProvider_not_in?: (Scalars['Bytes'][] | null),proxyPriceProvider_contains?: (Scalars['Bytes'] | null),proxyPriceProvider_not_contains?: (Scalars['Bytes'] | null),usdPriceEth?: (Scalars['BigInt'] | null),usdPriceEth_not?: (Scalars['BigInt'] | null),usdPriceEth_gt?: (Scalars['BigInt'] | null),usdPriceEth_lt?: (Scalars['BigInt'] | null),usdPriceEth_gte?: (Scalars['BigInt'] | null),usdPriceEth_lte?: (Scalars['BigInt'] | null),usdPriceEth_in?: (Scalars['BigInt'][] | null),usdPriceEth_not_in?: (Scalars['BigInt'][] | null),usdPriceEthMainSource?: (Scalars['Bytes'] | null),usdPriceEthMainSource_not?: (Scalars['Bytes'] | null),usdPriceEthMainSource_in?: (Scalars['Bytes'][] | null),usdPriceEthMainSource_not_in?: (Scalars['Bytes'][] | null),usdPriceEthMainSource_contains?: (Scalars['Bytes'] | null),usdPriceEthMainSource_not_contains?: (Scalars['Bytes'] | null),usdPriceEthFallbackRequired?: (Scalars['Boolean'] | null),usdPriceEthFallbackRequired_not?: (Scalars['Boolean'] | null),usdPriceEthFallbackRequired_in?: (Scalars['Boolean'][] | null),usdPriceEthFallbackRequired_not_in?: (Scalars['Boolean'][] | null),fallbackPriceOracle?: (Scalars['Bytes'] | null),fallbackPriceOracle_not?: (Scalars['Bytes'] | null),fallbackPriceOracle_in?: (Scalars['Bytes'][] | null),fallbackPriceOracle_not_in?: (Scalars['Bytes'][] | null),fallbackPriceOracle_contains?: (Scalars['Bytes'] | null),fallbackPriceOracle_not_contains?: (Scalars['Bytes'] | null),tokensWithFallback?: (Scalars['String'][] | null),tokensWithFallback_not?: (Scalars['String'][] | null),tokensWithFallback_contains?: (Scalars['String'][] | null),tokensWithFallback_not_contains?: (Scalars['String'][] | null),lastUpdateTimestamp?: (Scalars['Int'] | null),lastUpdateTimestamp_not?: (Scalars['Int'] | null),lastUpdateTimestamp_gt?: (Scalars['Int'] | null),lastUpdateTimestamp_lt?: (Scalars['Int'] | null),lastUpdateTimestamp_gte?: (Scalars['Int'] | null),lastUpdateTimestamp_lte?: (Scalars['Int'] | null),lastUpdateTimestamp_in?: (Scalars['Int'][] | null),lastUpdateTimestamp_not_in?: (Scalars['Int'][] | null)}

export interface ProtocolRequest{
    id?: boolean | number
    pools?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Pool_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Pool_filter | null)},PoolRequest] | PoolRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Protocol_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null)}

export interface QueryRequest{
    protocol?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ProtocolRequest]
    protocols?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Protocol_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Protocol_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ProtocolRequest]
    contractToPoolMapping?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ContractToPoolMappingRequest]
    contractToPoolMappings?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ContractToPoolMapping_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ContractToPoolMapping_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ContractToPoolMappingRequest]
    poolConfigurationHistoryItem?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},PoolConfigurationHistoryItemRequest]
    poolConfigurationHistoryItems?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PoolConfigurationHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PoolConfigurationHistoryItem_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},PoolConfigurationHistoryItemRequest]
    pool?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},PoolRequest]
    pools?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Pool_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Pool_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},PoolRequest]
    priceHistoryItem?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},PriceHistoryItemRequest]
    priceHistoryItems?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceHistoryItem_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},PriceHistoryItemRequest]
    usdEthPriceHistoryItem?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UsdEthPriceHistoryItemRequest]
    usdEthPriceHistoryItems?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UsdEthPriceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UsdEthPriceHistoryItem_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UsdEthPriceHistoryItemRequest]
    chainlinkAggregator?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ChainlinkAggregatorRequest]
    chainlinkAggregators?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ChainlinkAggregator_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ChainlinkAggregator_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ChainlinkAggregatorRequest]
    priceOracleAsset?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},PriceOracleAssetRequest]
    priceOracleAssets?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceOracleAsset_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceOracleAsset_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},PriceOracleAssetRequest]
    priceOracle?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},PriceOracleRequest]
    priceOracles?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceOracle_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceOracle_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},PriceOracleRequest]
    atoken?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ATokenRequest]
    atokens?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (AToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (AToken_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ATokenRequest]
    referrer?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ReferrerRequest]
    referrers?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Referrer_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Referrer_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ReferrerRequest]
    deposit?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},DepositRequest]
    deposits?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},DepositRequest]
    redeemUnderlying?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},RedeemUnderlyingRequest]
    redeemUnderlyings?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RedeemUnderlying_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RedeemUnderlying_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},RedeemUnderlyingRequest]
    borrow?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},BorrowRequest]
    borrows?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Borrow_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Borrow_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},BorrowRequest]
    swap?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},SwapRequest]
    swaps?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},SwapRequest]
    usageAsCollateral?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UsageAsCollateralRequest]
    usageAsCollaterals?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UsageAsCollateral_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UsageAsCollateral_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UsageAsCollateralRequest]
    rebalanceStableBorrowRate?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},RebalanceStableBorrowRateRequest]
    rebalanceStableBorrowRates?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RebalanceStableBorrowRate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RebalanceStableBorrowRate_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},RebalanceStableBorrowRateRequest]
    repay?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},RepayRequest]
    repays?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Repay_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Repay_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},RepayRequest]
    flashLoan?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},FlashLoanRequest]
    flashLoans?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (FlashLoan_orderBy | null),orderDirection?: (OrderDirection | null),where?: (FlashLoan_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},FlashLoanRequest]
    liquidationCall?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},LiquidationCallRequest]
    liquidationCalls?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidationCall_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidationCall_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},LiquidationCallRequest]
    originationFeeLiquidation?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},OriginationFeeLiquidationRequest]
    originationFeeLiquidations?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (OriginationFeeLiquidation_orderBy | null),orderDirection?: (OrderDirection | null),where?: (OriginationFeeLiquidation_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},OriginationFeeLiquidationRequest]
    reserveConfigurationHistoryItem?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ReserveConfigurationHistoryItemRequest]
    reserveConfigurationHistoryItems?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ReserveConfigurationHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ReserveConfigurationHistoryItem_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ReserveConfigurationHistoryItemRequest]
    reserveParamsHistoryItem?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ReserveParamsHistoryItemRequest]
    reserveParamsHistoryItems?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ReserveParamsHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ReserveParamsHistoryItem_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ReserveParamsHistoryItemRequest]
    reserve?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ReserveRequest]
    reserves?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Reserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Reserve_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ReserveRequest]
    atokenBalanceHistoryItem?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ATokenBalanceHistoryItemRequest]
    atokenBalanceHistoryItems?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ATokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ATokenBalanceHistoryItem_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ATokenBalanceHistoryItemRequest]
    userBorrowHistoryItem?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UserBorrowHistoryItemRequest]
    userBorrowHistoryItems?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UserBorrowHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UserBorrowHistoryItem_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UserBorrowHistoryItemRequest]
    userReserve?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UserReserveRequest]
    userReserves?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UserReserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UserReserve_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UserReserveRequest]
    user?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UserRequest]
    users?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (User_orderBy | null),orderDirection?: (OrderDirection | null),where?: (User_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UserRequest]
    userTransaction?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UserTransactionRequest]
    userTransactions?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UserTransaction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UserTransaction_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UserTransactionRequest]
    /** Access to subgraph metadata */
    _meta?: [{block?: (Block_height | null)},_Meta_Request] | _Meta_Request
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RebalanceStableBorrowRateRequest{
    /**
     * tx hash
     * 
     */
    id?: boolean | number
    pool?: PoolRequest
    user?: UserRequest
    reserve?: ReserveRequest
    userReserve?: UserReserveRequest
    borrowRateFrom?: boolean | number
    borrowRateTo?: boolean | number
    accruedBorrowInterest?: boolean | number
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RebalanceStableBorrowRate_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),user?: (Scalars['String'] | null),user_not?: (Scalars['String'] | null),user_gt?: (Scalars['String'] | null),user_lt?: (Scalars['String'] | null),user_gte?: (Scalars['String'] | null),user_lte?: (Scalars['String'] | null),user_in?: (Scalars['String'][] | null),user_not_in?: (Scalars['String'][] | null),user_contains?: (Scalars['String'] | null),user_not_contains?: (Scalars['String'] | null),user_starts_with?: (Scalars['String'] | null),user_not_starts_with?: (Scalars['String'] | null),user_ends_with?: (Scalars['String'] | null),user_not_ends_with?: (Scalars['String'] | null),reserve?: (Scalars['String'] | null),reserve_not?: (Scalars['String'] | null),reserve_gt?: (Scalars['String'] | null),reserve_lt?: (Scalars['String'] | null),reserve_gte?: (Scalars['String'] | null),reserve_lte?: (Scalars['String'] | null),reserve_in?: (Scalars['String'][] | null),reserve_not_in?: (Scalars['String'][] | null),reserve_contains?: (Scalars['String'] | null),reserve_not_contains?: (Scalars['String'] | null),reserve_starts_with?: (Scalars['String'] | null),reserve_not_starts_with?: (Scalars['String'] | null),reserve_ends_with?: (Scalars['String'] | null),reserve_not_ends_with?: (Scalars['String'] | null),userReserve?: (Scalars['String'] | null),userReserve_not?: (Scalars['String'] | null),userReserve_gt?: (Scalars['String'] | null),userReserve_lt?: (Scalars['String'] | null),userReserve_gte?: (Scalars['String'] | null),userReserve_lte?: (Scalars['String'] | null),userReserve_in?: (Scalars['String'][] | null),userReserve_not_in?: (Scalars['String'][] | null),userReserve_contains?: (Scalars['String'] | null),userReserve_not_contains?: (Scalars['String'] | null),userReserve_starts_with?: (Scalars['String'] | null),userReserve_not_starts_with?: (Scalars['String'] | null),userReserve_ends_with?: (Scalars['String'] | null),userReserve_not_ends_with?: (Scalars['String'] | null),borrowRateFrom?: (Scalars['BigInt'] | null),borrowRateFrom_not?: (Scalars['BigInt'] | null),borrowRateFrom_gt?: (Scalars['BigInt'] | null),borrowRateFrom_lt?: (Scalars['BigInt'] | null),borrowRateFrom_gte?: (Scalars['BigInt'] | null),borrowRateFrom_lte?: (Scalars['BigInt'] | null),borrowRateFrom_in?: (Scalars['BigInt'][] | null),borrowRateFrom_not_in?: (Scalars['BigInt'][] | null),borrowRateTo?: (Scalars['BigInt'] | null),borrowRateTo_not?: (Scalars['BigInt'] | null),borrowRateTo_gt?: (Scalars['BigInt'] | null),borrowRateTo_lt?: (Scalars['BigInt'] | null),borrowRateTo_gte?: (Scalars['BigInt'] | null),borrowRateTo_lte?: (Scalars['BigInt'] | null),borrowRateTo_in?: (Scalars['BigInt'][] | null),borrowRateTo_not_in?: (Scalars['BigInt'][] | null),accruedBorrowInterest?: (Scalars['BigInt'] | null),accruedBorrowInterest_not?: (Scalars['BigInt'] | null),accruedBorrowInterest_gt?: (Scalars['BigInt'] | null),accruedBorrowInterest_lt?: (Scalars['BigInt'] | null),accruedBorrowInterest_gte?: (Scalars['BigInt'] | null),accruedBorrowInterest_lte?: (Scalars['BigInt'] | null),accruedBorrowInterest_in?: (Scalars['BigInt'][] | null),accruedBorrowInterest_not_in?: (Scalars['BigInt'][] | null),timestamp?: (Scalars['Int'] | null),timestamp_not?: (Scalars['Int'] | null),timestamp_gt?: (Scalars['Int'] | null),timestamp_lt?: (Scalars['Int'] | null),timestamp_gte?: (Scalars['Int'] | null),timestamp_lte?: (Scalars['Int'] | null),timestamp_in?: (Scalars['Int'][] | null),timestamp_not_in?: (Scalars['Int'][] | null)}

export interface RedeemUnderlyingRequest{
    /**
     * tx hash
     * 
     */
    id?: boolean | number
    pool?: PoolRequest
    user?: UserRequest
    reserve?: ReserveRequest
    userReserve?: UserReserveRequest
    amount?: boolean | number
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RedeemUnderlying_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),user?: (Scalars['String'] | null),user_not?: (Scalars['String'] | null),user_gt?: (Scalars['String'] | null),user_lt?: (Scalars['String'] | null),user_gte?: (Scalars['String'] | null),user_lte?: (Scalars['String'] | null),user_in?: (Scalars['String'][] | null),user_not_in?: (Scalars['String'][] | null),user_contains?: (Scalars['String'] | null),user_not_contains?: (Scalars['String'] | null),user_starts_with?: (Scalars['String'] | null),user_not_starts_with?: (Scalars['String'] | null),user_ends_with?: (Scalars['String'] | null),user_not_ends_with?: (Scalars['String'] | null),reserve?: (Scalars['String'] | null),reserve_not?: (Scalars['String'] | null),reserve_gt?: (Scalars['String'] | null),reserve_lt?: (Scalars['String'] | null),reserve_gte?: (Scalars['String'] | null),reserve_lte?: (Scalars['String'] | null),reserve_in?: (Scalars['String'][] | null),reserve_not_in?: (Scalars['String'][] | null),reserve_contains?: (Scalars['String'] | null),reserve_not_contains?: (Scalars['String'] | null),reserve_starts_with?: (Scalars['String'] | null),reserve_not_starts_with?: (Scalars['String'] | null),reserve_ends_with?: (Scalars['String'] | null),reserve_not_ends_with?: (Scalars['String'] | null),userReserve?: (Scalars['String'] | null),userReserve_not?: (Scalars['String'] | null),userReserve_gt?: (Scalars['String'] | null),userReserve_lt?: (Scalars['String'] | null),userReserve_gte?: (Scalars['String'] | null),userReserve_lte?: (Scalars['String'] | null),userReserve_in?: (Scalars['String'][] | null),userReserve_not_in?: (Scalars['String'][] | null),userReserve_contains?: (Scalars['String'] | null),userReserve_not_contains?: (Scalars['String'] | null),userReserve_starts_with?: (Scalars['String'] | null),userReserve_not_starts_with?: (Scalars['String'] | null),userReserve_ends_with?: (Scalars['String'] | null),userReserve_not_ends_with?: (Scalars['String'] | null),amount?: (Scalars['BigInt'] | null),amount_not?: (Scalars['BigInt'] | null),amount_gt?: (Scalars['BigInt'] | null),amount_lt?: (Scalars['BigInt'] | null),amount_gte?: (Scalars['BigInt'] | null),amount_lte?: (Scalars['BigInt'] | null),amount_in?: (Scalars['BigInt'][] | null),amount_not_in?: (Scalars['BigInt'][] | null),timestamp?: (Scalars['Int'] | null),timestamp_not?: (Scalars['Int'] | null),timestamp_gt?: (Scalars['Int'] | null),timestamp_lt?: (Scalars['Int'] | null),timestamp_gte?: (Scalars['Int'] | null),timestamp_lte?: (Scalars['Int'] | null),timestamp_in?: (Scalars['Int'][] | null),timestamp_not_in?: (Scalars['Int'][] | null)}

export interface ReferrerRequest{
    id?: boolean | number
    deposits?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null)},DepositRequest] | DepositRequest
    borrows?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Borrow_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Borrow_filter | null)},BorrowRequest] | BorrowRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Referrer_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null)}

export interface RepayRequest{
    /**
     * tx hash
     * 
     */
    id?: boolean | number
    pool?: PoolRequest
    user?: UserRequest
    reserve?: ReserveRequest
    userReserve?: UserReserveRequest
    amountAfterFee?: boolean | number
    fee?: boolean | number
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Repay_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),user?: (Scalars['String'] | null),user_not?: (Scalars['String'] | null),user_gt?: (Scalars['String'] | null),user_lt?: (Scalars['String'] | null),user_gte?: (Scalars['String'] | null),user_lte?: (Scalars['String'] | null),user_in?: (Scalars['String'][] | null),user_not_in?: (Scalars['String'][] | null),user_contains?: (Scalars['String'] | null),user_not_contains?: (Scalars['String'] | null),user_starts_with?: (Scalars['String'] | null),user_not_starts_with?: (Scalars['String'] | null),user_ends_with?: (Scalars['String'] | null),user_not_ends_with?: (Scalars['String'] | null),reserve?: (Scalars['String'] | null),reserve_not?: (Scalars['String'] | null),reserve_gt?: (Scalars['String'] | null),reserve_lt?: (Scalars['String'] | null),reserve_gte?: (Scalars['String'] | null),reserve_lte?: (Scalars['String'] | null),reserve_in?: (Scalars['String'][] | null),reserve_not_in?: (Scalars['String'][] | null),reserve_contains?: (Scalars['String'] | null),reserve_not_contains?: (Scalars['String'] | null),reserve_starts_with?: (Scalars['String'] | null),reserve_not_starts_with?: (Scalars['String'] | null),reserve_ends_with?: (Scalars['String'] | null),reserve_not_ends_with?: (Scalars['String'] | null),userReserve?: (Scalars['String'] | null),userReserve_not?: (Scalars['String'] | null),userReserve_gt?: (Scalars['String'] | null),userReserve_lt?: (Scalars['String'] | null),userReserve_gte?: (Scalars['String'] | null),userReserve_lte?: (Scalars['String'] | null),userReserve_in?: (Scalars['String'][] | null),userReserve_not_in?: (Scalars['String'][] | null),userReserve_contains?: (Scalars['String'] | null),userReserve_not_contains?: (Scalars['String'] | null),userReserve_starts_with?: (Scalars['String'] | null),userReserve_not_starts_with?: (Scalars['String'] | null),userReserve_ends_with?: (Scalars['String'] | null),userReserve_not_ends_with?: (Scalars['String'] | null),amountAfterFee?: (Scalars['BigInt'] | null),amountAfterFee_not?: (Scalars['BigInt'] | null),amountAfterFee_gt?: (Scalars['BigInt'] | null),amountAfterFee_lt?: (Scalars['BigInt'] | null),amountAfterFee_gte?: (Scalars['BigInt'] | null),amountAfterFee_lte?: (Scalars['BigInt'] | null),amountAfterFee_in?: (Scalars['BigInt'][] | null),amountAfterFee_not_in?: (Scalars['BigInt'][] | null),fee?: (Scalars['BigInt'] | null),fee_not?: (Scalars['BigInt'] | null),fee_gt?: (Scalars['BigInt'] | null),fee_lt?: (Scalars['BigInt'] | null),fee_gte?: (Scalars['BigInt'] | null),fee_lte?: (Scalars['BigInt'] | null),fee_in?: (Scalars['BigInt'][] | null),fee_not_in?: (Scalars['BigInt'][] | null),timestamp?: (Scalars['Int'] | null),timestamp_not?: (Scalars['Int'] | null),timestamp_gt?: (Scalars['Int'] | null),timestamp_lt?: (Scalars['Int'] | null),timestamp_gte?: (Scalars['Int'] | null),timestamp_lte?: (Scalars['Int'] | null),timestamp_in?: (Scalars['Int'][] | null),timestamp_not_in?: (Scalars['Int'][] | null)}

export interface ReserveRequest{
    /**
     * Reserve address
     * 
     */
    id?: boolean | number
    underlyingAsset?: boolean | number
    pool?: PoolRequest
    symbol?: boolean | number
    name?: boolean | number
    decimals?: boolean | number
    usageAsCollateralEnabled?: boolean | number
    borrowingEnabled?: boolean | number
    stableBorrowRateEnabled?: boolean | number
    isActive?: boolean | number
    isFreezed?: boolean | number
    price?: PriceOracleAssetRequest
    reserveInterestRateStrategy?: boolean | number
    optimalUtilisationRate?: boolean | number
    variableRateSlope1?: boolean | number
    variableRateSlope2?: boolean | number
    stableRateSlope1?: boolean | number
    stableRateSlope2?: boolean | number
    baseVariableBorrowRate?: boolean | number
    baseLTVasCollateral?: boolean | number
    reserveLiquidationThreshold?: boolean | number
    reserveLiquidationBonus?: boolean | number
    utilizationRate?: boolean | number
    totalLiquidity?: boolean | number
    totalLiquidityAsCollateral?: boolean | number
    availableLiquidity?: boolean | number
    totalBorrows?: boolean | number
    totalBorrowsStable?: boolean | number
    totalBorrowsVariable?: boolean | number
    liquidityRate?: boolean | number
    variableBorrowRate?: boolean | number
    stableBorrowRate?: boolean | number
    averageStableBorrowRate?: boolean | number
    liquidityIndex?: boolean | number
    variableBorrowIndex?: boolean | number
    aToken?: ATokenRequest
    lastUpdateTimestamp?: boolean | number
    lifetimeDepositorsInterestEarned?: boolean | number
    aTokenTotalSupply?: boolean | number
    lifetimeLiquidity?: boolean | number
    lifetimeBorrows?: boolean | number
    lifetimeBorrowsStable?: boolean | number
    lifetimeBorrowsVariable?: boolean | number
    lifetimeRepayments?: boolean | number
    lifetimeWithdrawals?: boolean | number
    lifetimeLiquidated?: boolean | number
    lifetimeFeeOriginated?: boolean | number
    lifetimeFeeCollected?: boolean | number
    lifetimeFlashLoans?: boolean | number
    lifetimeFlashloanDepositorsFee?: boolean | number
    lifetimeFlashloanProtocolFee?: boolean | number
    userReserves?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UserReserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UserReserve_filter | null)},UserReserveRequest] | UserReserveRequest
    depositHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null)},DepositRequest] | DepositRequest
    redeemUnderlyingHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RedeemUnderlying_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RedeemUnderlying_filter | null)},RedeemUnderlyingRequest] | RedeemUnderlyingRequest
    borrowHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Borrow_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Borrow_filter | null)},BorrowRequest] | BorrowRequest
    usageAsCollateralHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UsageAsCollateral_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UsageAsCollateral_filter | null)},UsageAsCollateralRequest] | UsageAsCollateralRequest
    swapHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null)},SwapRequest] | SwapRequest
    rebalanceStableBorrowRateHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RebalanceStableBorrowRate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RebalanceStableBorrowRate_filter | null)},RebalanceStableBorrowRateRequest] | RebalanceStableBorrowRateRequest
    repayHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Repay_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Repay_filter | null)},RepayRequest] | RepayRequest
    flashLoanHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (FlashLoan_orderBy | null),orderDirection?: (OrderDirection | null),where?: (FlashLoan_filter | null)},FlashLoanRequest] | FlashLoanRequest
    liquidationCallHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidationCall_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidationCall_filter | null)},LiquidationCallRequest] | LiquidationCallRequest
    originationFeeLiquidationHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (OriginationFeeLiquidation_orderBy | null),orderDirection?: (OrderDirection | null),where?: (OriginationFeeLiquidation_filter | null)},OriginationFeeLiquidationRequest] | OriginationFeeLiquidationRequest
    paramsHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ReserveParamsHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ReserveParamsHistoryItem_filter | null)},ReserveParamsHistoryItemRequest] | ReserveParamsHistoryItemRequest
    configurationHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ReserveConfigurationHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ReserveConfigurationHistoryItem_filter | null)},ReserveConfigurationHistoryItemRequest] | ReserveConfigurationHistoryItemRequest
    deposits?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null)},DepositRequest] | DepositRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ReserveConfigurationHistoryItemRequest{
    /**
     * tx hash
     * 
     */
    id?: boolean | number
    reserve?: ReserveRequest
    usageAsCollateralEnabled?: boolean | number
    borrowingEnabled?: boolean | number
    stableBorrowRateEnabled?: boolean | number
    isActive?: boolean | number
    isFreezed?: boolean | number
    reserveInterestRateStrategy?: boolean | number
    baseLTVasCollateral?: boolean | number
    reserveLiquidationThreshold?: boolean | number
    reserveLiquidationBonus?: boolean | number
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ReserveConfigurationHistoryItem_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),reserve?: (Scalars['String'] | null),reserve_not?: (Scalars['String'] | null),reserve_gt?: (Scalars['String'] | null),reserve_lt?: (Scalars['String'] | null),reserve_gte?: (Scalars['String'] | null),reserve_lte?: (Scalars['String'] | null),reserve_in?: (Scalars['String'][] | null),reserve_not_in?: (Scalars['String'][] | null),reserve_contains?: (Scalars['String'] | null),reserve_not_contains?: (Scalars['String'] | null),reserve_starts_with?: (Scalars['String'] | null),reserve_not_starts_with?: (Scalars['String'] | null),reserve_ends_with?: (Scalars['String'] | null),reserve_not_ends_with?: (Scalars['String'] | null),usageAsCollateralEnabled?: (Scalars['Boolean'] | null),usageAsCollateralEnabled_not?: (Scalars['Boolean'] | null),usageAsCollateralEnabled_in?: (Scalars['Boolean'][] | null),usageAsCollateralEnabled_not_in?: (Scalars['Boolean'][] | null),borrowingEnabled?: (Scalars['Boolean'] | null),borrowingEnabled_not?: (Scalars['Boolean'] | null),borrowingEnabled_in?: (Scalars['Boolean'][] | null),borrowingEnabled_not_in?: (Scalars['Boolean'][] | null),stableBorrowRateEnabled?: (Scalars['Boolean'] | null),stableBorrowRateEnabled_not?: (Scalars['Boolean'] | null),stableBorrowRateEnabled_in?: (Scalars['Boolean'][] | null),stableBorrowRateEnabled_not_in?: (Scalars['Boolean'][] | null),isActive?: (Scalars['Boolean'] | null),isActive_not?: (Scalars['Boolean'] | null),isActive_in?: (Scalars['Boolean'][] | null),isActive_not_in?: (Scalars['Boolean'][] | null),isFreezed?: (Scalars['Boolean'] | null),isFreezed_not?: (Scalars['Boolean'] | null),isFreezed_in?: (Scalars['Boolean'][] | null),isFreezed_not_in?: (Scalars['Boolean'][] | null),reserveInterestRateStrategy?: (Scalars['Bytes'] | null),reserveInterestRateStrategy_not?: (Scalars['Bytes'] | null),reserveInterestRateStrategy_in?: (Scalars['Bytes'][] | null),reserveInterestRateStrategy_not_in?: (Scalars['Bytes'][] | null),reserveInterestRateStrategy_contains?: (Scalars['Bytes'] | null),reserveInterestRateStrategy_not_contains?: (Scalars['Bytes'] | null),baseLTVasCollateral?: (Scalars['BigInt'] | null),baseLTVasCollateral_not?: (Scalars['BigInt'] | null),baseLTVasCollateral_gt?: (Scalars['BigInt'] | null),baseLTVasCollateral_lt?: (Scalars['BigInt'] | null),baseLTVasCollateral_gte?: (Scalars['BigInt'] | null),baseLTVasCollateral_lte?: (Scalars['BigInt'] | null),baseLTVasCollateral_in?: (Scalars['BigInt'][] | null),baseLTVasCollateral_not_in?: (Scalars['BigInt'][] | null),reserveLiquidationThreshold?: (Scalars['BigInt'] | null),reserveLiquidationThreshold_not?: (Scalars['BigInt'] | null),reserveLiquidationThreshold_gt?: (Scalars['BigInt'] | null),reserveLiquidationThreshold_lt?: (Scalars['BigInt'] | null),reserveLiquidationThreshold_gte?: (Scalars['BigInt'] | null),reserveLiquidationThreshold_lte?: (Scalars['BigInt'] | null),reserveLiquidationThreshold_in?: (Scalars['BigInt'][] | null),reserveLiquidationThreshold_not_in?: (Scalars['BigInt'][] | null),reserveLiquidationBonus?: (Scalars['BigInt'] | null),reserveLiquidationBonus_not?: (Scalars['BigInt'] | null),reserveLiquidationBonus_gt?: (Scalars['BigInt'] | null),reserveLiquidationBonus_lt?: (Scalars['BigInt'] | null),reserveLiquidationBonus_gte?: (Scalars['BigInt'] | null),reserveLiquidationBonus_lte?: (Scalars['BigInt'] | null),reserveLiquidationBonus_in?: (Scalars['BigInt'][] | null),reserveLiquidationBonus_not_in?: (Scalars['BigInt'][] | null),timestamp?: (Scalars['Int'] | null),timestamp_not?: (Scalars['Int'] | null),timestamp_gt?: (Scalars['Int'] | null),timestamp_lt?: (Scalars['Int'] | null),timestamp_gte?: (Scalars['Int'] | null),timestamp_lte?: (Scalars['Int'] | null),timestamp_in?: (Scalars['Int'][] | null),timestamp_not_in?: (Scalars['Int'][] | null)}

export interface ReserveParamsHistoryItemRequest{
    /**
     * tx hash
     * 
     */
    id?: boolean | number
    reserve?: ReserveRequest
    variableBorrowRate?: boolean | number
    variableBorrowIndex?: boolean | number
    utilizationRate?: boolean | number
    stableBorrowRate?: boolean | number
    averageStableBorrowRate?: boolean | number
    liquidityIndex?: boolean | number
    liquidityRate?: boolean | number
    totalLiquidity?: boolean | number
    totalLiquidityAsCollateral?: boolean | number
    availableLiquidity?: boolean | number
    totalBorrows?: boolean | number
    totalBorrowsVariable?: boolean | number
    totalBorrowsStable?: boolean | number
    priceInEth?: boolean | number
    priceInUsd?: boolean | number
    timestamp?: boolean | number
    lifetimeFlashloanDepositorsFee?: boolean | number
    lifetimeFlashloanProtocolFee?: boolean | number
    lifetimeOriginationFee?: boolean | number
    lifetimeDepositorsInterestEarned?: boolean | number
    aTokenTotalSupply?: boolean | number
    lifetimeRepayments?: boolean | number
    lifetimeWithdrawals?: boolean | number
    lifetimeLiquidity?: boolean | number
    lifetimeBorrows?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ReserveParamsHistoryItem_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),reserve?: (Scalars['String'] | null),reserve_not?: (Scalars['String'] | null),reserve_gt?: (Scalars['String'] | null),reserve_lt?: (Scalars['String'] | null),reserve_gte?: (Scalars['String'] | null),reserve_lte?: (Scalars['String'] | null),reserve_in?: (Scalars['String'][] | null),reserve_not_in?: (Scalars['String'][] | null),reserve_contains?: (Scalars['String'] | null),reserve_not_contains?: (Scalars['String'] | null),reserve_starts_with?: (Scalars['String'] | null),reserve_not_starts_with?: (Scalars['String'] | null),reserve_ends_with?: (Scalars['String'] | null),reserve_not_ends_with?: (Scalars['String'] | null),variableBorrowRate?: (Scalars['BigInt'] | null),variableBorrowRate_not?: (Scalars['BigInt'] | null),variableBorrowRate_gt?: (Scalars['BigInt'] | null),variableBorrowRate_lt?: (Scalars['BigInt'] | null),variableBorrowRate_gte?: (Scalars['BigInt'] | null),variableBorrowRate_lte?: (Scalars['BigInt'] | null),variableBorrowRate_in?: (Scalars['BigInt'][] | null),variableBorrowRate_not_in?: (Scalars['BigInt'][] | null),variableBorrowIndex?: (Scalars['BigInt'] | null),variableBorrowIndex_not?: (Scalars['BigInt'] | null),variableBorrowIndex_gt?: (Scalars['BigInt'] | null),variableBorrowIndex_lt?: (Scalars['BigInt'] | null),variableBorrowIndex_gte?: (Scalars['BigInt'] | null),variableBorrowIndex_lte?: (Scalars['BigInt'] | null),variableBorrowIndex_in?: (Scalars['BigInt'][] | null),variableBorrowIndex_not_in?: (Scalars['BigInt'][] | null),utilizationRate?: (Scalars['BigDecimal'] | null),utilizationRate_not?: (Scalars['BigDecimal'] | null),utilizationRate_gt?: (Scalars['BigDecimal'] | null),utilizationRate_lt?: (Scalars['BigDecimal'] | null),utilizationRate_gte?: (Scalars['BigDecimal'] | null),utilizationRate_lte?: (Scalars['BigDecimal'] | null),utilizationRate_in?: (Scalars['BigDecimal'][] | null),utilizationRate_not_in?: (Scalars['BigDecimal'][] | null),stableBorrowRate?: (Scalars['BigInt'] | null),stableBorrowRate_not?: (Scalars['BigInt'] | null),stableBorrowRate_gt?: (Scalars['BigInt'] | null),stableBorrowRate_lt?: (Scalars['BigInt'] | null),stableBorrowRate_gte?: (Scalars['BigInt'] | null),stableBorrowRate_lte?: (Scalars['BigInt'] | null),stableBorrowRate_in?: (Scalars['BigInt'][] | null),stableBorrowRate_not_in?: (Scalars['BigInt'][] | null),averageStableBorrowRate?: (Scalars['BigInt'] | null),averageStableBorrowRate_not?: (Scalars['BigInt'] | null),averageStableBorrowRate_gt?: (Scalars['BigInt'] | null),averageStableBorrowRate_lt?: (Scalars['BigInt'] | null),averageStableBorrowRate_gte?: (Scalars['BigInt'] | null),averageStableBorrowRate_lte?: (Scalars['BigInt'] | null),averageStableBorrowRate_in?: (Scalars['BigInt'][] | null),averageStableBorrowRate_not_in?: (Scalars['BigInt'][] | null),liquidityIndex?: (Scalars['BigInt'] | null),liquidityIndex_not?: (Scalars['BigInt'] | null),liquidityIndex_gt?: (Scalars['BigInt'] | null),liquidityIndex_lt?: (Scalars['BigInt'] | null),liquidityIndex_gte?: (Scalars['BigInt'] | null),liquidityIndex_lte?: (Scalars['BigInt'] | null),liquidityIndex_in?: (Scalars['BigInt'][] | null),liquidityIndex_not_in?: (Scalars['BigInt'][] | null),liquidityRate?: (Scalars['BigInt'] | null),liquidityRate_not?: (Scalars['BigInt'] | null),liquidityRate_gt?: (Scalars['BigInt'] | null),liquidityRate_lt?: (Scalars['BigInt'] | null),liquidityRate_gte?: (Scalars['BigInt'] | null),liquidityRate_lte?: (Scalars['BigInt'] | null),liquidityRate_in?: (Scalars['BigInt'][] | null),liquidityRate_not_in?: (Scalars['BigInt'][] | null),totalLiquidity?: (Scalars['BigInt'] | null),totalLiquidity_not?: (Scalars['BigInt'] | null),totalLiquidity_gt?: (Scalars['BigInt'] | null),totalLiquidity_lt?: (Scalars['BigInt'] | null),totalLiquidity_gte?: (Scalars['BigInt'] | null),totalLiquidity_lte?: (Scalars['BigInt'] | null),totalLiquidity_in?: (Scalars['BigInt'][] | null),totalLiquidity_not_in?: (Scalars['BigInt'][] | null),totalLiquidityAsCollateral?: (Scalars['BigInt'] | null),totalLiquidityAsCollateral_not?: (Scalars['BigInt'] | null),totalLiquidityAsCollateral_gt?: (Scalars['BigInt'] | null),totalLiquidityAsCollateral_lt?: (Scalars['BigInt'] | null),totalLiquidityAsCollateral_gte?: (Scalars['BigInt'] | null),totalLiquidityAsCollateral_lte?: (Scalars['BigInt'] | null),totalLiquidityAsCollateral_in?: (Scalars['BigInt'][] | null),totalLiquidityAsCollateral_not_in?: (Scalars['BigInt'][] | null),availableLiquidity?: (Scalars['BigInt'] | null),availableLiquidity_not?: (Scalars['BigInt'] | null),availableLiquidity_gt?: (Scalars['BigInt'] | null),availableLiquidity_lt?: (Scalars['BigInt'] | null),availableLiquidity_gte?: (Scalars['BigInt'] | null),availableLiquidity_lte?: (Scalars['BigInt'] | null),availableLiquidity_in?: (Scalars['BigInt'][] | null),availableLiquidity_not_in?: (Scalars['BigInt'][] | null),totalBorrows?: (Scalars['BigInt'] | null),totalBorrows_not?: (Scalars['BigInt'] | null),totalBorrows_gt?: (Scalars['BigInt'] | null),totalBorrows_lt?: (Scalars['BigInt'] | null),totalBorrows_gte?: (Scalars['BigInt'] | null),totalBorrows_lte?: (Scalars['BigInt'] | null),totalBorrows_in?: (Scalars['BigInt'][] | null),totalBorrows_not_in?: (Scalars['BigInt'][] | null),totalBorrowsVariable?: (Scalars['BigInt'] | null),totalBorrowsVariable_not?: (Scalars['BigInt'] | null),totalBorrowsVariable_gt?: (Scalars['BigInt'] | null),totalBorrowsVariable_lt?: (Scalars['BigInt'] | null),totalBorrowsVariable_gte?: (Scalars['BigInt'] | null),totalBorrowsVariable_lte?: (Scalars['BigInt'] | null),totalBorrowsVariable_in?: (Scalars['BigInt'][] | null),totalBorrowsVariable_not_in?: (Scalars['BigInt'][] | null),totalBorrowsStable?: (Scalars['BigInt'] | null),totalBorrowsStable_not?: (Scalars['BigInt'] | null),totalBorrowsStable_gt?: (Scalars['BigInt'] | null),totalBorrowsStable_lt?: (Scalars['BigInt'] | null),totalBorrowsStable_gte?: (Scalars['BigInt'] | null),totalBorrowsStable_lte?: (Scalars['BigInt'] | null),totalBorrowsStable_in?: (Scalars['BigInt'][] | null),totalBorrowsStable_not_in?: (Scalars['BigInt'][] | null),priceInEth?: (Scalars['BigInt'] | null),priceInEth_not?: (Scalars['BigInt'] | null),priceInEth_gt?: (Scalars['BigInt'] | null),priceInEth_lt?: (Scalars['BigInt'] | null),priceInEth_gte?: (Scalars['BigInt'] | null),priceInEth_lte?: (Scalars['BigInt'] | null),priceInEth_in?: (Scalars['BigInt'][] | null),priceInEth_not_in?: (Scalars['BigInt'][] | null),priceInUsd?: (Scalars['BigDecimal'] | null),priceInUsd_not?: (Scalars['BigDecimal'] | null),priceInUsd_gt?: (Scalars['BigDecimal'] | null),priceInUsd_lt?: (Scalars['BigDecimal'] | null),priceInUsd_gte?: (Scalars['BigDecimal'] | null),priceInUsd_lte?: (Scalars['BigDecimal'] | null),priceInUsd_in?: (Scalars['BigDecimal'][] | null),priceInUsd_not_in?: (Scalars['BigDecimal'][] | null),timestamp?: (Scalars['Int'] | null),timestamp_not?: (Scalars['Int'] | null),timestamp_gt?: (Scalars['Int'] | null),timestamp_lt?: (Scalars['Int'] | null),timestamp_gte?: (Scalars['Int'] | null),timestamp_lte?: (Scalars['Int'] | null),timestamp_in?: (Scalars['Int'][] | null),timestamp_not_in?: (Scalars['Int'][] | null),lifetimeFlashloanDepositorsFee?: (Scalars['BigInt'] | null),lifetimeFlashloanDepositorsFee_not?: (Scalars['BigInt'] | null),lifetimeFlashloanDepositorsFee_gt?: (Scalars['BigInt'] | null),lifetimeFlashloanDepositorsFee_lt?: (Scalars['BigInt'] | null),lifetimeFlashloanDepositorsFee_gte?: (Scalars['BigInt'] | null),lifetimeFlashloanDepositorsFee_lte?: (Scalars['BigInt'] | null),lifetimeFlashloanDepositorsFee_in?: (Scalars['BigInt'][] | null),lifetimeFlashloanDepositorsFee_not_in?: (Scalars['BigInt'][] | null),lifetimeFlashloanProtocolFee?: (Scalars['BigInt'] | null),lifetimeFlashloanProtocolFee_not?: (Scalars['BigInt'] | null),lifetimeFlashloanProtocolFee_gt?: (Scalars['BigInt'] | null),lifetimeFlashloanProtocolFee_lt?: (Scalars['BigInt'] | null),lifetimeFlashloanProtocolFee_gte?: (Scalars['BigInt'] | null),lifetimeFlashloanProtocolFee_lte?: (Scalars['BigInt'] | null),lifetimeFlashloanProtocolFee_in?: (Scalars['BigInt'][] | null),lifetimeFlashloanProtocolFee_not_in?: (Scalars['BigInt'][] | null),lifetimeOriginationFee?: (Scalars['BigInt'] | null),lifetimeOriginationFee_not?: (Scalars['BigInt'] | null),lifetimeOriginationFee_gt?: (Scalars['BigInt'] | null),lifetimeOriginationFee_lt?: (Scalars['BigInt'] | null),lifetimeOriginationFee_gte?: (Scalars['BigInt'] | null),lifetimeOriginationFee_lte?: (Scalars['BigInt'] | null),lifetimeOriginationFee_in?: (Scalars['BigInt'][] | null),lifetimeOriginationFee_not_in?: (Scalars['BigInt'][] | null),lifetimeDepositorsInterestEarned?: (Scalars['BigInt'] | null),lifetimeDepositorsInterestEarned_not?: (Scalars['BigInt'] | null),lifetimeDepositorsInterestEarned_gt?: (Scalars['BigInt'] | null),lifetimeDepositorsInterestEarned_lt?: (Scalars['BigInt'] | null),lifetimeDepositorsInterestEarned_gte?: (Scalars['BigInt'] | null),lifetimeDepositorsInterestEarned_lte?: (Scalars['BigInt'] | null),lifetimeDepositorsInterestEarned_in?: (Scalars['BigInt'][] | null),lifetimeDepositorsInterestEarned_not_in?: (Scalars['BigInt'][] | null),aTokenTotalSupply?: (Scalars['BigInt'] | null),aTokenTotalSupply_not?: (Scalars['BigInt'] | null),aTokenTotalSupply_gt?: (Scalars['BigInt'] | null),aTokenTotalSupply_lt?: (Scalars['BigInt'] | null),aTokenTotalSupply_gte?: (Scalars['BigInt'] | null),aTokenTotalSupply_lte?: (Scalars['BigInt'] | null),aTokenTotalSupply_in?: (Scalars['BigInt'][] | null),aTokenTotalSupply_not_in?: (Scalars['BigInt'][] | null),lifetimeRepayments?: (Scalars['BigInt'] | null),lifetimeRepayments_not?: (Scalars['BigInt'] | null),lifetimeRepayments_gt?: (Scalars['BigInt'] | null),lifetimeRepayments_lt?: (Scalars['BigInt'] | null),lifetimeRepayments_gte?: (Scalars['BigInt'] | null),lifetimeRepayments_lte?: (Scalars['BigInt'] | null),lifetimeRepayments_in?: (Scalars['BigInt'][] | null),lifetimeRepayments_not_in?: (Scalars['BigInt'][] | null),lifetimeWithdrawals?: (Scalars['BigInt'] | null),lifetimeWithdrawals_not?: (Scalars['BigInt'] | null),lifetimeWithdrawals_gt?: (Scalars['BigInt'] | null),lifetimeWithdrawals_lt?: (Scalars['BigInt'] | null),lifetimeWithdrawals_gte?: (Scalars['BigInt'] | null),lifetimeWithdrawals_lte?: (Scalars['BigInt'] | null),lifetimeWithdrawals_in?: (Scalars['BigInt'][] | null),lifetimeWithdrawals_not_in?: (Scalars['BigInt'][] | null),lifetimeLiquidity?: (Scalars['BigInt'] | null),lifetimeLiquidity_not?: (Scalars['BigInt'] | null),lifetimeLiquidity_gt?: (Scalars['BigInt'] | null),lifetimeLiquidity_lt?: (Scalars['BigInt'] | null),lifetimeLiquidity_gte?: (Scalars['BigInt'] | null),lifetimeLiquidity_lte?: (Scalars['BigInt'] | null),lifetimeLiquidity_in?: (Scalars['BigInt'][] | null),lifetimeLiquidity_not_in?: (Scalars['BigInt'][] | null),lifetimeBorrows?: (Scalars['BigInt'] | null),lifetimeBorrows_not?: (Scalars['BigInt'] | null),lifetimeBorrows_gt?: (Scalars['BigInt'] | null),lifetimeBorrows_lt?: (Scalars['BigInt'] | null),lifetimeBorrows_gte?: (Scalars['BigInt'] | null),lifetimeBorrows_lte?: (Scalars['BigInt'] | null),lifetimeBorrows_in?: (Scalars['BigInt'][] | null),lifetimeBorrows_not_in?: (Scalars['BigInt'][] | null)}

export interface Reserve_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),underlyingAsset?: (Scalars['Bytes'] | null),underlyingAsset_not?: (Scalars['Bytes'] | null),underlyingAsset_in?: (Scalars['Bytes'][] | null),underlyingAsset_not_in?: (Scalars['Bytes'][] | null),underlyingAsset_contains?: (Scalars['Bytes'] | null),underlyingAsset_not_contains?: (Scalars['Bytes'] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),symbol?: (Scalars['String'] | null),symbol_not?: (Scalars['String'] | null),symbol_gt?: (Scalars['String'] | null),symbol_lt?: (Scalars['String'] | null),symbol_gte?: (Scalars['String'] | null),symbol_lte?: (Scalars['String'] | null),symbol_in?: (Scalars['String'][] | null),symbol_not_in?: (Scalars['String'][] | null),symbol_contains?: (Scalars['String'] | null),symbol_not_contains?: (Scalars['String'] | null),symbol_starts_with?: (Scalars['String'] | null),symbol_not_starts_with?: (Scalars['String'] | null),symbol_ends_with?: (Scalars['String'] | null),symbol_not_ends_with?: (Scalars['String'] | null),name?: (Scalars['String'] | null),name_not?: (Scalars['String'] | null),name_gt?: (Scalars['String'] | null),name_lt?: (Scalars['String'] | null),name_gte?: (Scalars['String'] | null),name_lte?: (Scalars['String'] | null),name_in?: (Scalars['String'][] | null),name_not_in?: (Scalars['String'][] | null),name_contains?: (Scalars['String'] | null),name_not_contains?: (Scalars['String'] | null),name_starts_with?: (Scalars['String'] | null),name_not_starts_with?: (Scalars['String'] | null),name_ends_with?: (Scalars['String'] | null),name_not_ends_with?: (Scalars['String'] | null),decimals?: (Scalars['Int'] | null),decimals_not?: (Scalars['Int'] | null),decimals_gt?: (Scalars['Int'] | null),decimals_lt?: (Scalars['Int'] | null),decimals_gte?: (Scalars['Int'] | null),decimals_lte?: (Scalars['Int'] | null),decimals_in?: (Scalars['Int'][] | null),decimals_not_in?: (Scalars['Int'][] | null),usageAsCollateralEnabled?: (Scalars['Boolean'] | null),usageAsCollateralEnabled_not?: (Scalars['Boolean'] | null),usageAsCollateralEnabled_in?: (Scalars['Boolean'][] | null),usageAsCollateralEnabled_not_in?: (Scalars['Boolean'][] | null),borrowingEnabled?: (Scalars['Boolean'] | null),borrowingEnabled_not?: (Scalars['Boolean'] | null),borrowingEnabled_in?: (Scalars['Boolean'][] | null),borrowingEnabled_not_in?: (Scalars['Boolean'][] | null),stableBorrowRateEnabled?: (Scalars['Boolean'] | null),stableBorrowRateEnabled_not?: (Scalars['Boolean'] | null),stableBorrowRateEnabled_in?: (Scalars['Boolean'][] | null),stableBorrowRateEnabled_not_in?: (Scalars['Boolean'][] | null),isActive?: (Scalars['Boolean'] | null),isActive_not?: (Scalars['Boolean'] | null),isActive_in?: (Scalars['Boolean'][] | null),isActive_not_in?: (Scalars['Boolean'][] | null),isFreezed?: (Scalars['Boolean'] | null),isFreezed_not?: (Scalars['Boolean'] | null),isFreezed_in?: (Scalars['Boolean'][] | null),isFreezed_not_in?: (Scalars['Boolean'][] | null),price?: (Scalars['String'] | null),price_not?: (Scalars['String'] | null),price_gt?: (Scalars['String'] | null),price_lt?: (Scalars['String'] | null),price_gte?: (Scalars['String'] | null),price_lte?: (Scalars['String'] | null),price_in?: (Scalars['String'][] | null),price_not_in?: (Scalars['String'][] | null),price_contains?: (Scalars['String'] | null),price_not_contains?: (Scalars['String'] | null),price_starts_with?: (Scalars['String'] | null),price_not_starts_with?: (Scalars['String'] | null),price_ends_with?: (Scalars['String'] | null),price_not_ends_with?: (Scalars['String'] | null),reserveInterestRateStrategy?: (Scalars['Bytes'] | null),reserveInterestRateStrategy_not?: (Scalars['Bytes'] | null),reserveInterestRateStrategy_in?: (Scalars['Bytes'][] | null),reserveInterestRateStrategy_not_in?: (Scalars['Bytes'][] | null),reserveInterestRateStrategy_contains?: (Scalars['Bytes'] | null),reserveInterestRateStrategy_not_contains?: (Scalars['Bytes'] | null),optimalUtilisationRate?: (Scalars['BigInt'] | null),optimalUtilisationRate_not?: (Scalars['BigInt'] | null),optimalUtilisationRate_gt?: (Scalars['BigInt'] | null),optimalUtilisationRate_lt?: (Scalars['BigInt'] | null),optimalUtilisationRate_gte?: (Scalars['BigInt'] | null),optimalUtilisationRate_lte?: (Scalars['BigInt'] | null),optimalUtilisationRate_in?: (Scalars['BigInt'][] | null),optimalUtilisationRate_not_in?: (Scalars['BigInt'][] | null),variableRateSlope1?: (Scalars['BigInt'] | null),variableRateSlope1_not?: (Scalars['BigInt'] | null),variableRateSlope1_gt?: (Scalars['BigInt'] | null),variableRateSlope1_lt?: (Scalars['BigInt'] | null),variableRateSlope1_gte?: (Scalars['BigInt'] | null),variableRateSlope1_lte?: (Scalars['BigInt'] | null),variableRateSlope1_in?: (Scalars['BigInt'][] | null),variableRateSlope1_not_in?: (Scalars['BigInt'][] | null),variableRateSlope2?: (Scalars['BigInt'] | null),variableRateSlope2_not?: (Scalars['BigInt'] | null),variableRateSlope2_gt?: (Scalars['BigInt'] | null),variableRateSlope2_lt?: (Scalars['BigInt'] | null),variableRateSlope2_gte?: (Scalars['BigInt'] | null),variableRateSlope2_lte?: (Scalars['BigInt'] | null),variableRateSlope2_in?: (Scalars['BigInt'][] | null),variableRateSlope2_not_in?: (Scalars['BigInt'][] | null),stableRateSlope1?: (Scalars['BigInt'] | null),stableRateSlope1_not?: (Scalars['BigInt'] | null),stableRateSlope1_gt?: (Scalars['BigInt'] | null),stableRateSlope1_lt?: (Scalars['BigInt'] | null),stableRateSlope1_gte?: (Scalars['BigInt'] | null),stableRateSlope1_lte?: (Scalars['BigInt'] | null),stableRateSlope1_in?: (Scalars['BigInt'][] | null),stableRateSlope1_not_in?: (Scalars['BigInt'][] | null),stableRateSlope2?: (Scalars['BigInt'] | null),stableRateSlope2_not?: (Scalars['BigInt'] | null),stableRateSlope2_gt?: (Scalars['BigInt'] | null),stableRateSlope2_lt?: (Scalars['BigInt'] | null),stableRateSlope2_gte?: (Scalars['BigInt'] | null),stableRateSlope2_lte?: (Scalars['BigInt'] | null),stableRateSlope2_in?: (Scalars['BigInt'][] | null),stableRateSlope2_not_in?: (Scalars['BigInt'][] | null),baseVariableBorrowRate?: (Scalars['BigInt'] | null),baseVariableBorrowRate_not?: (Scalars['BigInt'] | null),baseVariableBorrowRate_gt?: (Scalars['BigInt'] | null),baseVariableBorrowRate_lt?: (Scalars['BigInt'] | null),baseVariableBorrowRate_gte?: (Scalars['BigInt'] | null),baseVariableBorrowRate_lte?: (Scalars['BigInt'] | null),baseVariableBorrowRate_in?: (Scalars['BigInt'][] | null),baseVariableBorrowRate_not_in?: (Scalars['BigInt'][] | null),baseLTVasCollateral?: (Scalars['BigInt'] | null),baseLTVasCollateral_not?: (Scalars['BigInt'] | null),baseLTVasCollateral_gt?: (Scalars['BigInt'] | null),baseLTVasCollateral_lt?: (Scalars['BigInt'] | null),baseLTVasCollateral_gte?: (Scalars['BigInt'] | null),baseLTVasCollateral_lte?: (Scalars['BigInt'] | null),baseLTVasCollateral_in?: (Scalars['BigInt'][] | null),baseLTVasCollateral_not_in?: (Scalars['BigInt'][] | null),reserveLiquidationThreshold?: (Scalars['BigInt'] | null),reserveLiquidationThreshold_not?: (Scalars['BigInt'] | null),reserveLiquidationThreshold_gt?: (Scalars['BigInt'] | null),reserveLiquidationThreshold_lt?: (Scalars['BigInt'] | null),reserveLiquidationThreshold_gte?: (Scalars['BigInt'] | null),reserveLiquidationThreshold_lte?: (Scalars['BigInt'] | null),reserveLiquidationThreshold_in?: (Scalars['BigInt'][] | null),reserveLiquidationThreshold_not_in?: (Scalars['BigInt'][] | null),reserveLiquidationBonus?: (Scalars['BigInt'] | null),reserveLiquidationBonus_not?: (Scalars['BigInt'] | null),reserveLiquidationBonus_gt?: (Scalars['BigInt'] | null),reserveLiquidationBonus_lt?: (Scalars['BigInt'] | null),reserveLiquidationBonus_gte?: (Scalars['BigInt'] | null),reserveLiquidationBonus_lte?: (Scalars['BigInt'] | null),reserveLiquidationBonus_in?: (Scalars['BigInt'][] | null),reserveLiquidationBonus_not_in?: (Scalars['BigInt'][] | null),utilizationRate?: (Scalars['BigDecimal'] | null),utilizationRate_not?: (Scalars['BigDecimal'] | null),utilizationRate_gt?: (Scalars['BigDecimal'] | null),utilizationRate_lt?: (Scalars['BigDecimal'] | null),utilizationRate_gte?: (Scalars['BigDecimal'] | null),utilizationRate_lte?: (Scalars['BigDecimal'] | null),utilizationRate_in?: (Scalars['BigDecimal'][] | null),utilizationRate_not_in?: (Scalars['BigDecimal'][] | null),totalLiquidity?: (Scalars['BigInt'] | null),totalLiquidity_not?: (Scalars['BigInt'] | null),totalLiquidity_gt?: (Scalars['BigInt'] | null),totalLiquidity_lt?: (Scalars['BigInt'] | null),totalLiquidity_gte?: (Scalars['BigInt'] | null),totalLiquidity_lte?: (Scalars['BigInt'] | null),totalLiquidity_in?: (Scalars['BigInt'][] | null),totalLiquidity_not_in?: (Scalars['BigInt'][] | null),totalLiquidityAsCollateral?: (Scalars['BigInt'] | null),totalLiquidityAsCollateral_not?: (Scalars['BigInt'] | null),totalLiquidityAsCollateral_gt?: (Scalars['BigInt'] | null),totalLiquidityAsCollateral_lt?: (Scalars['BigInt'] | null),totalLiquidityAsCollateral_gte?: (Scalars['BigInt'] | null),totalLiquidityAsCollateral_lte?: (Scalars['BigInt'] | null),totalLiquidityAsCollateral_in?: (Scalars['BigInt'][] | null),totalLiquidityAsCollateral_not_in?: (Scalars['BigInt'][] | null),availableLiquidity?: (Scalars['BigInt'] | null),availableLiquidity_not?: (Scalars['BigInt'] | null),availableLiquidity_gt?: (Scalars['BigInt'] | null),availableLiquidity_lt?: (Scalars['BigInt'] | null),availableLiquidity_gte?: (Scalars['BigInt'] | null),availableLiquidity_lte?: (Scalars['BigInt'] | null),availableLiquidity_in?: (Scalars['BigInt'][] | null),availableLiquidity_not_in?: (Scalars['BigInt'][] | null),totalBorrows?: (Scalars['BigInt'] | null),totalBorrows_not?: (Scalars['BigInt'] | null),totalBorrows_gt?: (Scalars['BigInt'] | null),totalBorrows_lt?: (Scalars['BigInt'] | null),totalBorrows_gte?: (Scalars['BigInt'] | null),totalBorrows_lte?: (Scalars['BigInt'] | null),totalBorrows_in?: (Scalars['BigInt'][] | null),totalBorrows_not_in?: (Scalars['BigInt'][] | null),totalBorrowsStable?: (Scalars['BigInt'] | null),totalBorrowsStable_not?: (Scalars['BigInt'] | null),totalBorrowsStable_gt?: (Scalars['BigInt'] | null),totalBorrowsStable_lt?: (Scalars['BigInt'] | null),totalBorrowsStable_gte?: (Scalars['BigInt'] | null),totalBorrowsStable_lte?: (Scalars['BigInt'] | null),totalBorrowsStable_in?: (Scalars['BigInt'][] | null),totalBorrowsStable_not_in?: (Scalars['BigInt'][] | null),totalBorrowsVariable?: (Scalars['BigInt'] | null),totalBorrowsVariable_not?: (Scalars['BigInt'] | null),totalBorrowsVariable_gt?: (Scalars['BigInt'] | null),totalBorrowsVariable_lt?: (Scalars['BigInt'] | null),totalBorrowsVariable_gte?: (Scalars['BigInt'] | null),totalBorrowsVariable_lte?: (Scalars['BigInt'] | null),totalBorrowsVariable_in?: (Scalars['BigInt'][] | null),totalBorrowsVariable_not_in?: (Scalars['BigInt'][] | null),liquidityRate?: (Scalars['BigInt'] | null),liquidityRate_not?: (Scalars['BigInt'] | null),liquidityRate_gt?: (Scalars['BigInt'] | null),liquidityRate_lt?: (Scalars['BigInt'] | null),liquidityRate_gte?: (Scalars['BigInt'] | null),liquidityRate_lte?: (Scalars['BigInt'] | null),liquidityRate_in?: (Scalars['BigInt'][] | null),liquidityRate_not_in?: (Scalars['BigInt'][] | null),variableBorrowRate?: (Scalars['BigInt'] | null),variableBorrowRate_not?: (Scalars['BigInt'] | null),variableBorrowRate_gt?: (Scalars['BigInt'] | null),variableBorrowRate_lt?: (Scalars['BigInt'] | null),variableBorrowRate_gte?: (Scalars['BigInt'] | null),variableBorrowRate_lte?: (Scalars['BigInt'] | null),variableBorrowRate_in?: (Scalars['BigInt'][] | null),variableBorrowRate_not_in?: (Scalars['BigInt'][] | null),stableBorrowRate?: (Scalars['BigInt'] | null),stableBorrowRate_not?: (Scalars['BigInt'] | null),stableBorrowRate_gt?: (Scalars['BigInt'] | null),stableBorrowRate_lt?: (Scalars['BigInt'] | null),stableBorrowRate_gte?: (Scalars['BigInt'] | null),stableBorrowRate_lte?: (Scalars['BigInt'] | null),stableBorrowRate_in?: (Scalars['BigInt'][] | null),stableBorrowRate_not_in?: (Scalars['BigInt'][] | null),averageStableBorrowRate?: (Scalars['BigInt'] | null),averageStableBorrowRate_not?: (Scalars['BigInt'] | null),averageStableBorrowRate_gt?: (Scalars['BigInt'] | null),averageStableBorrowRate_lt?: (Scalars['BigInt'] | null),averageStableBorrowRate_gte?: (Scalars['BigInt'] | null),averageStableBorrowRate_lte?: (Scalars['BigInt'] | null),averageStableBorrowRate_in?: (Scalars['BigInt'][] | null),averageStableBorrowRate_not_in?: (Scalars['BigInt'][] | null),liquidityIndex?: (Scalars['BigInt'] | null),liquidityIndex_not?: (Scalars['BigInt'] | null),liquidityIndex_gt?: (Scalars['BigInt'] | null),liquidityIndex_lt?: (Scalars['BigInt'] | null),liquidityIndex_gte?: (Scalars['BigInt'] | null),liquidityIndex_lte?: (Scalars['BigInt'] | null),liquidityIndex_in?: (Scalars['BigInt'][] | null),liquidityIndex_not_in?: (Scalars['BigInt'][] | null),variableBorrowIndex?: (Scalars['BigInt'] | null),variableBorrowIndex_not?: (Scalars['BigInt'] | null),variableBorrowIndex_gt?: (Scalars['BigInt'] | null),variableBorrowIndex_lt?: (Scalars['BigInt'] | null),variableBorrowIndex_gte?: (Scalars['BigInt'] | null),variableBorrowIndex_lte?: (Scalars['BigInt'] | null),variableBorrowIndex_in?: (Scalars['BigInt'][] | null),variableBorrowIndex_not_in?: (Scalars['BigInt'][] | null),aToken?: (Scalars['String'] | null),aToken_not?: (Scalars['String'] | null),aToken_gt?: (Scalars['String'] | null),aToken_lt?: (Scalars['String'] | null),aToken_gte?: (Scalars['String'] | null),aToken_lte?: (Scalars['String'] | null),aToken_in?: (Scalars['String'][] | null),aToken_not_in?: (Scalars['String'][] | null),aToken_contains?: (Scalars['String'] | null),aToken_not_contains?: (Scalars['String'] | null),aToken_starts_with?: (Scalars['String'] | null),aToken_not_starts_with?: (Scalars['String'] | null),aToken_ends_with?: (Scalars['String'] | null),aToken_not_ends_with?: (Scalars['String'] | null),lastUpdateTimestamp?: (Scalars['Int'] | null),lastUpdateTimestamp_not?: (Scalars['Int'] | null),lastUpdateTimestamp_gt?: (Scalars['Int'] | null),lastUpdateTimestamp_lt?: (Scalars['Int'] | null),lastUpdateTimestamp_gte?: (Scalars['Int'] | null),lastUpdateTimestamp_lte?: (Scalars['Int'] | null),lastUpdateTimestamp_in?: (Scalars['Int'][] | null),lastUpdateTimestamp_not_in?: (Scalars['Int'][] | null),lifetimeDepositorsInterestEarned?: (Scalars['BigInt'] | null),lifetimeDepositorsInterestEarned_not?: (Scalars['BigInt'] | null),lifetimeDepositorsInterestEarned_gt?: (Scalars['BigInt'] | null),lifetimeDepositorsInterestEarned_lt?: (Scalars['BigInt'] | null),lifetimeDepositorsInterestEarned_gte?: (Scalars['BigInt'] | null),lifetimeDepositorsInterestEarned_lte?: (Scalars['BigInt'] | null),lifetimeDepositorsInterestEarned_in?: (Scalars['BigInt'][] | null),lifetimeDepositorsInterestEarned_not_in?: (Scalars['BigInt'][] | null),aTokenTotalSupply?: (Scalars['BigInt'] | null),aTokenTotalSupply_not?: (Scalars['BigInt'] | null),aTokenTotalSupply_gt?: (Scalars['BigInt'] | null),aTokenTotalSupply_lt?: (Scalars['BigInt'] | null),aTokenTotalSupply_gte?: (Scalars['BigInt'] | null),aTokenTotalSupply_lte?: (Scalars['BigInt'] | null),aTokenTotalSupply_in?: (Scalars['BigInt'][] | null),aTokenTotalSupply_not_in?: (Scalars['BigInt'][] | null),lifetimeLiquidity?: (Scalars['BigInt'] | null),lifetimeLiquidity_not?: (Scalars['BigInt'] | null),lifetimeLiquidity_gt?: (Scalars['BigInt'] | null),lifetimeLiquidity_lt?: (Scalars['BigInt'] | null),lifetimeLiquidity_gte?: (Scalars['BigInt'] | null),lifetimeLiquidity_lte?: (Scalars['BigInt'] | null),lifetimeLiquidity_in?: (Scalars['BigInt'][] | null),lifetimeLiquidity_not_in?: (Scalars['BigInt'][] | null),lifetimeBorrows?: (Scalars['BigInt'] | null),lifetimeBorrows_not?: (Scalars['BigInt'] | null),lifetimeBorrows_gt?: (Scalars['BigInt'] | null),lifetimeBorrows_lt?: (Scalars['BigInt'] | null),lifetimeBorrows_gte?: (Scalars['BigInt'] | null),lifetimeBorrows_lte?: (Scalars['BigInt'] | null),lifetimeBorrows_in?: (Scalars['BigInt'][] | null),lifetimeBorrows_not_in?: (Scalars['BigInt'][] | null),lifetimeBorrowsStable?: (Scalars['BigInt'] | null),lifetimeBorrowsStable_not?: (Scalars['BigInt'] | null),lifetimeBorrowsStable_gt?: (Scalars['BigInt'] | null),lifetimeBorrowsStable_lt?: (Scalars['BigInt'] | null),lifetimeBorrowsStable_gte?: (Scalars['BigInt'] | null),lifetimeBorrowsStable_lte?: (Scalars['BigInt'] | null),lifetimeBorrowsStable_in?: (Scalars['BigInt'][] | null),lifetimeBorrowsStable_not_in?: (Scalars['BigInt'][] | null),lifetimeBorrowsVariable?: (Scalars['BigInt'] | null),lifetimeBorrowsVariable_not?: (Scalars['BigInt'] | null),lifetimeBorrowsVariable_gt?: (Scalars['BigInt'] | null),lifetimeBorrowsVariable_lt?: (Scalars['BigInt'] | null),lifetimeBorrowsVariable_gte?: (Scalars['BigInt'] | null),lifetimeBorrowsVariable_lte?: (Scalars['BigInt'] | null),lifetimeBorrowsVariable_in?: (Scalars['BigInt'][] | null),lifetimeBorrowsVariable_not_in?: (Scalars['BigInt'][] | null),lifetimeRepayments?: (Scalars['BigInt'] | null),lifetimeRepayments_not?: (Scalars['BigInt'] | null),lifetimeRepayments_gt?: (Scalars['BigInt'] | null),lifetimeRepayments_lt?: (Scalars['BigInt'] | null),lifetimeRepayments_gte?: (Scalars['BigInt'] | null),lifetimeRepayments_lte?: (Scalars['BigInt'] | null),lifetimeRepayments_in?: (Scalars['BigInt'][] | null),lifetimeRepayments_not_in?: (Scalars['BigInt'][] | null),lifetimeWithdrawals?: (Scalars['BigInt'] | null),lifetimeWithdrawals_not?: (Scalars['BigInt'] | null),lifetimeWithdrawals_gt?: (Scalars['BigInt'] | null),lifetimeWithdrawals_lt?: (Scalars['BigInt'] | null),lifetimeWithdrawals_gte?: (Scalars['BigInt'] | null),lifetimeWithdrawals_lte?: (Scalars['BigInt'] | null),lifetimeWithdrawals_in?: (Scalars['BigInt'][] | null),lifetimeWithdrawals_not_in?: (Scalars['BigInt'][] | null),lifetimeLiquidated?: (Scalars['BigInt'] | null),lifetimeLiquidated_not?: (Scalars['BigInt'] | null),lifetimeLiquidated_gt?: (Scalars['BigInt'] | null),lifetimeLiquidated_lt?: (Scalars['BigInt'] | null),lifetimeLiquidated_gte?: (Scalars['BigInt'] | null),lifetimeLiquidated_lte?: (Scalars['BigInt'] | null),lifetimeLiquidated_in?: (Scalars['BigInt'][] | null),lifetimeLiquidated_not_in?: (Scalars['BigInt'][] | null),lifetimeFeeOriginated?: (Scalars['BigInt'] | null),lifetimeFeeOriginated_not?: (Scalars['BigInt'] | null),lifetimeFeeOriginated_gt?: (Scalars['BigInt'] | null),lifetimeFeeOriginated_lt?: (Scalars['BigInt'] | null),lifetimeFeeOriginated_gte?: (Scalars['BigInt'] | null),lifetimeFeeOriginated_lte?: (Scalars['BigInt'] | null),lifetimeFeeOriginated_in?: (Scalars['BigInt'][] | null),lifetimeFeeOriginated_not_in?: (Scalars['BigInt'][] | null),lifetimeFeeCollected?: (Scalars['BigInt'] | null),lifetimeFeeCollected_not?: (Scalars['BigInt'] | null),lifetimeFeeCollected_gt?: (Scalars['BigInt'] | null),lifetimeFeeCollected_lt?: (Scalars['BigInt'] | null),lifetimeFeeCollected_gte?: (Scalars['BigInt'] | null),lifetimeFeeCollected_lte?: (Scalars['BigInt'] | null),lifetimeFeeCollected_in?: (Scalars['BigInt'][] | null),lifetimeFeeCollected_not_in?: (Scalars['BigInt'][] | null),lifetimeFlashLoans?: (Scalars['BigInt'] | null),lifetimeFlashLoans_not?: (Scalars['BigInt'] | null),lifetimeFlashLoans_gt?: (Scalars['BigInt'] | null),lifetimeFlashLoans_lt?: (Scalars['BigInt'] | null),lifetimeFlashLoans_gte?: (Scalars['BigInt'] | null),lifetimeFlashLoans_lte?: (Scalars['BigInt'] | null),lifetimeFlashLoans_in?: (Scalars['BigInt'][] | null),lifetimeFlashLoans_not_in?: (Scalars['BigInt'][] | null),lifetimeFlashloanDepositorsFee?: (Scalars['BigInt'] | null),lifetimeFlashloanDepositorsFee_not?: (Scalars['BigInt'] | null),lifetimeFlashloanDepositorsFee_gt?: (Scalars['BigInt'] | null),lifetimeFlashloanDepositorsFee_lt?: (Scalars['BigInt'] | null),lifetimeFlashloanDepositorsFee_gte?: (Scalars['BigInt'] | null),lifetimeFlashloanDepositorsFee_lte?: (Scalars['BigInt'] | null),lifetimeFlashloanDepositorsFee_in?: (Scalars['BigInt'][] | null),lifetimeFlashloanDepositorsFee_not_in?: (Scalars['BigInt'][] | null),lifetimeFlashloanProtocolFee?: (Scalars['BigInt'] | null),lifetimeFlashloanProtocolFee_not?: (Scalars['BigInt'] | null),lifetimeFlashloanProtocolFee_gt?: (Scalars['BigInt'] | null),lifetimeFlashloanProtocolFee_lt?: (Scalars['BigInt'] | null),lifetimeFlashloanProtocolFee_gte?: (Scalars['BigInt'] | null),lifetimeFlashloanProtocolFee_lte?: (Scalars['BigInt'] | null),lifetimeFlashloanProtocolFee_in?: (Scalars['BigInt'][] | null),lifetimeFlashloanProtocolFee_not_in?: (Scalars['BigInt'][] | null)}

export interface SubscriptionRequest{
    protocol?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ProtocolRequest]
    protocols?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Protocol_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Protocol_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ProtocolRequest]
    contractToPoolMapping?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ContractToPoolMappingRequest]
    contractToPoolMappings?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ContractToPoolMapping_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ContractToPoolMapping_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ContractToPoolMappingRequest]
    poolConfigurationHistoryItem?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},PoolConfigurationHistoryItemRequest]
    poolConfigurationHistoryItems?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PoolConfigurationHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PoolConfigurationHistoryItem_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},PoolConfigurationHistoryItemRequest]
    pool?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},PoolRequest]
    pools?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Pool_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Pool_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},PoolRequest]
    priceHistoryItem?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},PriceHistoryItemRequest]
    priceHistoryItems?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceHistoryItem_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},PriceHistoryItemRequest]
    usdEthPriceHistoryItem?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UsdEthPriceHistoryItemRequest]
    usdEthPriceHistoryItems?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UsdEthPriceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UsdEthPriceHistoryItem_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UsdEthPriceHistoryItemRequest]
    chainlinkAggregator?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ChainlinkAggregatorRequest]
    chainlinkAggregators?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ChainlinkAggregator_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ChainlinkAggregator_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ChainlinkAggregatorRequest]
    priceOracleAsset?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},PriceOracleAssetRequest]
    priceOracleAssets?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceOracleAsset_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceOracleAsset_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},PriceOracleAssetRequest]
    priceOracle?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},PriceOracleRequest]
    priceOracles?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceOracle_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceOracle_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},PriceOracleRequest]
    atoken?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ATokenRequest]
    atokens?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (AToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (AToken_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ATokenRequest]
    referrer?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ReferrerRequest]
    referrers?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Referrer_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Referrer_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ReferrerRequest]
    deposit?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},DepositRequest]
    deposits?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},DepositRequest]
    redeemUnderlying?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},RedeemUnderlyingRequest]
    redeemUnderlyings?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RedeemUnderlying_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RedeemUnderlying_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},RedeemUnderlyingRequest]
    borrow?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},BorrowRequest]
    borrows?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Borrow_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Borrow_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},BorrowRequest]
    swap?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},SwapRequest]
    swaps?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},SwapRequest]
    usageAsCollateral?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UsageAsCollateralRequest]
    usageAsCollaterals?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UsageAsCollateral_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UsageAsCollateral_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UsageAsCollateralRequest]
    rebalanceStableBorrowRate?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},RebalanceStableBorrowRateRequest]
    rebalanceStableBorrowRates?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RebalanceStableBorrowRate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RebalanceStableBorrowRate_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},RebalanceStableBorrowRateRequest]
    repay?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},RepayRequest]
    repays?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Repay_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Repay_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},RepayRequest]
    flashLoan?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},FlashLoanRequest]
    flashLoans?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (FlashLoan_orderBy | null),orderDirection?: (OrderDirection | null),where?: (FlashLoan_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},FlashLoanRequest]
    liquidationCall?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},LiquidationCallRequest]
    liquidationCalls?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidationCall_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidationCall_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},LiquidationCallRequest]
    originationFeeLiquidation?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},OriginationFeeLiquidationRequest]
    originationFeeLiquidations?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (OriginationFeeLiquidation_orderBy | null),orderDirection?: (OrderDirection | null),where?: (OriginationFeeLiquidation_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},OriginationFeeLiquidationRequest]
    reserveConfigurationHistoryItem?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ReserveConfigurationHistoryItemRequest]
    reserveConfigurationHistoryItems?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ReserveConfigurationHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ReserveConfigurationHistoryItem_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ReserveConfigurationHistoryItemRequest]
    reserveParamsHistoryItem?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ReserveParamsHistoryItemRequest]
    reserveParamsHistoryItems?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ReserveParamsHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ReserveParamsHistoryItem_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ReserveParamsHistoryItemRequest]
    reserve?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ReserveRequest]
    reserves?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Reserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Reserve_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ReserveRequest]
    atokenBalanceHistoryItem?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ATokenBalanceHistoryItemRequest]
    atokenBalanceHistoryItems?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ATokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ATokenBalanceHistoryItem_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ATokenBalanceHistoryItemRequest]
    userBorrowHistoryItem?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UserBorrowHistoryItemRequest]
    userBorrowHistoryItems?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UserBorrowHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UserBorrowHistoryItem_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UserBorrowHistoryItemRequest]
    userReserve?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UserReserveRequest]
    userReserves?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UserReserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UserReserve_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UserReserveRequest]
    user?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UserRequest]
    users?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (User_orderBy | null),orderDirection?: (OrderDirection | null),where?: (User_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UserRequest]
    userTransaction?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UserTransactionRequest]
    userTransactions?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UserTransaction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UserTransaction_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UserTransactionRequest]
    /** Access to subgraph metadata */
    _meta?: [{block?: (Block_height | null)},_Meta_Request] | _Meta_Request
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SwapRequest{
    /**
     * tx hash
     * 
     */
    id?: boolean | number
    pool?: PoolRequest
    user?: UserRequest
    reserve?: ReserveRequest
    userReserve?: UserReserveRequest
    borrowRateFrom?: boolean | number
    borrowRateModeFrom?: boolean | number
    borrowRateTo?: boolean | number
    borrowRateModeTo?: boolean | number
    accruedBorrowInterest?: boolean | number
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Swap_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),user?: (Scalars['String'] | null),user_not?: (Scalars['String'] | null),user_gt?: (Scalars['String'] | null),user_lt?: (Scalars['String'] | null),user_gte?: (Scalars['String'] | null),user_lte?: (Scalars['String'] | null),user_in?: (Scalars['String'][] | null),user_not_in?: (Scalars['String'][] | null),user_contains?: (Scalars['String'] | null),user_not_contains?: (Scalars['String'] | null),user_starts_with?: (Scalars['String'] | null),user_not_starts_with?: (Scalars['String'] | null),user_ends_with?: (Scalars['String'] | null),user_not_ends_with?: (Scalars['String'] | null),reserve?: (Scalars['String'] | null),reserve_not?: (Scalars['String'] | null),reserve_gt?: (Scalars['String'] | null),reserve_lt?: (Scalars['String'] | null),reserve_gte?: (Scalars['String'] | null),reserve_lte?: (Scalars['String'] | null),reserve_in?: (Scalars['String'][] | null),reserve_not_in?: (Scalars['String'][] | null),reserve_contains?: (Scalars['String'] | null),reserve_not_contains?: (Scalars['String'] | null),reserve_starts_with?: (Scalars['String'] | null),reserve_not_starts_with?: (Scalars['String'] | null),reserve_ends_with?: (Scalars['String'] | null),reserve_not_ends_with?: (Scalars['String'] | null),userReserve?: (Scalars['String'] | null),userReserve_not?: (Scalars['String'] | null),userReserve_gt?: (Scalars['String'] | null),userReserve_lt?: (Scalars['String'] | null),userReserve_gte?: (Scalars['String'] | null),userReserve_lte?: (Scalars['String'] | null),userReserve_in?: (Scalars['String'][] | null),userReserve_not_in?: (Scalars['String'][] | null),userReserve_contains?: (Scalars['String'] | null),userReserve_not_contains?: (Scalars['String'] | null),userReserve_starts_with?: (Scalars['String'] | null),userReserve_not_starts_with?: (Scalars['String'] | null),userReserve_ends_with?: (Scalars['String'] | null),userReserve_not_ends_with?: (Scalars['String'] | null),borrowRateFrom?: (Scalars['BigInt'] | null),borrowRateFrom_not?: (Scalars['BigInt'] | null),borrowRateFrom_gt?: (Scalars['BigInt'] | null),borrowRateFrom_lt?: (Scalars['BigInt'] | null),borrowRateFrom_gte?: (Scalars['BigInt'] | null),borrowRateFrom_lte?: (Scalars['BigInt'] | null),borrowRateFrom_in?: (Scalars['BigInt'][] | null),borrowRateFrom_not_in?: (Scalars['BigInt'][] | null),borrowRateModeFrom?: (BorrowRateMode | null),borrowRateModeFrom_not?: (BorrowRateMode | null),borrowRateTo?: (Scalars['BigInt'] | null),borrowRateTo_not?: (Scalars['BigInt'] | null),borrowRateTo_gt?: (Scalars['BigInt'] | null),borrowRateTo_lt?: (Scalars['BigInt'] | null),borrowRateTo_gte?: (Scalars['BigInt'] | null),borrowRateTo_lte?: (Scalars['BigInt'] | null),borrowRateTo_in?: (Scalars['BigInt'][] | null),borrowRateTo_not_in?: (Scalars['BigInt'][] | null),borrowRateModeTo?: (BorrowRateMode | null),borrowRateModeTo_not?: (BorrowRateMode | null),accruedBorrowInterest?: (Scalars['BigInt'] | null),accruedBorrowInterest_not?: (Scalars['BigInt'] | null),accruedBorrowInterest_gt?: (Scalars['BigInt'] | null),accruedBorrowInterest_lt?: (Scalars['BigInt'] | null),accruedBorrowInterest_gte?: (Scalars['BigInt'] | null),accruedBorrowInterest_lte?: (Scalars['BigInt'] | null),accruedBorrowInterest_in?: (Scalars['BigInt'][] | null),accruedBorrowInterest_not_in?: (Scalars['BigInt'][] | null),timestamp?: (Scalars['Int'] | null),timestamp_not?: (Scalars['Int'] | null),timestamp_gt?: (Scalars['Int'] | null),timestamp_lt?: (Scalars['Int'] | null),timestamp_gte?: (Scalars['Int'] | null),timestamp_lte?: (Scalars['Int'] | null),timestamp_in?: (Scalars['Int'][] | null),timestamp_not_in?: (Scalars['Int'][] | null)}

export interface UsageAsCollateralRequest{
    /**
     * tx hash
     * 
     */
    id?: boolean | number
    pool?: PoolRequest
    user?: UserRequest
    reserve?: ReserveRequest
    userReserve?: UserReserveRequest
    fromState?: boolean | number
    toState?: boolean | number
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UsageAsCollateral_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),user?: (Scalars['String'] | null),user_not?: (Scalars['String'] | null),user_gt?: (Scalars['String'] | null),user_lt?: (Scalars['String'] | null),user_gte?: (Scalars['String'] | null),user_lte?: (Scalars['String'] | null),user_in?: (Scalars['String'][] | null),user_not_in?: (Scalars['String'][] | null),user_contains?: (Scalars['String'] | null),user_not_contains?: (Scalars['String'] | null),user_starts_with?: (Scalars['String'] | null),user_not_starts_with?: (Scalars['String'] | null),user_ends_with?: (Scalars['String'] | null),user_not_ends_with?: (Scalars['String'] | null),reserve?: (Scalars['String'] | null),reserve_not?: (Scalars['String'] | null),reserve_gt?: (Scalars['String'] | null),reserve_lt?: (Scalars['String'] | null),reserve_gte?: (Scalars['String'] | null),reserve_lte?: (Scalars['String'] | null),reserve_in?: (Scalars['String'][] | null),reserve_not_in?: (Scalars['String'][] | null),reserve_contains?: (Scalars['String'] | null),reserve_not_contains?: (Scalars['String'] | null),reserve_starts_with?: (Scalars['String'] | null),reserve_not_starts_with?: (Scalars['String'] | null),reserve_ends_with?: (Scalars['String'] | null),reserve_not_ends_with?: (Scalars['String'] | null),userReserve?: (Scalars['String'] | null),userReserve_not?: (Scalars['String'] | null),userReserve_gt?: (Scalars['String'] | null),userReserve_lt?: (Scalars['String'] | null),userReserve_gte?: (Scalars['String'] | null),userReserve_lte?: (Scalars['String'] | null),userReserve_in?: (Scalars['String'][] | null),userReserve_not_in?: (Scalars['String'][] | null),userReserve_contains?: (Scalars['String'] | null),userReserve_not_contains?: (Scalars['String'] | null),userReserve_starts_with?: (Scalars['String'] | null),userReserve_not_starts_with?: (Scalars['String'] | null),userReserve_ends_with?: (Scalars['String'] | null),userReserve_not_ends_with?: (Scalars['String'] | null),fromState?: (Scalars['Boolean'] | null),fromState_not?: (Scalars['Boolean'] | null),fromState_in?: (Scalars['Boolean'][] | null),fromState_not_in?: (Scalars['Boolean'][] | null),toState?: (Scalars['Boolean'] | null),toState_not?: (Scalars['Boolean'] | null),toState_in?: (Scalars['Boolean'][] | null),toState_not_in?: (Scalars['Boolean'][] | null),timestamp?: (Scalars['Int'] | null),timestamp_not?: (Scalars['Int'] | null),timestamp_gt?: (Scalars['Int'] | null),timestamp_lt?: (Scalars['Int'] | null),timestamp_gte?: (Scalars['Int'] | null),timestamp_lte?: (Scalars['Int'] | null),timestamp_in?: (Scalars['Int'][] | null),timestamp_not_in?: (Scalars['Int'][] | null)}

export interface UsdEthPriceHistoryItemRequest{
    id?: boolean | number
    oracle?: PriceOracleRequest
    price?: boolean | number
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UsdEthPriceHistoryItem_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),oracle?: (Scalars['String'] | null),oracle_not?: (Scalars['String'] | null),oracle_gt?: (Scalars['String'] | null),oracle_lt?: (Scalars['String'] | null),oracle_gte?: (Scalars['String'] | null),oracle_lte?: (Scalars['String'] | null),oracle_in?: (Scalars['String'][] | null),oracle_not_in?: (Scalars['String'][] | null),oracle_contains?: (Scalars['String'] | null),oracle_not_contains?: (Scalars['String'] | null),oracle_starts_with?: (Scalars['String'] | null),oracle_not_starts_with?: (Scalars['String'] | null),oracle_ends_with?: (Scalars['String'] | null),oracle_not_ends_with?: (Scalars['String'] | null),price?: (Scalars['BigInt'] | null),price_not?: (Scalars['BigInt'] | null),price_gt?: (Scalars['BigInt'] | null),price_lt?: (Scalars['BigInt'] | null),price_gte?: (Scalars['BigInt'] | null),price_lte?: (Scalars['BigInt'] | null),price_in?: (Scalars['BigInt'][] | null),price_not_in?: (Scalars['BigInt'][] | null),timestamp?: (Scalars['Int'] | null),timestamp_not?: (Scalars['Int'] | null),timestamp_gt?: (Scalars['Int'] | null),timestamp_lt?: (Scalars['Int'] | null),timestamp_gte?: (Scalars['Int'] | null),timestamp_lte?: (Scalars['Int'] | null),timestamp_in?: (Scalars['Int'][] | null),timestamp_not_in?: (Scalars['Int'][] | null)}

export interface UserRequest{
    /**
     * user address
     * 
     */
    id?: boolean | number
    borrowedReservesCount?: boolean | number
    reserves?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UserReserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UserReserve_filter | null)},UserReserveRequest] | UserReserveRequest
    depositHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null)},DepositRequest] | DepositRequest
    redeemUnderlyingHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RedeemUnderlying_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RedeemUnderlying_filter | null)},RedeemUnderlyingRequest] | RedeemUnderlyingRequest
    usageAsCollateralHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UsageAsCollateral_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UsageAsCollateral_filter | null)},UsageAsCollateralRequest] | UsageAsCollateralRequest
    borrowHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Borrow_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Borrow_filter | null)},BorrowRequest] | BorrowRequest
    swapHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null)},SwapRequest] | SwapRequest
    rebalanceStableBorrowRateHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RebalanceStableBorrowRate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RebalanceStableBorrowRate_filter | null)},RebalanceStableBorrowRateRequest] | RebalanceStableBorrowRateRequest
    repayHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Repay_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Repay_filter | null)},RepayRequest] | RepayRequest
    liquidationCallHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidationCall_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidationCall_filter | null)},LiquidationCallRequest] | LiquidationCallRequest
    originationFeeLiquidationHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (OriginationFeeLiquidation_orderBy | null),orderDirection?: (OrderDirection | null),where?: (OriginationFeeLiquidation_filter | null)},OriginationFeeLiquidationRequest] | OriginationFeeLiquidationRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserBorrowHistoryItemRequest{
    /**
     * userReserve + txHash
     * 
     */
    id?: boolean | number
    userReserve?: UserReserveRequest
    totalBorrows?: boolean | number
    borrowRate?: boolean | number
    borrowRateMode?: boolean | number
    originationFee?: boolean | number
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserBorrowHistoryItem_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),userReserve?: (Scalars['String'] | null),userReserve_not?: (Scalars['String'] | null),userReserve_gt?: (Scalars['String'] | null),userReserve_lt?: (Scalars['String'] | null),userReserve_gte?: (Scalars['String'] | null),userReserve_lte?: (Scalars['String'] | null),userReserve_in?: (Scalars['String'][] | null),userReserve_not_in?: (Scalars['String'][] | null),userReserve_contains?: (Scalars['String'] | null),userReserve_not_contains?: (Scalars['String'] | null),userReserve_starts_with?: (Scalars['String'] | null),userReserve_not_starts_with?: (Scalars['String'] | null),userReserve_ends_with?: (Scalars['String'] | null),userReserve_not_ends_with?: (Scalars['String'] | null),totalBorrows?: (Scalars['BigInt'] | null),totalBorrows_not?: (Scalars['BigInt'] | null),totalBorrows_gt?: (Scalars['BigInt'] | null),totalBorrows_lt?: (Scalars['BigInt'] | null),totalBorrows_gte?: (Scalars['BigInt'] | null),totalBorrows_lte?: (Scalars['BigInt'] | null),totalBorrows_in?: (Scalars['BigInt'][] | null),totalBorrows_not_in?: (Scalars['BigInt'][] | null),borrowRate?: (Scalars['BigInt'] | null),borrowRate_not?: (Scalars['BigInt'] | null),borrowRate_gt?: (Scalars['BigInt'] | null),borrowRate_lt?: (Scalars['BigInt'] | null),borrowRate_gte?: (Scalars['BigInt'] | null),borrowRate_lte?: (Scalars['BigInt'] | null),borrowRate_in?: (Scalars['BigInt'][] | null),borrowRate_not_in?: (Scalars['BigInt'][] | null),borrowRateMode?: (BorrowRateMode | null),borrowRateMode_not?: (BorrowRateMode | null),originationFee?: (Scalars['BigInt'] | null),originationFee_not?: (Scalars['BigInt'] | null),originationFee_gt?: (Scalars['BigInt'] | null),originationFee_lt?: (Scalars['BigInt'] | null),originationFee_gte?: (Scalars['BigInt'] | null),originationFee_lte?: (Scalars['BigInt'] | null),originationFee_in?: (Scalars['BigInt'][] | null),originationFee_not_in?: (Scalars['BigInt'][] | null),timestamp?: (Scalars['Int'] | null),timestamp_not?: (Scalars['Int'] | null),timestamp_gt?: (Scalars['Int'] | null),timestamp_lt?: (Scalars['Int'] | null),timestamp_gte?: (Scalars['Int'] | null),timestamp_lte?: (Scalars['Int'] | null),timestamp_in?: (Scalars['Int'][] | null),timestamp_not_in?: (Scalars['Int'][] | null)}

export interface UserReserveRequest{
    /**
     * user address + reserve address
     * 
     */
    id?: boolean | number
    pool?: PoolRequest
    reserve?: ReserveRequest
    user?: UserRequest
    usageAsCollateralEnabledOnUser?: boolean | number
    userBalanceIndex?: boolean | number
    principalATokenBalance?: boolean | number
    redirectedBalance?: boolean | number
    interestRedirectionAddress?: boolean | number
    interestRedirectionAllowance?: boolean | number
    principalBorrows?: boolean | number
    borrowRate?: boolean | number
    borrowRateMode?: boolean | number
    variableBorrowIndex?: boolean | number
    /**
     * Amount in currency units included as fee
     * 
     */
    originationFee?: boolean | number
    lastUpdateTimestamp?: boolean | number
    aTokenBalanceHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ATokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ATokenBalanceHistoryItem_filter | null)},ATokenBalanceHistoryItemRequest] | ATokenBalanceHistoryItemRequest
    borrowStateHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UserBorrowHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UserBorrowHistoryItem_filter | null)},UserBorrowHistoryItemRequest] | UserBorrowHistoryItemRequest
    usageAsCollateralHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UsageAsCollateral_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UsageAsCollateral_filter | null)},UsageAsCollateralRequest] | UsageAsCollateralRequest
    depositHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null)},DepositRequest] | DepositRequest
    redeemUnderlyingHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RedeemUnderlying_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RedeemUnderlying_filter | null)},RedeemUnderlyingRequest] | RedeemUnderlyingRequest
    borrowHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Borrow_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Borrow_filter | null)},BorrowRequest] | BorrowRequest
    swapHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null)},SwapRequest] | SwapRequest
    rebalanceStableBorrowRateHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RebalanceStableBorrowRate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RebalanceStableBorrowRate_filter | null)},RebalanceStableBorrowRateRequest] | RebalanceStableBorrowRateRequest
    repayHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Repay_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Repay_filter | null)},RepayRequest] | RepayRequest
    liquidationCallHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidationCall_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidationCall_filter | null)},LiquidationCallRequest] | LiquidationCallRequest
    originationFeeLiquidationHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (OriginationFeeLiquidation_orderBy | null),orderDirection?: (OrderDirection | null),where?: (OriginationFeeLiquidation_filter | null)},OriginationFeeLiquidationRequest] | OriginationFeeLiquidationRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserReserve_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),reserve?: (Scalars['String'] | null),reserve_not?: (Scalars['String'] | null),reserve_gt?: (Scalars['String'] | null),reserve_lt?: (Scalars['String'] | null),reserve_gte?: (Scalars['String'] | null),reserve_lte?: (Scalars['String'] | null),reserve_in?: (Scalars['String'][] | null),reserve_not_in?: (Scalars['String'][] | null),reserve_contains?: (Scalars['String'] | null),reserve_not_contains?: (Scalars['String'] | null),reserve_starts_with?: (Scalars['String'] | null),reserve_not_starts_with?: (Scalars['String'] | null),reserve_ends_with?: (Scalars['String'] | null),reserve_not_ends_with?: (Scalars['String'] | null),user?: (Scalars['String'] | null),user_not?: (Scalars['String'] | null),user_gt?: (Scalars['String'] | null),user_lt?: (Scalars['String'] | null),user_gte?: (Scalars['String'] | null),user_lte?: (Scalars['String'] | null),user_in?: (Scalars['String'][] | null),user_not_in?: (Scalars['String'][] | null),user_contains?: (Scalars['String'] | null),user_not_contains?: (Scalars['String'] | null),user_starts_with?: (Scalars['String'] | null),user_not_starts_with?: (Scalars['String'] | null),user_ends_with?: (Scalars['String'] | null),user_not_ends_with?: (Scalars['String'] | null),usageAsCollateralEnabledOnUser?: (Scalars['Boolean'] | null),usageAsCollateralEnabledOnUser_not?: (Scalars['Boolean'] | null),usageAsCollateralEnabledOnUser_in?: (Scalars['Boolean'][] | null),usageAsCollateralEnabledOnUser_not_in?: (Scalars['Boolean'][] | null),userBalanceIndex?: (Scalars['BigInt'] | null),userBalanceIndex_not?: (Scalars['BigInt'] | null),userBalanceIndex_gt?: (Scalars['BigInt'] | null),userBalanceIndex_lt?: (Scalars['BigInt'] | null),userBalanceIndex_gte?: (Scalars['BigInt'] | null),userBalanceIndex_lte?: (Scalars['BigInt'] | null),userBalanceIndex_in?: (Scalars['BigInt'][] | null),userBalanceIndex_not_in?: (Scalars['BigInt'][] | null),principalATokenBalance?: (Scalars['BigInt'] | null),principalATokenBalance_not?: (Scalars['BigInt'] | null),principalATokenBalance_gt?: (Scalars['BigInt'] | null),principalATokenBalance_lt?: (Scalars['BigInt'] | null),principalATokenBalance_gte?: (Scalars['BigInt'] | null),principalATokenBalance_lte?: (Scalars['BigInt'] | null),principalATokenBalance_in?: (Scalars['BigInt'][] | null),principalATokenBalance_not_in?: (Scalars['BigInt'][] | null),redirectedBalance?: (Scalars['BigInt'] | null),redirectedBalance_not?: (Scalars['BigInt'] | null),redirectedBalance_gt?: (Scalars['BigInt'] | null),redirectedBalance_lt?: (Scalars['BigInt'] | null),redirectedBalance_gte?: (Scalars['BigInt'] | null),redirectedBalance_lte?: (Scalars['BigInt'] | null),redirectedBalance_in?: (Scalars['BigInt'][] | null),redirectedBalance_not_in?: (Scalars['BigInt'][] | null),interestRedirectionAddress?: (Scalars['Bytes'] | null),interestRedirectionAddress_not?: (Scalars['Bytes'] | null),interestRedirectionAddress_in?: (Scalars['Bytes'][] | null),interestRedirectionAddress_not_in?: (Scalars['Bytes'][] | null),interestRedirectionAddress_contains?: (Scalars['Bytes'] | null),interestRedirectionAddress_not_contains?: (Scalars['Bytes'] | null),interestRedirectionAllowance?: (Scalars['Bytes'] | null),interestRedirectionAllowance_not?: (Scalars['Bytes'] | null),interestRedirectionAllowance_in?: (Scalars['Bytes'][] | null),interestRedirectionAllowance_not_in?: (Scalars['Bytes'][] | null),interestRedirectionAllowance_contains?: (Scalars['Bytes'] | null),interestRedirectionAllowance_not_contains?: (Scalars['Bytes'] | null),principalBorrows?: (Scalars['BigInt'] | null),principalBorrows_not?: (Scalars['BigInt'] | null),principalBorrows_gt?: (Scalars['BigInt'] | null),principalBorrows_lt?: (Scalars['BigInt'] | null),principalBorrows_gte?: (Scalars['BigInt'] | null),principalBorrows_lte?: (Scalars['BigInt'] | null),principalBorrows_in?: (Scalars['BigInt'][] | null),principalBorrows_not_in?: (Scalars['BigInt'][] | null),borrowRate?: (Scalars['BigInt'] | null),borrowRate_not?: (Scalars['BigInt'] | null),borrowRate_gt?: (Scalars['BigInt'] | null),borrowRate_lt?: (Scalars['BigInt'] | null),borrowRate_gte?: (Scalars['BigInt'] | null),borrowRate_lte?: (Scalars['BigInt'] | null),borrowRate_in?: (Scalars['BigInt'][] | null),borrowRate_not_in?: (Scalars['BigInt'][] | null),borrowRateMode?: (BorrowRateMode | null),borrowRateMode_not?: (BorrowRateMode | null),variableBorrowIndex?: (Scalars['BigInt'] | null),variableBorrowIndex_not?: (Scalars['BigInt'] | null),variableBorrowIndex_gt?: (Scalars['BigInt'] | null),variableBorrowIndex_lt?: (Scalars['BigInt'] | null),variableBorrowIndex_gte?: (Scalars['BigInt'] | null),variableBorrowIndex_lte?: (Scalars['BigInt'] | null),variableBorrowIndex_in?: (Scalars['BigInt'][] | null),variableBorrowIndex_not_in?: (Scalars['BigInt'][] | null),originationFee?: (Scalars['BigInt'] | null),originationFee_not?: (Scalars['BigInt'] | null),originationFee_gt?: (Scalars['BigInt'] | null),originationFee_lt?: (Scalars['BigInt'] | null),originationFee_gte?: (Scalars['BigInt'] | null),originationFee_lte?: (Scalars['BigInt'] | null),originationFee_in?: (Scalars['BigInt'][] | null),originationFee_not_in?: (Scalars['BigInt'][] | null),lastUpdateTimestamp?: (Scalars['Int'] | null),lastUpdateTimestamp_not?: (Scalars['Int'] | null),lastUpdateTimestamp_gt?: (Scalars['Int'] | null),lastUpdateTimestamp_lt?: (Scalars['Int'] | null),lastUpdateTimestamp_gte?: (Scalars['Int'] | null),lastUpdateTimestamp_lte?: (Scalars['Int'] | null),lastUpdateTimestamp_in?: (Scalars['Int'][] | null),lastUpdateTimestamp_not_in?: (Scalars['Int'][] | null)}

export interface UserTransactionRequest{
    id?: boolean | number
    pool?: PoolRequest
    user?: UserRequest
    timestamp?: boolean | number
    on_Borrow?: BorrowRequest
    on_Deposit?: DepositRequest
    on_LiquidationCall?: LiquidationCallRequest
    on_OriginationFeeLiquidation?: OriginationFeeLiquidationRequest
    on_RebalanceStableBorrowRate?: RebalanceStableBorrowRateRequest
    on_RedeemUnderlying?: RedeemUnderlyingRequest
    on_Repay?: RepayRequest
    on_Swap?: SwapRequest
    on_UsageAsCollateral?: UsageAsCollateralRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserTransaction_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),user?: (Scalars['String'] | null),user_not?: (Scalars['String'] | null),user_gt?: (Scalars['String'] | null),user_lt?: (Scalars['String'] | null),user_gte?: (Scalars['String'] | null),user_lte?: (Scalars['String'] | null),user_in?: (Scalars['String'][] | null),user_not_in?: (Scalars['String'][] | null),user_contains?: (Scalars['String'] | null),user_not_contains?: (Scalars['String'] | null),user_starts_with?: (Scalars['String'] | null),user_not_starts_with?: (Scalars['String'] | null),user_ends_with?: (Scalars['String'] | null),user_not_ends_with?: (Scalars['String'] | null),timestamp?: (Scalars['Int'] | null),timestamp_not?: (Scalars['Int'] | null),timestamp_gt?: (Scalars['Int'] | null),timestamp_lt?: (Scalars['Int'] | null),timestamp_gte?: (Scalars['Int'] | null),timestamp_lte?: (Scalars['Int'] | null),timestamp_in?: (Scalars['Int'][] | null),timestamp_not_in?: (Scalars['Int'][] | null)}

export interface User_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),borrowedReservesCount?: (Scalars['Int'] | null),borrowedReservesCount_not?: (Scalars['Int'] | null),borrowedReservesCount_gt?: (Scalars['Int'] | null),borrowedReservesCount_lt?: (Scalars['Int'] | null),borrowedReservesCount_gte?: (Scalars['Int'] | null),borrowedReservesCount_lte?: (Scalars['Int'] | null),borrowedReservesCount_in?: (Scalars['Int'][] | null),borrowedReservesCount_not_in?: (Scalars['Int'][] | null)}

export interface _Block_Request{
    /** The hash of the block */
    hash?: boolean | number
    /** The block number */
    number?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The type for the top-level _meta field */
export interface _Meta_Request{
    /**
     * Information about a specific subgraph block. The hash of the block
     * will be null if the _meta field has a block constraint that asks for
     * a block number. It will be filled if the _meta field has no block constraint
     * and therefore asks for the latest  block
     * 
     */
    block?: _Block_Request
    /** The deployment ID */
    deployment?: boolean | number
    /** If `true`, the subgraph encountered indexing errors at some past block */
    hasIndexingErrors?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


const AToken_possibleTypes = ['AToken']
export const isAToken = (obj?: { __typename?: any } | null): obj is AToken => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isAToken"')
  return AToken_possibleTypes.includes(obj.__typename)
}



const ATokenBalanceHistoryItem_possibleTypes = ['ATokenBalanceHistoryItem']
export const isATokenBalanceHistoryItem = (obj?: { __typename?: any } | null): obj is ATokenBalanceHistoryItem => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isATokenBalanceHistoryItem"')
  return ATokenBalanceHistoryItem_possibleTypes.includes(obj.__typename)
}



const Borrow_possibleTypes = ['Borrow']
export const isBorrow = (obj?: { __typename?: any } | null): obj is Borrow => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBorrow"')
  return Borrow_possibleTypes.includes(obj.__typename)
}



const ChainlinkAggregator_possibleTypes = ['ChainlinkAggregator']
export const isChainlinkAggregator = (obj?: { __typename?: any } | null): obj is ChainlinkAggregator => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isChainlinkAggregator"')
  return ChainlinkAggregator_possibleTypes.includes(obj.__typename)
}



const ContractToPoolMapping_possibleTypes = ['ContractToPoolMapping']
export const isContractToPoolMapping = (obj?: { __typename?: any } | null): obj is ContractToPoolMapping => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isContractToPoolMapping"')
  return ContractToPoolMapping_possibleTypes.includes(obj.__typename)
}



const Deposit_possibleTypes = ['Deposit']
export const isDeposit = (obj?: { __typename?: any } | null): obj is Deposit => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isDeposit"')
  return Deposit_possibleTypes.includes(obj.__typename)
}



const FlashLoan_possibleTypes = ['FlashLoan']
export const isFlashLoan = (obj?: { __typename?: any } | null): obj is FlashLoan => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isFlashLoan"')
  return FlashLoan_possibleTypes.includes(obj.__typename)
}



const LiquidationCall_possibleTypes = ['LiquidationCall']
export const isLiquidationCall = (obj?: { __typename?: any } | null): obj is LiquidationCall => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isLiquidationCall"')
  return LiquidationCall_possibleTypes.includes(obj.__typename)
}



const OriginationFeeLiquidation_possibleTypes = ['OriginationFeeLiquidation']
export const isOriginationFeeLiquidation = (obj?: { __typename?: any } | null): obj is OriginationFeeLiquidation => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isOriginationFeeLiquidation"')
  return OriginationFeeLiquidation_possibleTypes.includes(obj.__typename)
}



const Pool_possibleTypes = ['Pool']
export const isPool = (obj?: { __typename?: any } | null): obj is Pool => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPool"')
  return Pool_possibleTypes.includes(obj.__typename)
}



const PoolConfigurationHistoryItem_possibleTypes = ['PoolConfigurationHistoryItem']
export const isPoolConfigurationHistoryItem = (obj?: { __typename?: any } | null): obj is PoolConfigurationHistoryItem => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPoolConfigurationHistoryItem"')
  return PoolConfigurationHistoryItem_possibleTypes.includes(obj.__typename)
}



const PriceHistoryItem_possibleTypes = ['PriceHistoryItem']
export const isPriceHistoryItem = (obj?: { __typename?: any } | null): obj is PriceHistoryItem => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPriceHistoryItem"')
  return PriceHistoryItem_possibleTypes.includes(obj.__typename)
}



const PriceOracle_possibleTypes = ['PriceOracle']
export const isPriceOracle = (obj?: { __typename?: any } | null): obj is PriceOracle => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPriceOracle"')
  return PriceOracle_possibleTypes.includes(obj.__typename)
}



const PriceOracleAsset_possibleTypes = ['PriceOracleAsset']
export const isPriceOracleAsset = (obj?: { __typename?: any } | null): obj is PriceOracleAsset => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPriceOracleAsset"')
  return PriceOracleAsset_possibleTypes.includes(obj.__typename)
}



const Protocol_possibleTypes = ['Protocol']
export const isProtocol = (obj?: { __typename?: any } | null): obj is Protocol => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isProtocol"')
  return Protocol_possibleTypes.includes(obj.__typename)
}



const Query_possibleTypes = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



const RebalanceStableBorrowRate_possibleTypes = ['RebalanceStableBorrowRate']
export const isRebalanceStableBorrowRate = (obj?: { __typename?: any } | null): obj is RebalanceStableBorrowRate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isRebalanceStableBorrowRate"')
  return RebalanceStableBorrowRate_possibleTypes.includes(obj.__typename)
}



const RedeemUnderlying_possibleTypes = ['RedeemUnderlying']
export const isRedeemUnderlying = (obj?: { __typename?: any } | null): obj is RedeemUnderlying => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isRedeemUnderlying"')
  return RedeemUnderlying_possibleTypes.includes(obj.__typename)
}



const Referrer_possibleTypes = ['Referrer']
export const isReferrer = (obj?: { __typename?: any } | null): obj is Referrer => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isReferrer"')
  return Referrer_possibleTypes.includes(obj.__typename)
}



const Repay_possibleTypes = ['Repay']
export const isRepay = (obj?: { __typename?: any } | null): obj is Repay => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isRepay"')
  return Repay_possibleTypes.includes(obj.__typename)
}



const Reserve_possibleTypes = ['Reserve']
export const isReserve = (obj?: { __typename?: any } | null): obj is Reserve => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isReserve"')
  return Reserve_possibleTypes.includes(obj.__typename)
}



const ReserveConfigurationHistoryItem_possibleTypes = ['ReserveConfigurationHistoryItem']
export const isReserveConfigurationHistoryItem = (obj?: { __typename?: any } | null): obj is ReserveConfigurationHistoryItem => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isReserveConfigurationHistoryItem"')
  return ReserveConfigurationHistoryItem_possibleTypes.includes(obj.__typename)
}



const ReserveParamsHistoryItem_possibleTypes = ['ReserveParamsHistoryItem']
export const isReserveParamsHistoryItem = (obj?: { __typename?: any } | null): obj is ReserveParamsHistoryItem => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isReserveParamsHistoryItem"')
  return ReserveParamsHistoryItem_possibleTypes.includes(obj.__typename)
}



const Subscription_possibleTypes = ['Subscription']
export const isSubscription = (obj?: { __typename?: any } | null): obj is Subscription => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isSubscription"')
  return Subscription_possibleTypes.includes(obj.__typename)
}



const Swap_possibleTypes = ['Swap']
export const isSwap = (obj?: { __typename?: any } | null): obj is Swap => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isSwap"')
  return Swap_possibleTypes.includes(obj.__typename)
}



const UsageAsCollateral_possibleTypes = ['UsageAsCollateral']
export const isUsageAsCollateral = (obj?: { __typename?: any } | null): obj is UsageAsCollateral => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUsageAsCollateral"')
  return UsageAsCollateral_possibleTypes.includes(obj.__typename)
}



const UsdEthPriceHistoryItem_possibleTypes = ['UsdEthPriceHistoryItem']
export const isUsdEthPriceHistoryItem = (obj?: { __typename?: any } | null): obj is UsdEthPriceHistoryItem => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUsdEthPriceHistoryItem"')
  return UsdEthPriceHistoryItem_possibleTypes.includes(obj.__typename)
}



const User_possibleTypes = ['User']
export const isUser = (obj?: { __typename?: any } | null): obj is User => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUser"')
  return User_possibleTypes.includes(obj.__typename)
}



const UserBorrowHistoryItem_possibleTypes = ['UserBorrowHistoryItem']
export const isUserBorrowHistoryItem = (obj?: { __typename?: any } | null): obj is UserBorrowHistoryItem => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUserBorrowHistoryItem"')
  return UserBorrowHistoryItem_possibleTypes.includes(obj.__typename)
}



const UserReserve_possibleTypes = ['UserReserve']
export const isUserReserve = (obj?: { __typename?: any } | null): obj is UserReserve => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUserReserve"')
  return UserReserve_possibleTypes.includes(obj.__typename)
}



const UserTransaction_possibleTypes = ['Borrow','Deposit','LiquidationCall','OriginationFeeLiquidation','RebalanceStableBorrowRate','RedeemUnderlying','Repay','Swap','UsageAsCollateral']
export const isUserTransaction = (obj?: { __typename?: any } | null): obj is UserTransaction => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUserTransaction"')
  return UserTransaction_possibleTypes.includes(obj.__typename)
}



const _Block__possibleTypes = ['_Block_']
export const is_Block_ = (obj?: { __typename?: any } | null): obj is _Block_ => {
  if (!obj?.__typename) throw new Error('__typename is missing in "is_Block_"')
  return _Block__possibleTypes.includes(obj.__typename)
}



const _Meta__possibleTypes = ['_Meta_']
export const is_Meta_ = (obj?: { __typename?: any } | null): obj is _Meta_ => {
  if (!obj?.__typename) throw new Error('__typename is missing in "is_Meta_"')
  return _Meta__possibleTypes.includes(obj.__typename)
}


export interface ATokenPromiseChain{
    
/**
 * AToken address
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>}),
    underlyingAssetAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    underlyingAssetDecimals: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface ATokenObservableChain{
    
/**
 * AToken address
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    underlyingAssetAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    underlyingAssetDecimals: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface ATokenBalanceHistoryItemPromiseChain{
    
/**
 * userReserve + txHash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    userReserve: (UserReservePromiseChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Promise<FieldsSelection<UserReserve, R>>}),
    balance: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    userBalanceIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    interestRedirectionAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    redirectedBalance: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface ATokenBalanceHistoryItemObservableChain{
    
/**
 * userReserve + txHash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    userReserve: (UserReserveObservableChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Observable<FieldsSelection<UserReserve, R>>}),
    balance: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    userBalanceIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    interestRedirectionAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    redirectedBalance: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface BorrowPromiseChain{
    
/**
 * tx hash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>}),
    user: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Promise<FieldsSelection<User, R>>}),
    reserve: (ReservePromiseChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Promise<FieldsSelection<Reserve, R>>}),
    userReserve: (UserReservePromiseChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Promise<FieldsSelection<UserReserve, R>>}),
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    borrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    borrowRateMode: ({get: (request?: boolean|number, defaultValue?: BorrowRateMode) => Promise<BorrowRateMode>}),
    accruedBorrowInterest: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    referrer: (ReferrerPromiseChain & {get: <R extends ReferrerRequest>(request: R, defaultValue?: (FieldsSelection<Referrer, R> | undefined)) => Promise<(FieldsSelection<Referrer, R> | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface BorrowObservableChain{
    
/**
 * tx hash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    user: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Observable<FieldsSelection<User, R>>}),
    reserve: (ReserveObservableChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Observable<FieldsSelection<Reserve, R>>}),
    userReserve: (UserReserveObservableChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Observable<FieldsSelection<UserReserve, R>>}),
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    borrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    borrowRateMode: ({get: (request?: boolean|number, defaultValue?: BorrowRateMode) => Observable<BorrowRateMode>}),
    accruedBorrowInterest: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    referrer: (ReferrerObservableChain & {get: <R extends ReferrerRequest>(request: R, defaultValue?: (FieldsSelection<Referrer, R> | undefined)) => Observable<(FieldsSelection<Referrer, R> | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface ChainlinkAggregatorPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    oracleAsset: (PriceOracleAssetPromiseChain & {get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>) => Promise<FieldsSelection<PriceOracleAsset, R>>})
}

export interface ChainlinkAggregatorObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    oracleAsset: (PriceOracleAssetObservableChain & {get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>) => Observable<FieldsSelection<PriceOracleAsset, R>>})
}

export interface ContractToPoolMappingPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>})
}

export interface ContractToPoolMappingObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>})
}

export interface DepositPromiseChain{
    
/**
 * tx hash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>}),
    user: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Promise<FieldsSelection<User, R>>}),
    reserve: (ReservePromiseChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Promise<FieldsSelection<Reserve, R>>}),
    userReserve: (UserReservePromiseChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Promise<FieldsSelection<UserReserve, R>>}),
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    referrer: (ReferrerPromiseChain & {get: <R extends ReferrerRequest>(request: R, defaultValue?: (FieldsSelection<Referrer, R> | undefined)) => Promise<(FieldsSelection<Referrer, R> | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface DepositObservableChain{
    
/**
 * tx hash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    user: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Observable<FieldsSelection<User, R>>}),
    reserve: (ReserveObservableChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Observable<FieldsSelection<Reserve, R>>}),
    userReserve: (UserReserveObservableChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Observable<FieldsSelection<UserReserve, R>>}),
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    referrer: (ReferrerObservableChain & {get: <R extends ReferrerRequest>(request: R, defaultValue?: (FieldsSelection<Referrer, R> | undefined)) => Observable<(FieldsSelection<Referrer, R> | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface FlashLoanPromiseChain{
    
/**
 * tx hash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>}),
    reserve: (ReservePromiseChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Promise<FieldsSelection<Reserve, R>>}),
    target: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    totalFee: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    protocolFee: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface FlashLoanObservableChain{
    
/**
 * tx hash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    reserve: (ReserveObservableChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Observable<FieldsSelection<Reserve, R>>}),
    target: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    totalFee: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    protocolFee: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface LiquidationCallPromiseChain{
    
/**
 * tx hash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>}),
    user: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Promise<FieldsSelection<User, R>>}),
    collateralReserve: (ReservePromiseChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Promise<FieldsSelection<Reserve, R>>}),
    collateralUserReserve: (UserReservePromiseChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Promise<FieldsSelection<UserReserve, R>>}),
    collateralAmount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    principalReserve: (ReservePromiseChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Promise<FieldsSelection<Reserve, R>>}),
    principalUserReserve: (UserReservePromiseChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Promise<FieldsSelection<UserReserve, R>>}),
    principalAmount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    liquidator: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface LiquidationCallObservableChain{
    
/**
 * tx hash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    user: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Observable<FieldsSelection<User, R>>}),
    collateralReserve: (ReserveObservableChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Observable<FieldsSelection<Reserve, R>>}),
    collateralUserReserve: (UserReserveObservableChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Observable<FieldsSelection<UserReserve, R>>}),
    collateralAmount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    principalReserve: (ReserveObservableChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Observable<FieldsSelection<Reserve, R>>}),
    principalUserReserve: (UserReserveObservableChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Observable<FieldsSelection<UserReserve, R>>}),
    principalAmount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    liquidator: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface OriginationFeeLiquidationPromiseChain{
    
/**
 * tx hash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>}),
    user: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Promise<FieldsSelection<User, R>>}),
    collateralReserve: (ReservePromiseChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Promise<FieldsSelection<Reserve, R>>}),
    collateralUserReserve: (UserReservePromiseChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Promise<FieldsSelection<UserReserve, R>>}),
    principalReserve: (ReservePromiseChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Promise<FieldsSelection<Reserve, R>>}),
    principalUserReserve: (UserReservePromiseChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Promise<FieldsSelection<UserReserve, R>>}),
    feeLiquidated: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    liquidatedCollateralForFee: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface OriginationFeeLiquidationObservableChain{
    
/**
 * tx hash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    user: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Observable<FieldsSelection<User, R>>}),
    collateralReserve: (ReserveObservableChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Observable<FieldsSelection<Reserve, R>>}),
    collateralUserReserve: (UserReserveObservableChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Observable<FieldsSelection<UserReserve, R>>}),
    principalReserve: (ReserveObservableChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Observable<FieldsSelection<Reserve, R>>}),
    principalUserReserve: (UserReserveObservableChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Observable<FieldsSelection<UserReserve, R>>}),
    feeLiquidated: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    liquidatedCollateralForFee: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface PoolPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    protocol: (ProtocolPromiseChain & {get: <R extends ProtocolRequest>(request: R, defaultValue?: FieldsSelection<Protocol, R>) => Promise<FieldsSelection<Protocol, R>>}),
    lendingPool: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    lendingPoolCore: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    lendingPoolParametersProvider: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    lendingPoolManager: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    lendingPoolConfigurator: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    lendingPoolLiquidationManager: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    lendingPoolDataProvider: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    proxyPriceProvider: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    lendingRateOracle: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    feeProvider: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    history: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PoolConfigurationHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PoolConfigurationHistoryItem_filter | null)}) => {get: <R extends PoolConfigurationHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<PoolConfigurationHistoryItem, R>[]) => Promise<FieldsSelection<PoolConfigurationHistoryItem, R>[]>})&({get: <R extends PoolConfigurationHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<PoolConfigurationHistoryItem, R>[]) => Promise<FieldsSelection<PoolConfigurationHistoryItem, R>[]>}),
    lastUpdateTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    reserves: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Reserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Reserve_filter | null)}) => {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>[]) => Promise<FieldsSelection<Reserve, R>[]>})&({get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>[]) => Promise<FieldsSelection<Reserve, R>[]>}),
    depositHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null)}) => {get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Promise<FieldsSelection<Deposit, R>[]>})&({get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Promise<FieldsSelection<Deposit, R>[]>}),
    redeemUnderlyingHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RedeemUnderlying_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RedeemUnderlying_filter | null)}) => {get: <R extends RedeemUnderlyingRequest>(request: R, defaultValue?: FieldsSelection<RedeemUnderlying, R>[]) => Promise<FieldsSelection<RedeemUnderlying, R>[]>})&({get: <R extends RedeemUnderlyingRequest>(request: R, defaultValue?: FieldsSelection<RedeemUnderlying, R>[]) => Promise<FieldsSelection<RedeemUnderlying, R>[]>}),
    borrowHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Borrow_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Borrow_filter | null)}) => {get: <R extends BorrowRequest>(request: R, defaultValue?: FieldsSelection<Borrow, R>[]) => Promise<FieldsSelection<Borrow, R>[]>})&({get: <R extends BorrowRequest>(request: R, defaultValue?: FieldsSelection<Borrow, R>[]) => Promise<FieldsSelection<Borrow, R>[]>}),
    swapHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null)}) => {get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Promise<FieldsSelection<Swap, R>[]>})&({get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Promise<FieldsSelection<Swap, R>[]>}),
    usageAsCollateralHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UsageAsCollateral_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UsageAsCollateral_filter | null)}) => {get: <R extends UsageAsCollateralRequest>(request: R, defaultValue?: FieldsSelection<UsageAsCollateral, R>[]) => Promise<FieldsSelection<UsageAsCollateral, R>[]>})&({get: <R extends UsageAsCollateralRequest>(request: R, defaultValue?: FieldsSelection<UsageAsCollateral, R>[]) => Promise<FieldsSelection<UsageAsCollateral, R>[]>}),
    rebalanceStableBorrowRateHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RebalanceStableBorrowRate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RebalanceStableBorrowRate_filter | null)}) => {get: <R extends RebalanceStableBorrowRateRequest>(request: R, defaultValue?: FieldsSelection<RebalanceStableBorrowRate, R>[]) => Promise<FieldsSelection<RebalanceStableBorrowRate, R>[]>})&({get: <R extends RebalanceStableBorrowRateRequest>(request: R, defaultValue?: FieldsSelection<RebalanceStableBorrowRate, R>[]) => Promise<FieldsSelection<RebalanceStableBorrowRate, R>[]>}),
    repayHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Repay_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Repay_filter | null)}) => {get: <R extends RepayRequest>(request: R, defaultValue?: FieldsSelection<Repay, R>[]) => Promise<FieldsSelection<Repay, R>[]>})&({get: <R extends RepayRequest>(request: R, defaultValue?: FieldsSelection<Repay, R>[]) => Promise<FieldsSelection<Repay, R>[]>}),
    flashLoanHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (FlashLoan_orderBy | null),orderDirection?: (OrderDirection | null),where?: (FlashLoan_filter | null)}) => {get: <R extends FlashLoanRequest>(request: R, defaultValue?: FieldsSelection<FlashLoan, R>[]) => Promise<FieldsSelection<FlashLoan, R>[]>})&({get: <R extends FlashLoanRequest>(request: R, defaultValue?: FieldsSelection<FlashLoan, R>[]) => Promise<FieldsSelection<FlashLoan, R>[]>}),
    liquidationCallHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidationCall_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidationCall_filter | null)}) => {get: <R extends LiquidationCallRequest>(request: R, defaultValue?: FieldsSelection<LiquidationCall, R>[]) => Promise<FieldsSelection<LiquidationCall, R>[]>})&({get: <R extends LiquidationCallRequest>(request: R, defaultValue?: FieldsSelection<LiquidationCall, R>[]) => Promise<FieldsSelection<LiquidationCall, R>[]>}),
    originationFeeLiquidationHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (OriginationFeeLiquidation_orderBy | null),orderDirection?: (OrderDirection | null),where?: (OriginationFeeLiquidation_filter | null)}) => {get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: FieldsSelection<OriginationFeeLiquidation, R>[]) => Promise<FieldsSelection<OriginationFeeLiquidation, R>[]>})&({get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: FieldsSelection<OriginationFeeLiquidation, R>[]) => Promise<FieldsSelection<OriginationFeeLiquidation, R>[]>})
}

export interface PoolObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    protocol: (ProtocolObservableChain & {get: <R extends ProtocolRequest>(request: R, defaultValue?: FieldsSelection<Protocol, R>) => Observable<FieldsSelection<Protocol, R>>}),
    lendingPool: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    lendingPoolCore: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    lendingPoolParametersProvider: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    lendingPoolManager: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    lendingPoolConfigurator: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    lendingPoolLiquidationManager: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    lendingPoolDataProvider: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    proxyPriceProvider: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    lendingRateOracle: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    feeProvider: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    history: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PoolConfigurationHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PoolConfigurationHistoryItem_filter | null)}) => {get: <R extends PoolConfigurationHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<PoolConfigurationHistoryItem, R>[]) => Observable<FieldsSelection<PoolConfigurationHistoryItem, R>[]>})&({get: <R extends PoolConfigurationHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<PoolConfigurationHistoryItem, R>[]) => Observable<FieldsSelection<PoolConfigurationHistoryItem, R>[]>}),
    lastUpdateTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    reserves: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Reserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Reserve_filter | null)}) => {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>[]) => Observable<FieldsSelection<Reserve, R>[]>})&({get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>[]) => Observable<FieldsSelection<Reserve, R>[]>}),
    depositHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null)}) => {get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Observable<FieldsSelection<Deposit, R>[]>})&({get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Observable<FieldsSelection<Deposit, R>[]>}),
    redeemUnderlyingHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RedeemUnderlying_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RedeemUnderlying_filter | null)}) => {get: <R extends RedeemUnderlyingRequest>(request: R, defaultValue?: FieldsSelection<RedeemUnderlying, R>[]) => Observable<FieldsSelection<RedeemUnderlying, R>[]>})&({get: <R extends RedeemUnderlyingRequest>(request: R, defaultValue?: FieldsSelection<RedeemUnderlying, R>[]) => Observable<FieldsSelection<RedeemUnderlying, R>[]>}),
    borrowHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Borrow_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Borrow_filter | null)}) => {get: <R extends BorrowRequest>(request: R, defaultValue?: FieldsSelection<Borrow, R>[]) => Observable<FieldsSelection<Borrow, R>[]>})&({get: <R extends BorrowRequest>(request: R, defaultValue?: FieldsSelection<Borrow, R>[]) => Observable<FieldsSelection<Borrow, R>[]>}),
    swapHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null)}) => {get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Observable<FieldsSelection<Swap, R>[]>})&({get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Observable<FieldsSelection<Swap, R>[]>}),
    usageAsCollateralHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UsageAsCollateral_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UsageAsCollateral_filter | null)}) => {get: <R extends UsageAsCollateralRequest>(request: R, defaultValue?: FieldsSelection<UsageAsCollateral, R>[]) => Observable<FieldsSelection<UsageAsCollateral, R>[]>})&({get: <R extends UsageAsCollateralRequest>(request: R, defaultValue?: FieldsSelection<UsageAsCollateral, R>[]) => Observable<FieldsSelection<UsageAsCollateral, R>[]>}),
    rebalanceStableBorrowRateHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RebalanceStableBorrowRate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RebalanceStableBorrowRate_filter | null)}) => {get: <R extends RebalanceStableBorrowRateRequest>(request: R, defaultValue?: FieldsSelection<RebalanceStableBorrowRate, R>[]) => Observable<FieldsSelection<RebalanceStableBorrowRate, R>[]>})&({get: <R extends RebalanceStableBorrowRateRequest>(request: R, defaultValue?: FieldsSelection<RebalanceStableBorrowRate, R>[]) => Observable<FieldsSelection<RebalanceStableBorrowRate, R>[]>}),
    repayHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Repay_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Repay_filter | null)}) => {get: <R extends RepayRequest>(request: R, defaultValue?: FieldsSelection<Repay, R>[]) => Observable<FieldsSelection<Repay, R>[]>})&({get: <R extends RepayRequest>(request: R, defaultValue?: FieldsSelection<Repay, R>[]) => Observable<FieldsSelection<Repay, R>[]>}),
    flashLoanHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (FlashLoan_orderBy | null),orderDirection?: (OrderDirection | null),where?: (FlashLoan_filter | null)}) => {get: <R extends FlashLoanRequest>(request: R, defaultValue?: FieldsSelection<FlashLoan, R>[]) => Observable<FieldsSelection<FlashLoan, R>[]>})&({get: <R extends FlashLoanRequest>(request: R, defaultValue?: FieldsSelection<FlashLoan, R>[]) => Observable<FieldsSelection<FlashLoan, R>[]>}),
    liquidationCallHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidationCall_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidationCall_filter | null)}) => {get: <R extends LiquidationCallRequest>(request: R, defaultValue?: FieldsSelection<LiquidationCall, R>[]) => Observable<FieldsSelection<LiquidationCall, R>[]>})&({get: <R extends LiquidationCallRequest>(request: R, defaultValue?: FieldsSelection<LiquidationCall, R>[]) => Observable<FieldsSelection<LiquidationCall, R>[]>}),
    originationFeeLiquidationHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (OriginationFeeLiquidation_orderBy | null),orderDirection?: (OrderDirection | null),where?: (OriginationFeeLiquidation_filter | null)}) => {get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: FieldsSelection<OriginationFeeLiquidation, R>[]) => Observable<FieldsSelection<OriginationFeeLiquidation, R>[]>})&({get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: FieldsSelection<OriginationFeeLiquidation, R>[]) => Observable<FieldsSelection<OriginationFeeLiquidation, R>[]>})
}

export interface PoolConfigurationHistoryItemPromiseChain{
    
/**
 * tx hash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>}),
    lendingPool: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    lendingPoolCore: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    lendingPoolParametersProvider: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    lendingPoolManager: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    lendingPoolConfigurator: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    lendingPoolLiquidationManager: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    lendingPoolDataProvider: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    proxyPriceProvider: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    lendingRateOracle: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    feeProvider: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface PoolConfigurationHistoryItemObservableChain{
    
/**
 * tx hash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    lendingPool: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    lendingPoolCore: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    lendingPoolParametersProvider: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    lendingPoolManager: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    lendingPoolConfigurator: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    lendingPoolLiquidationManager: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    lendingPoolDataProvider: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    proxyPriceProvider: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    lendingRateOracle: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    feeProvider: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface PriceHistoryItemPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    asset: (PriceOracleAssetPromiseChain & {get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>) => Promise<FieldsSelection<PriceOracleAsset, R>>}),
    price: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface PriceHistoryItemObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    asset: (PriceOracleAssetObservableChain & {get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>) => Observable<FieldsSelection<PriceOracleAsset, R>>}),
    price: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface PriceOraclePromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    proxyPriceProvider: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    usdPriceEth: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    usdPriceEthMainSource: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    usdPriceEthFallbackRequired: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    fallbackPriceOracle: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    tokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceOracleAsset_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceOracleAsset_filter | null)}) => {get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>[]) => Promise<FieldsSelection<PriceOracleAsset, R>[]>})&({get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>[]) => Promise<FieldsSelection<PriceOracleAsset, R>[]>}),
    usdPriceEthHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UsdEthPriceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UsdEthPriceHistoryItem_filter | null)}) => {get: <R extends UsdEthPriceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<UsdEthPriceHistoryItem, R>[]) => Promise<FieldsSelection<UsdEthPriceHistoryItem, R>[]>})&({get: <R extends UsdEthPriceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<UsdEthPriceHistoryItem, R>[]) => Promise<FieldsSelection<UsdEthPriceHistoryItem, R>[]>}),
    tokensWithFallback: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceOracleAsset_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceOracleAsset_filter | null)}) => {get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>[]) => Promise<FieldsSelection<PriceOracleAsset, R>[]>})&({get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>[]) => Promise<FieldsSelection<PriceOracleAsset, R>[]>}),
    lastUpdateTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface PriceOracleObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    proxyPriceProvider: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    usdPriceEth: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    usdPriceEthMainSource: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    usdPriceEthFallbackRequired: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    fallbackPriceOracle: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    tokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceOracleAsset_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceOracleAsset_filter | null)}) => {get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>[]) => Observable<FieldsSelection<PriceOracleAsset, R>[]>})&({get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>[]) => Observable<FieldsSelection<PriceOracleAsset, R>[]>}),
    usdPriceEthHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UsdEthPriceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UsdEthPriceHistoryItem_filter | null)}) => {get: <R extends UsdEthPriceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<UsdEthPriceHistoryItem, R>[]) => Observable<FieldsSelection<UsdEthPriceHistoryItem, R>[]>})&({get: <R extends UsdEthPriceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<UsdEthPriceHistoryItem, R>[]) => Observable<FieldsSelection<UsdEthPriceHistoryItem, R>[]>}),
    tokensWithFallback: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceOracleAsset_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceOracleAsset_filter | null)}) => {get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>[]) => Observable<FieldsSelection<PriceOracleAsset, R>[]>})&({get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>[]) => Observable<FieldsSelection<PriceOracleAsset, R>[]>}),
    lastUpdateTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface PriceOracleAssetPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    oracle: (PriceOraclePromiseChain & {get: <R extends PriceOracleRequest>(request: R, defaultValue?: FieldsSelection<PriceOracle, R>) => Promise<FieldsSelection<PriceOracle, R>>}),
    priceInEth: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    priceSource: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    isFallbackRequired: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    type: ({get: (request?: boolean|number, defaultValue?: PriceOracleAssetType) => Promise<PriceOracleAssetType>}),
    platform: ({get: (request?: boolean|number, defaultValue?: PriceOracleAssetPlatform) => Promise<PriceOracleAssetPlatform>}),
    dependentAssets: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceOracleAsset_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceOracleAsset_filter | null)}) => {get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>[]) => Promise<FieldsSelection<PriceOracleAsset, R>[]>})&({get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>[]) => Promise<FieldsSelection<PriceOracleAsset, R>[]>}),
    lastUpdateTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    priceHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceHistoryItem_filter | null)}) => {get: <R extends PriceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<PriceHistoryItem, R>[]) => Promise<FieldsSelection<PriceHistoryItem, R>[]>})&({get: <R extends PriceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<PriceHistoryItem, R>[]) => Promise<FieldsSelection<PriceHistoryItem, R>[]>}),
    fromChainlinkSourcesRegistry: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>})
}

export interface PriceOracleAssetObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    oracle: (PriceOracleObservableChain & {get: <R extends PriceOracleRequest>(request: R, defaultValue?: FieldsSelection<PriceOracle, R>) => Observable<FieldsSelection<PriceOracle, R>>}),
    priceInEth: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    priceSource: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    isFallbackRequired: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    type: ({get: (request?: boolean|number, defaultValue?: PriceOracleAssetType) => Observable<PriceOracleAssetType>}),
    platform: ({get: (request?: boolean|number, defaultValue?: PriceOracleAssetPlatform) => Observable<PriceOracleAssetPlatform>}),
    dependentAssets: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceOracleAsset_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceOracleAsset_filter | null)}) => {get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>[]) => Observable<FieldsSelection<PriceOracleAsset, R>[]>})&({get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>[]) => Observable<FieldsSelection<PriceOracleAsset, R>[]>}),
    lastUpdateTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    priceHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceHistoryItem_filter | null)}) => {get: <R extends PriceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<PriceHistoryItem, R>[]) => Observable<FieldsSelection<PriceHistoryItem, R>[]>})&({get: <R extends PriceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<PriceHistoryItem, R>[]) => Observable<FieldsSelection<PriceHistoryItem, R>[]>}),
    fromChainlinkSourcesRegistry: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>})
}

export interface ProtocolPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    pools: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Pool_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Pool_filter | null)}) => {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>[]) => Promise<FieldsSelection<Pool, R>[]>})&({get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>[]) => Promise<FieldsSelection<Pool, R>[]>})
}

export interface ProtocolObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    pools: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Pool_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Pool_filter | null)}) => {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>[]) => Observable<FieldsSelection<Pool, R>[]>})&({get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>[]) => Observable<FieldsSelection<Pool, R>[]>})
}

export interface QueryPromiseChain{
    protocol: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ProtocolPromiseChain & {get: <R extends ProtocolRequest>(request: R, defaultValue?: (FieldsSelection<Protocol, R> | undefined)) => Promise<(FieldsSelection<Protocol, R> | undefined)>}),
    protocols: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Protocol_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Protocol_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ProtocolRequest>(request: R, defaultValue?: FieldsSelection<Protocol, R>[]) => Promise<FieldsSelection<Protocol, R>[]>})&({get: <R extends ProtocolRequest>(request: R, defaultValue?: FieldsSelection<Protocol, R>[]) => Promise<FieldsSelection<Protocol, R>[]>}),
    contractToPoolMapping: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ContractToPoolMappingPromiseChain & {get: <R extends ContractToPoolMappingRequest>(request: R, defaultValue?: (FieldsSelection<ContractToPoolMapping, R> | undefined)) => Promise<(FieldsSelection<ContractToPoolMapping, R> | undefined)>}),
    contractToPoolMappings: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ContractToPoolMapping_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ContractToPoolMapping_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ContractToPoolMappingRequest>(request: R, defaultValue?: FieldsSelection<ContractToPoolMapping, R>[]) => Promise<FieldsSelection<ContractToPoolMapping, R>[]>})&({get: <R extends ContractToPoolMappingRequest>(request: R, defaultValue?: FieldsSelection<ContractToPoolMapping, R>[]) => Promise<FieldsSelection<ContractToPoolMapping, R>[]>}),
    poolConfigurationHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => PoolConfigurationHistoryItemPromiseChain & {get: <R extends PoolConfigurationHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<PoolConfigurationHistoryItem, R> | undefined)) => Promise<(FieldsSelection<PoolConfigurationHistoryItem, R> | undefined)>}),
    poolConfigurationHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PoolConfigurationHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PoolConfigurationHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends PoolConfigurationHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<PoolConfigurationHistoryItem, R>[]) => Promise<FieldsSelection<PoolConfigurationHistoryItem, R>[]>})&({get: <R extends PoolConfigurationHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<PoolConfigurationHistoryItem, R>[]) => Promise<FieldsSelection<PoolConfigurationHistoryItem, R>[]>}),
    pool: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: (FieldsSelection<Pool, R> | undefined)) => Promise<(FieldsSelection<Pool, R> | undefined)>}),
    pools: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Pool_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Pool_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>[]) => Promise<FieldsSelection<Pool, R>[]>})&({get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>[]) => Promise<FieldsSelection<Pool, R>[]>}),
    priceHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => PriceHistoryItemPromiseChain & {get: <R extends PriceHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<PriceHistoryItem, R> | undefined)) => Promise<(FieldsSelection<PriceHistoryItem, R> | undefined)>}),
    priceHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends PriceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<PriceHistoryItem, R>[]) => Promise<FieldsSelection<PriceHistoryItem, R>[]>})&({get: <R extends PriceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<PriceHistoryItem, R>[]) => Promise<FieldsSelection<PriceHistoryItem, R>[]>}),
    usdEthPriceHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UsdEthPriceHistoryItemPromiseChain & {get: <R extends UsdEthPriceHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<UsdEthPriceHistoryItem, R> | undefined)) => Promise<(FieldsSelection<UsdEthPriceHistoryItem, R> | undefined)>}),
    usdEthPriceHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UsdEthPriceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UsdEthPriceHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UsdEthPriceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<UsdEthPriceHistoryItem, R>[]) => Promise<FieldsSelection<UsdEthPriceHistoryItem, R>[]>})&({get: <R extends UsdEthPriceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<UsdEthPriceHistoryItem, R>[]) => Promise<FieldsSelection<UsdEthPriceHistoryItem, R>[]>}),
    chainlinkAggregator: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ChainlinkAggregatorPromiseChain & {get: <R extends ChainlinkAggregatorRequest>(request: R, defaultValue?: (FieldsSelection<ChainlinkAggregator, R> | undefined)) => Promise<(FieldsSelection<ChainlinkAggregator, R> | undefined)>}),
    chainlinkAggregators: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ChainlinkAggregator_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ChainlinkAggregator_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ChainlinkAggregatorRequest>(request: R, defaultValue?: FieldsSelection<ChainlinkAggregator, R>[]) => Promise<FieldsSelection<ChainlinkAggregator, R>[]>})&({get: <R extends ChainlinkAggregatorRequest>(request: R, defaultValue?: FieldsSelection<ChainlinkAggregator, R>[]) => Promise<FieldsSelection<ChainlinkAggregator, R>[]>}),
    priceOracleAsset: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => PriceOracleAssetPromiseChain & {get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: (FieldsSelection<PriceOracleAsset, R> | undefined)) => Promise<(FieldsSelection<PriceOracleAsset, R> | undefined)>}),
    priceOracleAssets: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceOracleAsset_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceOracleAsset_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>[]) => Promise<FieldsSelection<PriceOracleAsset, R>[]>})&({get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>[]) => Promise<FieldsSelection<PriceOracleAsset, R>[]>}),
    priceOracle: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => PriceOraclePromiseChain & {get: <R extends PriceOracleRequest>(request: R, defaultValue?: (FieldsSelection<PriceOracle, R> | undefined)) => Promise<(FieldsSelection<PriceOracle, R> | undefined)>}),
    priceOracles: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceOracle_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceOracle_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends PriceOracleRequest>(request: R, defaultValue?: FieldsSelection<PriceOracle, R>[]) => Promise<FieldsSelection<PriceOracle, R>[]>})&({get: <R extends PriceOracleRequest>(request: R, defaultValue?: FieldsSelection<PriceOracle, R>[]) => Promise<FieldsSelection<PriceOracle, R>[]>}),
    atoken: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ATokenPromiseChain & {get: <R extends ATokenRequest>(request: R, defaultValue?: (FieldsSelection<AToken, R> | undefined)) => Promise<(FieldsSelection<AToken, R> | undefined)>}),
    atokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (AToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (AToken_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ATokenRequest>(request: R, defaultValue?: FieldsSelection<AToken, R>[]) => Promise<FieldsSelection<AToken, R>[]>})&({get: <R extends ATokenRequest>(request: R, defaultValue?: FieldsSelection<AToken, R>[]) => Promise<FieldsSelection<AToken, R>[]>}),
    referrer: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ReferrerPromiseChain & {get: <R extends ReferrerRequest>(request: R, defaultValue?: (FieldsSelection<Referrer, R> | undefined)) => Promise<(FieldsSelection<Referrer, R> | undefined)>}),
    referrers: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Referrer_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Referrer_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ReferrerRequest>(request: R, defaultValue?: FieldsSelection<Referrer, R>[]) => Promise<FieldsSelection<Referrer, R>[]>})&({get: <R extends ReferrerRequest>(request: R, defaultValue?: FieldsSelection<Referrer, R>[]) => Promise<FieldsSelection<Referrer, R>[]>}),
    deposit: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => DepositPromiseChain & {get: <R extends DepositRequest>(request: R, defaultValue?: (FieldsSelection<Deposit, R> | undefined)) => Promise<(FieldsSelection<Deposit, R> | undefined)>}),
    deposits: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Promise<FieldsSelection<Deposit, R>[]>})&({get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Promise<FieldsSelection<Deposit, R>[]>}),
    redeemUnderlying: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => RedeemUnderlyingPromiseChain & {get: <R extends RedeemUnderlyingRequest>(request: R, defaultValue?: (FieldsSelection<RedeemUnderlying, R> | undefined)) => Promise<(FieldsSelection<RedeemUnderlying, R> | undefined)>}),
    redeemUnderlyings: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RedeemUnderlying_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RedeemUnderlying_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends RedeemUnderlyingRequest>(request: R, defaultValue?: FieldsSelection<RedeemUnderlying, R>[]) => Promise<FieldsSelection<RedeemUnderlying, R>[]>})&({get: <R extends RedeemUnderlyingRequest>(request: R, defaultValue?: FieldsSelection<RedeemUnderlying, R>[]) => Promise<FieldsSelection<RedeemUnderlying, R>[]>}),
    borrow: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => BorrowPromiseChain & {get: <R extends BorrowRequest>(request: R, defaultValue?: (FieldsSelection<Borrow, R> | undefined)) => Promise<(FieldsSelection<Borrow, R> | undefined)>}),
    borrows: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Borrow_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Borrow_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends BorrowRequest>(request: R, defaultValue?: FieldsSelection<Borrow, R>[]) => Promise<FieldsSelection<Borrow, R>[]>})&({get: <R extends BorrowRequest>(request: R, defaultValue?: FieldsSelection<Borrow, R>[]) => Promise<FieldsSelection<Borrow, R>[]>}),
    swap: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => SwapPromiseChain & {get: <R extends SwapRequest>(request: R, defaultValue?: (FieldsSelection<Swap, R> | undefined)) => Promise<(FieldsSelection<Swap, R> | undefined)>}),
    swaps: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Promise<FieldsSelection<Swap, R>[]>})&({get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Promise<FieldsSelection<Swap, R>[]>}),
    usageAsCollateral: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UsageAsCollateralPromiseChain & {get: <R extends UsageAsCollateralRequest>(request: R, defaultValue?: (FieldsSelection<UsageAsCollateral, R> | undefined)) => Promise<(FieldsSelection<UsageAsCollateral, R> | undefined)>}),
    usageAsCollaterals: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UsageAsCollateral_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UsageAsCollateral_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UsageAsCollateralRequest>(request: R, defaultValue?: FieldsSelection<UsageAsCollateral, R>[]) => Promise<FieldsSelection<UsageAsCollateral, R>[]>})&({get: <R extends UsageAsCollateralRequest>(request: R, defaultValue?: FieldsSelection<UsageAsCollateral, R>[]) => Promise<FieldsSelection<UsageAsCollateral, R>[]>}),
    rebalanceStableBorrowRate: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => RebalanceStableBorrowRatePromiseChain & {get: <R extends RebalanceStableBorrowRateRequest>(request: R, defaultValue?: (FieldsSelection<RebalanceStableBorrowRate, R> | undefined)) => Promise<(FieldsSelection<RebalanceStableBorrowRate, R> | undefined)>}),
    rebalanceStableBorrowRates: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RebalanceStableBorrowRate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RebalanceStableBorrowRate_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends RebalanceStableBorrowRateRequest>(request: R, defaultValue?: FieldsSelection<RebalanceStableBorrowRate, R>[]) => Promise<FieldsSelection<RebalanceStableBorrowRate, R>[]>})&({get: <R extends RebalanceStableBorrowRateRequest>(request: R, defaultValue?: FieldsSelection<RebalanceStableBorrowRate, R>[]) => Promise<FieldsSelection<RebalanceStableBorrowRate, R>[]>}),
    repay: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => RepayPromiseChain & {get: <R extends RepayRequest>(request: R, defaultValue?: (FieldsSelection<Repay, R> | undefined)) => Promise<(FieldsSelection<Repay, R> | undefined)>}),
    repays: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Repay_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Repay_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends RepayRequest>(request: R, defaultValue?: FieldsSelection<Repay, R>[]) => Promise<FieldsSelection<Repay, R>[]>})&({get: <R extends RepayRequest>(request: R, defaultValue?: FieldsSelection<Repay, R>[]) => Promise<FieldsSelection<Repay, R>[]>}),
    flashLoan: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => FlashLoanPromiseChain & {get: <R extends FlashLoanRequest>(request: R, defaultValue?: (FieldsSelection<FlashLoan, R> | undefined)) => Promise<(FieldsSelection<FlashLoan, R> | undefined)>}),
    flashLoans: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (FlashLoan_orderBy | null),orderDirection?: (OrderDirection | null),where?: (FlashLoan_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends FlashLoanRequest>(request: R, defaultValue?: FieldsSelection<FlashLoan, R>[]) => Promise<FieldsSelection<FlashLoan, R>[]>})&({get: <R extends FlashLoanRequest>(request: R, defaultValue?: FieldsSelection<FlashLoan, R>[]) => Promise<FieldsSelection<FlashLoan, R>[]>}),
    liquidationCall: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => LiquidationCallPromiseChain & {get: <R extends LiquidationCallRequest>(request: R, defaultValue?: (FieldsSelection<LiquidationCall, R> | undefined)) => Promise<(FieldsSelection<LiquidationCall, R> | undefined)>}),
    liquidationCalls: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidationCall_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidationCall_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends LiquidationCallRequest>(request: R, defaultValue?: FieldsSelection<LiquidationCall, R>[]) => Promise<FieldsSelection<LiquidationCall, R>[]>})&({get: <R extends LiquidationCallRequest>(request: R, defaultValue?: FieldsSelection<LiquidationCall, R>[]) => Promise<FieldsSelection<LiquidationCall, R>[]>}),
    originationFeeLiquidation: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => OriginationFeeLiquidationPromiseChain & {get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: (FieldsSelection<OriginationFeeLiquidation, R> | undefined)) => Promise<(FieldsSelection<OriginationFeeLiquidation, R> | undefined)>}),
    originationFeeLiquidations: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (OriginationFeeLiquidation_orderBy | null),orderDirection?: (OrderDirection | null),where?: (OriginationFeeLiquidation_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: FieldsSelection<OriginationFeeLiquidation, R>[]) => Promise<FieldsSelection<OriginationFeeLiquidation, R>[]>})&({get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: FieldsSelection<OriginationFeeLiquidation, R>[]) => Promise<FieldsSelection<OriginationFeeLiquidation, R>[]>}),
    reserveConfigurationHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ReserveConfigurationHistoryItemPromiseChain & {get: <R extends ReserveConfigurationHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<ReserveConfigurationHistoryItem, R> | undefined)) => Promise<(FieldsSelection<ReserveConfigurationHistoryItem, R> | undefined)>}),
    reserveConfigurationHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ReserveConfigurationHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ReserveConfigurationHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ReserveConfigurationHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ReserveConfigurationHistoryItem, R>[]) => Promise<FieldsSelection<ReserveConfigurationHistoryItem, R>[]>})&({get: <R extends ReserveConfigurationHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ReserveConfigurationHistoryItem, R>[]) => Promise<FieldsSelection<ReserveConfigurationHistoryItem, R>[]>}),
    reserveParamsHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ReserveParamsHistoryItemPromiseChain & {get: <R extends ReserveParamsHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<ReserveParamsHistoryItem, R> | undefined)) => Promise<(FieldsSelection<ReserveParamsHistoryItem, R> | undefined)>}),
    reserveParamsHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ReserveParamsHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ReserveParamsHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ReserveParamsHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ReserveParamsHistoryItem, R>[]) => Promise<FieldsSelection<ReserveParamsHistoryItem, R>[]>})&({get: <R extends ReserveParamsHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ReserveParamsHistoryItem, R>[]) => Promise<FieldsSelection<ReserveParamsHistoryItem, R>[]>}),
    reserve: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ReservePromiseChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: (FieldsSelection<Reserve, R> | undefined)) => Promise<(FieldsSelection<Reserve, R> | undefined)>}),
    reserves: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Reserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Reserve_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>[]) => Promise<FieldsSelection<Reserve, R>[]>})&({get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>[]) => Promise<FieldsSelection<Reserve, R>[]>}),
    atokenBalanceHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ATokenBalanceHistoryItemPromiseChain & {get: <R extends ATokenBalanceHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<ATokenBalanceHistoryItem, R> | undefined)) => Promise<(FieldsSelection<ATokenBalanceHistoryItem, R> | undefined)>}),
    atokenBalanceHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ATokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ATokenBalanceHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ATokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ATokenBalanceHistoryItem, R>[]) => Promise<FieldsSelection<ATokenBalanceHistoryItem, R>[]>})&({get: <R extends ATokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ATokenBalanceHistoryItem, R>[]) => Promise<FieldsSelection<ATokenBalanceHistoryItem, R>[]>}),
    userBorrowHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UserBorrowHistoryItemPromiseChain & {get: <R extends UserBorrowHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<UserBorrowHistoryItem, R> | undefined)) => Promise<(FieldsSelection<UserBorrowHistoryItem, R> | undefined)>}),
    userBorrowHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UserBorrowHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UserBorrowHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UserBorrowHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<UserBorrowHistoryItem, R>[]) => Promise<FieldsSelection<UserBorrowHistoryItem, R>[]>})&({get: <R extends UserBorrowHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<UserBorrowHistoryItem, R>[]) => Promise<FieldsSelection<UserBorrowHistoryItem, R>[]>}),
    userReserve: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UserReservePromiseChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: (FieldsSelection<UserReserve, R> | undefined)) => Promise<(FieldsSelection<UserReserve, R> | undefined)>}),
    userReserves: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UserReserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UserReserve_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>[]) => Promise<FieldsSelection<UserReserve, R>[]>})&({get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>[]) => Promise<FieldsSelection<UserReserve, R>[]>}),
    user: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: (FieldsSelection<User, R> | undefined)) => Promise<(FieldsSelection<User, R> | undefined)>}),
    users: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (User_orderBy | null),orderDirection?: (OrderDirection | null),where?: (User_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>[]) => Promise<FieldsSelection<User, R>[]>})&({get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>[]) => Promise<FieldsSelection<User, R>[]>}),
    userTransaction: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UserTransactionPromiseChain & {get: <R extends UserTransactionRequest>(request: R, defaultValue?: (FieldsSelection<UserTransaction, R> | undefined)) => Promise<(FieldsSelection<UserTransaction, R> | undefined)>}),
    userTransactions: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UserTransaction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UserTransaction_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UserTransactionRequest>(request: R, defaultValue?: FieldsSelection<UserTransaction, R>[]) => Promise<FieldsSelection<UserTransaction, R>[]>})&({get: <R extends UserTransactionRequest>(request: R, defaultValue?: FieldsSelection<UserTransaction, R>[]) => Promise<FieldsSelection<UserTransaction, R>[]>}),
    
/** Access to subgraph metadata */
_meta: ((args?: {block?: (Block_height | null)}) => _Meta_PromiseChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Promise<(FieldsSelection<_Meta_, R> | undefined)>})&(_Meta_PromiseChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Promise<(FieldsSelection<_Meta_, R> | undefined)>})
}

export interface QueryObservableChain{
    protocol: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ProtocolObservableChain & {get: <R extends ProtocolRequest>(request: R, defaultValue?: (FieldsSelection<Protocol, R> | undefined)) => Observable<(FieldsSelection<Protocol, R> | undefined)>}),
    protocols: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Protocol_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Protocol_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ProtocolRequest>(request: R, defaultValue?: FieldsSelection<Protocol, R>[]) => Observable<FieldsSelection<Protocol, R>[]>})&({get: <R extends ProtocolRequest>(request: R, defaultValue?: FieldsSelection<Protocol, R>[]) => Observable<FieldsSelection<Protocol, R>[]>}),
    contractToPoolMapping: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ContractToPoolMappingObservableChain & {get: <R extends ContractToPoolMappingRequest>(request: R, defaultValue?: (FieldsSelection<ContractToPoolMapping, R> | undefined)) => Observable<(FieldsSelection<ContractToPoolMapping, R> | undefined)>}),
    contractToPoolMappings: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ContractToPoolMapping_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ContractToPoolMapping_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ContractToPoolMappingRequest>(request: R, defaultValue?: FieldsSelection<ContractToPoolMapping, R>[]) => Observable<FieldsSelection<ContractToPoolMapping, R>[]>})&({get: <R extends ContractToPoolMappingRequest>(request: R, defaultValue?: FieldsSelection<ContractToPoolMapping, R>[]) => Observable<FieldsSelection<ContractToPoolMapping, R>[]>}),
    poolConfigurationHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => PoolConfigurationHistoryItemObservableChain & {get: <R extends PoolConfigurationHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<PoolConfigurationHistoryItem, R> | undefined)) => Observable<(FieldsSelection<PoolConfigurationHistoryItem, R> | undefined)>}),
    poolConfigurationHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PoolConfigurationHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PoolConfigurationHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends PoolConfigurationHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<PoolConfigurationHistoryItem, R>[]) => Observable<FieldsSelection<PoolConfigurationHistoryItem, R>[]>})&({get: <R extends PoolConfigurationHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<PoolConfigurationHistoryItem, R>[]) => Observable<FieldsSelection<PoolConfigurationHistoryItem, R>[]>}),
    pool: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: (FieldsSelection<Pool, R> | undefined)) => Observable<(FieldsSelection<Pool, R> | undefined)>}),
    pools: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Pool_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Pool_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>[]) => Observable<FieldsSelection<Pool, R>[]>})&({get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>[]) => Observable<FieldsSelection<Pool, R>[]>}),
    priceHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => PriceHistoryItemObservableChain & {get: <R extends PriceHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<PriceHistoryItem, R> | undefined)) => Observable<(FieldsSelection<PriceHistoryItem, R> | undefined)>}),
    priceHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends PriceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<PriceHistoryItem, R>[]) => Observable<FieldsSelection<PriceHistoryItem, R>[]>})&({get: <R extends PriceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<PriceHistoryItem, R>[]) => Observable<FieldsSelection<PriceHistoryItem, R>[]>}),
    usdEthPriceHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UsdEthPriceHistoryItemObservableChain & {get: <R extends UsdEthPriceHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<UsdEthPriceHistoryItem, R> | undefined)) => Observable<(FieldsSelection<UsdEthPriceHistoryItem, R> | undefined)>}),
    usdEthPriceHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UsdEthPriceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UsdEthPriceHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UsdEthPriceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<UsdEthPriceHistoryItem, R>[]) => Observable<FieldsSelection<UsdEthPriceHistoryItem, R>[]>})&({get: <R extends UsdEthPriceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<UsdEthPriceHistoryItem, R>[]) => Observable<FieldsSelection<UsdEthPriceHistoryItem, R>[]>}),
    chainlinkAggregator: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ChainlinkAggregatorObservableChain & {get: <R extends ChainlinkAggregatorRequest>(request: R, defaultValue?: (FieldsSelection<ChainlinkAggregator, R> | undefined)) => Observable<(FieldsSelection<ChainlinkAggregator, R> | undefined)>}),
    chainlinkAggregators: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ChainlinkAggregator_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ChainlinkAggregator_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ChainlinkAggregatorRequest>(request: R, defaultValue?: FieldsSelection<ChainlinkAggregator, R>[]) => Observable<FieldsSelection<ChainlinkAggregator, R>[]>})&({get: <R extends ChainlinkAggregatorRequest>(request: R, defaultValue?: FieldsSelection<ChainlinkAggregator, R>[]) => Observable<FieldsSelection<ChainlinkAggregator, R>[]>}),
    priceOracleAsset: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => PriceOracleAssetObservableChain & {get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: (FieldsSelection<PriceOracleAsset, R> | undefined)) => Observable<(FieldsSelection<PriceOracleAsset, R> | undefined)>}),
    priceOracleAssets: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceOracleAsset_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceOracleAsset_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>[]) => Observable<FieldsSelection<PriceOracleAsset, R>[]>})&({get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>[]) => Observable<FieldsSelection<PriceOracleAsset, R>[]>}),
    priceOracle: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => PriceOracleObservableChain & {get: <R extends PriceOracleRequest>(request: R, defaultValue?: (FieldsSelection<PriceOracle, R> | undefined)) => Observable<(FieldsSelection<PriceOracle, R> | undefined)>}),
    priceOracles: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceOracle_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceOracle_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends PriceOracleRequest>(request: R, defaultValue?: FieldsSelection<PriceOracle, R>[]) => Observable<FieldsSelection<PriceOracle, R>[]>})&({get: <R extends PriceOracleRequest>(request: R, defaultValue?: FieldsSelection<PriceOracle, R>[]) => Observable<FieldsSelection<PriceOracle, R>[]>}),
    atoken: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ATokenObservableChain & {get: <R extends ATokenRequest>(request: R, defaultValue?: (FieldsSelection<AToken, R> | undefined)) => Observable<(FieldsSelection<AToken, R> | undefined)>}),
    atokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (AToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (AToken_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ATokenRequest>(request: R, defaultValue?: FieldsSelection<AToken, R>[]) => Observable<FieldsSelection<AToken, R>[]>})&({get: <R extends ATokenRequest>(request: R, defaultValue?: FieldsSelection<AToken, R>[]) => Observable<FieldsSelection<AToken, R>[]>}),
    referrer: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ReferrerObservableChain & {get: <R extends ReferrerRequest>(request: R, defaultValue?: (FieldsSelection<Referrer, R> | undefined)) => Observable<(FieldsSelection<Referrer, R> | undefined)>}),
    referrers: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Referrer_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Referrer_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ReferrerRequest>(request: R, defaultValue?: FieldsSelection<Referrer, R>[]) => Observable<FieldsSelection<Referrer, R>[]>})&({get: <R extends ReferrerRequest>(request: R, defaultValue?: FieldsSelection<Referrer, R>[]) => Observable<FieldsSelection<Referrer, R>[]>}),
    deposit: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => DepositObservableChain & {get: <R extends DepositRequest>(request: R, defaultValue?: (FieldsSelection<Deposit, R> | undefined)) => Observable<(FieldsSelection<Deposit, R> | undefined)>}),
    deposits: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Observable<FieldsSelection<Deposit, R>[]>})&({get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Observable<FieldsSelection<Deposit, R>[]>}),
    redeemUnderlying: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => RedeemUnderlyingObservableChain & {get: <R extends RedeemUnderlyingRequest>(request: R, defaultValue?: (FieldsSelection<RedeemUnderlying, R> | undefined)) => Observable<(FieldsSelection<RedeemUnderlying, R> | undefined)>}),
    redeemUnderlyings: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RedeemUnderlying_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RedeemUnderlying_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends RedeemUnderlyingRequest>(request: R, defaultValue?: FieldsSelection<RedeemUnderlying, R>[]) => Observable<FieldsSelection<RedeemUnderlying, R>[]>})&({get: <R extends RedeemUnderlyingRequest>(request: R, defaultValue?: FieldsSelection<RedeemUnderlying, R>[]) => Observable<FieldsSelection<RedeemUnderlying, R>[]>}),
    borrow: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => BorrowObservableChain & {get: <R extends BorrowRequest>(request: R, defaultValue?: (FieldsSelection<Borrow, R> | undefined)) => Observable<(FieldsSelection<Borrow, R> | undefined)>}),
    borrows: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Borrow_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Borrow_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends BorrowRequest>(request: R, defaultValue?: FieldsSelection<Borrow, R>[]) => Observable<FieldsSelection<Borrow, R>[]>})&({get: <R extends BorrowRequest>(request: R, defaultValue?: FieldsSelection<Borrow, R>[]) => Observable<FieldsSelection<Borrow, R>[]>}),
    swap: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => SwapObservableChain & {get: <R extends SwapRequest>(request: R, defaultValue?: (FieldsSelection<Swap, R> | undefined)) => Observable<(FieldsSelection<Swap, R> | undefined)>}),
    swaps: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Observable<FieldsSelection<Swap, R>[]>})&({get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Observable<FieldsSelection<Swap, R>[]>}),
    usageAsCollateral: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UsageAsCollateralObservableChain & {get: <R extends UsageAsCollateralRequest>(request: R, defaultValue?: (FieldsSelection<UsageAsCollateral, R> | undefined)) => Observable<(FieldsSelection<UsageAsCollateral, R> | undefined)>}),
    usageAsCollaterals: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UsageAsCollateral_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UsageAsCollateral_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UsageAsCollateralRequest>(request: R, defaultValue?: FieldsSelection<UsageAsCollateral, R>[]) => Observable<FieldsSelection<UsageAsCollateral, R>[]>})&({get: <R extends UsageAsCollateralRequest>(request: R, defaultValue?: FieldsSelection<UsageAsCollateral, R>[]) => Observable<FieldsSelection<UsageAsCollateral, R>[]>}),
    rebalanceStableBorrowRate: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => RebalanceStableBorrowRateObservableChain & {get: <R extends RebalanceStableBorrowRateRequest>(request: R, defaultValue?: (FieldsSelection<RebalanceStableBorrowRate, R> | undefined)) => Observable<(FieldsSelection<RebalanceStableBorrowRate, R> | undefined)>}),
    rebalanceStableBorrowRates: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RebalanceStableBorrowRate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RebalanceStableBorrowRate_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends RebalanceStableBorrowRateRequest>(request: R, defaultValue?: FieldsSelection<RebalanceStableBorrowRate, R>[]) => Observable<FieldsSelection<RebalanceStableBorrowRate, R>[]>})&({get: <R extends RebalanceStableBorrowRateRequest>(request: R, defaultValue?: FieldsSelection<RebalanceStableBorrowRate, R>[]) => Observable<FieldsSelection<RebalanceStableBorrowRate, R>[]>}),
    repay: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => RepayObservableChain & {get: <R extends RepayRequest>(request: R, defaultValue?: (FieldsSelection<Repay, R> | undefined)) => Observable<(FieldsSelection<Repay, R> | undefined)>}),
    repays: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Repay_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Repay_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends RepayRequest>(request: R, defaultValue?: FieldsSelection<Repay, R>[]) => Observable<FieldsSelection<Repay, R>[]>})&({get: <R extends RepayRequest>(request: R, defaultValue?: FieldsSelection<Repay, R>[]) => Observable<FieldsSelection<Repay, R>[]>}),
    flashLoan: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => FlashLoanObservableChain & {get: <R extends FlashLoanRequest>(request: R, defaultValue?: (FieldsSelection<FlashLoan, R> | undefined)) => Observable<(FieldsSelection<FlashLoan, R> | undefined)>}),
    flashLoans: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (FlashLoan_orderBy | null),orderDirection?: (OrderDirection | null),where?: (FlashLoan_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends FlashLoanRequest>(request: R, defaultValue?: FieldsSelection<FlashLoan, R>[]) => Observable<FieldsSelection<FlashLoan, R>[]>})&({get: <R extends FlashLoanRequest>(request: R, defaultValue?: FieldsSelection<FlashLoan, R>[]) => Observable<FieldsSelection<FlashLoan, R>[]>}),
    liquidationCall: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => LiquidationCallObservableChain & {get: <R extends LiquidationCallRequest>(request: R, defaultValue?: (FieldsSelection<LiquidationCall, R> | undefined)) => Observable<(FieldsSelection<LiquidationCall, R> | undefined)>}),
    liquidationCalls: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidationCall_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidationCall_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends LiquidationCallRequest>(request: R, defaultValue?: FieldsSelection<LiquidationCall, R>[]) => Observable<FieldsSelection<LiquidationCall, R>[]>})&({get: <R extends LiquidationCallRequest>(request: R, defaultValue?: FieldsSelection<LiquidationCall, R>[]) => Observable<FieldsSelection<LiquidationCall, R>[]>}),
    originationFeeLiquidation: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => OriginationFeeLiquidationObservableChain & {get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: (FieldsSelection<OriginationFeeLiquidation, R> | undefined)) => Observable<(FieldsSelection<OriginationFeeLiquidation, R> | undefined)>}),
    originationFeeLiquidations: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (OriginationFeeLiquidation_orderBy | null),orderDirection?: (OrderDirection | null),where?: (OriginationFeeLiquidation_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: FieldsSelection<OriginationFeeLiquidation, R>[]) => Observable<FieldsSelection<OriginationFeeLiquidation, R>[]>})&({get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: FieldsSelection<OriginationFeeLiquidation, R>[]) => Observable<FieldsSelection<OriginationFeeLiquidation, R>[]>}),
    reserveConfigurationHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ReserveConfigurationHistoryItemObservableChain & {get: <R extends ReserveConfigurationHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<ReserveConfigurationHistoryItem, R> | undefined)) => Observable<(FieldsSelection<ReserveConfigurationHistoryItem, R> | undefined)>}),
    reserveConfigurationHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ReserveConfigurationHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ReserveConfigurationHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ReserveConfigurationHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ReserveConfigurationHistoryItem, R>[]) => Observable<FieldsSelection<ReserveConfigurationHistoryItem, R>[]>})&({get: <R extends ReserveConfigurationHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ReserveConfigurationHistoryItem, R>[]) => Observable<FieldsSelection<ReserveConfigurationHistoryItem, R>[]>}),
    reserveParamsHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ReserveParamsHistoryItemObservableChain & {get: <R extends ReserveParamsHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<ReserveParamsHistoryItem, R> | undefined)) => Observable<(FieldsSelection<ReserveParamsHistoryItem, R> | undefined)>}),
    reserveParamsHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ReserveParamsHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ReserveParamsHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ReserveParamsHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ReserveParamsHistoryItem, R>[]) => Observable<FieldsSelection<ReserveParamsHistoryItem, R>[]>})&({get: <R extends ReserveParamsHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ReserveParamsHistoryItem, R>[]) => Observable<FieldsSelection<ReserveParamsHistoryItem, R>[]>}),
    reserve: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ReserveObservableChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: (FieldsSelection<Reserve, R> | undefined)) => Observable<(FieldsSelection<Reserve, R> | undefined)>}),
    reserves: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Reserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Reserve_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>[]) => Observable<FieldsSelection<Reserve, R>[]>})&({get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>[]) => Observable<FieldsSelection<Reserve, R>[]>}),
    atokenBalanceHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ATokenBalanceHistoryItemObservableChain & {get: <R extends ATokenBalanceHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<ATokenBalanceHistoryItem, R> | undefined)) => Observable<(FieldsSelection<ATokenBalanceHistoryItem, R> | undefined)>}),
    atokenBalanceHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ATokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ATokenBalanceHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ATokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ATokenBalanceHistoryItem, R>[]) => Observable<FieldsSelection<ATokenBalanceHistoryItem, R>[]>})&({get: <R extends ATokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ATokenBalanceHistoryItem, R>[]) => Observable<FieldsSelection<ATokenBalanceHistoryItem, R>[]>}),
    userBorrowHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UserBorrowHistoryItemObservableChain & {get: <R extends UserBorrowHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<UserBorrowHistoryItem, R> | undefined)) => Observable<(FieldsSelection<UserBorrowHistoryItem, R> | undefined)>}),
    userBorrowHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UserBorrowHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UserBorrowHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UserBorrowHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<UserBorrowHistoryItem, R>[]) => Observable<FieldsSelection<UserBorrowHistoryItem, R>[]>})&({get: <R extends UserBorrowHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<UserBorrowHistoryItem, R>[]) => Observable<FieldsSelection<UserBorrowHistoryItem, R>[]>}),
    userReserve: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UserReserveObservableChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: (FieldsSelection<UserReserve, R> | undefined)) => Observable<(FieldsSelection<UserReserve, R> | undefined)>}),
    userReserves: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UserReserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UserReserve_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>[]) => Observable<FieldsSelection<UserReserve, R>[]>})&({get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>[]) => Observable<FieldsSelection<UserReserve, R>[]>}),
    user: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: (FieldsSelection<User, R> | undefined)) => Observable<(FieldsSelection<User, R> | undefined)>}),
    users: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (User_orderBy | null),orderDirection?: (OrderDirection | null),where?: (User_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>[]) => Observable<FieldsSelection<User, R>[]>})&({get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>[]) => Observable<FieldsSelection<User, R>[]>}),
    userTransaction: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UserTransactionObservableChain & {get: <R extends UserTransactionRequest>(request: R, defaultValue?: (FieldsSelection<UserTransaction, R> | undefined)) => Observable<(FieldsSelection<UserTransaction, R> | undefined)>}),
    userTransactions: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UserTransaction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UserTransaction_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UserTransactionRequest>(request: R, defaultValue?: FieldsSelection<UserTransaction, R>[]) => Observable<FieldsSelection<UserTransaction, R>[]>})&({get: <R extends UserTransactionRequest>(request: R, defaultValue?: FieldsSelection<UserTransaction, R>[]) => Observable<FieldsSelection<UserTransaction, R>[]>}),
    
/** Access to subgraph metadata */
_meta: ((args?: {block?: (Block_height | null)}) => _Meta_ObservableChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Observable<(FieldsSelection<_Meta_, R> | undefined)>})&(_Meta_ObservableChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Observable<(FieldsSelection<_Meta_, R> | undefined)>})
}

export interface RebalanceStableBorrowRatePromiseChain{
    
/**
 * tx hash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>}),
    user: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Promise<FieldsSelection<User, R>>}),
    reserve: (ReservePromiseChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Promise<FieldsSelection<Reserve, R>>}),
    userReserve: (UserReservePromiseChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Promise<FieldsSelection<UserReserve, R>>}),
    borrowRateFrom: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    borrowRateTo: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    accruedBorrowInterest: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface RebalanceStableBorrowRateObservableChain{
    
/**
 * tx hash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    user: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Observable<FieldsSelection<User, R>>}),
    reserve: (ReserveObservableChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Observable<FieldsSelection<Reserve, R>>}),
    userReserve: (UserReserveObservableChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Observable<FieldsSelection<UserReserve, R>>}),
    borrowRateFrom: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    borrowRateTo: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    accruedBorrowInterest: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface RedeemUnderlyingPromiseChain{
    
/**
 * tx hash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>}),
    user: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Promise<FieldsSelection<User, R>>}),
    reserve: (ReservePromiseChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Promise<FieldsSelection<Reserve, R>>}),
    userReserve: (UserReservePromiseChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Promise<FieldsSelection<UserReserve, R>>}),
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface RedeemUnderlyingObservableChain{
    
/**
 * tx hash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    user: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Observable<FieldsSelection<User, R>>}),
    reserve: (ReserveObservableChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Observable<FieldsSelection<Reserve, R>>}),
    userReserve: (UserReserveObservableChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Observable<FieldsSelection<UserReserve, R>>}),
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface ReferrerPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    deposits: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null)}) => {get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Promise<FieldsSelection<Deposit, R>[]>})&({get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Promise<FieldsSelection<Deposit, R>[]>}),
    borrows: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Borrow_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Borrow_filter | null)}) => {get: <R extends BorrowRequest>(request: R, defaultValue?: FieldsSelection<Borrow, R>[]) => Promise<FieldsSelection<Borrow, R>[]>})&({get: <R extends BorrowRequest>(request: R, defaultValue?: FieldsSelection<Borrow, R>[]) => Promise<FieldsSelection<Borrow, R>[]>})
}

export interface ReferrerObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    deposits: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null)}) => {get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Observable<FieldsSelection<Deposit, R>[]>})&({get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Observable<FieldsSelection<Deposit, R>[]>}),
    borrows: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Borrow_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Borrow_filter | null)}) => {get: <R extends BorrowRequest>(request: R, defaultValue?: FieldsSelection<Borrow, R>[]) => Observable<FieldsSelection<Borrow, R>[]>})&({get: <R extends BorrowRequest>(request: R, defaultValue?: FieldsSelection<Borrow, R>[]) => Observable<FieldsSelection<Borrow, R>[]>})
}

export interface RepayPromiseChain{
    
/**
 * tx hash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>}),
    user: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Promise<FieldsSelection<User, R>>}),
    reserve: (ReservePromiseChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Promise<FieldsSelection<Reserve, R>>}),
    userReserve: (UserReservePromiseChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Promise<FieldsSelection<UserReserve, R>>}),
    amountAfterFee: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    fee: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface RepayObservableChain{
    
/**
 * tx hash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    user: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Observable<FieldsSelection<User, R>>}),
    reserve: (ReserveObservableChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Observable<FieldsSelection<Reserve, R>>}),
    userReserve: (UserReserveObservableChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Observable<FieldsSelection<UserReserve, R>>}),
    amountAfterFee: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    fee: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface ReservePromiseChain{
    
/**
 * Reserve address
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    underlyingAsset: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>}),
    symbol: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    decimals: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    usageAsCollateralEnabled: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    borrowingEnabled: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    stableBorrowRateEnabled: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    isActive: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    isFreezed: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    price: (PriceOracleAssetPromiseChain & {get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>) => Promise<FieldsSelection<PriceOracleAsset, R>>}),
    reserveInterestRateStrategy: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    optimalUtilisationRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    variableRateSlope1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    variableRateSlope2: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    stableRateSlope1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    stableRateSlope2: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    baseVariableBorrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    baseLTVasCollateral: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    reserveLiquidationThreshold: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    reserveLiquidationBonus: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    utilizationRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    totalLiquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    totalLiquidityAsCollateral: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    availableLiquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    totalBorrows: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    totalBorrowsStable: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    totalBorrowsVariable: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    liquidityRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    variableBorrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    stableBorrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    averageStableBorrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    liquidityIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    variableBorrowIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    aToken: (ATokenPromiseChain & {get: <R extends ATokenRequest>(request: R, defaultValue?: FieldsSelection<AToken, R>) => Promise<FieldsSelection<AToken, R>>}),
    lastUpdateTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    lifetimeDepositorsInterestEarned: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    aTokenTotalSupply: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeLiquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeBorrows: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeBorrowsStable: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeBorrowsVariable: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeRepayments: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeWithdrawals: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeLiquidated: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeFeeOriginated: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeFeeCollected: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeFlashLoans: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeFlashloanDepositorsFee: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeFlashloanProtocolFee: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    userReserves: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UserReserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UserReserve_filter | null)}) => {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>[]) => Promise<FieldsSelection<UserReserve, R>[]>})&({get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>[]) => Promise<FieldsSelection<UserReserve, R>[]>}),
    depositHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null)}) => {get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Promise<FieldsSelection<Deposit, R>[]>})&({get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Promise<FieldsSelection<Deposit, R>[]>}),
    redeemUnderlyingHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RedeemUnderlying_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RedeemUnderlying_filter | null)}) => {get: <R extends RedeemUnderlyingRequest>(request: R, defaultValue?: FieldsSelection<RedeemUnderlying, R>[]) => Promise<FieldsSelection<RedeemUnderlying, R>[]>})&({get: <R extends RedeemUnderlyingRequest>(request: R, defaultValue?: FieldsSelection<RedeemUnderlying, R>[]) => Promise<FieldsSelection<RedeemUnderlying, R>[]>}),
    borrowHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Borrow_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Borrow_filter | null)}) => {get: <R extends BorrowRequest>(request: R, defaultValue?: FieldsSelection<Borrow, R>[]) => Promise<FieldsSelection<Borrow, R>[]>})&({get: <R extends BorrowRequest>(request: R, defaultValue?: FieldsSelection<Borrow, R>[]) => Promise<FieldsSelection<Borrow, R>[]>}),
    usageAsCollateralHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UsageAsCollateral_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UsageAsCollateral_filter | null)}) => {get: <R extends UsageAsCollateralRequest>(request: R, defaultValue?: FieldsSelection<UsageAsCollateral, R>[]) => Promise<FieldsSelection<UsageAsCollateral, R>[]>})&({get: <R extends UsageAsCollateralRequest>(request: R, defaultValue?: FieldsSelection<UsageAsCollateral, R>[]) => Promise<FieldsSelection<UsageAsCollateral, R>[]>}),
    swapHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null)}) => {get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Promise<FieldsSelection<Swap, R>[]>})&({get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Promise<FieldsSelection<Swap, R>[]>}),
    rebalanceStableBorrowRateHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RebalanceStableBorrowRate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RebalanceStableBorrowRate_filter | null)}) => {get: <R extends RebalanceStableBorrowRateRequest>(request: R, defaultValue?: FieldsSelection<RebalanceStableBorrowRate, R>[]) => Promise<FieldsSelection<RebalanceStableBorrowRate, R>[]>})&({get: <R extends RebalanceStableBorrowRateRequest>(request: R, defaultValue?: FieldsSelection<RebalanceStableBorrowRate, R>[]) => Promise<FieldsSelection<RebalanceStableBorrowRate, R>[]>}),
    repayHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Repay_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Repay_filter | null)}) => {get: <R extends RepayRequest>(request: R, defaultValue?: FieldsSelection<Repay, R>[]) => Promise<FieldsSelection<Repay, R>[]>})&({get: <R extends RepayRequest>(request: R, defaultValue?: FieldsSelection<Repay, R>[]) => Promise<FieldsSelection<Repay, R>[]>}),
    flashLoanHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (FlashLoan_orderBy | null),orderDirection?: (OrderDirection | null),where?: (FlashLoan_filter | null)}) => {get: <R extends FlashLoanRequest>(request: R, defaultValue?: FieldsSelection<FlashLoan, R>[]) => Promise<FieldsSelection<FlashLoan, R>[]>})&({get: <R extends FlashLoanRequest>(request: R, defaultValue?: FieldsSelection<FlashLoan, R>[]) => Promise<FieldsSelection<FlashLoan, R>[]>}),
    liquidationCallHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidationCall_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidationCall_filter | null)}) => {get: <R extends LiquidationCallRequest>(request: R, defaultValue?: FieldsSelection<LiquidationCall, R>[]) => Promise<FieldsSelection<LiquidationCall, R>[]>})&({get: <R extends LiquidationCallRequest>(request: R, defaultValue?: FieldsSelection<LiquidationCall, R>[]) => Promise<FieldsSelection<LiquidationCall, R>[]>}),
    originationFeeLiquidationHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (OriginationFeeLiquidation_orderBy | null),orderDirection?: (OrderDirection | null),where?: (OriginationFeeLiquidation_filter | null)}) => {get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: FieldsSelection<OriginationFeeLiquidation, R>[]) => Promise<FieldsSelection<OriginationFeeLiquidation, R>[]>})&({get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: FieldsSelection<OriginationFeeLiquidation, R>[]) => Promise<FieldsSelection<OriginationFeeLiquidation, R>[]>}),
    paramsHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ReserveParamsHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ReserveParamsHistoryItem_filter | null)}) => {get: <R extends ReserveParamsHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ReserveParamsHistoryItem, R>[]) => Promise<FieldsSelection<ReserveParamsHistoryItem, R>[]>})&({get: <R extends ReserveParamsHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ReserveParamsHistoryItem, R>[]) => Promise<FieldsSelection<ReserveParamsHistoryItem, R>[]>}),
    configurationHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ReserveConfigurationHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ReserveConfigurationHistoryItem_filter | null)}) => {get: <R extends ReserveConfigurationHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ReserveConfigurationHistoryItem, R>[]) => Promise<FieldsSelection<ReserveConfigurationHistoryItem, R>[]>})&({get: <R extends ReserveConfigurationHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ReserveConfigurationHistoryItem, R>[]) => Promise<FieldsSelection<ReserveConfigurationHistoryItem, R>[]>}),
    deposits: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null)}) => {get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Promise<FieldsSelection<Deposit, R>[]>})&({get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Promise<FieldsSelection<Deposit, R>[]>})
}

export interface ReserveObservableChain{
    
/**
 * Reserve address
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    underlyingAsset: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    symbol: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    decimals: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    usageAsCollateralEnabled: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    borrowingEnabled: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    stableBorrowRateEnabled: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    isActive: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    isFreezed: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    price: (PriceOracleAssetObservableChain & {get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>) => Observable<FieldsSelection<PriceOracleAsset, R>>}),
    reserveInterestRateStrategy: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    optimalUtilisationRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    variableRateSlope1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    variableRateSlope2: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    stableRateSlope1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    stableRateSlope2: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    baseVariableBorrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    baseLTVasCollateral: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    reserveLiquidationThreshold: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    reserveLiquidationBonus: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    utilizationRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    totalLiquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    totalLiquidityAsCollateral: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    availableLiquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    totalBorrows: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    totalBorrowsStable: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    totalBorrowsVariable: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    liquidityRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    variableBorrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    stableBorrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    averageStableBorrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    liquidityIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    variableBorrowIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    aToken: (ATokenObservableChain & {get: <R extends ATokenRequest>(request: R, defaultValue?: FieldsSelection<AToken, R>) => Observable<FieldsSelection<AToken, R>>}),
    lastUpdateTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    lifetimeDepositorsInterestEarned: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    aTokenTotalSupply: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeLiquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeBorrows: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeBorrowsStable: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeBorrowsVariable: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeRepayments: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeWithdrawals: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeLiquidated: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeFeeOriginated: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeFeeCollected: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeFlashLoans: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeFlashloanDepositorsFee: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeFlashloanProtocolFee: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    userReserves: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UserReserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UserReserve_filter | null)}) => {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>[]) => Observable<FieldsSelection<UserReserve, R>[]>})&({get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>[]) => Observable<FieldsSelection<UserReserve, R>[]>}),
    depositHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null)}) => {get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Observable<FieldsSelection<Deposit, R>[]>})&({get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Observable<FieldsSelection<Deposit, R>[]>}),
    redeemUnderlyingHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RedeemUnderlying_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RedeemUnderlying_filter | null)}) => {get: <R extends RedeemUnderlyingRequest>(request: R, defaultValue?: FieldsSelection<RedeemUnderlying, R>[]) => Observable<FieldsSelection<RedeemUnderlying, R>[]>})&({get: <R extends RedeemUnderlyingRequest>(request: R, defaultValue?: FieldsSelection<RedeemUnderlying, R>[]) => Observable<FieldsSelection<RedeemUnderlying, R>[]>}),
    borrowHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Borrow_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Borrow_filter | null)}) => {get: <R extends BorrowRequest>(request: R, defaultValue?: FieldsSelection<Borrow, R>[]) => Observable<FieldsSelection<Borrow, R>[]>})&({get: <R extends BorrowRequest>(request: R, defaultValue?: FieldsSelection<Borrow, R>[]) => Observable<FieldsSelection<Borrow, R>[]>}),
    usageAsCollateralHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UsageAsCollateral_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UsageAsCollateral_filter | null)}) => {get: <R extends UsageAsCollateralRequest>(request: R, defaultValue?: FieldsSelection<UsageAsCollateral, R>[]) => Observable<FieldsSelection<UsageAsCollateral, R>[]>})&({get: <R extends UsageAsCollateralRequest>(request: R, defaultValue?: FieldsSelection<UsageAsCollateral, R>[]) => Observable<FieldsSelection<UsageAsCollateral, R>[]>}),
    swapHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null)}) => {get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Observable<FieldsSelection<Swap, R>[]>})&({get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Observable<FieldsSelection<Swap, R>[]>}),
    rebalanceStableBorrowRateHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RebalanceStableBorrowRate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RebalanceStableBorrowRate_filter | null)}) => {get: <R extends RebalanceStableBorrowRateRequest>(request: R, defaultValue?: FieldsSelection<RebalanceStableBorrowRate, R>[]) => Observable<FieldsSelection<RebalanceStableBorrowRate, R>[]>})&({get: <R extends RebalanceStableBorrowRateRequest>(request: R, defaultValue?: FieldsSelection<RebalanceStableBorrowRate, R>[]) => Observable<FieldsSelection<RebalanceStableBorrowRate, R>[]>}),
    repayHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Repay_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Repay_filter | null)}) => {get: <R extends RepayRequest>(request: R, defaultValue?: FieldsSelection<Repay, R>[]) => Observable<FieldsSelection<Repay, R>[]>})&({get: <R extends RepayRequest>(request: R, defaultValue?: FieldsSelection<Repay, R>[]) => Observable<FieldsSelection<Repay, R>[]>}),
    flashLoanHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (FlashLoan_orderBy | null),orderDirection?: (OrderDirection | null),where?: (FlashLoan_filter | null)}) => {get: <R extends FlashLoanRequest>(request: R, defaultValue?: FieldsSelection<FlashLoan, R>[]) => Observable<FieldsSelection<FlashLoan, R>[]>})&({get: <R extends FlashLoanRequest>(request: R, defaultValue?: FieldsSelection<FlashLoan, R>[]) => Observable<FieldsSelection<FlashLoan, R>[]>}),
    liquidationCallHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidationCall_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidationCall_filter | null)}) => {get: <R extends LiquidationCallRequest>(request: R, defaultValue?: FieldsSelection<LiquidationCall, R>[]) => Observable<FieldsSelection<LiquidationCall, R>[]>})&({get: <R extends LiquidationCallRequest>(request: R, defaultValue?: FieldsSelection<LiquidationCall, R>[]) => Observable<FieldsSelection<LiquidationCall, R>[]>}),
    originationFeeLiquidationHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (OriginationFeeLiquidation_orderBy | null),orderDirection?: (OrderDirection | null),where?: (OriginationFeeLiquidation_filter | null)}) => {get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: FieldsSelection<OriginationFeeLiquidation, R>[]) => Observable<FieldsSelection<OriginationFeeLiquidation, R>[]>})&({get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: FieldsSelection<OriginationFeeLiquidation, R>[]) => Observable<FieldsSelection<OriginationFeeLiquidation, R>[]>}),
    paramsHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ReserveParamsHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ReserveParamsHistoryItem_filter | null)}) => {get: <R extends ReserveParamsHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ReserveParamsHistoryItem, R>[]) => Observable<FieldsSelection<ReserveParamsHistoryItem, R>[]>})&({get: <R extends ReserveParamsHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ReserveParamsHistoryItem, R>[]) => Observable<FieldsSelection<ReserveParamsHistoryItem, R>[]>}),
    configurationHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ReserveConfigurationHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ReserveConfigurationHistoryItem_filter | null)}) => {get: <R extends ReserveConfigurationHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ReserveConfigurationHistoryItem, R>[]) => Observable<FieldsSelection<ReserveConfigurationHistoryItem, R>[]>})&({get: <R extends ReserveConfigurationHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ReserveConfigurationHistoryItem, R>[]) => Observable<FieldsSelection<ReserveConfigurationHistoryItem, R>[]>}),
    deposits: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null)}) => {get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Observable<FieldsSelection<Deposit, R>[]>})&({get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Observable<FieldsSelection<Deposit, R>[]>})
}

export interface ReserveConfigurationHistoryItemPromiseChain{
    
/**
 * tx hash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    reserve: (ReservePromiseChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Promise<FieldsSelection<Reserve, R>>}),
    usageAsCollateralEnabled: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    borrowingEnabled: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    stableBorrowRateEnabled: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    isActive: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    isFreezed: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    reserveInterestRateStrategy: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    baseLTVasCollateral: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    reserveLiquidationThreshold: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    reserveLiquidationBonus: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface ReserveConfigurationHistoryItemObservableChain{
    
/**
 * tx hash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    reserve: (ReserveObservableChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Observable<FieldsSelection<Reserve, R>>}),
    usageAsCollateralEnabled: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    borrowingEnabled: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    stableBorrowRateEnabled: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    isActive: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    isFreezed: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    reserveInterestRateStrategy: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    baseLTVasCollateral: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    reserveLiquidationThreshold: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    reserveLiquidationBonus: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface ReserveParamsHistoryItemPromiseChain{
    
/**
 * tx hash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    reserve: (ReservePromiseChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Promise<FieldsSelection<Reserve, R>>}),
    variableBorrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    variableBorrowIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    utilizationRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    stableBorrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    averageStableBorrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    liquidityIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    liquidityRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    totalLiquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    totalLiquidityAsCollateral: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    availableLiquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    totalBorrows: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    totalBorrowsVariable: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    totalBorrowsStable: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    priceInEth: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    priceInUsd: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    lifetimeFlashloanDepositorsFee: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeFlashloanProtocolFee: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeOriginationFee: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeDepositorsInterestEarned: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    aTokenTotalSupply: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeRepayments: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeWithdrawals: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeLiquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeBorrows: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>})
}

export interface ReserveParamsHistoryItemObservableChain{
    
/**
 * tx hash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    reserve: (ReserveObservableChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Observable<FieldsSelection<Reserve, R>>}),
    variableBorrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    variableBorrowIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    utilizationRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    stableBorrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    averageStableBorrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    liquidityIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    liquidityRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    totalLiquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    totalLiquidityAsCollateral: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    availableLiquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    totalBorrows: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    totalBorrowsVariable: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    totalBorrowsStable: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    priceInEth: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    priceInUsd: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    lifetimeFlashloanDepositorsFee: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeFlashloanProtocolFee: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeOriginationFee: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeDepositorsInterestEarned: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    aTokenTotalSupply: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeRepayments: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeWithdrawals: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeLiquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeBorrows: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>})
}

export interface SubscriptionPromiseChain{
    protocol: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ProtocolPromiseChain & {get: <R extends ProtocolRequest>(request: R, defaultValue?: (FieldsSelection<Protocol, R> | undefined)) => Promise<(FieldsSelection<Protocol, R> | undefined)>}),
    protocols: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Protocol_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Protocol_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ProtocolRequest>(request: R, defaultValue?: FieldsSelection<Protocol, R>[]) => Promise<FieldsSelection<Protocol, R>[]>})&({get: <R extends ProtocolRequest>(request: R, defaultValue?: FieldsSelection<Protocol, R>[]) => Promise<FieldsSelection<Protocol, R>[]>}),
    contractToPoolMapping: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ContractToPoolMappingPromiseChain & {get: <R extends ContractToPoolMappingRequest>(request: R, defaultValue?: (FieldsSelection<ContractToPoolMapping, R> | undefined)) => Promise<(FieldsSelection<ContractToPoolMapping, R> | undefined)>}),
    contractToPoolMappings: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ContractToPoolMapping_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ContractToPoolMapping_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ContractToPoolMappingRequest>(request: R, defaultValue?: FieldsSelection<ContractToPoolMapping, R>[]) => Promise<FieldsSelection<ContractToPoolMapping, R>[]>})&({get: <R extends ContractToPoolMappingRequest>(request: R, defaultValue?: FieldsSelection<ContractToPoolMapping, R>[]) => Promise<FieldsSelection<ContractToPoolMapping, R>[]>}),
    poolConfigurationHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => PoolConfigurationHistoryItemPromiseChain & {get: <R extends PoolConfigurationHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<PoolConfigurationHistoryItem, R> | undefined)) => Promise<(FieldsSelection<PoolConfigurationHistoryItem, R> | undefined)>}),
    poolConfigurationHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PoolConfigurationHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PoolConfigurationHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends PoolConfigurationHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<PoolConfigurationHistoryItem, R>[]) => Promise<FieldsSelection<PoolConfigurationHistoryItem, R>[]>})&({get: <R extends PoolConfigurationHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<PoolConfigurationHistoryItem, R>[]) => Promise<FieldsSelection<PoolConfigurationHistoryItem, R>[]>}),
    pool: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: (FieldsSelection<Pool, R> | undefined)) => Promise<(FieldsSelection<Pool, R> | undefined)>}),
    pools: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Pool_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Pool_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>[]) => Promise<FieldsSelection<Pool, R>[]>})&({get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>[]) => Promise<FieldsSelection<Pool, R>[]>}),
    priceHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => PriceHistoryItemPromiseChain & {get: <R extends PriceHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<PriceHistoryItem, R> | undefined)) => Promise<(FieldsSelection<PriceHistoryItem, R> | undefined)>}),
    priceHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends PriceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<PriceHistoryItem, R>[]) => Promise<FieldsSelection<PriceHistoryItem, R>[]>})&({get: <R extends PriceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<PriceHistoryItem, R>[]) => Promise<FieldsSelection<PriceHistoryItem, R>[]>}),
    usdEthPriceHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UsdEthPriceHistoryItemPromiseChain & {get: <R extends UsdEthPriceHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<UsdEthPriceHistoryItem, R> | undefined)) => Promise<(FieldsSelection<UsdEthPriceHistoryItem, R> | undefined)>}),
    usdEthPriceHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UsdEthPriceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UsdEthPriceHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UsdEthPriceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<UsdEthPriceHistoryItem, R>[]) => Promise<FieldsSelection<UsdEthPriceHistoryItem, R>[]>})&({get: <R extends UsdEthPriceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<UsdEthPriceHistoryItem, R>[]) => Promise<FieldsSelection<UsdEthPriceHistoryItem, R>[]>}),
    chainlinkAggregator: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ChainlinkAggregatorPromiseChain & {get: <R extends ChainlinkAggregatorRequest>(request: R, defaultValue?: (FieldsSelection<ChainlinkAggregator, R> | undefined)) => Promise<(FieldsSelection<ChainlinkAggregator, R> | undefined)>}),
    chainlinkAggregators: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ChainlinkAggregator_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ChainlinkAggregator_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ChainlinkAggregatorRequest>(request: R, defaultValue?: FieldsSelection<ChainlinkAggregator, R>[]) => Promise<FieldsSelection<ChainlinkAggregator, R>[]>})&({get: <R extends ChainlinkAggregatorRequest>(request: R, defaultValue?: FieldsSelection<ChainlinkAggregator, R>[]) => Promise<FieldsSelection<ChainlinkAggregator, R>[]>}),
    priceOracleAsset: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => PriceOracleAssetPromiseChain & {get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: (FieldsSelection<PriceOracleAsset, R> | undefined)) => Promise<(FieldsSelection<PriceOracleAsset, R> | undefined)>}),
    priceOracleAssets: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceOracleAsset_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceOracleAsset_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>[]) => Promise<FieldsSelection<PriceOracleAsset, R>[]>})&({get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>[]) => Promise<FieldsSelection<PriceOracleAsset, R>[]>}),
    priceOracle: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => PriceOraclePromiseChain & {get: <R extends PriceOracleRequest>(request: R, defaultValue?: (FieldsSelection<PriceOracle, R> | undefined)) => Promise<(FieldsSelection<PriceOracle, R> | undefined)>}),
    priceOracles: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceOracle_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceOracle_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends PriceOracleRequest>(request: R, defaultValue?: FieldsSelection<PriceOracle, R>[]) => Promise<FieldsSelection<PriceOracle, R>[]>})&({get: <R extends PriceOracleRequest>(request: R, defaultValue?: FieldsSelection<PriceOracle, R>[]) => Promise<FieldsSelection<PriceOracle, R>[]>}),
    atoken: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ATokenPromiseChain & {get: <R extends ATokenRequest>(request: R, defaultValue?: (FieldsSelection<AToken, R> | undefined)) => Promise<(FieldsSelection<AToken, R> | undefined)>}),
    atokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (AToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (AToken_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ATokenRequest>(request: R, defaultValue?: FieldsSelection<AToken, R>[]) => Promise<FieldsSelection<AToken, R>[]>})&({get: <R extends ATokenRequest>(request: R, defaultValue?: FieldsSelection<AToken, R>[]) => Promise<FieldsSelection<AToken, R>[]>}),
    referrer: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ReferrerPromiseChain & {get: <R extends ReferrerRequest>(request: R, defaultValue?: (FieldsSelection<Referrer, R> | undefined)) => Promise<(FieldsSelection<Referrer, R> | undefined)>}),
    referrers: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Referrer_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Referrer_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ReferrerRequest>(request: R, defaultValue?: FieldsSelection<Referrer, R>[]) => Promise<FieldsSelection<Referrer, R>[]>})&({get: <R extends ReferrerRequest>(request: R, defaultValue?: FieldsSelection<Referrer, R>[]) => Promise<FieldsSelection<Referrer, R>[]>}),
    deposit: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => DepositPromiseChain & {get: <R extends DepositRequest>(request: R, defaultValue?: (FieldsSelection<Deposit, R> | undefined)) => Promise<(FieldsSelection<Deposit, R> | undefined)>}),
    deposits: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Promise<FieldsSelection<Deposit, R>[]>})&({get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Promise<FieldsSelection<Deposit, R>[]>}),
    redeemUnderlying: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => RedeemUnderlyingPromiseChain & {get: <R extends RedeemUnderlyingRequest>(request: R, defaultValue?: (FieldsSelection<RedeemUnderlying, R> | undefined)) => Promise<(FieldsSelection<RedeemUnderlying, R> | undefined)>}),
    redeemUnderlyings: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RedeemUnderlying_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RedeemUnderlying_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends RedeemUnderlyingRequest>(request: R, defaultValue?: FieldsSelection<RedeemUnderlying, R>[]) => Promise<FieldsSelection<RedeemUnderlying, R>[]>})&({get: <R extends RedeemUnderlyingRequest>(request: R, defaultValue?: FieldsSelection<RedeemUnderlying, R>[]) => Promise<FieldsSelection<RedeemUnderlying, R>[]>}),
    borrow: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => BorrowPromiseChain & {get: <R extends BorrowRequest>(request: R, defaultValue?: (FieldsSelection<Borrow, R> | undefined)) => Promise<(FieldsSelection<Borrow, R> | undefined)>}),
    borrows: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Borrow_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Borrow_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends BorrowRequest>(request: R, defaultValue?: FieldsSelection<Borrow, R>[]) => Promise<FieldsSelection<Borrow, R>[]>})&({get: <R extends BorrowRequest>(request: R, defaultValue?: FieldsSelection<Borrow, R>[]) => Promise<FieldsSelection<Borrow, R>[]>}),
    swap: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => SwapPromiseChain & {get: <R extends SwapRequest>(request: R, defaultValue?: (FieldsSelection<Swap, R> | undefined)) => Promise<(FieldsSelection<Swap, R> | undefined)>}),
    swaps: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Promise<FieldsSelection<Swap, R>[]>})&({get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Promise<FieldsSelection<Swap, R>[]>}),
    usageAsCollateral: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UsageAsCollateralPromiseChain & {get: <R extends UsageAsCollateralRequest>(request: R, defaultValue?: (FieldsSelection<UsageAsCollateral, R> | undefined)) => Promise<(FieldsSelection<UsageAsCollateral, R> | undefined)>}),
    usageAsCollaterals: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UsageAsCollateral_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UsageAsCollateral_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UsageAsCollateralRequest>(request: R, defaultValue?: FieldsSelection<UsageAsCollateral, R>[]) => Promise<FieldsSelection<UsageAsCollateral, R>[]>})&({get: <R extends UsageAsCollateralRequest>(request: R, defaultValue?: FieldsSelection<UsageAsCollateral, R>[]) => Promise<FieldsSelection<UsageAsCollateral, R>[]>}),
    rebalanceStableBorrowRate: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => RebalanceStableBorrowRatePromiseChain & {get: <R extends RebalanceStableBorrowRateRequest>(request: R, defaultValue?: (FieldsSelection<RebalanceStableBorrowRate, R> | undefined)) => Promise<(FieldsSelection<RebalanceStableBorrowRate, R> | undefined)>}),
    rebalanceStableBorrowRates: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RebalanceStableBorrowRate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RebalanceStableBorrowRate_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends RebalanceStableBorrowRateRequest>(request: R, defaultValue?: FieldsSelection<RebalanceStableBorrowRate, R>[]) => Promise<FieldsSelection<RebalanceStableBorrowRate, R>[]>})&({get: <R extends RebalanceStableBorrowRateRequest>(request: R, defaultValue?: FieldsSelection<RebalanceStableBorrowRate, R>[]) => Promise<FieldsSelection<RebalanceStableBorrowRate, R>[]>}),
    repay: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => RepayPromiseChain & {get: <R extends RepayRequest>(request: R, defaultValue?: (FieldsSelection<Repay, R> | undefined)) => Promise<(FieldsSelection<Repay, R> | undefined)>}),
    repays: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Repay_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Repay_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends RepayRequest>(request: R, defaultValue?: FieldsSelection<Repay, R>[]) => Promise<FieldsSelection<Repay, R>[]>})&({get: <R extends RepayRequest>(request: R, defaultValue?: FieldsSelection<Repay, R>[]) => Promise<FieldsSelection<Repay, R>[]>}),
    flashLoan: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => FlashLoanPromiseChain & {get: <R extends FlashLoanRequest>(request: R, defaultValue?: (FieldsSelection<FlashLoan, R> | undefined)) => Promise<(FieldsSelection<FlashLoan, R> | undefined)>}),
    flashLoans: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (FlashLoan_orderBy | null),orderDirection?: (OrderDirection | null),where?: (FlashLoan_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends FlashLoanRequest>(request: R, defaultValue?: FieldsSelection<FlashLoan, R>[]) => Promise<FieldsSelection<FlashLoan, R>[]>})&({get: <R extends FlashLoanRequest>(request: R, defaultValue?: FieldsSelection<FlashLoan, R>[]) => Promise<FieldsSelection<FlashLoan, R>[]>}),
    liquidationCall: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => LiquidationCallPromiseChain & {get: <R extends LiquidationCallRequest>(request: R, defaultValue?: (FieldsSelection<LiquidationCall, R> | undefined)) => Promise<(FieldsSelection<LiquidationCall, R> | undefined)>}),
    liquidationCalls: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidationCall_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidationCall_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends LiquidationCallRequest>(request: R, defaultValue?: FieldsSelection<LiquidationCall, R>[]) => Promise<FieldsSelection<LiquidationCall, R>[]>})&({get: <R extends LiquidationCallRequest>(request: R, defaultValue?: FieldsSelection<LiquidationCall, R>[]) => Promise<FieldsSelection<LiquidationCall, R>[]>}),
    originationFeeLiquidation: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => OriginationFeeLiquidationPromiseChain & {get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: (FieldsSelection<OriginationFeeLiquidation, R> | undefined)) => Promise<(FieldsSelection<OriginationFeeLiquidation, R> | undefined)>}),
    originationFeeLiquidations: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (OriginationFeeLiquidation_orderBy | null),orderDirection?: (OrderDirection | null),where?: (OriginationFeeLiquidation_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: FieldsSelection<OriginationFeeLiquidation, R>[]) => Promise<FieldsSelection<OriginationFeeLiquidation, R>[]>})&({get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: FieldsSelection<OriginationFeeLiquidation, R>[]) => Promise<FieldsSelection<OriginationFeeLiquidation, R>[]>}),
    reserveConfigurationHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ReserveConfigurationHistoryItemPromiseChain & {get: <R extends ReserveConfigurationHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<ReserveConfigurationHistoryItem, R> | undefined)) => Promise<(FieldsSelection<ReserveConfigurationHistoryItem, R> | undefined)>}),
    reserveConfigurationHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ReserveConfigurationHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ReserveConfigurationHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ReserveConfigurationHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ReserveConfigurationHistoryItem, R>[]) => Promise<FieldsSelection<ReserveConfigurationHistoryItem, R>[]>})&({get: <R extends ReserveConfigurationHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ReserveConfigurationHistoryItem, R>[]) => Promise<FieldsSelection<ReserveConfigurationHistoryItem, R>[]>}),
    reserveParamsHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ReserveParamsHistoryItemPromiseChain & {get: <R extends ReserveParamsHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<ReserveParamsHistoryItem, R> | undefined)) => Promise<(FieldsSelection<ReserveParamsHistoryItem, R> | undefined)>}),
    reserveParamsHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ReserveParamsHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ReserveParamsHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ReserveParamsHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ReserveParamsHistoryItem, R>[]) => Promise<FieldsSelection<ReserveParamsHistoryItem, R>[]>})&({get: <R extends ReserveParamsHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ReserveParamsHistoryItem, R>[]) => Promise<FieldsSelection<ReserveParamsHistoryItem, R>[]>}),
    reserve: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ReservePromiseChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: (FieldsSelection<Reserve, R> | undefined)) => Promise<(FieldsSelection<Reserve, R> | undefined)>}),
    reserves: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Reserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Reserve_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>[]) => Promise<FieldsSelection<Reserve, R>[]>})&({get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>[]) => Promise<FieldsSelection<Reserve, R>[]>}),
    atokenBalanceHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ATokenBalanceHistoryItemPromiseChain & {get: <R extends ATokenBalanceHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<ATokenBalanceHistoryItem, R> | undefined)) => Promise<(FieldsSelection<ATokenBalanceHistoryItem, R> | undefined)>}),
    atokenBalanceHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ATokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ATokenBalanceHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ATokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ATokenBalanceHistoryItem, R>[]) => Promise<FieldsSelection<ATokenBalanceHistoryItem, R>[]>})&({get: <R extends ATokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ATokenBalanceHistoryItem, R>[]) => Promise<FieldsSelection<ATokenBalanceHistoryItem, R>[]>}),
    userBorrowHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UserBorrowHistoryItemPromiseChain & {get: <R extends UserBorrowHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<UserBorrowHistoryItem, R> | undefined)) => Promise<(FieldsSelection<UserBorrowHistoryItem, R> | undefined)>}),
    userBorrowHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UserBorrowHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UserBorrowHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UserBorrowHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<UserBorrowHistoryItem, R>[]) => Promise<FieldsSelection<UserBorrowHistoryItem, R>[]>})&({get: <R extends UserBorrowHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<UserBorrowHistoryItem, R>[]) => Promise<FieldsSelection<UserBorrowHistoryItem, R>[]>}),
    userReserve: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UserReservePromiseChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: (FieldsSelection<UserReserve, R> | undefined)) => Promise<(FieldsSelection<UserReserve, R> | undefined)>}),
    userReserves: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UserReserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UserReserve_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>[]) => Promise<FieldsSelection<UserReserve, R>[]>})&({get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>[]) => Promise<FieldsSelection<UserReserve, R>[]>}),
    user: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: (FieldsSelection<User, R> | undefined)) => Promise<(FieldsSelection<User, R> | undefined)>}),
    users: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (User_orderBy | null),orderDirection?: (OrderDirection | null),where?: (User_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>[]) => Promise<FieldsSelection<User, R>[]>})&({get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>[]) => Promise<FieldsSelection<User, R>[]>}),
    userTransaction: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UserTransactionPromiseChain & {get: <R extends UserTransactionRequest>(request: R, defaultValue?: (FieldsSelection<UserTransaction, R> | undefined)) => Promise<(FieldsSelection<UserTransaction, R> | undefined)>}),
    userTransactions: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UserTransaction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UserTransaction_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UserTransactionRequest>(request: R, defaultValue?: FieldsSelection<UserTransaction, R>[]) => Promise<FieldsSelection<UserTransaction, R>[]>})&({get: <R extends UserTransactionRequest>(request: R, defaultValue?: FieldsSelection<UserTransaction, R>[]) => Promise<FieldsSelection<UserTransaction, R>[]>}),
    
/** Access to subgraph metadata */
_meta: ((args?: {block?: (Block_height | null)}) => _Meta_PromiseChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Promise<(FieldsSelection<_Meta_, R> | undefined)>})&(_Meta_PromiseChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Promise<(FieldsSelection<_Meta_, R> | undefined)>})
}

export interface SubscriptionObservableChain{
    protocol: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ProtocolObservableChain & {get: <R extends ProtocolRequest>(request: R, defaultValue?: (FieldsSelection<Protocol, R> | undefined)) => Observable<(FieldsSelection<Protocol, R> | undefined)>}),
    protocols: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Protocol_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Protocol_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ProtocolRequest>(request: R, defaultValue?: FieldsSelection<Protocol, R>[]) => Observable<FieldsSelection<Protocol, R>[]>})&({get: <R extends ProtocolRequest>(request: R, defaultValue?: FieldsSelection<Protocol, R>[]) => Observable<FieldsSelection<Protocol, R>[]>}),
    contractToPoolMapping: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ContractToPoolMappingObservableChain & {get: <R extends ContractToPoolMappingRequest>(request: R, defaultValue?: (FieldsSelection<ContractToPoolMapping, R> | undefined)) => Observable<(FieldsSelection<ContractToPoolMapping, R> | undefined)>}),
    contractToPoolMappings: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ContractToPoolMapping_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ContractToPoolMapping_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ContractToPoolMappingRequest>(request: R, defaultValue?: FieldsSelection<ContractToPoolMapping, R>[]) => Observable<FieldsSelection<ContractToPoolMapping, R>[]>})&({get: <R extends ContractToPoolMappingRequest>(request: R, defaultValue?: FieldsSelection<ContractToPoolMapping, R>[]) => Observable<FieldsSelection<ContractToPoolMapping, R>[]>}),
    poolConfigurationHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => PoolConfigurationHistoryItemObservableChain & {get: <R extends PoolConfigurationHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<PoolConfigurationHistoryItem, R> | undefined)) => Observable<(FieldsSelection<PoolConfigurationHistoryItem, R> | undefined)>}),
    poolConfigurationHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PoolConfigurationHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PoolConfigurationHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends PoolConfigurationHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<PoolConfigurationHistoryItem, R>[]) => Observable<FieldsSelection<PoolConfigurationHistoryItem, R>[]>})&({get: <R extends PoolConfigurationHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<PoolConfigurationHistoryItem, R>[]) => Observable<FieldsSelection<PoolConfigurationHistoryItem, R>[]>}),
    pool: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: (FieldsSelection<Pool, R> | undefined)) => Observable<(FieldsSelection<Pool, R> | undefined)>}),
    pools: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Pool_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Pool_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>[]) => Observable<FieldsSelection<Pool, R>[]>})&({get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>[]) => Observable<FieldsSelection<Pool, R>[]>}),
    priceHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => PriceHistoryItemObservableChain & {get: <R extends PriceHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<PriceHistoryItem, R> | undefined)) => Observable<(FieldsSelection<PriceHistoryItem, R> | undefined)>}),
    priceHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends PriceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<PriceHistoryItem, R>[]) => Observable<FieldsSelection<PriceHistoryItem, R>[]>})&({get: <R extends PriceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<PriceHistoryItem, R>[]) => Observable<FieldsSelection<PriceHistoryItem, R>[]>}),
    usdEthPriceHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UsdEthPriceHistoryItemObservableChain & {get: <R extends UsdEthPriceHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<UsdEthPriceHistoryItem, R> | undefined)) => Observable<(FieldsSelection<UsdEthPriceHistoryItem, R> | undefined)>}),
    usdEthPriceHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UsdEthPriceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UsdEthPriceHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UsdEthPriceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<UsdEthPriceHistoryItem, R>[]) => Observable<FieldsSelection<UsdEthPriceHistoryItem, R>[]>})&({get: <R extends UsdEthPriceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<UsdEthPriceHistoryItem, R>[]) => Observable<FieldsSelection<UsdEthPriceHistoryItem, R>[]>}),
    chainlinkAggregator: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ChainlinkAggregatorObservableChain & {get: <R extends ChainlinkAggregatorRequest>(request: R, defaultValue?: (FieldsSelection<ChainlinkAggregator, R> | undefined)) => Observable<(FieldsSelection<ChainlinkAggregator, R> | undefined)>}),
    chainlinkAggregators: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ChainlinkAggregator_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ChainlinkAggregator_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ChainlinkAggregatorRequest>(request: R, defaultValue?: FieldsSelection<ChainlinkAggregator, R>[]) => Observable<FieldsSelection<ChainlinkAggregator, R>[]>})&({get: <R extends ChainlinkAggregatorRequest>(request: R, defaultValue?: FieldsSelection<ChainlinkAggregator, R>[]) => Observable<FieldsSelection<ChainlinkAggregator, R>[]>}),
    priceOracleAsset: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => PriceOracleAssetObservableChain & {get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: (FieldsSelection<PriceOracleAsset, R> | undefined)) => Observable<(FieldsSelection<PriceOracleAsset, R> | undefined)>}),
    priceOracleAssets: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceOracleAsset_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceOracleAsset_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>[]) => Observable<FieldsSelection<PriceOracleAsset, R>[]>})&({get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>[]) => Observable<FieldsSelection<PriceOracleAsset, R>[]>}),
    priceOracle: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => PriceOracleObservableChain & {get: <R extends PriceOracleRequest>(request: R, defaultValue?: (FieldsSelection<PriceOracle, R> | undefined)) => Observable<(FieldsSelection<PriceOracle, R> | undefined)>}),
    priceOracles: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceOracle_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceOracle_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends PriceOracleRequest>(request: R, defaultValue?: FieldsSelection<PriceOracle, R>[]) => Observable<FieldsSelection<PriceOracle, R>[]>})&({get: <R extends PriceOracleRequest>(request: R, defaultValue?: FieldsSelection<PriceOracle, R>[]) => Observable<FieldsSelection<PriceOracle, R>[]>}),
    atoken: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ATokenObservableChain & {get: <R extends ATokenRequest>(request: R, defaultValue?: (FieldsSelection<AToken, R> | undefined)) => Observable<(FieldsSelection<AToken, R> | undefined)>}),
    atokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (AToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (AToken_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ATokenRequest>(request: R, defaultValue?: FieldsSelection<AToken, R>[]) => Observable<FieldsSelection<AToken, R>[]>})&({get: <R extends ATokenRequest>(request: R, defaultValue?: FieldsSelection<AToken, R>[]) => Observable<FieldsSelection<AToken, R>[]>}),
    referrer: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ReferrerObservableChain & {get: <R extends ReferrerRequest>(request: R, defaultValue?: (FieldsSelection<Referrer, R> | undefined)) => Observable<(FieldsSelection<Referrer, R> | undefined)>}),
    referrers: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Referrer_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Referrer_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ReferrerRequest>(request: R, defaultValue?: FieldsSelection<Referrer, R>[]) => Observable<FieldsSelection<Referrer, R>[]>})&({get: <R extends ReferrerRequest>(request: R, defaultValue?: FieldsSelection<Referrer, R>[]) => Observable<FieldsSelection<Referrer, R>[]>}),
    deposit: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => DepositObservableChain & {get: <R extends DepositRequest>(request: R, defaultValue?: (FieldsSelection<Deposit, R> | undefined)) => Observable<(FieldsSelection<Deposit, R> | undefined)>}),
    deposits: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Observable<FieldsSelection<Deposit, R>[]>})&({get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Observable<FieldsSelection<Deposit, R>[]>}),
    redeemUnderlying: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => RedeemUnderlyingObservableChain & {get: <R extends RedeemUnderlyingRequest>(request: R, defaultValue?: (FieldsSelection<RedeemUnderlying, R> | undefined)) => Observable<(FieldsSelection<RedeemUnderlying, R> | undefined)>}),
    redeemUnderlyings: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RedeemUnderlying_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RedeemUnderlying_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends RedeemUnderlyingRequest>(request: R, defaultValue?: FieldsSelection<RedeemUnderlying, R>[]) => Observable<FieldsSelection<RedeemUnderlying, R>[]>})&({get: <R extends RedeemUnderlyingRequest>(request: R, defaultValue?: FieldsSelection<RedeemUnderlying, R>[]) => Observable<FieldsSelection<RedeemUnderlying, R>[]>}),
    borrow: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => BorrowObservableChain & {get: <R extends BorrowRequest>(request: R, defaultValue?: (FieldsSelection<Borrow, R> | undefined)) => Observable<(FieldsSelection<Borrow, R> | undefined)>}),
    borrows: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Borrow_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Borrow_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends BorrowRequest>(request: R, defaultValue?: FieldsSelection<Borrow, R>[]) => Observable<FieldsSelection<Borrow, R>[]>})&({get: <R extends BorrowRequest>(request: R, defaultValue?: FieldsSelection<Borrow, R>[]) => Observable<FieldsSelection<Borrow, R>[]>}),
    swap: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => SwapObservableChain & {get: <R extends SwapRequest>(request: R, defaultValue?: (FieldsSelection<Swap, R> | undefined)) => Observable<(FieldsSelection<Swap, R> | undefined)>}),
    swaps: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Observable<FieldsSelection<Swap, R>[]>})&({get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Observable<FieldsSelection<Swap, R>[]>}),
    usageAsCollateral: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UsageAsCollateralObservableChain & {get: <R extends UsageAsCollateralRequest>(request: R, defaultValue?: (FieldsSelection<UsageAsCollateral, R> | undefined)) => Observable<(FieldsSelection<UsageAsCollateral, R> | undefined)>}),
    usageAsCollaterals: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UsageAsCollateral_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UsageAsCollateral_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UsageAsCollateralRequest>(request: R, defaultValue?: FieldsSelection<UsageAsCollateral, R>[]) => Observable<FieldsSelection<UsageAsCollateral, R>[]>})&({get: <R extends UsageAsCollateralRequest>(request: R, defaultValue?: FieldsSelection<UsageAsCollateral, R>[]) => Observable<FieldsSelection<UsageAsCollateral, R>[]>}),
    rebalanceStableBorrowRate: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => RebalanceStableBorrowRateObservableChain & {get: <R extends RebalanceStableBorrowRateRequest>(request: R, defaultValue?: (FieldsSelection<RebalanceStableBorrowRate, R> | undefined)) => Observable<(FieldsSelection<RebalanceStableBorrowRate, R> | undefined)>}),
    rebalanceStableBorrowRates: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RebalanceStableBorrowRate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RebalanceStableBorrowRate_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends RebalanceStableBorrowRateRequest>(request: R, defaultValue?: FieldsSelection<RebalanceStableBorrowRate, R>[]) => Observable<FieldsSelection<RebalanceStableBorrowRate, R>[]>})&({get: <R extends RebalanceStableBorrowRateRequest>(request: R, defaultValue?: FieldsSelection<RebalanceStableBorrowRate, R>[]) => Observable<FieldsSelection<RebalanceStableBorrowRate, R>[]>}),
    repay: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => RepayObservableChain & {get: <R extends RepayRequest>(request: R, defaultValue?: (FieldsSelection<Repay, R> | undefined)) => Observable<(FieldsSelection<Repay, R> | undefined)>}),
    repays: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Repay_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Repay_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends RepayRequest>(request: R, defaultValue?: FieldsSelection<Repay, R>[]) => Observable<FieldsSelection<Repay, R>[]>})&({get: <R extends RepayRequest>(request: R, defaultValue?: FieldsSelection<Repay, R>[]) => Observable<FieldsSelection<Repay, R>[]>}),
    flashLoan: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => FlashLoanObservableChain & {get: <R extends FlashLoanRequest>(request: R, defaultValue?: (FieldsSelection<FlashLoan, R> | undefined)) => Observable<(FieldsSelection<FlashLoan, R> | undefined)>}),
    flashLoans: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (FlashLoan_orderBy | null),orderDirection?: (OrderDirection | null),where?: (FlashLoan_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends FlashLoanRequest>(request: R, defaultValue?: FieldsSelection<FlashLoan, R>[]) => Observable<FieldsSelection<FlashLoan, R>[]>})&({get: <R extends FlashLoanRequest>(request: R, defaultValue?: FieldsSelection<FlashLoan, R>[]) => Observable<FieldsSelection<FlashLoan, R>[]>}),
    liquidationCall: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => LiquidationCallObservableChain & {get: <R extends LiquidationCallRequest>(request: R, defaultValue?: (FieldsSelection<LiquidationCall, R> | undefined)) => Observable<(FieldsSelection<LiquidationCall, R> | undefined)>}),
    liquidationCalls: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidationCall_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidationCall_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends LiquidationCallRequest>(request: R, defaultValue?: FieldsSelection<LiquidationCall, R>[]) => Observable<FieldsSelection<LiquidationCall, R>[]>})&({get: <R extends LiquidationCallRequest>(request: R, defaultValue?: FieldsSelection<LiquidationCall, R>[]) => Observable<FieldsSelection<LiquidationCall, R>[]>}),
    originationFeeLiquidation: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => OriginationFeeLiquidationObservableChain & {get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: (FieldsSelection<OriginationFeeLiquidation, R> | undefined)) => Observable<(FieldsSelection<OriginationFeeLiquidation, R> | undefined)>}),
    originationFeeLiquidations: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (OriginationFeeLiquidation_orderBy | null),orderDirection?: (OrderDirection | null),where?: (OriginationFeeLiquidation_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: FieldsSelection<OriginationFeeLiquidation, R>[]) => Observable<FieldsSelection<OriginationFeeLiquidation, R>[]>})&({get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: FieldsSelection<OriginationFeeLiquidation, R>[]) => Observable<FieldsSelection<OriginationFeeLiquidation, R>[]>}),
    reserveConfigurationHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ReserveConfigurationHistoryItemObservableChain & {get: <R extends ReserveConfigurationHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<ReserveConfigurationHistoryItem, R> | undefined)) => Observable<(FieldsSelection<ReserveConfigurationHistoryItem, R> | undefined)>}),
    reserveConfigurationHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ReserveConfigurationHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ReserveConfigurationHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ReserveConfigurationHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ReserveConfigurationHistoryItem, R>[]) => Observable<FieldsSelection<ReserveConfigurationHistoryItem, R>[]>})&({get: <R extends ReserveConfigurationHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ReserveConfigurationHistoryItem, R>[]) => Observable<FieldsSelection<ReserveConfigurationHistoryItem, R>[]>}),
    reserveParamsHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ReserveParamsHistoryItemObservableChain & {get: <R extends ReserveParamsHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<ReserveParamsHistoryItem, R> | undefined)) => Observable<(FieldsSelection<ReserveParamsHistoryItem, R> | undefined)>}),
    reserveParamsHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ReserveParamsHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ReserveParamsHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ReserveParamsHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ReserveParamsHistoryItem, R>[]) => Observable<FieldsSelection<ReserveParamsHistoryItem, R>[]>})&({get: <R extends ReserveParamsHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ReserveParamsHistoryItem, R>[]) => Observable<FieldsSelection<ReserveParamsHistoryItem, R>[]>}),
    reserve: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ReserveObservableChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: (FieldsSelection<Reserve, R> | undefined)) => Observable<(FieldsSelection<Reserve, R> | undefined)>}),
    reserves: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Reserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Reserve_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>[]) => Observable<FieldsSelection<Reserve, R>[]>})&({get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>[]) => Observable<FieldsSelection<Reserve, R>[]>}),
    atokenBalanceHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ATokenBalanceHistoryItemObservableChain & {get: <R extends ATokenBalanceHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<ATokenBalanceHistoryItem, R> | undefined)) => Observable<(FieldsSelection<ATokenBalanceHistoryItem, R> | undefined)>}),
    atokenBalanceHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ATokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ATokenBalanceHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ATokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ATokenBalanceHistoryItem, R>[]) => Observable<FieldsSelection<ATokenBalanceHistoryItem, R>[]>})&({get: <R extends ATokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ATokenBalanceHistoryItem, R>[]) => Observable<FieldsSelection<ATokenBalanceHistoryItem, R>[]>}),
    userBorrowHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UserBorrowHistoryItemObservableChain & {get: <R extends UserBorrowHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<UserBorrowHistoryItem, R> | undefined)) => Observable<(FieldsSelection<UserBorrowHistoryItem, R> | undefined)>}),
    userBorrowHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UserBorrowHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UserBorrowHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UserBorrowHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<UserBorrowHistoryItem, R>[]) => Observable<FieldsSelection<UserBorrowHistoryItem, R>[]>})&({get: <R extends UserBorrowHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<UserBorrowHistoryItem, R>[]) => Observable<FieldsSelection<UserBorrowHistoryItem, R>[]>}),
    userReserve: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UserReserveObservableChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: (FieldsSelection<UserReserve, R> | undefined)) => Observable<(FieldsSelection<UserReserve, R> | undefined)>}),
    userReserves: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UserReserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UserReserve_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>[]) => Observable<FieldsSelection<UserReserve, R>[]>})&({get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>[]) => Observable<FieldsSelection<UserReserve, R>[]>}),
    user: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: (FieldsSelection<User, R> | undefined)) => Observable<(FieldsSelection<User, R> | undefined)>}),
    users: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (User_orderBy | null),orderDirection?: (OrderDirection | null),where?: (User_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>[]) => Observable<FieldsSelection<User, R>[]>})&({get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>[]) => Observable<FieldsSelection<User, R>[]>}),
    userTransaction: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UserTransactionObservableChain & {get: <R extends UserTransactionRequest>(request: R, defaultValue?: (FieldsSelection<UserTransaction, R> | undefined)) => Observable<(FieldsSelection<UserTransaction, R> | undefined)>}),
    userTransactions: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UserTransaction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UserTransaction_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UserTransactionRequest>(request: R, defaultValue?: FieldsSelection<UserTransaction, R>[]) => Observable<FieldsSelection<UserTransaction, R>[]>})&({get: <R extends UserTransactionRequest>(request: R, defaultValue?: FieldsSelection<UserTransaction, R>[]) => Observable<FieldsSelection<UserTransaction, R>[]>}),
    
/** Access to subgraph metadata */
_meta: ((args?: {block?: (Block_height | null)}) => _Meta_ObservableChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Observable<(FieldsSelection<_Meta_, R> | undefined)>})&(_Meta_ObservableChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Observable<(FieldsSelection<_Meta_, R> | undefined)>})
}

export interface SwapPromiseChain{
    
/**
 * tx hash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>}),
    user: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Promise<FieldsSelection<User, R>>}),
    reserve: (ReservePromiseChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Promise<FieldsSelection<Reserve, R>>}),
    userReserve: (UserReservePromiseChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Promise<FieldsSelection<UserReserve, R>>}),
    borrowRateFrom: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    borrowRateModeFrom: ({get: (request?: boolean|number, defaultValue?: BorrowRateMode) => Promise<BorrowRateMode>}),
    borrowRateTo: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    borrowRateModeTo: ({get: (request?: boolean|number, defaultValue?: BorrowRateMode) => Promise<BorrowRateMode>}),
    accruedBorrowInterest: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface SwapObservableChain{
    
/**
 * tx hash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    user: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Observable<FieldsSelection<User, R>>}),
    reserve: (ReserveObservableChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Observable<FieldsSelection<Reserve, R>>}),
    userReserve: (UserReserveObservableChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Observable<FieldsSelection<UserReserve, R>>}),
    borrowRateFrom: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    borrowRateModeFrom: ({get: (request?: boolean|number, defaultValue?: BorrowRateMode) => Observable<BorrowRateMode>}),
    borrowRateTo: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    borrowRateModeTo: ({get: (request?: boolean|number, defaultValue?: BorrowRateMode) => Observable<BorrowRateMode>}),
    accruedBorrowInterest: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface UsageAsCollateralPromiseChain{
    
/**
 * tx hash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>}),
    user: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Promise<FieldsSelection<User, R>>}),
    reserve: (ReservePromiseChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Promise<FieldsSelection<Reserve, R>>}),
    userReserve: (UserReservePromiseChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Promise<FieldsSelection<UserReserve, R>>}),
    fromState: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    toState: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface UsageAsCollateralObservableChain{
    
/**
 * tx hash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    user: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Observable<FieldsSelection<User, R>>}),
    reserve: (ReserveObservableChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Observable<FieldsSelection<Reserve, R>>}),
    userReserve: (UserReserveObservableChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Observable<FieldsSelection<UserReserve, R>>}),
    fromState: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    toState: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface UsdEthPriceHistoryItemPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    oracle: (PriceOraclePromiseChain & {get: <R extends PriceOracleRequest>(request: R, defaultValue?: FieldsSelection<PriceOracle, R>) => Promise<FieldsSelection<PriceOracle, R>>}),
    price: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface UsdEthPriceHistoryItemObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    oracle: (PriceOracleObservableChain & {get: <R extends PriceOracleRequest>(request: R, defaultValue?: FieldsSelection<PriceOracle, R>) => Observable<FieldsSelection<PriceOracle, R>>}),
    price: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface UserPromiseChain{
    
/**
 * user address
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    borrowedReservesCount: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    reserves: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UserReserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UserReserve_filter | null)}) => {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>[]) => Promise<FieldsSelection<UserReserve, R>[]>})&({get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>[]) => Promise<FieldsSelection<UserReserve, R>[]>}),
    depositHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null)}) => {get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Promise<FieldsSelection<Deposit, R>[]>})&({get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Promise<FieldsSelection<Deposit, R>[]>}),
    redeemUnderlyingHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RedeemUnderlying_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RedeemUnderlying_filter | null)}) => {get: <R extends RedeemUnderlyingRequest>(request: R, defaultValue?: FieldsSelection<RedeemUnderlying, R>[]) => Promise<FieldsSelection<RedeemUnderlying, R>[]>})&({get: <R extends RedeemUnderlyingRequest>(request: R, defaultValue?: FieldsSelection<RedeemUnderlying, R>[]) => Promise<FieldsSelection<RedeemUnderlying, R>[]>}),
    usageAsCollateralHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UsageAsCollateral_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UsageAsCollateral_filter | null)}) => {get: <R extends UsageAsCollateralRequest>(request: R, defaultValue?: FieldsSelection<UsageAsCollateral, R>[]) => Promise<FieldsSelection<UsageAsCollateral, R>[]>})&({get: <R extends UsageAsCollateralRequest>(request: R, defaultValue?: FieldsSelection<UsageAsCollateral, R>[]) => Promise<FieldsSelection<UsageAsCollateral, R>[]>}),
    borrowHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Borrow_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Borrow_filter | null)}) => {get: <R extends BorrowRequest>(request: R, defaultValue?: FieldsSelection<Borrow, R>[]) => Promise<FieldsSelection<Borrow, R>[]>})&({get: <R extends BorrowRequest>(request: R, defaultValue?: FieldsSelection<Borrow, R>[]) => Promise<FieldsSelection<Borrow, R>[]>}),
    swapHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null)}) => {get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Promise<FieldsSelection<Swap, R>[]>})&({get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Promise<FieldsSelection<Swap, R>[]>}),
    rebalanceStableBorrowRateHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RebalanceStableBorrowRate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RebalanceStableBorrowRate_filter | null)}) => {get: <R extends RebalanceStableBorrowRateRequest>(request: R, defaultValue?: FieldsSelection<RebalanceStableBorrowRate, R>[]) => Promise<FieldsSelection<RebalanceStableBorrowRate, R>[]>})&({get: <R extends RebalanceStableBorrowRateRequest>(request: R, defaultValue?: FieldsSelection<RebalanceStableBorrowRate, R>[]) => Promise<FieldsSelection<RebalanceStableBorrowRate, R>[]>}),
    repayHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Repay_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Repay_filter | null)}) => {get: <R extends RepayRequest>(request: R, defaultValue?: FieldsSelection<Repay, R>[]) => Promise<FieldsSelection<Repay, R>[]>})&({get: <R extends RepayRequest>(request: R, defaultValue?: FieldsSelection<Repay, R>[]) => Promise<FieldsSelection<Repay, R>[]>}),
    liquidationCallHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidationCall_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidationCall_filter | null)}) => {get: <R extends LiquidationCallRequest>(request: R, defaultValue?: FieldsSelection<LiquidationCall, R>[]) => Promise<FieldsSelection<LiquidationCall, R>[]>})&({get: <R extends LiquidationCallRequest>(request: R, defaultValue?: FieldsSelection<LiquidationCall, R>[]) => Promise<FieldsSelection<LiquidationCall, R>[]>}),
    originationFeeLiquidationHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (OriginationFeeLiquidation_orderBy | null),orderDirection?: (OrderDirection | null),where?: (OriginationFeeLiquidation_filter | null)}) => {get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: FieldsSelection<OriginationFeeLiquidation, R>[]) => Promise<FieldsSelection<OriginationFeeLiquidation, R>[]>})&({get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: FieldsSelection<OriginationFeeLiquidation, R>[]) => Promise<FieldsSelection<OriginationFeeLiquidation, R>[]>})
}

export interface UserObservableChain{
    
/**
 * user address
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    borrowedReservesCount: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    reserves: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UserReserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UserReserve_filter | null)}) => {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>[]) => Observable<FieldsSelection<UserReserve, R>[]>})&({get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>[]) => Observable<FieldsSelection<UserReserve, R>[]>}),
    depositHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null)}) => {get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Observable<FieldsSelection<Deposit, R>[]>})&({get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Observable<FieldsSelection<Deposit, R>[]>}),
    redeemUnderlyingHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RedeemUnderlying_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RedeemUnderlying_filter | null)}) => {get: <R extends RedeemUnderlyingRequest>(request: R, defaultValue?: FieldsSelection<RedeemUnderlying, R>[]) => Observable<FieldsSelection<RedeemUnderlying, R>[]>})&({get: <R extends RedeemUnderlyingRequest>(request: R, defaultValue?: FieldsSelection<RedeemUnderlying, R>[]) => Observable<FieldsSelection<RedeemUnderlying, R>[]>}),
    usageAsCollateralHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UsageAsCollateral_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UsageAsCollateral_filter | null)}) => {get: <R extends UsageAsCollateralRequest>(request: R, defaultValue?: FieldsSelection<UsageAsCollateral, R>[]) => Observable<FieldsSelection<UsageAsCollateral, R>[]>})&({get: <R extends UsageAsCollateralRequest>(request: R, defaultValue?: FieldsSelection<UsageAsCollateral, R>[]) => Observable<FieldsSelection<UsageAsCollateral, R>[]>}),
    borrowHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Borrow_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Borrow_filter | null)}) => {get: <R extends BorrowRequest>(request: R, defaultValue?: FieldsSelection<Borrow, R>[]) => Observable<FieldsSelection<Borrow, R>[]>})&({get: <R extends BorrowRequest>(request: R, defaultValue?: FieldsSelection<Borrow, R>[]) => Observable<FieldsSelection<Borrow, R>[]>}),
    swapHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null)}) => {get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Observable<FieldsSelection<Swap, R>[]>})&({get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Observable<FieldsSelection<Swap, R>[]>}),
    rebalanceStableBorrowRateHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RebalanceStableBorrowRate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RebalanceStableBorrowRate_filter | null)}) => {get: <R extends RebalanceStableBorrowRateRequest>(request: R, defaultValue?: FieldsSelection<RebalanceStableBorrowRate, R>[]) => Observable<FieldsSelection<RebalanceStableBorrowRate, R>[]>})&({get: <R extends RebalanceStableBorrowRateRequest>(request: R, defaultValue?: FieldsSelection<RebalanceStableBorrowRate, R>[]) => Observable<FieldsSelection<RebalanceStableBorrowRate, R>[]>}),
    repayHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Repay_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Repay_filter | null)}) => {get: <R extends RepayRequest>(request: R, defaultValue?: FieldsSelection<Repay, R>[]) => Observable<FieldsSelection<Repay, R>[]>})&({get: <R extends RepayRequest>(request: R, defaultValue?: FieldsSelection<Repay, R>[]) => Observable<FieldsSelection<Repay, R>[]>}),
    liquidationCallHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidationCall_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidationCall_filter | null)}) => {get: <R extends LiquidationCallRequest>(request: R, defaultValue?: FieldsSelection<LiquidationCall, R>[]) => Observable<FieldsSelection<LiquidationCall, R>[]>})&({get: <R extends LiquidationCallRequest>(request: R, defaultValue?: FieldsSelection<LiquidationCall, R>[]) => Observable<FieldsSelection<LiquidationCall, R>[]>}),
    originationFeeLiquidationHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (OriginationFeeLiquidation_orderBy | null),orderDirection?: (OrderDirection | null),where?: (OriginationFeeLiquidation_filter | null)}) => {get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: FieldsSelection<OriginationFeeLiquidation, R>[]) => Observable<FieldsSelection<OriginationFeeLiquidation, R>[]>})&({get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: FieldsSelection<OriginationFeeLiquidation, R>[]) => Observable<FieldsSelection<OriginationFeeLiquidation, R>[]>})
}

export interface UserBorrowHistoryItemPromiseChain{
    
/**
 * userReserve + txHash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    userReserve: (UserReservePromiseChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Promise<FieldsSelection<UserReserve, R>>}),
    totalBorrows: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    borrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    borrowRateMode: ({get: (request?: boolean|number, defaultValue?: BorrowRateMode) => Promise<BorrowRateMode>}),
    originationFee: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface UserBorrowHistoryItemObservableChain{
    
/**
 * userReserve + txHash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    userReserve: (UserReserveObservableChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Observable<FieldsSelection<UserReserve, R>>}),
    totalBorrows: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    borrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    borrowRateMode: ({get: (request?: boolean|number, defaultValue?: BorrowRateMode) => Observable<BorrowRateMode>}),
    originationFee: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface UserReservePromiseChain{
    
/**
 * user address + reserve address
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>}),
    reserve: (ReservePromiseChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Promise<FieldsSelection<Reserve, R>>}),
    user: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Promise<FieldsSelection<User, R>>}),
    usageAsCollateralEnabledOnUser: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    userBalanceIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    principalATokenBalance: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    redirectedBalance: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    interestRedirectionAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    interestRedirectionAllowance: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    principalBorrows: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    borrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    borrowRateMode: ({get: (request?: boolean|number, defaultValue?: BorrowRateMode) => Promise<BorrowRateMode>}),
    variableBorrowIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/**
 * Amount in currency units included as fee
 * 
 */
originationFee: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lastUpdateTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    aTokenBalanceHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ATokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ATokenBalanceHistoryItem_filter | null)}) => {get: <R extends ATokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ATokenBalanceHistoryItem, R>[]) => Promise<FieldsSelection<ATokenBalanceHistoryItem, R>[]>})&({get: <R extends ATokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ATokenBalanceHistoryItem, R>[]) => Promise<FieldsSelection<ATokenBalanceHistoryItem, R>[]>}),
    borrowStateHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UserBorrowHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UserBorrowHistoryItem_filter | null)}) => {get: <R extends UserBorrowHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<UserBorrowHistoryItem, R>[]) => Promise<FieldsSelection<UserBorrowHistoryItem, R>[]>})&({get: <R extends UserBorrowHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<UserBorrowHistoryItem, R>[]) => Promise<FieldsSelection<UserBorrowHistoryItem, R>[]>}),
    usageAsCollateralHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UsageAsCollateral_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UsageAsCollateral_filter | null)}) => {get: <R extends UsageAsCollateralRequest>(request: R, defaultValue?: FieldsSelection<UsageAsCollateral, R>[]) => Promise<FieldsSelection<UsageAsCollateral, R>[]>})&({get: <R extends UsageAsCollateralRequest>(request: R, defaultValue?: FieldsSelection<UsageAsCollateral, R>[]) => Promise<FieldsSelection<UsageAsCollateral, R>[]>}),
    depositHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null)}) => {get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Promise<FieldsSelection<Deposit, R>[]>})&({get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Promise<FieldsSelection<Deposit, R>[]>}),
    redeemUnderlyingHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RedeemUnderlying_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RedeemUnderlying_filter | null)}) => {get: <R extends RedeemUnderlyingRequest>(request: R, defaultValue?: FieldsSelection<RedeemUnderlying, R>[]) => Promise<FieldsSelection<RedeemUnderlying, R>[]>})&({get: <R extends RedeemUnderlyingRequest>(request: R, defaultValue?: FieldsSelection<RedeemUnderlying, R>[]) => Promise<FieldsSelection<RedeemUnderlying, R>[]>}),
    borrowHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Borrow_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Borrow_filter | null)}) => {get: <R extends BorrowRequest>(request: R, defaultValue?: FieldsSelection<Borrow, R>[]) => Promise<FieldsSelection<Borrow, R>[]>})&({get: <R extends BorrowRequest>(request: R, defaultValue?: FieldsSelection<Borrow, R>[]) => Promise<FieldsSelection<Borrow, R>[]>}),
    swapHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null)}) => {get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Promise<FieldsSelection<Swap, R>[]>})&({get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Promise<FieldsSelection<Swap, R>[]>}),
    rebalanceStableBorrowRateHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RebalanceStableBorrowRate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RebalanceStableBorrowRate_filter | null)}) => {get: <R extends RebalanceStableBorrowRateRequest>(request: R, defaultValue?: FieldsSelection<RebalanceStableBorrowRate, R>[]) => Promise<FieldsSelection<RebalanceStableBorrowRate, R>[]>})&({get: <R extends RebalanceStableBorrowRateRequest>(request: R, defaultValue?: FieldsSelection<RebalanceStableBorrowRate, R>[]) => Promise<FieldsSelection<RebalanceStableBorrowRate, R>[]>}),
    repayHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Repay_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Repay_filter | null)}) => {get: <R extends RepayRequest>(request: R, defaultValue?: FieldsSelection<Repay, R>[]) => Promise<FieldsSelection<Repay, R>[]>})&({get: <R extends RepayRequest>(request: R, defaultValue?: FieldsSelection<Repay, R>[]) => Promise<FieldsSelection<Repay, R>[]>}),
    liquidationCallHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidationCall_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidationCall_filter | null)}) => {get: <R extends LiquidationCallRequest>(request: R, defaultValue?: FieldsSelection<LiquidationCall, R>[]) => Promise<FieldsSelection<LiquidationCall, R>[]>})&({get: <R extends LiquidationCallRequest>(request: R, defaultValue?: FieldsSelection<LiquidationCall, R>[]) => Promise<FieldsSelection<LiquidationCall, R>[]>}),
    originationFeeLiquidationHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (OriginationFeeLiquidation_orderBy | null),orderDirection?: (OrderDirection | null),where?: (OriginationFeeLiquidation_filter | null)}) => {get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: FieldsSelection<OriginationFeeLiquidation, R>[]) => Promise<FieldsSelection<OriginationFeeLiquidation, R>[]>})&({get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: FieldsSelection<OriginationFeeLiquidation, R>[]) => Promise<FieldsSelection<OriginationFeeLiquidation, R>[]>})
}

export interface UserReserveObservableChain{
    
/**
 * user address + reserve address
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    reserve: (ReserveObservableChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Observable<FieldsSelection<Reserve, R>>}),
    user: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Observable<FieldsSelection<User, R>>}),
    usageAsCollateralEnabledOnUser: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    userBalanceIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    principalATokenBalance: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    redirectedBalance: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    interestRedirectionAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    interestRedirectionAllowance: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    principalBorrows: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    borrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    borrowRateMode: ({get: (request?: boolean|number, defaultValue?: BorrowRateMode) => Observable<BorrowRateMode>}),
    variableBorrowIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/**
 * Amount in currency units included as fee
 * 
 */
originationFee: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lastUpdateTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    aTokenBalanceHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ATokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ATokenBalanceHistoryItem_filter | null)}) => {get: <R extends ATokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ATokenBalanceHistoryItem, R>[]) => Observable<FieldsSelection<ATokenBalanceHistoryItem, R>[]>})&({get: <R extends ATokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ATokenBalanceHistoryItem, R>[]) => Observable<FieldsSelection<ATokenBalanceHistoryItem, R>[]>}),
    borrowStateHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UserBorrowHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UserBorrowHistoryItem_filter | null)}) => {get: <R extends UserBorrowHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<UserBorrowHistoryItem, R>[]) => Observable<FieldsSelection<UserBorrowHistoryItem, R>[]>})&({get: <R extends UserBorrowHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<UserBorrowHistoryItem, R>[]) => Observable<FieldsSelection<UserBorrowHistoryItem, R>[]>}),
    usageAsCollateralHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UsageAsCollateral_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UsageAsCollateral_filter | null)}) => {get: <R extends UsageAsCollateralRequest>(request: R, defaultValue?: FieldsSelection<UsageAsCollateral, R>[]) => Observable<FieldsSelection<UsageAsCollateral, R>[]>})&({get: <R extends UsageAsCollateralRequest>(request: R, defaultValue?: FieldsSelection<UsageAsCollateral, R>[]) => Observable<FieldsSelection<UsageAsCollateral, R>[]>}),
    depositHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null)}) => {get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Observable<FieldsSelection<Deposit, R>[]>})&({get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Observable<FieldsSelection<Deposit, R>[]>}),
    redeemUnderlyingHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RedeemUnderlying_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RedeemUnderlying_filter | null)}) => {get: <R extends RedeemUnderlyingRequest>(request: R, defaultValue?: FieldsSelection<RedeemUnderlying, R>[]) => Observable<FieldsSelection<RedeemUnderlying, R>[]>})&({get: <R extends RedeemUnderlyingRequest>(request: R, defaultValue?: FieldsSelection<RedeemUnderlying, R>[]) => Observable<FieldsSelection<RedeemUnderlying, R>[]>}),
    borrowHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Borrow_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Borrow_filter | null)}) => {get: <R extends BorrowRequest>(request: R, defaultValue?: FieldsSelection<Borrow, R>[]) => Observable<FieldsSelection<Borrow, R>[]>})&({get: <R extends BorrowRequest>(request: R, defaultValue?: FieldsSelection<Borrow, R>[]) => Observable<FieldsSelection<Borrow, R>[]>}),
    swapHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null)}) => {get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Observable<FieldsSelection<Swap, R>[]>})&({get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Observable<FieldsSelection<Swap, R>[]>}),
    rebalanceStableBorrowRateHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RebalanceStableBorrowRate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RebalanceStableBorrowRate_filter | null)}) => {get: <R extends RebalanceStableBorrowRateRequest>(request: R, defaultValue?: FieldsSelection<RebalanceStableBorrowRate, R>[]) => Observable<FieldsSelection<RebalanceStableBorrowRate, R>[]>})&({get: <R extends RebalanceStableBorrowRateRequest>(request: R, defaultValue?: FieldsSelection<RebalanceStableBorrowRate, R>[]) => Observable<FieldsSelection<RebalanceStableBorrowRate, R>[]>}),
    repayHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Repay_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Repay_filter | null)}) => {get: <R extends RepayRequest>(request: R, defaultValue?: FieldsSelection<Repay, R>[]) => Observable<FieldsSelection<Repay, R>[]>})&({get: <R extends RepayRequest>(request: R, defaultValue?: FieldsSelection<Repay, R>[]) => Observable<FieldsSelection<Repay, R>[]>}),
    liquidationCallHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidationCall_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidationCall_filter | null)}) => {get: <R extends LiquidationCallRequest>(request: R, defaultValue?: FieldsSelection<LiquidationCall, R>[]) => Observable<FieldsSelection<LiquidationCall, R>[]>})&({get: <R extends LiquidationCallRequest>(request: R, defaultValue?: FieldsSelection<LiquidationCall, R>[]) => Observable<FieldsSelection<LiquidationCall, R>[]>}),
    originationFeeLiquidationHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (OriginationFeeLiquidation_orderBy | null),orderDirection?: (OrderDirection | null),where?: (OriginationFeeLiquidation_filter | null)}) => {get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: FieldsSelection<OriginationFeeLiquidation, R>[]) => Observable<FieldsSelection<OriginationFeeLiquidation, R>[]>})&({get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: FieldsSelection<OriginationFeeLiquidation, R>[]) => Observable<FieldsSelection<OriginationFeeLiquidation, R>[]>})
}

export interface UserTransactionPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>}),
    user: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Promise<FieldsSelection<User, R>>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface UserTransactionObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    user: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Observable<FieldsSelection<User, R>>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface _Block_PromiseChain{
    
/** The hash of the block */
hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    
/** The block number */
number: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface _Block_ObservableChain{
    
/** The hash of the block */
hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    
/** The block number */
number: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}


/** The type for the top-level _meta field */
export interface _Meta_PromiseChain{
    
/**
 * Information about a specific subgraph block. The hash of the block
 * will be null if the _meta field has a block constraint that asks for
 * a block number. It will be filled if the _meta field has no block constraint
 * and therefore asks for the latest  block
 * 
 */
block: (_Block_PromiseChain & {get: <R extends _Block_Request>(request: R, defaultValue?: FieldsSelection<_Block_, R>) => Promise<FieldsSelection<_Block_, R>>}),
    
/** The deployment ID */
deployment: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** If `true`, the subgraph encountered indexing errors at some past block */
hasIndexingErrors: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>})
}


/** The type for the top-level _meta field */
export interface _Meta_ObservableChain{
    
/**
 * Information about a specific subgraph block. The hash of the block
 * will be null if the _meta field has a block constraint that asks for
 * a block number. It will be filled if the _meta field has no block constraint
 * and therefore asks for the latest  block
 * 
 */
block: (_Block_ObservableChain & {get: <R extends _Block_Request>(request: R, defaultValue?: FieldsSelection<_Block_, R>) => Observable<FieldsSelection<_Block_, R>>}),
    
/** The deployment ID */
deployment: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** If `true`, the subgraph encountered indexing errors at some past block */
hasIndexingErrors: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>})
}