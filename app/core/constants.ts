import { Network } from "@aave/math-utils"

export const CHAINS = {
  ETHEREUM: "ETHEREUM",
  POLYGON: "POLYGON",
} as const

export const addresses = {
  THEGRAPH_STAKE: "https://api.thegraph.com/subgraphs/name/aave/aave-stake",
  THEGRAPH_PROTOCOL: {
    V1: "https://api.thegraph.com/subgraphs/name/aave/protocol-multy-raw",
    V2: "https://api.thegraph.com/subgraphs/name/aave/protocol-v2",
    POLYGON: "https://api.thegraph.com/subgraphs/name/aave/aave-v2-matic",
    AVALANCHE: "https://api.thegraph.com/subgraphs/name/aave/protocol-v2-avalanche",
  },
  // need to be lowercase for the graph
  ADDRESS_PROVIDERS: {
    V1: {
      AAVE: "0x24a42fd28c976a61df5d00d0599c34c4f90748c8",
      UNISWAP: "0x7fd53085b9a29d236235d6fc593b47c9c33429f1",
    },
    V2: {
      AAVE: "0xb53c1a33016b2dc2ff3653530bff1848a515c8c5",
      AMM: "0xacc030ef66f9dfeae9cbb0cd1b25654b82cfa8d5",
    },
    POLYGON: {
      AAVE: "0xd05e3e715d945b59290df0ae8ef85c1bdb684744",
    },
    AVALANCHE: {
      AAVE: "0xb6a86025f0fe1862b372cb0ca18ce3ede02a318f",
    },
  },
  BATCH_PROVIDERS: {
    [Network.mainnet]: "0xf49670C78794b6a604f3B49393d8eE951713339F",
    [Network.polygon]: "0x3b4108475a8092967225564C05a1E74e9F7A45D6",
    [Network.avalanche]: "0x51c4eC68ebDbE196394c4E10bC73Fc132941d36d",
  },
} as const
