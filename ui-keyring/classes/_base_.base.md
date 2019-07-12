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

*Defined in [Base.ts:33](https://github.com/polkadot-js/ui/blob/fd67ecd/packages/ui-keyring/src/Base.ts#L33)*

**Returns:** *[Base](_base_.base.md)*

## Accessors

###  accounts

• **get accounts**(): *[AddressSubject](../interfaces/_observable_types_.addresssubject.md)*

*Defined in [Base.ts:42](https://github.com/polkadot-js/ui/blob/fd67ecd/packages/ui-keyring/src/Base.ts#L42)*

**Returns:** *[AddressSubject](../interfaces/_observable_types_.addresssubject.md)*

___

###  addresses

• **get addresses**(): *[AddressSubject](../interfaces/_observable_types_.addresssubject.md)*

*Defined in [Base.ts:46](https://github.com/polkadot-js/ui/blob/fd67ecd/packages/ui-keyring/src/Base.ts#L46)*

**Returns:** *[AddressSubject](../interfaces/_observable_types_.addresssubject.md)*

___

###  contracts

• **get contracts**(): *[AddressSubject](../interfaces/_observable_types_.addresssubject.md)*

*Defined in [Base.ts:50](https://github.com/polkadot-js/ui/blob/fd67ecd/packages/ui-keyring/src/Base.ts#L50)*

**Returns:** *[AddressSubject](../interfaces/_observable_types_.addresssubject.md)*

___

###  genesisHash

• **get genesisHash**(): *string | undefined*

*Defined in [Base.ts:62](https://github.com/polkadot-js/ui/blob/fd67ecd/packages/ui-keyring/src/Base.ts#L62)*

**Returns:** *string | undefined*

___

###  keyring

• **get keyring**(): *`KeyringInstance`*

*Defined in [Base.ts:54](https://github.com/polkadot-js/ui/blob/fd67ecd/packages/ui-keyring/src/Base.ts#L54)*

**Returns:** *`KeyringInstance`*

## Methods

###  decodeAddress

▸ **decodeAddress**(`key`: string | `Uint8Array`, `ignoreChecksum?`: undefined | false | true): *`Uint8Array`*

*Defined in [Base.ts:66](https://github.com/polkadot-js/ui/blob/fd67ecd/packages/ui-keyring/src/Base.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string \| `Uint8Array` |
`ignoreChecksum?` | undefined \| false \| true |

**Returns:** *`Uint8Array`*

___

###  encodeAddress

▸ **encodeAddress**(`key`: string | `Uint8Array`): *string*

*Defined in [Base.ts:70](https://github.com/polkadot-js/ui/blob/fd67ecd/packages/ui-keyring/src/Base.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string \| `Uint8Array` |

**Returns:** *string*

___

###  getPair

▸ **getPair**(`address`: string | `Uint8Array`): *`KeyringPair`*

*Defined in [Base.ts:74](https://github.com/polkadot-js/ui/blob/fd67ecd/packages/ui-keyring/src/Base.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string \| `Uint8Array` |

**Returns:** *`KeyringPair`*

___

###  getPairs

▸ **getPairs**(): *`KeyringPair`[]*

*Defined in [Base.ts:78](https://github.com/polkadot-js/ui/blob/fd67ecd/packages/ui-keyring/src/Base.ts#L78)*

**Returns:** *`KeyringPair`[]*

___

###  isAvailable

▸ **isAvailable**(`_address`: `Uint8Array` | string): *boolean*

*Defined in [Base.ts:84](https://github.com/polkadot-js/ui/blob/fd67ecd/packages/ui-keyring/src/Base.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`_address` | `Uint8Array` \| string |

**Returns:** *boolean*

___

###  isPassValid

▸ **isPassValid**(`password`: string): *boolean*

*Defined in [Base.ts:95](https://github.com/polkadot-js/ui/blob/fd67ecd/packages/ui-keyring/src/Base.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`password` | string |

**Returns:** *boolean*

___

###  setAddressPrefix

▸ **setAddressPrefix**(`prefix`: number): *void*

*Defined in [Base.ts:99](https://github.com/polkadot-js/ui/blob/fd67ecd/packages/ui-keyring/src/Base.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`prefix` | number |

**Returns:** *void*

___

###  setDevMode

▸ **setDevMode**(`isDevelopment`: boolean): *void*

*Defined in [Base.ts:103](https://github.com/polkadot-js/ui/blob/fd67ecd/packages/ui-keyring/src/Base.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`isDevelopment` | boolean |

**Returns:** *void*