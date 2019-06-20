> # Class: Keyring

## Hierarchy

* [Base](_base_.base.md)

  * **Keyring**

## Implements

* [KeyringStruct](../interfaces/_types_.keyringstruct.md)

### Index

#### Constructors

* [constructor](_keyring_.keyring.md#constructor)

#### Accessors

* [accounts](_keyring_.keyring.md#accounts)
* [addresses](_keyring_.keyring.md#addresses)
* [contracts](_keyring_.keyring.md#contracts)
* [genesisHash](_keyring_.keyring.md#genesishash)
* [keyring](_keyring_.keyring.md#keyring)

#### Methods

* [addExternal](_keyring_.keyring.md#addexternal)
* [addPair](_keyring_.keyring.md#addpair)
* [addUri](_keyring_.keyring.md#adduri)
* [backupAccount](_keyring_.keyring.md#backupaccount)
* [createFromUri](_keyring_.keyring.md#createfromuri)
* [decodeAddress](_keyring_.keyring.md#decodeaddress)
* [encodeAddress](_keyring_.keyring.md#encodeaddress)
* [encryptAccount](_keyring_.keyring.md#encryptaccount)
* [forgetAccount](_keyring_.keyring.md#forgetaccount)
* [forgetAddress](_keyring_.keyring.md#forgetaddress)
* [forgetContract](_keyring_.keyring.md#forgetcontract)
* [getAccount](_keyring_.keyring.md#getaccount)
* [getAccounts](_keyring_.keyring.md#getaccounts)
* [getAddress](_keyring_.keyring.md#getaddress)
* [getAddresses](_keyring_.keyring.md#getaddresses)
* [getContract](_keyring_.keyring.md#getcontract)
* [getContracts](_keyring_.keyring.md#getcontracts)
* [getPair](_keyring_.keyring.md#getpair)
* [getPairs](_keyring_.keyring.md#getpairs)
* [isAvailable](_keyring_.keyring.md#isavailable)
* [isPassValid](_keyring_.keyring.md#ispassvalid)
* [loadAll](_keyring_.keyring.md#loadall)
* [restoreAccount](_keyring_.keyring.md#restoreaccount)
* [saveAccount](_keyring_.keyring.md#saveaccount)
* [saveAccountMeta](_keyring_.keyring.md#saveaccountmeta)
* [saveAddress](_keyring_.keyring.md#saveaddress)
* [saveContract](_keyring_.keyring.md#savecontract)
* [saveRecent](_keyring_.keyring.md#saverecent)
* [setAddressPrefix](_keyring_.keyring.md#setaddressprefix)
* [setDevMode](_keyring_.keyring.md#setdevmode)

#### Object literals

* [stores](_keyring_.keyring.md#stores)

## Constructors

###  constructor

\+ **new Keyring**(): *[Keyring](_keyring_.keyring.md)*

*Inherited from [Base](_base_.base.md).[constructor](_base_.base.md#constructor)*

*Defined in [Base.ts:27](url)*

**Returns:** *[Keyring](_keyring_.keyring.md)*

___

## Accessors

###  accounts

● **get accounts**(): *object*

*Inherited from [Base](_base_.base.md).[accounts](_base_.base.md#accounts)*

*Defined in [Base.ts:37](url)*

**Returns:** *object*

___

###  addresses

● **get addresses**(): *object*

*Inherited from [Base](_base_.base.md).[addresses](_base_.base.md#addresses)*

*Defined in [Base.ts:41](url)*

**Returns:** *object*

___

###  contracts

● **get contracts**(): *object*

*Inherited from [Base](_base_.base.md).[contracts](_base_.base.md#contracts)*

*Defined in [Base.ts:45](url)*

**Returns:** *object*

___

###  genesisHash

● **get genesisHash**(): *undefined | string*

*Inherited from [Base](_base_.base.md).[genesisHash](_base_.base.md#genesishash)*

*Defined in [Base.ts:57](url)*

**Returns:** *undefined | string*

___

###  keyring

● **get keyring**(): *`KeyringInstance`*

*Inherited from [Base](_base_.base.md).[keyring](_base_.base.md#keyring)*

*Defined in [Base.ts:49](url)*

**Returns:** *`KeyringInstance`*

___

## Methods

###  addExternal

▸ **addExternal**(`publicKey`: `Uint8Array`, `meta`: `KeyringPair$Meta`): *[CreateResult](../modules/_types_.md#createresult)*

*Defined in [Keyring.ts:30](url)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`publicKey` | `Uint8Array` | - |
`meta` | `KeyringPair$Meta` |  {} |

**Returns:** *[CreateResult](../modules/_types_.md#createresult)*

___

###  addPair

▸ **addPair**(`pair`: `KeyringPair`, `password`: string): *[CreateResult](../modules/_types_.md#createresult)*

*Defined in [Keyring.ts:40](url)*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | `KeyringPair` |
`password` | string |

**Returns:** *[CreateResult](../modules/_types_.md#createresult)*

___

###  addUri

▸ **addUri**(`suri`: string, `password?`: undefined | string, `meta`: `KeyringPair$Meta`, `type?`: `KeypairType`): *[CreateResult](../modules/_types_.md#createresult)*

*Defined in [Keyring.ts:50](url)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`suri` | string | - |
`password?` | undefined \| string | - |
`meta` | `KeyringPair$Meta` |  {} |
`type?` | `KeypairType` | - |

**Returns:** *[CreateResult](../modules/_types_.md#createresult)*

___

###  backupAccount

▸ **backupAccount**(`pair`: `KeyringPair`, `password`: string): *`KeyringPair$Json`*

*Defined in [Keyring.ts:60](url)*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | `KeyringPair` |
`password` | string |

**Returns:** *`KeyringPair$Json`*

___

###  createFromUri

▸ **createFromUri**(`suri`: string, `meta`: `KeyringPair$Meta`, `type?`: `KeypairType`): *`KeyringPair`*

*Implementation of [KeyringStruct](../interfaces/_types_.keyringstruct.md)*

*Defined in [Keyring.ts:70](url)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`suri` | string | - |
`meta` | `KeyringPair$Meta` |  {} |
`type?` | `KeypairType` | - |

**Returns:** *`KeyringPair`*

___

###  decodeAddress

▸ **decodeAddress**(`key`: string | `Uint8Array`, `ignoreChecksum?`: undefined | false | true): *`Uint8Array`*

*Inherited from [Base](_base_.base.md)*

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

*Inherited from [Base](_base_.base.md)*

*Defined in [Base.ts:65](url)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string \| `Uint8Array` |

**Returns:** *string*

___

###  encryptAccount

▸ **encryptAccount**(`pair`: `KeyringPair`, `password`: string): *void*

*Defined in [Keyring.ts:74](url)*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | `KeyringPair` |
`password` | string |

**Returns:** *void*

___

###  forgetAccount

▸ **forgetAccount**(`address`: string): *void*

*Defined in [Keyring.ts:83](url)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *void*

___

###  forgetAddress

▸ **forgetAddress**(`address`: string): *void*

*Defined in [Keyring.ts:88](url)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *void*

___

###  forgetContract

▸ **forgetContract**(`address`: string): *void*

*Defined in [Keyring.ts:92](url)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *void*

___

###  getAccount

▸ **getAccount**(`address`: string | `Uint8Array`): *[KeyringAddress](../modules/_types_.md#keyringaddress) | undefined*

*Defined in [Keyring.ts:96](url)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string \| `Uint8Array` |

**Returns:** *[KeyringAddress](../modules/_types_.md#keyringaddress) | undefined*

___

###  getAccounts

▸ **getAccounts**(): *`Array<KeyringAddress>`*

*Defined in [Keyring.ts:100](url)*

**Returns:** *`Array<KeyringAddress>`*

___

###  getAddress

▸ **getAddress**(`_address`: string | `Uint8Array`, `type`: [KeyringItemType](../modules/_types_.md#keyringitemtype) | null): *[KeyringAddress](../modules/_types_.md#keyringaddress) | undefined*

*Defined in [Keyring.ts:109](url)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_address` | string \| `Uint8Array` | - |
`type` | [KeyringItemType](../modules/_types_.md#keyringitemtype) \| null |  null |

**Returns:** *[KeyringAddress](../modules/_types_.md#keyringaddress) | undefined*

___

###  getAddresses

▸ **getAddresses**(): *`Array<KeyringAddress>`*

*Defined in [Keyring.ts:130](url)*

**Returns:** *`Array<KeyringAddress>`*

___

###  getContract

▸ **getContract**(`address`: string | `Uint8Array`): *[KeyringAddress](../modules/_types_.md#keyringaddress) | undefined*

*Defined in [Keyring.ts:138](url)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string \| `Uint8Array` |

**Returns:** *[KeyringAddress](../modules/_types_.md#keyringaddress) | undefined*

___

###  getContracts

▸ **getContracts**(): *`Array<KeyringAddress>`*

*Defined in [Keyring.ts:142](url)*

**Returns:** *`Array<KeyringAddress>`*

___

###  getPair

▸ **getPair**(`address`: string | `Uint8Array`): *`KeyringPair`*

*Inherited from [Base](_base_.base.md).[getPair](_base_.base.md#getpair)*

*Defined in [Base.ts:69](url)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string \| `Uint8Array` |

**Returns:** *`KeyringPair`*

___

###  getPairs

▸ **getPairs**(): *`Array<KeyringPair>`*

*Inherited from [Base](_base_.base.md).[getPairs](_base_.base.md#getpairs)*

*Defined in [Base.ts:73](url)*

**Returns:** *`Array<KeyringPair>`*

___

###  isAvailable

▸ **isAvailable**(`_address`: `Uint8Array` | string): *boolean*

*Inherited from [Base](_base_.base.md).[isAvailable](_base_.base.md#isavailable)*

*Defined in [Base.ts:79](url)*

**Parameters:**

Name | Type |
------ | ------ |
`_address` | `Uint8Array` \| string |

**Returns:** *boolean*

___

###  isPassValid

▸ **isPassValid**(`password`: string): *boolean*

*Inherited from [Base](_base_.base.md).[isPassValid](_base_.base.md#ispassvalid)*

*Defined in [Base.ts:90](url)*

**Parameters:**

Name | Type |
------ | ------ |
`password` | string |

**Returns:** *boolean*

___

###  loadAll

▸ **loadAll**(`options`: [KeyringOptions](../modules/_types_.md#keyringoptions), `injected`: `Array<object>`): *void*

*Defined in [Keyring.ts:219](url)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [KeyringOptions](../modules/_types_.md#keyringoptions) | - |
`injected` | `Array<object>` |  [] |

**Returns:** *void*

___

###  restoreAccount

▸ **restoreAccount**(`json`: `KeyringPair$Json`, `password`: string): *`KeyringPair`*

*Defined in [Keyring.ts:247](url)*

**Parameters:**

Name | Type |
------ | ------ |
`json` | `KeyringPair$Json` |
`password` | string |

**Returns:** *`KeyringPair`*

___

###  saveAccount

▸ **saveAccount**(`pair`: `KeyringPair`, `password?`: undefined | string): *`KeyringPair$Json`*

*Defined in [Keyring.ts:267](url)*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | `KeyringPair` |
`password?` | undefined \| string |

**Returns:** *`KeyringPair$Json`*

___

###  saveAccountMeta

▸ **saveAccountMeta**(`pair`: `KeyringPair`, `meta`: `KeyringPair$Meta`): *void*

*Defined in [Keyring.ts:278](url)*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | `KeyringPair` |
`meta` | `KeyringPair$Meta` |

**Returns:** *void*

___

###  saveAddress

▸ **saveAddress**(`address`: string, `meta`: `KeyringPair$Meta`, `type`: [KeyringAddressType](../modules/_types_.md#keyringaddresstype)): *`KeyringPair$Json`*

*Defined in [Keyring.ts:289](url)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`address` | string | - |
`meta` | `KeyringPair$Meta` | - |
`type` | [KeyringAddressType](../modules/_types_.md#keyringaddresstype) | "address" |

**Returns:** *`KeyringPair$Json`*

___

###  saveContract

▸ **saveContract**(`address`: string, `meta`: `KeyringPair$Meta`): *`KeyringPair$Json`*

*Defined in [Keyring.ts:311](url)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |
`meta` | `KeyringPair$Meta` |

**Returns:** *`KeyringPair$Json`*

___

###  saveRecent

▸ **saveRecent**(`address`: string): *[SingleAddress](../modules/_observable_types_.md#singleaddress)*

*Defined in [Keyring.ts:315](url)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *[SingleAddress](../modules/_observable_types_.md#singleaddress)*

___

###  setAddressPrefix

▸ **setAddressPrefix**(`prefix`: number): *void*

*Inherited from [Base](_base_.base.md).[setAddressPrefix](_base_.base.md#setaddressprefix)*

*Defined in [Base.ts:94](url)*

**Parameters:**

Name | Type |
------ | ------ |
`prefix` | number |

**Returns:** *void*

___

###  setDevMode

▸ **setDevMode**(`isDevelopment`: boolean): *void*

*Inherited from [Base](_base_.base.md).[setDevMode](_base_.base.md#setdevmode)*

*Defined in [Base.ts:98](url)*

**Parameters:**

Name | Type |
------ | ------ |
`isDevelopment` | boolean |

**Returns:** *void*

___

## Object literals

###  stores

### ■ **stores**: *object*

*Defined in [Keyring.ts:24](url)*

###  account

▸ **account**(): *object*

*Defined in [Keyring.ts:27](url)*

**Returns:** *object*

###  address

▸ **address**(): *object*

*Defined in [Keyring.ts:25](url)*

**Returns:** *object*

###  contract

▸ **contract**(): *object*

*Defined in [Keyring.ts:26](url)*

**Returns:** *object*

___