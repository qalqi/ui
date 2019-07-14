> # Class: FileStore

## Hierarchy

* **FileStore**

## Implements

* [KeyringStore](../interfaces/_types_.keyringstore.md)

### Index

#### Constructors

* [constructor](_stores_file_.filestore.md#constructor)

#### Methods

* [all](_stores_file_.filestore.md#all)
* [get](_stores_file_.filestore.md#get)
* [remove](_stores_file_.filestore.md#remove)
* [set](_stores_file_.filestore.md#set)

## Constructors

###  constructor

\+ **new FileStore**(`path`: string): *[FileStore](_stores_file_.filestore.md)*

*Defined in [stores/File.ts:13](https://github.com/polkadot-js/ui/blob/038774d/packages/ui-keyring/src/stores/File.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *[FileStore](_stores_file_.filestore.md)*

## Methods

###  all

▸ **all**(`cb`: function): *void*

*Defined in [stores/File.ts:23](https://github.com/polkadot-js/ui/blob/038774d/packages/ui-keyring/src/stores/File.ts#L23)*

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

*Defined in [stores/File.ts:32](https://github.com/polkadot-js/ui/blob/038774d/packages/ui-keyring/src/stores/File.ts#L32)*

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

*Defined in [stores/File.ts:36](https://github.com/polkadot-js/ui/blob/038774d/packages/ui-keyring/src/stores/File.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`cb?` | undefined \| function |

**Returns:** *void*

___

###  set

▸ **set**(`key`: string, `value`: [KeyringJson](../interfaces/_types_.keyringjson.md), `cb?`: undefined | function): *void*

*Defined in [stores/File.ts:41](https://github.com/polkadot-js/ui/blob/038774d/packages/ui-keyring/src/stores/File.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | [KeyringJson](../interfaces/_types_.keyringjson.md) |
`cb?` | undefined \| function |

**Returns:** *void*