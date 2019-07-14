> # Class: ExtensionStore

## Hierarchy

* **ExtensionStore**

## Implements

* [KeyringStore](../interfaces/_types_.keyringstore.md)

### Index

#### Methods

* [all](_stores_extension_.extensionstore.md#all)
* [get](_stores_extension_.extensionstore.md#get)
* [remove](_stores_extension_.extensionstore.md#remove)
* [set](_stores_extension_.extensionstore.md#set)

## Methods

###  all

▸ **all**(`cb`: function): *void*

*Defined in [stores/Extension.ts:21](https://github.com/polkadot-js/ui/blob/038774d/packages/ui-keyring/src/stores/Extension.ts#L21)*

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

*Defined in [stores/Extension.ts:32](https://github.com/polkadot-js/ui/blob/038774d/packages/ui-keyring/src/stores/Extension.ts#L32)*

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

*Defined in [stores/Extension.ts:40](https://github.com/polkadot-js/ui/blob/038774d/packages/ui-keyring/src/stores/Extension.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`cb?` | undefined \| function |

**Returns:** *void*

___

###  set

▸ **set**(`key`: string, `value`: [KeyringJson](../interfaces/_types_.keyringjson.md), `cb?`: undefined | function): *void*

*Defined in [stores/Extension.ts:48](https://github.com/polkadot-js/ui/blob/038774d/packages/ui-keyring/src/stores/Extension.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | [KeyringJson](../interfaces/_types_.keyringjson.md) |
`cb?` | undefined \| function |

**Returns:** *void*