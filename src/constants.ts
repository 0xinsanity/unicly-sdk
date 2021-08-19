import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  MATIC=137,
  MUMBAI=80001

}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = '0xbAcC776b231c571a7e6ab7Bc2C8a099e07153377'
export const FACTORY_ADDRESS_POLYGON = '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32'


export const FACTORY_CONTRACTS = {
  [ChainId.MAINNET]: FACTORY_ADDRESS,
  [ChainId.ROPSTEN]: FACTORY_ADDRESS,
  [ChainId.RINKEBY]: FACTORY_ADDRESS,
  [ChainId.GÖRLI]: FACTORY_ADDRESS,
  [ChainId.KOVAN]: FACTORY_ADDRESS,
  [ChainId.MATIC]: FACTORY_ADDRESS_POLYGON,
  [ChainId.MUMBAI]: FACTORY_ADDRESS_POLYGON,
}



export const INIT_CODE_HASH = '0x5648dac156e6a11a3e5d8490b7ea082913b6a97a1cd9a2b746dbedb1d922f6a8'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
