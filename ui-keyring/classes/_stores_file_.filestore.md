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

*Defined in [stores/File.ts:13](url)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *[FileStore](_stores_file_.filestore.md)*

___

## Methods

###  all

▸ **all**(`cb`: function): *void*

*Defined in [stores/File.ts:23](url)*

**Parameters:**

■` cb`: *function*

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

*Defined in [stores/File.ts:30](url)*

**Parameters:**

■` key`: *string*

■` cb`: *function*

▸ (`value`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *void*

___

###  remove

▸ **remove**(`key`: string, `cb?`: undefined | function): *void*

*Defined in [stores/File.ts:34](url)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`cb?` | undefined \| function |

**Returns:** *void*

___

###  set

▸ **set**(`key`: string, `value`: any, `cb?`: undefined | function): *void*

*Defined in [stores/File.ts:39](url)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | any |
`cb?` | undefined \| function |

**Returns:** *void*

___