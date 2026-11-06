import AssetRegistry from './abis/AssetRegistry.json' with { type: 'json' }
import CallMarket from './abis/CallMarket.json' with { type: 'json' }
import PutMarket from './abis/PutMarket.json' with { type: 'json' }
import OptionNFT from './abis/OptionNFT.json' with { type: 'json' }
import Router from './abis/Router.json' with { type: 'json' }
import FeeVault from './abis/FeeVault.json' with { type: 'json' }
import StakingPool from './abis/StakingPool.json' with { type: 'json' }
import BuybackBurner from './abis/BuybackBurner.json' with { type: 'json' }
import UniswapV4Adapter from './abis/UniswapV4Adapter.json' with { type: 'json' }
import KyteHook from './abis/KyteHook.json' with { type: 'json' }
import all from './addresses.json' with { type: 'json' }

export const chainId = 4663
export const abis = { AssetRegistry, CallMarket, PutMarket, OptionNFT, Router, FeeVault, StakingPool, BuybackBurner, UniswapV4Adapter, KyteHook }
export const addresses = all[chainId]
export default { chainId, abis, addresses }
