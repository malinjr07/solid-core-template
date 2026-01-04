[

## Function: Field()

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/Field#function-field)

```csharp
function Field<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TParentSubmitMeta>(props): Element;
```

Defined in: [packages/solid-form/src/createField.tsx:717](https://github.com/TanStack/form/blob/main/packages/solid-form/src/createField.tsx#L717)

[

## Type Parameters

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/Field#type-parameters)[

### TParentData

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/Field#tparentdata)

TParentData

[

### TName

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/Field#tname)

TName _extends_ string

[

### TData

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/Field#tdata)

TData

[

### TOnMount

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/Field#tonmount)

TOnMount _extends_ FieldValidateOrFn<TParentData, TName, TData\> | undefined

[

### TOnChange

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/Field#tonchange)

TOnChange _extends_ FieldValidateOrFn<TParentData, TName, TData\> | undefined

[

### TOnChangeAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/Field#tonchangeasync)

TOnChangeAsync _extends_ FieldAsyncValidateOrFn<TParentData, TName, TData\> | undefined

[

### TOnBlur

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/Field#tonblur)

TOnBlur _extends_ FieldValidateOrFn<TParentData, TName, TData\> | undefined

[

### TOnBlurAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/Field#tonblurasync)

TOnBlurAsync _extends_ FieldAsyncValidateOrFn<TParentData, TName, TData\> | undefined

[

### TOnSubmit

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/Field#tonsubmit)

TOnSubmit _extends_ FieldValidateOrFn<TParentData, TName, TData\> | undefined

[

### TOnSubmitAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/Field#tonsubmitasync)

TOnSubmitAsync _extends_ FieldAsyncValidateOrFn<TParentData, TName, TData\> | undefined

[

### TOnDynamic

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/Field#tondynamic)

TOnDynamic _extends_ FieldValidateOrFn<TParentData, TName, TData\> | undefined

[

### TOnDynamicAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/Field#tondynamicasync)

TOnDynamicAsync _extends_ FieldAsyncValidateOrFn<TParentData, TName, TData\> | undefined

[

### TFormOnMount

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/Field#tformonmount)

TFormOnMount _extends_ FormValidateOrFn<TParentData\> | undefined

[

### TFormOnChange

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/Field#tformonchange)

TFormOnChange _extends_ FormValidateOrFn<TParentData\> | undefined

[

### TFormOnChangeAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/Field#tformonchangeasync)

TFormOnChangeAsync _extends_ FormAsyncValidateOrFn<TParentData\> | undefined

[

### TFormOnBlur

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/Field#tformonblur)

TFormOnBlur _extends_ FormValidateOrFn<TParentData\> | undefined

[

### TFormOnBlurAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/Field#tformonblurasync)

TFormOnBlurAsync _extends_ FormAsyncValidateOrFn<TParentData\> | undefined

[

### TFormOnSubmit

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/Field#tformonsubmit)

TFormOnSubmit _extends_ FormValidateOrFn<TParentData\> | undefined

[

### TFormOnSubmitAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/Field#tformonsubmitasync)

TFormOnSubmitAsync _extends_ FormAsyncValidateOrFn<TParentData\> | undefined

[

### TFormOnDynamic

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/Field#tformondynamic)

TFormOnDynamic _extends_ FormValidateOrFn<TParentData\> | undefined

[

### TFormOnDynamicAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/Field#tformondynamicasync)

TFormOnDynamicAsync _extends_ FormAsyncValidateOrFn<TParentData\> | undefined

[

### TFormOnServer

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/Field#tformonserver)

TFormOnServer _extends_ FormAsyncValidateOrFn<TParentData\> | undefined

[

### TParentSubmitMeta

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/Field#tparentsubmitmeta)

TParentSubmitMeta

[

## Parameters

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/Field#parameters)[

### props

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/Field#props)

FieldComponentProps<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TParentSubmitMeta\>

[

## Returns

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/Field#returns)

Element