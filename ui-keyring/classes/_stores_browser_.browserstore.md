> # Class: BrowserStore

## Hierarchy

* **BrowserStore**

## Implements

* [KeyringStore](../interfaces/_types_.keyringstore.md)

### Index

#### Methods

* [all](_stores_browser_.browserstore.md#all)
* [get](_stores_browser_.browserstore.md#get)
* [remove](_stores_browser_.browserstore.md#remove)
* [set](_stores_browser_.browserstore.md#set)

## Methods

###  all

▸ **all**(`cb`: function): *void*

*Defined in [stores/Browser.ts:10](https://github.com/polkadot-js/ui/blob/038774d/packages/ui-keyring/src/stores/Browser.ts#L10)*

**Parameters:**

▪ **cb**: *function*

▸ (`key`: string, `value`: [KeyringJson](../interfaces/_types_.keyringjson.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | [KeyringJson](../interfaces/_types_.keyringjson.md) |

**Returns:** *void*

___

###  get

▸ **get**(`key`: string, `cb`: function): *void*

*Defined in [stores/Browser.ts:16](https://github.com/polkadot-js/ui/blob/038774d/packages/ui-keyring/src/stores/Browser.ts#L16)*

**Parameters:**

▪ **key**: *string*

▪ **cb**: *function*

▸ (`value`: [KeyringJson](../interfaces/_types_.keyringjson.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [KeyringJson](../interfaces/_types_.keyringjson.md) |

**Returns:** *void*

___

###  remove

▸ **remove**(`key`: string, `cb?`: undefined | function): *void*

*Defined in [stores/Browser.ts:20](https://github.com/polkadot-js/ui/blob/038774d/packages/ui-keyring/src/stores/Browser.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`cb?` | undefined \| function |

**Returns:** *void*

___

###  set

▸ **set**(`key`: string, `value`: [KeyringJson](../interfaces/_types_.keyringjson.md), `cb?`: undefined | function): *void*

*Defined in [stores/Browser.ts:25](https://github.com/polkadot-js/ui/blob/038774d/packages/ui-keyring/src/stores/Browser.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | [KeyringJson](../interfaces/_types_.keyringjson.md) |
`cb?` | undefined \| function |

**Returns:** *void*