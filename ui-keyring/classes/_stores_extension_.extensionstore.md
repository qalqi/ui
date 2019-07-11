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

*Defined in [stores/Extension.ts:18](https://github.com/polkadot-js/ui/blob/5da5645/packages/ui-keyring/src/stores/Extension.ts#L18)*

**Parameters:**

▪ **cb**: *function*

▸ (`key`: string, `value`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | any |

**Returns:** *void*

___

###  get

▸ **get**(`key`: string, `cb`: function): *void*

*Defined in [stores/Extension.ts:28](https://github.com/polkadot-js/ui/blob/5da5645/packages/ui-keyring/src/stores/Extension.ts#L28)*

**Parameters:**

▪ **key**: *string*

▪ **cb**: *function*

▸ (`value`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *void*

___

###  remove

▸ **remove**(`key`: string, `cb?`: undefined | function): *void*

*Defined in [stores/Extension.ts:36](https://github.com/polkadot-js/ui/blob/5da5645/packages/ui-keyring/src/stores/Extension.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`cb?` | undefined \| function |

**Returns:** *void*

___

###  set

▸ **set**(`key`: string, `value`: any, `cb?`: undefined | function): *void*

*Defined in [stores/Extension.ts:44](https://github.com/polkadot-js/ui/blob/5da5645/packages/ui-keyring/src/stores/Extension.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | any |
`cb?` | undefined \| function |

**Returns:** *void*