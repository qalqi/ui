

# Hierarchy

**Base**

↳  [Keyring](_keyring_.keyring.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Base**(): [Base](_base_.base.md)

*Defined in [Base.ts:24](https://github.com/polkadot-js/ui/blob/200d9be/packages/ui-keyring/src/Base.ts#L24)*

**Returns:** [Base](_base_.base.md)

___

# Accessors

<a id="accounts"></a>

##  accounts

**get accounts**(): `object`

*Defined in [Base.ts:33](https://github.com/polkadot-js/ui/blob/200d9be/packages/ui-keyring/src/Base.ts#L33)*

**Returns:** `object`

___
<a id="addresses"></a>

##  addresses

**get addresses**(): `object`

*Defined in [Base.ts:37](https://github.com/polkadot-js/ui/blob/200d9be/packages/ui-keyring/src/Base.ts#L37)*

**Returns:** `object`

___
<a id="keyring"></a>

##  keyring

**get keyring**(): `KeyringInstance`

*Defined in [Base.ts:41](https://github.com/polkadot-js/ui/blob/200d9be/packages/ui-keyring/src/Base.ts#L41)*

**Returns:** `KeyringInstance`

___

# Methods

<a id="decodeaddress"></a>

##  decodeAddress

▸ **decodeAddress**(key: *`string` \| `Uint8Array`*, ignoreChecksum?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Defined in [Base.ts:49](https://github.com/polkadot-js/ui/blob/200d9be/packages/ui-keyring/src/Base.ts#L49)*

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

*Defined in [Base.ts:53](https://github.com/polkadot-js/ui/blob/200d9be/packages/ui-keyring/src/Base.ts#L53)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` \| `Uint8Array` |

**Returns:** `string`

___
<a id="getpair"></a>

##  getPair

▸ **getPair**(address: *`string` \| `Uint8Array`*): `KeyringPair`

*Defined in [Base.ts:57](https://github.com/polkadot-js/ui/blob/200d9be/packages/ui-keyring/src/Base.ts#L57)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |

**Returns:** `KeyringPair`

___
<a id="getpairs"></a>

##  getPairs

▸ **getPairs**(): `Array`<`KeyringPair`>

*Defined in [Base.ts:61](https://github.com/polkadot-js/ui/blob/200d9be/packages/ui-keyring/src/Base.ts#L61)*

**Returns:** `Array`<`KeyringPair`>

___
<a id="isavailable"></a>

##  isAvailable

▸ **isAvailable**(_address: *`Uint8Array` \| `string`*): `boolean`

*Defined in [Base.ts:67](https://github.com/polkadot-js/ui/blob/200d9be/packages/ui-keyring/src/Base.ts#L67)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| _address | `Uint8Array` \| `string` |

**Returns:** `boolean`

___
<a id="ispassvalid"></a>

##  isPassValid

▸ **isPassValid**(password: *`string`*): `boolean`

*Defined in [Base.ts:77](https://github.com/polkadot-js/ui/blob/200d9be/packages/ui-keyring/src/Base.ts#L77)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| password | `string` |

**Returns:** `boolean`

___
<a id="setaddressprefix"></a>

##  setAddressPrefix

▸ **setAddressPrefix**(prefix: *`number`*): `void`

*Defined in [Base.ts:81](https://github.com/polkadot-js/ui/blob/200d9be/packages/ui-keyring/src/Base.ts#L81)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| prefix | `number` |

**Returns:** `void`

___
<a id="setdevmode"></a>

##  setDevMode

▸ **setDevMode**(isDevelopment: *`boolean`*): `void`

*Defined in [Base.ts:85](https://github.com/polkadot-js/ui/blob/200d9be/packages/ui-keyring/src/Base.ts#L85)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| isDevelopment | `boolean` |

**Returns:** `void`

___

