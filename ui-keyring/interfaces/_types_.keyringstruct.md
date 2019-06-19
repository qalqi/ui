

# Hierarchy

**KeyringStruct**

# Implemented by

* [Keyring](../classes/_keyring_.keyring.md)

# Properties

<a id="accounts"></a>

##  accounts

**● accounts**: *[AddressSubject](../modules/_observable_types_.md#addresssubject)*

*Defined in [types.ts:62](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L62)*

___
<a id="addexternal"></a>

##  addExternal

**● addExternal**: *`function`*

*Defined in [types.ts:68](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L68)*

#### Type declaration
▸(publicKey: *`Uint8Array`*, meta?: *`KeyringPair$Meta`*): [CreateResult](../modules/_types_.md#createresult)

**Parameters:**

| Name | Type |
| ------ | ------ |
| publicKey | `Uint8Array` |
| `Optional` meta | `KeyringPair$Meta` |

**Returns:** [CreateResult](../modules/_types_.md#createresult)

___
<a id="addpair"></a>

##  addPair

**● addPair**: *`function`*

*Defined in [types.ts:69](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L69)*

#### Type declaration
▸(pair: *`KeyringPair`*, password: *`string`*): [CreateResult](../modules/_types_.md#createresult)

**Parameters:**

| Name | Type |
| ------ | ------ |
| pair | `KeyringPair` |
| password | `string` |

**Returns:** [CreateResult](../modules/_types_.md#createresult)

___
<a id="adduri"></a>

##  addUri

**● addUri**: *`function`*

*Defined in [types.ts:70](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L70)*

#### Type declaration
▸(suri: *`string`*, password?: *`undefined` \| `string`*, meta?: *`KeyringPair$Meta`*, type?: *`KeypairType`*): [CreateResult](../modules/_types_.md#createresult)

**Parameters:**

| Name | Type |
| ------ | ------ |
| suri | `string` |
| `Optional` password | `undefined` \| `string` |
| `Optional` meta | `KeyringPair$Meta` |
| `Optional` type | `KeypairType` |

**Returns:** [CreateResult](../modules/_types_.md#createresult)

___
<a id="addresses"></a>

##  addresses

**● addresses**: *[AddressSubject](../modules/_observable_types_.md#addresssubject)*

*Defined in [types.ts:63](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L63)*

___
<a id="backupaccount"></a>

##  backupAccount

**● backupAccount**: *`function`*

*Defined in [types.ts:71](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L71)*

#### Type declaration
▸(pair: *`KeyringPair`*, password: *`string`*): `KeyringPair$Json`

**Parameters:**

| Name | Type |
| ------ | ------ |
| pair | `KeyringPair` |
| password | `string` |

**Returns:** `KeyringPair$Json`

___
<a id="contracts"></a>

##  contracts

**● contracts**: *[AddressSubject](../modules/_observable_types_.md#addresssubject)*

*Defined in [types.ts:64](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L64)*

___
<a id="decodeaddress"></a>

##  decodeAddress

**● decodeAddress**: *`function`*

*Defined in [types.ts:73](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L73)*

#### Type declaration
▸(key: *`string` \| `Uint8Array`*): `Uint8Array`

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` \| `Uint8Array` |

**Returns:** `Uint8Array`

___
<a id="encodeaddress"></a>

##  encodeAddress

**● encodeAddress**: *`function`*

*Defined in [types.ts:74](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L74)*

#### Type declaration
▸(key: *`string` \| `Uint8Array`*): `string`

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` \| `Uint8Array` |

**Returns:** `string`

___
<a id="encryptaccount"></a>

##  encryptAccount

**● encryptAccount**: *`function`*

*Defined in [types.ts:75](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L75)*

#### Type declaration
▸(pair: *`KeyringPair`*, password: *`string`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| pair | `KeyringPair` |
| password | `string` |

**Returns:** `void`

___
<a id="forgetaccount"></a>

##  forgetAccount

**● forgetAccount**: *`function`*

*Defined in [types.ts:76](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L76)*

#### Type declaration
▸(address: *`string`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` |

**Returns:** `void`

___
<a id="forgetaddress"></a>

##  forgetAddress

**● forgetAddress**: *`function`*

*Defined in [types.ts:77](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L77)*

#### Type declaration
▸(address: *`string`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` |

**Returns:** `void`

___
<a id="forgetcontract"></a>

##  forgetContract

**● forgetContract**: *`function`*

*Defined in [types.ts:78](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L78)*

#### Type declaration
▸(address: *`string`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` |

**Returns:** `void`

___
<a id="genesishash"></a>

## `<Optional>` genesisHash

**● genesisHash**: *`undefined` \| `string`*

*Defined in [types.ts:66](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L66)*

___
<a id="getaccount"></a>

##  getAccount

**● getAccount**: *`function`*

*Defined in [types.ts:79](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L79)*

#### Type declaration
▸(address: *`string` \| `Uint8Array`*): [KeyringAddress](../modules/_types_.md#keyringaddress) \| `undefined`

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |

**Returns:** [KeyringAddress](../modules/_types_.md#keyringaddress) \| `undefined`

___
<a id="getaccounts"></a>

##  getAccounts

**● getAccounts**: *`function`*

*Defined in [types.ts:80](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L80)*

#### Type declaration
▸(): `Array`<[KeyringAddress](../modules/_types_.md#keyringaddress)>

**Returns:** `Array`<[KeyringAddress](../modules/_types_.md#keyringaddress)>

___
<a id="getaddress"></a>

##  getAddress

**● getAddress**: *`function`*

*Defined in [types.ts:81](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L81)*

#### Type declaration
▸(address: *`string` \| `Uint8Array`*, type: *[KeyringItemType](../modules/_types_.md#keyringitemtype) \| `null`*): [KeyringAddress](../modules/_types_.md#keyringaddress) \| `undefined`

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |
| type | [KeyringItemType](../modules/_types_.md#keyringitemtype) \| `null` |

**Returns:** [KeyringAddress](../modules/_types_.md#keyringaddress) \| `undefined`

___
<a id="getaddresses"></a>

##  getAddresses

**● getAddresses**: *`function`*

*Defined in [types.ts:82](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L82)*

#### Type declaration
▸(): `Array`<[KeyringAddress](../modules/_types_.md#keyringaddress)>

**Returns:** `Array`<[KeyringAddress](../modules/_types_.md#keyringaddress)>

___
<a id="getcontract"></a>

##  getContract

**● getContract**: *`function`*

*Defined in [types.ts:83](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L83)*

#### Type declaration
▸(address: *`string` \| `Uint8Array`*): [KeyringAddress](../modules/_types_.md#keyringaddress) \| `undefined`

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |

**Returns:** [KeyringAddress](../modules/_types_.md#keyringaddress) \| `undefined`

___
<a id="getcontracts"></a>

##  getContracts

**● getContracts**: *`function`*

*Defined in [types.ts:84](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L84)*

#### Type declaration
▸(genesisHash?: *`undefined` \| `string`*): `Array`<[KeyringAddress](../modules/_types_.md#keyringaddress)>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` genesisHash | `undefined` \| `string` |

**Returns:** `Array`<[KeyringAddress](../modules/_types_.md#keyringaddress)>

___
<a id="getpair"></a>

##  getPair

**● getPair**: *`function`*

*Defined in [types.ts:85](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L85)*

#### Type declaration
▸(address: *`string` \| `Uint8Array`*): `KeyringPair`

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |

**Returns:** `KeyringPair`

___
<a id="getpairs"></a>

##  getPairs

**● getPairs**: *`function`*

*Defined in [types.ts:86](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L86)*

#### Type declaration
▸(): `Array`<`KeyringPair`>

**Returns:** `Array`<`KeyringPair`>

___
<a id="isavailable"></a>

##  isAvailable

**● isAvailable**: *`function`*

*Defined in [types.ts:87](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L87)*

#### Type declaration
▸(address: *`string` \| `Uint8Array`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |

**Returns:** `boolean`

___
<a id="ispassvalid"></a>

##  isPassValid

**● isPassValid**: *`function`*

*Defined in [types.ts:88](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L88)*

#### Type declaration
▸(password: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| password | `string` |

**Returns:** `boolean`

___
<a id="keyring"></a>

##  keyring

**● keyring**: *`BaseKeyringInstance` \| `undefined`*

*Defined in [types.ts:65](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L65)*

___
<a id="loadall"></a>

##  loadAll

**● loadAll**: *`function`*

*Defined in [types.ts:89](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L89)*

#### Type declaration
▸(options: *[KeyringOptions](../modules/_types_.md#keyringoptions)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [KeyringOptions](../modules/_types_.md#keyringoptions) |

**Returns:** `void`

___
<a id="restoreaccount"></a>

##  restoreAccount

**● restoreAccount**: *`function`*

*Defined in [types.ts:90](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L90)*

#### Type declaration
▸(json: *`KeyringPair$Json`*, password: *`string`*): `KeyringPair`

**Parameters:**

| Name | Type |
| ------ | ------ |
| json | `KeyringPair$Json` |
| password | `string` |

**Returns:** `KeyringPair`

___
<a id="saveaccount"></a>

##  saveAccount

**● saveAccount**: *`function`*

*Defined in [types.ts:91](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L91)*

#### Type declaration
▸(pair: *`KeyringPair`*, password?: *`undefined` \| `string`*): `KeyringPair$Json`

**Parameters:**

| Name | Type |
| ------ | ------ |
| pair | `KeyringPair` |
| `Optional` password | `undefined` \| `string` |

**Returns:** `KeyringPair$Json`

___
<a id="saveaccountmeta"></a>

##  saveAccountMeta

**● saveAccountMeta**: *`function`*

*Defined in [types.ts:92](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L92)*

#### Type declaration
▸(pair: *`KeyringPair`*, meta: *`KeyringPair$Meta`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| pair | `KeyringPair` |
| meta | `KeyringPair$Meta` |

**Returns:** `void`

___
<a id="saveaddress"></a>

##  saveAddress

**● saveAddress**: *`function`*

*Defined in [types.ts:93](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L93)*

#### Type declaration
▸(address: *`string`*, meta: *`KeyringPair$Meta`*): `KeyringPair$Json`

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` |
| meta | `KeyringPair$Meta` |

**Returns:** `KeyringPair$Json`

___
<a id="savecontract"></a>

##  saveContract

**● saveContract**: *`function`*

*Defined in [types.ts:94](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L94)*

#### Type declaration
▸(address: *`string`*, meta: *`KeyringPair$Meta`*): `KeyringPair$Json`

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` |
| meta | `KeyringPair$Meta` |

**Returns:** `KeyringPair$Json`

___
<a id="saverecent"></a>

##  saveRecent

**● saveRecent**: *`function`*

*Defined in [types.ts:95](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L95)*

#### Type declaration
▸(address: *`string`*): [SingleAddress](../modules/_observable_types_.md#singleaddress)

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` |

**Returns:** [SingleAddress](../modules/_observable_types_.md#singleaddress)

___
<a id="setdevmode"></a>

##  setDevMode

**● setDevMode**: *`function`*

*Defined in [types.ts:96](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L96)*

#### Type declaration
▸(isDevelopment: *`boolean`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| isDevelopment | `boolean` |

**Returns:** `void`

___

# Methods

<a id="createfromuri"></a>

##  createFromUri

▸ **createFromUri**(suri: *`string`*, meta?: *`KeyringPair$Meta`*, type?: *`KeypairType`*): `KeyringPair`

*Defined in [types.ts:72](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/types.ts#L72)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| suri | `string` |
| `Optional` meta | `KeyringPair$Meta` |
| `Optional` type | `KeypairType` |

**Returns:** `KeyringPair`

___

