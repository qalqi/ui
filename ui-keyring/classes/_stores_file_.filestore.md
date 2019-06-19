

# Hierarchy

**FileStore**

# Implements

* [KeyringStore](../interfaces/_types_.keyringstore.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new FileStore**(path: *`string`*): [FileStore](_stores_file_.filestore.md)

*Defined in [stores/File.ts:13](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/stores/File.ts#L13)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` |

**Returns:** [FileStore](_stores_file_.filestore.md)

___

# Methods

<a id="all"></a>

##  all

▸ **all**(cb: *`function`*): `void`

*Defined in [stores/File.ts:23](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/stores/File.ts#L23)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| cb | `function` |

**Returns:** `void`

___
<a id="get"></a>

##  get

▸ **get**(key: *`string`*, cb: *`function`*): `void`

*Defined in [stores/File.ts:30](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/stores/File.ts#L30)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| cb | `function` |

**Returns:** `void`

___
<a id="remove"></a>

##  remove

▸ **remove**(key: *`string`*, cb?: *`undefined` \| `function`*): `void`

*Defined in [stores/File.ts:34](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/stores/File.ts#L34)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| `Optional` cb | `undefined` \| `function` |

**Returns:** `void`

___
<a id="set"></a>

##  set

▸ **set**(key: *`string`*, value: *`any`*, cb?: *`undefined` \| `function`*): `void`

*Defined in [stores/File.ts:39](https://github.com/polkadot-js/ui/blob/2a30f2f/packages/ui-keyring/src/stores/File.ts#L39)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| value | `any` |
| `Optional` cb | `undefined` \| `function` |

**Returns:** `void`

___

