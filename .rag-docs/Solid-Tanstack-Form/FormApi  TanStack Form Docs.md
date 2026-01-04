[](https://tanstack.com/form/latest/docs/reference/classes/FormApi#class-formapitformdata-tonmount-tonchange-tonchangeasync-tonblur-tonblurasync-tonsubmit-tonsubmitasync-tondynamic-tondynamicasync-tonserver-tsubmitmeta)

Defined in: [packages/form-core/src/FormApi.ts:888](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L888)

A class representing the Form API. It handles the logic and interactions with the form state.

Normally, you will not need to create a new FormApi instance directly. Instead, you will use a framework hook/function like useForm or createForm to create a new instance for you that uses your framework's reactivity model. However, if you need to create a new instance manually, you can do so by calling the new FormApi constructor.

[

## Type Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#type-parameters)[

### TFormData

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#tformdata)

TFormData

[

### TOnMount

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#tonmount)

TOnMount _extends_ undefined | FormValidateOrFn<TFormData\>

[

### TOnChange

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#tonchange)

TOnChange _extends_ undefined | FormValidateOrFn<TFormData\>

[

### TOnChangeAsync

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#tonchangeasync)

TOnChangeAsync _extends_ undefined | FormAsyncValidateOrFn<TFormData\>

[

### TOnBlur

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#tonblur)

TOnBlur _extends_ undefined | FormValidateOrFn<TFormData\>

[

### TOnBlurAsync

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#tonblurasync)

TOnBlurAsync _extends_ undefined | FormAsyncValidateOrFn<TFormData\>

[

### TOnSubmit

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#tonsubmit)

TOnSubmit _extends_ undefined | FormValidateOrFn<TFormData\>

[

### TOnSubmitAsync

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#tonsubmitasync)

TOnSubmitAsync _extends_ undefined | FormAsyncValidateOrFn<TFormData\>

[

### TOnDynamic

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#tondynamic)

TOnDynamic _extends_ undefined | FormValidateOrFn<TFormData\>

[

### TOnDynamicAsync

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#tondynamicasync)

TOnDynamicAsync _extends_ undefined | FormAsyncValidateOrFn<TFormData\>

[

### TOnServer

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#tonserver)

TOnServer _extends_ undefined | FormAsyncValidateOrFn<TFormData\>

[

### TSubmitMeta

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#tsubmitmeta)

TSubmitMeta = never

[

## Constructors

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#constructors)[

### Constructor

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#constructor)

```swift
new FormApi<TFormData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TOnServer, TSubmitMeta>(opts?): FormApi<TFormData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TOnServer, TSubmitMeta>;
```

Defined in: [packages/form-core/src/FormApi.ts:998](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L998)

Constructs a new FormApi instance with the given form options.

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#parameters)[

##### opts?

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#opts)

[FormOptions](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions)<TFormData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TOnServer, TSubmitMeta\>

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#returns)

FormApi<TFormData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TOnServer, TSubmitMeta\>

[

## Properties

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#properties)[

### baseStore

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#basestore)

```swift
baseStore: Store<BaseFormState<TFormData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TOnServer>>;
```

Defined in: [packages/form-core/src/FormApi.ts:919](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L919)

___

[

### fieldInfo

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#fieldinfo)

```swift
fieldInfo: Record<DeepKeys<TFormData>, FieldInfo<TFormData>>;
```

Defined in: [packages/form-core/src/FormApi.ts:967](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L967)

A record of field information for each field in the form.

___

[

### fieldMetaDerived

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#fieldmetaderived)

```swift
fieldMetaDerived: Derived<Partial<Record<DeepKeys<TFormData>, AnyFieldMeta>>>;
```

Defined in: [packages/form-core/src/FormApi.ts:934](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L934)

___

[

### options

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#options)

```css
options: FormOptions<TFormData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TOnServer, TSubmitMeta> = {};
```

Defined in: [packages/form-core/src/FormApi.ts:905](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L905)

The options for the form.

___

[

### store

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#store)

```swift
store: Derived<FormState<TFormData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TOnServer>>;
```

Defined in: [packages/form-core/src/FormApi.ts:949](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L949)

[

## Accessors

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#accessors)[

### formId

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#formid)[

#### Get Signature

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#get-signature)

Defined in: [packages/form-core/src/FormApi.ts:1345](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L1345)

[

##### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#returns-1)

string

___

[

### state

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#state)[

#### Get Signature

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#get-signature-1)

```csharp
get state(): FormState<TFormData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TOnServer>;
```

Defined in: [packages/form-core/src/FormApi.ts:969](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L969)

[

##### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#returns-2)

[FormState](https://tanstack.com/form/latest/docs/reference/interfaces/FormState)<TFormData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TOnServer\>

[

## Methods

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#methods)[

### \_handleSubmit()

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#_handlesubmit)

```javascript
_handleSubmit(submitMeta?): Promise<void>;
```

Defined in: [packages/form-core/src/FormApi.ts:2025](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L2025)

Handles the form submission, performs validation, and calls the appropriate onSubmit or onSubmitInvalid callbacks.

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#parameters-1)[

##### submitMeta?

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#submitmeta)

TSubmitMeta

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#returns-3)

Promise<void\>

___

[

### clearFieldValues()

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#clearfieldvalues)

```cpp
clearFieldValues<TField>(field, options?): void;
```

Defined in: [packages/form-core/src/FormApi.ts:2492](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L2492)

Clear all values within an array field.

[

#### Type Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#type-parameters-1)[

##### TField

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#tfield)

TField _extends_ string

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#parameters-2)[

##### field

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#field)

TField

[

##### options?

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#options-1)

UpdateMetaOptions

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#returns-4)

void

[

#### Implementation of

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#implementation-of)

```
FieldManipulator.clearFieldValues
```

___

[

### deleteField()

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#deletefield)

```cpp
deleteField<TField>(field): void;
```

Defined in: [packages/form-core/src/FormApi.ts:2284](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L2284)

[

#### Type Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#type-parameters-2)[

##### TField

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#tfield-1)

TField _extends_ string

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#parameters-3)[

##### field

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#field-1)

TField

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#returns-5)

void

[

#### Implementation of

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#implementation-of-1)

```
FieldManipulator.deleteField
```

___

[

### getAllErrors()

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#getallerrors)

Defined in: [packages/form-core/src/FormApi.ts:2607](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L2607)

Returns form and field level errors

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#returns-6)

object

[

##### fields

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#fields)

```css
fields: Record<DeepKeys<TFormData>, {
  errorMap: ValidationErrorMap;
  errors: ValidationError[];
}>;
```

[

##### form

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#form)[

###### form.errorMap

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#formerrormap)

```swift
errorMap: ValidationErrorMap<UnwrapFormValidateOrFn<TOnMount>, UnwrapFormValidateOrFn<TOnChange>, UnwrapFormAsyncValidateOrFn<TOnChangeAsync>, UnwrapFormValidateOrFn<TOnBlur>, UnwrapFormAsyncValidateOrFn<TOnBlurAsync>, UnwrapFormValidateOrFn<TOnSubmit>, UnwrapFormAsyncValidateOrFn<TOnSubmitAsync>, UnwrapFormValidateOrFn<TOnDynamic>, UnwrapFormAsyncValidateOrFn<TOnDynamicAsync>, UnwrapFormAsyncValidateOrFn<TOnServer>>;
```

[

###### form.errors

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#formerrors)

```php-template
errors: (
  | UnwrapFormValidateOrFn<TOnMount>
  | UnwrapFormValidateOrFn<TOnChange>
  | UnwrapFormAsyncValidateOrFn<TOnChangeAsync>
  | UnwrapFormValidateOrFn<TOnBlur>
  | UnwrapFormAsyncValidateOrFn<TOnBlurAsync>
  | UnwrapFormValidateOrFn<TOnSubmit>
  | UnwrapFormAsyncValidateOrFn<TOnSubmitAsync>
  | UnwrapFormValidateOrFn<TOnDynamic>
  | UnwrapFormAsyncValidateOrFn<TOnDynamicAsync>
  | UnwrapFormAsyncValidateOrFn<TOnServer>)[];
```

___

[

### getFieldInfo()

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#getfieldinfo)

```php-template
getFieldInfo<TField>(field): FieldInfo<TFormData>;
```

Defined in: [packages/form-core/src/FormApi.ts:2187](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L2187)

Gets the field info of the specified field.

[

#### Type Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#type-parameters-3)[

##### TField

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#tfield-2)

TField _extends_ string

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#parameters-4)[

##### field

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#field-2)

TField

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#returns-7)

[FieldInfo](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldInfo)<TFormData\>

___

[

### getFieldMeta()

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#getfieldmeta)

```css
getFieldMeta<TField>(field): AnyFieldMeta | undefined;
```

Defined in: [packages/form-core/src/FormApi.ts:2178](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L2178)

Gets the metadata of the specified field.

[

#### Type Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#type-parameters-4)[

##### TField

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#tfield-3)

TField _extends_ string

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#parameters-5)[

##### field

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#field-3)

TField

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#returns-8)

[AnyFieldMeta](https://tanstack.com/form/latest/docs/reference/type-aliases/AnyFieldMeta) | undefined

[

#### Implementation of

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#implementation-of-2)

```
FieldManipulator.getFieldMeta
```

___

[

### getFieldValue()

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#getfieldvalue)

```css
getFieldValue<TField>(field): DeepValue<TFormData, TField>;
```

Defined in: [packages/form-core/src/FormApi.ts:2171](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L2171)

Gets the value of the specified field.

[

#### Type Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#type-parameters-5)[

##### TField

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#tfield-4)

TField _extends_ string

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#parameters-6)[

##### field

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#field-4)

TField

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#returns-9)

[DeepValue](https://tanstack.com/form/latest/docs/reference/type-aliases/DeepValue)<TFormData, TField\>

[

#### Implementation of

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#implementation-of-3)

```
FieldManipulator.getFieldValue
```

___

[

### handleSubmit()

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#handlesubmit)[

#### Call Signature

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#call-signature)

```javascript
handleSubmit(): Promise<void>;
```

Defined in: [packages/form-core/src/FormApi.ts:2016](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L2016)

Handles the form submission, performs validation, and calls the appropriate onSubmit or onSubmitInvalid callbacks.

[

##### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#returns-10)

Promise<void\>

[

##### Implementation of

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#implementation-of-4)

```
FieldManipulator.handleSubmit
```

[

#### Call Signature

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#call-signature-1)

```javascript
handleSubmit(submitMeta): Promise<void>;
```

Defined in: [packages/form-core/src/FormApi.ts:2017](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L2017)

[

##### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#parameters-7)[

###### submitMeta

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#submitmeta-1)

TSubmitMeta

[

##### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#returns-11)

Promise<void\>

[

##### Implementation of

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#implementation-of-5)

```
FieldManipulator.handleSubmit
```

___

[

### insertFieldValue()

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#insertfieldvalue)

```javascript
insertFieldValue<TField>(
   field, 
   index, 
   value, 
options?): Promise<void>;
```

Defined in: [packages/form-core/src/FormApi.ts:2322](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L2322)

[

#### Type Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#type-parameters-6)[

##### TField

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#tfield-5)

TField _extends_ string

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#parameters-8)[

##### field

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#field-5)

TField

[

##### index

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#index)

number

[

##### value

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#value)

[DeepValue](https://tanstack.com/form/latest/docs/reference/type-aliases/DeepValue)<TFormData, TField\> _extends_ any\[\] ? any\[\] & [DeepValue](https://tanstack.com/form/latest/docs/reference/type-aliases/DeepValue)<TFormData, TField\>\[number\] : never

[

##### options?

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#options-2)

UpdateMetaOptions

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#returns-12)

Promise<void\>

[

#### Implementation of

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#implementation-of-6)

```
FieldManipulator.insertFieldValue
```

___

[

### mount()

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#mount)

Defined in: [packages/form-core/src/FormApi.ts:1374](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L1374)

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#returns-13)[

##### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#returns-14)

void

___

[

### moveFieldValues()

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#movefieldvalues)

```cpp
moveFieldValues<TField>(
   field, 
   index1, 
   index2, 
   options?): void;
```

Defined in: [packages/form-core/src/FormApi.ts:2460](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L2460)

Moves the value at the first specified index to the second specified index within an array field.

[

#### Type Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#type-parameters-7)[

##### TField

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#tfield-6)

TField _extends_ string

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#parameters-9)[

##### field

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#field-6)

TField

[

##### index1

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#index1)

number

[

##### index2

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#index2)

number

[

##### options?

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#options-3)

UpdateMetaOptions

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#returns-15)

void

[

#### Implementation of

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#implementation-of-7)

```
FieldManipulator.moveFieldValues
```

___

[

### parseValuesWithSchema()

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#parsevalueswithschema)

```typescript
parseValuesWithSchema(schema): 
  | {
  fields: Record<string, StandardSchemaV1Issue[]>;
  form: Record<string, StandardSchemaV1Issue[]>;
}
  | undefined;
```

Defined in: [packages/form-core/src/FormApi.ts:2671](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L2671)

Parses the form's values with a given standard schema and returns issues (if any). This method does NOT set any internal errors.

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#parameters-10)[

##### schema

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#schema)

[StandardSchemaV1](https://tanstack.com/form/latest/docs/reference/type-aliases/StandardSchemaV1)<TFormData, unknown\>

The standard schema to parse the form values with.

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#returns-16)

| { fields: Record<string, [StandardSchemaV1Issue](https://tanstack.com/form/latest/docs/reference/interfaces/StandardSchemaV1Issue)\[\]>; form: Record<string, [StandardSchemaV1Issue](https://tanstack.com/form/latest/docs/reference/interfaces/StandardSchemaV1Issue)\[\]>; } | undefined

___

[

### parseValuesWithSchemaAsync()

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#parsevalueswithschemaasync)

```typescript
parseValuesWithSchemaAsync(schema): Promise<
  | {
  fields: Record<string, StandardSchemaV1Issue[]>;
  form: Record<string, StandardSchemaV1Issue[]>;
}
| undefined>;
```

Defined in: [packages/form-core/src/FormApi.ts:2683](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L2683)

Parses the form's values with a given standard schema and returns issues (if any). This method does NOT set any internal errors.

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#parameters-11)[

##### schema

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#schema-1)

[StandardSchemaV1](https://tanstack.com/form/latest/docs/reference/type-aliases/StandardSchemaV1)<TFormData, unknown\>

The standard schema to parse the form values with.

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#returns-17)

Promise< | { fields: Record<string, [StandardSchemaV1Issue](https://tanstack.com/form/latest/docs/reference/interfaces/StandardSchemaV1Issue)\[\]>; form: Record<string, [StandardSchemaV1Issue](https://tanstack.com/form/latest/docs/reference/interfaces/StandardSchemaV1Issue)\[\]>; } | undefined\>

___

[

### pushFieldValue()

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#pushfieldvalue)

```cpp
pushFieldValue<TField>(
   field, 
   value, 
   options?): void;
```

Defined in: [packages/form-core/src/FormApi.ts:2308](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L2308)

Pushes a value into an array field.

[

#### Type Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#type-parameters-8)[

##### TField

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#tfield-7)

TField _extends_ string

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#parameters-12)[

##### field

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#field-7)

TField

[

##### value

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#value-1)

[DeepValue](https://tanstack.com/form/latest/docs/reference/type-aliases/DeepValue)<TFormData, TField\> _extends_ any\[\] ? any\[\] & [DeepValue](https://tanstack.com/form/latest/docs/reference/type-aliases/DeepValue)<TFormData, TField\>\[number\] : never

[

##### options?

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#options-4)

UpdateMetaOptions

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#returns-18)

void

[

#### Implementation of

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#implementation-of-8)

```
FieldManipulator.pushFieldValue
```

___

[

### removeFieldValue()

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#removefieldvalue)

```javascript
removeFieldValue<TField>(
   field, 
   index, 
options?): Promise<void>;
```

Defined in: [packages/form-core/src/FormApi.ts:2388](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L2388)

Removes a value from an array field at the specified index.

[

#### Type Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#type-parameters-9)[

##### TField

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#tfield-8)

TField _extends_ string

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#parameters-13)[

##### field

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#field-8)

TField

[

##### index

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#index-1)

number

[

##### options?

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#options-5)

UpdateMetaOptions

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#returns-19)

Promise<void\>

[

#### Implementation of

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#implementation-of-9)

```
FieldManipulator.removeFieldValue
```

___

[

### replaceFieldValue()

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#replacefieldvalue)

```javascript
replaceFieldValue<TField>(
   field, 
   index, 
   value, 
options?): Promise<void>;
```

Defined in: [packages/form-core/src/FormApi.ts:2359](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L2359)

Replaces a value into an array field at the specified index.

[

#### Type Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#type-parameters-10)[

##### TField

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#tfield-9)

TField _extends_ string

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#parameters-14)[

##### field

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#field-9)

TField

[

##### index

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#index-2)

number

[

##### value

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#value-2)

[DeepValue](https://tanstack.com/form/latest/docs/reference/type-aliases/DeepValue)<TFormData, TField\> _extends_ any\[\] ? any\[\] & [DeepValue](https://tanstack.com/form/latest/docs/reference/type-aliases/DeepValue)<TFormData, TField\>\[number\] : never

[

##### options?

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#options-6)

UpdateMetaOptions

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#returns-20)

Promise<void\>

[

#### Implementation of

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#implementation-of-10)

```
FieldManipulator.replaceFieldValue
```

___

[

### reset()

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#reset)

```perl
reset(values?, opts?): void;
```

Defined in: [packages/form-core/src/FormApi.ts:1485](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L1485)

Resets the form state to the default values. If values are provided, the form will be reset to those values instead and the default values will be updated.

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#parameters-15)[

##### values?

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#values)

TFormData

Optional values to reset the form to.

[

##### opts?

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#opts-1)

Optional options to control the reset behavior.

[

###### keepDefaultValues?

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#keepdefaultvalues)

boolean

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#returns-21)

void

___

[

### resetField()

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#resetfield)

```cpp
resetField<TField>(field): void;
```

Defined in: [packages/form-core/src/FormApi.ts:2525](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L2525)

Resets the field value and meta to default state

[

#### Type Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#type-parameters-11)[

##### TField

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#tfield-10)

TField _extends_ string

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#parameters-16)[

##### field

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#field-10)

TField

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#returns-22)

void

[

#### Implementation of

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#implementation-of-11)

```
FieldManipulator.resetField
```

___

[

### resetFieldMeta()

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#resetfieldmeta)

```swift
resetFieldMeta<TField>(fieldMeta): Partial<Record<TField, AnyFieldMeta>>;
```

Defined in: [packages/form-core/src/FormApi.ts:2228](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L2228)

resets every field's meta

[

#### Type Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#type-parameters-12)[

##### TField

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#tfield-11)

TField _extends_ string

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#parameters-17)[

##### fieldMeta

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#fieldmeta)

Partial<Record<TField, [AnyFieldMeta](https://tanstack.com/form/latest/docs/reference/type-aliases/AnyFieldMeta)\>>

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#returns-23)

Partial<Record<TField, [AnyFieldMeta](https://tanstack.com/form/latest/docs/reference/type-aliases/AnyFieldMeta)\>>

___

[

### setErrorMap()

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#seterrormap)

```scss
setErrorMap(errorMap): void;
```

Defined in: [packages/form-core/src/FormApi.ts:2543](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L2543)

Updates the form's errorMap

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#parameters-18)[

##### errorMap

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#errormap)

FormValidationErrorMap<TFormData, [UnwrapFormValidateOrFn](https://tanstack.com/form/latest/docs/reference/type-aliases/UnwrapFormValidateOrFn)<TOnMount\>, [UnwrapFormValidateOrFn](https://tanstack.com/form/latest/docs/reference/type-aliases/UnwrapFormValidateOrFn)<TOnChange\>, [UnwrapFormAsyncValidateOrFn](https://tanstack.com/form/latest/docs/reference/type-aliases/UnwrapFormAsyncValidateOrFn)<TOnChangeAsync\>, [UnwrapFormValidateOrFn](https://tanstack.com/form/latest/docs/reference/type-aliases/UnwrapFormValidateOrFn)<TOnBlur\>, [UnwrapFormAsyncValidateOrFn](https://tanstack.com/form/latest/docs/reference/type-aliases/UnwrapFormAsyncValidateOrFn)<TOnBlurAsync\>, [UnwrapFormValidateOrFn](https://tanstack.com/form/latest/docs/reference/type-aliases/UnwrapFormValidateOrFn)<TOnSubmit\>, [UnwrapFormAsyncValidateOrFn](https://tanstack.com/form/latest/docs/reference/type-aliases/UnwrapFormAsyncValidateOrFn)<TOnSubmitAsync\>, [UnwrapFormValidateOrFn](https://tanstack.com/form/latest/docs/reference/type-aliases/UnwrapFormValidateOrFn)<TOnDynamic\>, [UnwrapFormAsyncValidateOrFn](https://tanstack.com/form/latest/docs/reference/type-aliases/UnwrapFormAsyncValidateOrFn)<TOnDynamicAsync\>, [UnwrapFormAsyncValidateOrFn](https://tanstack.com/form/latest/docs/reference/type-aliases/UnwrapFormAsyncValidateOrFn)<TOnServer\>>

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#returns-24)

void

___

[

### setFieldMeta()

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#setfieldmeta)

```cpp
setFieldMeta<TField>(field, updater): void;
```

Defined in: [packages/form-core/src/FormApi.ts:2207](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L2207)

Updates the metadata of the specified field.

[

#### Type Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#type-parameters-13)[

##### TField

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#tfield-12)

TField _extends_ string

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#parameters-19)[

##### field

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#field-11)

TField

[

##### updater

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#updater)

[Updater](https://tanstack.com/form/latest/docs/reference/type-aliases/Updater)<[AnyFieldMetaBase](https://tanstack.com/form/latest/docs/reference/type-aliases/AnyFieldMetaBase)\>

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#returns-25)

void

[

#### Implementation of

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#implementation-of-12)

```
FieldManipulator.setFieldMeta
```

___

[

### setFieldValue()

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#setfieldvalue)

```cpp
setFieldValue<TField>(
   field, 
   updater, 
   opts?): void;
```

Defined in: [packages/form-core/src/FormApi.ts:2244](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L2244)

Sets the value of the specified field and optionally updates the touched state.

[

#### Type Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#type-parameters-14)[

##### TField

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#tfield-13)

TField _extends_ string

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#parameters-20)[

##### field

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#field-12)

TField

[

##### updater

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#updater-1)

[Updater](https://tanstack.com/form/latest/docs/reference/type-aliases/Updater)<[DeepValue](https://tanstack.com/form/latest/docs/reference/type-aliases/DeepValue)<TFormData, TField\>>

[

##### opts?

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#opts-2)

UpdateMetaOptions

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#returns-26)

void

[

#### Implementation of

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#implementation-of-13)

```
FieldManipulator.setFieldValue
```

___

[

### swapFieldValues()

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#swapfieldvalues)

```cpp
swapFieldValues<TField>(
   field, 
   index1, 
   index2, 
   options?): void;
```

Defined in: [packages/form-core/src/FormApi.ts:2428](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L2428)

Swaps the values at the specified indices within an array field.

[

#### Type Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#type-parameters-15)[

##### TField

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#tfield-14)

TField _extends_ string

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#parameters-21)[

##### field

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#field-13)

TField

[

##### index1

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#index1-1)

number

[

##### index2

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#index2-1)

number

[

##### options?

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#options-7)

UpdateMetaOptions

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#returns-27)

void

[

#### Implementation of

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#implementation-of-14)

```
FieldManipulator.swapFieldValues
```

___

[

### update()

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#update)

Defined in: [packages/form-core/src/FormApi.ts:1409](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L1409)

Updates the form options and form state.

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#parameters-22)[

##### options?

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#options-8)

[FormOptions](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions)<TFormData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TOnServer, TSubmitMeta\>

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#returns-28)

void

___

[

### validateAllFields()

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#validateallfields)

```scss
validateAllFields(cause): Promise<unknown[]>;
```

Defined in: [packages/form-core/src/FormApi.ts:1511](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L1511)

Validates all fields using the correct handlers for a given validation cause.

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#parameters-23)[

##### cause

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#cause)

ValidationCause

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#returns-29)

Promise<unknown\[\]>

[

#### Implementation of

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#implementation-of-15)

```
FieldManipulator.validateAllFields
```

___

[

### validateArrayFieldsStartingFrom()

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#validatearrayfieldsstartingfrom)

```perl
validateArrayFieldsStartingFrom<TField>(
   field, 
   index, 
cause): Promise<unknown[]>;
```

Defined in: [packages/form-core/src/FormApi.ts:1541](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L1541)

Validates the children of a specified array in the form starting from a given index until the end using the correct handlers for a given validation type.

[

#### Type Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#type-parameters-16)[

##### TField

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#tfield-15)

TField _extends_ string

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#parameters-24)[

##### field

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#field-14)

TField

[

##### index

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#index-3)

number

[

##### cause

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#cause-1)

ValidationCause

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#returns-30)

Promise<unknown\[\]>

[

#### Implementation of

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#implementation-of-16)

```
FieldManipulator.validateArrayFieldsStartingFrom
```

___

[

### validateField()

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#validatefield)

```typescript
validateField<TField>(field, cause): unknown[] | Promise<unknown[]>;
```

Defined in: [packages/form-core/src/FormApi.ts:1582](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L1582)

Validates a specified field in the form using the correct handlers for a given validation type.

[

#### Type Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#type-parameters-17)[

##### TField

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#tfield-16)

TField _extends_ string

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#parameters-25)[

##### field

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#field-15)

TField

[

##### cause

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#cause-2)

ValidationCause

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#returns-31)

unknown\[\] | Promise<unknown\[\]>

[

#### Implementation of

](https://tanstack.com/form/latest/docs/reference/classes/FormApi#implementation-of-17)

```
FieldManipulator.validateField
```