[](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldMeta#type-alias-fieldmetatparentdata-tname-tdata-tonmount-tonchange-tonchangeasync-tonblur-tonblurasync-tonsubmit-tonsubmitasync-tondynamic-tondynamicasync-tformonmount-tformonchange-tformonchangeasync-tformonblur-tformonblurasync-tformonsubmit-tformonsubmitasync-tformondynamic-tformondynamicasync)

```swift
type FieldMeta<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync> = FieldMetaBase<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync> & FieldMetaDerived<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync>;
```

Defined in: [packages/form-core/src/FieldApi.ts:767](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L767)

An object type representing the metadata of a field in a form.

[

## Type Parameters

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldMeta#type-parameters)[

### TParentData

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldMeta#tparentdata)

TParentData

[

### TName

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldMeta#tname)

TName _extends_ [DeepKeys](https://tanstack.com/form/latest/docs/reference/type-aliases/DeepKeys)<TParentData\>

[

### TData

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldMeta#tdata)

TData _extends_ [DeepValue](https://tanstack.com/form/latest/docs/reference/type-aliases/DeepValue)<TParentData, TName\>

[

### TOnMount

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldMeta#tonmount)

TOnMount _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnChange

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldMeta#tonchange)

TOnChange _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnChangeAsync

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldMeta#tonchangeasync)

TOnChangeAsync _extends_ undefined | FieldAsyncValidateOrFn<TParentData, TName, TData\>

[

### TOnBlur

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldMeta#tonblur)

TOnBlur _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnBlurAsync

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldMeta#tonblurasync)

TOnBlurAsync _extends_ undefined | FieldAsyncValidateOrFn<TParentData, TName, TData\>

[

### TOnSubmit

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldMeta#tonsubmit)

TOnSubmit _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnSubmitAsync

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldMeta#tonsubmitasync)

TOnSubmitAsync _extends_ undefined | FieldAsyncValidateOrFn<TParentData, TName, TData\>

[

### TOnDynamic

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldMeta#tondynamic)

TOnDynamic _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnDynamicAsync

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldMeta#tondynamicasync)

TOnDynamicAsync _extends_ undefined | FieldAsyncValidateOrFn<TParentData, TName, TData\>

[

### TFormOnMount

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldMeta#tformonmount)

TFormOnMount _extends_ undefined | FormValidateOrFn<TParentData\>

[

### TFormOnChange

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldMeta#tformonchange)

TFormOnChange _extends_ undefined | FormValidateOrFn<TParentData\>

[

### TFormOnChangeAsync

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldMeta#tformonchangeasync)

TFormOnChangeAsync _extends_ undefined | FormAsyncValidateOrFn<TParentData\>

[

### TFormOnBlur

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldMeta#tformonblur)

TFormOnBlur _extends_ undefined | FormValidateOrFn<TParentData\>

[

### TFormOnBlurAsync

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldMeta#tformonblurasync)

TFormOnBlurAsync _extends_ undefined | FormAsyncValidateOrFn<TParentData\>

[

### TFormOnSubmit

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldMeta#tformonsubmit)

TFormOnSubmit _extends_ undefined | FormValidateOrFn<TParentData\>

[

### TFormOnSubmitAsync

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldMeta#tformonsubmitasync)

TFormOnSubmitAsync _extends_ undefined | FormAsyncValidateOrFn<TParentData\>

[

### TFormOnDynamic

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldMeta#tformondynamic)

TFormOnDynamic _extends_ undefined | FormValidateOrFn<TParentData\>

[

### TFormOnDynamicAsync

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldMeta#tformondynamicasync)

TFormOnDynamicAsync _extends_ undefined | FormAsyncValidateOrFn<TParentData\>