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
    tokenContractImpl: Scalars['Bytes']
    __typename: 'AToken'
}

export interface ATokenBalanceHistoryItem {
    /**
     * userReserve + txHash
     * 
     */
    id: Scalars['ID']
    userReserve: UserReserve
    timestamp: Scalars['Int']
    scaledATokenBalance: Scalars['BigInt']
    currentATokenBalance: Scalars['BigInt']
    index: Scalars['BigInt']
    __typename: 'ATokenBalanceHistoryItem'
}

export type ATokenBalanceHistoryItem_orderBy = 'id' | 'userReserve' | 'timestamp' | 'scaledATokenBalance' | 'currentATokenBalance' | 'index'

export type AToken_orderBy = 'id' | 'pool' | 'underlyingAssetAddress' | 'underlyingAssetDecimals' | 'tokenContractImpl'

export interface Borrow {
    /**
     * tx hash
     * 
     */
    id: Scalars['ID']
    pool: Pool
    user: User
    onBehalfOf: User
    reserve: Reserve
    userReserve: UserReserve
    amount: Scalars['BigInt']
    borrowRate: Scalars['BigInt']
    borrowRateMode: BorrowRateMode
    referrer?: Referrer
    timestamp: Scalars['Int']
    stableTokenDebt: Scalars['BigInt']
    variableTokenDebt: Scalars['BigInt']
    __typename: 'Borrow'
}

export type BorrowRateMode = 'None' | 'Stable' | 'Variable'

export type Borrow_orderBy = 'id' | 'pool' | 'user' | 'onBehalfOf' | 'reserve' | 'userReserve' | 'amount' | 'borrowRate' | 'borrowRateMode' | 'referrer' | 'timestamp' | 'stableTokenDebt' | 'variableTokenDebt'

export interface ChainlinkAggregator {
    id: Scalars['ID']
    oracleAsset: PriceOracleAsset
    __typename: 'ChainlinkAggregator'
}

export type ChainlinkAggregator_orderBy = 'id' | 'oracleAsset'

export interface ChainlinkENS {
    /** id is the node hash */
    id: Scalars['ID']
    /** address of the aggregator */
    aggregatorAddress: Scalars['Bytes']
    /** token address represented with this aggregator */
    underlyingAddress: Scalars['Bytes']
    /** symbol of the token represented on the aggregator */
    symbol: Scalars['String']
    __typename: 'ChainlinkENS'
}

export type ChainlinkENS_orderBy = 'id' | 'aggregatorAddress' | 'underlyingAddress' | 'symbol'

export interface ClaimIncentiveCall {
    /**
     * txHash
     * 
     */
    id: Scalars['ID']
    incentivesController: IncentivesController
    user: User
    amount: Scalars['BigInt']
    __typename: 'ClaimIncentiveCall'
}

export type ClaimIncentiveCall_orderBy = 'id' | 'incentivesController' | 'user' | 'amount'

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
    onBehalfOf: User
    reserve: Reserve
    userReserve: UserReserve
    amount: Scalars['BigInt']
    referrer?: Referrer
    timestamp: Scalars['Int']
    __typename: 'Deposit'
}

export type Deposit_orderBy = 'id' | 'pool' | 'user' | 'onBehalfOf' | 'reserve' | 'userReserve' | 'amount' | 'referrer' | 'timestamp'

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
    initiator: User
    timestamp: Scalars['Int']
    __typename: 'FlashLoan'
}

export type FlashLoan_orderBy = 'id' | 'pool' | 'reserve' | 'target' | 'amount' | 'totalFee' | 'initiator' | 'timestamp'

export interface IncentivesController {
    /**
     * address of the incentives controller
     * 
     */
    id: Scalars['ID']
    rewardToken: Scalars['Bytes']
    rewardTokenDecimals: Scalars['Int']
    rewardTokenSymbol: Scalars['String']
    precision: Scalars['Int']
    emissionEndTimestamp: Scalars['Int']
    incentivizedActions: IncentivizedAction[]
    claimIncentives: ClaimIncentiveCall[]
    __typename: 'IncentivesController'
}

export type IncentivesController_orderBy = 'id' | 'rewardToken' | 'rewardTokenDecimals' | 'rewardTokenSymbol' | 'precision' | 'emissionEndTimestamp' | 'incentivizedActions' | 'claimIncentives'

export interface IncentivizedAction {
    /**
     * txHash
     * 
     */
    id: Scalars['ID']
    incentivesController: IncentivesController
    user: User
    amount: Scalars['BigInt']
    __typename: 'IncentivizedAction'
}

export type IncentivizedAction_orderBy = 'id' | 'incentivesController' | 'user' | 'amount'

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

export interface MapAssetPool {
    /**
     * address of a /s /v token
     * 
     */
    id: Scalars['ID']
    pool: Scalars['String']
    underlyingAsset: Scalars['Bytes']
    __typename: 'MapAssetPool'
}

export type MapAssetPool_orderBy = 'id' | 'pool' | 'underlyingAsset'

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
    lendingPoolCollateralManager?: Scalars['Bytes']
    lendingPoolConfiguratorImpl?: Scalars['Bytes']
    lendingPoolImpl?: Scalars['Bytes']
    lendingPoolConfigurator?: Scalars['Bytes']
    proxyPriceProvider?: Scalars['Bytes']
    lendingRateOracle?: Scalars['Bytes']
    configurationAdmin?: Scalars['Bytes']
    ethereumAddress?: Scalars['Bytes']
    emergencyAdmin?: Scalars['Bytes']
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
    active: Scalars['Boolean']
    paused: Scalars['Boolean']
    __typename: 'Pool'
}

export interface PoolConfigurationHistoryItem {
    /**
     * tx hash
     * 
     */
    id: Scalars['ID']
    active?: Scalars['Boolean']
    pool: Pool
    lendingPool?: Scalars['Bytes']
    lendingPoolCollateralManager?: Scalars['Bytes']
    lendingPoolConfiguratorImpl?: Scalars['Bytes']
    lendingPoolImpl?: Scalars['Bytes']
    lendingPoolConfigurator?: Scalars['Bytes']
    proxyPriceProvider?: Scalars['Bytes']
    lendingRateOracle?: Scalars['Bytes']
    configurationAdmin?: Scalars['Bytes']
    timestamp: Scalars['Int']
    __typename: 'PoolConfigurationHistoryItem'
}

export type PoolConfigurationHistoryItem_orderBy = 'id' | 'active' | 'pool' | 'lendingPool' | 'lendingPoolCollateralManager' | 'lendingPoolConfiguratorImpl' | 'lendingPoolImpl' | 'lendingPoolConfigurator' | 'proxyPriceProvider' | 'lendingRateOracle' | 'configurationAdmin' | 'timestamp'

export type Pool_orderBy = 'id' | 'protocol' | 'lendingPool' | 'lendingPoolCollateralManager' | 'lendingPoolConfiguratorImpl' | 'lendingPoolImpl' | 'lendingPoolConfigurator' | 'proxyPriceProvider' | 'lendingRateOracle' | 'configurationAdmin' | 'ethereumAddress' | 'emergencyAdmin' | 'history' | 'lastUpdateTimestamp' | 'reserves' | 'depositHistory' | 'redeemUnderlyingHistory' | 'borrowHistory' | 'swapHistory' | 'usageAsCollateralHistory' | 'rebalanceStableBorrowRateHistory' | 'repayHistory' | 'flashLoanHistory' | 'liquidationCallHistory' | 'originationFeeLiquidationHistory' | 'active' | 'paused'

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
    usdDependentAssets: PriceOracleAsset[]
    fallbackPriceOracle: Scalars['Bytes']
    tokens: PriceOracleAsset[]
    usdPriceEthHistory: UsdEthPriceHistoryItem[]
    tokensWithFallback: PriceOracleAsset[]
    lastUpdateTimestamp: Scalars['Int']
    version: Scalars['Int']
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

export type PriceOracle_orderBy = 'id' | 'proxyPriceProvider' | 'usdPriceEth' | 'usdPriceEthMainSource' | 'usdPriceEthFallbackRequired' | 'usdDependentAssets' | 'fallbackPriceOracle' | 'tokens' | 'usdPriceEthHistory' | 'tokensWithFallback' | 'lastUpdateTimestamp' | 'version'

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
    chainlinkENS?: ChainlinkENS
    chainlinkENSs: ChainlinkENS[]
    chainlinkAggregator?: ChainlinkAggregator
    chainlinkAggregators: ChainlinkAggregator[]
    priceOracleAsset?: PriceOracleAsset
    priceOracleAssets: PriceOracleAsset[]
    priceOracle?: PriceOracle
    priceOracles: PriceOracle[]
    stoken?: SToken
    stokens: SToken[]
    vtoken?: VToken
    vtokens: VToken[]
    atoken?: AToken
    atokens: AToken[]
    variableDebtToken?: VariableDebtToken
    variableDebtTokens: VariableDebtToken[]
    stableDebtToken?: StableDebtToken
    stableDebtTokens: StableDebtToken[]
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
    incentivesController?: IncentivesController
    incentivesControllers: IncentivesController[]
    incentivizedAction?: IncentivizedAction
    incentivizedActions: IncentivizedAction[]
    claimIncentiveCall?: ClaimIncentiveCall
    claimIncentiveCalls: ClaimIncentiveCall[]
    mapAssetPool?: MapAssetPool
    mapAssetPools: MapAssetPool[]
    reserve?: Reserve
    reserves: Reserve[]
    wethreserve?: WETHReserve
    wethreserves: WETHReserve[]
    atokenBalanceHistoryItem?: ATokenBalanceHistoryItem
    atokenBalanceHistoryItems: ATokenBalanceHistoryItem[]
    vtokenBalanceHistoryItem?: VTokenBalanceHistoryItem
    vtokenBalanceHistoryItems: VTokenBalanceHistoryItem[]
    stokenBalanceHistoryItem?: STokenBalanceHistoryItem
    stokenBalanceHistoryItems: STokenBalanceHistoryItem[]
    stableTokenDelegatedAllowance?: StableTokenDelegatedAllowance
    stableTokenDelegatedAllowances: StableTokenDelegatedAllowance[]
    variableTokenDelegatedAllowance?: VariableTokenDelegatedAllowance
    variableTokenDelegatedAllowances: VariableTokenDelegatedAllowance[]
    userReserve?: UserReserve
    userReserves: UserReserve[]
    user?: User
    users: User[]
    swapHistory?: SwapHistory
    swapHistories: SwapHistory[]
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
    timestamp: Scalars['Int']
    __typename: 'RebalanceStableBorrowRate'
}

export type RebalanceStableBorrowRate_orderBy = 'id' | 'pool' | 'user' | 'reserve' | 'userReserve' | 'borrowRateFrom' | 'borrowRateTo' | 'timestamp'

export interface RedeemUnderlying {
    /**
     * tx hash
     * 
     */
    id: Scalars['ID']
    pool: Pool
    user: User
    onBehalfOf: User
    reserve: Reserve
    userReserve: UserReserve
    amount: Scalars['BigInt']
    timestamp: Scalars['Int']
    __typename: 'RedeemUnderlying'
}

export type RedeemUnderlying_orderBy = 'id' | 'pool' | 'user' | 'onBehalfOf' | 'reserve' | 'userReserve' | 'amount' | 'timestamp'

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
    onBehalfOf: User
    reserve: Reserve
    userReserve: UserReserve
    amount: Scalars['BigInt']
    timestamp: Scalars['Int']
    __typename: 'Repay'
}

export type Repay_orderBy = 'id' | 'pool' | 'user' | 'onBehalfOf' | 'reserve' | 'userReserve' | 'amount' | 'timestamp'

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
    isFrozen: Scalars['Boolean']
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
    totalATokenSupply: Scalars['BigInt']
    totalLiquidityAsCollateral: Scalars['BigInt']
    availableLiquidity: Scalars['BigInt']
    totalPrincipalStableDebt: Scalars['BigInt']
    totalScaledVariableDebt: Scalars['BigInt']
    totalCurrentVariableDebt: Scalars['BigInt']
    totalDeposits: Scalars['BigInt']
    liquidityRate: Scalars['BigInt']
    averageStableRate: Scalars['BigInt']
    variableBorrowRate: Scalars['BigInt']
    stableBorrowRate: Scalars['BigInt']
    liquidityIndex: Scalars['BigInt']
    variableBorrowIndex: Scalars['BigInt']
    aToken: AToken
    vToken: VToken
    sToken: SToken
    reserveFactor: Scalars['BigInt']
    lastUpdateTimestamp: Scalars['Int']
    stableDebtLastUpdateTimestamp: Scalars['Int']
    aEmissionPerSecond: Scalars['BigInt']
    vEmissionPerSecond: Scalars['BigInt']
    sEmissionPerSecond: Scalars['BigInt']
    aTokenIncentivesIndex: Scalars['BigInt']
    vTokenIncentivesIndex: Scalars['BigInt']
    sTokenIncentivesIndex: Scalars['BigInt']
    aIncentivesLastUpdateTimestamp: Scalars['Int']
    vIncentivesLastUpdateTimestamp: Scalars['Int']
    sIncentivesLastUpdateTimestamp: Scalars['Int']
    lifetimeLiquidity: Scalars['BigInt']
    lifetimePrincipalStableDebt: Scalars['BigInt']
    lifetimeScaledVariableDebt: Scalars['BigInt']
    lifetimeCurrentVariableDebt: Scalars['BigInt']
    lifetimeRepayments: Scalars['BigInt']
    lifetimeWithdrawals: Scalars['BigInt']
    lifetimeBorrows: Scalars['BigInt']
    lifetimeLiquidated: Scalars['BigInt']
    lifetimeFlashLoans: Scalars['BigInt']
    lifetimeFlashLoanPremium: Scalars['BigInt']
    lifetimeDepositorsInterestEarned: Scalars['BigInt']
    lifetimeReserveFactorAccrued: Scalars['BigInt']
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
    isFrozen: Scalars['Boolean']
    reserveInterestRateStrategy: Scalars['Bytes']
    baseLTVasCollateral: Scalars['BigInt']
    reserveLiquidationThreshold: Scalars['BigInt']
    reserveLiquidationBonus: Scalars['BigInt']
    timestamp: Scalars['Int']
    __typename: 'ReserveConfigurationHistoryItem'
}

export type ReserveConfigurationHistoryItem_orderBy = 'id' | 'reserve' | 'usageAsCollateralEnabled' | 'borrowingEnabled' | 'stableBorrowRateEnabled' | 'isActive' | 'isFrozen' | 'reserveInterestRateStrategy' | 'baseLTVasCollateral' | 'reserveLiquidationThreshold' | 'reserveLiquidationBonus' | 'timestamp'

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
    totalATokenSupply: Scalars['BigInt']
    totalLiquidityAsCollateral: Scalars['BigInt']
    availableLiquidity: Scalars['BigInt']
    priceInEth: Scalars['BigInt']
    priceInUsd: Scalars['BigDecimal']
    timestamp: Scalars['Int']
    totalScaledVariableDebt: Scalars['BigInt']
    totalCurrentVariableDebt: Scalars['BigInt']
    totalPrincipalStableDebt: Scalars['BigInt']
    lifetimePrincipalStableDebt: Scalars['BigInt']
    lifetimeScaledVariableDebt: Scalars['BigInt']
    lifetimeCurrentVariableDebt: Scalars['BigInt']
    lifetimeLiquidity: Scalars['BigInt']
    lifetimeRepayments: Scalars['BigInt']
    lifetimeWithdrawals: Scalars['BigInt']
    lifetimeBorrows: Scalars['BigInt']
    lifetimeLiquidated: Scalars['BigInt']
    lifetimeFlashLoans: Scalars['BigInt']
    lifetimeFlashLoanPremium: Scalars['BigInt']
    lifetimeReserveFactorAccrued: Scalars['BigInt']
    lifetimeDepositorsInterestEarned: Scalars['BigInt']
    __typename: 'ReserveParamsHistoryItem'
}

export type ReserveParamsHistoryItem_orderBy = 'id' | 'reserve' | 'variableBorrowRate' | 'variableBorrowIndex' | 'utilizationRate' | 'stableBorrowRate' | 'averageStableBorrowRate' | 'liquidityIndex' | 'liquidityRate' | 'totalLiquidity' | 'totalATokenSupply' | 'totalLiquidityAsCollateral' | 'availableLiquidity' | 'priceInEth' | 'priceInUsd' | 'timestamp' | 'totalScaledVariableDebt' | 'totalCurrentVariableDebt' | 'totalPrincipalStableDebt' | 'lifetimePrincipalStableDebt' | 'lifetimeScaledVariableDebt' | 'lifetimeCurrentVariableDebt' | 'lifetimeLiquidity' | 'lifetimeRepayments' | 'lifetimeWithdrawals' | 'lifetimeBorrows' | 'lifetimeLiquidated' | 'lifetimeFlashLoans' | 'lifetimeFlashLoanPremium' | 'lifetimeReserveFactorAccrued' | 'lifetimeDepositorsInterestEarned'

export type Reserve_orderBy = 'id' | 'underlyingAsset' | 'pool' | 'symbol' | 'name' | 'decimals' | 'usageAsCollateralEnabled' | 'borrowingEnabled' | 'stableBorrowRateEnabled' | 'isActive' | 'isFrozen' | 'price' | 'reserveInterestRateStrategy' | 'optimalUtilisationRate' | 'variableRateSlope1' | 'variableRateSlope2' | 'stableRateSlope1' | 'stableRateSlope2' | 'baseVariableBorrowRate' | 'baseLTVasCollateral' | 'reserveLiquidationThreshold' | 'reserveLiquidationBonus' | 'utilizationRate' | 'totalLiquidity' | 'totalATokenSupply' | 'totalLiquidityAsCollateral' | 'availableLiquidity' | 'totalPrincipalStableDebt' | 'totalScaledVariableDebt' | 'totalCurrentVariableDebt' | 'totalDeposits' | 'liquidityRate' | 'averageStableRate' | 'variableBorrowRate' | 'stableBorrowRate' | 'liquidityIndex' | 'variableBorrowIndex' | 'aToken' | 'vToken' | 'sToken' | 'reserveFactor' | 'lastUpdateTimestamp' | 'stableDebtLastUpdateTimestamp' | 'aEmissionPerSecond' | 'vEmissionPerSecond' | 'sEmissionPerSecond' | 'aTokenIncentivesIndex' | 'vTokenIncentivesIndex' | 'sTokenIncentivesIndex' | 'aIncentivesLastUpdateTimestamp' | 'vIncentivesLastUpdateTimestamp' | 'sIncentivesLastUpdateTimestamp' | 'lifetimeLiquidity' | 'lifetimePrincipalStableDebt' | 'lifetimeScaledVariableDebt' | 'lifetimeCurrentVariableDebt' | 'lifetimeRepayments' | 'lifetimeWithdrawals' | 'lifetimeBorrows' | 'lifetimeLiquidated' | 'lifetimeFlashLoans' | 'lifetimeFlashLoanPremium' | 'lifetimeDepositorsInterestEarned' | 'lifetimeReserveFactorAccrued' | 'userReserves' | 'depositHistory' | 'redeemUnderlyingHistory' | 'borrowHistory' | 'usageAsCollateralHistory' | 'swapHistory' | 'rebalanceStableBorrowRateHistory' | 'repayHistory' | 'flashLoanHistory' | 'liquidationCallHistory' | 'originationFeeLiquidationHistory' | 'paramsHistory' | 'configurationHistory' | 'deposits'

export interface SToken {
    /**
     * SToken address
     * 
     */
    id: Scalars['ID']
    pool: Pool
    underlyingAssetAddress: Scalars['Bytes']
    underlyingAssetDecimals: Scalars['Int']
    tokenContractImpl: Scalars['Bytes']
    __typename: 'SToken'
}

export interface STokenBalanceHistoryItem {
    /**
     * userReserve + txHash
     * 
     */
    id: Scalars['ID']
    userReserve: UserReserve
    principalStableDebt: Scalars['BigInt']
    currentStableDebt: Scalars['BigInt']
    timestamp: Scalars['Int']
    avgStableBorrowRate: Scalars['BigInt']
    __typename: 'STokenBalanceHistoryItem'
}

export type STokenBalanceHistoryItem_orderBy = 'id' | 'userReserve' | 'principalStableDebt' | 'currentStableDebt' | 'timestamp' | 'avgStableBorrowRate'

export type SToken_orderBy = 'id' | 'pool' | 'underlyingAssetAddress' | 'underlyingAssetDecimals' | 'tokenContractImpl'

export interface StableDebtToken {
    /**
     * StableDebtToken address
     * 
     */
    id: Scalars['ID']
    pool: Pool
    underlyingAssetAddress: Scalars['Bytes']
    underlyingAssetDecimals: Scalars['Int']
    __typename: 'StableDebtToken'
}

export type StableDebtToken_orderBy = 'id' | 'pool' | 'underlyingAssetAddress' | 'underlyingAssetDecimals'

export interface StableTokenDelegatedAllowance {
    /**
     * stable + fromuser address + touser address+ reserve address
     * 
     */
    id: Scalars['ID']
    fromUser: User
    toUser: User
    amountAllowed: Scalars['BigInt']
    userReserve: UserReserve
    __typename: 'StableTokenDelegatedAllowance'
}

export type StableTokenDelegatedAllowance_orderBy = 'id' | 'fromUser' | 'toUser' | 'amountAllowed' | 'userReserve'

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
    chainlinkENS?: ChainlinkENS
    chainlinkENSs: ChainlinkENS[]
    chainlinkAggregator?: ChainlinkAggregator
    chainlinkAggregators: ChainlinkAggregator[]
    priceOracleAsset?: PriceOracleAsset
    priceOracleAssets: PriceOracleAsset[]
    priceOracle?: PriceOracle
    priceOracles: PriceOracle[]
    stoken?: SToken
    stokens: SToken[]
    vtoken?: VToken
    vtokens: VToken[]
    atoken?: AToken
    atokens: AToken[]
    variableDebtToken?: VariableDebtToken
    variableDebtTokens: VariableDebtToken[]
    stableDebtToken?: StableDebtToken
    stableDebtTokens: StableDebtToken[]
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
    incentivesController?: IncentivesController
    incentivesControllers: IncentivesController[]
    incentivizedAction?: IncentivizedAction
    incentivizedActions: IncentivizedAction[]
    claimIncentiveCall?: ClaimIncentiveCall
    claimIncentiveCalls: ClaimIncentiveCall[]
    mapAssetPool?: MapAssetPool
    mapAssetPools: MapAssetPool[]
    reserve?: Reserve
    reserves: Reserve[]
    wethreserve?: WETHReserve
    wethreserves: WETHReserve[]
    atokenBalanceHistoryItem?: ATokenBalanceHistoryItem
    atokenBalanceHistoryItems: ATokenBalanceHistoryItem[]
    vtokenBalanceHistoryItem?: VTokenBalanceHistoryItem
    vtokenBalanceHistoryItems: VTokenBalanceHistoryItem[]
    stokenBalanceHistoryItem?: STokenBalanceHistoryItem
    stokenBalanceHistoryItems: STokenBalanceHistoryItem[]
    stableTokenDelegatedAllowance?: StableTokenDelegatedAllowance
    stableTokenDelegatedAllowances: StableTokenDelegatedAllowance[]
    variableTokenDelegatedAllowance?: VariableTokenDelegatedAllowance
    variableTokenDelegatedAllowances: VariableTokenDelegatedAllowance[]
    userReserve?: UserReserve
    userReserves: UserReserve[]
    user?: User
    users: User[]
    swapHistory?: SwapHistory
    swapHistories: SwapHistory[]
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
    borrowRateModeFrom: BorrowRateMode
    borrowRateModeTo: BorrowRateMode
    stableBorrowRate: Scalars['BigInt']
    variableBorrowRate: Scalars['BigInt']
    timestamp: Scalars['Int']
    __typename: 'Swap'
}

export interface SwapHistory {
    /**
     * tx hash
     * 
     */
    id: Scalars['ID']
    fromAsset: Scalars['String']
    toAsset: Scalars['String']
    fromAmount: Scalars['BigInt']
    receivedAmount: Scalars['BigInt']
    swapType: Scalars['String']
    __typename: 'SwapHistory'
}

export type SwapHistory_orderBy = 'id' | 'fromAsset' | 'toAsset' | 'fromAmount' | 'receivedAmount' | 'swapType'

export type Swap_orderBy = 'id' | 'pool' | 'user' | 'reserve' | 'userReserve' | 'borrowRateModeFrom' | 'borrowRateModeTo' | 'stableBorrowRate' | 'variableBorrowRate' | 'timestamp'

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
    unclaimedRewards: Scalars['BigInt']
    lifetimeRewards: Scalars['BigInt']
    incentivesLastUpdated: Scalars['Int']
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
    incentivizedActions: IncentivizedAction[]
    claimIncentives: ClaimIncentiveCall[]
    __typename: 'User'
}

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
    scaledATokenBalance: Scalars['BigInt']
    currentATokenBalance: Scalars['BigInt']
    scaledVariableDebt: Scalars['BigInt']
    currentVariableDebt: Scalars['BigInt']
    principalStableDebt: Scalars['BigInt']
    currentStableDebt: Scalars['BigInt']
    currentTotalDebt: Scalars['BigInt']
    stableBorrowRate: Scalars['BigInt']
    oldStableBorrowRate: Scalars['BigInt']
    liquidityRate: Scalars['BigInt']
    stableBorrowLastUpdateTimestamp: Scalars['Int']
    variableBorrowIndex: Scalars['BigInt']
    aTokenincentivesUserIndex: Scalars['BigInt']
    vTokenincentivesUserIndex: Scalars['BigInt']
    sTokenincentivesUserIndex: Scalars['BigInt']
    aIncentivesLastUpdateTimestamp: Scalars['Int']
    vIncentivesLastUpdateTimestamp: Scalars['Int']
    sIncentivesLastUpdateTimestamp: Scalars['Int']
    /**
     * Amount in currency units included as fee
     * 
     */
    lastUpdateTimestamp: Scalars['Int']
    stableTokenDelegatedAllowances: StableTokenDelegatedAllowance[]
    variableTokenDelegatedAllowances: VariableTokenDelegatedAllowance[]
    aTokenBalanceHistory: ATokenBalanceHistoryItem[]
    vTokenBalanceHistory: VTokenBalanceHistoryItem[]
    sTokenBalanceHistory: STokenBalanceHistoryItem[]
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

export type UserReserve_orderBy = 'id' | 'pool' | 'reserve' | 'user' | 'usageAsCollateralEnabledOnUser' | 'scaledATokenBalance' | 'currentATokenBalance' | 'scaledVariableDebt' | 'currentVariableDebt' | 'principalStableDebt' | 'currentStableDebt' | 'currentTotalDebt' | 'stableBorrowRate' | 'oldStableBorrowRate' | 'liquidityRate' | 'stableBorrowLastUpdateTimestamp' | 'variableBorrowIndex' | 'aTokenincentivesUserIndex' | 'vTokenincentivesUserIndex' | 'sTokenincentivesUserIndex' | 'aIncentivesLastUpdateTimestamp' | 'vIncentivesLastUpdateTimestamp' | 'sIncentivesLastUpdateTimestamp' | 'lastUpdateTimestamp' | 'stableTokenDelegatedAllowances' | 'variableTokenDelegatedAllowances' | 'aTokenBalanceHistory' | 'vTokenBalanceHistory' | 'sTokenBalanceHistory' | 'usageAsCollateralHistory' | 'depositHistory' | 'redeemUnderlyingHistory' | 'borrowHistory' | 'swapHistory' | 'rebalanceStableBorrowRateHistory' | 'repayHistory' | 'liquidationCallHistory' | 'originationFeeLiquidationHistory'

export type UserTransaction = (Borrow | Deposit | LiquidationCall | OriginationFeeLiquidation | RebalanceStableBorrowRate | RedeemUnderlying | Repay | Swap | UsageAsCollateral) & { __isUnion?: true }

export type UserTransaction_orderBy = 'id' | 'pool' | 'user' | 'timestamp'

export type User_orderBy = 'id' | 'borrowedReservesCount' | 'unclaimedRewards' | 'lifetimeRewards' | 'incentivesLastUpdated' | 'reserves' | 'depositHistory' | 'redeemUnderlyingHistory' | 'usageAsCollateralHistory' | 'borrowHistory' | 'swapHistory' | 'rebalanceStableBorrowRateHistory' | 'repayHistory' | 'liquidationCallHistory' | 'originationFeeLiquidationHistory' | 'incentivizedActions' | 'claimIncentives'

export interface VToken {
    /**
     * VToken address
     * 
     */
    id: Scalars['ID']
    pool: Pool
    underlyingAssetAddress: Scalars['Bytes']
    underlyingAssetDecimals: Scalars['Int']
    tokenContractImpl: Scalars['Bytes']
    __typename: 'VToken'
}

export interface VTokenBalanceHistoryItem {
    /**
     * userReserve + txHash
     * 
     */
    id: Scalars['ID']
    userReserve: UserReserve
    scaledVariableDebt: Scalars['BigInt']
    currentVariableDebt: Scalars['BigInt']
    timestamp: Scalars['Int']
    index: Scalars['BigInt']
    __typename: 'VTokenBalanceHistoryItem'
}

export type VTokenBalanceHistoryItem_orderBy = 'id' | 'userReserve' | 'scaledVariableDebt' | 'currentVariableDebt' | 'timestamp' | 'index'

export type VToken_orderBy = 'id' | 'pool' | 'underlyingAssetAddress' | 'underlyingAssetDecimals' | 'tokenContractImpl'

export interface VariableDebtToken {
    /**
     * VariableDebtToken address
     * 
     */
    id: Scalars['ID']
    pool: Pool
    underlyingAssetAddress: Scalars['Bytes']
    underlyingAssetDecimals: Scalars['Int']
    __typename: 'VariableDebtToken'
}

export type VariableDebtToken_orderBy = 'id' | 'pool' | 'underlyingAssetAddress' | 'underlyingAssetDecimals'

export interface VariableTokenDelegatedAllowance {
    /**
     * variable + fromuser address + touser address+ reserve address
     * 
     */
    id: Scalars['ID']
    fromUser: User
    toUser: User
    amountAllowed: Scalars['BigInt']
    userReserve: UserReserve
    __typename: 'VariableTokenDelegatedAllowance'
}

export type VariableTokenDelegatedAllowance_orderBy = 'id' | 'fromUser' | 'toUser' | 'amountAllowed' | 'userReserve'

export interface WETHReserve {
    /**
     * weth address
     * 
     */
    id: Scalars['ID']
    address: Scalars['Bytes']
    symbol: Scalars['String']
    name: Scalars['String']
    decimals: Scalars['Int']
    updatedTimestamp: Scalars['Int']
    updatedBlockNumber: Scalars['BigInt']
    __typename: 'WETHReserve'
}

export type WETHReserve_orderBy = 'id' | 'address' | 'symbol' | 'name' | 'decimals' | 'updatedTimestamp' | 'updatedBlockNumber'

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
    tokenContractImpl?: boolean | number
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
    timestamp?: boolean | number
    scaledATokenBalance?: boolean | number
    currentATokenBalance?: boolean | number
    index?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ATokenBalanceHistoryItem_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),userReserve?: (Scalars['String'] | null),userReserve_not?: (Scalars['String'] | null),userReserve_gt?: (Scalars['String'] | null),userReserve_lt?: (Scalars['String'] | null),userReserve_gte?: (Scalars['String'] | null),userReserve_lte?: (Scalars['String'] | null),userReserve_in?: (Scalars['String'][] | null),userReserve_not_in?: (Scalars['String'][] | null),userReserve_contains?: (Scalars['String'] | null),userReserve_not_contains?: (Scalars['String'] | null),userReserve_starts_with?: (Scalars['String'] | null),userReserve_not_starts_with?: (Scalars['String'] | null),userReserve_ends_with?: (Scalars['String'] | null),userReserve_not_ends_with?: (Scalars['String'] | null),timestamp?: (Scalars['Int'] | null),timestamp_not?: (Scalars['Int'] | null),timestamp_gt?: (Scalars['Int'] | null),timestamp_lt?: (Scalars['Int'] | null),timestamp_gte?: (Scalars['Int'] | null),timestamp_lte?: (Scalars['Int'] | null),timestamp_in?: (Scalars['Int'][] | null),timestamp_not_in?: (Scalars['Int'][] | null),scaledATokenBalance?: (Scalars['BigInt'] | null),scaledATokenBalance_not?: (Scalars['BigInt'] | null),scaledATokenBalance_gt?: (Scalars['BigInt'] | null),scaledATokenBalance_lt?: (Scalars['BigInt'] | null),scaledATokenBalance_gte?: (Scalars['BigInt'] | null),scaledATokenBalance_lte?: (Scalars['BigInt'] | null),scaledATokenBalance_in?: (Scalars['BigInt'][] | null),scaledATokenBalance_not_in?: (Scalars['BigInt'][] | null),currentATokenBalance?: (Scalars['BigInt'] | null),currentATokenBalance_not?: (Scalars['BigInt'] | null),currentATokenBalance_gt?: (Scalars['BigInt'] | null),currentATokenBalance_lt?: (Scalars['BigInt'] | null),currentATokenBalance_gte?: (Scalars['BigInt'] | null),currentATokenBalance_lte?: (Scalars['BigInt'] | null),currentATokenBalance_in?: (Scalars['BigInt'][] | null),currentATokenBalance_not_in?: (Scalars['BigInt'][] | null),index?: (Scalars['BigInt'] | null),index_not?: (Scalars['BigInt'] | null),index_gt?: (Scalars['BigInt'] | null),index_lt?: (Scalars['BigInt'] | null),index_gte?: (Scalars['BigInt'] | null),index_lte?: (Scalars['BigInt'] | null),index_in?: (Scalars['BigInt'][] | null),index_not_in?: (Scalars['BigInt'][] | null)}

export interface AToken_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),underlyingAssetAddress?: (Scalars['Bytes'] | null),underlyingAssetAddress_not?: (Scalars['Bytes'] | null),underlyingAssetAddress_in?: (Scalars['Bytes'][] | null),underlyingAssetAddress_not_in?: (Scalars['Bytes'][] | null),underlyingAssetAddress_contains?: (Scalars['Bytes'] | null),underlyingAssetAddress_not_contains?: (Scalars['Bytes'] | null),underlyingAssetDecimals?: (Scalars['Int'] | null),underlyingAssetDecimals_not?: (Scalars['Int'] | null),underlyingAssetDecimals_gt?: (Scalars['Int'] | null),underlyingAssetDecimals_lt?: (Scalars['Int'] | null),underlyingAssetDecimals_gte?: (Scalars['Int'] | null),underlyingAssetDecimals_lte?: (Scalars['Int'] | null),underlyingAssetDecimals_in?: (Scalars['Int'][] | null),underlyingAssetDecimals_not_in?: (Scalars['Int'][] | null),tokenContractImpl?: (Scalars['Bytes'] | null),tokenContractImpl_not?: (Scalars['Bytes'] | null),tokenContractImpl_in?: (Scalars['Bytes'][] | null),tokenContractImpl_not_in?: (Scalars['Bytes'][] | null),tokenContractImpl_contains?: (Scalars['Bytes'] | null),tokenContractImpl_not_contains?: (Scalars['Bytes'] | null)}

export interface Block_height {hash?: (Scalars['Bytes'] | null),number?: (Scalars['Int'] | null)}

export interface BorrowRequest{
    /**
     * tx hash
     * 
     */
    id?: boolean | number
    pool?: PoolRequest
    user?: UserRequest
    onBehalfOf?: UserRequest
    reserve?: ReserveRequest
    userReserve?: UserReserveRequest
    amount?: boolean | number
    borrowRate?: boolean | number
    borrowRateMode?: boolean | number
    referrer?: ReferrerRequest
    timestamp?: boolean | number
    stableTokenDebt?: boolean | number
    variableTokenDebt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Borrow_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),user?: (Scalars['String'] | null),user_not?: (Scalars['String'] | null),user_gt?: (Scalars['String'] | null),user_lt?: (Scalars['String'] | null),user_gte?: (Scalars['String'] | null),user_lte?: (Scalars['String'] | null),user_in?: (Scalars['String'][] | null),user_not_in?: (Scalars['String'][] | null),user_contains?: (Scalars['String'] | null),user_not_contains?: (Scalars['String'] | null),user_starts_with?: (Scalars['String'] | null),user_not_starts_with?: (Scalars['String'] | null),user_ends_with?: (Scalars['String'] | null),user_not_ends_with?: (Scalars['String'] | null),onBehalfOf?: (Scalars['String'] | null),onBehalfOf_not?: (Scalars['String'] | null),onBehalfOf_gt?: (Scalars['String'] | null),onBehalfOf_lt?: (Scalars['String'] | null),onBehalfOf_gte?: (Scalars['String'] | null),onBehalfOf_lte?: (Scalars['String'] | null),onBehalfOf_in?: (Scalars['String'][] | null),onBehalfOf_not_in?: (Scalars['String'][] | null),onBehalfOf_contains?: (Scalars['String'] | null),onBehalfOf_not_contains?: (Scalars['String'] | null),onBehalfOf_starts_with?: (Scalars['String'] | null),onBehalfOf_not_starts_with?: (Scalars['String'] | null),onBehalfOf_ends_with?: (Scalars['String'] | null),onBehalfOf_not_ends_with?: (Scalars['String'] | null),reserve?: (Scalars['String'] | null),reserve_not?: (Scalars['String'] | null),reserve_gt?: (Scalars['String'] | null),reserve_lt?: (Scalars['String'] | null),reserve_gte?: (Scalars['String'] | null),reserve_lte?: (Scalars['String'] | null),reserve_in?: (Scalars['String'][] | null),reserve_not_in?: (Scalars['String'][] | null),reserve_contains?: (Scalars['String'] | null),reserve_not_contains?: (Scalars['String'] | null),reserve_starts_with?: (Scalars['String'] | null),reserve_not_starts_with?: (Scalars['String'] | null),reserve_ends_with?: (Scalars['String'] | null),reserve_not_ends_with?: (Scalars['String'] | null),userReserve?: (Scalars['String'] | null),userReserve_not?: (Scalars['String'] | null),userReserve_gt?: (Scalars['String'] | null),userReserve_lt?: (Scalars['String'] | null),userReserve_gte?: (Scalars['String'] | null),userReserve_lte?: (Scalars['String'] | null),userReserve_in?: (Scalars['String'][] | null),userReserve_not_in?: (Scalars['String'][] | null),userReserve_contains?: (Scalars['String'] | null),userReserve_not_contains?: (Scalars['String'] | null),userReserve_starts_with?: (Scalars['String'] | null),userReserve_not_starts_with?: (Scalars['String'] | null),userReserve_ends_with?: (Scalars['String'] | null),userReserve_not_ends_with?: (Scalars['String'] | null),amount?: (Scalars['BigInt'] | null),amount_not?: (Scalars['BigInt'] | null),amount_gt?: (Scalars['BigInt'] | null),amount_lt?: (Scalars['BigInt'] | null),amount_gte?: (Scalars['BigInt'] | null),amount_lte?: (Scalars['BigInt'] | null),amount_in?: (Scalars['BigInt'][] | null),amount_not_in?: (Scalars['BigInt'][] | null),borrowRate?: (Scalars['BigInt'] | null),borrowRate_not?: (Scalars['BigInt'] | null),borrowRate_gt?: (Scalars['BigInt'] | null),borrowRate_lt?: (Scalars['BigInt'] | null),borrowRate_gte?: (Scalars['BigInt'] | null),borrowRate_lte?: (Scalars['BigInt'] | null),borrowRate_in?: (Scalars['BigInt'][] | null),borrowRate_not_in?: (Scalars['BigInt'][] | null),borrowRateMode?: (BorrowRateMode | null),borrowRateMode_not?: (BorrowRateMode | null),referrer?: (Scalars['String'] | null),referrer_not?: (Scalars['String'] | null),referrer_gt?: (Scalars['String'] | null),referrer_lt?: (Scalars['String'] | null),referrer_gte?: (Scalars['String'] | null),referrer_lte?: (Scalars['String'] | null),referrer_in?: (Scalars['String'][] | null),referrer_not_in?: (Scalars['String'][] | null),referrer_contains?: (Scalars['String'] | null),referrer_not_contains?: (Scalars['String'] | null),referrer_starts_with?: (Scalars['String'] | null),referrer_not_starts_with?: (Scalars['String'] | null),referrer_ends_with?: (Scalars['String'] | null),referrer_not_ends_with?: (Scalars['String'] | null),timestamp?: (Scalars['Int'] | null),timestamp_not?: (Scalars['Int'] | null),timestamp_gt?: (Scalars['Int'] | null),timestamp_lt?: (Scalars['Int'] | null),timestamp_gte?: (Scalars['Int'] | null),timestamp_lte?: (Scalars['Int'] | null),timestamp_in?: (Scalars['Int'][] | null),timestamp_not_in?: (Scalars['Int'][] | null),stableTokenDebt?: (Scalars['BigInt'] | null),stableTokenDebt_not?: (Scalars['BigInt'] | null),stableTokenDebt_gt?: (Scalars['BigInt'] | null),stableTokenDebt_lt?: (Scalars['BigInt'] | null),stableTokenDebt_gte?: (Scalars['BigInt'] | null),stableTokenDebt_lte?: (Scalars['BigInt'] | null),stableTokenDebt_in?: (Scalars['BigInt'][] | null),stableTokenDebt_not_in?: (Scalars['BigInt'][] | null),variableTokenDebt?: (Scalars['BigInt'] | null),variableTokenDebt_not?: (Scalars['BigInt'] | null),variableTokenDebt_gt?: (Scalars['BigInt'] | null),variableTokenDebt_lt?: (Scalars['BigInt'] | null),variableTokenDebt_gte?: (Scalars['BigInt'] | null),variableTokenDebt_lte?: (Scalars['BigInt'] | null),variableTokenDebt_in?: (Scalars['BigInt'][] | null),variableTokenDebt_not_in?: (Scalars['BigInt'][] | null)}

export interface ChainlinkAggregatorRequest{
    id?: boolean | number
    oracleAsset?: PriceOracleAssetRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ChainlinkAggregator_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),oracleAsset?: (Scalars['String'] | null),oracleAsset_not?: (Scalars['String'] | null),oracleAsset_gt?: (Scalars['String'] | null),oracleAsset_lt?: (Scalars['String'] | null),oracleAsset_gte?: (Scalars['String'] | null),oracleAsset_lte?: (Scalars['String'] | null),oracleAsset_in?: (Scalars['String'][] | null),oracleAsset_not_in?: (Scalars['String'][] | null),oracleAsset_contains?: (Scalars['String'] | null),oracleAsset_not_contains?: (Scalars['String'] | null),oracleAsset_starts_with?: (Scalars['String'] | null),oracleAsset_not_starts_with?: (Scalars['String'] | null),oracleAsset_ends_with?: (Scalars['String'] | null),oracleAsset_not_ends_with?: (Scalars['String'] | null)}

export interface ChainlinkENSRequest{
    /** id is the node hash */
    id?: boolean | number
    /** address of the aggregator */
    aggregatorAddress?: boolean | number
    /** token address represented with this aggregator */
    underlyingAddress?: boolean | number
    /** symbol of the token represented on the aggregator */
    symbol?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ChainlinkENS_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),aggregatorAddress?: (Scalars['Bytes'] | null),aggregatorAddress_not?: (Scalars['Bytes'] | null),aggregatorAddress_in?: (Scalars['Bytes'][] | null),aggregatorAddress_not_in?: (Scalars['Bytes'][] | null),aggregatorAddress_contains?: (Scalars['Bytes'] | null),aggregatorAddress_not_contains?: (Scalars['Bytes'] | null),underlyingAddress?: (Scalars['Bytes'] | null),underlyingAddress_not?: (Scalars['Bytes'] | null),underlyingAddress_in?: (Scalars['Bytes'][] | null),underlyingAddress_not_in?: (Scalars['Bytes'][] | null),underlyingAddress_contains?: (Scalars['Bytes'] | null),underlyingAddress_not_contains?: (Scalars['Bytes'] | null),symbol?: (Scalars['String'] | null),symbol_not?: (Scalars['String'] | null),symbol_gt?: (Scalars['String'] | null),symbol_lt?: (Scalars['String'] | null),symbol_gte?: (Scalars['String'] | null),symbol_lte?: (Scalars['String'] | null),symbol_in?: (Scalars['String'][] | null),symbol_not_in?: (Scalars['String'][] | null),symbol_contains?: (Scalars['String'] | null),symbol_not_contains?: (Scalars['String'] | null),symbol_starts_with?: (Scalars['String'] | null),symbol_not_starts_with?: (Scalars['String'] | null),symbol_ends_with?: (Scalars['String'] | null),symbol_not_ends_with?: (Scalars['String'] | null)}

export interface ClaimIncentiveCallRequest{
    /**
     * txHash
     * 
     */
    id?: boolean | number
    incentivesController?: IncentivesControllerRequest
    user?: UserRequest
    amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ClaimIncentiveCall_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),incentivesController?: (Scalars['String'] | null),incentivesController_not?: (Scalars['String'] | null),incentivesController_gt?: (Scalars['String'] | null),incentivesController_lt?: (Scalars['String'] | null),incentivesController_gte?: (Scalars['String'] | null),incentivesController_lte?: (Scalars['String'] | null),incentivesController_in?: (Scalars['String'][] | null),incentivesController_not_in?: (Scalars['String'][] | null),incentivesController_contains?: (Scalars['String'] | null),incentivesController_not_contains?: (Scalars['String'] | null),incentivesController_starts_with?: (Scalars['String'] | null),incentivesController_not_starts_with?: (Scalars['String'] | null),incentivesController_ends_with?: (Scalars['String'] | null),incentivesController_not_ends_with?: (Scalars['String'] | null),user?: (Scalars['String'] | null),user_not?: (Scalars['String'] | null),user_gt?: (Scalars['String'] | null),user_lt?: (Scalars['String'] | null),user_gte?: (Scalars['String'] | null),user_lte?: (Scalars['String'] | null),user_in?: (Scalars['String'][] | null),user_not_in?: (Scalars['String'][] | null),user_contains?: (Scalars['String'] | null),user_not_contains?: (Scalars['String'] | null),user_starts_with?: (Scalars['String'] | null),user_not_starts_with?: (Scalars['String'] | null),user_ends_with?: (Scalars['String'] | null),user_not_ends_with?: (Scalars['String'] | null),amount?: (Scalars['BigInt'] | null),amount_not?: (Scalars['BigInt'] | null),amount_gt?: (Scalars['BigInt'] | null),amount_lt?: (Scalars['BigInt'] | null),amount_gte?: (Scalars['BigInt'] | null),amount_lte?: (Scalars['BigInt'] | null),amount_in?: (Scalars['BigInt'][] | null),amount_not_in?: (Scalars['BigInt'][] | null)}

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
    onBehalfOf?: UserRequest
    reserve?: ReserveRequest
    userReserve?: UserReserveRequest
    amount?: boolean | number
    referrer?: ReferrerRequest
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Deposit_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),user?: (Scalars['String'] | null),user_not?: (Scalars['String'] | null),user_gt?: (Scalars['String'] | null),user_lt?: (Scalars['String'] | null),user_gte?: (Scalars['String'] | null),user_lte?: (Scalars['String'] | null),user_in?: (Scalars['String'][] | null),user_not_in?: (Scalars['String'][] | null),user_contains?: (Scalars['String'] | null),user_not_contains?: (Scalars['String'] | null),user_starts_with?: (Scalars['String'] | null),user_not_starts_with?: (Scalars['String'] | null),user_ends_with?: (Scalars['String'] | null),user_not_ends_with?: (Scalars['String'] | null),onBehalfOf?: (Scalars['String'] | null),onBehalfOf_not?: (Scalars['String'] | null),onBehalfOf_gt?: (Scalars['String'] | null),onBehalfOf_lt?: (Scalars['String'] | null),onBehalfOf_gte?: (Scalars['String'] | null),onBehalfOf_lte?: (Scalars['String'] | null),onBehalfOf_in?: (Scalars['String'][] | null),onBehalfOf_not_in?: (Scalars['String'][] | null),onBehalfOf_contains?: (Scalars['String'] | null),onBehalfOf_not_contains?: (Scalars['String'] | null),onBehalfOf_starts_with?: (Scalars['String'] | null),onBehalfOf_not_starts_with?: (Scalars['String'] | null),onBehalfOf_ends_with?: (Scalars['String'] | null),onBehalfOf_not_ends_with?: (Scalars['String'] | null),reserve?: (Scalars['String'] | null),reserve_not?: (Scalars['String'] | null),reserve_gt?: (Scalars['String'] | null),reserve_lt?: (Scalars['String'] | null),reserve_gte?: (Scalars['String'] | null),reserve_lte?: (Scalars['String'] | null),reserve_in?: (Scalars['String'][] | null),reserve_not_in?: (Scalars['String'][] | null),reserve_contains?: (Scalars['String'] | null),reserve_not_contains?: (Scalars['String'] | null),reserve_starts_with?: (Scalars['String'] | null),reserve_not_starts_with?: (Scalars['String'] | null),reserve_ends_with?: (Scalars['String'] | null),reserve_not_ends_with?: (Scalars['String'] | null),userReserve?: (Scalars['String'] | null),userReserve_not?: (Scalars['String'] | null),userReserve_gt?: (Scalars['String'] | null),userReserve_lt?: (Scalars['String'] | null),userReserve_gte?: (Scalars['String'] | null),userReserve_lte?: (Scalars['String'] | null),userReserve_in?: (Scalars['String'][] | null),userReserve_not_in?: (Scalars['String'][] | null),userReserve_contains?: (Scalars['String'] | null),userReserve_not_contains?: (Scalars['String'] | null),userReserve_starts_with?: (Scalars['String'] | null),userReserve_not_starts_with?: (Scalars['String'] | null),userReserve_ends_with?: (Scalars['String'] | null),userReserve_not_ends_with?: (Scalars['String'] | null),amount?: (Scalars['BigInt'] | null),amount_not?: (Scalars['BigInt'] | null),amount_gt?: (Scalars['BigInt'] | null),amount_lt?: (Scalars['BigInt'] | null),amount_gte?: (Scalars['BigInt'] | null),amount_lte?: (Scalars['BigInt'] | null),amount_in?: (Scalars['BigInt'][] | null),amount_not_in?: (Scalars['BigInt'][] | null),referrer?: (Scalars['String'] | null),referrer_not?: (Scalars['String'] | null),referrer_gt?: (Scalars['String'] | null),referrer_lt?: (Scalars['String'] | null),referrer_gte?: (Scalars['String'] | null),referrer_lte?: (Scalars['String'] | null),referrer_in?: (Scalars['String'][] | null),referrer_not_in?: (Scalars['String'][] | null),referrer_contains?: (Scalars['String'] | null),referrer_not_contains?: (Scalars['String'] | null),referrer_starts_with?: (Scalars['String'] | null),referrer_not_starts_with?: (Scalars['String'] | null),referrer_ends_with?: (Scalars['String'] | null),referrer_not_ends_with?: (Scalars['String'] | null),timestamp?: (Scalars['Int'] | null),timestamp_not?: (Scalars['Int'] | null),timestamp_gt?: (Scalars['Int'] | null),timestamp_lt?: (Scalars['Int'] | null),timestamp_gte?: (Scalars['Int'] | null),timestamp_lte?: (Scalars['Int'] | null),timestamp_in?: (Scalars['Int'][] | null),timestamp_not_in?: (Scalars['Int'][] | null)}

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
    initiator?: UserRequest
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FlashLoan_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),reserve?: (Scalars['String'] | null),reserve_not?: (Scalars['String'] | null),reserve_gt?: (Scalars['String'] | null),reserve_lt?: (Scalars['String'] | null),reserve_gte?: (Scalars['String'] | null),reserve_lte?: (Scalars['String'] | null),reserve_in?: (Scalars['String'][] | null),reserve_not_in?: (Scalars['String'][] | null),reserve_contains?: (Scalars['String'] | null),reserve_not_contains?: (Scalars['String'] | null),reserve_starts_with?: (Scalars['String'] | null),reserve_not_starts_with?: (Scalars['String'] | null),reserve_ends_with?: (Scalars['String'] | null),reserve_not_ends_with?: (Scalars['String'] | null),target?: (Scalars['Bytes'] | null),target_not?: (Scalars['Bytes'] | null),target_in?: (Scalars['Bytes'][] | null),target_not_in?: (Scalars['Bytes'][] | null),target_contains?: (Scalars['Bytes'] | null),target_not_contains?: (Scalars['Bytes'] | null),amount?: (Scalars['BigInt'] | null),amount_not?: (Scalars['BigInt'] | null),amount_gt?: (Scalars['BigInt'] | null),amount_lt?: (Scalars['BigInt'] | null),amount_gte?: (Scalars['BigInt'] | null),amount_lte?: (Scalars['BigInt'] | null),amount_in?: (Scalars['BigInt'][] | null),amount_not_in?: (Scalars['BigInt'][] | null),totalFee?: (Scalars['BigInt'] | null),totalFee_not?: (Scalars['BigInt'] | null),totalFee_gt?: (Scalars['BigInt'] | null),totalFee_lt?: (Scalars['BigInt'] | null),totalFee_gte?: (Scalars['BigInt'] | null),totalFee_lte?: (Scalars['BigInt'] | null),totalFee_in?: (Scalars['BigInt'][] | null),totalFee_not_in?: (Scalars['BigInt'][] | null),initiator?: (Scalars['String'] | null),initiator_not?: (Scalars['String'] | null),initiator_gt?: (Scalars['String'] | null),initiator_lt?: (Scalars['String'] | null),initiator_gte?: (Scalars['String'] | null),initiator_lte?: (Scalars['String'] | null),initiator_in?: (Scalars['String'][] | null),initiator_not_in?: (Scalars['String'][] | null),initiator_contains?: (Scalars['String'] | null),initiator_not_contains?: (Scalars['String'] | null),initiator_starts_with?: (Scalars['String'] | null),initiator_not_starts_with?: (Scalars['String'] | null),initiator_ends_with?: (Scalars['String'] | null),initiator_not_ends_with?: (Scalars['String'] | null),timestamp?: (Scalars['Int'] | null),timestamp_not?: (Scalars['Int'] | null),timestamp_gt?: (Scalars['Int'] | null),timestamp_lt?: (Scalars['Int'] | null),timestamp_gte?: (Scalars['Int'] | null),timestamp_lte?: (Scalars['Int'] | null),timestamp_in?: (Scalars['Int'][] | null),timestamp_not_in?: (Scalars['Int'][] | null)}

export interface IncentivesControllerRequest{
    /**
     * address of the incentives controller
     * 
     */
    id?: boolean | number
    rewardToken?: boolean | number
    rewardTokenDecimals?: boolean | number
    rewardTokenSymbol?: boolean | number
    precision?: boolean | number
    emissionEndTimestamp?: boolean | number
    incentivizedActions?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (IncentivizedAction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (IncentivizedAction_filter | null)},IncentivizedActionRequest] | IncentivizedActionRequest
    claimIncentives?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ClaimIncentiveCall_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ClaimIncentiveCall_filter | null)},ClaimIncentiveCallRequest] | ClaimIncentiveCallRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface IncentivesController_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),rewardToken?: (Scalars['Bytes'] | null),rewardToken_not?: (Scalars['Bytes'] | null),rewardToken_in?: (Scalars['Bytes'][] | null),rewardToken_not_in?: (Scalars['Bytes'][] | null),rewardToken_contains?: (Scalars['Bytes'] | null),rewardToken_not_contains?: (Scalars['Bytes'] | null),rewardTokenDecimals?: (Scalars['Int'] | null),rewardTokenDecimals_not?: (Scalars['Int'] | null),rewardTokenDecimals_gt?: (Scalars['Int'] | null),rewardTokenDecimals_lt?: (Scalars['Int'] | null),rewardTokenDecimals_gte?: (Scalars['Int'] | null),rewardTokenDecimals_lte?: (Scalars['Int'] | null),rewardTokenDecimals_in?: (Scalars['Int'][] | null),rewardTokenDecimals_not_in?: (Scalars['Int'][] | null),rewardTokenSymbol?: (Scalars['String'] | null),rewardTokenSymbol_not?: (Scalars['String'] | null),rewardTokenSymbol_gt?: (Scalars['String'] | null),rewardTokenSymbol_lt?: (Scalars['String'] | null),rewardTokenSymbol_gte?: (Scalars['String'] | null),rewardTokenSymbol_lte?: (Scalars['String'] | null),rewardTokenSymbol_in?: (Scalars['String'][] | null),rewardTokenSymbol_not_in?: (Scalars['String'][] | null),rewardTokenSymbol_contains?: (Scalars['String'] | null),rewardTokenSymbol_not_contains?: (Scalars['String'] | null),rewardTokenSymbol_starts_with?: (Scalars['String'] | null),rewardTokenSymbol_not_starts_with?: (Scalars['String'] | null),rewardTokenSymbol_ends_with?: (Scalars['String'] | null),rewardTokenSymbol_not_ends_with?: (Scalars['String'] | null),precision?: (Scalars['Int'] | null),precision_not?: (Scalars['Int'] | null),precision_gt?: (Scalars['Int'] | null),precision_lt?: (Scalars['Int'] | null),precision_gte?: (Scalars['Int'] | null),precision_lte?: (Scalars['Int'] | null),precision_in?: (Scalars['Int'][] | null),precision_not_in?: (Scalars['Int'][] | null),emissionEndTimestamp?: (Scalars['Int'] | null),emissionEndTimestamp_not?: (Scalars['Int'] | null),emissionEndTimestamp_gt?: (Scalars['Int'] | null),emissionEndTimestamp_lt?: (Scalars['Int'] | null),emissionEndTimestamp_gte?: (Scalars['Int'] | null),emissionEndTimestamp_lte?: (Scalars['Int'] | null),emissionEndTimestamp_in?: (Scalars['Int'][] | null),emissionEndTimestamp_not_in?: (Scalars['Int'][] | null)}

export interface IncentivizedActionRequest{
    /**
     * txHash
     * 
     */
    id?: boolean | number
    incentivesController?: IncentivesControllerRequest
    user?: UserRequest
    amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface IncentivizedAction_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),incentivesController?: (Scalars['String'] | null),incentivesController_not?: (Scalars['String'] | null),incentivesController_gt?: (Scalars['String'] | null),incentivesController_lt?: (Scalars['String'] | null),incentivesController_gte?: (Scalars['String'] | null),incentivesController_lte?: (Scalars['String'] | null),incentivesController_in?: (Scalars['String'][] | null),incentivesController_not_in?: (Scalars['String'][] | null),incentivesController_contains?: (Scalars['String'] | null),incentivesController_not_contains?: (Scalars['String'] | null),incentivesController_starts_with?: (Scalars['String'] | null),incentivesController_not_starts_with?: (Scalars['String'] | null),incentivesController_ends_with?: (Scalars['String'] | null),incentivesController_not_ends_with?: (Scalars['String'] | null),user?: (Scalars['String'] | null),user_not?: (Scalars['String'] | null),user_gt?: (Scalars['String'] | null),user_lt?: (Scalars['String'] | null),user_gte?: (Scalars['String'] | null),user_lte?: (Scalars['String'] | null),user_in?: (Scalars['String'][] | null),user_not_in?: (Scalars['String'][] | null),user_contains?: (Scalars['String'] | null),user_not_contains?: (Scalars['String'] | null),user_starts_with?: (Scalars['String'] | null),user_not_starts_with?: (Scalars['String'] | null),user_ends_with?: (Scalars['String'] | null),user_not_ends_with?: (Scalars['String'] | null),amount?: (Scalars['BigInt'] | null),amount_not?: (Scalars['BigInt'] | null),amount_gt?: (Scalars['BigInt'] | null),amount_lt?: (Scalars['BigInt'] | null),amount_gte?: (Scalars['BigInt'] | null),amount_lte?: (Scalars['BigInt'] | null),amount_in?: (Scalars['BigInt'][] | null),amount_not_in?: (Scalars['BigInt'][] | null)}

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

export interface MapAssetPoolRequest{
    /**
     * address of a /s /v token
     * 
     */
    id?: boolean | number
    pool?: boolean | number
    underlyingAsset?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MapAssetPool_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),underlyingAsset?: (Scalars['Bytes'] | null),underlyingAsset_not?: (Scalars['Bytes'] | null),underlyingAsset_in?: (Scalars['Bytes'][] | null),underlyingAsset_not_in?: (Scalars['Bytes'][] | null),underlyingAsset_contains?: (Scalars['Bytes'] | null),underlyingAsset_not_contains?: (Scalars['Bytes'] | null)}

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
    lendingPoolCollateralManager?: boolean | number
    lendingPoolConfiguratorImpl?: boolean | number
    lendingPoolImpl?: boolean | number
    lendingPoolConfigurator?: boolean | number
    proxyPriceProvider?: boolean | number
    lendingRateOracle?: boolean | number
    configurationAdmin?: boolean | number
    ethereumAddress?: boolean | number
    emergencyAdmin?: boolean | number
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
    active?: boolean | number
    paused?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PoolConfigurationHistoryItemRequest{
    /**
     * tx hash
     * 
     */
    id?: boolean | number
    active?: boolean | number
    pool?: PoolRequest
    lendingPool?: boolean | number
    lendingPoolCollateralManager?: boolean | number
    lendingPoolConfiguratorImpl?: boolean | number
    lendingPoolImpl?: boolean | number
    lendingPoolConfigurator?: boolean | number
    proxyPriceProvider?: boolean | number
    lendingRateOracle?: boolean | number
    configurationAdmin?: boolean | number
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PoolConfigurationHistoryItem_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),active?: (Scalars['Boolean'] | null),active_not?: (Scalars['Boolean'] | null),active_in?: (Scalars['Boolean'][] | null),active_not_in?: (Scalars['Boolean'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),lendingPool?: (Scalars['Bytes'] | null),lendingPool_not?: (Scalars['Bytes'] | null),lendingPool_in?: (Scalars['Bytes'][] | null),lendingPool_not_in?: (Scalars['Bytes'][] | null),lendingPool_contains?: (Scalars['Bytes'] | null),lendingPool_not_contains?: (Scalars['Bytes'] | null),lendingPoolCollateralManager?: (Scalars['Bytes'] | null),lendingPoolCollateralManager_not?: (Scalars['Bytes'] | null),lendingPoolCollateralManager_in?: (Scalars['Bytes'][] | null),lendingPoolCollateralManager_not_in?: (Scalars['Bytes'][] | null),lendingPoolCollateralManager_contains?: (Scalars['Bytes'] | null),lendingPoolCollateralManager_not_contains?: (Scalars['Bytes'] | null),lendingPoolConfiguratorImpl?: (Scalars['Bytes'] | null),lendingPoolConfiguratorImpl_not?: (Scalars['Bytes'] | null),lendingPoolConfiguratorImpl_in?: (Scalars['Bytes'][] | null),lendingPoolConfiguratorImpl_not_in?: (Scalars['Bytes'][] | null),lendingPoolConfiguratorImpl_contains?: (Scalars['Bytes'] | null),lendingPoolConfiguratorImpl_not_contains?: (Scalars['Bytes'] | null),lendingPoolImpl?: (Scalars['Bytes'] | null),lendingPoolImpl_not?: (Scalars['Bytes'] | null),lendingPoolImpl_in?: (Scalars['Bytes'][] | null),lendingPoolImpl_not_in?: (Scalars['Bytes'][] | null),lendingPoolImpl_contains?: (Scalars['Bytes'] | null),lendingPoolImpl_not_contains?: (Scalars['Bytes'] | null),lendingPoolConfigurator?: (Scalars['Bytes'] | null),lendingPoolConfigurator_not?: (Scalars['Bytes'] | null),lendingPoolConfigurator_in?: (Scalars['Bytes'][] | null),lendingPoolConfigurator_not_in?: (Scalars['Bytes'][] | null),lendingPoolConfigurator_contains?: (Scalars['Bytes'] | null),lendingPoolConfigurator_not_contains?: (Scalars['Bytes'] | null),proxyPriceProvider?: (Scalars['Bytes'] | null),proxyPriceProvider_not?: (Scalars['Bytes'] | null),proxyPriceProvider_in?: (Scalars['Bytes'][] | null),proxyPriceProvider_not_in?: (Scalars['Bytes'][] | null),proxyPriceProvider_contains?: (Scalars['Bytes'] | null),proxyPriceProvider_not_contains?: (Scalars['Bytes'] | null),lendingRateOracle?: (Scalars['Bytes'] | null),lendingRateOracle_not?: (Scalars['Bytes'] | null),lendingRateOracle_in?: (Scalars['Bytes'][] | null),lendingRateOracle_not_in?: (Scalars['Bytes'][] | null),lendingRateOracle_contains?: (Scalars['Bytes'] | null),lendingRateOracle_not_contains?: (Scalars['Bytes'] | null),configurationAdmin?: (Scalars['Bytes'] | null),configurationAdmin_not?: (Scalars['Bytes'] | null),configurationAdmin_in?: (Scalars['Bytes'][] | null),configurationAdmin_not_in?: (Scalars['Bytes'][] | null),configurationAdmin_contains?: (Scalars['Bytes'] | null),configurationAdmin_not_contains?: (Scalars['Bytes'] | null),timestamp?: (Scalars['Int'] | null),timestamp_not?: (Scalars['Int'] | null),timestamp_gt?: (Scalars['Int'] | null),timestamp_lt?: (Scalars['Int'] | null),timestamp_gte?: (Scalars['Int'] | null),timestamp_lte?: (Scalars['Int'] | null),timestamp_in?: (Scalars['Int'][] | null),timestamp_not_in?: (Scalars['Int'][] | null)}

export interface Pool_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),protocol?: (Scalars['String'] | null),protocol_not?: (Scalars['String'] | null),protocol_gt?: (Scalars['String'] | null),protocol_lt?: (Scalars['String'] | null),protocol_gte?: (Scalars['String'] | null),protocol_lte?: (Scalars['String'] | null),protocol_in?: (Scalars['String'][] | null),protocol_not_in?: (Scalars['String'][] | null),protocol_contains?: (Scalars['String'] | null),protocol_not_contains?: (Scalars['String'] | null),protocol_starts_with?: (Scalars['String'] | null),protocol_not_starts_with?: (Scalars['String'] | null),protocol_ends_with?: (Scalars['String'] | null),protocol_not_ends_with?: (Scalars['String'] | null),lendingPool?: (Scalars['Bytes'] | null),lendingPool_not?: (Scalars['Bytes'] | null),lendingPool_in?: (Scalars['Bytes'][] | null),lendingPool_not_in?: (Scalars['Bytes'][] | null),lendingPool_contains?: (Scalars['Bytes'] | null),lendingPool_not_contains?: (Scalars['Bytes'] | null),lendingPoolCollateralManager?: (Scalars['Bytes'] | null),lendingPoolCollateralManager_not?: (Scalars['Bytes'] | null),lendingPoolCollateralManager_in?: (Scalars['Bytes'][] | null),lendingPoolCollateralManager_not_in?: (Scalars['Bytes'][] | null),lendingPoolCollateralManager_contains?: (Scalars['Bytes'] | null),lendingPoolCollateralManager_not_contains?: (Scalars['Bytes'] | null),lendingPoolConfiguratorImpl?: (Scalars['Bytes'] | null),lendingPoolConfiguratorImpl_not?: (Scalars['Bytes'] | null),lendingPoolConfiguratorImpl_in?: (Scalars['Bytes'][] | null),lendingPoolConfiguratorImpl_not_in?: (Scalars['Bytes'][] | null),lendingPoolConfiguratorImpl_contains?: (Scalars['Bytes'] | null),lendingPoolConfiguratorImpl_not_contains?: (Scalars['Bytes'] | null),lendingPoolImpl?: (Scalars['Bytes'] | null),lendingPoolImpl_not?: (Scalars['Bytes'] | null),lendingPoolImpl_in?: (Scalars['Bytes'][] | null),lendingPoolImpl_not_in?: (Scalars['Bytes'][] | null),lendingPoolImpl_contains?: (Scalars['Bytes'] | null),lendingPoolImpl_not_contains?: (Scalars['Bytes'] | null),lendingPoolConfigurator?: (Scalars['Bytes'] | null),lendingPoolConfigurator_not?: (Scalars['Bytes'] | null),lendingPoolConfigurator_in?: (Scalars['Bytes'][] | null),lendingPoolConfigurator_not_in?: (Scalars['Bytes'][] | null),lendingPoolConfigurator_contains?: (Scalars['Bytes'] | null),lendingPoolConfigurator_not_contains?: (Scalars['Bytes'] | null),proxyPriceProvider?: (Scalars['Bytes'] | null),proxyPriceProvider_not?: (Scalars['Bytes'] | null),proxyPriceProvider_in?: (Scalars['Bytes'][] | null),proxyPriceProvider_not_in?: (Scalars['Bytes'][] | null),proxyPriceProvider_contains?: (Scalars['Bytes'] | null),proxyPriceProvider_not_contains?: (Scalars['Bytes'] | null),lendingRateOracle?: (Scalars['Bytes'] | null),lendingRateOracle_not?: (Scalars['Bytes'] | null),lendingRateOracle_in?: (Scalars['Bytes'][] | null),lendingRateOracle_not_in?: (Scalars['Bytes'][] | null),lendingRateOracle_contains?: (Scalars['Bytes'] | null),lendingRateOracle_not_contains?: (Scalars['Bytes'] | null),configurationAdmin?: (Scalars['Bytes'] | null),configurationAdmin_not?: (Scalars['Bytes'] | null),configurationAdmin_in?: (Scalars['Bytes'][] | null),configurationAdmin_not_in?: (Scalars['Bytes'][] | null),configurationAdmin_contains?: (Scalars['Bytes'] | null),configurationAdmin_not_contains?: (Scalars['Bytes'] | null),ethereumAddress?: (Scalars['Bytes'] | null),ethereumAddress_not?: (Scalars['Bytes'] | null),ethereumAddress_in?: (Scalars['Bytes'][] | null),ethereumAddress_not_in?: (Scalars['Bytes'][] | null),ethereumAddress_contains?: (Scalars['Bytes'] | null),ethereumAddress_not_contains?: (Scalars['Bytes'] | null),emergencyAdmin?: (Scalars['Bytes'] | null),emergencyAdmin_not?: (Scalars['Bytes'] | null),emergencyAdmin_in?: (Scalars['Bytes'][] | null),emergencyAdmin_not_in?: (Scalars['Bytes'][] | null),emergencyAdmin_contains?: (Scalars['Bytes'] | null),emergencyAdmin_not_contains?: (Scalars['Bytes'] | null),lastUpdateTimestamp?: (Scalars['Int'] | null),lastUpdateTimestamp_not?: (Scalars['Int'] | null),lastUpdateTimestamp_gt?: (Scalars['Int'] | null),lastUpdateTimestamp_lt?: (Scalars['Int'] | null),lastUpdateTimestamp_gte?: (Scalars['Int'] | null),lastUpdateTimestamp_lte?: (Scalars['Int'] | null),lastUpdateTimestamp_in?: (Scalars['Int'][] | null),lastUpdateTimestamp_not_in?: (Scalars['Int'][] | null),active?: (Scalars['Boolean'] | null),active_not?: (Scalars['Boolean'] | null),active_in?: (Scalars['Boolean'][] | null),active_not_in?: (Scalars['Boolean'][] | null),paused?: (Scalars['Boolean'] | null),paused_not?: (Scalars['Boolean'] | null),paused_in?: (Scalars['Boolean'][] | null),paused_not_in?: (Scalars['Boolean'][] | null)}

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
    usdDependentAssets?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceOracleAsset_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceOracleAsset_filter | null)},PriceOracleAssetRequest] | PriceOracleAssetRequest
    fallbackPriceOracle?: boolean | number
    tokens?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceOracleAsset_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceOracleAsset_filter | null)},PriceOracleAssetRequest] | PriceOracleAssetRequest
    usdPriceEthHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UsdEthPriceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UsdEthPriceHistoryItem_filter | null)},UsdEthPriceHistoryItemRequest] | UsdEthPriceHistoryItemRequest
    tokensWithFallback?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceOracleAsset_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceOracleAsset_filter | null)},PriceOracleAssetRequest] | PriceOracleAssetRequest
    lastUpdateTimestamp?: boolean | number
    version?: boolean | number
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

export interface PriceOracle_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),proxyPriceProvider?: (Scalars['Bytes'] | null),proxyPriceProvider_not?: (Scalars['Bytes'] | null),proxyPriceProvider_in?: (Scalars['Bytes'][] | null),proxyPriceProvider_not_in?: (Scalars['Bytes'][] | null),proxyPriceProvider_contains?: (Scalars['Bytes'] | null),proxyPriceProvider_not_contains?: (Scalars['Bytes'] | null),usdPriceEth?: (Scalars['BigInt'] | null),usdPriceEth_not?: (Scalars['BigInt'] | null),usdPriceEth_gt?: (Scalars['BigInt'] | null),usdPriceEth_lt?: (Scalars['BigInt'] | null),usdPriceEth_gte?: (Scalars['BigInt'] | null),usdPriceEth_lte?: (Scalars['BigInt'] | null),usdPriceEth_in?: (Scalars['BigInt'][] | null),usdPriceEth_not_in?: (Scalars['BigInt'][] | null),usdPriceEthMainSource?: (Scalars['Bytes'] | null),usdPriceEthMainSource_not?: (Scalars['Bytes'] | null),usdPriceEthMainSource_in?: (Scalars['Bytes'][] | null),usdPriceEthMainSource_not_in?: (Scalars['Bytes'][] | null),usdPriceEthMainSource_contains?: (Scalars['Bytes'] | null),usdPriceEthMainSource_not_contains?: (Scalars['Bytes'] | null),usdPriceEthFallbackRequired?: (Scalars['Boolean'] | null),usdPriceEthFallbackRequired_not?: (Scalars['Boolean'] | null),usdPriceEthFallbackRequired_in?: (Scalars['Boolean'][] | null),usdPriceEthFallbackRequired_not_in?: (Scalars['Boolean'][] | null),usdDependentAssets?: (Scalars['String'][] | null),usdDependentAssets_not?: (Scalars['String'][] | null),usdDependentAssets_contains?: (Scalars['String'][] | null),usdDependentAssets_not_contains?: (Scalars['String'][] | null),fallbackPriceOracle?: (Scalars['Bytes'] | null),fallbackPriceOracle_not?: (Scalars['Bytes'] | null),fallbackPriceOracle_in?: (Scalars['Bytes'][] | null),fallbackPriceOracle_not_in?: (Scalars['Bytes'][] | null),fallbackPriceOracle_contains?: (Scalars['Bytes'] | null),fallbackPriceOracle_not_contains?: (Scalars['Bytes'] | null),tokensWithFallback?: (Scalars['String'][] | null),tokensWithFallback_not?: (Scalars['String'][] | null),tokensWithFallback_contains?: (Scalars['String'][] | null),tokensWithFallback_not_contains?: (Scalars['String'][] | null),lastUpdateTimestamp?: (Scalars['Int'] | null),lastUpdateTimestamp_not?: (Scalars['Int'] | null),lastUpdateTimestamp_gt?: (Scalars['Int'] | null),lastUpdateTimestamp_lt?: (Scalars['Int'] | null),lastUpdateTimestamp_gte?: (Scalars['Int'] | null),lastUpdateTimestamp_lte?: (Scalars['Int'] | null),lastUpdateTimestamp_in?: (Scalars['Int'][] | null),lastUpdateTimestamp_not_in?: (Scalars['Int'][] | null),version?: (Scalars['Int'] | null),version_not?: (Scalars['Int'] | null),version_gt?: (Scalars['Int'] | null),version_lt?: (Scalars['Int'] | null),version_gte?: (Scalars['Int'] | null),version_lte?: (Scalars['Int'] | null),version_in?: (Scalars['Int'][] | null),version_not_in?: (Scalars['Int'][] | null)}

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
    chainlinkENS?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ChainlinkENSRequest]
    chainlinkENSs?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ChainlinkENS_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ChainlinkENS_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ChainlinkENSRequest]
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
    stoken?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},STokenRequest]
    stokens?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (SToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (SToken_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},STokenRequest]
    vtoken?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},VTokenRequest]
    vtokens?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VToken_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},VTokenRequest]
    atoken?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ATokenRequest]
    atokens?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (AToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (AToken_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ATokenRequest]
    variableDebtToken?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},VariableDebtTokenRequest]
    variableDebtTokens?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VariableDebtToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VariableDebtToken_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},VariableDebtTokenRequest]
    stableDebtToken?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},StableDebtTokenRequest]
    stableDebtTokens?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StableDebtToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StableDebtToken_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},StableDebtTokenRequest]
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
    incentivesController?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},IncentivesControllerRequest]
    incentivesControllers?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (IncentivesController_orderBy | null),orderDirection?: (OrderDirection | null),where?: (IncentivesController_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},IncentivesControllerRequest]
    incentivizedAction?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},IncentivizedActionRequest]
    incentivizedActions?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (IncentivizedAction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (IncentivizedAction_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},IncentivizedActionRequest]
    claimIncentiveCall?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ClaimIncentiveCallRequest]
    claimIncentiveCalls?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ClaimIncentiveCall_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ClaimIncentiveCall_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ClaimIncentiveCallRequest]
    mapAssetPool?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},MapAssetPoolRequest]
    mapAssetPools?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (MapAssetPool_orderBy | null),orderDirection?: (OrderDirection | null),where?: (MapAssetPool_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},MapAssetPoolRequest]
    reserve?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ReserveRequest]
    reserves?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Reserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Reserve_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ReserveRequest]
    wethreserve?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},WETHReserveRequest]
    wethreserves?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (WETHReserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (WETHReserve_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},WETHReserveRequest]
    atokenBalanceHistoryItem?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ATokenBalanceHistoryItemRequest]
    atokenBalanceHistoryItems?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ATokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ATokenBalanceHistoryItem_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ATokenBalanceHistoryItemRequest]
    vtokenBalanceHistoryItem?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},VTokenBalanceHistoryItemRequest]
    vtokenBalanceHistoryItems?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VTokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VTokenBalanceHistoryItem_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},VTokenBalanceHistoryItemRequest]
    stokenBalanceHistoryItem?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},STokenBalanceHistoryItemRequest]
    stokenBalanceHistoryItems?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (STokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (STokenBalanceHistoryItem_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},STokenBalanceHistoryItemRequest]
    stableTokenDelegatedAllowance?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},StableTokenDelegatedAllowanceRequest]
    stableTokenDelegatedAllowances?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StableTokenDelegatedAllowance_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StableTokenDelegatedAllowance_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},StableTokenDelegatedAllowanceRequest]
    variableTokenDelegatedAllowance?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},VariableTokenDelegatedAllowanceRequest]
    variableTokenDelegatedAllowances?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VariableTokenDelegatedAllowance_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VariableTokenDelegatedAllowance_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},VariableTokenDelegatedAllowanceRequest]
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
    swapHistory?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},SwapHistoryRequest]
    swapHistories?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (SwapHistory_orderBy | null),orderDirection?: (OrderDirection | null),where?: (SwapHistory_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},SwapHistoryRequest]
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
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RebalanceStableBorrowRate_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),user?: (Scalars['String'] | null),user_not?: (Scalars['String'] | null),user_gt?: (Scalars['String'] | null),user_lt?: (Scalars['String'] | null),user_gte?: (Scalars['String'] | null),user_lte?: (Scalars['String'] | null),user_in?: (Scalars['String'][] | null),user_not_in?: (Scalars['String'][] | null),user_contains?: (Scalars['String'] | null),user_not_contains?: (Scalars['String'] | null),user_starts_with?: (Scalars['String'] | null),user_not_starts_with?: (Scalars['String'] | null),user_ends_with?: (Scalars['String'] | null),user_not_ends_with?: (Scalars['String'] | null),reserve?: (Scalars['String'] | null),reserve_not?: (Scalars['String'] | null),reserve_gt?: (Scalars['String'] | null),reserve_lt?: (Scalars['String'] | null),reserve_gte?: (Scalars['String'] | null),reserve_lte?: (Scalars['String'] | null),reserve_in?: (Scalars['String'][] | null),reserve_not_in?: (Scalars['String'][] | null),reserve_contains?: (Scalars['String'] | null),reserve_not_contains?: (Scalars['String'] | null),reserve_starts_with?: (Scalars['String'] | null),reserve_not_starts_with?: (Scalars['String'] | null),reserve_ends_with?: (Scalars['String'] | null),reserve_not_ends_with?: (Scalars['String'] | null),userReserve?: (Scalars['String'] | null),userReserve_not?: (Scalars['String'] | null),userReserve_gt?: (Scalars['String'] | null),userReserve_lt?: (Scalars['String'] | null),userReserve_gte?: (Scalars['String'] | null),userReserve_lte?: (Scalars['String'] | null),userReserve_in?: (Scalars['String'][] | null),userReserve_not_in?: (Scalars['String'][] | null),userReserve_contains?: (Scalars['String'] | null),userReserve_not_contains?: (Scalars['String'] | null),userReserve_starts_with?: (Scalars['String'] | null),userReserve_not_starts_with?: (Scalars['String'] | null),userReserve_ends_with?: (Scalars['String'] | null),userReserve_not_ends_with?: (Scalars['String'] | null),borrowRateFrom?: (Scalars['BigInt'] | null),borrowRateFrom_not?: (Scalars['BigInt'] | null),borrowRateFrom_gt?: (Scalars['BigInt'] | null),borrowRateFrom_lt?: (Scalars['BigInt'] | null),borrowRateFrom_gte?: (Scalars['BigInt'] | null),borrowRateFrom_lte?: (Scalars['BigInt'] | null),borrowRateFrom_in?: (Scalars['BigInt'][] | null),borrowRateFrom_not_in?: (Scalars['BigInt'][] | null),borrowRateTo?: (Scalars['BigInt'] | null),borrowRateTo_not?: (Scalars['BigInt'] | null),borrowRateTo_gt?: (Scalars['BigInt'] | null),borrowRateTo_lt?: (Scalars['BigInt'] | null),borrowRateTo_gte?: (Scalars['BigInt'] | null),borrowRateTo_lte?: (Scalars['BigInt'] | null),borrowRateTo_in?: (Scalars['BigInt'][] | null),borrowRateTo_not_in?: (Scalars['BigInt'][] | null),timestamp?: (Scalars['Int'] | null),timestamp_not?: (Scalars['Int'] | null),timestamp_gt?: (Scalars['Int'] | null),timestamp_lt?: (Scalars['Int'] | null),timestamp_gte?: (Scalars['Int'] | null),timestamp_lte?: (Scalars['Int'] | null),timestamp_in?: (Scalars['Int'][] | null),timestamp_not_in?: (Scalars['Int'][] | null)}

export interface RedeemUnderlyingRequest{
    /**
     * tx hash
     * 
     */
    id?: boolean | number
    pool?: PoolRequest
    user?: UserRequest
    onBehalfOf?: UserRequest
    reserve?: ReserveRequest
    userReserve?: UserReserveRequest
    amount?: boolean | number
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RedeemUnderlying_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),user?: (Scalars['String'] | null),user_not?: (Scalars['String'] | null),user_gt?: (Scalars['String'] | null),user_lt?: (Scalars['String'] | null),user_gte?: (Scalars['String'] | null),user_lte?: (Scalars['String'] | null),user_in?: (Scalars['String'][] | null),user_not_in?: (Scalars['String'][] | null),user_contains?: (Scalars['String'] | null),user_not_contains?: (Scalars['String'] | null),user_starts_with?: (Scalars['String'] | null),user_not_starts_with?: (Scalars['String'] | null),user_ends_with?: (Scalars['String'] | null),user_not_ends_with?: (Scalars['String'] | null),onBehalfOf?: (Scalars['String'] | null),onBehalfOf_not?: (Scalars['String'] | null),onBehalfOf_gt?: (Scalars['String'] | null),onBehalfOf_lt?: (Scalars['String'] | null),onBehalfOf_gte?: (Scalars['String'] | null),onBehalfOf_lte?: (Scalars['String'] | null),onBehalfOf_in?: (Scalars['String'][] | null),onBehalfOf_not_in?: (Scalars['String'][] | null),onBehalfOf_contains?: (Scalars['String'] | null),onBehalfOf_not_contains?: (Scalars['String'] | null),onBehalfOf_starts_with?: (Scalars['String'] | null),onBehalfOf_not_starts_with?: (Scalars['String'] | null),onBehalfOf_ends_with?: (Scalars['String'] | null),onBehalfOf_not_ends_with?: (Scalars['String'] | null),reserve?: (Scalars['String'] | null),reserve_not?: (Scalars['String'] | null),reserve_gt?: (Scalars['String'] | null),reserve_lt?: (Scalars['String'] | null),reserve_gte?: (Scalars['String'] | null),reserve_lte?: (Scalars['String'] | null),reserve_in?: (Scalars['String'][] | null),reserve_not_in?: (Scalars['String'][] | null),reserve_contains?: (Scalars['String'] | null),reserve_not_contains?: (Scalars['String'] | null),reserve_starts_with?: (Scalars['String'] | null),reserve_not_starts_with?: (Scalars['String'] | null),reserve_ends_with?: (Scalars['String'] | null),reserve_not_ends_with?: (Scalars['String'] | null),userReserve?: (Scalars['String'] | null),userReserve_not?: (Scalars['String'] | null),userReserve_gt?: (Scalars['String'] | null),userReserve_lt?: (Scalars['String'] | null),userReserve_gte?: (Scalars['String'] | null),userReserve_lte?: (Scalars['String'] | null),userReserve_in?: (Scalars['String'][] | null),userReserve_not_in?: (Scalars['String'][] | null),userReserve_contains?: (Scalars['String'] | null),userReserve_not_contains?: (Scalars['String'] | null),userReserve_starts_with?: (Scalars['String'] | null),userReserve_not_starts_with?: (Scalars['String'] | null),userReserve_ends_with?: (Scalars['String'] | null),userReserve_not_ends_with?: (Scalars['String'] | null),amount?: (Scalars['BigInt'] | null),amount_not?: (Scalars['BigInt'] | null),amount_gt?: (Scalars['BigInt'] | null),amount_lt?: (Scalars['BigInt'] | null),amount_gte?: (Scalars['BigInt'] | null),amount_lte?: (Scalars['BigInt'] | null),amount_in?: (Scalars['BigInt'][] | null),amount_not_in?: (Scalars['BigInt'][] | null),timestamp?: (Scalars['Int'] | null),timestamp_not?: (Scalars['Int'] | null),timestamp_gt?: (Scalars['Int'] | null),timestamp_lt?: (Scalars['Int'] | null),timestamp_gte?: (Scalars['Int'] | null),timestamp_lte?: (Scalars['Int'] | null),timestamp_in?: (Scalars['Int'][] | null),timestamp_not_in?: (Scalars['Int'][] | null)}

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
    onBehalfOf?: UserRequest
    reserve?: ReserveRequest
    userReserve?: UserReserveRequest
    amount?: boolean | number
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Repay_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),user?: (Scalars['String'] | null),user_not?: (Scalars['String'] | null),user_gt?: (Scalars['String'] | null),user_lt?: (Scalars['String'] | null),user_gte?: (Scalars['String'] | null),user_lte?: (Scalars['String'] | null),user_in?: (Scalars['String'][] | null),user_not_in?: (Scalars['String'][] | null),user_contains?: (Scalars['String'] | null),user_not_contains?: (Scalars['String'] | null),user_starts_with?: (Scalars['String'] | null),user_not_starts_with?: (Scalars['String'] | null),user_ends_with?: (Scalars['String'] | null),user_not_ends_with?: (Scalars['String'] | null),onBehalfOf?: (Scalars['String'] | null),onBehalfOf_not?: (Scalars['String'] | null),onBehalfOf_gt?: (Scalars['String'] | null),onBehalfOf_lt?: (Scalars['String'] | null),onBehalfOf_gte?: (Scalars['String'] | null),onBehalfOf_lte?: (Scalars['String'] | null),onBehalfOf_in?: (Scalars['String'][] | null),onBehalfOf_not_in?: (Scalars['String'][] | null),onBehalfOf_contains?: (Scalars['String'] | null),onBehalfOf_not_contains?: (Scalars['String'] | null),onBehalfOf_starts_with?: (Scalars['String'] | null),onBehalfOf_not_starts_with?: (Scalars['String'] | null),onBehalfOf_ends_with?: (Scalars['String'] | null),onBehalfOf_not_ends_with?: (Scalars['String'] | null),reserve?: (Scalars['String'] | null),reserve_not?: (Scalars['String'] | null),reserve_gt?: (Scalars['String'] | null),reserve_lt?: (Scalars['String'] | null),reserve_gte?: (Scalars['String'] | null),reserve_lte?: (Scalars['String'] | null),reserve_in?: (Scalars['String'][] | null),reserve_not_in?: (Scalars['String'][] | null),reserve_contains?: (Scalars['String'] | null),reserve_not_contains?: (Scalars['String'] | null),reserve_starts_with?: (Scalars['String'] | null),reserve_not_starts_with?: (Scalars['String'] | null),reserve_ends_with?: (Scalars['String'] | null),reserve_not_ends_with?: (Scalars['String'] | null),userReserve?: (Scalars['String'] | null),userReserve_not?: (Scalars['String'] | null),userReserve_gt?: (Scalars['String'] | null),userReserve_lt?: (Scalars['String'] | null),userReserve_gte?: (Scalars['String'] | null),userReserve_lte?: (Scalars['String'] | null),userReserve_in?: (Scalars['String'][] | null),userReserve_not_in?: (Scalars['String'][] | null),userReserve_contains?: (Scalars['String'] | null),userReserve_not_contains?: (Scalars['String'] | null),userReserve_starts_with?: (Scalars['String'] | null),userReserve_not_starts_with?: (Scalars['String'] | null),userReserve_ends_with?: (Scalars['String'] | null),userReserve_not_ends_with?: (Scalars['String'] | null),amount?: (Scalars['BigInt'] | null),amount_not?: (Scalars['BigInt'] | null),amount_gt?: (Scalars['BigInt'] | null),amount_lt?: (Scalars['BigInt'] | null),amount_gte?: (Scalars['BigInt'] | null),amount_lte?: (Scalars['BigInt'] | null),amount_in?: (Scalars['BigInt'][] | null),amount_not_in?: (Scalars['BigInt'][] | null),timestamp?: (Scalars['Int'] | null),timestamp_not?: (Scalars['Int'] | null),timestamp_gt?: (Scalars['Int'] | null),timestamp_lt?: (Scalars['Int'] | null),timestamp_gte?: (Scalars['Int'] | null),timestamp_lte?: (Scalars['Int'] | null),timestamp_in?: (Scalars['Int'][] | null),timestamp_not_in?: (Scalars['Int'][] | null)}

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
    isFrozen?: boolean | number
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
    totalATokenSupply?: boolean | number
    totalLiquidityAsCollateral?: boolean | number
    availableLiquidity?: boolean | number
    totalPrincipalStableDebt?: boolean | number
    totalScaledVariableDebt?: boolean | number
    totalCurrentVariableDebt?: boolean | number
    totalDeposits?: boolean | number
    liquidityRate?: boolean | number
    averageStableRate?: boolean | number
    variableBorrowRate?: boolean | number
    stableBorrowRate?: boolean | number
    liquidityIndex?: boolean | number
    variableBorrowIndex?: boolean | number
    aToken?: ATokenRequest
    vToken?: VTokenRequest
    sToken?: STokenRequest
    reserveFactor?: boolean | number
    lastUpdateTimestamp?: boolean | number
    stableDebtLastUpdateTimestamp?: boolean | number
    aEmissionPerSecond?: boolean | number
    vEmissionPerSecond?: boolean | number
    sEmissionPerSecond?: boolean | number
    aTokenIncentivesIndex?: boolean | number
    vTokenIncentivesIndex?: boolean | number
    sTokenIncentivesIndex?: boolean | number
    aIncentivesLastUpdateTimestamp?: boolean | number
    vIncentivesLastUpdateTimestamp?: boolean | number
    sIncentivesLastUpdateTimestamp?: boolean | number
    lifetimeLiquidity?: boolean | number
    lifetimePrincipalStableDebt?: boolean | number
    lifetimeScaledVariableDebt?: boolean | number
    lifetimeCurrentVariableDebt?: boolean | number
    lifetimeRepayments?: boolean | number
    lifetimeWithdrawals?: boolean | number
    lifetimeBorrows?: boolean | number
    lifetimeLiquidated?: boolean | number
    lifetimeFlashLoans?: boolean | number
    lifetimeFlashLoanPremium?: boolean | number
    lifetimeDepositorsInterestEarned?: boolean | number
    lifetimeReserveFactorAccrued?: boolean | number
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
    isFrozen?: boolean | number
    reserveInterestRateStrategy?: boolean | number
    baseLTVasCollateral?: boolean | number
    reserveLiquidationThreshold?: boolean | number
    reserveLiquidationBonus?: boolean | number
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ReserveConfigurationHistoryItem_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),reserve?: (Scalars['String'] | null),reserve_not?: (Scalars['String'] | null),reserve_gt?: (Scalars['String'] | null),reserve_lt?: (Scalars['String'] | null),reserve_gte?: (Scalars['String'] | null),reserve_lte?: (Scalars['String'] | null),reserve_in?: (Scalars['String'][] | null),reserve_not_in?: (Scalars['String'][] | null),reserve_contains?: (Scalars['String'] | null),reserve_not_contains?: (Scalars['String'] | null),reserve_starts_with?: (Scalars['String'] | null),reserve_not_starts_with?: (Scalars['String'] | null),reserve_ends_with?: (Scalars['String'] | null),reserve_not_ends_with?: (Scalars['String'] | null),usageAsCollateralEnabled?: (Scalars['Boolean'] | null),usageAsCollateralEnabled_not?: (Scalars['Boolean'] | null),usageAsCollateralEnabled_in?: (Scalars['Boolean'][] | null),usageAsCollateralEnabled_not_in?: (Scalars['Boolean'][] | null),borrowingEnabled?: (Scalars['Boolean'] | null),borrowingEnabled_not?: (Scalars['Boolean'] | null),borrowingEnabled_in?: (Scalars['Boolean'][] | null),borrowingEnabled_not_in?: (Scalars['Boolean'][] | null),stableBorrowRateEnabled?: (Scalars['Boolean'] | null),stableBorrowRateEnabled_not?: (Scalars['Boolean'] | null),stableBorrowRateEnabled_in?: (Scalars['Boolean'][] | null),stableBorrowRateEnabled_not_in?: (Scalars['Boolean'][] | null),isActive?: (Scalars['Boolean'] | null),isActive_not?: (Scalars['Boolean'] | null),isActive_in?: (Scalars['Boolean'][] | null),isActive_not_in?: (Scalars['Boolean'][] | null),isFrozen?: (Scalars['Boolean'] | null),isFrozen_not?: (Scalars['Boolean'] | null),isFrozen_in?: (Scalars['Boolean'][] | null),isFrozen_not_in?: (Scalars['Boolean'][] | null),reserveInterestRateStrategy?: (Scalars['Bytes'] | null),reserveInterestRateStrategy_not?: (Scalars['Bytes'] | null),reserveInterestRateStrategy_in?: (Scalars['Bytes'][] | null),reserveInterestRateStrategy_not_in?: (Scalars['Bytes'][] | null),reserveInterestRateStrategy_contains?: (Scalars['Bytes'] | null),reserveInterestRateStrategy_not_contains?: (Scalars['Bytes'] | null),baseLTVasCollateral?: (Scalars['BigInt'] | null),baseLTVasCollateral_not?: (Scalars['BigInt'] | null),baseLTVasCollateral_gt?: (Scalars['BigInt'] | null),baseLTVasCollateral_lt?: (Scalars['BigInt'] | null),baseLTVasCollateral_gte?: (Scalars['BigInt'] | null),baseLTVasCollateral_lte?: (Scalars['BigInt'] | null),baseLTVasCollateral_in?: (Scalars['BigInt'][] | null),baseLTVasCollateral_not_in?: (Scalars['BigInt'][] | null),reserveLiquidationThreshold?: (Scalars['BigInt'] | null),reserveLiquidationThreshold_not?: (Scalars['BigInt'] | null),reserveLiquidationThreshold_gt?: (Scalars['BigInt'] | null),reserveLiquidationThreshold_lt?: (Scalars['BigInt'] | null),reserveLiquidationThreshold_gte?: (Scalars['BigInt'] | null),reserveLiquidationThreshold_lte?: (Scalars['BigInt'] | null),reserveLiquidationThreshold_in?: (Scalars['BigInt'][] | null),reserveLiquidationThreshold_not_in?: (Scalars['BigInt'][] | null),reserveLiquidationBonus?: (Scalars['BigInt'] | null),reserveLiquidationBonus_not?: (Scalars['BigInt'] | null),reserveLiquidationBonus_gt?: (Scalars['BigInt'] | null),reserveLiquidationBonus_lt?: (Scalars['BigInt'] | null),reserveLiquidationBonus_gte?: (Scalars['BigInt'] | null),reserveLiquidationBonus_lte?: (Scalars['BigInt'] | null),reserveLiquidationBonus_in?: (Scalars['BigInt'][] | null),reserveLiquidationBonus_not_in?: (Scalars['BigInt'][] | null),timestamp?: (Scalars['Int'] | null),timestamp_not?: (Scalars['Int'] | null),timestamp_gt?: (Scalars['Int'] | null),timestamp_lt?: (Scalars['Int'] | null),timestamp_gte?: (Scalars['Int'] | null),timestamp_lte?: (Scalars['Int'] | null),timestamp_in?: (Scalars['Int'][] | null),timestamp_not_in?: (Scalars['Int'][] | null)}

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
    totalATokenSupply?: boolean | number
    totalLiquidityAsCollateral?: boolean | number
    availableLiquidity?: boolean | number
    priceInEth?: boolean | number
    priceInUsd?: boolean | number
    timestamp?: boolean | number
    totalScaledVariableDebt?: boolean | number
    totalCurrentVariableDebt?: boolean | number
    totalPrincipalStableDebt?: boolean | number
    lifetimePrincipalStableDebt?: boolean | number
    lifetimeScaledVariableDebt?: boolean | number
    lifetimeCurrentVariableDebt?: boolean | number
    lifetimeLiquidity?: boolean | number
    lifetimeRepayments?: boolean | number
    lifetimeWithdrawals?: boolean | number
    lifetimeBorrows?: boolean | number
    lifetimeLiquidated?: boolean | number
    lifetimeFlashLoans?: boolean | number
    lifetimeFlashLoanPremium?: boolean | number
    lifetimeReserveFactorAccrued?: boolean | number
    lifetimeDepositorsInterestEarned?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ReserveParamsHistoryItem_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),reserve?: (Scalars['String'] | null),reserve_not?: (Scalars['String'] | null),reserve_gt?: (Scalars['String'] | null),reserve_lt?: (Scalars['String'] | null),reserve_gte?: (Scalars['String'] | null),reserve_lte?: (Scalars['String'] | null),reserve_in?: (Scalars['String'][] | null),reserve_not_in?: (Scalars['String'][] | null),reserve_contains?: (Scalars['String'] | null),reserve_not_contains?: (Scalars['String'] | null),reserve_starts_with?: (Scalars['String'] | null),reserve_not_starts_with?: (Scalars['String'] | null),reserve_ends_with?: (Scalars['String'] | null),reserve_not_ends_with?: (Scalars['String'] | null),variableBorrowRate?: (Scalars['BigInt'] | null),variableBorrowRate_not?: (Scalars['BigInt'] | null),variableBorrowRate_gt?: (Scalars['BigInt'] | null),variableBorrowRate_lt?: (Scalars['BigInt'] | null),variableBorrowRate_gte?: (Scalars['BigInt'] | null),variableBorrowRate_lte?: (Scalars['BigInt'] | null),variableBorrowRate_in?: (Scalars['BigInt'][] | null),variableBorrowRate_not_in?: (Scalars['BigInt'][] | null),variableBorrowIndex?: (Scalars['BigInt'] | null),variableBorrowIndex_not?: (Scalars['BigInt'] | null),variableBorrowIndex_gt?: (Scalars['BigInt'] | null),variableBorrowIndex_lt?: (Scalars['BigInt'] | null),variableBorrowIndex_gte?: (Scalars['BigInt'] | null),variableBorrowIndex_lte?: (Scalars['BigInt'] | null),variableBorrowIndex_in?: (Scalars['BigInt'][] | null),variableBorrowIndex_not_in?: (Scalars['BigInt'][] | null),utilizationRate?: (Scalars['BigDecimal'] | null),utilizationRate_not?: (Scalars['BigDecimal'] | null),utilizationRate_gt?: (Scalars['BigDecimal'] | null),utilizationRate_lt?: (Scalars['BigDecimal'] | null),utilizationRate_gte?: (Scalars['BigDecimal'] | null),utilizationRate_lte?: (Scalars['BigDecimal'] | null),utilizationRate_in?: (Scalars['BigDecimal'][] | null),utilizationRate_not_in?: (Scalars['BigDecimal'][] | null),stableBorrowRate?: (Scalars['BigInt'] | null),stableBorrowRate_not?: (Scalars['BigInt'] | null),stableBorrowRate_gt?: (Scalars['BigInt'] | null),stableBorrowRate_lt?: (Scalars['BigInt'] | null),stableBorrowRate_gte?: (Scalars['BigInt'] | null),stableBorrowRate_lte?: (Scalars['BigInt'] | null),stableBorrowRate_in?: (Scalars['BigInt'][] | null),stableBorrowRate_not_in?: (Scalars['BigInt'][] | null),averageStableBorrowRate?: (Scalars['BigInt'] | null),averageStableBorrowRate_not?: (Scalars['BigInt'] | null),averageStableBorrowRate_gt?: (Scalars['BigInt'] | null),averageStableBorrowRate_lt?: (Scalars['BigInt'] | null),averageStableBorrowRate_gte?: (Scalars['BigInt'] | null),averageStableBorrowRate_lte?: (Scalars['BigInt'] | null),averageStableBorrowRate_in?: (Scalars['BigInt'][] | null),averageStableBorrowRate_not_in?: (Scalars['BigInt'][] | null),liquidityIndex?: (Scalars['BigInt'] | null),liquidityIndex_not?: (Scalars['BigInt'] | null),liquidityIndex_gt?: (Scalars['BigInt'] | null),liquidityIndex_lt?: (Scalars['BigInt'] | null),liquidityIndex_gte?: (Scalars['BigInt'] | null),liquidityIndex_lte?: (Scalars['BigInt'] | null),liquidityIndex_in?: (Scalars['BigInt'][] | null),liquidityIndex_not_in?: (Scalars['BigInt'][] | null),liquidityRate?: (Scalars['BigInt'] | null),liquidityRate_not?: (Scalars['BigInt'] | null),liquidityRate_gt?: (Scalars['BigInt'] | null),liquidityRate_lt?: (Scalars['BigInt'] | null),liquidityRate_gte?: (Scalars['BigInt'] | null),liquidityRate_lte?: (Scalars['BigInt'] | null),liquidityRate_in?: (Scalars['BigInt'][] | null),liquidityRate_not_in?: (Scalars['BigInt'][] | null),totalLiquidity?: (Scalars['BigInt'] | null),totalLiquidity_not?: (Scalars['BigInt'] | null),totalLiquidity_gt?: (Scalars['BigInt'] | null),totalLiquidity_lt?: (Scalars['BigInt'] | null),totalLiquidity_gte?: (Scalars['BigInt'] | null),totalLiquidity_lte?: (Scalars['BigInt'] | null),totalLiquidity_in?: (Scalars['BigInt'][] | null),totalLiquidity_not_in?: (Scalars['BigInt'][] | null),totalATokenSupply?: (Scalars['BigInt'] | null),totalATokenSupply_not?: (Scalars['BigInt'] | null),totalATokenSupply_gt?: (Scalars['BigInt'] | null),totalATokenSupply_lt?: (Scalars['BigInt'] | null),totalATokenSupply_gte?: (Scalars['BigInt'] | null),totalATokenSupply_lte?: (Scalars['BigInt'] | null),totalATokenSupply_in?: (Scalars['BigInt'][] | null),totalATokenSupply_not_in?: (Scalars['BigInt'][] | null),totalLiquidityAsCollateral?: (Scalars['BigInt'] | null),totalLiquidityAsCollateral_not?: (Scalars['BigInt'] | null),totalLiquidityAsCollateral_gt?: (Scalars['BigInt'] | null),totalLiquidityAsCollateral_lt?: (Scalars['BigInt'] | null),totalLiquidityAsCollateral_gte?: (Scalars['BigInt'] | null),totalLiquidityAsCollateral_lte?: (Scalars['BigInt'] | null),totalLiquidityAsCollateral_in?: (Scalars['BigInt'][] | null),totalLiquidityAsCollateral_not_in?: (Scalars['BigInt'][] | null),availableLiquidity?: (Scalars['BigInt'] | null),availableLiquidity_not?: (Scalars['BigInt'] | null),availableLiquidity_gt?: (Scalars['BigInt'] | null),availableLiquidity_lt?: (Scalars['BigInt'] | null),availableLiquidity_gte?: (Scalars['BigInt'] | null),availableLiquidity_lte?: (Scalars['BigInt'] | null),availableLiquidity_in?: (Scalars['BigInt'][] | null),availableLiquidity_not_in?: (Scalars['BigInt'][] | null),priceInEth?: (Scalars['BigInt'] | null),priceInEth_not?: (Scalars['BigInt'] | null),priceInEth_gt?: (Scalars['BigInt'] | null),priceInEth_lt?: (Scalars['BigInt'] | null),priceInEth_gte?: (Scalars['BigInt'] | null),priceInEth_lte?: (Scalars['BigInt'] | null),priceInEth_in?: (Scalars['BigInt'][] | null),priceInEth_not_in?: (Scalars['BigInt'][] | null),priceInUsd?: (Scalars['BigDecimal'] | null),priceInUsd_not?: (Scalars['BigDecimal'] | null),priceInUsd_gt?: (Scalars['BigDecimal'] | null),priceInUsd_lt?: (Scalars['BigDecimal'] | null),priceInUsd_gte?: (Scalars['BigDecimal'] | null),priceInUsd_lte?: (Scalars['BigDecimal'] | null),priceInUsd_in?: (Scalars['BigDecimal'][] | null),priceInUsd_not_in?: (Scalars['BigDecimal'][] | null),timestamp?: (Scalars['Int'] | null),timestamp_not?: (Scalars['Int'] | null),timestamp_gt?: (Scalars['Int'] | null),timestamp_lt?: (Scalars['Int'] | null),timestamp_gte?: (Scalars['Int'] | null),timestamp_lte?: (Scalars['Int'] | null),timestamp_in?: (Scalars['Int'][] | null),timestamp_not_in?: (Scalars['Int'][] | null),totalScaledVariableDebt?: (Scalars['BigInt'] | null),totalScaledVariableDebt_not?: (Scalars['BigInt'] | null),totalScaledVariableDebt_gt?: (Scalars['BigInt'] | null),totalScaledVariableDebt_lt?: (Scalars['BigInt'] | null),totalScaledVariableDebt_gte?: (Scalars['BigInt'] | null),totalScaledVariableDebt_lte?: (Scalars['BigInt'] | null),totalScaledVariableDebt_in?: (Scalars['BigInt'][] | null),totalScaledVariableDebt_not_in?: (Scalars['BigInt'][] | null),totalCurrentVariableDebt?: (Scalars['BigInt'] | null),totalCurrentVariableDebt_not?: (Scalars['BigInt'] | null),totalCurrentVariableDebt_gt?: (Scalars['BigInt'] | null),totalCurrentVariableDebt_lt?: (Scalars['BigInt'] | null),totalCurrentVariableDebt_gte?: (Scalars['BigInt'] | null),totalCurrentVariableDebt_lte?: (Scalars['BigInt'] | null),totalCurrentVariableDebt_in?: (Scalars['BigInt'][] | null),totalCurrentVariableDebt_not_in?: (Scalars['BigInt'][] | null),totalPrincipalStableDebt?: (Scalars['BigInt'] | null),totalPrincipalStableDebt_not?: (Scalars['BigInt'] | null),totalPrincipalStableDebt_gt?: (Scalars['BigInt'] | null),totalPrincipalStableDebt_lt?: (Scalars['BigInt'] | null),totalPrincipalStableDebt_gte?: (Scalars['BigInt'] | null),totalPrincipalStableDebt_lte?: (Scalars['BigInt'] | null),totalPrincipalStableDebt_in?: (Scalars['BigInt'][] | null),totalPrincipalStableDebt_not_in?: (Scalars['BigInt'][] | null),lifetimePrincipalStableDebt?: (Scalars['BigInt'] | null),lifetimePrincipalStableDebt_not?: (Scalars['BigInt'] | null),lifetimePrincipalStableDebt_gt?: (Scalars['BigInt'] | null),lifetimePrincipalStableDebt_lt?: (Scalars['BigInt'] | null),lifetimePrincipalStableDebt_gte?: (Scalars['BigInt'] | null),lifetimePrincipalStableDebt_lte?: (Scalars['BigInt'] | null),lifetimePrincipalStableDebt_in?: (Scalars['BigInt'][] | null),lifetimePrincipalStableDebt_not_in?: (Scalars['BigInt'][] | null),lifetimeScaledVariableDebt?: (Scalars['BigInt'] | null),lifetimeScaledVariableDebt_not?: (Scalars['BigInt'] | null),lifetimeScaledVariableDebt_gt?: (Scalars['BigInt'] | null),lifetimeScaledVariableDebt_lt?: (Scalars['BigInt'] | null),lifetimeScaledVariableDebt_gte?: (Scalars['BigInt'] | null),lifetimeScaledVariableDebt_lte?: (Scalars['BigInt'] | null),lifetimeScaledVariableDebt_in?: (Scalars['BigInt'][] | null),lifetimeScaledVariableDebt_not_in?: (Scalars['BigInt'][] | null),lifetimeCurrentVariableDebt?: (Scalars['BigInt'] | null),lifetimeCurrentVariableDebt_not?: (Scalars['BigInt'] | null),lifetimeCurrentVariableDebt_gt?: (Scalars['BigInt'] | null),lifetimeCurrentVariableDebt_lt?: (Scalars['BigInt'] | null),lifetimeCurrentVariableDebt_gte?: (Scalars['BigInt'] | null),lifetimeCurrentVariableDebt_lte?: (Scalars['BigInt'] | null),lifetimeCurrentVariableDebt_in?: (Scalars['BigInt'][] | null),lifetimeCurrentVariableDebt_not_in?: (Scalars['BigInt'][] | null),lifetimeLiquidity?: (Scalars['BigInt'] | null),lifetimeLiquidity_not?: (Scalars['BigInt'] | null),lifetimeLiquidity_gt?: (Scalars['BigInt'] | null),lifetimeLiquidity_lt?: (Scalars['BigInt'] | null),lifetimeLiquidity_gte?: (Scalars['BigInt'] | null),lifetimeLiquidity_lte?: (Scalars['BigInt'] | null),lifetimeLiquidity_in?: (Scalars['BigInt'][] | null),lifetimeLiquidity_not_in?: (Scalars['BigInt'][] | null),lifetimeRepayments?: (Scalars['BigInt'] | null),lifetimeRepayments_not?: (Scalars['BigInt'] | null),lifetimeRepayments_gt?: (Scalars['BigInt'] | null),lifetimeRepayments_lt?: (Scalars['BigInt'] | null),lifetimeRepayments_gte?: (Scalars['BigInt'] | null),lifetimeRepayments_lte?: (Scalars['BigInt'] | null),lifetimeRepayments_in?: (Scalars['BigInt'][] | null),lifetimeRepayments_not_in?: (Scalars['BigInt'][] | null),lifetimeWithdrawals?: (Scalars['BigInt'] | null),lifetimeWithdrawals_not?: (Scalars['BigInt'] | null),lifetimeWithdrawals_gt?: (Scalars['BigInt'] | null),lifetimeWithdrawals_lt?: (Scalars['BigInt'] | null),lifetimeWithdrawals_gte?: (Scalars['BigInt'] | null),lifetimeWithdrawals_lte?: (Scalars['BigInt'] | null),lifetimeWithdrawals_in?: (Scalars['BigInt'][] | null),lifetimeWithdrawals_not_in?: (Scalars['BigInt'][] | null),lifetimeBorrows?: (Scalars['BigInt'] | null),lifetimeBorrows_not?: (Scalars['BigInt'] | null),lifetimeBorrows_gt?: (Scalars['BigInt'] | null),lifetimeBorrows_lt?: (Scalars['BigInt'] | null),lifetimeBorrows_gte?: (Scalars['BigInt'] | null),lifetimeBorrows_lte?: (Scalars['BigInt'] | null),lifetimeBorrows_in?: (Scalars['BigInt'][] | null),lifetimeBorrows_not_in?: (Scalars['BigInt'][] | null),lifetimeLiquidated?: (Scalars['BigInt'] | null),lifetimeLiquidated_not?: (Scalars['BigInt'] | null),lifetimeLiquidated_gt?: (Scalars['BigInt'] | null),lifetimeLiquidated_lt?: (Scalars['BigInt'] | null),lifetimeLiquidated_gte?: (Scalars['BigInt'] | null),lifetimeLiquidated_lte?: (Scalars['BigInt'] | null),lifetimeLiquidated_in?: (Scalars['BigInt'][] | null),lifetimeLiquidated_not_in?: (Scalars['BigInt'][] | null),lifetimeFlashLoans?: (Scalars['BigInt'] | null),lifetimeFlashLoans_not?: (Scalars['BigInt'] | null),lifetimeFlashLoans_gt?: (Scalars['BigInt'] | null),lifetimeFlashLoans_lt?: (Scalars['BigInt'] | null),lifetimeFlashLoans_gte?: (Scalars['BigInt'] | null),lifetimeFlashLoans_lte?: (Scalars['BigInt'] | null),lifetimeFlashLoans_in?: (Scalars['BigInt'][] | null),lifetimeFlashLoans_not_in?: (Scalars['BigInt'][] | null),lifetimeFlashLoanPremium?: (Scalars['BigInt'] | null),lifetimeFlashLoanPremium_not?: (Scalars['BigInt'] | null),lifetimeFlashLoanPremium_gt?: (Scalars['BigInt'] | null),lifetimeFlashLoanPremium_lt?: (Scalars['BigInt'] | null),lifetimeFlashLoanPremium_gte?: (Scalars['BigInt'] | null),lifetimeFlashLoanPremium_lte?: (Scalars['BigInt'] | null),lifetimeFlashLoanPremium_in?: (Scalars['BigInt'][] | null),lifetimeFlashLoanPremium_not_in?: (Scalars['BigInt'][] | null),lifetimeReserveFactorAccrued?: (Scalars['BigInt'] | null),lifetimeReserveFactorAccrued_not?: (Scalars['BigInt'] | null),lifetimeReserveFactorAccrued_gt?: (Scalars['BigInt'] | null),lifetimeReserveFactorAccrued_lt?: (Scalars['BigInt'] | null),lifetimeReserveFactorAccrued_gte?: (Scalars['BigInt'] | null),lifetimeReserveFactorAccrued_lte?: (Scalars['BigInt'] | null),lifetimeReserveFactorAccrued_in?: (Scalars['BigInt'][] | null),lifetimeReserveFactorAccrued_not_in?: (Scalars['BigInt'][] | null),lifetimeDepositorsInterestEarned?: (Scalars['BigInt'] | null),lifetimeDepositorsInterestEarned_not?: (Scalars['BigInt'] | null),lifetimeDepositorsInterestEarned_gt?: (Scalars['BigInt'] | null),lifetimeDepositorsInterestEarned_lt?: (Scalars['BigInt'] | null),lifetimeDepositorsInterestEarned_gte?: (Scalars['BigInt'] | null),lifetimeDepositorsInterestEarned_lte?: (Scalars['BigInt'] | null),lifetimeDepositorsInterestEarned_in?: (Scalars['BigInt'][] | null),lifetimeDepositorsInterestEarned_not_in?: (Scalars['BigInt'][] | null)}

export interface Reserve_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),underlyingAsset?: (Scalars['Bytes'] | null),underlyingAsset_not?: (Scalars['Bytes'] | null),underlyingAsset_in?: (Scalars['Bytes'][] | null),underlyingAsset_not_in?: (Scalars['Bytes'][] | null),underlyingAsset_contains?: (Scalars['Bytes'] | null),underlyingAsset_not_contains?: (Scalars['Bytes'] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),symbol?: (Scalars['String'] | null),symbol_not?: (Scalars['String'] | null),symbol_gt?: (Scalars['String'] | null),symbol_lt?: (Scalars['String'] | null),symbol_gte?: (Scalars['String'] | null),symbol_lte?: (Scalars['String'] | null),symbol_in?: (Scalars['String'][] | null),symbol_not_in?: (Scalars['String'][] | null),symbol_contains?: (Scalars['String'] | null),symbol_not_contains?: (Scalars['String'] | null),symbol_starts_with?: (Scalars['String'] | null),symbol_not_starts_with?: (Scalars['String'] | null),symbol_ends_with?: (Scalars['String'] | null),symbol_not_ends_with?: (Scalars['String'] | null),name?: (Scalars['String'] | null),name_not?: (Scalars['String'] | null),name_gt?: (Scalars['String'] | null),name_lt?: (Scalars['String'] | null),name_gte?: (Scalars['String'] | null),name_lte?: (Scalars['String'] | null),name_in?: (Scalars['String'][] | null),name_not_in?: (Scalars['String'][] | null),name_contains?: (Scalars['String'] | null),name_not_contains?: (Scalars['String'] | null),name_starts_with?: (Scalars['String'] | null),name_not_starts_with?: (Scalars['String'] | null),name_ends_with?: (Scalars['String'] | null),name_not_ends_with?: (Scalars['String'] | null),decimals?: (Scalars['Int'] | null),decimals_not?: (Scalars['Int'] | null),decimals_gt?: (Scalars['Int'] | null),decimals_lt?: (Scalars['Int'] | null),decimals_gte?: (Scalars['Int'] | null),decimals_lte?: (Scalars['Int'] | null),decimals_in?: (Scalars['Int'][] | null),decimals_not_in?: (Scalars['Int'][] | null),usageAsCollateralEnabled?: (Scalars['Boolean'] | null),usageAsCollateralEnabled_not?: (Scalars['Boolean'] | null),usageAsCollateralEnabled_in?: (Scalars['Boolean'][] | null),usageAsCollateralEnabled_not_in?: (Scalars['Boolean'][] | null),borrowingEnabled?: (Scalars['Boolean'] | null),borrowingEnabled_not?: (Scalars['Boolean'] | null),borrowingEnabled_in?: (Scalars['Boolean'][] | null),borrowingEnabled_not_in?: (Scalars['Boolean'][] | null),stableBorrowRateEnabled?: (Scalars['Boolean'] | null),stableBorrowRateEnabled_not?: (Scalars['Boolean'] | null),stableBorrowRateEnabled_in?: (Scalars['Boolean'][] | null),stableBorrowRateEnabled_not_in?: (Scalars['Boolean'][] | null),isActive?: (Scalars['Boolean'] | null),isActive_not?: (Scalars['Boolean'] | null),isActive_in?: (Scalars['Boolean'][] | null),isActive_not_in?: (Scalars['Boolean'][] | null),isFrozen?: (Scalars['Boolean'] | null),isFrozen_not?: (Scalars['Boolean'] | null),isFrozen_in?: (Scalars['Boolean'][] | null),isFrozen_not_in?: (Scalars['Boolean'][] | null),price?: (Scalars['String'] | null),price_not?: (Scalars['String'] | null),price_gt?: (Scalars['String'] | null),price_lt?: (Scalars['String'] | null),price_gte?: (Scalars['String'] | null),price_lte?: (Scalars['String'] | null),price_in?: (Scalars['String'][] | null),price_not_in?: (Scalars['String'][] | null),price_contains?: (Scalars['String'] | null),price_not_contains?: (Scalars['String'] | null),price_starts_with?: (Scalars['String'] | null),price_not_starts_with?: (Scalars['String'] | null),price_ends_with?: (Scalars['String'] | null),price_not_ends_with?: (Scalars['String'] | null),reserveInterestRateStrategy?: (Scalars['Bytes'] | null),reserveInterestRateStrategy_not?: (Scalars['Bytes'] | null),reserveInterestRateStrategy_in?: (Scalars['Bytes'][] | null),reserveInterestRateStrategy_not_in?: (Scalars['Bytes'][] | null),reserveInterestRateStrategy_contains?: (Scalars['Bytes'] | null),reserveInterestRateStrategy_not_contains?: (Scalars['Bytes'] | null),optimalUtilisationRate?: (Scalars['BigInt'] | null),optimalUtilisationRate_not?: (Scalars['BigInt'] | null),optimalUtilisationRate_gt?: (Scalars['BigInt'] | null),optimalUtilisationRate_lt?: (Scalars['BigInt'] | null),optimalUtilisationRate_gte?: (Scalars['BigInt'] | null),optimalUtilisationRate_lte?: (Scalars['BigInt'] | null),optimalUtilisationRate_in?: (Scalars['BigInt'][] | null),optimalUtilisationRate_not_in?: (Scalars['BigInt'][] | null),variableRateSlope1?: (Scalars['BigInt'] | null),variableRateSlope1_not?: (Scalars['BigInt'] | null),variableRateSlope1_gt?: (Scalars['BigInt'] | null),variableRateSlope1_lt?: (Scalars['BigInt'] | null),variableRateSlope1_gte?: (Scalars['BigInt'] | null),variableRateSlope1_lte?: (Scalars['BigInt'] | null),variableRateSlope1_in?: (Scalars['BigInt'][] | null),variableRateSlope1_not_in?: (Scalars['BigInt'][] | null),variableRateSlope2?: (Scalars['BigInt'] | null),variableRateSlope2_not?: (Scalars['BigInt'] | null),variableRateSlope2_gt?: (Scalars['BigInt'] | null),variableRateSlope2_lt?: (Scalars['BigInt'] | null),variableRateSlope2_gte?: (Scalars['BigInt'] | null),variableRateSlope2_lte?: (Scalars['BigInt'] | null),variableRateSlope2_in?: (Scalars['BigInt'][] | null),variableRateSlope2_not_in?: (Scalars['BigInt'][] | null),stableRateSlope1?: (Scalars['BigInt'] | null),stableRateSlope1_not?: (Scalars['BigInt'] | null),stableRateSlope1_gt?: (Scalars['BigInt'] | null),stableRateSlope1_lt?: (Scalars['BigInt'] | null),stableRateSlope1_gte?: (Scalars['BigInt'] | null),stableRateSlope1_lte?: (Scalars['BigInt'] | null),stableRateSlope1_in?: (Scalars['BigInt'][] | null),stableRateSlope1_not_in?: (Scalars['BigInt'][] | null),stableRateSlope2?: (Scalars['BigInt'] | null),stableRateSlope2_not?: (Scalars['BigInt'] | null),stableRateSlope2_gt?: (Scalars['BigInt'] | null),stableRateSlope2_lt?: (Scalars['BigInt'] | null),stableRateSlope2_gte?: (Scalars['BigInt'] | null),stableRateSlope2_lte?: (Scalars['BigInt'] | null),stableRateSlope2_in?: (Scalars['BigInt'][] | null),stableRateSlope2_not_in?: (Scalars['BigInt'][] | null),baseVariableBorrowRate?: (Scalars['BigInt'] | null),baseVariableBorrowRate_not?: (Scalars['BigInt'] | null),baseVariableBorrowRate_gt?: (Scalars['BigInt'] | null),baseVariableBorrowRate_lt?: (Scalars['BigInt'] | null),baseVariableBorrowRate_gte?: (Scalars['BigInt'] | null),baseVariableBorrowRate_lte?: (Scalars['BigInt'] | null),baseVariableBorrowRate_in?: (Scalars['BigInt'][] | null),baseVariableBorrowRate_not_in?: (Scalars['BigInt'][] | null),baseLTVasCollateral?: (Scalars['BigInt'] | null),baseLTVasCollateral_not?: (Scalars['BigInt'] | null),baseLTVasCollateral_gt?: (Scalars['BigInt'] | null),baseLTVasCollateral_lt?: (Scalars['BigInt'] | null),baseLTVasCollateral_gte?: (Scalars['BigInt'] | null),baseLTVasCollateral_lte?: (Scalars['BigInt'] | null),baseLTVasCollateral_in?: (Scalars['BigInt'][] | null),baseLTVasCollateral_not_in?: (Scalars['BigInt'][] | null),reserveLiquidationThreshold?: (Scalars['BigInt'] | null),reserveLiquidationThreshold_not?: (Scalars['BigInt'] | null),reserveLiquidationThreshold_gt?: (Scalars['BigInt'] | null),reserveLiquidationThreshold_lt?: (Scalars['BigInt'] | null),reserveLiquidationThreshold_gte?: (Scalars['BigInt'] | null),reserveLiquidationThreshold_lte?: (Scalars['BigInt'] | null),reserveLiquidationThreshold_in?: (Scalars['BigInt'][] | null),reserveLiquidationThreshold_not_in?: (Scalars['BigInt'][] | null),reserveLiquidationBonus?: (Scalars['BigInt'] | null),reserveLiquidationBonus_not?: (Scalars['BigInt'] | null),reserveLiquidationBonus_gt?: (Scalars['BigInt'] | null),reserveLiquidationBonus_lt?: (Scalars['BigInt'] | null),reserveLiquidationBonus_gte?: (Scalars['BigInt'] | null),reserveLiquidationBonus_lte?: (Scalars['BigInt'] | null),reserveLiquidationBonus_in?: (Scalars['BigInt'][] | null),reserveLiquidationBonus_not_in?: (Scalars['BigInt'][] | null),utilizationRate?: (Scalars['BigDecimal'] | null),utilizationRate_not?: (Scalars['BigDecimal'] | null),utilizationRate_gt?: (Scalars['BigDecimal'] | null),utilizationRate_lt?: (Scalars['BigDecimal'] | null),utilizationRate_gte?: (Scalars['BigDecimal'] | null),utilizationRate_lte?: (Scalars['BigDecimal'] | null),utilizationRate_in?: (Scalars['BigDecimal'][] | null),utilizationRate_not_in?: (Scalars['BigDecimal'][] | null),totalLiquidity?: (Scalars['BigInt'] | null),totalLiquidity_not?: (Scalars['BigInt'] | null),totalLiquidity_gt?: (Scalars['BigInt'] | null),totalLiquidity_lt?: (Scalars['BigInt'] | null),totalLiquidity_gte?: (Scalars['BigInt'] | null),totalLiquidity_lte?: (Scalars['BigInt'] | null),totalLiquidity_in?: (Scalars['BigInt'][] | null),totalLiquidity_not_in?: (Scalars['BigInt'][] | null),totalATokenSupply?: (Scalars['BigInt'] | null),totalATokenSupply_not?: (Scalars['BigInt'] | null),totalATokenSupply_gt?: (Scalars['BigInt'] | null),totalATokenSupply_lt?: (Scalars['BigInt'] | null),totalATokenSupply_gte?: (Scalars['BigInt'] | null),totalATokenSupply_lte?: (Scalars['BigInt'] | null),totalATokenSupply_in?: (Scalars['BigInt'][] | null),totalATokenSupply_not_in?: (Scalars['BigInt'][] | null),totalLiquidityAsCollateral?: (Scalars['BigInt'] | null),totalLiquidityAsCollateral_not?: (Scalars['BigInt'] | null),totalLiquidityAsCollateral_gt?: (Scalars['BigInt'] | null),totalLiquidityAsCollateral_lt?: (Scalars['BigInt'] | null),totalLiquidityAsCollateral_gte?: (Scalars['BigInt'] | null),totalLiquidityAsCollateral_lte?: (Scalars['BigInt'] | null),totalLiquidityAsCollateral_in?: (Scalars['BigInt'][] | null),totalLiquidityAsCollateral_not_in?: (Scalars['BigInt'][] | null),availableLiquidity?: (Scalars['BigInt'] | null),availableLiquidity_not?: (Scalars['BigInt'] | null),availableLiquidity_gt?: (Scalars['BigInt'] | null),availableLiquidity_lt?: (Scalars['BigInt'] | null),availableLiquidity_gte?: (Scalars['BigInt'] | null),availableLiquidity_lte?: (Scalars['BigInt'] | null),availableLiquidity_in?: (Scalars['BigInt'][] | null),availableLiquidity_not_in?: (Scalars['BigInt'][] | null),totalPrincipalStableDebt?: (Scalars['BigInt'] | null),totalPrincipalStableDebt_not?: (Scalars['BigInt'] | null),totalPrincipalStableDebt_gt?: (Scalars['BigInt'] | null),totalPrincipalStableDebt_lt?: (Scalars['BigInt'] | null),totalPrincipalStableDebt_gte?: (Scalars['BigInt'] | null),totalPrincipalStableDebt_lte?: (Scalars['BigInt'] | null),totalPrincipalStableDebt_in?: (Scalars['BigInt'][] | null),totalPrincipalStableDebt_not_in?: (Scalars['BigInt'][] | null),totalScaledVariableDebt?: (Scalars['BigInt'] | null),totalScaledVariableDebt_not?: (Scalars['BigInt'] | null),totalScaledVariableDebt_gt?: (Scalars['BigInt'] | null),totalScaledVariableDebt_lt?: (Scalars['BigInt'] | null),totalScaledVariableDebt_gte?: (Scalars['BigInt'] | null),totalScaledVariableDebt_lte?: (Scalars['BigInt'] | null),totalScaledVariableDebt_in?: (Scalars['BigInt'][] | null),totalScaledVariableDebt_not_in?: (Scalars['BigInt'][] | null),totalCurrentVariableDebt?: (Scalars['BigInt'] | null),totalCurrentVariableDebt_not?: (Scalars['BigInt'] | null),totalCurrentVariableDebt_gt?: (Scalars['BigInt'] | null),totalCurrentVariableDebt_lt?: (Scalars['BigInt'] | null),totalCurrentVariableDebt_gte?: (Scalars['BigInt'] | null),totalCurrentVariableDebt_lte?: (Scalars['BigInt'] | null),totalCurrentVariableDebt_in?: (Scalars['BigInt'][] | null),totalCurrentVariableDebt_not_in?: (Scalars['BigInt'][] | null),totalDeposits?: (Scalars['BigInt'] | null),totalDeposits_not?: (Scalars['BigInt'] | null),totalDeposits_gt?: (Scalars['BigInt'] | null),totalDeposits_lt?: (Scalars['BigInt'] | null),totalDeposits_gte?: (Scalars['BigInt'] | null),totalDeposits_lte?: (Scalars['BigInt'] | null),totalDeposits_in?: (Scalars['BigInt'][] | null),totalDeposits_not_in?: (Scalars['BigInt'][] | null),liquidityRate?: (Scalars['BigInt'] | null),liquidityRate_not?: (Scalars['BigInt'] | null),liquidityRate_gt?: (Scalars['BigInt'] | null),liquidityRate_lt?: (Scalars['BigInt'] | null),liquidityRate_gte?: (Scalars['BigInt'] | null),liquidityRate_lte?: (Scalars['BigInt'] | null),liquidityRate_in?: (Scalars['BigInt'][] | null),liquidityRate_not_in?: (Scalars['BigInt'][] | null),averageStableRate?: (Scalars['BigInt'] | null),averageStableRate_not?: (Scalars['BigInt'] | null),averageStableRate_gt?: (Scalars['BigInt'] | null),averageStableRate_lt?: (Scalars['BigInt'] | null),averageStableRate_gte?: (Scalars['BigInt'] | null),averageStableRate_lte?: (Scalars['BigInt'] | null),averageStableRate_in?: (Scalars['BigInt'][] | null),averageStableRate_not_in?: (Scalars['BigInt'][] | null),variableBorrowRate?: (Scalars['BigInt'] | null),variableBorrowRate_not?: (Scalars['BigInt'] | null),variableBorrowRate_gt?: (Scalars['BigInt'] | null),variableBorrowRate_lt?: (Scalars['BigInt'] | null),variableBorrowRate_gte?: (Scalars['BigInt'] | null),variableBorrowRate_lte?: (Scalars['BigInt'] | null),variableBorrowRate_in?: (Scalars['BigInt'][] | null),variableBorrowRate_not_in?: (Scalars['BigInt'][] | null),stableBorrowRate?: (Scalars['BigInt'] | null),stableBorrowRate_not?: (Scalars['BigInt'] | null),stableBorrowRate_gt?: (Scalars['BigInt'] | null),stableBorrowRate_lt?: (Scalars['BigInt'] | null),stableBorrowRate_gte?: (Scalars['BigInt'] | null),stableBorrowRate_lte?: (Scalars['BigInt'] | null),stableBorrowRate_in?: (Scalars['BigInt'][] | null),stableBorrowRate_not_in?: (Scalars['BigInt'][] | null),liquidityIndex?: (Scalars['BigInt'] | null),liquidityIndex_not?: (Scalars['BigInt'] | null),liquidityIndex_gt?: (Scalars['BigInt'] | null),liquidityIndex_lt?: (Scalars['BigInt'] | null),liquidityIndex_gte?: (Scalars['BigInt'] | null),liquidityIndex_lte?: (Scalars['BigInt'] | null),liquidityIndex_in?: (Scalars['BigInt'][] | null),liquidityIndex_not_in?: (Scalars['BigInt'][] | null),variableBorrowIndex?: (Scalars['BigInt'] | null),variableBorrowIndex_not?: (Scalars['BigInt'] | null),variableBorrowIndex_gt?: (Scalars['BigInt'] | null),variableBorrowIndex_lt?: (Scalars['BigInt'] | null),variableBorrowIndex_gte?: (Scalars['BigInt'] | null),variableBorrowIndex_lte?: (Scalars['BigInt'] | null),variableBorrowIndex_in?: (Scalars['BigInt'][] | null),variableBorrowIndex_not_in?: (Scalars['BigInt'][] | null),aToken?: (Scalars['String'] | null),aToken_not?: (Scalars['String'] | null),aToken_gt?: (Scalars['String'] | null),aToken_lt?: (Scalars['String'] | null),aToken_gte?: (Scalars['String'] | null),aToken_lte?: (Scalars['String'] | null),aToken_in?: (Scalars['String'][] | null),aToken_not_in?: (Scalars['String'][] | null),aToken_contains?: (Scalars['String'] | null),aToken_not_contains?: (Scalars['String'] | null),aToken_starts_with?: (Scalars['String'] | null),aToken_not_starts_with?: (Scalars['String'] | null),aToken_ends_with?: (Scalars['String'] | null),aToken_not_ends_with?: (Scalars['String'] | null),vToken?: (Scalars['String'] | null),vToken_not?: (Scalars['String'] | null),vToken_gt?: (Scalars['String'] | null),vToken_lt?: (Scalars['String'] | null),vToken_gte?: (Scalars['String'] | null),vToken_lte?: (Scalars['String'] | null),vToken_in?: (Scalars['String'][] | null),vToken_not_in?: (Scalars['String'][] | null),vToken_contains?: (Scalars['String'] | null),vToken_not_contains?: (Scalars['String'] | null),vToken_starts_with?: (Scalars['String'] | null),vToken_not_starts_with?: (Scalars['String'] | null),vToken_ends_with?: (Scalars['String'] | null),vToken_not_ends_with?: (Scalars['String'] | null),sToken?: (Scalars['String'] | null),sToken_not?: (Scalars['String'] | null),sToken_gt?: (Scalars['String'] | null),sToken_lt?: (Scalars['String'] | null),sToken_gte?: (Scalars['String'] | null),sToken_lte?: (Scalars['String'] | null),sToken_in?: (Scalars['String'][] | null),sToken_not_in?: (Scalars['String'][] | null),sToken_contains?: (Scalars['String'] | null),sToken_not_contains?: (Scalars['String'] | null),sToken_starts_with?: (Scalars['String'] | null),sToken_not_starts_with?: (Scalars['String'] | null),sToken_ends_with?: (Scalars['String'] | null),sToken_not_ends_with?: (Scalars['String'] | null),reserveFactor?: (Scalars['BigInt'] | null),reserveFactor_not?: (Scalars['BigInt'] | null),reserveFactor_gt?: (Scalars['BigInt'] | null),reserveFactor_lt?: (Scalars['BigInt'] | null),reserveFactor_gte?: (Scalars['BigInt'] | null),reserveFactor_lte?: (Scalars['BigInt'] | null),reserveFactor_in?: (Scalars['BigInt'][] | null),reserveFactor_not_in?: (Scalars['BigInt'][] | null),lastUpdateTimestamp?: (Scalars['Int'] | null),lastUpdateTimestamp_not?: (Scalars['Int'] | null),lastUpdateTimestamp_gt?: (Scalars['Int'] | null),lastUpdateTimestamp_lt?: (Scalars['Int'] | null),lastUpdateTimestamp_gte?: (Scalars['Int'] | null),lastUpdateTimestamp_lte?: (Scalars['Int'] | null),lastUpdateTimestamp_in?: (Scalars['Int'][] | null),lastUpdateTimestamp_not_in?: (Scalars['Int'][] | null),stableDebtLastUpdateTimestamp?: (Scalars['Int'] | null),stableDebtLastUpdateTimestamp_not?: (Scalars['Int'] | null),stableDebtLastUpdateTimestamp_gt?: (Scalars['Int'] | null),stableDebtLastUpdateTimestamp_lt?: (Scalars['Int'] | null),stableDebtLastUpdateTimestamp_gte?: (Scalars['Int'] | null),stableDebtLastUpdateTimestamp_lte?: (Scalars['Int'] | null),stableDebtLastUpdateTimestamp_in?: (Scalars['Int'][] | null),stableDebtLastUpdateTimestamp_not_in?: (Scalars['Int'][] | null),aEmissionPerSecond?: (Scalars['BigInt'] | null),aEmissionPerSecond_not?: (Scalars['BigInt'] | null),aEmissionPerSecond_gt?: (Scalars['BigInt'] | null),aEmissionPerSecond_lt?: (Scalars['BigInt'] | null),aEmissionPerSecond_gte?: (Scalars['BigInt'] | null),aEmissionPerSecond_lte?: (Scalars['BigInt'] | null),aEmissionPerSecond_in?: (Scalars['BigInt'][] | null),aEmissionPerSecond_not_in?: (Scalars['BigInt'][] | null),vEmissionPerSecond?: (Scalars['BigInt'] | null),vEmissionPerSecond_not?: (Scalars['BigInt'] | null),vEmissionPerSecond_gt?: (Scalars['BigInt'] | null),vEmissionPerSecond_lt?: (Scalars['BigInt'] | null),vEmissionPerSecond_gte?: (Scalars['BigInt'] | null),vEmissionPerSecond_lte?: (Scalars['BigInt'] | null),vEmissionPerSecond_in?: (Scalars['BigInt'][] | null),vEmissionPerSecond_not_in?: (Scalars['BigInt'][] | null),sEmissionPerSecond?: (Scalars['BigInt'] | null),sEmissionPerSecond_not?: (Scalars['BigInt'] | null),sEmissionPerSecond_gt?: (Scalars['BigInt'] | null),sEmissionPerSecond_lt?: (Scalars['BigInt'] | null),sEmissionPerSecond_gte?: (Scalars['BigInt'] | null),sEmissionPerSecond_lte?: (Scalars['BigInt'] | null),sEmissionPerSecond_in?: (Scalars['BigInt'][] | null),sEmissionPerSecond_not_in?: (Scalars['BigInt'][] | null),aTokenIncentivesIndex?: (Scalars['BigInt'] | null),aTokenIncentivesIndex_not?: (Scalars['BigInt'] | null),aTokenIncentivesIndex_gt?: (Scalars['BigInt'] | null),aTokenIncentivesIndex_lt?: (Scalars['BigInt'] | null),aTokenIncentivesIndex_gte?: (Scalars['BigInt'] | null),aTokenIncentivesIndex_lte?: (Scalars['BigInt'] | null),aTokenIncentivesIndex_in?: (Scalars['BigInt'][] | null),aTokenIncentivesIndex_not_in?: (Scalars['BigInt'][] | null),vTokenIncentivesIndex?: (Scalars['BigInt'] | null),vTokenIncentivesIndex_not?: (Scalars['BigInt'] | null),vTokenIncentivesIndex_gt?: (Scalars['BigInt'] | null),vTokenIncentivesIndex_lt?: (Scalars['BigInt'] | null),vTokenIncentivesIndex_gte?: (Scalars['BigInt'] | null),vTokenIncentivesIndex_lte?: (Scalars['BigInt'] | null),vTokenIncentivesIndex_in?: (Scalars['BigInt'][] | null),vTokenIncentivesIndex_not_in?: (Scalars['BigInt'][] | null),sTokenIncentivesIndex?: (Scalars['BigInt'] | null),sTokenIncentivesIndex_not?: (Scalars['BigInt'] | null),sTokenIncentivesIndex_gt?: (Scalars['BigInt'] | null),sTokenIncentivesIndex_lt?: (Scalars['BigInt'] | null),sTokenIncentivesIndex_gte?: (Scalars['BigInt'] | null),sTokenIncentivesIndex_lte?: (Scalars['BigInt'] | null),sTokenIncentivesIndex_in?: (Scalars['BigInt'][] | null),sTokenIncentivesIndex_not_in?: (Scalars['BigInt'][] | null),aIncentivesLastUpdateTimestamp?: (Scalars['Int'] | null),aIncentivesLastUpdateTimestamp_not?: (Scalars['Int'] | null),aIncentivesLastUpdateTimestamp_gt?: (Scalars['Int'] | null),aIncentivesLastUpdateTimestamp_lt?: (Scalars['Int'] | null),aIncentivesLastUpdateTimestamp_gte?: (Scalars['Int'] | null),aIncentivesLastUpdateTimestamp_lte?: (Scalars['Int'] | null),aIncentivesLastUpdateTimestamp_in?: (Scalars['Int'][] | null),aIncentivesLastUpdateTimestamp_not_in?: (Scalars['Int'][] | null),vIncentivesLastUpdateTimestamp?: (Scalars['Int'] | null),vIncentivesLastUpdateTimestamp_not?: (Scalars['Int'] | null),vIncentivesLastUpdateTimestamp_gt?: (Scalars['Int'] | null),vIncentivesLastUpdateTimestamp_lt?: (Scalars['Int'] | null),vIncentivesLastUpdateTimestamp_gte?: (Scalars['Int'] | null),vIncentivesLastUpdateTimestamp_lte?: (Scalars['Int'] | null),vIncentivesLastUpdateTimestamp_in?: (Scalars['Int'][] | null),vIncentivesLastUpdateTimestamp_not_in?: (Scalars['Int'][] | null),sIncentivesLastUpdateTimestamp?: (Scalars['Int'] | null),sIncentivesLastUpdateTimestamp_not?: (Scalars['Int'] | null),sIncentivesLastUpdateTimestamp_gt?: (Scalars['Int'] | null),sIncentivesLastUpdateTimestamp_lt?: (Scalars['Int'] | null),sIncentivesLastUpdateTimestamp_gte?: (Scalars['Int'] | null),sIncentivesLastUpdateTimestamp_lte?: (Scalars['Int'] | null),sIncentivesLastUpdateTimestamp_in?: (Scalars['Int'][] | null),sIncentivesLastUpdateTimestamp_not_in?: (Scalars['Int'][] | null),lifetimeLiquidity?: (Scalars['BigInt'] | null),lifetimeLiquidity_not?: (Scalars['BigInt'] | null),lifetimeLiquidity_gt?: (Scalars['BigInt'] | null),lifetimeLiquidity_lt?: (Scalars['BigInt'] | null),lifetimeLiquidity_gte?: (Scalars['BigInt'] | null),lifetimeLiquidity_lte?: (Scalars['BigInt'] | null),lifetimeLiquidity_in?: (Scalars['BigInt'][] | null),lifetimeLiquidity_not_in?: (Scalars['BigInt'][] | null),lifetimePrincipalStableDebt?: (Scalars['BigInt'] | null),lifetimePrincipalStableDebt_not?: (Scalars['BigInt'] | null),lifetimePrincipalStableDebt_gt?: (Scalars['BigInt'] | null),lifetimePrincipalStableDebt_lt?: (Scalars['BigInt'] | null),lifetimePrincipalStableDebt_gte?: (Scalars['BigInt'] | null),lifetimePrincipalStableDebt_lte?: (Scalars['BigInt'] | null),lifetimePrincipalStableDebt_in?: (Scalars['BigInt'][] | null),lifetimePrincipalStableDebt_not_in?: (Scalars['BigInt'][] | null),lifetimeScaledVariableDebt?: (Scalars['BigInt'] | null),lifetimeScaledVariableDebt_not?: (Scalars['BigInt'] | null),lifetimeScaledVariableDebt_gt?: (Scalars['BigInt'] | null),lifetimeScaledVariableDebt_lt?: (Scalars['BigInt'] | null),lifetimeScaledVariableDebt_gte?: (Scalars['BigInt'] | null),lifetimeScaledVariableDebt_lte?: (Scalars['BigInt'] | null),lifetimeScaledVariableDebt_in?: (Scalars['BigInt'][] | null),lifetimeScaledVariableDebt_not_in?: (Scalars['BigInt'][] | null),lifetimeCurrentVariableDebt?: (Scalars['BigInt'] | null),lifetimeCurrentVariableDebt_not?: (Scalars['BigInt'] | null),lifetimeCurrentVariableDebt_gt?: (Scalars['BigInt'] | null),lifetimeCurrentVariableDebt_lt?: (Scalars['BigInt'] | null),lifetimeCurrentVariableDebt_gte?: (Scalars['BigInt'] | null),lifetimeCurrentVariableDebt_lte?: (Scalars['BigInt'] | null),lifetimeCurrentVariableDebt_in?: (Scalars['BigInt'][] | null),lifetimeCurrentVariableDebt_not_in?: (Scalars['BigInt'][] | null),lifetimeRepayments?: (Scalars['BigInt'] | null),lifetimeRepayments_not?: (Scalars['BigInt'] | null),lifetimeRepayments_gt?: (Scalars['BigInt'] | null),lifetimeRepayments_lt?: (Scalars['BigInt'] | null),lifetimeRepayments_gte?: (Scalars['BigInt'] | null),lifetimeRepayments_lte?: (Scalars['BigInt'] | null),lifetimeRepayments_in?: (Scalars['BigInt'][] | null),lifetimeRepayments_not_in?: (Scalars['BigInt'][] | null),lifetimeWithdrawals?: (Scalars['BigInt'] | null),lifetimeWithdrawals_not?: (Scalars['BigInt'] | null),lifetimeWithdrawals_gt?: (Scalars['BigInt'] | null),lifetimeWithdrawals_lt?: (Scalars['BigInt'] | null),lifetimeWithdrawals_gte?: (Scalars['BigInt'] | null),lifetimeWithdrawals_lte?: (Scalars['BigInt'] | null),lifetimeWithdrawals_in?: (Scalars['BigInt'][] | null),lifetimeWithdrawals_not_in?: (Scalars['BigInt'][] | null),lifetimeBorrows?: (Scalars['BigInt'] | null),lifetimeBorrows_not?: (Scalars['BigInt'] | null),lifetimeBorrows_gt?: (Scalars['BigInt'] | null),lifetimeBorrows_lt?: (Scalars['BigInt'] | null),lifetimeBorrows_gte?: (Scalars['BigInt'] | null),lifetimeBorrows_lte?: (Scalars['BigInt'] | null),lifetimeBorrows_in?: (Scalars['BigInt'][] | null),lifetimeBorrows_not_in?: (Scalars['BigInt'][] | null),lifetimeLiquidated?: (Scalars['BigInt'] | null),lifetimeLiquidated_not?: (Scalars['BigInt'] | null),lifetimeLiquidated_gt?: (Scalars['BigInt'] | null),lifetimeLiquidated_lt?: (Scalars['BigInt'] | null),lifetimeLiquidated_gte?: (Scalars['BigInt'] | null),lifetimeLiquidated_lte?: (Scalars['BigInt'] | null),lifetimeLiquidated_in?: (Scalars['BigInt'][] | null),lifetimeLiquidated_not_in?: (Scalars['BigInt'][] | null),lifetimeFlashLoans?: (Scalars['BigInt'] | null),lifetimeFlashLoans_not?: (Scalars['BigInt'] | null),lifetimeFlashLoans_gt?: (Scalars['BigInt'] | null),lifetimeFlashLoans_lt?: (Scalars['BigInt'] | null),lifetimeFlashLoans_gte?: (Scalars['BigInt'] | null),lifetimeFlashLoans_lte?: (Scalars['BigInt'] | null),lifetimeFlashLoans_in?: (Scalars['BigInt'][] | null),lifetimeFlashLoans_not_in?: (Scalars['BigInt'][] | null),lifetimeFlashLoanPremium?: (Scalars['BigInt'] | null),lifetimeFlashLoanPremium_not?: (Scalars['BigInt'] | null),lifetimeFlashLoanPremium_gt?: (Scalars['BigInt'] | null),lifetimeFlashLoanPremium_lt?: (Scalars['BigInt'] | null),lifetimeFlashLoanPremium_gte?: (Scalars['BigInt'] | null),lifetimeFlashLoanPremium_lte?: (Scalars['BigInt'] | null),lifetimeFlashLoanPremium_in?: (Scalars['BigInt'][] | null),lifetimeFlashLoanPremium_not_in?: (Scalars['BigInt'][] | null),lifetimeDepositorsInterestEarned?: (Scalars['BigInt'] | null),lifetimeDepositorsInterestEarned_not?: (Scalars['BigInt'] | null),lifetimeDepositorsInterestEarned_gt?: (Scalars['BigInt'] | null),lifetimeDepositorsInterestEarned_lt?: (Scalars['BigInt'] | null),lifetimeDepositorsInterestEarned_gte?: (Scalars['BigInt'] | null),lifetimeDepositorsInterestEarned_lte?: (Scalars['BigInt'] | null),lifetimeDepositorsInterestEarned_in?: (Scalars['BigInt'][] | null),lifetimeDepositorsInterestEarned_not_in?: (Scalars['BigInt'][] | null),lifetimeReserveFactorAccrued?: (Scalars['BigInt'] | null),lifetimeReserveFactorAccrued_not?: (Scalars['BigInt'] | null),lifetimeReserveFactorAccrued_gt?: (Scalars['BigInt'] | null),lifetimeReserveFactorAccrued_lt?: (Scalars['BigInt'] | null),lifetimeReserveFactorAccrued_gte?: (Scalars['BigInt'] | null),lifetimeReserveFactorAccrued_lte?: (Scalars['BigInt'] | null),lifetimeReserveFactorAccrued_in?: (Scalars['BigInt'][] | null),lifetimeReserveFactorAccrued_not_in?: (Scalars['BigInt'][] | null)}

export interface STokenRequest{
    /**
     * SToken address
     * 
     */
    id?: boolean | number
    pool?: PoolRequest
    underlyingAssetAddress?: boolean | number
    underlyingAssetDecimals?: boolean | number
    tokenContractImpl?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface STokenBalanceHistoryItemRequest{
    /**
     * userReserve + txHash
     * 
     */
    id?: boolean | number
    userReserve?: UserReserveRequest
    principalStableDebt?: boolean | number
    currentStableDebt?: boolean | number
    timestamp?: boolean | number
    avgStableBorrowRate?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface STokenBalanceHistoryItem_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),userReserve?: (Scalars['String'] | null),userReserve_not?: (Scalars['String'] | null),userReserve_gt?: (Scalars['String'] | null),userReserve_lt?: (Scalars['String'] | null),userReserve_gte?: (Scalars['String'] | null),userReserve_lte?: (Scalars['String'] | null),userReserve_in?: (Scalars['String'][] | null),userReserve_not_in?: (Scalars['String'][] | null),userReserve_contains?: (Scalars['String'] | null),userReserve_not_contains?: (Scalars['String'] | null),userReserve_starts_with?: (Scalars['String'] | null),userReserve_not_starts_with?: (Scalars['String'] | null),userReserve_ends_with?: (Scalars['String'] | null),userReserve_not_ends_with?: (Scalars['String'] | null),principalStableDebt?: (Scalars['BigInt'] | null),principalStableDebt_not?: (Scalars['BigInt'] | null),principalStableDebt_gt?: (Scalars['BigInt'] | null),principalStableDebt_lt?: (Scalars['BigInt'] | null),principalStableDebt_gte?: (Scalars['BigInt'] | null),principalStableDebt_lte?: (Scalars['BigInt'] | null),principalStableDebt_in?: (Scalars['BigInt'][] | null),principalStableDebt_not_in?: (Scalars['BigInt'][] | null),currentStableDebt?: (Scalars['BigInt'] | null),currentStableDebt_not?: (Scalars['BigInt'] | null),currentStableDebt_gt?: (Scalars['BigInt'] | null),currentStableDebt_lt?: (Scalars['BigInt'] | null),currentStableDebt_gte?: (Scalars['BigInt'] | null),currentStableDebt_lte?: (Scalars['BigInt'] | null),currentStableDebt_in?: (Scalars['BigInt'][] | null),currentStableDebt_not_in?: (Scalars['BigInt'][] | null),timestamp?: (Scalars['Int'] | null),timestamp_not?: (Scalars['Int'] | null),timestamp_gt?: (Scalars['Int'] | null),timestamp_lt?: (Scalars['Int'] | null),timestamp_gte?: (Scalars['Int'] | null),timestamp_lte?: (Scalars['Int'] | null),timestamp_in?: (Scalars['Int'][] | null),timestamp_not_in?: (Scalars['Int'][] | null),avgStableBorrowRate?: (Scalars['BigInt'] | null),avgStableBorrowRate_not?: (Scalars['BigInt'] | null),avgStableBorrowRate_gt?: (Scalars['BigInt'] | null),avgStableBorrowRate_lt?: (Scalars['BigInt'] | null),avgStableBorrowRate_gte?: (Scalars['BigInt'] | null),avgStableBorrowRate_lte?: (Scalars['BigInt'] | null),avgStableBorrowRate_in?: (Scalars['BigInt'][] | null),avgStableBorrowRate_not_in?: (Scalars['BigInt'][] | null)}

export interface SToken_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),underlyingAssetAddress?: (Scalars['Bytes'] | null),underlyingAssetAddress_not?: (Scalars['Bytes'] | null),underlyingAssetAddress_in?: (Scalars['Bytes'][] | null),underlyingAssetAddress_not_in?: (Scalars['Bytes'][] | null),underlyingAssetAddress_contains?: (Scalars['Bytes'] | null),underlyingAssetAddress_not_contains?: (Scalars['Bytes'] | null),underlyingAssetDecimals?: (Scalars['Int'] | null),underlyingAssetDecimals_not?: (Scalars['Int'] | null),underlyingAssetDecimals_gt?: (Scalars['Int'] | null),underlyingAssetDecimals_lt?: (Scalars['Int'] | null),underlyingAssetDecimals_gte?: (Scalars['Int'] | null),underlyingAssetDecimals_lte?: (Scalars['Int'] | null),underlyingAssetDecimals_in?: (Scalars['Int'][] | null),underlyingAssetDecimals_not_in?: (Scalars['Int'][] | null),tokenContractImpl?: (Scalars['Bytes'] | null),tokenContractImpl_not?: (Scalars['Bytes'] | null),tokenContractImpl_in?: (Scalars['Bytes'][] | null),tokenContractImpl_not_in?: (Scalars['Bytes'][] | null),tokenContractImpl_contains?: (Scalars['Bytes'] | null),tokenContractImpl_not_contains?: (Scalars['Bytes'] | null)}

export interface StableDebtTokenRequest{
    /**
     * StableDebtToken address
     * 
     */
    id?: boolean | number
    pool?: PoolRequest
    underlyingAssetAddress?: boolean | number
    underlyingAssetDecimals?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StableDebtToken_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),underlyingAssetAddress?: (Scalars['Bytes'] | null),underlyingAssetAddress_not?: (Scalars['Bytes'] | null),underlyingAssetAddress_in?: (Scalars['Bytes'][] | null),underlyingAssetAddress_not_in?: (Scalars['Bytes'][] | null),underlyingAssetAddress_contains?: (Scalars['Bytes'] | null),underlyingAssetAddress_not_contains?: (Scalars['Bytes'] | null),underlyingAssetDecimals?: (Scalars['Int'] | null),underlyingAssetDecimals_not?: (Scalars['Int'] | null),underlyingAssetDecimals_gt?: (Scalars['Int'] | null),underlyingAssetDecimals_lt?: (Scalars['Int'] | null),underlyingAssetDecimals_gte?: (Scalars['Int'] | null),underlyingAssetDecimals_lte?: (Scalars['Int'] | null),underlyingAssetDecimals_in?: (Scalars['Int'][] | null),underlyingAssetDecimals_not_in?: (Scalars['Int'][] | null)}

export interface StableTokenDelegatedAllowanceRequest{
    /**
     * stable + fromuser address + touser address+ reserve address
     * 
     */
    id?: boolean | number
    fromUser?: UserRequest
    toUser?: UserRequest
    amountAllowed?: boolean | number
    userReserve?: UserReserveRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StableTokenDelegatedAllowance_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),fromUser?: (Scalars['String'] | null),fromUser_not?: (Scalars['String'] | null),fromUser_gt?: (Scalars['String'] | null),fromUser_lt?: (Scalars['String'] | null),fromUser_gte?: (Scalars['String'] | null),fromUser_lte?: (Scalars['String'] | null),fromUser_in?: (Scalars['String'][] | null),fromUser_not_in?: (Scalars['String'][] | null),fromUser_contains?: (Scalars['String'] | null),fromUser_not_contains?: (Scalars['String'] | null),fromUser_starts_with?: (Scalars['String'] | null),fromUser_not_starts_with?: (Scalars['String'] | null),fromUser_ends_with?: (Scalars['String'] | null),fromUser_not_ends_with?: (Scalars['String'] | null),toUser?: (Scalars['String'] | null),toUser_not?: (Scalars['String'] | null),toUser_gt?: (Scalars['String'] | null),toUser_lt?: (Scalars['String'] | null),toUser_gte?: (Scalars['String'] | null),toUser_lte?: (Scalars['String'] | null),toUser_in?: (Scalars['String'][] | null),toUser_not_in?: (Scalars['String'][] | null),toUser_contains?: (Scalars['String'] | null),toUser_not_contains?: (Scalars['String'] | null),toUser_starts_with?: (Scalars['String'] | null),toUser_not_starts_with?: (Scalars['String'] | null),toUser_ends_with?: (Scalars['String'] | null),toUser_not_ends_with?: (Scalars['String'] | null),amountAllowed?: (Scalars['BigInt'] | null),amountAllowed_not?: (Scalars['BigInt'] | null),amountAllowed_gt?: (Scalars['BigInt'] | null),amountAllowed_lt?: (Scalars['BigInt'] | null),amountAllowed_gte?: (Scalars['BigInt'] | null),amountAllowed_lte?: (Scalars['BigInt'] | null),amountAllowed_in?: (Scalars['BigInt'][] | null),amountAllowed_not_in?: (Scalars['BigInt'][] | null),userReserve?: (Scalars['String'] | null),userReserve_not?: (Scalars['String'] | null),userReserve_gt?: (Scalars['String'] | null),userReserve_lt?: (Scalars['String'] | null),userReserve_gte?: (Scalars['String'] | null),userReserve_lte?: (Scalars['String'] | null),userReserve_in?: (Scalars['String'][] | null),userReserve_not_in?: (Scalars['String'][] | null),userReserve_contains?: (Scalars['String'] | null),userReserve_not_contains?: (Scalars['String'] | null),userReserve_starts_with?: (Scalars['String'] | null),userReserve_not_starts_with?: (Scalars['String'] | null),userReserve_ends_with?: (Scalars['String'] | null),userReserve_not_ends_with?: (Scalars['String'] | null)}

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
    chainlinkENS?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ChainlinkENSRequest]
    chainlinkENSs?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ChainlinkENS_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ChainlinkENS_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ChainlinkENSRequest]
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
    stoken?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},STokenRequest]
    stokens?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (SToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (SToken_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},STokenRequest]
    vtoken?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},VTokenRequest]
    vtokens?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VToken_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},VTokenRequest]
    atoken?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ATokenRequest]
    atokens?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (AToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (AToken_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ATokenRequest]
    variableDebtToken?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},VariableDebtTokenRequest]
    variableDebtTokens?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VariableDebtToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VariableDebtToken_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},VariableDebtTokenRequest]
    stableDebtToken?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},StableDebtTokenRequest]
    stableDebtTokens?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StableDebtToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StableDebtToken_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},StableDebtTokenRequest]
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
    incentivesController?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},IncentivesControllerRequest]
    incentivesControllers?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (IncentivesController_orderBy | null),orderDirection?: (OrderDirection | null),where?: (IncentivesController_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},IncentivesControllerRequest]
    incentivizedAction?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},IncentivizedActionRequest]
    incentivizedActions?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (IncentivizedAction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (IncentivizedAction_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},IncentivizedActionRequest]
    claimIncentiveCall?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ClaimIncentiveCallRequest]
    claimIncentiveCalls?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ClaimIncentiveCall_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ClaimIncentiveCall_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ClaimIncentiveCallRequest]
    mapAssetPool?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},MapAssetPoolRequest]
    mapAssetPools?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (MapAssetPool_orderBy | null),orderDirection?: (OrderDirection | null),where?: (MapAssetPool_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},MapAssetPoolRequest]
    reserve?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ReserveRequest]
    reserves?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Reserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Reserve_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ReserveRequest]
    wethreserve?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},WETHReserveRequest]
    wethreserves?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (WETHReserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (WETHReserve_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},WETHReserveRequest]
    atokenBalanceHistoryItem?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ATokenBalanceHistoryItemRequest]
    atokenBalanceHistoryItems?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ATokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ATokenBalanceHistoryItem_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},ATokenBalanceHistoryItemRequest]
    vtokenBalanceHistoryItem?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},VTokenBalanceHistoryItemRequest]
    vtokenBalanceHistoryItems?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VTokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VTokenBalanceHistoryItem_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},VTokenBalanceHistoryItemRequest]
    stokenBalanceHistoryItem?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},STokenBalanceHistoryItemRequest]
    stokenBalanceHistoryItems?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (STokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (STokenBalanceHistoryItem_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},STokenBalanceHistoryItemRequest]
    stableTokenDelegatedAllowance?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},StableTokenDelegatedAllowanceRequest]
    stableTokenDelegatedAllowances?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StableTokenDelegatedAllowance_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StableTokenDelegatedAllowance_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},StableTokenDelegatedAllowanceRequest]
    variableTokenDelegatedAllowance?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},VariableTokenDelegatedAllowanceRequest]
    variableTokenDelegatedAllowances?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VariableTokenDelegatedAllowance_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VariableTokenDelegatedAllowance_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},VariableTokenDelegatedAllowanceRequest]
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
    swapHistory?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},SwapHistoryRequest]
    swapHistories?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (SwapHistory_orderBy | null),orderDirection?: (OrderDirection | null),where?: (SwapHistory_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},SwapHistoryRequest]
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
    borrowRateModeFrom?: boolean | number
    borrowRateModeTo?: boolean | number
    stableBorrowRate?: boolean | number
    variableBorrowRate?: boolean | number
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SwapHistoryRequest{
    /**
     * tx hash
     * 
     */
    id?: boolean | number
    fromAsset?: boolean | number
    toAsset?: boolean | number
    fromAmount?: boolean | number
    receivedAmount?: boolean | number
    swapType?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SwapHistory_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),fromAsset?: (Scalars['String'] | null),fromAsset_not?: (Scalars['String'] | null),fromAsset_gt?: (Scalars['String'] | null),fromAsset_lt?: (Scalars['String'] | null),fromAsset_gte?: (Scalars['String'] | null),fromAsset_lte?: (Scalars['String'] | null),fromAsset_in?: (Scalars['String'][] | null),fromAsset_not_in?: (Scalars['String'][] | null),fromAsset_contains?: (Scalars['String'] | null),fromAsset_not_contains?: (Scalars['String'] | null),fromAsset_starts_with?: (Scalars['String'] | null),fromAsset_not_starts_with?: (Scalars['String'] | null),fromAsset_ends_with?: (Scalars['String'] | null),fromAsset_not_ends_with?: (Scalars['String'] | null),toAsset?: (Scalars['String'] | null),toAsset_not?: (Scalars['String'] | null),toAsset_gt?: (Scalars['String'] | null),toAsset_lt?: (Scalars['String'] | null),toAsset_gte?: (Scalars['String'] | null),toAsset_lte?: (Scalars['String'] | null),toAsset_in?: (Scalars['String'][] | null),toAsset_not_in?: (Scalars['String'][] | null),toAsset_contains?: (Scalars['String'] | null),toAsset_not_contains?: (Scalars['String'] | null),toAsset_starts_with?: (Scalars['String'] | null),toAsset_not_starts_with?: (Scalars['String'] | null),toAsset_ends_with?: (Scalars['String'] | null),toAsset_not_ends_with?: (Scalars['String'] | null),fromAmount?: (Scalars['BigInt'] | null),fromAmount_not?: (Scalars['BigInt'] | null),fromAmount_gt?: (Scalars['BigInt'] | null),fromAmount_lt?: (Scalars['BigInt'] | null),fromAmount_gte?: (Scalars['BigInt'] | null),fromAmount_lte?: (Scalars['BigInt'] | null),fromAmount_in?: (Scalars['BigInt'][] | null),fromAmount_not_in?: (Scalars['BigInt'][] | null),receivedAmount?: (Scalars['BigInt'] | null),receivedAmount_not?: (Scalars['BigInt'] | null),receivedAmount_gt?: (Scalars['BigInt'] | null),receivedAmount_lt?: (Scalars['BigInt'] | null),receivedAmount_gte?: (Scalars['BigInt'] | null),receivedAmount_lte?: (Scalars['BigInt'] | null),receivedAmount_in?: (Scalars['BigInt'][] | null),receivedAmount_not_in?: (Scalars['BigInt'][] | null),swapType?: (Scalars['String'] | null),swapType_not?: (Scalars['String'] | null),swapType_gt?: (Scalars['String'] | null),swapType_lt?: (Scalars['String'] | null),swapType_gte?: (Scalars['String'] | null),swapType_lte?: (Scalars['String'] | null),swapType_in?: (Scalars['String'][] | null),swapType_not_in?: (Scalars['String'][] | null),swapType_contains?: (Scalars['String'] | null),swapType_not_contains?: (Scalars['String'] | null),swapType_starts_with?: (Scalars['String'] | null),swapType_not_starts_with?: (Scalars['String'] | null),swapType_ends_with?: (Scalars['String'] | null),swapType_not_ends_with?: (Scalars['String'] | null)}

export interface Swap_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),user?: (Scalars['String'] | null),user_not?: (Scalars['String'] | null),user_gt?: (Scalars['String'] | null),user_lt?: (Scalars['String'] | null),user_gte?: (Scalars['String'] | null),user_lte?: (Scalars['String'] | null),user_in?: (Scalars['String'][] | null),user_not_in?: (Scalars['String'][] | null),user_contains?: (Scalars['String'] | null),user_not_contains?: (Scalars['String'] | null),user_starts_with?: (Scalars['String'] | null),user_not_starts_with?: (Scalars['String'] | null),user_ends_with?: (Scalars['String'] | null),user_not_ends_with?: (Scalars['String'] | null),reserve?: (Scalars['String'] | null),reserve_not?: (Scalars['String'] | null),reserve_gt?: (Scalars['String'] | null),reserve_lt?: (Scalars['String'] | null),reserve_gte?: (Scalars['String'] | null),reserve_lte?: (Scalars['String'] | null),reserve_in?: (Scalars['String'][] | null),reserve_not_in?: (Scalars['String'][] | null),reserve_contains?: (Scalars['String'] | null),reserve_not_contains?: (Scalars['String'] | null),reserve_starts_with?: (Scalars['String'] | null),reserve_not_starts_with?: (Scalars['String'] | null),reserve_ends_with?: (Scalars['String'] | null),reserve_not_ends_with?: (Scalars['String'] | null),userReserve?: (Scalars['String'] | null),userReserve_not?: (Scalars['String'] | null),userReserve_gt?: (Scalars['String'] | null),userReserve_lt?: (Scalars['String'] | null),userReserve_gte?: (Scalars['String'] | null),userReserve_lte?: (Scalars['String'] | null),userReserve_in?: (Scalars['String'][] | null),userReserve_not_in?: (Scalars['String'][] | null),userReserve_contains?: (Scalars['String'] | null),userReserve_not_contains?: (Scalars['String'] | null),userReserve_starts_with?: (Scalars['String'] | null),userReserve_not_starts_with?: (Scalars['String'] | null),userReserve_ends_with?: (Scalars['String'] | null),userReserve_not_ends_with?: (Scalars['String'] | null),borrowRateModeFrom?: (BorrowRateMode | null),borrowRateModeFrom_not?: (BorrowRateMode | null),borrowRateModeTo?: (BorrowRateMode | null),borrowRateModeTo_not?: (BorrowRateMode | null),stableBorrowRate?: (Scalars['BigInt'] | null),stableBorrowRate_not?: (Scalars['BigInt'] | null),stableBorrowRate_gt?: (Scalars['BigInt'] | null),stableBorrowRate_lt?: (Scalars['BigInt'] | null),stableBorrowRate_gte?: (Scalars['BigInt'] | null),stableBorrowRate_lte?: (Scalars['BigInt'] | null),stableBorrowRate_in?: (Scalars['BigInt'][] | null),stableBorrowRate_not_in?: (Scalars['BigInt'][] | null),variableBorrowRate?: (Scalars['BigInt'] | null),variableBorrowRate_not?: (Scalars['BigInt'] | null),variableBorrowRate_gt?: (Scalars['BigInt'] | null),variableBorrowRate_lt?: (Scalars['BigInt'] | null),variableBorrowRate_gte?: (Scalars['BigInt'] | null),variableBorrowRate_lte?: (Scalars['BigInt'] | null),variableBorrowRate_in?: (Scalars['BigInt'][] | null),variableBorrowRate_not_in?: (Scalars['BigInt'][] | null),timestamp?: (Scalars['Int'] | null),timestamp_not?: (Scalars['Int'] | null),timestamp_gt?: (Scalars['Int'] | null),timestamp_lt?: (Scalars['Int'] | null),timestamp_gte?: (Scalars['Int'] | null),timestamp_lte?: (Scalars['Int'] | null),timestamp_in?: (Scalars['Int'][] | null),timestamp_not_in?: (Scalars['Int'][] | null)}

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
    unclaimedRewards?: boolean | number
    lifetimeRewards?: boolean | number
    incentivesLastUpdated?: boolean | number
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
    incentivizedActions?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (IncentivizedAction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (IncentivizedAction_filter | null)},IncentivizedActionRequest] | IncentivizedActionRequest
    claimIncentives?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ClaimIncentiveCall_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ClaimIncentiveCall_filter | null)},ClaimIncentiveCallRequest] | ClaimIncentiveCallRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

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
    scaledATokenBalance?: boolean | number
    currentATokenBalance?: boolean | number
    scaledVariableDebt?: boolean | number
    currentVariableDebt?: boolean | number
    principalStableDebt?: boolean | number
    currentStableDebt?: boolean | number
    currentTotalDebt?: boolean | number
    stableBorrowRate?: boolean | number
    oldStableBorrowRate?: boolean | number
    liquidityRate?: boolean | number
    stableBorrowLastUpdateTimestamp?: boolean | number
    variableBorrowIndex?: boolean | number
    aTokenincentivesUserIndex?: boolean | number
    vTokenincentivesUserIndex?: boolean | number
    sTokenincentivesUserIndex?: boolean | number
    aIncentivesLastUpdateTimestamp?: boolean | number
    vIncentivesLastUpdateTimestamp?: boolean | number
    sIncentivesLastUpdateTimestamp?: boolean | number
    /**
     * Amount in currency units included as fee
     * 
     */
    lastUpdateTimestamp?: boolean | number
    stableTokenDelegatedAllowances?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StableTokenDelegatedAllowance_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StableTokenDelegatedAllowance_filter | null)},StableTokenDelegatedAllowanceRequest] | StableTokenDelegatedAllowanceRequest
    variableTokenDelegatedAllowances?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VariableTokenDelegatedAllowance_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VariableTokenDelegatedAllowance_filter | null)},VariableTokenDelegatedAllowanceRequest] | VariableTokenDelegatedAllowanceRequest
    aTokenBalanceHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ATokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ATokenBalanceHistoryItem_filter | null)},ATokenBalanceHistoryItemRequest] | ATokenBalanceHistoryItemRequest
    vTokenBalanceHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VTokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VTokenBalanceHistoryItem_filter | null)},VTokenBalanceHistoryItemRequest] | VTokenBalanceHistoryItemRequest
    sTokenBalanceHistory?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (STokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (STokenBalanceHistoryItem_filter | null)},STokenBalanceHistoryItemRequest] | STokenBalanceHistoryItemRequest
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

export interface UserReserve_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),reserve?: (Scalars['String'] | null),reserve_not?: (Scalars['String'] | null),reserve_gt?: (Scalars['String'] | null),reserve_lt?: (Scalars['String'] | null),reserve_gte?: (Scalars['String'] | null),reserve_lte?: (Scalars['String'] | null),reserve_in?: (Scalars['String'][] | null),reserve_not_in?: (Scalars['String'][] | null),reserve_contains?: (Scalars['String'] | null),reserve_not_contains?: (Scalars['String'] | null),reserve_starts_with?: (Scalars['String'] | null),reserve_not_starts_with?: (Scalars['String'] | null),reserve_ends_with?: (Scalars['String'] | null),reserve_not_ends_with?: (Scalars['String'] | null),user?: (Scalars['String'] | null),user_not?: (Scalars['String'] | null),user_gt?: (Scalars['String'] | null),user_lt?: (Scalars['String'] | null),user_gte?: (Scalars['String'] | null),user_lte?: (Scalars['String'] | null),user_in?: (Scalars['String'][] | null),user_not_in?: (Scalars['String'][] | null),user_contains?: (Scalars['String'] | null),user_not_contains?: (Scalars['String'] | null),user_starts_with?: (Scalars['String'] | null),user_not_starts_with?: (Scalars['String'] | null),user_ends_with?: (Scalars['String'] | null),user_not_ends_with?: (Scalars['String'] | null),usageAsCollateralEnabledOnUser?: (Scalars['Boolean'] | null),usageAsCollateralEnabledOnUser_not?: (Scalars['Boolean'] | null),usageAsCollateralEnabledOnUser_in?: (Scalars['Boolean'][] | null),usageAsCollateralEnabledOnUser_not_in?: (Scalars['Boolean'][] | null),scaledATokenBalance?: (Scalars['BigInt'] | null),scaledATokenBalance_not?: (Scalars['BigInt'] | null),scaledATokenBalance_gt?: (Scalars['BigInt'] | null),scaledATokenBalance_lt?: (Scalars['BigInt'] | null),scaledATokenBalance_gte?: (Scalars['BigInt'] | null),scaledATokenBalance_lte?: (Scalars['BigInt'] | null),scaledATokenBalance_in?: (Scalars['BigInt'][] | null),scaledATokenBalance_not_in?: (Scalars['BigInt'][] | null),currentATokenBalance?: (Scalars['BigInt'] | null),currentATokenBalance_not?: (Scalars['BigInt'] | null),currentATokenBalance_gt?: (Scalars['BigInt'] | null),currentATokenBalance_lt?: (Scalars['BigInt'] | null),currentATokenBalance_gte?: (Scalars['BigInt'] | null),currentATokenBalance_lte?: (Scalars['BigInt'] | null),currentATokenBalance_in?: (Scalars['BigInt'][] | null),currentATokenBalance_not_in?: (Scalars['BigInt'][] | null),scaledVariableDebt?: (Scalars['BigInt'] | null),scaledVariableDebt_not?: (Scalars['BigInt'] | null),scaledVariableDebt_gt?: (Scalars['BigInt'] | null),scaledVariableDebt_lt?: (Scalars['BigInt'] | null),scaledVariableDebt_gte?: (Scalars['BigInt'] | null),scaledVariableDebt_lte?: (Scalars['BigInt'] | null),scaledVariableDebt_in?: (Scalars['BigInt'][] | null),scaledVariableDebt_not_in?: (Scalars['BigInt'][] | null),currentVariableDebt?: (Scalars['BigInt'] | null),currentVariableDebt_not?: (Scalars['BigInt'] | null),currentVariableDebt_gt?: (Scalars['BigInt'] | null),currentVariableDebt_lt?: (Scalars['BigInt'] | null),currentVariableDebt_gte?: (Scalars['BigInt'] | null),currentVariableDebt_lte?: (Scalars['BigInt'] | null),currentVariableDebt_in?: (Scalars['BigInt'][] | null),currentVariableDebt_not_in?: (Scalars['BigInt'][] | null),principalStableDebt?: (Scalars['BigInt'] | null),principalStableDebt_not?: (Scalars['BigInt'] | null),principalStableDebt_gt?: (Scalars['BigInt'] | null),principalStableDebt_lt?: (Scalars['BigInt'] | null),principalStableDebt_gte?: (Scalars['BigInt'] | null),principalStableDebt_lte?: (Scalars['BigInt'] | null),principalStableDebt_in?: (Scalars['BigInt'][] | null),principalStableDebt_not_in?: (Scalars['BigInt'][] | null),currentStableDebt?: (Scalars['BigInt'] | null),currentStableDebt_not?: (Scalars['BigInt'] | null),currentStableDebt_gt?: (Scalars['BigInt'] | null),currentStableDebt_lt?: (Scalars['BigInt'] | null),currentStableDebt_gte?: (Scalars['BigInt'] | null),currentStableDebt_lte?: (Scalars['BigInt'] | null),currentStableDebt_in?: (Scalars['BigInt'][] | null),currentStableDebt_not_in?: (Scalars['BigInt'][] | null),currentTotalDebt?: (Scalars['BigInt'] | null),currentTotalDebt_not?: (Scalars['BigInt'] | null),currentTotalDebt_gt?: (Scalars['BigInt'] | null),currentTotalDebt_lt?: (Scalars['BigInt'] | null),currentTotalDebt_gte?: (Scalars['BigInt'] | null),currentTotalDebt_lte?: (Scalars['BigInt'] | null),currentTotalDebt_in?: (Scalars['BigInt'][] | null),currentTotalDebt_not_in?: (Scalars['BigInt'][] | null),stableBorrowRate?: (Scalars['BigInt'] | null),stableBorrowRate_not?: (Scalars['BigInt'] | null),stableBorrowRate_gt?: (Scalars['BigInt'] | null),stableBorrowRate_lt?: (Scalars['BigInt'] | null),stableBorrowRate_gte?: (Scalars['BigInt'] | null),stableBorrowRate_lte?: (Scalars['BigInt'] | null),stableBorrowRate_in?: (Scalars['BigInt'][] | null),stableBorrowRate_not_in?: (Scalars['BigInt'][] | null),oldStableBorrowRate?: (Scalars['BigInt'] | null),oldStableBorrowRate_not?: (Scalars['BigInt'] | null),oldStableBorrowRate_gt?: (Scalars['BigInt'] | null),oldStableBorrowRate_lt?: (Scalars['BigInt'] | null),oldStableBorrowRate_gte?: (Scalars['BigInt'] | null),oldStableBorrowRate_lte?: (Scalars['BigInt'] | null),oldStableBorrowRate_in?: (Scalars['BigInt'][] | null),oldStableBorrowRate_not_in?: (Scalars['BigInt'][] | null),liquidityRate?: (Scalars['BigInt'] | null),liquidityRate_not?: (Scalars['BigInt'] | null),liquidityRate_gt?: (Scalars['BigInt'] | null),liquidityRate_lt?: (Scalars['BigInt'] | null),liquidityRate_gte?: (Scalars['BigInt'] | null),liquidityRate_lte?: (Scalars['BigInt'] | null),liquidityRate_in?: (Scalars['BigInt'][] | null),liquidityRate_not_in?: (Scalars['BigInt'][] | null),stableBorrowLastUpdateTimestamp?: (Scalars['Int'] | null),stableBorrowLastUpdateTimestamp_not?: (Scalars['Int'] | null),stableBorrowLastUpdateTimestamp_gt?: (Scalars['Int'] | null),stableBorrowLastUpdateTimestamp_lt?: (Scalars['Int'] | null),stableBorrowLastUpdateTimestamp_gte?: (Scalars['Int'] | null),stableBorrowLastUpdateTimestamp_lte?: (Scalars['Int'] | null),stableBorrowLastUpdateTimestamp_in?: (Scalars['Int'][] | null),stableBorrowLastUpdateTimestamp_not_in?: (Scalars['Int'][] | null),variableBorrowIndex?: (Scalars['BigInt'] | null),variableBorrowIndex_not?: (Scalars['BigInt'] | null),variableBorrowIndex_gt?: (Scalars['BigInt'] | null),variableBorrowIndex_lt?: (Scalars['BigInt'] | null),variableBorrowIndex_gte?: (Scalars['BigInt'] | null),variableBorrowIndex_lte?: (Scalars['BigInt'] | null),variableBorrowIndex_in?: (Scalars['BigInt'][] | null),variableBorrowIndex_not_in?: (Scalars['BigInt'][] | null),aTokenincentivesUserIndex?: (Scalars['BigInt'] | null),aTokenincentivesUserIndex_not?: (Scalars['BigInt'] | null),aTokenincentivesUserIndex_gt?: (Scalars['BigInt'] | null),aTokenincentivesUserIndex_lt?: (Scalars['BigInt'] | null),aTokenincentivesUserIndex_gte?: (Scalars['BigInt'] | null),aTokenincentivesUserIndex_lte?: (Scalars['BigInt'] | null),aTokenincentivesUserIndex_in?: (Scalars['BigInt'][] | null),aTokenincentivesUserIndex_not_in?: (Scalars['BigInt'][] | null),vTokenincentivesUserIndex?: (Scalars['BigInt'] | null),vTokenincentivesUserIndex_not?: (Scalars['BigInt'] | null),vTokenincentivesUserIndex_gt?: (Scalars['BigInt'] | null),vTokenincentivesUserIndex_lt?: (Scalars['BigInt'] | null),vTokenincentivesUserIndex_gte?: (Scalars['BigInt'] | null),vTokenincentivesUserIndex_lte?: (Scalars['BigInt'] | null),vTokenincentivesUserIndex_in?: (Scalars['BigInt'][] | null),vTokenincentivesUserIndex_not_in?: (Scalars['BigInt'][] | null),sTokenincentivesUserIndex?: (Scalars['BigInt'] | null),sTokenincentivesUserIndex_not?: (Scalars['BigInt'] | null),sTokenincentivesUserIndex_gt?: (Scalars['BigInt'] | null),sTokenincentivesUserIndex_lt?: (Scalars['BigInt'] | null),sTokenincentivesUserIndex_gte?: (Scalars['BigInt'] | null),sTokenincentivesUserIndex_lte?: (Scalars['BigInt'] | null),sTokenincentivesUserIndex_in?: (Scalars['BigInt'][] | null),sTokenincentivesUserIndex_not_in?: (Scalars['BigInt'][] | null),aIncentivesLastUpdateTimestamp?: (Scalars['Int'] | null),aIncentivesLastUpdateTimestamp_not?: (Scalars['Int'] | null),aIncentivesLastUpdateTimestamp_gt?: (Scalars['Int'] | null),aIncentivesLastUpdateTimestamp_lt?: (Scalars['Int'] | null),aIncentivesLastUpdateTimestamp_gte?: (Scalars['Int'] | null),aIncentivesLastUpdateTimestamp_lte?: (Scalars['Int'] | null),aIncentivesLastUpdateTimestamp_in?: (Scalars['Int'][] | null),aIncentivesLastUpdateTimestamp_not_in?: (Scalars['Int'][] | null),vIncentivesLastUpdateTimestamp?: (Scalars['Int'] | null),vIncentivesLastUpdateTimestamp_not?: (Scalars['Int'] | null),vIncentivesLastUpdateTimestamp_gt?: (Scalars['Int'] | null),vIncentivesLastUpdateTimestamp_lt?: (Scalars['Int'] | null),vIncentivesLastUpdateTimestamp_gte?: (Scalars['Int'] | null),vIncentivesLastUpdateTimestamp_lte?: (Scalars['Int'] | null),vIncentivesLastUpdateTimestamp_in?: (Scalars['Int'][] | null),vIncentivesLastUpdateTimestamp_not_in?: (Scalars['Int'][] | null),sIncentivesLastUpdateTimestamp?: (Scalars['Int'] | null),sIncentivesLastUpdateTimestamp_not?: (Scalars['Int'] | null),sIncentivesLastUpdateTimestamp_gt?: (Scalars['Int'] | null),sIncentivesLastUpdateTimestamp_lt?: (Scalars['Int'] | null),sIncentivesLastUpdateTimestamp_gte?: (Scalars['Int'] | null),sIncentivesLastUpdateTimestamp_lte?: (Scalars['Int'] | null),sIncentivesLastUpdateTimestamp_in?: (Scalars['Int'][] | null),sIncentivesLastUpdateTimestamp_not_in?: (Scalars['Int'][] | null),lastUpdateTimestamp?: (Scalars['Int'] | null),lastUpdateTimestamp_not?: (Scalars['Int'] | null),lastUpdateTimestamp_gt?: (Scalars['Int'] | null),lastUpdateTimestamp_lt?: (Scalars['Int'] | null),lastUpdateTimestamp_gte?: (Scalars['Int'] | null),lastUpdateTimestamp_lte?: (Scalars['Int'] | null),lastUpdateTimestamp_in?: (Scalars['Int'][] | null),lastUpdateTimestamp_not_in?: (Scalars['Int'][] | null)}

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

export interface User_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),borrowedReservesCount?: (Scalars['Int'] | null),borrowedReservesCount_not?: (Scalars['Int'] | null),borrowedReservesCount_gt?: (Scalars['Int'] | null),borrowedReservesCount_lt?: (Scalars['Int'] | null),borrowedReservesCount_gte?: (Scalars['Int'] | null),borrowedReservesCount_lte?: (Scalars['Int'] | null),borrowedReservesCount_in?: (Scalars['Int'][] | null),borrowedReservesCount_not_in?: (Scalars['Int'][] | null),unclaimedRewards?: (Scalars['BigInt'] | null),unclaimedRewards_not?: (Scalars['BigInt'] | null),unclaimedRewards_gt?: (Scalars['BigInt'] | null),unclaimedRewards_lt?: (Scalars['BigInt'] | null),unclaimedRewards_gte?: (Scalars['BigInt'] | null),unclaimedRewards_lte?: (Scalars['BigInt'] | null),unclaimedRewards_in?: (Scalars['BigInt'][] | null),unclaimedRewards_not_in?: (Scalars['BigInt'][] | null),lifetimeRewards?: (Scalars['BigInt'] | null),lifetimeRewards_not?: (Scalars['BigInt'] | null),lifetimeRewards_gt?: (Scalars['BigInt'] | null),lifetimeRewards_lt?: (Scalars['BigInt'] | null),lifetimeRewards_gte?: (Scalars['BigInt'] | null),lifetimeRewards_lte?: (Scalars['BigInt'] | null),lifetimeRewards_in?: (Scalars['BigInt'][] | null),lifetimeRewards_not_in?: (Scalars['BigInt'][] | null),incentivesLastUpdated?: (Scalars['Int'] | null),incentivesLastUpdated_not?: (Scalars['Int'] | null),incentivesLastUpdated_gt?: (Scalars['Int'] | null),incentivesLastUpdated_lt?: (Scalars['Int'] | null),incentivesLastUpdated_gte?: (Scalars['Int'] | null),incentivesLastUpdated_lte?: (Scalars['Int'] | null),incentivesLastUpdated_in?: (Scalars['Int'][] | null),incentivesLastUpdated_not_in?: (Scalars['Int'][] | null)}

export interface VTokenRequest{
    /**
     * VToken address
     * 
     */
    id?: boolean | number
    pool?: PoolRequest
    underlyingAssetAddress?: boolean | number
    underlyingAssetDecimals?: boolean | number
    tokenContractImpl?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VTokenBalanceHistoryItemRequest{
    /**
     * userReserve + txHash
     * 
     */
    id?: boolean | number
    userReserve?: UserReserveRequest
    scaledVariableDebt?: boolean | number
    currentVariableDebt?: boolean | number
    timestamp?: boolean | number
    index?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VTokenBalanceHistoryItem_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),userReserve?: (Scalars['String'] | null),userReserve_not?: (Scalars['String'] | null),userReserve_gt?: (Scalars['String'] | null),userReserve_lt?: (Scalars['String'] | null),userReserve_gte?: (Scalars['String'] | null),userReserve_lte?: (Scalars['String'] | null),userReserve_in?: (Scalars['String'][] | null),userReserve_not_in?: (Scalars['String'][] | null),userReserve_contains?: (Scalars['String'] | null),userReserve_not_contains?: (Scalars['String'] | null),userReserve_starts_with?: (Scalars['String'] | null),userReserve_not_starts_with?: (Scalars['String'] | null),userReserve_ends_with?: (Scalars['String'] | null),userReserve_not_ends_with?: (Scalars['String'] | null),scaledVariableDebt?: (Scalars['BigInt'] | null),scaledVariableDebt_not?: (Scalars['BigInt'] | null),scaledVariableDebt_gt?: (Scalars['BigInt'] | null),scaledVariableDebt_lt?: (Scalars['BigInt'] | null),scaledVariableDebt_gte?: (Scalars['BigInt'] | null),scaledVariableDebt_lte?: (Scalars['BigInt'] | null),scaledVariableDebt_in?: (Scalars['BigInt'][] | null),scaledVariableDebt_not_in?: (Scalars['BigInt'][] | null),currentVariableDebt?: (Scalars['BigInt'] | null),currentVariableDebt_not?: (Scalars['BigInt'] | null),currentVariableDebt_gt?: (Scalars['BigInt'] | null),currentVariableDebt_lt?: (Scalars['BigInt'] | null),currentVariableDebt_gte?: (Scalars['BigInt'] | null),currentVariableDebt_lte?: (Scalars['BigInt'] | null),currentVariableDebt_in?: (Scalars['BigInt'][] | null),currentVariableDebt_not_in?: (Scalars['BigInt'][] | null),timestamp?: (Scalars['Int'] | null),timestamp_not?: (Scalars['Int'] | null),timestamp_gt?: (Scalars['Int'] | null),timestamp_lt?: (Scalars['Int'] | null),timestamp_gte?: (Scalars['Int'] | null),timestamp_lte?: (Scalars['Int'] | null),timestamp_in?: (Scalars['Int'][] | null),timestamp_not_in?: (Scalars['Int'][] | null),index?: (Scalars['BigInt'] | null),index_not?: (Scalars['BigInt'] | null),index_gt?: (Scalars['BigInt'] | null),index_lt?: (Scalars['BigInt'] | null),index_gte?: (Scalars['BigInt'] | null),index_lte?: (Scalars['BigInt'] | null),index_in?: (Scalars['BigInt'][] | null),index_not_in?: (Scalars['BigInt'][] | null)}

export interface VToken_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),underlyingAssetAddress?: (Scalars['Bytes'] | null),underlyingAssetAddress_not?: (Scalars['Bytes'] | null),underlyingAssetAddress_in?: (Scalars['Bytes'][] | null),underlyingAssetAddress_not_in?: (Scalars['Bytes'][] | null),underlyingAssetAddress_contains?: (Scalars['Bytes'] | null),underlyingAssetAddress_not_contains?: (Scalars['Bytes'] | null),underlyingAssetDecimals?: (Scalars['Int'] | null),underlyingAssetDecimals_not?: (Scalars['Int'] | null),underlyingAssetDecimals_gt?: (Scalars['Int'] | null),underlyingAssetDecimals_lt?: (Scalars['Int'] | null),underlyingAssetDecimals_gte?: (Scalars['Int'] | null),underlyingAssetDecimals_lte?: (Scalars['Int'] | null),underlyingAssetDecimals_in?: (Scalars['Int'][] | null),underlyingAssetDecimals_not_in?: (Scalars['Int'][] | null),tokenContractImpl?: (Scalars['Bytes'] | null),tokenContractImpl_not?: (Scalars['Bytes'] | null),tokenContractImpl_in?: (Scalars['Bytes'][] | null),tokenContractImpl_not_in?: (Scalars['Bytes'][] | null),tokenContractImpl_contains?: (Scalars['Bytes'] | null),tokenContractImpl_not_contains?: (Scalars['Bytes'] | null)}

export interface VariableDebtTokenRequest{
    /**
     * VariableDebtToken address
     * 
     */
    id?: boolean | number
    pool?: PoolRequest
    underlyingAssetAddress?: boolean | number
    underlyingAssetDecimals?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VariableDebtToken_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),underlyingAssetAddress?: (Scalars['Bytes'] | null),underlyingAssetAddress_not?: (Scalars['Bytes'] | null),underlyingAssetAddress_in?: (Scalars['Bytes'][] | null),underlyingAssetAddress_not_in?: (Scalars['Bytes'][] | null),underlyingAssetAddress_contains?: (Scalars['Bytes'] | null),underlyingAssetAddress_not_contains?: (Scalars['Bytes'] | null),underlyingAssetDecimals?: (Scalars['Int'] | null),underlyingAssetDecimals_not?: (Scalars['Int'] | null),underlyingAssetDecimals_gt?: (Scalars['Int'] | null),underlyingAssetDecimals_lt?: (Scalars['Int'] | null),underlyingAssetDecimals_gte?: (Scalars['Int'] | null),underlyingAssetDecimals_lte?: (Scalars['Int'] | null),underlyingAssetDecimals_in?: (Scalars['Int'][] | null),underlyingAssetDecimals_not_in?: (Scalars['Int'][] | null)}

export interface VariableTokenDelegatedAllowanceRequest{
    /**
     * variable + fromuser address + touser address+ reserve address
     * 
     */
    id?: boolean | number
    fromUser?: UserRequest
    toUser?: UserRequest
    amountAllowed?: boolean | number
    userReserve?: UserReserveRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VariableTokenDelegatedAllowance_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),fromUser?: (Scalars['String'] | null),fromUser_not?: (Scalars['String'] | null),fromUser_gt?: (Scalars['String'] | null),fromUser_lt?: (Scalars['String'] | null),fromUser_gte?: (Scalars['String'] | null),fromUser_lte?: (Scalars['String'] | null),fromUser_in?: (Scalars['String'][] | null),fromUser_not_in?: (Scalars['String'][] | null),fromUser_contains?: (Scalars['String'] | null),fromUser_not_contains?: (Scalars['String'] | null),fromUser_starts_with?: (Scalars['String'] | null),fromUser_not_starts_with?: (Scalars['String'] | null),fromUser_ends_with?: (Scalars['String'] | null),fromUser_not_ends_with?: (Scalars['String'] | null),toUser?: (Scalars['String'] | null),toUser_not?: (Scalars['String'] | null),toUser_gt?: (Scalars['String'] | null),toUser_lt?: (Scalars['String'] | null),toUser_gte?: (Scalars['String'] | null),toUser_lte?: (Scalars['String'] | null),toUser_in?: (Scalars['String'][] | null),toUser_not_in?: (Scalars['String'][] | null),toUser_contains?: (Scalars['String'] | null),toUser_not_contains?: (Scalars['String'] | null),toUser_starts_with?: (Scalars['String'] | null),toUser_not_starts_with?: (Scalars['String'] | null),toUser_ends_with?: (Scalars['String'] | null),toUser_not_ends_with?: (Scalars['String'] | null),amountAllowed?: (Scalars['BigInt'] | null),amountAllowed_not?: (Scalars['BigInt'] | null),amountAllowed_gt?: (Scalars['BigInt'] | null),amountAllowed_lt?: (Scalars['BigInt'] | null),amountAllowed_gte?: (Scalars['BigInt'] | null),amountAllowed_lte?: (Scalars['BigInt'] | null),amountAllowed_in?: (Scalars['BigInt'][] | null),amountAllowed_not_in?: (Scalars['BigInt'][] | null),userReserve?: (Scalars['String'] | null),userReserve_not?: (Scalars['String'] | null),userReserve_gt?: (Scalars['String'] | null),userReserve_lt?: (Scalars['String'] | null),userReserve_gte?: (Scalars['String'] | null),userReserve_lte?: (Scalars['String'] | null),userReserve_in?: (Scalars['String'][] | null),userReserve_not_in?: (Scalars['String'][] | null),userReserve_contains?: (Scalars['String'] | null),userReserve_not_contains?: (Scalars['String'] | null),userReserve_starts_with?: (Scalars['String'] | null),userReserve_not_starts_with?: (Scalars['String'] | null),userReserve_ends_with?: (Scalars['String'] | null),userReserve_not_ends_with?: (Scalars['String'] | null)}

export interface WETHReserveRequest{
    /**
     * weth address
     * 
     */
    id?: boolean | number
    address?: boolean | number
    symbol?: boolean | number
    name?: boolean | number
    decimals?: boolean | number
    updatedTimestamp?: boolean | number
    updatedBlockNumber?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WETHReserve_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),address?: (Scalars['Bytes'] | null),address_not?: (Scalars['Bytes'] | null),address_in?: (Scalars['Bytes'][] | null),address_not_in?: (Scalars['Bytes'][] | null),address_contains?: (Scalars['Bytes'] | null),address_not_contains?: (Scalars['Bytes'] | null),symbol?: (Scalars['String'] | null),symbol_not?: (Scalars['String'] | null),symbol_gt?: (Scalars['String'] | null),symbol_lt?: (Scalars['String'] | null),symbol_gte?: (Scalars['String'] | null),symbol_lte?: (Scalars['String'] | null),symbol_in?: (Scalars['String'][] | null),symbol_not_in?: (Scalars['String'][] | null),symbol_contains?: (Scalars['String'] | null),symbol_not_contains?: (Scalars['String'] | null),symbol_starts_with?: (Scalars['String'] | null),symbol_not_starts_with?: (Scalars['String'] | null),symbol_ends_with?: (Scalars['String'] | null),symbol_not_ends_with?: (Scalars['String'] | null),name?: (Scalars['String'] | null),name_not?: (Scalars['String'] | null),name_gt?: (Scalars['String'] | null),name_lt?: (Scalars['String'] | null),name_gte?: (Scalars['String'] | null),name_lte?: (Scalars['String'] | null),name_in?: (Scalars['String'][] | null),name_not_in?: (Scalars['String'][] | null),name_contains?: (Scalars['String'] | null),name_not_contains?: (Scalars['String'] | null),name_starts_with?: (Scalars['String'] | null),name_not_starts_with?: (Scalars['String'] | null),name_ends_with?: (Scalars['String'] | null),name_not_ends_with?: (Scalars['String'] | null),decimals?: (Scalars['Int'] | null),decimals_not?: (Scalars['Int'] | null),decimals_gt?: (Scalars['Int'] | null),decimals_lt?: (Scalars['Int'] | null),decimals_gte?: (Scalars['Int'] | null),decimals_lte?: (Scalars['Int'] | null),decimals_in?: (Scalars['Int'][] | null),decimals_not_in?: (Scalars['Int'][] | null),updatedTimestamp?: (Scalars['Int'] | null),updatedTimestamp_not?: (Scalars['Int'] | null),updatedTimestamp_gt?: (Scalars['Int'] | null),updatedTimestamp_lt?: (Scalars['Int'] | null),updatedTimestamp_gte?: (Scalars['Int'] | null),updatedTimestamp_lte?: (Scalars['Int'] | null),updatedTimestamp_in?: (Scalars['Int'][] | null),updatedTimestamp_not_in?: (Scalars['Int'][] | null),updatedBlockNumber?: (Scalars['BigInt'] | null),updatedBlockNumber_not?: (Scalars['BigInt'] | null),updatedBlockNumber_gt?: (Scalars['BigInt'] | null),updatedBlockNumber_lt?: (Scalars['BigInt'] | null),updatedBlockNumber_gte?: (Scalars['BigInt'] | null),updatedBlockNumber_lte?: (Scalars['BigInt'] | null),updatedBlockNumber_in?: (Scalars['BigInt'][] | null),updatedBlockNumber_not_in?: (Scalars['BigInt'][] | null)}

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



const ChainlinkENS_possibleTypes = ['ChainlinkENS']
export const isChainlinkENS = (obj?: { __typename?: any } | null): obj is ChainlinkENS => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isChainlinkENS"')
  return ChainlinkENS_possibleTypes.includes(obj.__typename)
}



const ClaimIncentiveCall_possibleTypes = ['ClaimIncentiveCall']
export const isClaimIncentiveCall = (obj?: { __typename?: any } | null): obj is ClaimIncentiveCall => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isClaimIncentiveCall"')
  return ClaimIncentiveCall_possibleTypes.includes(obj.__typename)
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



const IncentivesController_possibleTypes = ['IncentivesController']
export const isIncentivesController = (obj?: { __typename?: any } | null): obj is IncentivesController => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isIncentivesController"')
  return IncentivesController_possibleTypes.includes(obj.__typename)
}



const IncentivizedAction_possibleTypes = ['IncentivizedAction']
export const isIncentivizedAction = (obj?: { __typename?: any } | null): obj is IncentivizedAction => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isIncentivizedAction"')
  return IncentivizedAction_possibleTypes.includes(obj.__typename)
}



const LiquidationCall_possibleTypes = ['LiquidationCall']
export const isLiquidationCall = (obj?: { __typename?: any } | null): obj is LiquidationCall => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isLiquidationCall"')
  return LiquidationCall_possibleTypes.includes(obj.__typename)
}



const MapAssetPool_possibleTypes = ['MapAssetPool']
export const isMapAssetPool = (obj?: { __typename?: any } | null): obj is MapAssetPool => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isMapAssetPool"')
  return MapAssetPool_possibleTypes.includes(obj.__typename)
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



const SToken_possibleTypes = ['SToken']
export const isSToken = (obj?: { __typename?: any } | null): obj is SToken => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isSToken"')
  return SToken_possibleTypes.includes(obj.__typename)
}



const STokenBalanceHistoryItem_possibleTypes = ['STokenBalanceHistoryItem']
export const isSTokenBalanceHistoryItem = (obj?: { __typename?: any } | null): obj is STokenBalanceHistoryItem => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isSTokenBalanceHistoryItem"')
  return STokenBalanceHistoryItem_possibleTypes.includes(obj.__typename)
}



const StableDebtToken_possibleTypes = ['StableDebtToken']
export const isStableDebtToken = (obj?: { __typename?: any } | null): obj is StableDebtToken => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isStableDebtToken"')
  return StableDebtToken_possibleTypes.includes(obj.__typename)
}



const StableTokenDelegatedAllowance_possibleTypes = ['StableTokenDelegatedAllowance']
export const isStableTokenDelegatedAllowance = (obj?: { __typename?: any } | null): obj is StableTokenDelegatedAllowance => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isStableTokenDelegatedAllowance"')
  return StableTokenDelegatedAllowance_possibleTypes.includes(obj.__typename)
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



const SwapHistory_possibleTypes = ['SwapHistory']
export const isSwapHistory = (obj?: { __typename?: any } | null): obj is SwapHistory => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isSwapHistory"')
  return SwapHistory_possibleTypes.includes(obj.__typename)
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



const VToken_possibleTypes = ['VToken']
export const isVToken = (obj?: { __typename?: any } | null): obj is VToken => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isVToken"')
  return VToken_possibleTypes.includes(obj.__typename)
}



const VTokenBalanceHistoryItem_possibleTypes = ['VTokenBalanceHistoryItem']
export const isVTokenBalanceHistoryItem = (obj?: { __typename?: any } | null): obj is VTokenBalanceHistoryItem => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isVTokenBalanceHistoryItem"')
  return VTokenBalanceHistoryItem_possibleTypes.includes(obj.__typename)
}



const VariableDebtToken_possibleTypes = ['VariableDebtToken']
export const isVariableDebtToken = (obj?: { __typename?: any } | null): obj is VariableDebtToken => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isVariableDebtToken"')
  return VariableDebtToken_possibleTypes.includes(obj.__typename)
}



const VariableTokenDelegatedAllowance_possibleTypes = ['VariableTokenDelegatedAllowance']
export const isVariableTokenDelegatedAllowance = (obj?: { __typename?: any } | null): obj is VariableTokenDelegatedAllowance => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isVariableTokenDelegatedAllowance"')
  return VariableTokenDelegatedAllowance_possibleTypes.includes(obj.__typename)
}



const WETHReserve_possibleTypes = ['WETHReserve']
export const isWETHReserve = (obj?: { __typename?: any } | null): obj is WETHReserve => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isWETHReserve"')
  return WETHReserve_possibleTypes.includes(obj.__typename)
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
    underlyingAssetDecimals: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    tokenContractImpl: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>})
}

export interface ATokenObservableChain{
    
/**
 * AToken address
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    underlyingAssetAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    underlyingAssetDecimals: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    tokenContractImpl: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>})
}

export interface ATokenBalanceHistoryItemPromiseChain{
    
/**
 * userReserve + txHash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    userReserve: (UserReservePromiseChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Promise<FieldsSelection<UserReserve, R>>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    scaledATokenBalance: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    currentATokenBalance: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    index: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>})
}

export interface ATokenBalanceHistoryItemObservableChain{
    
/**
 * userReserve + txHash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    userReserve: (UserReserveObservableChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Observable<FieldsSelection<UserReserve, R>>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    scaledATokenBalance: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    currentATokenBalance: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    index: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>})
}

export interface BorrowPromiseChain{
    
/**
 * tx hash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>}),
    user: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Promise<FieldsSelection<User, R>>}),
    onBehalfOf: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Promise<FieldsSelection<User, R>>}),
    reserve: (ReservePromiseChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Promise<FieldsSelection<Reserve, R>>}),
    userReserve: (UserReservePromiseChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Promise<FieldsSelection<UserReserve, R>>}),
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    borrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    borrowRateMode: ({get: (request?: boolean|number, defaultValue?: BorrowRateMode) => Promise<BorrowRateMode>}),
    referrer: (ReferrerPromiseChain & {get: <R extends ReferrerRequest>(request: R, defaultValue?: (FieldsSelection<Referrer, R> | undefined)) => Promise<(FieldsSelection<Referrer, R> | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    stableTokenDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    variableTokenDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>})
}

export interface BorrowObservableChain{
    
/**
 * tx hash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    user: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Observable<FieldsSelection<User, R>>}),
    onBehalfOf: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Observable<FieldsSelection<User, R>>}),
    reserve: (ReserveObservableChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Observable<FieldsSelection<Reserve, R>>}),
    userReserve: (UserReserveObservableChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Observable<FieldsSelection<UserReserve, R>>}),
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    borrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    borrowRateMode: ({get: (request?: boolean|number, defaultValue?: BorrowRateMode) => Observable<BorrowRateMode>}),
    referrer: (ReferrerObservableChain & {get: <R extends ReferrerRequest>(request: R, defaultValue?: (FieldsSelection<Referrer, R> | undefined)) => Observable<(FieldsSelection<Referrer, R> | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    stableTokenDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    variableTokenDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>})
}

export interface ChainlinkAggregatorPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    oracleAsset: (PriceOracleAssetPromiseChain & {get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>) => Promise<FieldsSelection<PriceOracleAsset, R>>})
}

export interface ChainlinkAggregatorObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    oracleAsset: (PriceOracleAssetObservableChain & {get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>) => Observable<FieldsSelection<PriceOracleAsset, R>>})
}

export interface ChainlinkENSPromiseChain{
    
/** id is the node hash */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    
/** address of the aggregator */
aggregatorAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    
/** token address represented with this aggregator */
underlyingAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    
/** symbol of the token represented on the aggregator */
symbol: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface ChainlinkENSObservableChain{
    
/** id is the node hash */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    
/** address of the aggregator */
aggregatorAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    
/** token address represented with this aggregator */
underlyingAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    
/** symbol of the token represented on the aggregator */
symbol: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface ClaimIncentiveCallPromiseChain{
    
/**
 * txHash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    incentivesController: (IncentivesControllerPromiseChain & {get: <R extends IncentivesControllerRequest>(request: R, defaultValue?: FieldsSelection<IncentivesController, R>) => Promise<FieldsSelection<IncentivesController, R>>}),
    user: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Promise<FieldsSelection<User, R>>}),
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>})
}

export interface ClaimIncentiveCallObservableChain{
    
/**
 * txHash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    incentivesController: (IncentivesControllerObservableChain & {get: <R extends IncentivesControllerRequest>(request: R, defaultValue?: FieldsSelection<IncentivesController, R>) => Observable<FieldsSelection<IncentivesController, R>>}),
    user: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Observable<FieldsSelection<User, R>>}),
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>})
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
    onBehalfOf: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Promise<FieldsSelection<User, R>>}),
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
    onBehalfOf: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Observable<FieldsSelection<User, R>>}),
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
    initiator: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Promise<FieldsSelection<User, R>>}),
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
    initiator: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Observable<FieldsSelection<User, R>>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface IncentivesControllerPromiseChain{
    
/**
 * address of the incentives controller
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    rewardToken: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    rewardTokenDecimals: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    rewardTokenSymbol: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    precision: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    emissionEndTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    incentivizedActions: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (IncentivizedAction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (IncentivizedAction_filter | null)}) => {get: <R extends IncentivizedActionRequest>(request: R, defaultValue?: FieldsSelection<IncentivizedAction, R>[]) => Promise<FieldsSelection<IncentivizedAction, R>[]>})&({get: <R extends IncentivizedActionRequest>(request: R, defaultValue?: FieldsSelection<IncentivizedAction, R>[]) => Promise<FieldsSelection<IncentivizedAction, R>[]>}),
    claimIncentives: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ClaimIncentiveCall_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ClaimIncentiveCall_filter | null)}) => {get: <R extends ClaimIncentiveCallRequest>(request: R, defaultValue?: FieldsSelection<ClaimIncentiveCall, R>[]) => Promise<FieldsSelection<ClaimIncentiveCall, R>[]>})&({get: <R extends ClaimIncentiveCallRequest>(request: R, defaultValue?: FieldsSelection<ClaimIncentiveCall, R>[]) => Promise<FieldsSelection<ClaimIncentiveCall, R>[]>})
}

export interface IncentivesControllerObservableChain{
    
/**
 * address of the incentives controller
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    rewardToken: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    rewardTokenDecimals: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    rewardTokenSymbol: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    precision: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    emissionEndTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    incentivizedActions: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (IncentivizedAction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (IncentivizedAction_filter | null)}) => {get: <R extends IncentivizedActionRequest>(request: R, defaultValue?: FieldsSelection<IncentivizedAction, R>[]) => Observable<FieldsSelection<IncentivizedAction, R>[]>})&({get: <R extends IncentivizedActionRequest>(request: R, defaultValue?: FieldsSelection<IncentivizedAction, R>[]) => Observable<FieldsSelection<IncentivizedAction, R>[]>}),
    claimIncentives: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ClaimIncentiveCall_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ClaimIncentiveCall_filter | null)}) => {get: <R extends ClaimIncentiveCallRequest>(request: R, defaultValue?: FieldsSelection<ClaimIncentiveCall, R>[]) => Observable<FieldsSelection<ClaimIncentiveCall, R>[]>})&({get: <R extends ClaimIncentiveCallRequest>(request: R, defaultValue?: FieldsSelection<ClaimIncentiveCall, R>[]) => Observable<FieldsSelection<ClaimIncentiveCall, R>[]>})
}

export interface IncentivizedActionPromiseChain{
    
/**
 * txHash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    incentivesController: (IncentivesControllerPromiseChain & {get: <R extends IncentivesControllerRequest>(request: R, defaultValue?: FieldsSelection<IncentivesController, R>) => Promise<FieldsSelection<IncentivesController, R>>}),
    user: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Promise<FieldsSelection<User, R>>}),
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>})
}

export interface IncentivizedActionObservableChain{
    
/**
 * txHash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    incentivesController: (IncentivesControllerObservableChain & {get: <R extends IncentivesControllerRequest>(request: R, defaultValue?: FieldsSelection<IncentivesController, R>) => Observable<FieldsSelection<IncentivesController, R>>}),
    user: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Observable<FieldsSelection<User, R>>}),
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>})
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

export interface MapAssetPoolPromiseChain{
    
/**
 * address of a /s /v token
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    pool: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    underlyingAsset: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>})
}

export interface MapAssetPoolObservableChain{
    
/**
 * address of a /s /v token
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    pool: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    underlyingAsset: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>})
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
    lendingPoolCollateralManager: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    lendingPoolConfiguratorImpl: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    lendingPoolImpl: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    lendingPoolConfigurator: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    proxyPriceProvider: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    lendingRateOracle: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    configurationAdmin: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    ethereumAddress: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    emergencyAdmin: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
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
    originationFeeLiquidationHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (OriginationFeeLiquidation_orderBy | null),orderDirection?: (OrderDirection | null),where?: (OriginationFeeLiquidation_filter | null)}) => {get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: FieldsSelection<OriginationFeeLiquidation, R>[]) => Promise<FieldsSelection<OriginationFeeLiquidation, R>[]>})&({get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: FieldsSelection<OriginationFeeLiquidation, R>[]) => Promise<FieldsSelection<OriginationFeeLiquidation, R>[]>}),
    active: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    paused: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>})
}

export interface PoolObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    protocol: (ProtocolObservableChain & {get: <R extends ProtocolRequest>(request: R, defaultValue?: FieldsSelection<Protocol, R>) => Observable<FieldsSelection<Protocol, R>>}),
    lendingPool: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    lendingPoolCollateralManager: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    lendingPoolConfiguratorImpl: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    lendingPoolImpl: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    lendingPoolConfigurator: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    proxyPriceProvider: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    lendingRateOracle: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    configurationAdmin: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    ethereumAddress: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    emergencyAdmin: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
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
    originationFeeLiquidationHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (OriginationFeeLiquidation_orderBy | null),orderDirection?: (OrderDirection | null),where?: (OriginationFeeLiquidation_filter | null)}) => {get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: FieldsSelection<OriginationFeeLiquidation, R>[]) => Observable<FieldsSelection<OriginationFeeLiquidation, R>[]>})&({get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: FieldsSelection<OriginationFeeLiquidation, R>[]) => Observable<FieldsSelection<OriginationFeeLiquidation, R>[]>}),
    active: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    paused: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>})
}

export interface PoolConfigurationHistoryItemPromiseChain{
    
/**
 * tx hash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    active: ({get: (request?: boolean|number, defaultValue?: (Scalars['Boolean'] | undefined)) => Promise<(Scalars['Boolean'] | undefined)>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>}),
    lendingPool: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    lendingPoolCollateralManager: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    lendingPoolConfiguratorImpl: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    lendingPoolImpl: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    lendingPoolConfigurator: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    proxyPriceProvider: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    lendingRateOracle: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    configurationAdmin: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface PoolConfigurationHistoryItemObservableChain{
    
/**
 * tx hash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    active: ({get: (request?: boolean|number, defaultValue?: (Scalars['Boolean'] | undefined)) => Observable<(Scalars['Boolean'] | undefined)>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    lendingPool: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    lendingPoolCollateralManager: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    lendingPoolConfiguratorImpl: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    lendingPoolImpl: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    lendingPoolConfigurator: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    proxyPriceProvider: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    lendingRateOracle: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    configurationAdmin: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
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
    usdDependentAssets: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceOracleAsset_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceOracleAsset_filter | null)}) => {get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>[]) => Promise<FieldsSelection<PriceOracleAsset, R>[]>})&({get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>[]) => Promise<FieldsSelection<PriceOracleAsset, R>[]>}),
    fallbackPriceOracle: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    tokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceOracleAsset_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceOracleAsset_filter | null)}) => {get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>[]) => Promise<FieldsSelection<PriceOracleAsset, R>[]>})&({get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>[]) => Promise<FieldsSelection<PriceOracleAsset, R>[]>}),
    usdPriceEthHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UsdEthPriceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UsdEthPriceHistoryItem_filter | null)}) => {get: <R extends UsdEthPriceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<UsdEthPriceHistoryItem, R>[]) => Promise<FieldsSelection<UsdEthPriceHistoryItem, R>[]>})&({get: <R extends UsdEthPriceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<UsdEthPriceHistoryItem, R>[]) => Promise<FieldsSelection<UsdEthPriceHistoryItem, R>[]>}),
    tokensWithFallback: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceOracleAsset_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceOracleAsset_filter | null)}) => {get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>[]) => Promise<FieldsSelection<PriceOracleAsset, R>[]>})&({get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>[]) => Promise<FieldsSelection<PriceOracleAsset, R>[]>}),
    lastUpdateTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    version: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface PriceOracleObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    proxyPriceProvider: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    usdPriceEth: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    usdPriceEthMainSource: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    usdPriceEthFallbackRequired: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    usdDependentAssets: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceOracleAsset_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceOracleAsset_filter | null)}) => {get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>[]) => Observable<FieldsSelection<PriceOracleAsset, R>[]>})&({get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>[]) => Observable<FieldsSelection<PriceOracleAsset, R>[]>}),
    fallbackPriceOracle: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    tokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceOracleAsset_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceOracleAsset_filter | null)}) => {get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>[]) => Observable<FieldsSelection<PriceOracleAsset, R>[]>})&({get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>[]) => Observable<FieldsSelection<PriceOracleAsset, R>[]>}),
    usdPriceEthHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UsdEthPriceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UsdEthPriceHistoryItem_filter | null)}) => {get: <R extends UsdEthPriceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<UsdEthPriceHistoryItem, R>[]) => Observable<FieldsSelection<UsdEthPriceHistoryItem, R>[]>})&({get: <R extends UsdEthPriceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<UsdEthPriceHistoryItem, R>[]) => Observable<FieldsSelection<UsdEthPriceHistoryItem, R>[]>}),
    tokensWithFallback: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PriceOracleAsset_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PriceOracleAsset_filter | null)}) => {get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>[]) => Observable<FieldsSelection<PriceOracleAsset, R>[]>})&({get: <R extends PriceOracleAssetRequest>(request: R, defaultValue?: FieldsSelection<PriceOracleAsset, R>[]) => Observable<FieldsSelection<PriceOracleAsset, R>[]>}),
    lastUpdateTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    version: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
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
    chainlinkENS: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ChainlinkENSPromiseChain & {get: <R extends ChainlinkENSRequest>(request: R, defaultValue?: (FieldsSelection<ChainlinkENS, R> | undefined)) => Promise<(FieldsSelection<ChainlinkENS, R> | undefined)>}),
    chainlinkENSs: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ChainlinkENS_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ChainlinkENS_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ChainlinkENSRequest>(request: R, defaultValue?: FieldsSelection<ChainlinkENS, R>[]) => Promise<FieldsSelection<ChainlinkENS, R>[]>})&({get: <R extends ChainlinkENSRequest>(request: R, defaultValue?: FieldsSelection<ChainlinkENS, R>[]) => Promise<FieldsSelection<ChainlinkENS, R>[]>}),
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
    stoken: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => STokenPromiseChain & {get: <R extends STokenRequest>(request: R, defaultValue?: (FieldsSelection<SToken, R> | undefined)) => Promise<(FieldsSelection<SToken, R> | undefined)>}),
    stokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (SToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (SToken_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends STokenRequest>(request: R, defaultValue?: FieldsSelection<SToken, R>[]) => Promise<FieldsSelection<SToken, R>[]>})&({get: <R extends STokenRequest>(request: R, defaultValue?: FieldsSelection<SToken, R>[]) => Promise<FieldsSelection<SToken, R>[]>}),
    vtoken: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => VTokenPromiseChain & {get: <R extends VTokenRequest>(request: R, defaultValue?: (FieldsSelection<VToken, R> | undefined)) => Promise<(FieldsSelection<VToken, R> | undefined)>}),
    vtokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VToken_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends VTokenRequest>(request: R, defaultValue?: FieldsSelection<VToken, R>[]) => Promise<FieldsSelection<VToken, R>[]>})&({get: <R extends VTokenRequest>(request: R, defaultValue?: FieldsSelection<VToken, R>[]) => Promise<FieldsSelection<VToken, R>[]>}),
    atoken: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ATokenPromiseChain & {get: <R extends ATokenRequest>(request: R, defaultValue?: (FieldsSelection<AToken, R> | undefined)) => Promise<(FieldsSelection<AToken, R> | undefined)>}),
    atokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (AToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (AToken_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ATokenRequest>(request: R, defaultValue?: FieldsSelection<AToken, R>[]) => Promise<FieldsSelection<AToken, R>[]>})&({get: <R extends ATokenRequest>(request: R, defaultValue?: FieldsSelection<AToken, R>[]) => Promise<FieldsSelection<AToken, R>[]>}),
    variableDebtToken: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => VariableDebtTokenPromiseChain & {get: <R extends VariableDebtTokenRequest>(request: R, defaultValue?: (FieldsSelection<VariableDebtToken, R> | undefined)) => Promise<(FieldsSelection<VariableDebtToken, R> | undefined)>}),
    variableDebtTokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VariableDebtToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VariableDebtToken_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends VariableDebtTokenRequest>(request: R, defaultValue?: FieldsSelection<VariableDebtToken, R>[]) => Promise<FieldsSelection<VariableDebtToken, R>[]>})&({get: <R extends VariableDebtTokenRequest>(request: R, defaultValue?: FieldsSelection<VariableDebtToken, R>[]) => Promise<FieldsSelection<VariableDebtToken, R>[]>}),
    stableDebtToken: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => StableDebtTokenPromiseChain & {get: <R extends StableDebtTokenRequest>(request: R, defaultValue?: (FieldsSelection<StableDebtToken, R> | undefined)) => Promise<(FieldsSelection<StableDebtToken, R> | undefined)>}),
    stableDebtTokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StableDebtToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StableDebtToken_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends StableDebtTokenRequest>(request: R, defaultValue?: FieldsSelection<StableDebtToken, R>[]) => Promise<FieldsSelection<StableDebtToken, R>[]>})&({get: <R extends StableDebtTokenRequest>(request: R, defaultValue?: FieldsSelection<StableDebtToken, R>[]) => Promise<FieldsSelection<StableDebtToken, R>[]>}),
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
    incentivesController: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => IncentivesControllerPromiseChain & {get: <R extends IncentivesControllerRequest>(request: R, defaultValue?: (FieldsSelection<IncentivesController, R> | undefined)) => Promise<(FieldsSelection<IncentivesController, R> | undefined)>}),
    incentivesControllers: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (IncentivesController_orderBy | null),orderDirection?: (OrderDirection | null),where?: (IncentivesController_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends IncentivesControllerRequest>(request: R, defaultValue?: FieldsSelection<IncentivesController, R>[]) => Promise<FieldsSelection<IncentivesController, R>[]>})&({get: <R extends IncentivesControllerRequest>(request: R, defaultValue?: FieldsSelection<IncentivesController, R>[]) => Promise<FieldsSelection<IncentivesController, R>[]>}),
    incentivizedAction: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => IncentivizedActionPromiseChain & {get: <R extends IncentivizedActionRequest>(request: R, defaultValue?: (FieldsSelection<IncentivizedAction, R> | undefined)) => Promise<(FieldsSelection<IncentivizedAction, R> | undefined)>}),
    incentivizedActions: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (IncentivizedAction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (IncentivizedAction_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends IncentivizedActionRequest>(request: R, defaultValue?: FieldsSelection<IncentivizedAction, R>[]) => Promise<FieldsSelection<IncentivizedAction, R>[]>})&({get: <R extends IncentivizedActionRequest>(request: R, defaultValue?: FieldsSelection<IncentivizedAction, R>[]) => Promise<FieldsSelection<IncentivizedAction, R>[]>}),
    claimIncentiveCall: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ClaimIncentiveCallPromiseChain & {get: <R extends ClaimIncentiveCallRequest>(request: R, defaultValue?: (FieldsSelection<ClaimIncentiveCall, R> | undefined)) => Promise<(FieldsSelection<ClaimIncentiveCall, R> | undefined)>}),
    claimIncentiveCalls: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ClaimIncentiveCall_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ClaimIncentiveCall_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ClaimIncentiveCallRequest>(request: R, defaultValue?: FieldsSelection<ClaimIncentiveCall, R>[]) => Promise<FieldsSelection<ClaimIncentiveCall, R>[]>})&({get: <R extends ClaimIncentiveCallRequest>(request: R, defaultValue?: FieldsSelection<ClaimIncentiveCall, R>[]) => Promise<FieldsSelection<ClaimIncentiveCall, R>[]>}),
    mapAssetPool: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => MapAssetPoolPromiseChain & {get: <R extends MapAssetPoolRequest>(request: R, defaultValue?: (FieldsSelection<MapAssetPool, R> | undefined)) => Promise<(FieldsSelection<MapAssetPool, R> | undefined)>}),
    mapAssetPools: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (MapAssetPool_orderBy | null),orderDirection?: (OrderDirection | null),where?: (MapAssetPool_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends MapAssetPoolRequest>(request: R, defaultValue?: FieldsSelection<MapAssetPool, R>[]) => Promise<FieldsSelection<MapAssetPool, R>[]>})&({get: <R extends MapAssetPoolRequest>(request: R, defaultValue?: FieldsSelection<MapAssetPool, R>[]) => Promise<FieldsSelection<MapAssetPool, R>[]>}),
    reserve: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ReservePromiseChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: (FieldsSelection<Reserve, R> | undefined)) => Promise<(FieldsSelection<Reserve, R> | undefined)>}),
    reserves: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Reserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Reserve_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>[]) => Promise<FieldsSelection<Reserve, R>[]>})&({get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>[]) => Promise<FieldsSelection<Reserve, R>[]>}),
    wethreserve: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => WETHReservePromiseChain & {get: <R extends WETHReserveRequest>(request: R, defaultValue?: (FieldsSelection<WETHReserve, R> | undefined)) => Promise<(FieldsSelection<WETHReserve, R> | undefined)>}),
    wethreserves: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (WETHReserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (WETHReserve_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends WETHReserveRequest>(request: R, defaultValue?: FieldsSelection<WETHReserve, R>[]) => Promise<FieldsSelection<WETHReserve, R>[]>})&({get: <R extends WETHReserveRequest>(request: R, defaultValue?: FieldsSelection<WETHReserve, R>[]) => Promise<FieldsSelection<WETHReserve, R>[]>}),
    atokenBalanceHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ATokenBalanceHistoryItemPromiseChain & {get: <R extends ATokenBalanceHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<ATokenBalanceHistoryItem, R> | undefined)) => Promise<(FieldsSelection<ATokenBalanceHistoryItem, R> | undefined)>}),
    atokenBalanceHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ATokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ATokenBalanceHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ATokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ATokenBalanceHistoryItem, R>[]) => Promise<FieldsSelection<ATokenBalanceHistoryItem, R>[]>})&({get: <R extends ATokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ATokenBalanceHistoryItem, R>[]) => Promise<FieldsSelection<ATokenBalanceHistoryItem, R>[]>}),
    vtokenBalanceHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => VTokenBalanceHistoryItemPromiseChain & {get: <R extends VTokenBalanceHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<VTokenBalanceHistoryItem, R> | undefined)) => Promise<(FieldsSelection<VTokenBalanceHistoryItem, R> | undefined)>}),
    vtokenBalanceHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VTokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VTokenBalanceHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends VTokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<VTokenBalanceHistoryItem, R>[]) => Promise<FieldsSelection<VTokenBalanceHistoryItem, R>[]>})&({get: <R extends VTokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<VTokenBalanceHistoryItem, R>[]) => Promise<FieldsSelection<VTokenBalanceHistoryItem, R>[]>}),
    stokenBalanceHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => STokenBalanceHistoryItemPromiseChain & {get: <R extends STokenBalanceHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<STokenBalanceHistoryItem, R> | undefined)) => Promise<(FieldsSelection<STokenBalanceHistoryItem, R> | undefined)>}),
    stokenBalanceHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (STokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (STokenBalanceHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends STokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<STokenBalanceHistoryItem, R>[]) => Promise<FieldsSelection<STokenBalanceHistoryItem, R>[]>})&({get: <R extends STokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<STokenBalanceHistoryItem, R>[]) => Promise<FieldsSelection<STokenBalanceHistoryItem, R>[]>}),
    stableTokenDelegatedAllowance: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => StableTokenDelegatedAllowancePromiseChain & {get: <R extends StableTokenDelegatedAllowanceRequest>(request: R, defaultValue?: (FieldsSelection<StableTokenDelegatedAllowance, R> | undefined)) => Promise<(FieldsSelection<StableTokenDelegatedAllowance, R> | undefined)>}),
    stableTokenDelegatedAllowances: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StableTokenDelegatedAllowance_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StableTokenDelegatedAllowance_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends StableTokenDelegatedAllowanceRequest>(request: R, defaultValue?: FieldsSelection<StableTokenDelegatedAllowance, R>[]) => Promise<FieldsSelection<StableTokenDelegatedAllowance, R>[]>})&({get: <R extends StableTokenDelegatedAllowanceRequest>(request: R, defaultValue?: FieldsSelection<StableTokenDelegatedAllowance, R>[]) => Promise<FieldsSelection<StableTokenDelegatedAllowance, R>[]>}),
    variableTokenDelegatedAllowance: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => VariableTokenDelegatedAllowancePromiseChain & {get: <R extends VariableTokenDelegatedAllowanceRequest>(request: R, defaultValue?: (FieldsSelection<VariableTokenDelegatedAllowance, R> | undefined)) => Promise<(FieldsSelection<VariableTokenDelegatedAllowance, R> | undefined)>}),
    variableTokenDelegatedAllowances: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VariableTokenDelegatedAllowance_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VariableTokenDelegatedAllowance_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends VariableTokenDelegatedAllowanceRequest>(request: R, defaultValue?: FieldsSelection<VariableTokenDelegatedAllowance, R>[]) => Promise<FieldsSelection<VariableTokenDelegatedAllowance, R>[]>})&({get: <R extends VariableTokenDelegatedAllowanceRequest>(request: R, defaultValue?: FieldsSelection<VariableTokenDelegatedAllowance, R>[]) => Promise<FieldsSelection<VariableTokenDelegatedAllowance, R>[]>}),
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
    swapHistory: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => SwapHistoryPromiseChain & {get: <R extends SwapHistoryRequest>(request: R, defaultValue?: (FieldsSelection<SwapHistory, R> | undefined)) => Promise<(FieldsSelection<SwapHistory, R> | undefined)>}),
    swapHistories: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (SwapHistory_orderBy | null),orderDirection?: (OrderDirection | null),where?: (SwapHistory_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends SwapHistoryRequest>(request: R, defaultValue?: FieldsSelection<SwapHistory, R>[]) => Promise<FieldsSelection<SwapHistory, R>[]>})&({get: <R extends SwapHistoryRequest>(request: R, defaultValue?: FieldsSelection<SwapHistory, R>[]) => Promise<FieldsSelection<SwapHistory, R>[]>}),
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
    chainlinkENS: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ChainlinkENSObservableChain & {get: <R extends ChainlinkENSRequest>(request: R, defaultValue?: (FieldsSelection<ChainlinkENS, R> | undefined)) => Observable<(FieldsSelection<ChainlinkENS, R> | undefined)>}),
    chainlinkENSs: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ChainlinkENS_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ChainlinkENS_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ChainlinkENSRequest>(request: R, defaultValue?: FieldsSelection<ChainlinkENS, R>[]) => Observable<FieldsSelection<ChainlinkENS, R>[]>})&({get: <R extends ChainlinkENSRequest>(request: R, defaultValue?: FieldsSelection<ChainlinkENS, R>[]) => Observable<FieldsSelection<ChainlinkENS, R>[]>}),
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
    stoken: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => STokenObservableChain & {get: <R extends STokenRequest>(request: R, defaultValue?: (FieldsSelection<SToken, R> | undefined)) => Observable<(FieldsSelection<SToken, R> | undefined)>}),
    stokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (SToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (SToken_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends STokenRequest>(request: R, defaultValue?: FieldsSelection<SToken, R>[]) => Observable<FieldsSelection<SToken, R>[]>})&({get: <R extends STokenRequest>(request: R, defaultValue?: FieldsSelection<SToken, R>[]) => Observable<FieldsSelection<SToken, R>[]>}),
    vtoken: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => VTokenObservableChain & {get: <R extends VTokenRequest>(request: R, defaultValue?: (FieldsSelection<VToken, R> | undefined)) => Observable<(FieldsSelection<VToken, R> | undefined)>}),
    vtokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VToken_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends VTokenRequest>(request: R, defaultValue?: FieldsSelection<VToken, R>[]) => Observable<FieldsSelection<VToken, R>[]>})&({get: <R extends VTokenRequest>(request: R, defaultValue?: FieldsSelection<VToken, R>[]) => Observable<FieldsSelection<VToken, R>[]>}),
    atoken: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ATokenObservableChain & {get: <R extends ATokenRequest>(request: R, defaultValue?: (FieldsSelection<AToken, R> | undefined)) => Observable<(FieldsSelection<AToken, R> | undefined)>}),
    atokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (AToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (AToken_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ATokenRequest>(request: R, defaultValue?: FieldsSelection<AToken, R>[]) => Observable<FieldsSelection<AToken, R>[]>})&({get: <R extends ATokenRequest>(request: R, defaultValue?: FieldsSelection<AToken, R>[]) => Observable<FieldsSelection<AToken, R>[]>}),
    variableDebtToken: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => VariableDebtTokenObservableChain & {get: <R extends VariableDebtTokenRequest>(request: R, defaultValue?: (FieldsSelection<VariableDebtToken, R> | undefined)) => Observable<(FieldsSelection<VariableDebtToken, R> | undefined)>}),
    variableDebtTokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VariableDebtToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VariableDebtToken_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends VariableDebtTokenRequest>(request: R, defaultValue?: FieldsSelection<VariableDebtToken, R>[]) => Observable<FieldsSelection<VariableDebtToken, R>[]>})&({get: <R extends VariableDebtTokenRequest>(request: R, defaultValue?: FieldsSelection<VariableDebtToken, R>[]) => Observable<FieldsSelection<VariableDebtToken, R>[]>}),
    stableDebtToken: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => StableDebtTokenObservableChain & {get: <R extends StableDebtTokenRequest>(request: R, defaultValue?: (FieldsSelection<StableDebtToken, R> | undefined)) => Observable<(FieldsSelection<StableDebtToken, R> | undefined)>}),
    stableDebtTokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StableDebtToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StableDebtToken_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends StableDebtTokenRequest>(request: R, defaultValue?: FieldsSelection<StableDebtToken, R>[]) => Observable<FieldsSelection<StableDebtToken, R>[]>})&({get: <R extends StableDebtTokenRequest>(request: R, defaultValue?: FieldsSelection<StableDebtToken, R>[]) => Observable<FieldsSelection<StableDebtToken, R>[]>}),
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
    incentivesController: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => IncentivesControllerObservableChain & {get: <R extends IncentivesControllerRequest>(request: R, defaultValue?: (FieldsSelection<IncentivesController, R> | undefined)) => Observable<(FieldsSelection<IncentivesController, R> | undefined)>}),
    incentivesControllers: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (IncentivesController_orderBy | null),orderDirection?: (OrderDirection | null),where?: (IncentivesController_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends IncentivesControllerRequest>(request: R, defaultValue?: FieldsSelection<IncentivesController, R>[]) => Observable<FieldsSelection<IncentivesController, R>[]>})&({get: <R extends IncentivesControllerRequest>(request: R, defaultValue?: FieldsSelection<IncentivesController, R>[]) => Observable<FieldsSelection<IncentivesController, R>[]>}),
    incentivizedAction: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => IncentivizedActionObservableChain & {get: <R extends IncentivizedActionRequest>(request: R, defaultValue?: (FieldsSelection<IncentivizedAction, R> | undefined)) => Observable<(FieldsSelection<IncentivizedAction, R> | undefined)>}),
    incentivizedActions: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (IncentivizedAction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (IncentivizedAction_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends IncentivizedActionRequest>(request: R, defaultValue?: FieldsSelection<IncentivizedAction, R>[]) => Observable<FieldsSelection<IncentivizedAction, R>[]>})&({get: <R extends IncentivizedActionRequest>(request: R, defaultValue?: FieldsSelection<IncentivizedAction, R>[]) => Observable<FieldsSelection<IncentivizedAction, R>[]>}),
    claimIncentiveCall: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ClaimIncentiveCallObservableChain & {get: <R extends ClaimIncentiveCallRequest>(request: R, defaultValue?: (FieldsSelection<ClaimIncentiveCall, R> | undefined)) => Observable<(FieldsSelection<ClaimIncentiveCall, R> | undefined)>}),
    claimIncentiveCalls: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ClaimIncentiveCall_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ClaimIncentiveCall_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ClaimIncentiveCallRequest>(request: R, defaultValue?: FieldsSelection<ClaimIncentiveCall, R>[]) => Observable<FieldsSelection<ClaimIncentiveCall, R>[]>})&({get: <R extends ClaimIncentiveCallRequest>(request: R, defaultValue?: FieldsSelection<ClaimIncentiveCall, R>[]) => Observable<FieldsSelection<ClaimIncentiveCall, R>[]>}),
    mapAssetPool: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => MapAssetPoolObservableChain & {get: <R extends MapAssetPoolRequest>(request: R, defaultValue?: (FieldsSelection<MapAssetPool, R> | undefined)) => Observable<(FieldsSelection<MapAssetPool, R> | undefined)>}),
    mapAssetPools: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (MapAssetPool_orderBy | null),orderDirection?: (OrderDirection | null),where?: (MapAssetPool_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends MapAssetPoolRequest>(request: R, defaultValue?: FieldsSelection<MapAssetPool, R>[]) => Observable<FieldsSelection<MapAssetPool, R>[]>})&({get: <R extends MapAssetPoolRequest>(request: R, defaultValue?: FieldsSelection<MapAssetPool, R>[]) => Observable<FieldsSelection<MapAssetPool, R>[]>}),
    reserve: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ReserveObservableChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: (FieldsSelection<Reserve, R> | undefined)) => Observable<(FieldsSelection<Reserve, R> | undefined)>}),
    reserves: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Reserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Reserve_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>[]) => Observable<FieldsSelection<Reserve, R>[]>})&({get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>[]) => Observable<FieldsSelection<Reserve, R>[]>}),
    wethreserve: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => WETHReserveObservableChain & {get: <R extends WETHReserveRequest>(request: R, defaultValue?: (FieldsSelection<WETHReserve, R> | undefined)) => Observable<(FieldsSelection<WETHReserve, R> | undefined)>}),
    wethreserves: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (WETHReserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (WETHReserve_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends WETHReserveRequest>(request: R, defaultValue?: FieldsSelection<WETHReserve, R>[]) => Observable<FieldsSelection<WETHReserve, R>[]>})&({get: <R extends WETHReserveRequest>(request: R, defaultValue?: FieldsSelection<WETHReserve, R>[]) => Observable<FieldsSelection<WETHReserve, R>[]>}),
    atokenBalanceHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ATokenBalanceHistoryItemObservableChain & {get: <R extends ATokenBalanceHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<ATokenBalanceHistoryItem, R> | undefined)) => Observable<(FieldsSelection<ATokenBalanceHistoryItem, R> | undefined)>}),
    atokenBalanceHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ATokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ATokenBalanceHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ATokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ATokenBalanceHistoryItem, R>[]) => Observable<FieldsSelection<ATokenBalanceHistoryItem, R>[]>})&({get: <R extends ATokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ATokenBalanceHistoryItem, R>[]) => Observable<FieldsSelection<ATokenBalanceHistoryItem, R>[]>}),
    vtokenBalanceHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => VTokenBalanceHistoryItemObservableChain & {get: <R extends VTokenBalanceHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<VTokenBalanceHistoryItem, R> | undefined)) => Observable<(FieldsSelection<VTokenBalanceHistoryItem, R> | undefined)>}),
    vtokenBalanceHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VTokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VTokenBalanceHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends VTokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<VTokenBalanceHistoryItem, R>[]) => Observable<FieldsSelection<VTokenBalanceHistoryItem, R>[]>})&({get: <R extends VTokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<VTokenBalanceHistoryItem, R>[]) => Observable<FieldsSelection<VTokenBalanceHistoryItem, R>[]>}),
    stokenBalanceHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => STokenBalanceHistoryItemObservableChain & {get: <R extends STokenBalanceHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<STokenBalanceHistoryItem, R> | undefined)) => Observable<(FieldsSelection<STokenBalanceHistoryItem, R> | undefined)>}),
    stokenBalanceHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (STokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (STokenBalanceHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends STokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<STokenBalanceHistoryItem, R>[]) => Observable<FieldsSelection<STokenBalanceHistoryItem, R>[]>})&({get: <R extends STokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<STokenBalanceHistoryItem, R>[]) => Observable<FieldsSelection<STokenBalanceHistoryItem, R>[]>}),
    stableTokenDelegatedAllowance: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => StableTokenDelegatedAllowanceObservableChain & {get: <R extends StableTokenDelegatedAllowanceRequest>(request: R, defaultValue?: (FieldsSelection<StableTokenDelegatedAllowance, R> | undefined)) => Observable<(FieldsSelection<StableTokenDelegatedAllowance, R> | undefined)>}),
    stableTokenDelegatedAllowances: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StableTokenDelegatedAllowance_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StableTokenDelegatedAllowance_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends StableTokenDelegatedAllowanceRequest>(request: R, defaultValue?: FieldsSelection<StableTokenDelegatedAllowance, R>[]) => Observable<FieldsSelection<StableTokenDelegatedAllowance, R>[]>})&({get: <R extends StableTokenDelegatedAllowanceRequest>(request: R, defaultValue?: FieldsSelection<StableTokenDelegatedAllowance, R>[]) => Observable<FieldsSelection<StableTokenDelegatedAllowance, R>[]>}),
    variableTokenDelegatedAllowance: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => VariableTokenDelegatedAllowanceObservableChain & {get: <R extends VariableTokenDelegatedAllowanceRequest>(request: R, defaultValue?: (FieldsSelection<VariableTokenDelegatedAllowance, R> | undefined)) => Observable<(FieldsSelection<VariableTokenDelegatedAllowance, R> | undefined)>}),
    variableTokenDelegatedAllowances: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VariableTokenDelegatedAllowance_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VariableTokenDelegatedAllowance_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends VariableTokenDelegatedAllowanceRequest>(request: R, defaultValue?: FieldsSelection<VariableTokenDelegatedAllowance, R>[]) => Observable<FieldsSelection<VariableTokenDelegatedAllowance, R>[]>})&({get: <R extends VariableTokenDelegatedAllowanceRequest>(request: R, defaultValue?: FieldsSelection<VariableTokenDelegatedAllowance, R>[]) => Observable<FieldsSelection<VariableTokenDelegatedAllowance, R>[]>}),
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
    swapHistory: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => SwapHistoryObservableChain & {get: <R extends SwapHistoryRequest>(request: R, defaultValue?: (FieldsSelection<SwapHistory, R> | undefined)) => Observable<(FieldsSelection<SwapHistory, R> | undefined)>}),
    swapHistories: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (SwapHistory_orderBy | null),orderDirection?: (OrderDirection | null),where?: (SwapHistory_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends SwapHistoryRequest>(request: R, defaultValue?: FieldsSelection<SwapHistory, R>[]) => Observable<FieldsSelection<SwapHistory, R>[]>})&({get: <R extends SwapHistoryRequest>(request: R, defaultValue?: FieldsSelection<SwapHistory, R>[]) => Observable<FieldsSelection<SwapHistory, R>[]>}),
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
    onBehalfOf: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Promise<FieldsSelection<User, R>>}),
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
    onBehalfOf: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Observable<FieldsSelection<User, R>>}),
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
    onBehalfOf: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Promise<FieldsSelection<User, R>>}),
    reserve: (ReservePromiseChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Promise<FieldsSelection<Reserve, R>>}),
    userReserve: (UserReservePromiseChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Promise<FieldsSelection<UserReserve, R>>}),
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
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
    onBehalfOf: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Observable<FieldsSelection<User, R>>}),
    reserve: (ReserveObservableChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>) => Observable<FieldsSelection<Reserve, R>>}),
    userReserve: (UserReserveObservableChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Observable<FieldsSelection<UserReserve, R>>}),
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
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
    isFrozen: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
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
    totalATokenSupply: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    totalLiquidityAsCollateral: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    availableLiquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    totalPrincipalStableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    totalScaledVariableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    totalCurrentVariableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    totalDeposits: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    liquidityRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    averageStableRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    variableBorrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    stableBorrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    liquidityIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    variableBorrowIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    aToken: (ATokenPromiseChain & {get: <R extends ATokenRequest>(request: R, defaultValue?: FieldsSelection<AToken, R>) => Promise<FieldsSelection<AToken, R>>}),
    vToken: (VTokenPromiseChain & {get: <R extends VTokenRequest>(request: R, defaultValue?: FieldsSelection<VToken, R>) => Promise<FieldsSelection<VToken, R>>}),
    sToken: (STokenPromiseChain & {get: <R extends STokenRequest>(request: R, defaultValue?: FieldsSelection<SToken, R>) => Promise<FieldsSelection<SToken, R>>}),
    reserveFactor: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lastUpdateTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    stableDebtLastUpdateTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    aEmissionPerSecond: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    vEmissionPerSecond: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    sEmissionPerSecond: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    aTokenIncentivesIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    vTokenIncentivesIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    sTokenIncentivesIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    aIncentivesLastUpdateTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    vIncentivesLastUpdateTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    sIncentivesLastUpdateTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    lifetimeLiquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimePrincipalStableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeScaledVariableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeCurrentVariableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeRepayments: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeWithdrawals: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeBorrows: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeLiquidated: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeFlashLoans: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeFlashLoanPremium: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeDepositorsInterestEarned: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeReserveFactorAccrued: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
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
    isFrozen: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
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
    totalATokenSupply: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    totalLiquidityAsCollateral: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    availableLiquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    totalPrincipalStableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    totalScaledVariableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    totalCurrentVariableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    totalDeposits: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    liquidityRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    averageStableRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    variableBorrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    stableBorrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    liquidityIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    variableBorrowIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    aToken: (ATokenObservableChain & {get: <R extends ATokenRequest>(request: R, defaultValue?: FieldsSelection<AToken, R>) => Observable<FieldsSelection<AToken, R>>}),
    vToken: (VTokenObservableChain & {get: <R extends VTokenRequest>(request: R, defaultValue?: FieldsSelection<VToken, R>) => Observable<FieldsSelection<VToken, R>>}),
    sToken: (STokenObservableChain & {get: <R extends STokenRequest>(request: R, defaultValue?: FieldsSelection<SToken, R>) => Observable<FieldsSelection<SToken, R>>}),
    reserveFactor: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lastUpdateTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    stableDebtLastUpdateTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    aEmissionPerSecond: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    vEmissionPerSecond: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    sEmissionPerSecond: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    aTokenIncentivesIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    vTokenIncentivesIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    sTokenIncentivesIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    aIncentivesLastUpdateTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    vIncentivesLastUpdateTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    sIncentivesLastUpdateTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    lifetimeLiquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimePrincipalStableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeScaledVariableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeCurrentVariableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeRepayments: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeWithdrawals: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeBorrows: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeLiquidated: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeFlashLoans: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeFlashLoanPremium: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeDepositorsInterestEarned: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeReserveFactorAccrued: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
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
    isFrozen: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
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
    isFrozen: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
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
    totalATokenSupply: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    totalLiquidityAsCollateral: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    availableLiquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    priceInEth: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    priceInUsd: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    totalScaledVariableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    totalCurrentVariableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    totalPrincipalStableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimePrincipalStableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeScaledVariableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeCurrentVariableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeLiquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeRepayments: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeWithdrawals: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeBorrows: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeLiquidated: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeFlashLoans: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeFlashLoanPremium: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeReserveFactorAccrued: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeDepositorsInterestEarned: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>})
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
    totalATokenSupply: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    totalLiquidityAsCollateral: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    availableLiquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    priceInEth: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    priceInUsd: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    totalScaledVariableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    totalCurrentVariableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    totalPrincipalStableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimePrincipalStableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeScaledVariableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeCurrentVariableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeLiquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeRepayments: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeWithdrawals: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeBorrows: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeLiquidated: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeFlashLoans: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeFlashLoanPremium: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeReserveFactorAccrued: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeDepositorsInterestEarned: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>})
}

export interface STokenPromiseChain{
    
/**
 * SToken address
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>}),
    underlyingAssetAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    underlyingAssetDecimals: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    tokenContractImpl: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>})
}

export interface STokenObservableChain{
    
/**
 * SToken address
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    underlyingAssetAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    underlyingAssetDecimals: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    tokenContractImpl: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>})
}

export interface STokenBalanceHistoryItemPromiseChain{
    
/**
 * userReserve + txHash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    userReserve: (UserReservePromiseChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Promise<FieldsSelection<UserReserve, R>>}),
    principalStableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    currentStableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    avgStableBorrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>})
}

export interface STokenBalanceHistoryItemObservableChain{
    
/**
 * userReserve + txHash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    userReserve: (UserReserveObservableChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Observable<FieldsSelection<UserReserve, R>>}),
    principalStableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    currentStableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    avgStableBorrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>})
}

export interface StableDebtTokenPromiseChain{
    
/**
 * StableDebtToken address
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>}),
    underlyingAssetAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    underlyingAssetDecimals: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface StableDebtTokenObservableChain{
    
/**
 * StableDebtToken address
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    underlyingAssetAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    underlyingAssetDecimals: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface StableTokenDelegatedAllowancePromiseChain{
    
/**
 * stable + fromuser address + touser address+ reserve address
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    fromUser: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Promise<FieldsSelection<User, R>>}),
    toUser: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Promise<FieldsSelection<User, R>>}),
    amountAllowed: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    userReserve: (UserReservePromiseChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Promise<FieldsSelection<UserReserve, R>>})
}

export interface StableTokenDelegatedAllowanceObservableChain{
    
/**
 * stable + fromuser address + touser address+ reserve address
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    fromUser: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Observable<FieldsSelection<User, R>>}),
    toUser: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Observable<FieldsSelection<User, R>>}),
    amountAllowed: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    userReserve: (UserReserveObservableChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Observable<FieldsSelection<UserReserve, R>>})
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
    chainlinkENS: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ChainlinkENSPromiseChain & {get: <R extends ChainlinkENSRequest>(request: R, defaultValue?: (FieldsSelection<ChainlinkENS, R> | undefined)) => Promise<(FieldsSelection<ChainlinkENS, R> | undefined)>}),
    chainlinkENSs: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ChainlinkENS_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ChainlinkENS_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ChainlinkENSRequest>(request: R, defaultValue?: FieldsSelection<ChainlinkENS, R>[]) => Promise<FieldsSelection<ChainlinkENS, R>[]>})&({get: <R extends ChainlinkENSRequest>(request: R, defaultValue?: FieldsSelection<ChainlinkENS, R>[]) => Promise<FieldsSelection<ChainlinkENS, R>[]>}),
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
    stoken: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => STokenPromiseChain & {get: <R extends STokenRequest>(request: R, defaultValue?: (FieldsSelection<SToken, R> | undefined)) => Promise<(FieldsSelection<SToken, R> | undefined)>}),
    stokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (SToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (SToken_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends STokenRequest>(request: R, defaultValue?: FieldsSelection<SToken, R>[]) => Promise<FieldsSelection<SToken, R>[]>})&({get: <R extends STokenRequest>(request: R, defaultValue?: FieldsSelection<SToken, R>[]) => Promise<FieldsSelection<SToken, R>[]>}),
    vtoken: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => VTokenPromiseChain & {get: <R extends VTokenRequest>(request: R, defaultValue?: (FieldsSelection<VToken, R> | undefined)) => Promise<(FieldsSelection<VToken, R> | undefined)>}),
    vtokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VToken_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends VTokenRequest>(request: R, defaultValue?: FieldsSelection<VToken, R>[]) => Promise<FieldsSelection<VToken, R>[]>})&({get: <R extends VTokenRequest>(request: R, defaultValue?: FieldsSelection<VToken, R>[]) => Promise<FieldsSelection<VToken, R>[]>}),
    atoken: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ATokenPromiseChain & {get: <R extends ATokenRequest>(request: R, defaultValue?: (FieldsSelection<AToken, R> | undefined)) => Promise<(FieldsSelection<AToken, R> | undefined)>}),
    atokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (AToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (AToken_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ATokenRequest>(request: R, defaultValue?: FieldsSelection<AToken, R>[]) => Promise<FieldsSelection<AToken, R>[]>})&({get: <R extends ATokenRequest>(request: R, defaultValue?: FieldsSelection<AToken, R>[]) => Promise<FieldsSelection<AToken, R>[]>}),
    variableDebtToken: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => VariableDebtTokenPromiseChain & {get: <R extends VariableDebtTokenRequest>(request: R, defaultValue?: (FieldsSelection<VariableDebtToken, R> | undefined)) => Promise<(FieldsSelection<VariableDebtToken, R> | undefined)>}),
    variableDebtTokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VariableDebtToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VariableDebtToken_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends VariableDebtTokenRequest>(request: R, defaultValue?: FieldsSelection<VariableDebtToken, R>[]) => Promise<FieldsSelection<VariableDebtToken, R>[]>})&({get: <R extends VariableDebtTokenRequest>(request: R, defaultValue?: FieldsSelection<VariableDebtToken, R>[]) => Promise<FieldsSelection<VariableDebtToken, R>[]>}),
    stableDebtToken: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => StableDebtTokenPromiseChain & {get: <R extends StableDebtTokenRequest>(request: R, defaultValue?: (FieldsSelection<StableDebtToken, R> | undefined)) => Promise<(FieldsSelection<StableDebtToken, R> | undefined)>}),
    stableDebtTokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StableDebtToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StableDebtToken_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends StableDebtTokenRequest>(request: R, defaultValue?: FieldsSelection<StableDebtToken, R>[]) => Promise<FieldsSelection<StableDebtToken, R>[]>})&({get: <R extends StableDebtTokenRequest>(request: R, defaultValue?: FieldsSelection<StableDebtToken, R>[]) => Promise<FieldsSelection<StableDebtToken, R>[]>}),
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
    incentivesController: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => IncentivesControllerPromiseChain & {get: <R extends IncentivesControllerRequest>(request: R, defaultValue?: (FieldsSelection<IncentivesController, R> | undefined)) => Promise<(FieldsSelection<IncentivesController, R> | undefined)>}),
    incentivesControllers: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (IncentivesController_orderBy | null),orderDirection?: (OrderDirection | null),where?: (IncentivesController_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends IncentivesControllerRequest>(request: R, defaultValue?: FieldsSelection<IncentivesController, R>[]) => Promise<FieldsSelection<IncentivesController, R>[]>})&({get: <R extends IncentivesControllerRequest>(request: R, defaultValue?: FieldsSelection<IncentivesController, R>[]) => Promise<FieldsSelection<IncentivesController, R>[]>}),
    incentivizedAction: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => IncentivizedActionPromiseChain & {get: <R extends IncentivizedActionRequest>(request: R, defaultValue?: (FieldsSelection<IncentivizedAction, R> | undefined)) => Promise<(FieldsSelection<IncentivizedAction, R> | undefined)>}),
    incentivizedActions: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (IncentivizedAction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (IncentivizedAction_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends IncentivizedActionRequest>(request: R, defaultValue?: FieldsSelection<IncentivizedAction, R>[]) => Promise<FieldsSelection<IncentivizedAction, R>[]>})&({get: <R extends IncentivizedActionRequest>(request: R, defaultValue?: FieldsSelection<IncentivizedAction, R>[]) => Promise<FieldsSelection<IncentivizedAction, R>[]>}),
    claimIncentiveCall: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ClaimIncentiveCallPromiseChain & {get: <R extends ClaimIncentiveCallRequest>(request: R, defaultValue?: (FieldsSelection<ClaimIncentiveCall, R> | undefined)) => Promise<(FieldsSelection<ClaimIncentiveCall, R> | undefined)>}),
    claimIncentiveCalls: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ClaimIncentiveCall_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ClaimIncentiveCall_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ClaimIncentiveCallRequest>(request: R, defaultValue?: FieldsSelection<ClaimIncentiveCall, R>[]) => Promise<FieldsSelection<ClaimIncentiveCall, R>[]>})&({get: <R extends ClaimIncentiveCallRequest>(request: R, defaultValue?: FieldsSelection<ClaimIncentiveCall, R>[]) => Promise<FieldsSelection<ClaimIncentiveCall, R>[]>}),
    mapAssetPool: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => MapAssetPoolPromiseChain & {get: <R extends MapAssetPoolRequest>(request: R, defaultValue?: (FieldsSelection<MapAssetPool, R> | undefined)) => Promise<(FieldsSelection<MapAssetPool, R> | undefined)>}),
    mapAssetPools: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (MapAssetPool_orderBy | null),orderDirection?: (OrderDirection | null),where?: (MapAssetPool_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends MapAssetPoolRequest>(request: R, defaultValue?: FieldsSelection<MapAssetPool, R>[]) => Promise<FieldsSelection<MapAssetPool, R>[]>})&({get: <R extends MapAssetPoolRequest>(request: R, defaultValue?: FieldsSelection<MapAssetPool, R>[]) => Promise<FieldsSelection<MapAssetPool, R>[]>}),
    reserve: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ReservePromiseChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: (FieldsSelection<Reserve, R> | undefined)) => Promise<(FieldsSelection<Reserve, R> | undefined)>}),
    reserves: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Reserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Reserve_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>[]) => Promise<FieldsSelection<Reserve, R>[]>})&({get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>[]) => Promise<FieldsSelection<Reserve, R>[]>}),
    wethreserve: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => WETHReservePromiseChain & {get: <R extends WETHReserveRequest>(request: R, defaultValue?: (FieldsSelection<WETHReserve, R> | undefined)) => Promise<(FieldsSelection<WETHReserve, R> | undefined)>}),
    wethreserves: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (WETHReserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (WETHReserve_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends WETHReserveRequest>(request: R, defaultValue?: FieldsSelection<WETHReserve, R>[]) => Promise<FieldsSelection<WETHReserve, R>[]>})&({get: <R extends WETHReserveRequest>(request: R, defaultValue?: FieldsSelection<WETHReserve, R>[]) => Promise<FieldsSelection<WETHReserve, R>[]>}),
    atokenBalanceHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ATokenBalanceHistoryItemPromiseChain & {get: <R extends ATokenBalanceHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<ATokenBalanceHistoryItem, R> | undefined)) => Promise<(FieldsSelection<ATokenBalanceHistoryItem, R> | undefined)>}),
    atokenBalanceHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ATokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ATokenBalanceHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ATokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ATokenBalanceHistoryItem, R>[]) => Promise<FieldsSelection<ATokenBalanceHistoryItem, R>[]>})&({get: <R extends ATokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ATokenBalanceHistoryItem, R>[]) => Promise<FieldsSelection<ATokenBalanceHistoryItem, R>[]>}),
    vtokenBalanceHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => VTokenBalanceHistoryItemPromiseChain & {get: <R extends VTokenBalanceHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<VTokenBalanceHistoryItem, R> | undefined)) => Promise<(FieldsSelection<VTokenBalanceHistoryItem, R> | undefined)>}),
    vtokenBalanceHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VTokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VTokenBalanceHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends VTokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<VTokenBalanceHistoryItem, R>[]) => Promise<FieldsSelection<VTokenBalanceHistoryItem, R>[]>})&({get: <R extends VTokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<VTokenBalanceHistoryItem, R>[]) => Promise<FieldsSelection<VTokenBalanceHistoryItem, R>[]>}),
    stokenBalanceHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => STokenBalanceHistoryItemPromiseChain & {get: <R extends STokenBalanceHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<STokenBalanceHistoryItem, R> | undefined)) => Promise<(FieldsSelection<STokenBalanceHistoryItem, R> | undefined)>}),
    stokenBalanceHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (STokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (STokenBalanceHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends STokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<STokenBalanceHistoryItem, R>[]) => Promise<FieldsSelection<STokenBalanceHistoryItem, R>[]>})&({get: <R extends STokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<STokenBalanceHistoryItem, R>[]) => Promise<FieldsSelection<STokenBalanceHistoryItem, R>[]>}),
    stableTokenDelegatedAllowance: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => StableTokenDelegatedAllowancePromiseChain & {get: <R extends StableTokenDelegatedAllowanceRequest>(request: R, defaultValue?: (FieldsSelection<StableTokenDelegatedAllowance, R> | undefined)) => Promise<(FieldsSelection<StableTokenDelegatedAllowance, R> | undefined)>}),
    stableTokenDelegatedAllowances: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StableTokenDelegatedAllowance_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StableTokenDelegatedAllowance_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends StableTokenDelegatedAllowanceRequest>(request: R, defaultValue?: FieldsSelection<StableTokenDelegatedAllowance, R>[]) => Promise<FieldsSelection<StableTokenDelegatedAllowance, R>[]>})&({get: <R extends StableTokenDelegatedAllowanceRequest>(request: R, defaultValue?: FieldsSelection<StableTokenDelegatedAllowance, R>[]) => Promise<FieldsSelection<StableTokenDelegatedAllowance, R>[]>}),
    variableTokenDelegatedAllowance: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => VariableTokenDelegatedAllowancePromiseChain & {get: <R extends VariableTokenDelegatedAllowanceRequest>(request: R, defaultValue?: (FieldsSelection<VariableTokenDelegatedAllowance, R> | undefined)) => Promise<(FieldsSelection<VariableTokenDelegatedAllowance, R> | undefined)>}),
    variableTokenDelegatedAllowances: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VariableTokenDelegatedAllowance_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VariableTokenDelegatedAllowance_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends VariableTokenDelegatedAllowanceRequest>(request: R, defaultValue?: FieldsSelection<VariableTokenDelegatedAllowance, R>[]) => Promise<FieldsSelection<VariableTokenDelegatedAllowance, R>[]>})&({get: <R extends VariableTokenDelegatedAllowanceRequest>(request: R, defaultValue?: FieldsSelection<VariableTokenDelegatedAllowance, R>[]) => Promise<FieldsSelection<VariableTokenDelegatedAllowance, R>[]>}),
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
    swapHistory: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => SwapHistoryPromiseChain & {get: <R extends SwapHistoryRequest>(request: R, defaultValue?: (FieldsSelection<SwapHistory, R> | undefined)) => Promise<(FieldsSelection<SwapHistory, R> | undefined)>}),
    swapHistories: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (SwapHistory_orderBy | null),orderDirection?: (OrderDirection | null),where?: (SwapHistory_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends SwapHistoryRequest>(request: R, defaultValue?: FieldsSelection<SwapHistory, R>[]) => Promise<FieldsSelection<SwapHistory, R>[]>})&({get: <R extends SwapHistoryRequest>(request: R, defaultValue?: FieldsSelection<SwapHistory, R>[]) => Promise<FieldsSelection<SwapHistory, R>[]>}),
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
    chainlinkENS: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ChainlinkENSObservableChain & {get: <R extends ChainlinkENSRequest>(request: R, defaultValue?: (FieldsSelection<ChainlinkENS, R> | undefined)) => Observable<(FieldsSelection<ChainlinkENS, R> | undefined)>}),
    chainlinkENSs: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ChainlinkENS_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ChainlinkENS_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ChainlinkENSRequest>(request: R, defaultValue?: FieldsSelection<ChainlinkENS, R>[]) => Observable<FieldsSelection<ChainlinkENS, R>[]>})&({get: <R extends ChainlinkENSRequest>(request: R, defaultValue?: FieldsSelection<ChainlinkENS, R>[]) => Observable<FieldsSelection<ChainlinkENS, R>[]>}),
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
    stoken: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => STokenObservableChain & {get: <R extends STokenRequest>(request: R, defaultValue?: (FieldsSelection<SToken, R> | undefined)) => Observable<(FieldsSelection<SToken, R> | undefined)>}),
    stokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (SToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (SToken_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends STokenRequest>(request: R, defaultValue?: FieldsSelection<SToken, R>[]) => Observable<FieldsSelection<SToken, R>[]>})&({get: <R extends STokenRequest>(request: R, defaultValue?: FieldsSelection<SToken, R>[]) => Observable<FieldsSelection<SToken, R>[]>}),
    vtoken: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => VTokenObservableChain & {get: <R extends VTokenRequest>(request: R, defaultValue?: (FieldsSelection<VToken, R> | undefined)) => Observable<(FieldsSelection<VToken, R> | undefined)>}),
    vtokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VToken_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends VTokenRequest>(request: R, defaultValue?: FieldsSelection<VToken, R>[]) => Observable<FieldsSelection<VToken, R>[]>})&({get: <R extends VTokenRequest>(request: R, defaultValue?: FieldsSelection<VToken, R>[]) => Observable<FieldsSelection<VToken, R>[]>}),
    atoken: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ATokenObservableChain & {get: <R extends ATokenRequest>(request: R, defaultValue?: (FieldsSelection<AToken, R> | undefined)) => Observable<(FieldsSelection<AToken, R> | undefined)>}),
    atokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (AToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (AToken_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ATokenRequest>(request: R, defaultValue?: FieldsSelection<AToken, R>[]) => Observable<FieldsSelection<AToken, R>[]>})&({get: <R extends ATokenRequest>(request: R, defaultValue?: FieldsSelection<AToken, R>[]) => Observable<FieldsSelection<AToken, R>[]>}),
    variableDebtToken: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => VariableDebtTokenObservableChain & {get: <R extends VariableDebtTokenRequest>(request: R, defaultValue?: (FieldsSelection<VariableDebtToken, R> | undefined)) => Observable<(FieldsSelection<VariableDebtToken, R> | undefined)>}),
    variableDebtTokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VariableDebtToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VariableDebtToken_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends VariableDebtTokenRequest>(request: R, defaultValue?: FieldsSelection<VariableDebtToken, R>[]) => Observable<FieldsSelection<VariableDebtToken, R>[]>})&({get: <R extends VariableDebtTokenRequest>(request: R, defaultValue?: FieldsSelection<VariableDebtToken, R>[]) => Observable<FieldsSelection<VariableDebtToken, R>[]>}),
    stableDebtToken: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => StableDebtTokenObservableChain & {get: <R extends StableDebtTokenRequest>(request: R, defaultValue?: (FieldsSelection<StableDebtToken, R> | undefined)) => Observable<(FieldsSelection<StableDebtToken, R> | undefined)>}),
    stableDebtTokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StableDebtToken_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StableDebtToken_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends StableDebtTokenRequest>(request: R, defaultValue?: FieldsSelection<StableDebtToken, R>[]) => Observable<FieldsSelection<StableDebtToken, R>[]>})&({get: <R extends StableDebtTokenRequest>(request: R, defaultValue?: FieldsSelection<StableDebtToken, R>[]) => Observable<FieldsSelection<StableDebtToken, R>[]>}),
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
    incentivesController: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => IncentivesControllerObservableChain & {get: <R extends IncentivesControllerRequest>(request: R, defaultValue?: (FieldsSelection<IncentivesController, R> | undefined)) => Observable<(FieldsSelection<IncentivesController, R> | undefined)>}),
    incentivesControllers: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (IncentivesController_orderBy | null),orderDirection?: (OrderDirection | null),where?: (IncentivesController_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends IncentivesControllerRequest>(request: R, defaultValue?: FieldsSelection<IncentivesController, R>[]) => Observable<FieldsSelection<IncentivesController, R>[]>})&({get: <R extends IncentivesControllerRequest>(request: R, defaultValue?: FieldsSelection<IncentivesController, R>[]) => Observable<FieldsSelection<IncentivesController, R>[]>}),
    incentivizedAction: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => IncentivizedActionObservableChain & {get: <R extends IncentivizedActionRequest>(request: R, defaultValue?: (FieldsSelection<IncentivizedAction, R> | undefined)) => Observable<(FieldsSelection<IncentivizedAction, R> | undefined)>}),
    incentivizedActions: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (IncentivizedAction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (IncentivizedAction_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends IncentivizedActionRequest>(request: R, defaultValue?: FieldsSelection<IncentivizedAction, R>[]) => Observable<FieldsSelection<IncentivizedAction, R>[]>})&({get: <R extends IncentivizedActionRequest>(request: R, defaultValue?: FieldsSelection<IncentivizedAction, R>[]) => Observable<FieldsSelection<IncentivizedAction, R>[]>}),
    claimIncentiveCall: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ClaimIncentiveCallObservableChain & {get: <R extends ClaimIncentiveCallRequest>(request: R, defaultValue?: (FieldsSelection<ClaimIncentiveCall, R> | undefined)) => Observable<(FieldsSelection<ClaimIncentiveCall, R> | undefined)>}),
    claimIncentiveCalls: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ClaimIncentiveCall_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ClaimIncentiveCall_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ClaimIncentiveCallRequest>(request: R, defaultValue?: FieldsSelection<ClaimIncentiveCall, R>[]) => Observable<FieldsSelection<ClaimIncentiveCall, R>[]>})&({get: <R extends ClaimIncentiveCallRequest>(request: R, defaultValue?: FieldsSelection<ClaimIncentiveCall, R>[]) => Observable<FieldsSelection<ClaimIncentiveCall, R>[]>}),
    mapAssetPool: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => MapAssetPoolObservableChain & {get: <R extends MapAssetPoolRequest>(request: R, defaultValue?: (FieldsSelection<MapAssetPool, R> | undefined)) => Observable<(FieldsSelection<MapAssetPool, R> | undefined)>}),
    mapAssetPools: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (MapAssetPool_orderBy | null),orderDirection?: (OrderDirection | null),where?: (MapAssetPool_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends MapAssetPoolRequest>(request: R, defaultValue?: FieldsSelection<MapAssetPool, R>[]) => Observable<FieldsSelection<MapAssetPool, R>[]>})&({get: <R extends MapAssetPoolRequest>(request: R, defaultValue?: FieldsSelection<MapAssetPool, R>[]) => Observable<FieldsSelection<MapAssetPool, R>[]>}),
    reserve: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ReserveObservableChain & {get: <R extends ReserveRequest>(request: R, defaultValue?: (FieldsSelection<Reserve, R> | undefined)) => Observable<(FieldsSelection<Reserve, R> | undefined)>}),
    reserves: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Reserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Reserve_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>[]) => Observable<FieldsSelection<Reserve, R>[]>})&({get: <R extends ReserveRequest>(request: R, defaultValue?: FieldsSelection<Reserve, R>[]) => Observable<FieldsSelection<Reserve, R>[]>}),
    wethreserve: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => WETHReserveObservableChain & {get: <R extends WETHReserveRequest>(request: R, defaultValue?: (FieldsSelection<WETHReserve, R> | undefined)) => Observable<(FieldsSelection<WETHReserve, R> | undefined)>}),
    wethreserves: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (WETHReserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (WETHReserve_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends WETHReserveRequest>(request: R, defaultValue?: FieldsSelection<WETHReserve, R>[]) => Observable<FieldsSelection<WETHReserve, R>[]>})&({get: <R extends WETHReserveRequest>(request: R, defaultValue?: FieldsSelection<WETHReserve, R>[]) => Observable<FieldsSelection<WETHReserve, R>[]>}),
    atokenBalanceHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => ATokenBalanceHistoryItemObservableChain & {get: <R extends ATokenBalanceHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<ATokenBalanceHistoryItem, R> | undefined)) => Observable<(FieldsSelection<ATokenBalanceHistoryItem, R> | undefined)>}),
    atokenBalanceHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ATokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ATokenBalanceHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends ATokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ATokenBalanceHistoryItem, R>[]) => Observable<FieldsSelection<ATokenBalanceHistoryItem, R>[]>})&({get: <R extends ATokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ATokenBalanceHistoryItem, R>[]) => Observable<FieldsSelection<ATokenBalanceHistoryItem, R>[]>}),
    vtokenBalanceHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => VTokenBalanceHistoryItemObservableChain & {get: <R extends VTokenBalanceHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<VTokenBalanceHistoryItem, R> | undefined)) => Observable<(FieldsSelection<VTokenBalanceHistoryItem, R> | undefined)>}),
    vtokenBalanceHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VTokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VTokenBalanceHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends VTokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<VTokenBalanceHistoryItem, R>[]) => Observable<FieldsSelection<VTokenBalanceHistoryItem, R>[]>})&({get: <R extends VTokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<VTokenBalanceHistoryItem, R>[]) => Observable<FieldsSelection<VTokenBalanceHistoryItem, R>[]>}),
    stokenBalanceHistoryItem: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => STokenBalanceHistoryItemObservableChain & {get: <R extends STokenBalanceHistoryItemRequest>(request: R, defaultValue?: (FieldsSelection<STokenBalanceHistoryItem, R> | undefined)) => Observable<(FieldsSelection<STokenBalanceHistoryItem, R> | undefined)>}),
    stokenBalanceHistoryItems: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (STokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (STokenBalanceHistoryItem_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends STokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<STokenBalanceHistoryItem, R>[]) => Observable<FieldsSelection<STokenBalanceHistoryItem, R>[]>})&({get: <R extends STokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<STokenBalanceHistoryItem, R>[]) => Observable<FieldsSelection<STokenBalanceHistoryItem, R>[]>}),
    stableTokenDelegatedAllowance: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => StableTokenDelegatedAllowanceObservableChain & {get: <R extends StableTokenDelegatedAllowanceRequest>(request: R, defaultValue?: (FieldsSelection<StableTokenDelegatedAllowance, R> | undefined)) => Observable<(FieldsSelection<StableTokenDelegatedAllowance, R> | undefined)>}),
    stableTokenDelegatedAllowances: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StableTokenDelegatedAllowance_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StableTokenDelegatedAllowance_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends StableTokenDelegatedAllowanceRequest>(request: R, defaultValue?: FieldsSelection<StableTokenDelegatedAllowance, R>[]) => Observable<FieldsSelection<StableTokenDelegatedAllowance, R>[]>})&({get: <R extends StableTokenDelegatedAllowanceRequest>(request: R, defaultValue?: FieldsSelection<StableTokenDelegatedAllowance, R>[]) => Observable<FieldsSelection<StableTokenDelegatedAllowance, R>[]>}),
    variableTokenDelegatedAllowance: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => VariableTokenDelegatedAllowanceObservableChain & {get: <R extends VariableTokenDelegatedAllowanceRequest>(request: R, defaultValue?: (FieldsSelection<VariableTokenDelegatedAllowance, R> | undefined)) => Observable<(FieldsSelection<VariableTokenDelegatedAllowance, R> | undefined)>}),
    variableTokenDelegatedAllowances: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VariableTokenDelegatedAllowance_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VariableTokenDelegatedAllowance_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends VariableTokenDelegatedAllowanceRequest>(request: R, defaultValue?: FieldsSelection<VariableTokenDelegatedAllowance, R>[]) => Observable<FieldsSelection<VariableTokenDelegatedAllowance, R>[]>})&({get: <R extends VariableTokenDelegatedAllowanceRequest>(request: R, defaultValue?: FieldsSelection<VariableTokenDelegatedAllowance, R>[]) => Observable<FieldsSelection<VariableTokenDelegatedAllowance, R>[]>}),
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
    swapHistory: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => SwapHistoryObservableChain & {get: <R extends SwapHistoryRequest>(request: R, defaultValue?: (FieldsSelection<SwapHistory, R> | undefined)) => Observable<(FieldsSelection<SwapHistory, R> | undefined)>}),
    swapHistories: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (SwapHistory_orderBy | null),orderDirection?: (OrderDirection | null),where?: (SwapHistory_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends SwapHistoryRequest>(request: R, defaultValue?: FieldsSelection<SwapHistory, R>[]) => Observable<FieldsSelection<SwapHistory, R>[]>})&({get: <R extends SwapHistoryRequest>(request: R, defaultValue?: FieldsSelection<SwapHistory, R>[]) => Observable<FieldsSelection<SwapHistory, R>[]>}),
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
    borrowRateModeFrom: ({get: (request?: boolean|number, defaultValue?: BorrowRateMode) => Promise<BorrowRateMode>}),
    borrowRateModeTo: ({get: (request?: boolean|number, defaultValue?: BorrowRateMode) => Promise<BorrowRateMode>}),
    stableBorrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    variableBorrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
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
    borrowRateModeFrom: ({get: (request?: boolean|number, defaultValue?: BorrowRateMode) => Observable<BorrowRateMode>}),
    borrowRateModeTo: ({get: (request?: boolean|number, defaultValue?: BorrowRateMode) => Observable<BorrowRateMode>}),
    stableBorrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    variableBorrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface SwapHistoryPromiseChain{
    
/**
 * tx hash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    fromAsset: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    toAsset: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    fromAmount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    receivedAmount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    swapType: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface SwapHistoryObservableChain{
    
/**
 * tx hash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    fromAsset: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    toAsset: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    fromAmount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    receivedAmount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    swapType: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
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
    unclaimedRewards: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    lifetimeRewards: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    incentivesLastUpdated: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    reserves: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UserReserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UserReserve_filter | null)}) => {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>[]) => Promise<FieldsSelection<UserReserve, R>[]>})&({get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>[]) => Promise<FieldsSelection<UserReserve, R>[]>}),
    depositHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null)}) => {get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Promise<FieldsSelection<Deposit, R>[]>})&({get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Promise<FieldsSelection<Deposit, R>[]>}),
    redeemUnderlyingHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RedeemUnderlying_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RedeemUnderlying_filter | null)}) => {get: <R extends RedeemUnderlyingRequest>(request: R, defaultValue?: FieldsSelection<RedeemUnderlying, R>[]) => Promise<FieldsSelection<RedeemUnderlying, R>[]>})&({get: <R extends RedeemUnderlyingRequest>(request: R, defaultValue?: FieldsSelection<RedeemUnderlying, R>[]) => Promise<FieldsSelection<RedeemUnderlying, R>[]>}),
    usageAsCollateralHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UsageAsCollateral_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UsageAsCollateral_filter | null)}) => {get: <R extends UsageAsCollateralRequest>(request: R, defaultValue?: FieldsSelection<UsageAsCollateral, R>[]) => Promise<FieldsSelection<UsageAsCollateral, R>[]>})&({get: <R extends UsageAsCollateralRequest>(request: R, defaultValue?: FieldsSelection<UsageAsCollateral, R>[]) => Promise<FieldsSelection<UsageAsCollateral, R>[]>}),
    borrowHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Borrow_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Borrow_filter | null)}) => {get: <R extends BorrowRequest>(request: R, defaultValue?: FieldsSelection<Borrow, R>[]) => Promise<FieldsSelection<Borrow, R>[]>})&({get: <R extends BorrowRequest>(request: R, defaultValue?: FieldsSelection<Borrow, R>[]) => Promise<FieldsSelection<Borrow, R>[]>}),
    swapHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null)}) => {get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Promise<FieldsSelection<Swap, R>[]>})&({get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Promise<FieldsSelection<Swap, R>[]>}),
    rebalanceStableBorrowRateHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RebalanceStableBorrowRate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RebalanceStableBorrowRate_filter | null)}) => {get: <R extends RebalanceStableBorrowRateRequest>(request: R, defaultValue?: FieldsSelection<RebalanceStableBorrowRate, R>[]) => Promise<FieldsSelection<RebalanceStableBorrowRate, R>[]>})&({get: <R extends RebalanceStableBorrowRateRequest>(request: R, defaultValue?: FieldsSelection<RebalanceStableBorrowRate, R>[]) => Promise<FieldsSelection<RebalanceStableBorrowRate, R>[]>}),
    repayHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Repay_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Repay_filter | null)}) => {get: <R extends RepayRequest>(request: R, defaultValue?: FieldsSelection<Repay, R>[]) => Promise<FieldsSelection<Repay, R>[]>})&({get: <R extends RepayRequest>(request: R, defaultValue?: FieldsSelection<Repay, R>[]) => Promise<FieldsSelection<Repay, R>[]>}),
    liquidationCallHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidationCall_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidationCall_filter | null)}) => {get: <R extends LiquidationCallRequest>(request: R, defaultValue?: FieldsSelection<LiquidationCall, R>[]) => Promise<FieldsSelection<LiquidationCall, R>[]>})&({get: <R extends LiquidationCallRequest>(request: R, defaultValue?: FieldsSelection<LiquidationCall, R>[]) => Promise<FieldsSelection<LiquidationCall, R>[]>}),
    originationFeeLiquidationHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (OriginationFeeLiquidation_orderBy | null),orderDirection?: (OrderDirection | null),where?: (OriginationFeeLiquidation_filter | null)}) => {get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: FieldsSelection<OriginationFeeLiquidation, R>[]) => Promise<FieldsSelection<OriginationFeeLiquidation, R>[]>})&({get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: FieldsSelection<OriginationFeeLiquidation, R>[]) => Promise<FieldsSelection<OriginationFeeLiquidation, R>[]>}),
    incentivizedActions: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (IncentivizedAction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (IncentivizedAction_filter | null)}) => {get: <R extends IncentivizedActionRequest>(request: R, defaultValue?: FieldsSelection<IncentivizedAction, R>[]) => Promise<FieldsSelection<IncentivizedAction, R>[]>})&({get: <R extends IncentivizedActionRequest>(request: R, defaultValue?: FieldsSelection<IncentivizedAction, R>[]) => Promise<FieldsSelection<IncentivizedAction, R>[]>}),
    claimIncentives: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ClaimIncentiveCall_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ClaimIncentiveCall_filter | null)}) => {get: <R extends ClaimIncentiveCallRequest>(request: R, defaultValue?: FieldsSelection<ClaimIncentiveCall, R>[]) => Promise<FieldsSelection<ClaimIncentiveCall, R>[]>})&({get: <R extends ClaimIncentiveCallRequest>(request: R, defaultValue?: FieldsSelection<ClaimIncentiveCall, R>[]) => Promise<FieldsSelection<ClaimIncentiveCall, R>[]>})
}

export interface UserObservableChain{
    
/**
 * user address
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    borrowedReservesCount: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    unclaimedRewards: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    lifetimeRewards: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    incentivesLastUpdated: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    reserves: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UserReserve_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UserReserve_filter | null)}) => {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>[]) => Observable<FieldsSelection<UserReserve, R>[]>})&({get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>[]) => Observable<FieldsSelection<UserReserve, R>[]>}),
    depositHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null)}) => {get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Observable<FieldsSelection<Deposit, R>[]>})&({get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Observable<FieldsSelection<Deposit, R>[]>}),
    redeemUnderlyingHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RedeemUnderlying_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RedeemUnderlying_filter | null)}) => {get: <R extends RedeemUnderlyingRequest>(request: R, defaultValue?: FieldsSelection<RedeemUnderlying, R>[]) => Observable<FieldsSelection<RedeemUnderlying, R>[]>})&({get: <R extends RedeemUnderlyingRequest>(request: R, defaultValue?: FieldsSelection<RedeemUnderlying, R>[]) => Observable<FieldsSelection<RedeemUnderlying, R>[]>}),
    usageAsCollateralHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UsageAsCollateral_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UsageAsCollateral_filter | null)}) => {get: <R extends UsageAsCollateralRequest>(request: R, defaultValue?: FieldsSelection<UsageAsCollateral, R>[]) => Observable<FieldsSelection<UsageAsCollateral, R>[]>})&({get: <R extends UsageAsCollateralRequest>(request: R, defaultValue?: FieldsSelection<UsageAsCollateral, R>[]) => Observable<FieldsSelection<UsageAsCollateral, R>[]>}),
    borrowHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Borrow_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Borrow_filter | null)}) => {get: <R extends BorrowRequest>(request: R, defaultValue?: FieldsSelection<Borrow, R>[]) => Observable<FieldsSelection<Borrow, R>[]>})&({get: <R extends BorrowRequest>(request: R, defaultValue?: FieldsSelection<Borrow, R>[]) => Observable<FieldsSelection<Borrow, R>[]>}),
    swapHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null)}) => {get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Observable<FieldsSelection<Swap, R>[]>})&({get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Observable<FieldsSelection<Swap, R>[]>}),
    rebalanceStableBorrowRateHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RebalanceStableBorrowRate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RebalanceStableBorrowRate_filter | null)}) => {get: <R extends RebalanceStableBorrowRateRequest>(request: R, defaultValue?: FieldsSelection<RebalanceStableBorrowRate, R>[]) => Observable<FieldsSelection<RebalanceStableBorrowRate, R>[]>})&({get: <R extends RebalanceStableBorrowRateRequest>(request: R, defaultValue?: FieldsSelection<RebalanceStableBorrowRate, R>[]) => Observable<FieldsSelection<RebalanceStableBorrowRate, R>[]>}),
    repayHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Repay_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Repay_filter | null)}) => {get: <R extends RepayRequest>(request: R, defaultValue?: FieldsSelection<Repay, R>[]) => Observable<FieldsSelection<Repay, R>[]>})&({get: <R extends RepayRequest>(request: R, defaultValue?: FieldsSelection<Repay, R>[]) => Observable<FieldsSelection<Repay, R>[]>}),
    liquidationCallHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidationCall_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidationCall_filter | null)}) => {get: <R extends LiquidationCallRequest>(request: R, defaultValue?: FieldsSelection<LiquidationCall, R>[]) => Observable<FieldsSelection<LiquidationCall, R>[]>})&({get: <R extends LiquidationCallRequest>(request: R, defaultValue?: FieldsSelection<LiquidationCall, R>[]) => Observable<FieldsSelection<LiquidationCall, R>[]>}),
    originationFeeLiquidationHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (OriginationFeeLiquidation_orderBy | null),orderDirection?: (OrderDirection | null),where?: (OriginationFeeLiquidation_filter | null)}) => {get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: FieldsSelection<OriginationFeeLiquidation, R>[]) => Observable<FieldsSelection<OriginationFeeLiquidation, R>[]>})&({get: <R extends OriginationFeeLiquidationRequest>(request: R, defaultValue?: FieldsSelection<OriginationFeeLiquidation, R>[]) => Observable<FieldsSelection<OriginationFeeLiquidation, R>[]>}),
    incentivizedActions: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (IncentivizedAction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (IncentivizedAction_filter | null)}) => {get: <R extends IncentivizedActionRequest>(request: R, defaultValue?: FieldsSelection<IncentivizedAction, R>[]) => Observable<FieldsSelection<IncentivizedAction, R>[]>})&({get: <R extends IncentivizedActionRequest>(request: R, defaultValue?: FieldsSelection<IncentivizedAction, R>[]) => Observable<FieldsSelection<IncentivizedAction, R>[]>}),
    claimIncentives: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ClaimIncentiveCall_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ClaimIncentiveCall_filter | null)}) => {get: <R extends ClaimIncentiveCallRequest>(request: R, defaultValue?: FieldsSelection<ClaimIncentiveCall, R>[]) => Observable<FieldsSelection<ClaimIncentiveCall, R>[]>})&({get: <R extends ClaimIncentiveCallRequest>(request: R, defaultValue?: FieldsSelection<ClaimIncentiveCall, R>[]) => Observable<FieldsSelection<ClaimIncentiveCall, R>[]>})
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
    scaledATokenBalance: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    currentATokenBalance: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    scaledVariableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    currentVariableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    principalStableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    currentStableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    currentTotalDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    stableBorrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    oldStableBorrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    liquidityRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    stableBorrowLastUpdateTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    variableBorrowIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    aTokenincentivesUserIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    vTokenincentivesUserIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    sTokenincentivesUserIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    aIncentivesLastUpdateTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    vIncentivesLastUpdateTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    sIncentivesLastUpdateTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/**
 * Amount in currency units included as fee
 * 
 */
lastUpdateTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    stableTokenDelegatedAllowances: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StableTokenDelegatedAllowance_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StableTokenDelegatedAllowance_filter | null)}) => {get: <R extends StableTokenDelegatedAllowanceRequest>(request: R, defaultValue?: FieldsSelection<StableTokenDelegatedAllowance, R>[]) => Promise<FieldsSelection<StableTokenDelegatedAllowance, R>[]>})&({get: <R extends StableTokenDelegatedAllowanceRequest>(request: R, defaultValue?: FieldsSelection<StableTokenDelegatedAllowance, R>[]) => Promise<FieldsSelection<StableTokenDelegatedAllowance, R>[]>}),
    variableTokenDelegatedAllowances: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VariableTokenDelegatedAllowance_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VariableTokenDelegatedAllowance_filter | null)}) => {get: <R extends VariableTokenDelegatedAllowanceRequest>(request: R, defaultValue?: FieldsSelection<VariableTokenDelegatedAllowance, R>[]) => Promise<FieldsSelection<VariableTokenDelegatedAllowance, R>[]>})&({get: <R extends VariableTokenDelegatedAllowanceRequest>(request: R, defaultValue?: FieldsSelection<VariableTokenDelegatedAllowance, R>[]) => Promise<FieldsSelection<VariableTokenDelegatedAllowance, R>[]>}),
    aTokenBalanceHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ATokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ATokenBalanceHistoryItem_filter | null)}) => {get: <R extends ATokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ATokenBalanceHistoryItem, R>[]) => Promise<FieldsSelection<ATokenBalanceHistoryItem, R>[]>})&({get: <R extends ATokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ATokenBalanceHistoryItem, R>[]) => Promise<FieldsSelection<ATokenBalanceHistoryItem, R>[]>}),
    vTokenBalanceHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VTokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VTokenBalanceHistoryItem_filter | null)}) => {get: <R extends VTokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<VTokenBalanceHistoryItem, R>[]) => Promise<FieldsSelection<VTokenBalanceHistoryItem, R>[]>})&({get: <R extends VTokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<VTokenBalanceHistoryItem, R>[]) => Promise<FieldsSelection<VTokenBalanceHistoryItem, R>[]>}),
    sTokenBalanceHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (STokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (STokenBalanceHistoryItem_filter | null)}) => {get: <R extends STokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<STokenBalanceHistoryItem, R>[]) => Promise<FieldsSelection<STokenBalanceHistoryItem, R>[]>})&({get: <R extends STokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<STokenBalanceHistoryItem, R>[]) => Promise<FieldsSelection<STokenBalanceHistoryItem, R>[]>}),
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
    scaledATokenBalance: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    currentATokenBalance: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    scaledVariableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    currentVariableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    principalStableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    currentStableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    currentTotalDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    stableBorrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    oldStableBorrowRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    liquidityRate: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    stableBorrowLastUpdateTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    variableBorrowIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    aTokenincentivesUserIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    vTokenincentivesUserIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    sTokenincentivesUserIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    aIncentivesLastUpdateTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    vIncentivesLastUpdateTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    sIncentivesLastUpdateTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/**
 * Amount in currency units included as fee
 * 
 */
lastUpdateTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    stableTokenDelegatedAllowances: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StableTokenDelegatedAllowance_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StableTokenDelegatedAllowance_filter | null)}) => {get: <R extends StableTokenDelegatedAllowanceRequest>(request: R, defaultValue?: FieldsSelection<StableTokenDelegatedAllowance, R>[]) => Observable<FieldsSelection<StableTokenDelegatedAllowance, R>[]>})&({get: <R extends StableTokenDelegatedAllowanceRequest>(request: R, defaultValue?: FieldsSelection<StableTokenDelegatedAllowance, R>[]) => Observable<FieldsSelection<StableTokenDelegatedAllowance, R>[]>}),
    variableTokenDelegatedAllowances: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VariableTokenDelegatedAllowance_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VariableTokenDelegatedAllowance_filter | null)}) => {get: <R extends VariableTokenDelegatedAllowanceRequest>(request: R, defaultValue?: FieldsSelection<VariableTokenDelegatedAllowance, R>[]) => Observable<FieldsSelection<VariableTokenDelegatedAllowance, R>[]>})&({get: <R extends VariableTokenDelegatedAllowanceRequest>(request: R, defaultValue?: FieldsSelection<VariableTokenDelegatedAllowance, R>[]) => Observable<FieldsSelection<VariableTokenDelegatedAllowance, R>[]>}),
    aTokenBalanceHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (ATokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (ATokenBalanceHistoryItem_filter | null)}) => {get: <R extends ATokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ATokenBalanceHistoryItem, R>[]) => Observable<FieldsSelection<ATokenBalanceHistoryItem, R>[]>})&({get: <R extends ATokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<ATokenBalanceHistoryItem, R>[]) => Observable<FieldsSelection<ATokenBalanceHistoryItem, R>[]>}),
    vTokenBalanceHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VTokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VTokenBalanceHistoryItem_filter | null)}) => {get: <R extends VTokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<VTokenBalanceHistoryItem, R>[]) => Observable<FieldsSelection<VTokenBalanceHistoryItem, R>[]>})&({get: <R extends VTokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<VTokenBalanceHistoryItem, R>[]) => Observable<FieldsSelection<VTokenBalanceHistoryItem, R>[]>}),
    sTokenBalanceHistory: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (STokenBalanceHistoryItem_orderBy | null),orderDirection?: (OrderDirection | null),where?: (STokenBalanceHistoryItem_filter | null)}) => {get: <R extends STokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<STokenBalanceHistoryItem, R>[]) => Observable<FieldsSelection<STokenBalanceHistoryItem, R>[]>})&({get: <R extends STokenBalanceHistoryItemRequest>(request: R, defaultValue?: FieldsSelection<STokenBalanceHistoryItem, R>[]) => Observable<FieldsSelection<STokenBalanceHistoryItem, R>[]>}),
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

export interface VTokenPromiseChain{
    
/**
 * VToken address
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>}),
    underlyingAssetAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    underlyingAssetDecimals: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    tokenContractImpl: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>})
}

export interface VTokenObservableChain{
    
/**
 * VToken address
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    underlyingAssetAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    underlyingAssetDecimals: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    tokenContractImpl: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>})
}

export interface VTokenBalanceHistoryItemPromiseChain{
    
/**
 * userReserve + txHash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    userReserve: (UserReservePromiseChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Promise<FieldsSelection<UserReserve, R>>}),
    scaledVariableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    currentVariableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    index: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>})
}

export interface VTokenBalanceHistoryItemObservableChain{
    
/**
 * userReserve + txHash
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    userReserve: (UserReserveObservableChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Observable<FieldsSelection<UserReserve, R>>}),
    scaledVariableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    currentVariableDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    index: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>})
}

export interface VariableDebtTokenPromiseChain{
    
/**
 * VariableDebtToken address
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>}),
    underlyingAssetAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    underlyingAssetDecimals: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface VariableDebtTokenObservableChain{
    
/**
 * VariableDebtToken address
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    underlyingAssetAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    underlyingAssetDecimals: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface VariableTokenDelegatedAllowancePromiseChain{
    
/**
 * variable + fromuser address + touser address+ reserve address
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    fromUser: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Promise<FieldsSelection<User, R>>}),
    toUser: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Promise<FieldsSelection<User, R>>}),
    amountAllowed: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    userReserve: (UserReservePromiseChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Promise<FieldsSelection<UserReserve, R>>})
}

export interface VariableTokenDelegatedAllowanceObservableChain{
    
/**
 * variable + fromuser address + touser address+ reserve address
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    fromUser: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Observable<FieldsSelection<User, R>>}),
    toUser: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Observable<FieldsSelection<User, R>>}),
    amountAllowed: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    userReserve: (UserReserveObservableChain & {get: <R extends UserReserveRequest>(request: R, defaultValue?: FieldsSelection<UserReserve, R>) => Observable<FieldsSelection<UserReserve, R>>})
}

export interface WETHReservePromiseChain{
    
/**
 * weth address
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    symbol: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    decimals: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    updatedTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    updatedBlockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>})
}

export interface WETHReserveObservableChain{
    
/**
 * weth address
 * 
 */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    symbol: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    decimals: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    updatedTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    updatedBlockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>})
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