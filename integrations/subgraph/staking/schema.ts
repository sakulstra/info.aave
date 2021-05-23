import { FieldsSelection, Observable } from "@genql/runtime"

export type Scalars = {
  BigDecimal: any
  BigInt: any
  Boolean: boolean
  Bytes: any
  ID: string
  Int: number
  String: string
}

export interface ClaimReward {
  /** Tx hash */
  id: Scalars["ID"]
  stakeToken: StakeToken
  from: Scalars["String"]
  to: Scalars["String"]
  amount: Scalars["BigInt"]
  stakePosition: StakePosition
  __typename?: "ClaimReward"
}

export type ClaimReward_orderBy = "id" | "stakeToken" | "from" | "to" | "amount" | "stakePosition"

export type OrderDirection = "asc" | "desc"

export interface Query {
  stake?: Stake
  stakes: Stake[]
  redeem?: Redeem
  redeems: Redeem[]
  claimReward?: ClaimReward
  claimRewards: ClaimReward[]
  transfer?: Transfer
  transfers: Transfer[]
  stakePosition?: StakePosition
  stakePositions: StakePosition[]
  stakeToken?: StakeToken
  stakeTokens: StakeToken[]
  /** Access to subgraph metadata */
  _meta?: _Meta_
  __typename?: "Query"
}

export interface Redeem {
  /** Tx hash */
  id: Scalars["ID"]
  stakeToken: StakeToken
  from: Scalars["String"]
  to: Scalars["String"]
  amount: Scalars["BigInt"]
  stakePosition: StakePosition
  __typename?: "Redeem"
}

export type Redeem_orderBy = "id" | "stakeToken" | "from" | "to" | "amount" | "stakePosition"

export interface Stake {
  /** Tx hash */
  id: Scalars["ID"]
  stakeToken: StakeToken
  from: Scalars["String"]
  onBehalfOf: Scalars["String"]
  amount: Scalars["BigInt"]
  stakePosition: StakePosition
  __typename?: "Stake"
}

export interface StakePosition {
  /** User Wallet address : StakeToken ID */
  id: Scalars["ID"]
  positionBalance: Scalars["BigInt"]
  rewardsClaimed: Scalars["BigInt"]
  user: Scalars["String"]
  stakeToken: StakeToken
  stakeHistory: Stake[]
  redeemHistory: Redeem[]
  transferHistory: Transfer[]
  __typename?: "StakePosition"
}

export type StakePosition_orderBy =
  | "id"
  | "positionBalance"
  | "rewardsClaimed"
  | "user"
  | "stakeToken"
  | "stakeHistory"
  | "redeemHistory"
  | "transferHistory"

export interface StakeToken {
  /** Address of the stk Token */
  id: Scalars["ID"]
  /** Stake token contract information */
  stakedToken: Scalars["String"]
  rewardToken: Scalars["String"]
  name: Scalars["String"]
  symbol: Scalars["String"]
  decimals: Scalars["Int"]
  cooldownSeconds: Scalars["BigInt"]
  unstakeWindow: Scalars["BigInt"]
  currentStakedBalance: Scalars["BigInt"]
  lifetimeRewardsDistributed: Scalars["BigInt"]
  lifetimeStakedBalance: Scalars["BigInt"]
  lifetimeRedeemedBalance: Scalars["BigInt"]
  stakeHistory: Stake[]
  redeemHistory: Redeem[]
  transferHistory: Transfer[]
  stakePositions: StakePosition[]
  __typename?: "StakeToken"
}

export type StakeToken_orderBy =
  | "id"
  | "stakedToken"
  | "rewardToken"
  | "name"
  | "symbol"
  | "decimals"
  | "cooldownSeconds"
  | "unstakeWindow"
  | "currentStakedBalance"
  | "lifetimeRewardsDistributed"
  | "lifetimeStakedBalance"
  | "lifetimeRedeemedBalance"
  | "stakeHistory"
  | "redeemHistory"
  | "transferHistory"
  | "stakePositions"

export type Stake_orderBy = "id" | "stakeToken" | "from" | "onBehalfOf" | "amount" | "stakePosition"

export interface Subscription {
  stake?: Stake
  stakes: Stake[]
  redeem?: Redeem
  redeems: Redeem[]
  claimReward?: ClaimReward
  claimRewards: ClaimReward[]
  transfer?: Transfer
  transfers: Transfer[]
  stakePosition?: StakePosition
  stakePositions: StakePosition[]
  stakeToken?: StakeToken
  stakeTokens: StakeToken[]
  /** Access to subgraph metadata */
  _meta?: _Meta_
  __typename?: "Subscription"
}

export interface Transfer {
  /** Tx hash */
  id: Scalars["ID"]
  stakeToken: StakeToken
  from: Scalars["String"]
  to: Scalars["String"]
  amount: Scalars["BigInt"]
  stakePosition: StakePosition
  __typename?: "Transfer"
}

export type Transfer_orderBy = "id" | "stakeToken" | "from" | "to" | "amount" | "stakePosition"

export interface _Block_ {
  /** The hash of the block */
  hash?: Scalars["Bytes"]
  /** The block number */
  number: Scalars["Int"]
  __typename?: "_Block_"
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
  deployment: Scalars["String"]
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars["Boolean"]
  __typename?: "_Meta_"
}

export type _SubgraphErrorPolicy_ = "allow" | "deny"

export interface Block_height {
  hash?: Scalars["Bytes"] | null
  number?: Scalars["Int"] | null
}

export interface ClaimRewardRequest {
  /** Tx hash */
  id?: boolean | number
  stakeToken?: StakeTokenRequest
  from?: boolean | number
  to?: boolean | number
  amount?: boolean | number
  stakePosition?: StakePositionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface ClaimReward_filter {
  id?: Scalars["ID"] | null
  id_not?: Scalars["ID"] | null
  id_gt?: Scalars["ID"] | null
  id_lt?: Scalars["ID"] | null
  id_gte?: Scalars["ID"] | null
  id_lte?: Scalars["ID"] | null
  id_in?: Scalars["ID"][] | null
  id_not_in?: Scalars["ID"][] | null
  stakeToken?: Scalars["String"] | null
  stakeToken_not?: Scalars["String"] | null
  stakeToken_gt?: Scalars["String"] | null
  stakeToken_lt?: Scalars["String"] | null
  stakeToken_gte?: Scalars["String"] | null
  stakeToken_lte?: Scalars["String"] | null
  stakeToken_in?: Scalars["String"][] | null
  stakeToken_not_in?: Scalars["String"][] | null
  stakeToken_contains?: Scalars["String"] | null
  stakeToken_not_contains?: Scalars["String"] | null
  stakeToken_starts_with?: Scalars["String"] | null
  stakeToken_not_starts_with?: Scalars["String"] | null
  stakeToken_ends_with?: Scalars["String"] | null
  stakeToken_not_ends_with?: Scalars["String"] | null
  from?: Scalars["String"] | null
  from_not?: Scalars["String"] | null
  from_gt?: Scalars["String"] | null
  from_lt?: Scalars["String"] | null
  from_gte?: Scalars["String"] | null
  from_lte?: Scalars["String"] | null
  from_in?: Scalars["String"][] | null
  from_not_in?: Scalars["String"][] | null
  from_contains?: Scalars["String"] | null
  from_not_contains?: Scalars["String"] | null
  from_starts_with?: Scalars["String"] | null
  from_not_starts_with?: Scalars["String"] | null
  from_ends_with?: Scalars["String"] | null
  from_not_ends_with?: Scalars["String"] | null
  to?: Scalars["String"] | null
  to_not?: Scalars["String"] | null
  to_gt?: Scalars["String"] | null
  to_lt?: Scalars["String"] | null
  to_gte?: Scalars["String"] | null
  to_lte?: Scalars["String"] | null
  to_in?: Scalars["String"][] | null
  to_not_in?: Scalars["String"][] | null
  to_contains?: Scalars["String"] | null
  to_not_contains?: Scalars["String"] | null
  to_starts_with?: Scalars["String"] | null
  to_not_starts_with?: Scalars["String"] | null
  to_ends_with?: Scalars["String"] | null
  to_not_ends_with?: Scalars["String"] | null
  amount?: Scalars["BigInt"] | null
  amount_not?: Scalars["BigInt"] | null
  amount_gt?: Scalars["BigInt"] | null
  amount_lt?: Scalars["BigInt"] | null
  amount_gte?: Scalars["BigInt"] | null
  amount_lte?: Scalars["BigInt"] | null
  amount_in?: Scalars["BigInt"][] | null
  amount_not_in?: Scalars["BigInt"][] | null
  stakePosition?: Scalars["String"] | null
  stakePosition_not?: Scalars["String"] | null
  stakePosition_gt?: Scalars["String"] | null
  stakePosition_lt?: Scalars["String"] | null
  stakePosition_gte?: Scalars["String"] | null
  stakePosition_lte?: Scalars["String"] | null
  stakePosition_in?: Scalars["String"][] | null
  stakePosition_not_in?: Scalars["String"][] | null
  stakePosition_contains?: Scalars["String"] | null
  stakePosition_not_contains?: Scalars["String"] | null
  stakePosition_starts_with?: Scalars["String"] | null
  stakePosition_not_starts_with?: Scalars["String"] | null
  stakePosition_ends_with?: Scalars["String"] | null
  stakePosition_not_ends_with?: Scalars["String"] | null
}

export interface QueryRequest {
  stake?: [
    {
      id: Scalars["ID"]
      /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
      block?: Block_height | null
    },
    StakeRequest
  ]
  stakes?: [
    {
      skip?: Scalars["Int"] | null
      first?: Scalars["Int"] | null
      orderBy?: Stake_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Stake_filter | null
      /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
      block?: Block_height | null
    },
    StakeRequest
  ]
  redeem?: [
    {
      id: Scalars["ID"]
      /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
      block?: Block_height | null
    },
    RedeemRequest
  ]
  redeems?: [
    {
      skip?: Scalars["Int"] | null
      first?: Scalars["Int"] | null
      orderBy?: Redeem_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Redeem_filter | null
      /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
      block?: Block_height | null
    },
    RedeemRequest
  ]
  claimReward?: [
    {
      id: Scalars["ID"]
      /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
      block?: Block_height | null
    },
    ClaimRewardRequest
  ]
  claimRewards?: [
    {
      skip?: Scalars["Int"] | null
      first?: Scalars["Int"] | null
      orderBy?: ClaimReward_orderBy | null
      orderDirection?: OrderDirection | null
      where?: ClaimReward_filter | null
      /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
      block?: Block_height | null
    },
    ClaimRewardRequest
  ]
  transfer?: [
    {
      id: Scalars["ID"]
      /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
      block?: Block_height | null
    },
    TransferRequest
  ]
  transfers?: [
    {
      skip?: Scalars["Int"] | null
      first?: Scalars["Int"] | null
      orderBy?: Transfer_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Transfer_filter | null
      /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
      block?: Block_height | null
    },
    TransferRequest
  ]
  stakePosition?: [
    {
      id: Scalars["ID"]
      /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
      block?: Block_height | null
    },
    StakePositionRequest
  ]
  stakePositions?: [
    {
      skip?: Scalars["Int"] | null
      first?: Scalars["Int"] | null
      orderBy?: StakePosition_orderBy | null
      orderDirection?: OrderDirection | null
      where?: StakePosition_filter | null
      /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
      block?: Block_height | null
    },
    StakePositionRequest
  ]
  stakeToken?: [
    {
      id: Scalars["ID"]
      /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
      block?: Block_height | null
    },
    StakeTokenRequest
  ]
  stakeTokens?: [
    {
      skip?: Scalars["Int"] | null
      first?: Scalars["Int"] | null
      orderBy?: StakeToken_orderBy | null
      orderDirection?: OrderDirection | null
      where?: StakeToken_filter | null
      /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
      block?: Block_height | null
    },
    StakeTokenRequest
  ]
  /** Access to subgraph metadata */
  _meta?: [{ block?: Block_height | null }, _Meta_Request] | _Meta_Request
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface RedeemRequest {
  /** Tx hash */
  id?: boolean | number
  stakeToken?: StakeTokenRequest
  from?: boolean | number
  to?: boolean | number
  amount?: boolean | number
  stakePosition?: StakePositionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface Redeem_filter {
  id?: Scalars["ID"] | null
  id_not?: Scalars["ID"] | null
  id_gt?: Scalars["ID"] | null
  id_lt?: Scalars["ID"] | null
  id_gte?: Scalars["ID"] | null
  id_lte?: Scalars["ID"] | null
  id_in?: Scalars["ID"][] | null
  id_not_in?: Scalars["ID"][] | null
  stakeToken?: Scalars["String"] | null
  stakeToken_not?: Scalars["String"] | null
  stakeToken_gt?: Scalars["String"] | null
  stakeToken_lt?: Scalars["String"] | null
  stakeToken_gte?: Scalars["String"] | null
  stakeToken_lte?: Scalars["String"] | null
  stakeToken_in?: Scalars["String"][] | null
  stakeToken_not_in?: Scalars["String"][] | null
  stakeToken_contains?: Scalars["String"] | null
  stakeToken_not_contains?: Scalars["String"] | null
  stakeToken_starts_with?: Scalars["String"] | null
  stakeToken_not_starts_with?: Scalars["String"] | null
  stakeToken_ends_with?: Scalars["String"] | null
  stakeToken_not_ends_with?: Scalars["String"] | null
  from?: Scalars["String"] | null
  from_not?: Scalars["String"] | null
  from_gt?: Scalars["String"] | null
  from_lt?: Scalars["String"] | null
  from_gte?: Scalars["String"] | null
  from_lte?: Scalars["String"] | null
  from_in?: Scalars["String"][] | null
  from_not_in?: Scalars["String"][] | null
  from_contains?: Scalars["String"] | null
  from_not_contains?: Scalars["String"] | null
  from_starts_with?: Scalars["String"] | null
  from_not_starts_with?: Scalars["String"] | null
  from_ends_with?: Scalars["String"] | null
  from_not_ends_with?: Scalars["String"] | null
  to?: Scalars["String"] | null
  to_not?: Scalars["String"] | null
  to_gt?: Scalars["String"] | null
  to_lt?: Scalars["String"] | null
  to_gte?: Scalars["String"] | null
  to_lte?: Scalars["String"] | null
  to_in?: Scalars["String"][] | null
  to_not_in?: Scalars["String"][] | null
  to_contains?: Scalars["String"] | null
  to_not_contains?: Scalars["String"] | null
  to_starts_with?: Scalars["String"] | null
  to_not_starts_with?: Scalars["String"] | null
  to_ends_with?: Scalars["String"] | null
  to_not_ends_with?: Scalars["String"] | null
  amount?: Scalars["BigInt"] | null
  amount_not?: Scalars["BigInt"] | null
  amount_gt?: Scalars["BigInt"] | null
  amount_lt?: Scalars["BigInt"] | null
  amount_gte?: Scalars["BigInt"] | null
  amount_lte?: Scalars["BigInt"] | null
  amount_in?: Scalars["BigInt"][] | null
  amount_not_in?: Scalars["BigInt"][] | null
  stakePosition?: Scalars["String"] | null
  stakePosition_not?: Scalars["String"] | null
  stakePosition_gt?: Scalars["String"] | null
  stakePosition_lt?: Scalars["String"] | null
  stakePosition_gte?: Scalars["String"] | null
  stakePosition_lte?: Scalars["String"] | null
  stakePosition_in?: Scalars["String"][] | null
  stakePosition_not_in?: Scalars["String"][] | null
  stakePosition_contains?: Scalars["String"] | null
  stakePosition_not_contains?: Scalars["String"] | null
  stakePosition_starts_with?: Scalars["String"] | null
  stakePosition_not_starts_with?: Scalars["String"] | null
  stakePosition_ends_with?: Scalars["String"] | null
  stakePosition_not_ends_with?: Scalars["String"] | null
}

export interface StakeRequest {
  /** Tx hash */
  id?: boolean | number
  stakeToken?: StakeTokenRequest
  from?: boolean | number
  onBehalfOf?: boolean | number
  amount?: boolean | number
  stakePosition?: StakePositionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface StakePositionRequest {
  /** User Wallet address : StakeToken ID */
  id?: boolean | number
  positionBalance?: boolean | number
  rewardsClaimed?: boolean | number
  user?: boolean | number
  stakeToken?: StakeTokenRequest
  stakeHistory?:
    | [
        {
          skip?: Scalars["Int"] | null
          first?: Scalars["Int"] | null
          orderBy?: Stake_orderBy | null
          orderDirection?: OrderDirection | null
          where?: Stake_filter | null
        },
        StakeRequest
      ]
    | StakeRequest
  redeemHistory?:
    | [
        {
          skip?: Scalars["Int"] | null
          first?: Scalars["Int"] | null
          orderBy?: Redeem_orderBy | null
          orderDirection?: OrderDirection | null
          where?: Redeem_filter | null
        },
        RedeemRequest
      ]
    | RedeemRequest
  transferHistory?:
    | [
        {
          skip?: Scalars["Int"] | null
          first?: Scalars["Int"] | null
          orderBy?: Transfer_orderBy | null
          orderDirection?: OrderDirection | null
          where?: Transfer_filter | null
        },
        TransferRequest
      ]
    | TransferRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface StakePosition_filter {
  id?: Scalars["ID"] | null
  id_not?: Scalars["ID"] | null
  id_gt?: Scalars["ID"] | null
  id_lt?: Scalars["ID"] | null
  id_gte?: Scalars["ID"] | null
  id_lte?: Scalars["ID"] | null
  id_in?: Scalars["ID"][] | null
  id_not_in?: Scalars["ID"][] | null
  positionBalance?: Scalars["BigInt"] | null
  positionBalance_not?: Scalars["BigInt"] | null
  positionBalance_gt?: Scalars["BigInt"] | null
  positionBalance_lt?: Scalars["BigInt"] | null
  positionBalance_gte?: Scalars["BigInt"] | null
  positionBalance_lte?: Scalars["BigInt"] | null
  positionBalance_in?: Scalars["BigInt"][] | null
  positionBalance_not_in?: Scalars["BigInt"][] | null
  rewardsClaimed?: Scalars["BigInt"] | null
  rewardsClaimed_not?: Scalars["BigInt"] | null
  rewardsClaimed_gt?: Scalars["BigInt"] | null
  rewardsClaimed_lt?: Scalars["BigInt"] | null
  rewardsClaimed_gte?: Scalars["BigInt"] | null
  rewardsClaimed_lte?: Scalars["BigInt"] | null
  rewardsClaimed_in?: Scalars["BigInt"][] | null
  rewardsClaimed_not_in?: Scalars["BigInt"][] | null
  user?: Scalars["String"] | null
  user_not?: Scalars["String"] | null
  user_gt?: Scalars["String"] | null
  user_lt?: Scalars["String"] | null
  user_gte?: Scalars["String"] | null
  user_lte?: Scalars["String"] | null
  user_in?: Scalars["String"][] | null
  user_not_in?: Scalars["String"][] | null
  user_contains?: Scalars["String"] | null
  user_not_contains?: Scalars["String"] | null
  user_starts_with?: Scalars["String"] | null
  user_not_starts_with?: Scalars["String"] | null
  user_ends_with?: Scalars["String"] | null
  user_not_ends_with?: Scalars["String"] | null
  stakeToken?: Scalars["String"] | null
  stakeToken_not?: Scalars["String"] | null
  stakeToken_gt?: Scalars["String"] | null
  stakeToken_lt?: Scalars["String"] | null
  stakeToken_gte?: Scalars["String"] | null
  stakeToken_lte?: Scalars["String"] | null
  stakeToken_in?: Scalars["String"][] | null
  stakeToken_not_in?: Scalars["String"][] | null
  stakeToken_contains?: Scalars["String"] | null
  stakeToken_not_contains?: Scalars["String"] | null
  stakeToken_starts_with?: Scalars["String"] | null
  stakeToken_not_starts_with?: Scalars["String"] | null
  stakeToken_ends_with?: Scalars["String"] | null
  stakeToken_not_ends_with?: Scalars["String"] | null
}

export interface StakeTokenRequest {
  /** Address of the stk Token */
  id?: boolean | number
  /** Stake token contract information */
  stakedToken?: boolean | number
  rewardToken?: boolean | number
  name?: boolean | number
  symbol?: boolean | number
  decimals?: boolean | number
  cooldownSeconds?: boolean | number
  unstakeWindow?: boolean | number
  currentStakedBalance?: boolean | number
  lifetimeRewardsDistributed?: boolean | number
  lifetimeStakedBalance?: boolean | number
  lifetimeRedeemedBalance?: boolean | number
  stakeHistory?:
    | [
        {
          skip?: Scalars["Int"] | null
          first?: Scalars["Int"] | null
          orderBy?: Stake_orderBy | null
          orderDirection?: OrderDirection | null
          where?: Stake_filter | null
        },
        StakeRequest
      ]
    | StakeRequest
  redeemHistory?:
    | [
        {
          skip?: Scalars["Int"] | null
          first?: Scalars["Int"] | null
          orderBy?: Redeem_orderBy | null
          orderDirection?: OrderDirection | null
          where?: Redeem_filter | null
        },
        RedeemRequest
      ]
    | RedeemRequest
  transferHistory?:
    | [
        {
          skip?: Scalars["Int"] | null
          first?: Scalars["Int"] | null
          orderBy?: Transfer_orderBy | null
          orderDirection?: OrderDirection | null
          where?: Transfer_filter | null
        },
        TransferRequest
      ]
    | TransferRequest
  stakePositions?:
    | [
        {
          skip?: Scalars["Int"] | null
          first?: Scalars["Int"] | null
          orderBy?: StakePosition_orderBy | null
          orderDirection?: OrderDirection | null
          where?: StakePosition_filter | null
        },
        StakePositionRequest
      ]
    | StakePositionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface StakeToken_filter {
  id?: Scalars["ID"] | null
  id_not?: Scalars["ID"] | null
  id_gt?: Scalars["ID"] | null
  id_lt?: Scalars["ID"] | null
  id_gte?: Scalars["ID"] | null
  id_lte?: Scalars["ID"] | null
  id_in?: Scalars["ID"][] | null
  id_not_in?: Scalars["ID"][] | null
  stakedToken?: Scalars["String"] | null
  stakedToken_not?: Scalars["String"] | null
  stakedToken_gt?: Scalars["String"] | null
  stakedToken_lt?: Scalars["String"] | null
  stakedToken_gte?: Scalars["String"] | null
  stakedToken_lte?: Scalars["String"] | null
  stakedToken_in?: Scalars["String"][] | null
  stakedToken_not_in?: Scalars["String"][] | null
  stakedToken_contains?: Scalars["String"] | null
  stakedToken_not_contains?: Scalars["String"] | null
  stakedToken_starts_with?: Scalars["String"] | null
  stakedToken_not_starts_with?: Scalars["String"] | null
  stakedToken_ends_with?: Scalars["String"] | null
  stakedToken_not_ends_with?: Scalars["String"] | null
  rewardToken?: Scalars["String"] | null
  rewardToken_not?: Scalars["String"] | null
  rewardToken_gt?: Scalars["String"] | null
  rewardToken_lt?: Scalars["String"] | null
  rewardToken_gte?: Scalars["String"] | null
  rewardToken_lte?: Scalars["String"] | null
  rewardToken_in?: Scalars["String"][] | null
  rewardToken_not_in?: Scalars["String"][] | null
  rewardToken_contains?: Scalars["String"] | null
  rewardToken_not_contains?: Scalars["String"] | null
  rewardToken_starts_with?: Scalars["String"] | null
  rewardToken_not_starts_with?: Scalars["String"] | null
  rewardToken_ends_with?: Scalars["String"] | null
  rewardToken_not_ends_with?: Scalars["String"] | null
  name?: Scalars["String"] | null
  name_not?: Scalars["String"] | null
  name_gt?: Scalars["String"] | null
  name_lt?: Scalars["String"] | null
  name_gte?: Scalars["String"] | null
  name_lte?: Scalars["String"] | null
  name_in?: Scalars["String"][] | null
  name_not_in?: Scalars["String"][] | null
  name_contains?: Scalars["String"] | null
  name_not_contains?: Scalars["String"] | null
  name_starts_with?: Scalars["String"] | null
  name_not_starts_with?: Scalars["String"] | null
  name_ends_with?: Scalars["String"] | null
  name_not_ends_with?: Scalars["String"] | null
  symbol?: Scalars["String"] | null
  symbol_not?: Scalars["String"] | null
  symbol_gt?: Scalars["String"] | null
  symbol_lt?: Scalars["String"] | null
  symbol_gte?: Scalars["String"] | null
  symbol_lte?: Scalars["String"] | null
  symbol_in?: Scalars["String"][] | null
  symbol_not_in?: Scalars["String"][] | null
  symbol_contains?: Scalars["String"] | null
  symbol_not_contains?: Scalars["String"] | null
  symbol_starts_with?: Scalars["String"] | null
  symbol_not_starts_with?: Scalars["String"] | null
  symbol_ends_with?: Scalars["String"] | null
  symbol_not_ends_with?: Scalars["String"] | null
  decimals?: Scalars["Int"] | null
  decimals_not?: Scalars["Int"] | null
  decimals_gt?: Scalars["Int"] | null
  decimals_lt?: Scalars["Int"] | null
  decimals_gte?: Scalars["Int"] | null
  decimals_lte?: Scalars["Int"] | null
  decimals_in?: Scalars["Int"][] | null
  decimals_not_in?: Scalars["Int"][] | null
  cooldownSeconds?: Scalars["BigInt"] | null
  cooldownSeconds_not?: Scalars["BigInt"] | null
  cooldownSeconds_gt?: Scalars["BigInt"] | null
  cooldownSeconds_lt?: Scalars["BigInt"] | null
  cooldownSeconds_gte?: Scalars["BigInt"] | null
  cooldownSeconds_lte?: Scalars["BigInt"] | null
  cooldownSeconds_in?: Scalars["BigInt"][] | null
  cooldownSeconds_not_in?: Scalars["BigInt"][] | null
  unstakeWindow?: Scalars["BigInt"] | null
  unstakeWindow_not?: Scalars["BigInt"] | null
  unstakeWindow_gt?: Scalars["BigInt"] | null
  unstakeWindow_lt?: Scalars["BigInt"] | null
  unstakeWindow_gte?: Scalars["BigInt"] | null
  unstakeWindow_lte?: Scalars["BigInt"] | null
  unstakeWindow_in?: Scalars["BigInt"][] | null
  unstakeWindow_not_in?: Scalars["BigInt"][] | null
  currentStakedBalance?: Scalars["BigInt"] | null
  currentStakedBalance_not?: Scalars["BigInt"] | null
  currentStakedBalance_gt?: Scalars["BigInt"] | null
  currentStakedBalance_lt?: Scalars["BigInt"] | null
  currentStakedBalance_gte?: Scalars["BigInt"] | null
  currentStakedBalance_lte?: Scalars["BigInt"] | null
  currentStakedBalance_in?: Scalars["BigInt"][] | null
  currentStakedBalance_not_in?: Scalars["BigInt"][] | null
  lifetimeRewardsDistributed?: Scalars["BigInt"] | null
  lifetimeRewardsDistributed_not?: Scalars["BigInt"] | null
  lifetimeRewardsDistributed_gt?: Scalars["BigInt"] | null
  lifetimeRewardsDistributed_lt?: Scalars["BigInt"] | null
  lifetimeRewardsDistributed_gte?: Scalars["BigInt"] | null
  lifetimeRewardsDistributed_lte?: Scalars["BigInt"] | null
  lifetimeRewardsDistributed_in?: Scalars["BigInt"][] | null
  lifetimeRewardsDistributed_not_in?: Scalars["BigInt"][] | null
  lifetimeStakedBalance?: Scalars["BigInt"] | null
  lifetimeStakedBalance_not?: Scalars["BigInt"] | null
  lifetimeStakedBalance_gt?: Scalars["BigInt"] | null
  lifetimeStakedBalance_lt?: Scalars["BigInt"] | null
  lifetimeStakedBalance_gte?: Scalars["BigInt"] | null
  lifetimeStakedBalance_lte?: Scalars["BigInt"] | null
  lifetimeStakedBalance_in?: Scalars["BigInt"][] | null
  lifetimeStakedBalance_not_in?: Scalars["BigInt"][] | null
  lifetimeRedeemedBalance?: Scalars["BigInt"] | null
  lifetimeRedeemedBalance_not?: Scalars["BigInt"] | null
  lifetimeRedeemedBalance_gt?: Scalars["BigInt"] | null
  lifetimeRedeemedBalance_lt?: Scalars["BigInt"] | null
  lifetimeRedeemedBalance_gte?: Scalars["BigInt"] | null
  lifetimeRedeemedBalance_lte?: Scalars["BigInt"] | null
  lifetimeRedeemedBalance_in?: Scalars["BigInt"][] | null
  lifetimeRedeemedBalance_not_in?: Scalars["BigInt"][] | null
}

export interface Stake_filter {
  id?: Scalars["ID"] | null
  id_not?: Scalars["ID"] | null
  id_gt?: Scalars["ID"] | null
  id_lt?: Scalars["ID"] | null
  id_gte?: Scalars["ID"] | null
  id_lte?: Scalars["ID"] | null
  id_in?: Scalars["ID"][] | null
  id_not_in?: Scalars["ID"][] | null
  stakeToken?: Scalars["String"] | null
  stakeToken_not?: Scalars["String"] | null
  stakeToken_gt?: Scalars["String"] | null
  stakeToken_lt?: Scalars["String"] | null
  stakeToken_gte?: Scalars["String"] | null
  stakeToken_lte?: Scalars["String"] | null
  stakeToken_in?: Scalars["String"][] | null
  stakeToken_not_in?: Scalars["String"][] | null
  stakeToken_contains?: Scalars["String"] | null
  stakeToken_not_contains?: Scalars["String"] | null
  stakeToken_starts_with?: Scalars["String"] | null
  stakeToken_not_starts_with?: Scalars["String"] | null
  stakeToken_ends_with?: Scalars["String"] | null
  stakeToken_not_ends_with?: Scalars["String"] | null
  from?: Scalars["String"] | null
  from_not?: Scalars["String"] | null
  from_gt?: Scalars["String"] | null
  from_lt?: Scalars["String"] | null
  from_gte?: Scalars["String"] | null
  from_lte?: Scalars["String"] | null
  from_in?: Scalars["String"][] | null
  from_not_in?: Scalars["String"][] | null
  from_contains?: Scalars["String"] | null
  from_not_contains?: Scalars["String"] | null
  from_starts_with?: Scalars["String"] | null
  from_not_starts_with?: Scalars["String"] | null
  from_ends_with?: Scalars["String"] | null
  from_not_ends_with?: Scalars["String"] | null
  onBehalfOf?: Scalars["String"] | null
  onBehalfOf_not?: Scalars["String"] | null
  onBehalfOf_gt?: Scalars["String"] | null
  onBehalfOf_lt?: Scalars["String"] | null
  onBehalfOf_gte?: Scalars["String"] | null
  onBehalfOf_lte?: Scalars["String"] | null
  onBehalfOf_in?: Scalars["String"][] | null
  onBehalfOf_not_in?: Scalars["String"][] | null
  onBehalfOf_contains?: Scalars["String"] | null
  onBehalfOf_not_contains?: Scalars["String"] | null
  onBehalfOf_starts_with?: Scalars["String"] | null
  onBehalfOf_not_starts_with?: Scalars["String"] | null
  onBehalfOf_ends_with?: Scalars["String"] | null
  onBehalfOf_not_ends_with?: Scalars["String"] | null
  amount?: Scalars["BigInt"] | null
  amount_not?: Scalars["BigInt"] | null
  amount_gt?: Scalars["BigInt"] | null
  amount_lt?: Scalars["BigInt"] | null
  amount_gte?: Scalars["BigInt"] | null
  amount_lte?: Scalars["BigInt"] | null
  amount_in?: Scalars["BigInt"][] | null
  amount_not_in?: Scalars["BigInt"][] | null
  stakePosition?: Scalars["String"] | null
  stakePosition_not?: Scalars["String"] | null
  stakePosition_gt?: Scalars["String"] | null
  stakePosition_lt?: Scalars["String"] | null
  stakePosition_gte?: Scalars["String"] | null
  stakePosition_lte?: Scalars["String"] | null
  stakePosition_in?: Scalars["String"][] | null
  stakePosition_not_in?: Scalars["String"][] | null
  stakePosition_contains?: Scalars["String"] | null
  stakePosition_not_contains?: Scalars["String"] | null
  stakePosition_starts_with?: Scalars["String"] | null
  stakePosition_not_starts_with?: Scalars["String"] | null
  stakePosition_ends_with?: Scalars["String"] | null
  stakePosition_not_ends_with?: Scalars["String"] | null
}

export interface SubscriptionRequest {
  stake?: [
    {
      id: Scalars["ID"]
      /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
      block?: Block_height | null
    },
    StakeRequest
  ]
  stakes?: [
    {
      skip?: Scalars["Int"] | null
      first?: Scalars["Int"] | null
      orderBy?: Stake_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Stake_filter | null
      /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
      block?: Block_height | null
    },
    StakeRequest
  ]
  redeem?: [
    {
      id: Scalars["ID"]
      /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
      block?: Block_height | null
    },
    RedeemRequest
  ]
  redeems?: [
    {
      skip?: Scalars["Int"] | null
      first?: Scalars["Int"] | null
      orderBy?: Redeem_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Redeem_filter | null
      /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
      block?: Block_height | null
    },
    RedeemRequest
  ]
  claimReward?: [
    {
      id: Scalars["ID"]
      /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
      block?: Block_height | null
    },
    ClaimRewardRequest
  ]
  claimRewards?: [
    {
      skip?: Scalars["Int"] | null
      first?: Scalars["Int"] | null
      orderBy?: ClaimReward_orderBy | null
      orderDirection?: OrderDirection | null
      where?: ClaimReward_filter | null
      /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
      block?: Block_height | null
    },
    ClaimRewardRequest
  ]
  transfer?: [
    {
      id: Scalars["ID"]
      /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
      block?: Block_height | null
    },
    TransferRequest
  ]
  transfers?: [
    {
      skip?: Scalars["Int"] | null
      first?: Scalars["Int"] | null
      orderBy?: Transfer_orderBy | null
      orderDirection?: OrderDirection | null
      where?: Transfer_filter | null
      /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
      block?: Block_height | null
    },
    TransferRequest
  ]
  stakePosition?: [
    {
      id: Scalars["ID"]
      /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
      block?: Block_height | null
    },
    StakePositionRequest
  ]
  stakePositions?: [
    {
      skip?: Scalars["Int"] | null
      first?: Scalars["Int"] | null
      orderBy?: StakePosition_orderBy | null
      orderDirection?: OrderDirection | null
      where?: StakePosition_filter | null
      /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
      block?: Block_height | null
    },
    StakePositionRequest
  ]
  stakeToken?: [
    {
      id: Scalars["ID"]
      /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
      block?: Block_height | null
    },
    StakeTokenRequest
  ]
  stakeTokens?: [
    {
      skip?: Scalars["Int"] | null
      first?: Scalars["Int"] | null
      orderBy?: StakeToken_orderBy | null
      orderDirection?: OrderDirection | null
      where?: StakeToken_filter | null
      /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
      block?: Block_height | null
    },
    StakeTokenRequest
  ]
  /** Access to subgraph metadata */
  _meta?: [{ block?: Block_height | null }, _Meta_Request] | _Meta_Request
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface TransferRequest {
  /** Tx hash */
  id?: boolean | number
  stakeToken?: StakeTokenRequest
  from?: boolean | number
  to?: boolean | number
  amount?: boolean | number
  stakePosition?: StakePositionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface Transfer_filter {
  id?: Scalars["ID"] | null
  id_not?: Scalars["ID"] | null
  id_gt?: Scalars["ID"] | null
  id_lt?: Scalars["ID"] | null
  id_gte?: Scalars["ID"] | null
  id_lte?: Scalars["ID"] | null
  id_in?: Scalars["ID"][] | null
  id_not_in?: Scalars["ID"][] | null
  stakeToken?: Scalars["String"] | null
  stakeToken_not?: Scalars["String"] | null
  stakeToken_gt?: Scalars["String"] | null
  stakeToken_lt?: Scalars["String"] | null
  stakeToken_gte?: Scalars["String"] | null
  stakeToken_lte?: Scalars["String"] | null
  stakeToken_in?: Scalars["String"][] | null
  stakeToken_not_in?: Scalars["String"][] | null
  stakeToken_contains?: Scalars["String"] | null
  stakeToken_not_contains?: Scalars["String"] | null
  stakeToken_starts_with?: Scalars["String"] | null
  stakeToken_not_starts_with?: Scalars["String"] | null
  stakeToken_ends_with?: Scalars["String"] | null
  stakeToken_not_ends_with?: Scalars["String"] | null
  from?: Scalars["String"] | null
  from_not?: Scalars["String"] | null
  from_gt?: Scalars["String"] | null
  from_lt?: Scalars["String"] | null
  from_gte?: Scalars["String"] | null
  from_lte?: Scalars["String"] | null
  from_in?: Scalars["String"][] | null
  from_not_in?: Scalars["String"][] | null
  from_contains?: Scalars["String"] | null
  from_not_contains?: Scalars["String"] | null
  from_starts_with?: Scalars["String"] | null
  from_not_starts_with?: Scalars["String"] | null
  from_ends_with?: Scalars["String"] | null
  from_not_ends_with?: Scalars["String"] | null
  to?: Scalars["String"] | null
  to_not?: Scalars["String"] | null
  to_gt?: Scalars["String"] | null
  to_lt?: Scalars["String"] | null
  to_gte?: Scalars["String"] | null
  to_lte?: Scalars["String"] | null
  to_in?: Scalars["String"][] | null
  to_not_in?: Scalars["String"][] | null
  to_contains?: Scalars["String"] | null
  to_not_contains?: Scalars["String"] | null
  to_starts_with?: Scalars["String"] | null
  to_not_starts_with?: Scalars["String"] | null
  to_ends_with?: Scalars["String"] | null
  to_not_ends_with?: Scalars["String"] | null
  amount?: Scalars["BigInt"] | null
  amount_not?: Scalars["BigInt"] | null
  amount_gt?: Scalars["BigInt"] | null
  amount_lt?: Scalars["BigInt"] | null
  amount_gte?: Scalars["BigInt"] | null
  amount_lte?: Scalars["BigInt"] | null
  amount_in?: Scalars["BigInt"][] | null
  amount_not_in?: Scalars["BigInt"][] | null
  stakePosition?: Scalars["String"] | null
  stakePosition_not?: Scalars["String"] | null
  stakePosition_gt?: Scalars["String"] | null
  stakePosition_lt?: Scalars["String"] | null
  stakePosition_gte?: Scalars["String"] | null
  stakePosition_lte?: Scalars["String"] | null
  stakePosition_in?: Scalars["String"][] | null
  stakePosition_not_in?: Scalars["String"][] | null
  stakePosition_contains?: Scalars["String"] | null
  stakePosition_not_contains?: Scalars["String"] | null
  stakePosition_starts_with?: Scalars["String"] | null
  stakePosition_not_starts_with?: Scalars["String"] | null
  stakePosition_ends_with?: Scalars["String"] | null
  stakePosition_not_ends_with?: Scalars["String"] | null
}

export interface _Block_Request {
  /** The hash of the block */
  hash?: boolean | number
  /** The block number */
  number?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** The type for the top-level _meta field */
export interface _Meta_Request {
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

const ClaimReward_possibleTypes = ["ClaimReward"]
export const isClaimReward = (obj?: { __typename?: any } | null): obj is ClaimReward => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isClaimReward"')
  return ClaimReward_possibleTypes.includes(obj.__typename)
}

const Query_possibleTypes = ["Query"]
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}

const Redeem_possibleTypes = ["Redeem"]
export const isRedeem = (obj?: { __typename?: any } | null): obj is Redeem => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isRedeem"')
  return Redeem_possibleTypes.includes(obj.__typename)
}

const Stake_possibleTypes = ["Stake"]
export const isStake = (obj?: { __typename?: any } | null): obj is Stake => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isStake"')
  return Stake_possibleTypes.includes(obj.__typename)
}

const StakePosition_possibleTypes = ["StakePosition"]
export const isStakePosition = (obj?: { __typename?: any } | null): obj is StakePosition => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isStakePosition"')
  return StakePosition_possibleTypes.includes(obj.__typename)
}

const StakeToken_possibleTypes = ["StakeToken"]
export const isStakeToken = (obj?: { __typename?: any } | null): obj is StakeToken => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isStakeToken"')
  return StakeToken_possibleTypes.includes(obj.__typename)
}

const Subscription_possibleTypes = ["Subscription"]
export const isSubscription = (obj?: { __typename?: any } | null): obj is Subscription => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isSubscription"')
  return Subscription_possibleTypes.includes(obj.__typename)
}

const Transfer_possibleTypes = ["Transfer"]
export const isTransfer = (obj?: { __typename?: any } | null): obj is Transfer => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isTransfer"')
  return Transfer_possibleTypes.includes(obj.__typename)
}

const _Block__possibleTypes = ["_Block_"]
export const is_Block_ = (obj?: { __typename?: any } | null): obj is _Block_ => {
  if (!obj?.__typename) throw new Error('__typename is missing in "is_Block_"')
  return _Block__possibleTypes.includes(obj.__typename)
}

const _Meta__possibleTypes = ["_Meta_"]
export const is_Meta_ = (obj?: { __typename?: any } | null): obj is _Meta_ => {
  if (!obj?.__typename) throw new Error('__typename is missing in "is_Meta_"')
  return _Meta__possibleTypes.includes(obj.__typename)
}

export interface ClaimRewardPromiseChain {
  /** Tx hash */
  id: { get: (request?: boolean | number, defaultValue?: Scalars["ID"]) => Promise<Scalars["ID"]> }
  stakeToken: StakeTokenPromiseChain & {
    get: <R extends StakeTokenRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakeToken, R>
    ) => Promise<FieldsSelection<StakeToken, R>>
  }
  from: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"]
    ) => Promise<Scalars["String"]>
  }
  to: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"]
    ) => Promise<Scalars["String"]>
  }
  amount: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["BigInt"]
    ) => Promise<Scalars["BigInt"]>
  }
  stakePosition: StakePositionPromiseChain & {
    get: <R extends StakePositionRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakePosition, R>
    ) => Promise<FieldsSelection<StakePosition, R>>
  }
}

export interface ClaimRewardObservableChain {
  /** Tx hash */
  id: {
    get: (request?: boolean | number, defaultValue?: Scalars["ID"]) => Observable<Scalars["ID"]>
  }
  stakeToken: StakeTokenObservableChain & {
    get: <R extends StakeTokenRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakeToken, R>
    ) => Observable<FieldsSelection<StakeToken, R>>
  }
  from: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"]
    ) => Observable<Scalars["String"]>
  }
  to: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"]
    ) => Observable<Scalars["String"]>
  }
  amount: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["BigInt"]
    ) => Observable<Scalars["BigInt"]>
  }
  stakePosition: StakePositionObservableChain & {
    get: <R extends StakePositionRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakePosition, R>
    ) => Observable<FieldsSelection<StakePosition, R>>
  }
}

export interface QueryPromiseChain {
  stake: (args: {
    id: Scalars["ID"]
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => StakePromiseChain & {
    get: <R extends StakeRequest>(
      request: R,
      defaultValue?: FieldsSelection<Stake, R> | undefined
    ) => Promise<FieldsSelection<Stake, R> | undefined>
  }
  stakes: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: Stake_orderBy | null
    orderDirection?: OrderDirection | null
    where?: Stake_filter | null
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => {
    get: <R extends StakeRequest>(
      request: R,
      defaultValue?: FieldsSelection<Stake, R>[]
    ) => Promise<FieldsSelection<Stake, R>[]>
  }) & {
    get: <R extends StakeRequest>(
      request: R,
      defaultValue?: FieldsSelection<Stake, R>[]
    ) => Promise<FieldsSelection<Stake, R>[]>
  }
  redeem: (args: {
    id: Scalars["ID"]
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => RedeemPromiseChain & {
    get: <R extends RedeemRequest>(
      request: R,
      defaultValue?: FieldsSelection<Redeem, R> | undefined
    ) => Promise<FieldsSelection<Redeem, R> | undefined>
  }
  redeems: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: Redeem_orderBy | null
    orderDirection?: OrderDirection | null
    where?: Redeem_filter | null
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => {
    get: <R extends RedeemRequest>(
      request: R,
      defaultValue?: FieldsSelection<Redeem, R>[]
    ) => Promise<FieldsSelection<Redeem, R>[]>
  }) & {
    get: <R extends RedeemRequest>(
      request: R,
      defaultValue?: FieldsSelection<Redeem, R>[]
    ) => Promise<FieldsSelection<Redeem, R>[]>
  }
  claimReward: (args: {
    id: Scalars["ID"]
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => ClaimRewardPromiseChain & {
    get: <R extends ClaimRewardRequest>(
      request: R,
      defaultValue?: FieldsSelection<ClaimReward, R> | undefined
    ) => Promise<FieldsSelection<ClaimReward, R> | undefined>
  }
  claimRewards: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: ClaimReward_orderBy | null
    orderDirection?: OrderDirection | null
    where?: ClaimReward_filter | null
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => {
    get: <R extends ClaimRewardRequest>(
      request: R,
      defaultValue?: FieldsSelection<ClaimReward, R>[]
    ) => Promise<FieldsSelection<ClaimReward, R>[]>
  }) & {
    get: <R extends ClaimRewardRequest>(
      request: R,
      defaultValue?: FieldsSelection<ClaimReward, R>[]
    ) => Promise<FieldsSelection<ClaimReward, R>[]>
  }
  transfer: (args: {
    id: Scalars["ID"]
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => TransferPromiseChain & {
    get: <R extends TransferRequest>(
      request: R,
      defaultValue?: FieldsSelection<Transfer, R> | undefined
    ) => Promise<FieldsSelection<Transfer, R> | undefined>
  }
  transfers: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: Transfer_orderBy | null
    orderDirection?: OrderDirection | null
    where?: Transfer_filter | null
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => {
    get: <R extends TransferRequest>(
      request: R,
      defaultValue?: FieldsSelection<Transfer, R>[]
    ) => Promise<FieldsSelection<Transfer, R>[]>
  }) & {
    get: <R extends TransferRequest>(
      request: R,
      defaultValue?: FieldsSelection<Transfer, R>[]
    ) => Promise<FieldsSelection<Transfer, R>[]>
  }
  stakePosition: (args: {
    id: Scalars["ID"]
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => StakePositionPromiseChain & {
    get: <R extends StakePositionRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakePosition, R> | undefined
    ) => Promise<FieldsSelection<StakePosition, R> | undefined>
  }
  stakePositions: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: StakePosition_orderBy | null
    orderDirection?: OrderDirection | null
    where?: StakePosition_filter | null
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => {
    get: <R extends StakePositionRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakePosition, R>[]
    ) => Promise<FieldsSelection<StakePosition, R>[]>
  }) & {
    get: <R extends StakePositionRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakePosition, R>[]
    ) => Promise<FieldsSelection<StakePosition, R>[]>
  }
  stakeToken: (args: {
    id: Scalars["ID"]
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => StakeTokenPromiseChain & {
    get: <R extends StakeTokenRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakeToken, R> | undefined
    ) => Promise<FieldsSelection<StakeToken, R> | undefined>
  }
  stakeTokens: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: StakeToken_orderBy | null
    orderDirection?: OrderDirection | null
    where?: StakeToken_filter | null
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => {
    get: <R extends StakeTokenRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakeToken, R>[]
    ) => Promise<FieldsSelection<StakeToken, R>[]>
  }) & {
    get: <R extends StakeTokenRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakeToken, R>[]
    ) => Promise<FieldsSelection<StakeToken, R>[]>
  }

  /** Access to subgraph metadata */
  _meta: ((args?: {
    block?: Block_height | null
  }) => _Meta_PromiseChain & {
    get: <R extends _Meta_Request>(
      request: R,
      defaultValue?: FieldsSelection<_Meta_, R> | undefined
    ) => Promise<FieldsSelection<_Meta_, R> | undefined>
  }) &
    (_Meta_PromiseChain & {
      get: <R extends _Meta_Request>(
        request: R,
        defaultValue?: FieldsSelection<_Meta_, R> | undefined
      ) => Promise<FieldsSelection<_Meta_, R> | undefined>
    })
}

export interface QueryObservableChain {
  stake: (args: {
    id: Scalars["ID"]
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => StakeObservableChain & {
    get: <R extends StakeRequest>(
      request: R,
      defaultValue?: FieldsSelection<Stake, R> | undefined
    ) => Observable<FieldsSelection<Stake, R> | undefined>
  }
  stakes: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: Stake_orderBy | null
    orderDirection?: OrderDirection | null
    where?: Stake_filter | null
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => {
    get: <R extends StakeRequest>(
      request: R,
      defaultValue?: FieldsSelection<Stake, R>[]
    ) => Observable<FieldsSelection<Stake, R>[]>
  }) & {
    get: <R extends StakeRequest>(
      request: R,
      defaultValue?: FieldsSelection<Stake, R>[]
    ) => Observable<FieldsSelection<Stake, R>[]>
  }
  redeem: (args: {
    id: Scalars["ID"]
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => RedeemObservableChain & {
    get: <R extends RedeemRequest>(
      request: R,
      defaultValue?: FieldsSelection<Redeem, R> | undefined
    ) => Observable<FieldsSelection<Redeem, R> | undefined>
  }
  redeems: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: Redeem_orderBy | null
    orderDirection?: OrderDirection | null
    where?: Redeem_filter | null
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => {
    get: <R extends RedeemRequest>(
      request: R,
      defaultValue?: FieldsSelection<Redeem, R>[]
    ) => Observable<FieldsSelection<Redeem, R>[]>
  }) & {
    get: <R extends RedeemRequest>(
      request: R,
      defaultValue?: FieldsSelection<Redeem, R>[]
    ) => Observable<FieldsSelection<Redeem, R>[]>
  }
  claimReward: (args: {
    id: Scalars["ID"]
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => ClaimRewardObservableChain & {
    get: <R extends ClaimRewardRequest>(
      request: R,
      defaultValue?: FieldsSelection<ClaimReward, R> | undefined
    ) => Observable<FieldsSelection<ClaimReward, R> | undefined>
  }
  claimRewards: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: ClaimReward_orderBy | null
    orderDirection?: OrderDirection | null
    where?: ClaimReward_filter | null
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => {
    get: <R extends ClaimRewardRequest>(
      request: R,
      defaultValue?: FieldsSelection<ClaimReward, R>[]
    ) => Observable<FieldsSelection<ClaimReward, R>[]>
  }) & {
    get: <R extends ClaimRewardRequest>(
      request: R,
      defaultValue?: FieldsSelection<ClaimReward, R>[]
    ) => Observable<FieldsSelection<ClaimReward, R>[]>
  }
  transfer: (args: {
    id: Scalars["ID"]
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => TransferObservableChain & {
    get: <R extends TransferRequest>(
      request: R,
      defaultValue?: FieldsSelection<Transfer, R> | undefined
    ) => Observable<FieldsSelection<Transfer, R> | undefined>
  }
  transfers: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: Transfer_orderBy | null
    orderDirection?: OrderDirection | null
    where?: Transfer_filter | null
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => {
    get: <R extends TransferRequest>(
      request: R,
      defaultValue?: FieldsSelection<Transfer, R>[]
    ) => Observable<FieldsSelection<Transfer, R>[]>
  }) & {
    get: <R extends TransferRequest>(
      request: R,
      defaultValue?: FieldsSelection<Transfer, R>[]
    ) => Observable<FieldsSelection<Transfer, R>[]>
  }
  stakePosition: (args: {
    id: Scalars["ID"]
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => StakePositionObservableChain & {
    get: <R extends StakePositionRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakePosition, R> | undefined
    ) => Observable<FieldsSelection<StakePosition, R> | undefined>
  }
  stakePositions: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: StakePosition_orderBy | null
    orderDirection?: OrderDirection | null
    where?: StakePosition_filter | null
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => {
    get: <R extends StakePositionRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakePosition, R>[]
    ) => Observable<FieldsSelection<StakePosition, R>[]>
  }) & {
    get: <R extends StakePositionRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakePosition, R>[]
    ) => Observable<FieldsSelection<StakePosition, R>[]>
  }
  stakeToken: (args: {
    id: Scalars["ID"]
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => StakeTokenObservableChain & {
    get: <R extends StakeTokenRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakeToken, R> | undefined
    ) => Observable<FieldsSelection<StakeToken, R> | undefined>
  }
  stakeTokens: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: StakeToken_orderBy | null
    orderDirection?: OrderDirection | null
    where?: StakeToken_filter | null
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => {
    get: <R extends StakeTokenRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakeToken, R>[]
    ) => Observable<FieldsSelection<StakeToken, R>[]>
  }) & {
    get: <R extends StakeTokenRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakeToken, R>[]
    ) => Observable<FieldsSelection<StakeToken, R>[]>
  }

  /** Access to subgraph metadata */
  _meta: ((args?: {
    block?: Block_height | null
  }) => _Meta_ObservableChain & {
    get: <R extends _Meta_Request>(
      request: R,
      defaultValue?: FieldsSelection<_Meta_, R> | undefined
    ) => Observable<FieldsSelection<_Meta_, R> | undefined>
  }) &
    (_Meta_ObservableChain & {
      get: <R extends _Meta_Request>(
        request: R,
        defaultValue?: FieldsSelection<_Meta_, R> | undefined
      ) => Observable<FieldsSelection<_Meta_, R> | undefined>
    })
}

export interface RedeemPromiseChain {
  /** Tx hash */
  id: { get: (request?: boolean | number, defaultValue?: Scalars["ID"]) => Promise<Scalars["ID"]> }
  stakeToken: StakeTokenPromiseChain & {
    get: <R extends StakeTokenRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakeToken, R>
    ) => Promise<FieldsSelection<StakeToken, R>>
  }
  from: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"]
    ) => Promise<Scalars["String"]>
  }
  to: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"]
    ) => Promise<Scalars["String"]>
  }
  amount: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["BigInt"]
    ) => Promise<Scalars["BigInt"]>
  }
  stakePosition: StakePositionPromiseChain & {
    get: <R extends StakePositionRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakePosition, R>
    ) => Promise<FieldsSelection<StakePosition, R>>
  }
}

export interface RedeemObservableChain {
  /** Tx hash */
  id: {
    get: (request?: boolean | number, defaultValue?: Scalars["ID"]) => Observable<Scalars["ID"]>
  }
  stakeToken: StakeTokenObservableChain & {
    get: <R extends StakeTokenRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakeToken, R>
    ) => Observable<FieldsSelection<StakeToken, R>>
  }
  from: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"]
    ) => Observable<Scalars["String"]>
  }
  to: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"]
    ) => Observable<Scalars["String"]>
  }
  amount: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["BigInt"]
    ) => Observable<Scalars["BigInt"]>
  }
  stakePosition: StakePositionObservableChain & {
    get: <R extends StakePositionRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakePosition, R>
    ) => Observable<FieldsSelection<StakePosition, R>>
  }
}

export interface StakePromiseChain {
  /** Tx hash */
  id: { get: (request?: boolean | number, defaultValue?: Scalars["ID"]) => Promise<Scalars["ID"]> }
  stakeToken: StakeTokenPromiseChain & {
    get: <R extends StakeTokenRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakeToken, R>
    ) => Promise<FieldsSelection<StakeToken, R>>
  }
  from: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"]
    ) => Promise<Scalars["String"]>
  }
  onBehalfOf: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"]
    ) => Promise<Scalars["String"]>
  }
  amount: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["BigInt"]
    ) => Promise<Scalars["BigInt"]>
  }
  stakePosition: StakePositionPromiseChain & {
    get: <R extends StakePositionRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakePosition, R>
    ) => Promise<FieldsSelection<StakePosition, R>>
  }
}

export interface StakeObservableChain {
  /** Tx hash */
  id: {
    get: (request?: boolean | number, defaultValue?: Scalars["ID"]) => Observable<Scalars["ID"]>
  }
  stakeToken: StakeTokenObservableChain & {
    get: <R extends StakeTokenRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakeToken, R>
    ) => Observable<FieldsSelection<StakeToken, R>>
  }
  from: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"]
    ) => Observable<Scalars["String"]>
  }
  onBehalfOf: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"]
    ) => Observable<Scalars["String"]>
  }
  amount: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["BigInt"]
    ) => Observable<Scalars["BigInt"]>
  }
  stakePosition: StakePositionObservableChain & {
    get: <R extends StakePositionRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakePosition, R>
    ) => Observable<FieldsSelection<StakePosition, R>>
  }
}

export interface StakePositionPromiseChain {
  /** User Wallet address : StakeToken ID */
  id: { get: (request?: boolean | number, defaultValue?: Scalars["ID"]) => Promise<Scalars["ID"]> }
  positionBalance: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["BigInt"]
    ) => Promise<Scalars["BigInt"]>
  }
  rewardsClaimed: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["BigInt"]
    ) => Promise<Scalars["BigInt"]>
  }
  user: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"]
    ) => Promise<Scalars["String"]>
  }
  stakeToken: StakeTokenPromiseChain & {
    get: <R extends StakeTokenRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakeToken, R>
    ) => Promise<FieldsSelection<StakeToken, R>>
  }
  stakeHistory: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: Stake_orderBy | null
    orderDirection?: OrderDirection | null
    where?: Stake_filter | null
  }) => {
    get: <R extends StakeRequest>(
      request: R,
      defaultValue?: FieldsSelection<Stake, R>[]
    ) => Promise<FieldsSelection<Stake, R>[]>
  }) & {
    get: <R extends StakeRequest>(
      request: R,
      defaultValue?: FieldsSelection<Stake, R>[]
    ) => Promise<FieldsSelection<Stake, R>[]>
  }
  redeemHistory: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: Redeem_orderBy | null
    orderDirection?: OrderDirection | null
    where?: Redeem_filter | null
  }) => {
    get: <R extends RedeemRequest>(
      request: R,
      defaultValue?: FieldsSelection<Redeem, R>[]
    ) => Promise<FieldsSelection<Redeem, R>[]>
  }) & {
    get: <R extends RedeemRequest>(
      request: R,
      defaultValue?: FieldsSelection<Redeem, R>[]
    ) => Promise<FieldsSelection<Redeem, R>[]>
  }
  transferHistory: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: Transfer_orderBy | null
    orderDirection?: OrderDirection | null
    where?: Transfer_filter | null
  }) => {
    get: <R extends TransferRequest>(
      request: R,
      defaultValue?: FieldsSelection<Transfer, R>[]
    ) => Promise<FieldsSelection<Transfer, R>[]>
  }) & {
    get: <R extends TransferRequest>(
      request: R,
      defaultValue?: FieldsSelection<Transfer, R>[]
    ) => Promise<FieldsSelection<Transfer, R>[]>
  }
}

export interface StakePositionObservableChain {
  /** User Wallet address : StakeToken ID */
  id: {
    get: (request?: boolean | number, defaultValue?: Scalars["ID"]) => Observable<Scalars["ID"]>
  }
  positionBalance: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["BigInt"]
    ) => Observable<Scalars["BigInt"]>
  }
  rewardsClaimed: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["BigInt"]
    ) => Observable<Scalars["BigInt"]>
  }
  user: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"]
    ) => Observable<Scalars["String"]>
  }
  stakeToken: StakeTokenObservableChain & {
    get: <R extends StakeTokenRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakeToken, R>
    ) => Observable<FieldsSelection<StakeToken, R>>
  }
  stakeHistory: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: Stake_orderBy | null
    orderDirection?: OrderDirection | null
    where?: Stake_filter | null
  }) => {
    get: <R extends StakeRequest>(
      request: R,
      defaultValue?: FieldsSelection<Stake, R>[]
    ) => Observable<FieldsSelection<Stake, R>[]>
  }) & {
    get: <R extends StakeRequest>(
      request: R,
      defaultValue?: FieldsSelection<Stake, R>[]
    ) => Observable<FieldsSelection<Stake, R>[]>
  }
  redeemHistory: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: Redeem_orderBy | null
    orderDirection?: OrderDirection | null
    where?: Redeem_filter | null
  }) => {
    get: <R extends RedeemRequest>(
      request: R,
      defaultValue?: FieldsSelection<Redeem, R>[]
    ) => Observable<FieldsSelection<Redeem, R>[]>
  }) & {
    get: <R extends RedeemRequest>(
      request: R,
      defaultValue?: FieldsSelection<Redeem, R>[]
    ) => Observable<FieldsSelection<Redeem, R>[]>
  }
  transferHistory: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: Transfer_orderBy | null
    orderDirection?: OrderDirection | null
    where?: Transfer_filter | null
  }) => {
    get: <R extends TransferRequest>(
      request: R,
      defaultValue?: FieldsSelection<Transfer, R>[]
    ) => Observable<FieldsSelection<Transfer, R>[]>
  }) & {
    get: <R extends TransferRequest>(
      request: R,
      defaultValue?: FieldsSelection<Transfer, R>[]
    ) => Observable<FieldsSelection<Transfer, R>[]>
  }
}

export interface StakeTokenPromiseChain {
  /** Address of the stk Token */
  id: { get: (request?: boolean | number, defaultValue?: Scalars["ID"]) => Promise<Scalars["ID"]> }

  /** Stake token contract information */
  stakedToken: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"]
    ) => Promise<Scalars["String"]>
  }
  rewardToken: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"]
    ) => Promise<Scalars["String"]>
  }
  name: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"]
    ) => Promise<Scalars["String"]>
  }
  symbol: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"]
    ) => Promise<Scalars["String"]>
  }
  decimals: {
    get: (request?: boolean | number, defaultValue?: Scalars["Int"]) => Promise<Scalars["Int"]>
  }
  cooldownSeconds: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["BigInt"]
    ) => Promise<Scalars["BigInt"]>
  }
  unstakeWindow: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["BigInt"]
    ) => Promise<Scalars["BigInt"]>
  }
  currentStakedBalance: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["BigInt"]
    ) => Promise<Scalars["BigInt"]>
  }
  lifetimeRewardsDistributed: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["BigInt"]
    ) => Promise<Scalars["BigInt"]>
  }
  lifetimeStakedBalance: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["BigInt"]
    ) => Promise<Scalars["BigInt"]>
  }
  lifetimeRedeemedBalance: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["BigInt"]
    ) => Promise<Scalars["BigInt"]>
  }
  stakeHistory: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: Stake_orderBy | null
    orderDirection?: OrderDirection | null
    where?: Stake_filter | null
  }) => {
    get: <R extends StakeRequest>(
      request: R,
      defaultValue?: FieldsSelection<Stake, R>[]
    ) => Promise<FieldsSelection<Stake, R>[]>
  }) & {
    get: <R extends StakeRequest>(
      request: R,
      defaultValue?: FieldsSelection<Stake, R>[]
    ) => Promise<FieldsSelection<Stake, R>[]>
  }
  redeemHistory: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: Redeem_orderBy | null
    orderDirection?: OrderDirection | null
    where?: Redeem_filter | null
  }) => {
    get: <R extends RedeemRequest>(
      request: R,
      defaultValue?: FieldsSelection<Redeem, R>[]
    ) => Promise<FieldsSelection<Redeem, R>[]>
  }) & {
    get: <R extends RedeemRequest>(
      request: R,
      defaultValue?: FieldsSelection<Redeem, R>[]
    ) => Promise<FieldsSelection<Redeem, R>[]>
  }
  transferHistory: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: Transfer_orderBy | null
    orderDirection?: OrderDirection | null
    where?: Transfer_filter | null
  }) => {
    get: <R extends TransferRequest>(
      request: R,
      defaultValue?: FieldsSelection<Transfer, R>[]
    ) => Promise<FieldsSelection<Transfer, R>[]>
  }) & {
    get: <R extends TransferRequest>(
      request: R,
      defaultValue?: FieldsSelection<Transfer, R>[]
    ) => Promise<FieldsSelection<Transfer, R>[]>
  }
  stakePositions: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: StakePosition_orderBy | null
    orderDirection?: OrderDirection | null
    where?: StakePosition_filter | null
  }) => {
    get: <R extends StakePositionRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakePosition, R>[]
    ) => Promise<FieldsSelection<StakePosition, R>[]>
  }) & {
    get: <R extends StakePositionRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakePosition, R>[]
    ) => Promise<FieldsSelection<StakePosition, R>[]>
  }
}

export interface StakeTokenObservableChain {
  /** Address of the stk Token */
  id: {
    get: (request?: boolean | number, defaultValue?: Scalars["ID"]) => Observable<Scalars["ID"]>
  }

  /** Stake token contract information */
  stakedToken: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"]
    ) => Observable<Scalars["String"]>
  }
  rewardToken: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"]
    ) => Observable<Scalars["String"]>
  }
  name: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"]
    ) => Observable<Scalars["String"]>
  }
  symbol: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"]
    ) => Observable<Scalars["String"]>
  }
  decimals: {
    get: (request?: boolean | number, defaultValue?: Scalars["Int"]) => Observable<Scalars["Int"]>
  }
  cooldownSeconds: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["BigInt"]
    ) => Observable<Scalars["BigInt"]>
  }
  unstakeWindow: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["BigInt"]
    ) => Observable<Scalars["BigInt"]>
  }
  currentStakedBalance: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["BigInt"]
    ) => Observable<Scalars["BigInt"]>
  }
  lifetimeRewardsDistributed: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["BigInt"]
    ) => Observable<Scalars["BigInt"]>
  }
  lifetimeStakedBalance: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["BigInt"]
    ) => Observable<Scalars["BigInt"]>
  }
  lifetimeRedeemedBalance: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["BigInt"]
    ) => Observable<Scalars["BigInt"]>
  }
  stakeHistory: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: Stake_orderBy | null
    orderDirection?: OrderDirection | null
    where?: Stake_filter | null
  }) => {
    get: <R extends StakeRequest>(
      request: R,
      defaultValue?: FieldsSelection<Stake, R>[]
    ) => Observable<FieldsSelection<Stake, R>[]>
  }) & {
    get: <R extends StakeRequest>(
      request: R,
      defaultValue?: FieldsSelection<Stake, R>[]
    ) => Observable<FieldsSelection<Stake, R>[]>
  }
  redeemHistory: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: Redeem_orderBy | null
    orderDirection?: OrderDirection | null
    where?: Redeem_filter | null
  }) => {
    get: <R extends RedeemRequest>(
      request: R,
      defaultValue?: FieldsSelection<Redeem, R>[]
    ) => Observable<FieldsSelection<Redeem, R>[]>
  }) & {
    get: <R extends RedeemRequest>(
      request: R,
      defaultValue?: FieldsSelection<Redeem, R>[]
    ) => Observable<FieldsSelection<Redeem, R>[]>
  }
  transferHistory: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: Transfer_orderBy | null
    orderDirection?: OrderDirection | null
    where?: Transfer_filter | null
  }) => {
    get: <R extends TransferRequest>(
      request: R,
      defaultValue?: FieldsSelection<Transfer, R>[]
    ) => Observable<FieldsSelection<Transfer, R>[]>
  }) & {
    get: <R extends TransferRequest>(
      request: R,
      defaultValue?: FieldsSelection<Transfer, R>[]
    ) => Observable<FieldsSelection<Transfer, R>[]>
  }
  stakePositions: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: StakePosition_orderBy | null
    orderDirection?: OrderDirection | null
    where?: StakePosition_filter | null
  }) => {
    get: <R extends StakePositionRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakePosition, R>[]
    ) => Observable<FieldsSelection<StakePosition, R>[]>
  }) & {
    get: <R extends StakePositionRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakePosition, R>[]
    ) => Observable<FieldsSelection<StakePosition, R>[]>
  }
}

export interface SubscriptionPromiseChain {
  stake: (args: {
    id: Scalars["ID"]
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => StakePromiseChain & {
    get: <R extends StakeRequest>(
      request: R,
      defaultValue?: FieldsSelection<Stake, R> | undefined
    ) => Promise<FieldsSelection<Stake, R> | undefined>
  }
  stakes: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: Stake_orderBy | null
    orderDirection?: OrderDirection | null
    where?: Stake_filter | null
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => {
    get: <R extends StakeRequest>(
      request: R,
      defaultValue?: FieldsSelection<Stake, R>[]
    ) => Promise<FieldsSelection<Stake, R>[]>
  }) & {
    get: <R extends StakeRequest>(
      request: R,
      defaultValue?: FieldsSelection<Stake, R>[]
    ) => Promise<FieldsSelection<Stake, R>[]>
  }
  redeem: (args: {
    id: Scalars["ID"]
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => RedeemPromiseChain & {
    get: <R extends RedeemRequest>(
      request: R,
      defaultValue?: FieldsSelection<Redeem, R> | undefined
    ) => Promise<FieldsSelection<Redeem, R> | undefined>
  }
  redeems: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: Redeem_orderBy | null
    orderDirection?: OrderDirection | null
    where?: Redeem_filter | null
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => {
    get: <R extends RedeemRequest>(
      request: R,
      defaultValue?: FieldsSelection<Redeem, R>[]
    ) => Promise<FieldsSelection<Redeem, R>[]>
  }) & {
    get: <R extends RedeemRequest>(
      request: R,
      defaultValue?: FieldsSelection<Redeem, R>[]
    ) => Promise<FieldsSelection<Redeem, R>[]>
  }
  claimReward: (args: {
    id: Scalars["ID"]
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => ClaimRewardPromiseChain & {
    get: <R extends ClaimRewardRequest>(
      request: R,
      defaultValue?: FieldsSelection<ClaimReward, R> | undefined
    ) => Promise<FieldsSelection<ClaimReward, R> | undefined>
  }
  claimRewards: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: ClaimReward_orderBy | null
    orderDirection?: OrderDirection | null
    where?: ClaimReward_filter | null
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => {
    get: <R extends ClaimRewardRequest>(
      request: R,
      defaultValue?: FieldsSelection<ClaimReward, R>[]
    ) => Promise<FieldsSelection<ClaimReward, R>[]>
  }) & {
    get: <R extends ClaimRewardRequest>(
      request: R,
      defaultValue?: FieldsSelection<ClaimReward, R>[]
    ) => Promise<FieldsSelection<ClaimReward, R>[]>
  }
  transfer: (args: {
    id: Scalars["ID"]
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => TransferPromiseChain & {
    get: <R extends TransferRequest>(
      request: R,
      defaultValue?: FieldsSelection<Transfer, R> | undefined
    ) => Promise<FieldsSelection<Transfer, R> | undefined>
  }
  transfers: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: Transfer_orderBy | null
    orderDirection?: OrderDirection | null
    where?: Transfer_filter | null
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => {
    get: <R extends TransferRequest>(
      request: R,
      defaultValue?: FieldsSelection<Transfer, R>[]
    ) => Promise<FieldsSelection<Transfer, R>[]>
  }) & {
    get: <R extends TransferRequest>(
      request: R,
      defaultValue?: FieldsSelection<Transfer, R>[]
    ) => Promise<FieldsSelection<Transfer, R>[]>
  }
  stakePosition: (args: {
    id: Scalars["ID"]
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => StakePositionPromiseChain & {
    get: <R extends StakePositionRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakePosition, R> | undefined
    ) => Promise<FieldsSelection<StakePosition, R> | undefined>
  }
  stakePositions: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: StakePosition_orderBy | null
    orderDirection?: OrderDirection | null
    where?: StakePosition_filter | null
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => {
    get: <R extends StakePositionRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakePosition, R>[]
    ) => Promise<FieldsSelection<StakePosition, R>[]>
  }) & {
    get: <R extends StakePositionRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakePosition, R>[]
    ) => Promise<FieldsSelection<StakePosition, R>[]>
  }
  stakeToken: (args: {
    id: Scalars["ID"]
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => StakeTokenPromiseChain & {
    get: <R extends StakeTokenRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakeToken, R> | undefined
    ) => Promise<FieldsSelection<StakeToken, R> | undefined>
  }
  stakeTokens: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: StakeToken_orderBy | null
    orderDirection?: OrderDirection | null
    where?: StakeToken_filter | null
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => {
    get: <R extends StakeTokenRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakeToken, R>[]
    ) => Promise<FieldsSelection<StakeToken, R>[]>
  }) & {
    get: <R extends StakeTokenRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakeToken, R>[]
    ) => Promise<FieldsSelection<StakeToken, R>[]>
  }

  /** Access to subgraph metadata */
  _meta: ((args?: {
    block?: Block_height | null
  }) => _Meta_PromiseChain & {
    get: <R extends _Meta_Request>(
      request: R,
      defaultValue?: FieldsSelection<_Meta_, R> | undefined
    ) => Promise<FieldsSelection<_Meta_, R> | undefined>
  }) &
    (_Meta_PromiseChain & {
      get: <R extends _Meta_Request>(
        request: R,
        defaultValue?: FieldsSelection<_Meta_, R> | undefined
      ) => Promise<FieldsSelection<_Meta_, R> | undefined>
    })
}

export interface SubscriptionObservableChain {
  stake: (args: {
    id: Scalars["ID"]
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => StakeObservableChain & {
    get: <R extends StakeRequest>(
      request: R,
      defaultValue?: FieldsSelection<Stake, R> | undefined
    ) => Observable<FieldsSelection<Stake, R> | undefined>
  }
  stakes: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: Stake_orderBy | null
    orderDirection?: OrderDirection | null
    where?: Stake_filter | null
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => {
    get: <R extends StakeRequest>(
      request: R,
      defaultValue?: FieldsSelection<Stake, R>[]
    ) => Observable<FieldsSelection<Stake, R>[]>
  }) & {
    get: <R extends StakeRequest>(
      request: R,
      defaultValue?: FieldsSelection<Stake, R>[]
    ) => Observable<FieldsSelection<Stake, R>[]>
  }
  redeem: (args: {
    id: Scalars["ID"]
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => RedeemObservableChain & {
    get: <R extends RedeemRequest>(
      request: R,
      defaultValue?: FieldsSelection<Redeem, R> | undefined
    ) => Observable<FieldsSelection<Redeem, R> | undefined>
  }
  redeems: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: Redeem_orderBy | null
    orderDirection?: OrderDirection | null
    where?: Redeem_filter | null
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => {
    get: <R extends RedeemRequest>(
      request: R,
      defaultValue?: FieldsSelection<Redeem, R>[]
    ) => Observable<FieldsSelection<Redeem, R>[]>
  }) & {
    get: <R extends RedeemRequest>(
      request: R,
      defaultValue?: FieldsSelection<Redeem, R>[]
    ) => Observable<FieldsSelection<Redeem, R>[]>
  }
  claimReward: (args: {
    id: Scalars["ID"]
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => ClaimRewardObservableChain & {
    get: <R extends ClaimRewardRequest>(
      request: R,
      defaultValue?: FieldsSelection<ClaimReward, R> | undefined
    ) => Observable<FieldsSelection<ClaimReward, R> | undefined>
  }
  claimRewards: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: ClaimReward_orderBy | null
    orderDirection?: OrderDirection | null
    where?: ClaimReward_filter | null
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => {
    get: <R extends ClaimRewardRequest>(
      request: R,
      defaultValue?: FieldsSelection<ClaimReward, R>[]
    ) => Observable<FieldsSelection<ClaimReward, R>[]>
  }) & {
    get: <R extends ClaimRewardRequest>(
      request: R,
      defaultValue?: FieldsSelection<ClaimReward, R>[]
    ) => Observable<FieldsSelection<ClaimReward, R>[]>
  }
  transfer: (args: {
    id: Scalars["ID"]
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => TransferObservableChain & {
    get: <R extends TransferRequest>(
      request: R,
      defaultValue?: FieldsSelection<Transfer, R> | undefined
    ) => Observable<FieldsSelection<Transfer, R> | undefined>
  }
  transfers: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: Transfer_orderBy | null
    orderDirection?: OrderDirection | null
    where?: Transfer_filter | null
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => {
    get: <R extends TransferRequest>(
      request: R,
      defaultValue?: FieldsSelection<Transfer, R>[]
    ) => Observable<FieldsSelection<Transfer, R>[]>
  }) & {
    get: <R extends TransferRequest>(
      request: R,
      defaultValue?: FieldsSelection<Transfer, R>[]
    ) => Observable<FieldsSelection<Transfer, R>[]>
  }
  stakePosition: (args: {
    id: Scalars["ID"]
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => StakePositionObservableChain & {
    get: <R extends StakePositionRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakePosition, R> | undefined
    ) => Observable<FieldsSelection<StakePosition, R> | undefined>
  }
  stakePositions: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: StakePosition_orderBy | null
    orderDirection?: OrderDirection | null
    where?: StakePosition_filter | null
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => {
    get: <R extends StakePositionRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakePosition, R>[]
    ) => Observable<FieldsSelection<StakePosition, R>[]>
  }) & {
    get: <R extends StakePositionRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakePosition, R>[]
    ) => Observable<FieldsSelection<StakePosition, R>[]>
  }
  stakeToken: (args: {
    id: Scalars["ID"]
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => StakeTokenObservableChain & {
    get: <R extends StakeTokenRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakeToken, R> | undefined
    ) => Observable<FieldsSelection<StakeToken, R> | undefined>
  }
  stakeTokens: ((args?: {
    skip?: Scalars["Int"] | null
    first?: Scalars["Int"] | null
    orderBy?: StakeToken_orderBy | null
    orderDirection?: OrderDirection | null
    where?: StakeToken_filter | null
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: Block_height | null
  }) => {
    get: <R extends StakeTokenRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakeToken, R>[]
    ) => Observable<FieldsSelection<StakeToken, R>[]>
  }) & {
    get: <R extends StakeTokenRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakeToken, R>[]
    ) => Observable<FieldsSelection<StakeToken, R>[]>
  }

  /** Access to subgraph metadata */
  _meta: ((args?: {
    block?: Block_height | null
  }) => _Meta_ObservableChain & {
    get: <R extends _Meta_Request>(
      request: R,
      defaultValue?: FieldsSelection<_Meta_, R> | undefined
    ) => Observable<FieldsSelection<_Meta_, R> | undefined>
  }) &
    (_Meta_ObservableChain & {
      get: <R extends _Meta_Request>(
        request: R,
        defaultValue?: FieldsSelection<_Meta_, R> | undefined
      ) => Observable<FieldsSelection<_Meta_, R> | undefined>
    })
}

export interface TransferPromiseChain {
  /** Tx hash */
  id: { get: (request?: boolean | number, defaultValue?: Scalars["ID"]) => Promise<Scalars["ID"]> }
  stakeToken: StakeTokenPromiseChain & {
    get: <R extends StakeTokenRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakeToken, R>
    ) => Promise<FieldsSelection<StakeToken, R>>
  }
  from: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"]
    ) => Promise<Scalars["String"]>
  }
  to: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"]
    ) => Promise<Scalars["String"]>
  }
  amount: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["BigInt"]
    ) => Promise<Scalars["BigInt"]>
  }
  stakePosition: StakePositionPromiseChain & {
    get: <R extends StakePositionRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakePosition, R>
    ) => Promise<FieldsSelection<StakePosition, R>>
  }
}

export interface TransferObservableChain {
  /** Tx hash */
  id: {
    get: (request?: boolean | number, defaultValue?: Scalars["ID"]) => Observable<Scalars["ID"]>
  }
  stakeToken: StakeTokenObservableChain & {
    get: <R extends StakeTokenRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakeToken, R>
    ) => Observable<FieldsSelection<StakeToken, R>>
  }
  from: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"]
    ) => Observable<Scalars["String"]>
  }
  to: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"]
    ) => Observable<Scalars["String"]>
  }
  amount: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["BigInt"]
    ) => Observable<Scalars["BigInt"]>
  }
  stakePosition: StakePositionObservableChain & {
    get: <R extends StakePositionRequest>(
      request: R,
      defaultValue?: FieldsSelection<StakePosition, R>
    ) => Observable<FieldsSelection<StakePosition, R>>
  }
}

export interface _Block_PromiseChain {
  /** The hash of the block */
  hash: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Bytes"] | undefined
    ) => Promise<Scalars["Bytes"] | undefined>
  }

  /** The block number */
  number: {
    get: (request?: boolean | number, defaultValue?: Scalars["Int"]) => Promise<Scalars["Int"]>
  }
}

export interface _Block_ObservableChain {
  /** The hash of the block */
  hash: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Bytes"] | undefined
    ) => Observable<Scalars["Bytes"] | undefined>
  }

  /** The block number */
  number: {
    get: (request?: boolean | number, defaultValue?: Scalars["Int"]) => Observable<Scalars["Int"]>
  }
}

/** The type for the top-level _meta field */
export interface _Meta_PromiseChain {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_PromiseChain & {
    get: <R extends _Block_Request>(
      request: R,
      defaultValue?: FieldsSelection<_Block_, R>
    ) => Promise<FieldsSelection<_Block_, R>>
  }

  /** The deployment ID */
  deployment: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"]
    ) => Promise<Scalars["String"]>
  }

  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Boolean"]
    ) => Promise<Scalars["Boolean"]>
  }
}

/** The type for the top-level _meta field */
export interface _Meta_ObservableChain {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_ObservableChain & {
    get: <R extends _Block_Request>(
      request: R,
      defaultValue?: FieldsSelection<_Block_, R>
    ) => Observable<FieldsSelection<_Block_, R>>
  }

  /** The deployment ID */
  deployment: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["String"]
    ) => Observable<Scalars["String"]>
  }

  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars["Boolean"]
    ) => Observable<Scalars["Boolean"]>
  }
}
