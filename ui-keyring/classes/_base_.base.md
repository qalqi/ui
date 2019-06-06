

# Hierarchy

**Base**

↳  [Keyring](_keyring_.keyring.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Base**(): [Base](_base_.base.md)

*Defined in [Base.ts:27](https://github.com/polkadot-js/ui/blob/da84d5a/packages/ui-keyring/src/Base.ts#L27)*

**Returns:** [Base](_base_.base.md)

___

# Accessors

<a id="accounts"></a>

##  accounts

**get accounts**(): `object`

*Defined in [Base.ts:37](https://github.com/polkadot-js/ui/blob/da84d5a/packages/ui-keyring/src/Base.ts#L37)*

**Returns:** `object`

___
<a id="addresses"></a>

##  addresses

**get addresses**(): `object`

*Defined in [Base.ts:41](https://github.com/polkadot-js/ui/blob/da84d5a/packages/ui-keyring/src/Base.ts#L41)*

**Returns:** `object`

___
<a id="contracts"></a>

##  contracts

**get contracts**(): `object`

*Defined in [Base.ts:45](https://github.com/polkadot-js/ui/blob/da84d5a/packages/ui-keyring/src/Base.ts#L45)*

**Returns:** `object`

___
<a id="genesishash"></a>

##  genesisHash

**get genesisHash**(): `undefined` \| `string`

*Defined in [Base.ts:57](https://github.com/polkadot-js/ui/blob/da84d5a/packages/ui-keyring/src/Base.ts#L57)*

**Returns:** `undefined` \| `string`

___
<a id="keyring"></a>

##  keyring

**get keyring**(): `KeyringInstance`

*Defined in [Base.ts:49](https://github.com/polkadot-js/ui/blob/da84d5a/packages/ui-keyring/src/Base.ts#L49)*

**Returns:** `KeyringInstance`

___

# Methods

<a id="decodeaddress"></a>

##  decodeAddress

▸ **decodeAddress**(key: *`string` \| `Uint8Array`*, ignoreChecksum?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Defined in [Base.ts:61](https://github.com/polkadot-js/ui/blob/da84d5a/packages/ui-keyring/src/Base.ts#L61)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` \| `Uint8Array` |
| `Optional` ignoreChecksum | `undefined` \| `false` \| `true` |

**Returns:** `Uint8Array`

___
<a id="encodeaddress"></a>

##  encodeAddress

▸ **encodeAddress**(key: *`string` \| `Uint8Array`*): `string`

*Defined in [Base.ts:65](https://github.com/polkadot-js/ui/blob/da84d5a/packages/ui-keyring/src/Base.ts#L65)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` \| `Uint8Array` |

**Returns:** `string`

___
<a id="getpair"></a>

##  getPair

▸ **getPair**(address: *`string` \| `Uint8Array`*): `KeyringPair`

*Defined in [Base.ts:69](https://github.com/polkadot-js/ui/blob/da84d5a/packages/ui-keyring/src/Base.ts#L69)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |

**Returns:** `KeyringPair`

___
<a id="getpairs"></a>

##  getPairs

▸ **getPairs**(): `Array`<`KeyringPair`>

*Defined in [Base.ts:73](https://github.com/polkadot-js/ui/blob/da84d5a/packages/ui-keyring/src/Base.ts#L73)*

**Returns:** `Array`<`KeyringPair`>

___
<a id="isavailable"></a>

##  isAvailable

▸ **isAvailable**(_address: *`Uint8Array` \| `string`*): `boolean`

*Defined in [Base.ts:79](https://github.com/polkadot-js/ui/blob/da84d5a/packages/ui-keyring/src/Base.ts#L79)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| _address | `Uint8Array` \| `string` |

**Returns:** `boolean`

___
<a id="ispassvalid"></a>

##  isPassValid

▸ **isPassValid**(password: *`string`*): `boolean`

*Defined in [Base.ts:90](https://github.com/polkadot-js/ui/blob/da84d5a/packages/ui-keyring/src/Base.ts#L90)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| password | `string` |

**Returns:** `boolean`

___
<a id="setaddressprefix"></a>

##  setAddressPrefix

▸ **setAddressPrefix**(prefix: *`number`*): `void`

*Defined in [Base.ts:94](https://github.com/polkadot-js/ui/blob/da84d5a/packages/ui-keyring/src/Base.ts#L94)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| prefix | `number` |

**Returns:** `void`

___
<a id="setdevmode"></a>

##  setDevMode

▸ **setDevMode**(isDevelopment: *`boolean`*): `void`

*Defined in [Base.ts:98](https://github.com/polkadot-js/ui/blob/da84d5a/packages/ui-keyring/src/Base.ts#L98)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| isDevelopment | `boolean` |

**Returns:** `void`

___

