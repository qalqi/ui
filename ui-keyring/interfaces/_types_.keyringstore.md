> # Interface: KeyringStore

## Hierarchy

* **KeyringStore**

## Implemented by

* [BrowserStore](../classes/_stores_browser_.browserstore.md)
* [ExtensionStore](../classes/_stores_extension_.extensionstore.md)
* [FileStore](../classes/_stores_file_.filestore.md)

### Index

#### Properties

* [all](_types_.keyringstore.md#all)
* [get](_types_.keyringstore.md#get)
* [remove](_types_.keyringstore.md#remove)
* [set](_types_.keyringstore.md#set)

## Properties

###  all

● **all**: *function*

*Defined in [types.ts:16](url)*

#### Type declaration:

▸ (`cb`: function): *void*

**Parameters:**

■` cb`: *function*

▸ (`key`: string, `value`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | any |

___

###  get

● **get**: *function*

*Defined in [types.ts:17](url)*

#### Type declaration:

▸ (`key`: string, `cb`: function): *void*

**Parameters:**

■` key`: *string*

■` cb`: *function*

▸ (`value`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

___

###  remove

● **remove**: *function*

*Defined in [types.ts:18](url)*

#### Type declaration:

▸ (`key`: string, `cb?`: undefined | function): *void*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`cb?` | undefined \| function |

___

###  set

● **set**: *function*

*Defined in [types.ts:19](url)*

#### Type declaration:

▸ (`key`: string, `value`: any, `cb?`: undefined | function): *void*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | any |
`cb?` | undefined \| function |

___