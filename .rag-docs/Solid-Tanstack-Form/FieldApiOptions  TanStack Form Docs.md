[](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#interface-fieldapioptionstparentdata-tname-tdata-tonmount-tonchange-tonchangeasync-tonblur-tonblurasync-tonsubmit-tonsubmitasync-tondynamic-tondynamicasync-tformonmount-tformonchange-tformonchangeasync-tformonblur-tformonblurasync-tformonsubmit-tformonsubmitasync-tformondynamic-tformondynamicasync-tformonserver-tparentsubmitmeta)

Defined in: [packages/form-core/src/FieldApi.ts:487](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L487)

An object type representing the required options for the FieldApi class.

[

## Extends

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#extends)

-   [FieldOptions](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions)<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync\>

[

## Type Parameters

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#type-parameters)[

### TParentData

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#tparentdata)

TParentData

[

### TName

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#tname)

TName _extends_ [DeepKeys](https://tanstack.com/form/latest/docs/reference/type-aliases/DeepKeys)<TParentData\>

[

### TData

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#tdata)

TData _extends_ [DeepValue](https://tanstack.com/form/latest/docs/reference/type-aliases/DeepValue)<TParentData, TName\>

[

### TOnMount

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#tonmount)

TOnMount _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnChange

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#tonchange)

TOnChange _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnChangeAsync

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#tonchangeasync)

TOnChangeAsync _extends_ undefined | FieldAsyncValidateOrFn<TParentData, TName, TData\>

[

### TOnBlur

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#tonblur)

TOnBlur _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnBlurAsync

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#tonblurasync)

TOnBlurAsync _extends_ undefined | FieldAsyncValidateOrFn<TParentData, TName, TData\>

[

### TOnSubmit

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#tonsubmit)

TOnSubmit _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnSubmitAsync

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#tonsubmitasync)

TOnSubmitAsync _extends_ undefined | FieldAsyncValidateOrFn<TParentData, TName, TData\>

[

### TOnDynamic

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#tondynamic)

TOnDynamic _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnDynamicAsync

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#tondynamicasync)

TOnDynamicAsync _extends_ undefined | FieldAsyncValidateOrFn<TParentData, TName, TData\>

[

### TFormOnMount

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#tformonmount)

TFormOnMount _extends_ undefined | FormValidateOrFn<TParentData\>

[

### TFormOnChange

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#tformonchange)

TFormOnChange _extends_ undefined | FormValidateOrFn<TParentData\>

[

### TFormOnChangeAsync

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#tformonchangeasync)

TFormOnChangeAsync _extends_ undefined | FormAsyncValidateOrFn<TParentData\>

[

### TFormOnBlur

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#tformonblur)

TFormOnBlur _extends_ undefined | FormValidateOrFn<TParentData\>

[

### TFormOnBlurAsync

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#tformonblurasync)

TFormOnBlurAsync _extends_ undefined | FormAsyncValidateOrFn<TParentData\>

[

### TFormOnSubmit

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#tformonsubmit)

TFormOnSubmit _extends_ undefined | FormValidateOrFn<TParentData\>

[

### TFormOnSubmitAsync

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#tformonsubmitasync)

TFormOnSubmitAsync _extends_ undefined | FormAsyncValidateOrFn<TParentData\>

[

### TFormOnDynamic

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#tformondynamic)

TFormOnDynamic _extends_ undefined | FormValidateOrFn<TParentData\>

[

### TFormOnDynamicAsync

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#tformondynamicasync)

TFormOnDynamicAsync _extends_ undefined | FormAsyncValidateOrFn<TParentData\>

[

### TFormOnServer

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#tformonserver)

TFormOnServer _extends_ undefined | FormAsyncValidateOrFn<TParentData\>

[

### TParentSubmitMeta

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#tparentsubmitmeta)

TParentSubmitMeta

[

## Properties

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#properties)[

### asyncAlways?

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#asyncalways)

```vbnet
optional asyncAlways: boolean;
```

Defined in: [packages/form-core/src/FieldApi.ts:428](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L428)

If true, always run async validation, even if there are errors emitted during synchronous validation.

[

#### Inherited from

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#inherited-from)

[FieldOptions](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions).[asyncAlways](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions#asyncalways)

___

[

### asyncDebounceMs?

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#asyncdebouncems)

```cpp
optional asyncDebounceMs: number;
```

Defined in: [packages/form-core/src/FieldApi.ts:424](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L424)

The default time to debounce async validation if there is not a more specific debounce time passed.

[

#### Inherited from

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#inherited-from-1)

[FieldOptions](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions).[asyncDebounceMs](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions#asyncdebouncems)

___

[

### defaultMeta?

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#defaultmeta)

```swift
optional defaultMeta: Partial<FieldMeta<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, any, any, any, any, any, any, any, any, any>>;
```

Defined in: [packages/form-core/src/FieldApi.ts:449](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L449)

An optional object with default metadata for the field.

[

#### Inherited from

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#inherited-from-2)

[FieldOptions](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions).[defaultMeta](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions#defaultmeta)

___

[

### defaultValue?

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#defaultvalue)

```swift
optional defaultValue: NoInfer<TData>;
```

Defined in: [packages/form-core/src/FieldApi.ts:420](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L420)

An optional default value for the field.

[

#### Inherited from

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#inherited-from-3)

[FieldOptions](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions).[defaultValue](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions#defaultvalue)

___

[

### disableErrorFlat?

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#disableerrorflat)

```vbnet
optional disableErrorFlat: boolean;
```

Defined in: [packages/form-core/src/FieldApi.ts:481](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L481)

Disable the flat(1) operation on field.errors. This is useful if you want to keep the error structure as is. Not suggested for most use-cases.

[

#### Inherited from

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#inherited-from-4)

[FieldOptions](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions).[disableErrorFlat](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions#disableerrorflat)

___

[

### form

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#form)

```css
form: FormApi<TParentData, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TParentSubmitMeta>;
```

Defined in: [packages/form-core/src/FieldApi.ts:551](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L551)

___

[

### listeners?

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#listeners)

```swift
optional listeners: FieldListeners<TParentData, TName, TData>;
```

Defined in: [packages/form-core/src/FieldApi.ts:477](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L477)

A list of listeners which attach to the corresponding events

[

#### Inherited from

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#inherited-from-5)

[FieldOptions](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions).[listeners](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions#listeners)

___

[

### name

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#name)

Defined in: [packages/form-core/src/FieldApi.ts:416](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L416)

The field name. The type will be DeepKeys<TParentData> to ensure your name is a deep key of the parent dataset.

[

#### Inherited from

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#inherited-from-6)

[FieldOptions](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions).[name](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions#name)

___

[

### validators?

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#validators)

```swift
optional validators: FieldValidators<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync>;
```

Defined in: [packages/form-core/src/FieldApi.ts:432](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L432)

A list of validators to pass to the field

[

#### Inherited from

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions#inherited-from-7)

[FieldOptions](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions).[validators](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions#validators)