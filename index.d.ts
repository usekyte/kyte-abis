import type { Abi } from 'viem'
import AssetRegistry from './abis/AssetRegistry.json'
import CallMarket from './abis/CallMarket.json'
import PutMarket from './abis/PutMarket.json'
import OptionNFT from './abis/OptionNFT.json'
import Router from './abis/Router.json'
import FeeVault from './abis/FeeVault.json'
import StakingPool from './abis/StakingPool.json'
import BuybackBurner from './abis/BuybackBurner.json'
import UniswapV4Adapter from './abis/UniswapV4Adapter.json'
import KyteHook from './abis/KyteHook.json'
export declare const chainId: 4663
export declare const abis: { AssetRegistry: typeof AssetRegistry & Abi; CallMarket: typeof CallMarket & Abi; PutMarket: typeof PutMarket & Abi; OptionNFT: typeof OptionNFT & Abi; Router: typeof Router & Abi; FeeVault: typeof FeeVault & Abi; StakingPool: typeof StakingPool & Abi; BuybackBurner: typeof BuybackBurner & Abi; UniswapV4Adapter: typeof UniswapV4Adapter & Abi; KyteHook: typeof KyteHook & Abi }
export declare const addresses: typeof import('./addresses.json')['4663']
declare const _default: { chainId: typeof chainId; abis: typeof abis; addresses: typeof addresses }
export default _default
