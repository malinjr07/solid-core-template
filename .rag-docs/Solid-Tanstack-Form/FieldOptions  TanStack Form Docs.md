[

## Interface: FieldOptions<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync>

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions#interface-fieldoptionstparentdata-tname-tdata-tonmount-tonchange-tonchangeasync-tonblur-tonblurasync-tonsubmit-tonsubmitasync-tondynamic-tondynamicasync)

Defined in: [packages/form-core/src/FieldApi.ts:391](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L391)

An object type representing the options for a field in a form.

[

## Extended by

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions#extended-by)

-   [FieldApiOptions](https://tanstack.com/form/latest/docs/reference/interfaces/FieldApiOptions)

[

## Type Parameters

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions#type-parameters)[

### TParentData

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions#tparentdata)

TParentData

[

### TName

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions#tname)

TName _extends_ [DeepKeys](https://tanstack.com/form/latest/docs/reference/type-aliases/DeepKeys)<TParentData\>

[

### TData

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions#tdata)

TData _extends_ [DeepValue](https://tanstack.com/form/latest/docs/reference/type-aliases/DeepValue)<TParentData, TName\>

[

### TOnMount

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions#tonmount)

TOnMount _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnChange

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions#tonchange)

TOnChange _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnChangeAsync

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions#tonchangeasync)

TOnChangeAsync _extends_ undefined | FieldAsyncValidateOrFn<TParentData, TName, TData\>

[

### TOnBlur

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions#tonblur)

TOnBlur _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnBlurAsync

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions#tonblurasync)

TOnBlurAsync _extends_ undefined | FieldAsyncValidateOrFn<TParentData, TName, TData\>

[

### TOnSubmit

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions#tonsubmit)

TOnSubmit _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnSubmitAsync

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions#tonsubmitasync)

TOnSubmitAsync _extends_ undefined | FieldAsyncValidateOrFn<TParentData, TName, TData\>

[

### TOnDynamic

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions#tondynamic)

TOnDynamic _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnDynamicAsync

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions#tondynamicasync)

TOnDynamicAsync _extends_ undefined | FieldAsyncValidateOrFn<TParentData, TName, TData\>

[

## Properties

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions#properties)[

### asyncAlways?

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions#asyncalways)

```vbnet
optional asyncAlways: boolean;
```

Defined in: [packages/form-core/src/FieldApi.ts:428](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L428)

If true, always run async validation, even if there are errors emitted during synchronous validation.

___

[

### asyncDebounceMs?

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions#asyncdebouncems)

```cpp
optional asyncDebounceMs: number;
```

Defined in: [packages/form-core/src/FieldApi.ts:424](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L424)

The default time to debounce async validation if there is not a more specific debounce time passed.

___

[

### defaultMeta?

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions#defaultmeta)

```swift
optional defaultMeta: Partial<FieldMeta<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, any, any, any, any, any, any, any, any, any>>;
```

Defined in: [packages/form-core/src/FieldApi.ts:449](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L449)

An optional object with default metadata for the field.

___

[

### defaultValue?

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions#defaultvalue)

```swift
optional defaultValue: NoInfer<TData>;
```

Defined in: [packages/form-core/src/FieldApi.ts:420](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L420)

An optional default value for the field.

___

[

### disableErrorFlat?

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions#disableerrorflat)

```vbnet
optional disableErrorFlat: boolean;
```

Defined in: [packages/form-core/src/FieldApi.ts:481](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L481)

Disable the flat(1) operation on field.errors. This is useful if you want to keep the error structure as is. Not suggested for most use-cases.

___

[

### listeners?

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions#listeners)

```swift
optional listeners: FieldListeners<TParentData, TName, TData>;
```

Defined in: [packages/form-core/src/FieldApi.ts:477](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L477)

A list of listeners which attach to the corresponding events

___

[

### name

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions#name)

Defined in: [packages/form-core/src/FieldApi.ts:416](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L416)

The field name. The type will be DeepKeys<TParentData> to ensure your name is a deep key of the parent dataset.

___

[

### validators?

](https://tanstack.com/form/latest/docs/reference/interfaces/FieldOptions#validators)

```swift
optional validators: FieldValidators<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync>;
```

Defined in: [packages/form-core/src/FieldApi.ts:432](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L432)

A list of validators to pass to the field