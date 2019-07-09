> # Interface: KeyringStruct

## Hierarchy

* **KeyringStruct**

## Implemented by

* [Keyring](../classes/_keyring_.keyring.md)

### Index

#### Properties

* [accounts](_types_.keyringstruct.md#accounts)
* [addExternal](_types_.keyringstruct.md#addexternal)
* [addPair](_types_.keyringstruct.md#addpair)
* [addUri](_types_.keyringstruct.md#adduri)
* [addresses](_types_.keyringstruct.md#addresses)
* [backupAccount](_types_.keyringstruct.md#backupaccount)
* [contracts](_types_.keyringstruct.md#contracts)
* [decodeAddress](_types_.keyringstruct.md#decodeaddress)
* [encodeAddress](_types_.keyringstruct.md#encodeaddress)
* [encryptAccount](_types_.keyringstruct.md#encryptaccount)
* [forgetAccount](_types_.keyringstruct.md#forgetaccount)
* [forgetAddress](_types_.keyringstruct.md#forgetaddress)
* [forgetContract](_types_.keyringstruct.md#forgetcontract)
* [genesisHash](_types_.keyringstruct.md#optional-genesishash)
* [getAccount](_types_.keyringstruct.md#getaccount)
* [getAccounts](_types_.keyringstruct.md#getaccounts)
* [getAddress](_types_.keyringstruct.md#getaddress)
* [getAddresses](_types_.keyringstruct.md#getaddresses)
* [getContract](_types_.keyringstruct.md#getcontract)
* [getContracts](_types_.keyringstruct.md#getcontracts)
* [getPair](_types_.keyringstruct.md#getpair)
* [getPairs](_types_.keyringstruct.md#getpairs)
* [isAvailable](_types_.keyringstruct.md#isavailable)
* [isPassValid](_types_.keyringstruct.md#ispassvalid)
* [keyring](_types_.keyringstruct.md#keyring)
* [loadAll](_types_.keyringstruct.md#loadall)
* [restoreAccount](_types_.keyringstruct.md#restoreaccount)
* [saveAccount](_types_.keyringstruct.md#saveaccount)
* [saveAccountMeta](_types_.keyringstruct.md#saveaccountmeta)
* [saveAddress](_types_.keyringstruct.md#saveaddress)
* [saveContract](_types_.keyringstruct.md#savecontract)
* [saveRecent](_types_.keyringstruct.md#saverecent)
* [setDevMode](_types_.keyringstruct.md#setdevmode)

#### Methods

* [createFromUri](_types_.keyringstruct.md#createfromuri)

## Properties

###  accounts

• **accounts**: *[AddressSubject](../modules/_observable_types_.md#addresssubject)*

*Defined in [types.ts:62](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L62)*

___

###  addExternal

• **addExternal**: *function*

*Defined in [types.ts:68](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L68)*

#### Type declaration:

▸ (`publicKey`: `Uint8Array`, `meta?`: `KeyringPair$Meta`): *[CreateResult](../modules/_types_.md#createresult)*

**Parameters:**

Name | Type |
------ | ------ |
`publicKey` | `Uint8Array` |
`meta?` | `KeyringPair$Meta` |

___

###  addPair

• **addPair**: *function*

*Defined in [types.ts:69](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L69)*

#### Type declaration:

▸ (`pair`: `KeyringPair`, `password`: string): *[CreateResult](../modules/_types_.md#createresult)*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | `KeyringPair` |
`password` | string |

___

###  addUri

• **addUri**: *function*

*Defined in [types.ts:70](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L70)*

#### Type declaration:

▸ (`suri`: string, `password?`: undefined | string, `meta?`: `KeyringPair$Meta`, `type?`: `KeypairType`): *[CreateResult](../modules/_types_.md#createresult)*

**Parameters:**

Name | Type |
------ | ------ |
`suri` | string |
`password?` | undefined \| string |
`meta?` | `KeyringPair$Meta` |
`type?` | `KeypairType` |

___

###  addresses

• **addresses**: *[AddressSubject](../modules/_observable_types_.md#addresssubject)*

*Defined in [types.ts:63](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L63)*

___

###  backupAccount

• **backupAccount**: *function*

*Defined in [types.ts:71](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L71)*

#### Type declaration:

▸ (`pair`: `KeyringPair`, `password`: string): *`KeyringPair$Json`*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | `KeyringPair` |
`password` | string |

___

###  contracts

• **contracts**: *[AddressSubject](../modules/_observable_types_.md#addresssubject)*

*Defined in [types.ts:64](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L64)*

___

###  decodeAddress

• **decodeAddress**: *function*

*Defined in [types.ts:73](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L73)*

#### Type declaration:

▸ (`key`: string | `Uint8Array`): *`Uint8Array`*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string \| `Uint8Array` |

___

###  encodeAddress

• **encodeAddress**: *function*

*Defined in [types.ts:74](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L74)*

#### Type declaration:

▸ (`key`: string | `Uint8Array`): *string*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string \| `Uint8Array` |

___

###  encryptAccount

• **encryptAccount**: *function*

*Defined in [types.ts:75](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L75)*

#### Type declaration:

▸ (`pair`: `KeyringPair`, `password`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | `KeyringPair` |
`password` | string |

___

###  forgetAccount

• **forgetAccount**: *function*

*Defined in [types.ts:76](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L76)*

#### Type declaration:

▸ (`address`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

___

###  forgetAddress

• **forgetAddress**: *function*

*Defined in [types.ts:77](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L77)*

#### Type declaration:

▸ (`address`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

___

###  forgetContract

• **forgetContract**: *function*

*Defined in [types.ts:78](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L78)*

#### Type declaration:

▸ (`address`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

___

### `Optional` genesisHash

• **genesisHash**? : *undefined | string*

*Defined in [types.ts:66](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L66)*

___

###  getAccount

• **getAccount**: *function*

*Defined in [types.ts:79](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L79)*

#### Type declaration:

▸ (`address`: string | `Uint8Array`): *[KeyringAddress](../modules/_types_.md#keyringaddress) | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string \| `Uint8Array` |

___

###  getAccounts

• **getAccounts**: *function*

*Defined in [types.ts:80](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L80)*

#### Type declaration:

▸ (): *`Array<KeyringAddress>`*

___

###  getAddress

• **getAddress**: *function*

*Defined in [types.ts:81](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L81)*

#### Type declaration:

▸ (`address`: string | `Uint8Array`, `type`: [KeyringItemType](../modules/_types_.md#keyringitemtype) | null): *[KeyringAddress](../modules/_types_.md#keyringaddress) | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string \| `Uint8Array` |
`type` | [KeyringItemType](../modules/_types_.md#keyringitemtype) \| null |

___

###  getAddresses

• **getAddresses**: *function*

*Defined in [types.ts:82](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L82)*

#### Type declaration:

▸ (): *`Array<KeyringAddress>`*

___

###  getContract

• **getContract**: *function*

*Defined in [types.ts:83](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L83)*

#### Type declaration:

▸ (`address`: string | `Uint8Array`): *[KeyringAddress](../modules/_types_.md#keyringaddress) | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string \| `Uint8Array` |

___

###  getContracts

• **getContracts**: *function*

*Defined in [types.ts:84](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L84)*

#### Type declaration:

▸ (`genesisHash?`: undefined | string): *`Array<KeyringAddress>`*

**Parameters:**

Name | Type |
------ | ------ |
`genesisHash?` | undefined \| string |

___

###  getPair

• **getPair**: *function*

*Defined in [types.ts:85](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L85)*

#### Type declaration:

▸ (`address`: string | `Uint8Array`): *`KeyringPair`*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string \| `Uint8Array` |

___

###  getPairs

• **getPairs**: *function*

*Defined in [types.ts:86](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L86)*

#### Type declaration:

▸ (): *`Array<KeyringPair>`*

___

###  isAvailable

• **isAvailable**: *function*

*Defined in [types.ts:87](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L87)*

#### Type declaration:

▸ (`address`: string | `Uint8Array`): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string \| `Uint8Array` |

___

###  isPassValid

• **isPassValid**: *function*

*Defined in [types.ts:88](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L88)*

#### Type declaration:

▸ (`password`: string): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`password` | string |

___

###  keyring

• **keyring**: *`BaseKeyringInstance` | undefined*

*Defined in [types.ts:65](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L65)*

___

###  loadAll

• **loadAll**: *function*

*Defined in [types.ts:89](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L89)*

#### Type declaration:

▸ (`options`: [KeyringOptions](../modules/_types_.md#keyringoptions)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [KeyringOptions](../modules/_types_.md#keyringoptions) |

___

###  restoreAccount

• **restoreAccount**: *function*

*Defined in [types.ts:90](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L90)*

#### Type declaration:

▸ (`json`: `KeyringPair$Json`, `password`: string): *`KeyringPair`*

**Parameters:**

Name | Type |
------ | ------ |
`json` | `KeyringPair$Json` |
`password` | string |

___

###  saveAccount

• **saveAccount**: *function*

*Defined in [types.ts:91](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L91)*

#### Type declaration:

▸ (`pair`: `KeyringPair`, `password?`: undefined | string): *`KeyringPair$Json`*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | `KeyringPair` |
`password?` | undefined \| string |

___

###  saveAccountMeta

• **saveAccountMeta**: *function*

*Defined in [types.ts:92](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L92)*

#### Type declaration:

▸ (`pair`: `KeyringPair`, `meta`: `KeyringPair$Meta`): *void*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | `KeyringPair` |
`meta` | `KeyringPair$Meta` |

___

###  saveAddress

• **saveAddress**: *function*

*Defined in [types.ts:93](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L93)*

#### Type declaration:

▸ (`address`: string, `meta`: `KeyringPair$Meta`): *`KeyringPair$Json`*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |
`meta` | `KeyringPair$Meta` |

___

###  saveContract

• **saveContract**: *function*

*Defined in [types.ts:94](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L94)*

#### Type declaration:

▸ (`address`: string, `meta`: `KeyringPair$Meta`): *`KeyringPair$Json`*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |
`meta` | `KeyringPair$Meta` |

___

###  saveRecent

• **saveRecent**: *function*

*Defined in [types.ts:95](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L95)*

#### Type declaration:

▸ (`address`: string): *[SingleAddress](../modules/_observable_types_.md#singleaddress)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

___

###  setDevMode

• **setDevMode**: *function*

*Defined in [types.ts:96](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L96)*

#### Type declaration:

▸ (`isDevelopment`: boolean): *void*

**Parameters:**

Name | Type |
------ | ------ |
`isDevelopment` | boolean |

## Methods

###  createFromUri

▸ **createFromUri**(`suri`: string, `meta?`: `KeyringPair$Meta`, `type?`: `KeypairType`): *`KeyringPair`*

*Defined in [types.ts:72](https://github.com/polkadot-js/ui/blob/fa0eba5/packages/ui-keyring/src/types.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`suri` | string |
`meta?` | `KeyringPair$Meta` |
`type?` | `KeypairType` |

**Returns:** *`KeyringPair`*