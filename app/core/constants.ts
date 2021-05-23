import { ChainId } from "@aave/protocol-js"

export const CHAINS = {
  ETHEREUM: "ETHEREUM",
  MATIC: "MATIC",
} as const

export const addresses = {
  THEGRAPH_STAKE: "https://api.thegraph.com/subgraphs/name/aave/aave-stake",
  THEGRAPH_PROTOCOL: {
    V1: "https://api.thegraph.com/subgraphs/name/aave/protocol-multy-raw",
    V2: "https://api.thegraph.com/subgraphs/name/aave/protocol-v2",
    MATIC: "https://api.thegraph.com/subgraphs/name/aave/aave-v2-matic",
  },
  ADDRESS_PROVIDERS: {
    V1: {
      AAVE: "0x24a42fd28c976a61df5d00d0599c34c4f90748c8",
      UNISWAP: "0x7fd53085b9a29d236235d6fc593b47c9c33429f1",
    },
    V2: {
      AAVE: "0xb53c1a33016b2dc2ff3653530bff1848a515c8c5",
      AMM: "0xacc030ef66f9dfeae9cbb0cd1b25654b82cfa8d5",
    },
    MATIC: {
      AAVE: "0xd05e3e715d945b59290df0ae8ef85c1bdb684744",
    },
  },
  BATCH_PROVIDERS: {
    [ChainId.mainnet]: "0x48d164699f0C95AA0dC4097D74413EA216564F97",
    [ChainId.polygon]: "0x68cf9d517cb57291FEb67dBb10044c1E3e4d4F2d",
  },
} as const
