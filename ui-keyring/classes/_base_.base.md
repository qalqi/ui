> # Class: Base

## Hierarchy

* **Base**

  * [Keyring](_keyring_.keyring.md)

### Index

#### Constructors

* [constructor](_base_.base.md#constructor)

#### Accessors

* [accounts](_base_.base.md#accounts)
* [addresses](_base_.base.md#addresses)
* [contracts](_base_.base.md#contracts)
* [genesisHash](_base_.base.md#genesishash)
* [keyring](_base_.base.md#keyring)

#### Methods

* [decodeAddress](_base_.base.md#decodeaddress)
* [encodeAddress](_base_.base.md#encodeaddress)
* [getPair](_base_.base.md#getpair)
* [getPairs](_base_.base.md#getpairs)
* [isAvailable](_base_.base.md#isavailable)
* [isPassValid](_base_.base.md#ispassvalid)
* [setAddressPrefix](_base_.base.md#setaddressprefix)
* [setDevMode](_base_.base.md#setdevmode)

## Constructors

###  constructor

\+ **new Base**(): *[Base](_base_.base.md)*

*Defined in [Base.ts:27](https://github.com/polkadot-js/ui/blob/49a0d06/packages/ui-keyring/src/Base.ts#L27)*

**Returns:** *[Base](_base_.base.md)*

___

## Accessors

###  accounts

● **get accounts**(): *object*

*Defined in [Base.ts:37](https://github.com/polkadot-js/ui/blob/49a0d06/packages/ui-keyring/src/Base.ts#L37)*

**Returns:** *object*

___

###  addresses

● **get addresses**(): *object*

*Defined in [Base.ts:41](https://github.com/polkadot-js/ui/blob/49a0d06/packages/ui-keyring/src/Base.ts#L41)*

**Returns:** *object*

___

###  contracts

● **get contracts**(): *object*

*Defined in [Base.ts:45](https://github.com/polkadot-js/ui/blob/49a0d06/packages/ui-keyring/src/Base.ts#L45)*

**Returns:** *object*

___

###  genesisHash

● **get genesisHash**(): *undefined | string*

*Defined in [Base.ts:57](https://github.com/polkadot-js/ui/blob/49a0d06/packages/ui-keyring/src/Base.ts#L57)*

**Returns:** *undefined | string*

___

###  keyring

● **get keyring**(): *`KeyringInstance`*

*Defined in [Base.ts:49](https://github.com/polkadot-js/ui/blob/49a0d06/packages/ui-keyring/src/Base.ts#L49)*

**Returns:** *`KeyringInstance`*

___

## Methods

###  decodeAddress

▸ **decodeAddress**(`key`: string | `Uint8Array`, `ignoreChecksum?`: undefined | false | true): *`Uint8Array`*

*Defined in [Base.ts:61](https://github.com/polkadot-js/ui/blob/49a0d06/packages/ui-keyring/src/Base.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string \| `Uint8Array` |
`ignoreChecksum?` | undefined \| false \| true |

**Returns:** *`Uint8Array`*

___

###  encodeAddress

▸ **encodeAddress**(`key`: string | `Uint8Array`): *string*

*Defined in [Base.ts:65](https://github.com/polkadot-js/ui/blob/49a0d06/packages/ui-keyring/src/Base.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string \| `Uint8Array` |

**Returns:** *string*

___

###  getPair

▸ **getPair**(`address`: string | `Uint8Array`): *`KeyringPair`*

*Defined in [Base.ts:69](https://github.com/polkadot-js/ui/blob/49a0d06/packages/ui-keyring/src/Base.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string \| `Uint8Array` |

**Returns:** *`KeyringPair`*

___

###  getPairs

▸ **getPairs**(): *`Array<KeyringPair>`*

*Defined in [Base.ts:73](https://github.com/polkadot-js/ui/blob/49a0d06/packages/ui-keyring/src/Base.ts#L73)*

**Returns:** *`Array<KeyringPair>`*

___

###  isAvailable

▸ **isAvailable**(`_address`: `Uint8Array` | string): *boolean*

*Defined in [Base.ts:79](https://github.com/polkadot-js/ui/blob/49a0d06/packages/ui-keyring/src/Base.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`_address` | `Uint8Array` \| string |

**Returns:** *boolean*

___

###  isPassValid

▸ **isPassValid**(`password`: string): *boolean*

*Defined in [Base.ts:90](https://github.com/polkadot-js/ui/blob/49a0d06/packages/ui-keyring/src/Base.ts#L90)*

**Parameters:**

Name | Type |
------ | ------ |
`password` | string |

**Returns:** *boolean*

___

###  setAddressPrefix

▸ **setAddressPrefix**(`prefix`: number): *void*

*Defined in [Base.ts:94](https://github.com/polkadot-js/ui/blob/49a0d06/packages/ui-keyring/src/Base.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`prefix` | number |

**Returns:** *void*

___

###  setDevMode

▸ **setDevMode**(`isDevelopment`: boolean): *void*

*Defined in [Base.ts:98](https://github.com/polkadot-js/ui/blob/49a0d06/packages/ui-keyring/src/Base.ts#L98)*

**Parameters:**

Name | Type |
------ | ------ |
`isDevelopment` | boolean |

**Returns:** *void*

___