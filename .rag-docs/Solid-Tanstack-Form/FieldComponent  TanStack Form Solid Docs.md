[](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/FieldComponent#type-alias-fieldcomponenttparentdata-tformonmount-tformonchange-tformonchangeasync-tformonblur-tformonblurasync-tformonsubmit-tformonsubmitasync-tformondynamic-tformondynamicasync-tformonserver-tpatentsubmitmeta-extendedapi)

```typescript
type FieldComponent<TParentData, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TPatentSubmitMeta, ExtendedApi> = <TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync>({
  children,
  ...fieldOptions
}) => JSX.Element;
```

Defined in: [packages/solid-form/src/createField.tsx:471](https://github.com/TanStack/form/blob/main/packages/solid-form/src/createField.tsx#L471)

A type alias representing a field component for a specific form data type.

[

## Type Parameters

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/FieldComponent#type-parameters)[

### TParentData

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/FieldComponent#tparentdata)

TParentData

[

### TFormOnMount

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/FieldComponent#tformonmount)

TFormOnMount _extends_ undefined | FormValidateOrFn<TParentData\>

[

### TFormOnChange

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/FieldComponent#tformonchange)

TFormOnChange _extends_ undefined | FormValidateOrFn<TParentData\>

[

### TFormOnChangeAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/FieldComponent#tformonchangeasync)

TFormOnChangeAsync _extends_ undefined | FormAsyncValidateOrFn<TParentData\>

[

### TFormOnBlur

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/FieldComponent#tformonblur)

TFormOnBlur _extends_ undefined | FormValidateOrFn<TParentData\>

[

### TFormOnBlurAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/FieldComponent#tformonblurasync)

TFormOnBlurAsync _extends_ undefined | FormAsyncValidateOrFn<TParentData\>

[

### TFormOnSubmit

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/FieldComponent#tformonsubmit)

TFormOnSubmit _extends_ undefined | FormValidateOrFn<TParentData\>

[

### TFormOnSubmitAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/FieldComponent#tformonsubmitasync)

TFormOnSubmitAsync _extends_ undefined | FormAsyncValidateOrFn<TParentData\>

[

### TFormOnDynamic

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/FieldComponent#tformondynamic)

TFormOnDynamic _extends_ undefined | FormValidateOrFn<TParentData\>

[

### TFormOnDynamicAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/FieldComponent#tformondynamicasync)

TFormOnDynamicAsync _extends_ undefined | FormAsyncValidateOrFn<TParentData\>

[

### TFormOnServer

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/FieldComponent#tformonserver)

TFormOnServer _extends_ undefined | FormAsyncValidateOrFn<TParentData\>

[

### TPatentSubmitMeta

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/FieldComponent#tpatentsubmitmeta)

TPatentSubmitMeta

[

### ExtendedApi

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/FieldComponent#extendedapi)

ExtendedApi = { }

[

## Type Parameters

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/FieldComponent#type-parameters-1)[

### TName

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/FieldComponent#tname)

TName _extends_ DeepKeys<TParentData\>

[

### TData

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/FieldComponent#tdata)

TData _extends_ DeepValue<TParentData, TName\>

[

### TOnMount

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/FieldComponent#tonmount)

TOnMount _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnChange

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/FieldComponent#tonchange)

TOnChange _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnChangeAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/FieldComponent#tonchangeasync)

TOnChangeAsync _extends_ undefined | FieldAsyncValidateOrFn<TParentData, TName, TData\>

[

### TOnBlur

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/FieldComponent#tonblur)

TOnBlur _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnBlurAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/FieldComponent#tonblurasync)

TOnBlurAsync _extends_ undefined | FieldAsyncValidateOrFn<TParentData, TName, TData\>

[

### TOnSubmit

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/FieldComponent#tonsubmit)

TOnSubmit _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnSubmitAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/FieldComponent#tonsubmitasync)

TOnSubmitAsync _extends_ undefined | FieldAsyncValidateOrFn<TParentData, TName, TData\>

[

### TOnDynamic

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/FieldComponent#tondynamic)

TOnDynamic _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnDynamicAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/FieldComponent#tondynamicasync)

TOnDynamicAsync _extends_ undefined | FieldAsyncValidateOrFn<TParentData, TName, TData\>

[

## Parameters

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/FieldComponent#parameters)

### {

children, ...fieldOptions }

FieldComponentBoundProps<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TPatentSubmitMeta, ExtendedApi\>

[

## Returns

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/FieldComponent#returns)

JSX.Element