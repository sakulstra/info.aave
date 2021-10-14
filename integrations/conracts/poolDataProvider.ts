import { providers } from "ethers"
import { IUiPoolDataProviderFactory } from "./IUiPoolDataProviderFactory"
import { API_ETH_MOCK_ADDRESS, BigNumber } from "@aave/protocol-js"
import { Network } from "@aave/math-utils"
import { addresses } from "app/core/constants"

export const unPrefixSymbol = (symbol: string, prefix: string) => {
  return symbol.toUpperCase().replace(new RegExp(`^(${prefix[0]}?${prefix.slice(1)})`), "")
}

function formatObjectWithBNFields<T extends { [key: string]: any }>(obj: T) {
  return Object.keys(obj).reduce((acc, key: keyof T) => {
    if (isNaN(Number(key))) {
      // @ts-ignore
      let value = obj[key]
      if (value._isBigNumber) {
        value = value.toString()
      }
      acc[key] = value
    }
    return acc
  }, {} as { [key in keyof T]: number | string })
}

const PROVIDERS = {
  [Network.polygon]: new providers.JsonRpcProvider(process.env.POLYGON_RPC, Network.polygon),
  [Network.mainnet]: new providers.JsonRpcProvider(process.env.MAINNET_RPC),
  [Network.avalanche]: new providers.JsonRpcProvider(
    "https://api.avax.network/ext/bc/C/rpc",
    Network.avalanche
  ),
}

const contracts = {
  [Network.polygon]: IUiPoolDataProviderFactory.connect(
    addresses.BATCH_PROVIDERS[Network.polygon], // TODO: make chain independant
    PROVIDERS[Network.polygon]
  ),
  [Network.mainnet]: IUiPoolDataProviderFactory.connect(
    addresses.BATCH_PROVIDERS[Network.mainnet], // TODO: make chain independant
    PROVIDERS[Network.mainnet]
  ),
  [Network.avalanche]: IUiPoolDataProviderFactory.connect(
    addresses.BATCH_PROVIDERS[Network.avalanche], // TODO: make chain independant
    PROVIDERS[Network.avalanche]
  ),
}

export async function getOnChainReserves(poolId) {
  let chain = Network.polygon
  if ((Object.values(addresses.ADDRESS_PROVIDERS.POLYGON) as string[]).includes(poolId)) {
    chain = Network.polygon
  }
  if ((Object.values(addresses.ADDRESS_PROVIDERS.V2) as string[]).includes(poolId)) {
    chain = Network.mainnet
  }
  if ((Object.values(addresses.ADDRESS_PROVIDERS.AVALANCHE) as string[]).includes(poolId)) {
    chain = Network.avalanche
  }
  const helperContract = contracts[chain]
  const {
    0: rawReservesData,
    1: userReserves,
    2: usdPriceEth,
    3: userUnclaimedRewards,
  } = await helperContract.getReservesData(poolId, API_ETH_MOCK_ADDRESS)

  const formattedReservesData = rawReservesData.map((rawReserve) => {
    const formattedReserve = {
      ...formatObjectWithBNFields(rawReserve),
      id: (rawReserve.underlyingAsset + poolId).toLowerCase(),
      priceInMarketReferenceCurrency: rawReserve.priceInEth.toString(),
    }
    formattedReserve.symbol = rawReserve.symbol.toUpperCase()
    formattedReserve.underlyingAsset = rawReserve.underlyingAsset.toLowerCase()
    formattedReserve.symbol = unPrefixSymbol(rawReserve.symbol, "AM")
    return formattedReserve
  })

  return {
    reserves: formattedReservesData,
    usdPriceEth: new BigNumber(10)
      .exponentiatedBy(18 + 8)
      .div(usdPriceEth.toString())
      .toFixed(0, BigNumber.ROUND_DOWN),
  }
}
