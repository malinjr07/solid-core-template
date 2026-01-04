[](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#class-fieldapitparentdata-tname-tdata-tonmount-tonchange-tonchangeasync-tonblur-tonblurasync-tonsubmit-tonsubmitasync-tondynamic-tondynamicasync-tformonmount-tformonchange-tformonchangeasync-tformonblur-tformonblurasync-tformonsubmit-tformonsubmitasync-tformondynamic-tformondynamicasync-tformonserver-tparentsubmitmeta)

Defined in: [packages/form-core/src/FieldApi.ts:979](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L979)

A class representing the API for managing a form field.

Normally, you will not need to create a new FieldApi instance directly. Instead, you will use a framework hook/function like useField or createField to create a new instance for you that uses your framework's reactivity model. However, if you need to create a new instance manually, you can do so by calling the new FieldApi constructor.

[

## Type Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#type-parameters)[

### TParentData

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#tparentdata)

TParentData

[

### TName

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#tname)

TName _extends_ [DeepKeys](https://tanstack.com/form/latest/docs/reference/type-aliases/DeepKeys)<TParentData\>

[

### TData

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#tdata)

TData _extends_ [DeepValue](https://tanstack.com/form/latest/docs/reference/type-aliases/DeepValue)<TParentData, TName\>

[

### TOnMount

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#tonmount)

TOnMount _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnChange

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#tonchange)

TOnChange _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnChangeAsync

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#tonchangeasync)

TOnChangeAsync _extends_ undefined | FieldAsyncValidateOrFn<TParentData, TName, TData\>

[

### TOnBlur

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#tonblur)

TOnBlur _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnBlurAsync

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#tonblurasync)

TOnBlurAsync _extends_ undefined | FieldAsyncValidateOrFn<TParentData, TName, TData\>

[

### TOnSubmit

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#tonsubmit)

TOnSubmit _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnSubmitAsync

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#tonsubmitasync)

TOnSubmitAsync _extends_ undefined | FieldAsyncValidateOrFn<TParentData, TName, TData\>

[

### TOnDynamic

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#tondynamic)

TOnDynamic _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnDynamicAsync

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#tondynamicasync)

TOnDynamicAsync _extends_ undefined | FieldAsyncValidateOrFn<TParentData, TName, TData\>

[

### TFormOnMount

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#tformonmount)

TFormOnMount _extends_ undefined | FormValidateOrFn<TParentData\>

[

### TFormOnChange

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#tformonchange)

TFormOnChange _extends_ undefined | FormValidateOrFn<TParentData\>

[

### TFormOnChangeAsync

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#tformonchangeasync)

TFormOnChangeAsync _extends_ undefined | FormAsyncValidateOrFn<TParentData\>

[

### TFormOnBlur

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#tformonblur)

TFormOnBlur _extends_ undefined | FormValidateOrFn<TParentData\>

[

### TFormOnBlurAsync

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#tformonblurasync)

TFormOnBlurAsync _extends_ undefined | FormAsyncValidateOrFn<TParentData\>

[

### TFormOnSubmit

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#tformonsubmit)

TFormOnSubmit _extends_ undefined | FormValidateOrFn<TParentData\>

[

### TFormOnSubmitAsync

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#tformonsubmitasync)

TFormOnSubmitAsync _extends_ undefined | FormAsyncValidateOrFn<TParentData\>

[

### TFormOnDynamic

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#tformondynamic)

TFormOnDynamic _extends_ undefined | FormValidateOrFn<TParentData\>

[

### TFormOnDynamicAsync

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#tformondynamicasync)

TFormOnDynamicAsync _extends_ undefined | FormAsyncValidateOrFn<TParentData\>

[

### TFormOnServer

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#tformonserver)

TFormOnServer _extends_ undefined | FormAsyncValidateOrFn<TParentData\>

[

### TParentSubmitMeta

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#tparentsubmitmeta)

TParentSubmitMeta

[

## Constructors

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#constructors)[

### Constructor

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#constructor)

```swift
new FieldApi<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TParentSubmitMeta>(opts): FieldApi<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TParentSubmitMeta>;
```

Defined in: [packages/form-core/src/FieldApi.ts:1133](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L1133)

Initializes a new FieldApi instance.

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#parameters)[

##### opts

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#opts)

[FieldApiOptions](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions)<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TParentSubmitMeta\>

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#returns)

FieldApi<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TParentSubmitMeta\>

[

## Properties

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#properties)[

### form

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#form)

```css
form: FormApi<TParentData, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TParentSubmitMeta>;
```

Defined in: [packages/form-core/src/FieldApi.ts:1033](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L1033)

A reference to the form API instance.

___

[

### name

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#name)

Defined in: [packages/form-core/src/FieldApi.ts:1061](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L1061)

The field name.

___

[

### options

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#options)

```css
options: FieldApiOptions<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TParentSubmitMeta>;
```

Defined in: [packages/form-core/src/FieldApi.ts:1065](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L1065)

The field options.

___

[

### store

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#store)

```swift
store: Derived<FieldState<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync>>;
```

Defined in: [packages/form-core/src/FieldApi.ts:1093](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L1093)

The field state store.

___

[

### timeoutIds

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#timeoutids)

Defined in: [packages/form-core/src/FieldApi.ts:1124](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L1124)

[

#### formListeners

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#formlisteners)

```javascript
formListeners: Record<ListenerCause, ReturnType<typeof setTimeout> | null>;
```

[

#### listeners

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#listeners)

```javascript
listeners: Record<ListenerCause, ReturnType<typeof setTimeout> | null>;
```

[

#### validations

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#validations)

```javascript
validations: Record<ValidationCause, ReturnType<typeof setTimeout> | null>;
```

[

## Accessors

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#accessors)[

### state

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#state)[

#### Get Signature

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#get-signature)

```csharp
get state(): FieldState<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync>;
```

Defined in: [packages/form-core/src/FieldApi.ts:1121](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L1121)

The current field state.

[

##### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#returns-1)

[FieldState](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldState)<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync\>

[

## Methods

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#methods)[

### clearValues()

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#clearvalues)

```scss
clearValues(options?): void;
```

Defined in: [packages/form-core/src/FieldApi.ts:1524](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L1524)

Clear all values from the array.

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#parameters-1)[

##### options?

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#options-1)

UpdateMetaOptions

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#returns-2)

void

___

[

### getInfo()

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#getinfo)

```scss
getInfo(): FieldInfo<TParentData>;
```

Defined in: [packages/form-core/src/FieldApi.ts:1410](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L1410)

Gets the field information object.

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#returns-3)

[FieldInfo](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldInfo)<TParentData\>

___

[

### getMeta()

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#getmeta)

```scss
getMeta(): FieldMeta<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync>;
```

Defined in: [packages/form-core/src/FieldApi.ts:1374](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L1374)

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#returns-4)

[FieldMeta](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldMeta)<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync\>

___

[

### ~getValue()~

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#getvalue)

Defined in: [packages/form-core/src/FieldApi.ts:1351](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L1351)

Gets the current field value.

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#returns-5)

TData

[

#### Deprecated

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#deprecated)

Use field.state.value instead.

___

[

### handleBlur()

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#handleblur)

Defined in: [packages/form-core/src/FieldApi.ts:1912](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L1912)

Handles the blur event.

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#returns-6)

void

___

[

### handleChange()

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#handlechange)

```scss
handleChange(updater): void;
```

Defined in: [packages/form-core/src/FieldApi.ts:1905](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L1905)

Handles the change event.

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#parameters-2)[

##### updater

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#updater)

[Updater](https://tanstack.com/form/latest/docs/reference/type-aliases/Updater)<TData\>

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#returns-7)

void

___

[

### insertValue()

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#insertvalue)

```scss
insertValue(
   index, 
   value, 
   options?): void;
```

Defined in: [packages/form-core/src/FieldApi.ts:1433](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L1433)

Inserts a value at the specified index, shifting the subsequent values to the right.

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#parameters-3)[

##### index

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#index)

number

[

##### value

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#value)

TData _extends_ any\[\] ? TData<TData\>\[number\] : never

[

##### options?

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#options-2)

UpdateMetaOptions

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#returns-8)

void

___

[

### mount()

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#mount)

Defined in: [packages/form-core/src/FieldApi.ts:1247](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L1247)

Mounts the field instance to the form.

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#returns-9)[

##### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#returns-10)

void

___

[

### moveValue()

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#movevalue)

```scss
moveValue(
   aIndex, 
   bIndex, 
   options?): void;
```

Defined in: [packages/form-core/src/FieldApi.ts:1508](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L1508)

Moves the value at the first specified index to the second specified index.

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#parameters-4)[

##### aIndex

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#aindex)

number

[

##### bIndex

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#bindex)

number

[

##### options?

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#options-3)

UpdateMetaOptions

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#returns-11)

void

___

[

### parseValueWithSchema()

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#parsevaluewithschema)

```scss
parseValueWithSchema(schema): 
  | StandardSchemaV1Issue[]
  | undefined;
```

Defined in: [packages/form-core/src/FieldApi.ts:1955](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L1955)

Parses the field's value with the given schema and returns issues (if any). This method does NOT set any internal errors.

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#parameters-5)[

##### schema

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#schema)

[StandardSchemaV1](https://tanstack.com/form/latest/docs/reference/type-aliases/StandardSchemaV1)<TData, unknown\>

The standard schema to parse this field's value with.

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#returns-12)

| [StandardSchemaV1Issue](https://tanstack.com/form/latest/docs/reference/interfaces/StandardSchemaV1Issue)\[\] | undefined

___

[

### parseValueWithSchemaAsync()

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#parsevaluewithschemaasync)

```javascript
parseValueWithSchemaAsync(schema): Promise<
  | StandardSchemaV1Issue[]
| undefined>;
```

Defined in: [packages/form-core/src/FieldApi.ts:1967](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L1967)

Parses the field's value with the given schema and returns issues (if any). This method does NOT set any internal errors.

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#parameters-6)[

##### schema

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#schema-1)

[StandardSchemaV1](https://tanstack.com/form/latest/docs/reference/type-aliases/StandardSchemaV1)<TData, unknown\>

The standard schema to parse this field's value with.

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#returns-13)

Promise< | [StandardSchemaV1Issue](https://tanstack.com/form/latest/docs/reference/interfaces/StandardSchemaV1Issue)\[\] | undefined\>

___

[

### pushValue()

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#pushvalue)

```scss
pushValue(value, options?): void;
```

Defined in: [packages/form-core/src/FieldApi.ts:1415](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L1415)

Pushes a new value to the field.

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#parameters-7)[

##### value

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#value-1)

TData _extends_ any\[\] ? TData<TData\>\[number\] : never

[

##### options?

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#options-4)

UpdateMetaOptions

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#returns-14)

void

___

[

### removeValue()

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#removevalue)

```scss
removeValue(index, options?): void;
```

Defined in: [packages/form-core/src/FieldApi.ts:1473](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L1473)

Removes a value at the specified index.

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#parameters-8)[

##### index

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#index-1)

number

[

##### options?

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#options-5)

UpdateMetaOptions

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#returns-15)

void

___

[

### replaceValue()

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#replacevalue)

```scss
replaceValue(
   index, 
   value, 
   options?): void;
```

Defined in: [packages/form-core/src/FieldApi.ts:1453](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L1453)

Replaces a value at the specified index.

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#parameters-9)[

##### index

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#index-2)

number

[

##### value

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#value-2)

TData _extends_ any\[\] ? TData<TData\>\[number\] : never

[

##### options?

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#options-6)

UpdateMetaOptions

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#returns-16)

void

___

[

### setErrorMap()

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#seterrormap)

```scss
setErrorMap(errorMap): void;
```

Defined in: [packages/form-core/src/FieldApi.ts:1928](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L1928)

Updates the field's errorMap

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#parameters-10)[

##### errorMap

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#errormap)

ValidationErrorMap<[UnwrapFieldValidateOrFn](https://tanstack.com/form/latest/docs/reference/type-aliases/UnwrapFieldValidateOrFn)<TName, TOnMount, TFormOnMount\>, [UnwrapFieldValidateOrFn](https://tanstack.com/form/latest/docs/reference/type-aliases/UnwrapFieldValidateOrFn)<TName, TOnChange, TFormOnChange\>, [UnwrapFieldAsyncValidateOrFn](https://tanstack.com/form/latest/docs/reference/type-aliases/UnwrapFieldAsyncValidateOrFn)<TName, TOnChangeAsync, TFormOnChangeAsync\>, [UnwrapFieldValidateOrFn](https://tanstack.com/form/latest/docs/reference/type-aliases/UnwrapFieldValidateOrFn)<TName, TOnBlur, TFormOnBlur\>, [UnwrapFieldAsyncValidateOrFn](https://tanstack.com/form/latest/docs/reference/type-aliases/UnwrapFieldAsyncValidateOrFn)<TName, TOnBlurAsync, TFormOnBlurAsync\>, [UnwrapFieldValidateOrFn](https://tanstack.com/form/latest/docs/reference/type-aliases/UnwrapFieldValidateOrFn)<TName, TOnSubmit, TFormOnSubmit\>, [UnwrapFieldAsyncValidateOrFn](https://tanstack.com/form/latest/docs/reference/type-aliases/UnwrapFieldAsyncValidateOrFn)<TName, TOnSubmitAsync, TFormOnSubmitAsync\>, [UnwrapFieldValidateOrFn](https://tanstack.com/form/latest/docs/reference/type-aliases/UnwrapFieldValidateOrFn)<TName, TOnDynamic, TFormOnDynamic\>, [UnwrapFieldAsyncValidateOrFn](https://tanstack.com/form/latest/docs/reference/type-aliases/UnwrapFieldAsyncValidateOrFn)<TName, TOnDynamicAsync, TFormOnDynamicAsync\>>

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#returns-17)

void

___

[

### setMeta()

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#setmeta)

Defined in: [packages/form-core/src/FieldApi.ts:1379](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L1379)

Sets the field metadata.

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#parameters-11)[

##### updater

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#updater-1)

[Updater](https://tanstack.com/form/latest/docs/reference/type-aliases/Updater)<[FieldMetaBase](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldMetaBase)<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync\>>

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#returns-18)

void

___

[

### setValue()

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#setvalue)

```scss
setValue(updater, options?): void;
```

Defined in: [packages/form-core/src/FieldApi.ts:1358](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L1358)

Sets the field value and run the change validator.

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#parameters-12)[

##### updater

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#updater-2)

[Updater](https://tanstack.com/form/latest/docs/reference/type-aliases/Updater)<TData\>

[

##### options?

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#options-7)

UpdateMetaOptions

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#returns-19)

void

___

[

### swapValues()

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#swapvalues)

```scss
swapValues(
   aIndex, 
   bIndex, 
   options?): void;
```

Defined in: [packages/form-core/src/FieldApi.ts:1488](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L1488)

Swaps the values at the specified indices.

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#parameters-13)[

##### aIndex

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#aindex-1)

number

[

##### bIndex

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#bindex-1)

number

[

##### options?

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#options-8)

UpdateMetaOptions

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#returns-20)

void

___

[

### update()

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#update)

Defined in: [packages/form-core/src/FieldApi.ts:1300](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L1300)

Updates the field instance with new options.

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#parameters-14)[

##### opts

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#opts-1)

[FieldApiOptions](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions)<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TParentSubmitMeta\>

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#returns-21)

void

___

[

### validate()

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#validate)

```typescript
validate(cause, opts?): unknown[] | Promise<unknown[]>;
```

Defined in: [packages/form-core/src/FieldApi.ts:1872](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L1872)

Validates the field value.

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#parameters-15)[

##### cause

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#cause)

ValidationCause

[

##### opts?

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#opts-2)[

###### skipFormValidation?

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#skipformvalidation)

boolean

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FieldApi#returns-22)

unknown\[\] | Promise<unknown\[\]>