import { providers } from "ethers"
import { IUiPoolDataProviderFactory } from "./IUiPoolDataProviderFactory"
import { API_ETH_MOCK_ADDRESS, BigNumber, ChainId } from "@aave/protocol-js"
import { addresses } from "app/core/constants"

export const unPrefixSymbol = (symbol: string, prefix: string) => {
  return symbol.toUpperCase().replace(new RegExp(`^(${prefix[0]}?${prefix.slice(1)})`), "")
}

function formatObjectWithBNFields(obj: object): any {
  return Object.keys(obj).reduce((acc, key) => {
    if (isNaN(Number(key))) {
      // @ts-ignore
      let value = obj[key]
      if (value._isBigNumber) {
        value = value.toString()
      }
      acc[key] = value
    }
    return acc
  }, {} as any)
}

const PROVIDERS = {
  [ChainId.polygon]: new providers.JsonRpcProvider(process.env.POLYGON_RPC, ChainId.polygon),
  [ChainId.mainnet]: new providers.JsonRpcProvider(process.env.MAINNET_RPC),
}

const contracts = {
  [ChainId.polygon]: IUiPoolDataProviderFactory.connect(
    addresses.BATCH_PROVIDERS[ChainId.polygon], // TODO: make chain independant
    PROVIDERS[ChainId.polygon]
  ),
  [ChainId.mainnet]: IUiPoolDataProviderFactory.connect(
    addresses.BATCH_PROVIDERS[ChainId.mainnet], // TODO: make chain independant
    PROVIDERS[ChainId.mainnet]
  ),
}

export async function getOnChainReserves(poolId) {
  let chain = ChainId.polygon
  if ((Object.values(addresses.ADDRESS_PROVIDERS.POLYGON) as string[]).includes(poolId)) {
    chain = ChainId.polygon
  }
  if ((Object.values(addresses.ADDRESS_PROVIDERS.V2) as string[]).includes(poolId)) {
    chain = ChainId.mainnet
  }
  const helperContract = contracts[chain]
  const {
    0: rawReservesData,
    1: userReserves,
    2: usdPriceEth,
    3: userUnclaimedRewards,
  } = await helperContract.getReservesData(poolId, API_ETH_MOCK_ADDRESS)

  const formattedReservesData = rawReservesData.map((rawReserve) => {
    const formattedReserve = formatObjectWithBNFields(rawReserve)
    formattedReserve.symbol = rawReserve.symbol.toUpperCase()
    formattedReserve.id = (rawReserve.underlyingAsset + poolId).toLowerCase()
    formattedReserve.underlyingAsset = rawReserve.underlyingAsset.toLowerCase()
    formattedReserve.price = { priceInEth: rawReserve.priceInEth.toString() }
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
