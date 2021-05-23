import { createClient as createClientV1 } from "./v1"
import { createClient as createClientV2 } from "./v2"
import { createClient as createClientStaking } from "./staking"
import { addresses } from "app/core/constants"

export enum Version {
  V1 = "V1",
  V2 = "V2",
}

export const gqlSdkV1 = createClientV1({ url: addresses.THEGRAPH_PROTOCOL[Version.V1] })
export const gqlSdkV2 = createClientV2({ url: addresses.THEGRAPH_PROTOCOL[Version.V2] })
export const gqlSdkMatic = createClientV2({ url: addresses.THEGRAPH_PROTOCOL.MATIC })
export const gqlSdkStake = createClientStaking({ url: addresses.THEGRAPH_STAKE })
