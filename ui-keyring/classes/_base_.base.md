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

*Defined in [Base.ts:27](url)*

**Returns:** *[Base](_base_.base.md)*

___

## Accessors

###  accounts

● **get accounts**(): *object*

*Defined in [Base.ts:37](url)*

**Returns:** *object*

___

###  addresses

● **get addresses**(): *object*

*Defined in [Base.ts:41](url)*

**Returns:** *object*

___

###  contracts

● **get contracts**(): *object*

*Defined in [Base.ts:45](url)*

**Returns:** *object*

___

###  genesisHash

● **get genesisHash**(): *undefined | string*

*Defined in [Base.ts:57](url)*

**Returns:** *undefined | string*

___

###  keyring

● **get keyring**(): *`KeyringInstance`*

*Defined in [Base.ts:49](url)*

**Returns:** *`KeyringInstance`*

___

## Methods

###  decodeAddress

▸ **decodeAddress**(`key`: string | `Uint8Array`, `ignoreChecksum?`: undefined | false | true): *`Uint8Array`*

*Defined in [Base.ts:61](url)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string \| `Uint8Array` |
`ignoreChecksum?` | undefined \| false \| true |

**Returns:** *`Uint8Array`*

___

###  encodeAddress

▸ **encodeAddress**(`key`: string | `Uint8Array`): *string*

*Defined in [Base.ts:65](url)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string \| `Uint8Array` |

**Returns:** *string*

___

###  getPair

▸ **getPair**(`address`: string | `Uint8Array`): *`KeyringPair`*

*Defined in [Base.ts:69](url)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string \| `Uint8Array` |

**Returns:** *`KeyringPair`*

___

###  getPairs

▸ **getPairs**(): *`Array<KeyringPair>`*

*Defined in [Base.ts:73](url)*

**Returns:** *`Array<KeyringPair>`*

___

###  isAvailable

▸ **isAvailable**(`_address`: `Uint8Array` | string): *boolean*

*Defined in [Base.ts:79](url)*

**Parameters:**

Name | Type |
------ | ------ |
`_address` | `Uint8Array` \| string |

**Returns:** *boolean*

___

###  isPassValid

▸ **isPassValid**(`password`: string): *boolean*

*Defined in [Base.ts:90](url)*

**Parameters:**

Name | Type |
------ | ------ |
`password` | string |

**Returns:** *boolean*

___

###  setAddressPrefix

▸ **setAddressPrefix**(`prefix`: number): *void*

*Defined in [Base.ts:94](url)*

**Parameters:**

Name | Type |
------ | ------ |
`prefix` | number |

**Returns:** *void*

___

###  setDevMode

▸ **setDevMode**(`isDevelopment`: boolean): *void*

*Defined in [Base.ts:98](url)*

**Parameters:**

Name | Type |
------ | ------ |
`isDevelopment` | boolean |

**Returns:** *void*

___