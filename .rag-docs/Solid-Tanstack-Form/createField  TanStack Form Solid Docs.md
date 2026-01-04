[

## Function: createField()

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createField#function-createfield)

```php
function createField<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TParentSubmitMeta>(opts): () => FieldApi<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TParentSubmitMeta> & SolidFieldApi<TParentData, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TParentSubmitMeta>;
```

Defined in: [packages/solid-form/src/createField.tsx:259](https://github.com/TanStack/form/blob/main/packages/solid-form/src/createField.tsx#L259)

[

## Type Parameters

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createField#type-parameters)[

### TParentData

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createField#tparentdata)

TParentData

[

### TName

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createField#tname)

TName _extends_ string

[

### TData

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createField#tdata)

TData

[

### TOnMount

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createField#tonmount)

TOnMount _extends_ FieldValidateOrFn<TParentData, TName, TData\> | undefined

[

### TOnChange

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createField#tonchange)

TOnChange _extends_ FieldValidateOrFn<TParentData, TName, TData\> | undefined

[

### TOnChangeAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createField#tonchangeasync)

TOnChangeAsync _extends_ FieldAsyncValidateOrFn<TParentData, TName, TData\> | undefined

[

### TOnBlur

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createField#tonblur)

TOnBlur _extends_ FieldValidateOrFn<TParentData, TName, TData\> | undefined

[

### TOnBlurAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createField#tonblurasync)

TOnBlurAsync _extends_ FieldAsyncValidateOrFn<TParentData, TName, TData\> | undefined

[

### TOnSubmit

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createField#tonsubmit)

TOnSubmit _extends_ FieldValidateOrFn<TParentData, TName, TData\> | undefined

[

### TOnSubmitAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createField#tonsubmitasync)

TOnSubmitAsync _extends_ FieldAsyncValidateOrFn<TParentData, TName, TData\> | undefined

[

### TOnDynamic

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createField#tondynamic)

TOnDynamic _extends_ FieldValidateOrFn<TParentData, TName, TData\> | undefined

[

### TOnDynamicAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createField#tondynamicasync)

TOnDynamicAsync _extends_ FieldAsyncValidateOrFn<TParentData, TName, TData\> | undefined

[

### TFormOnMount

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createField#tformonmount)

TFormOnMount _extends_ FormValidateOrFn<TParentData\> | undefined

[

### TFormOnChange

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createField#tformonchange)

TFormOnChange _extends_ FormValidateOrFn<TParentData\> | undefined

[

### TFormOnChangeAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createField#tformonchangeasync)

TFormOnChangeAsync _extends_ FormAsyncValidateOrFn<TParentData\> | undefined

[

### TFormOnBlur

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createField#tformonblur)

TFormOnBlur _extends_ FormValidateOrFn<TParentData\> | undefined

[

### TFormOnBlurAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createField#tformonblurasync)

TFormOnBlurAsync _extends_ FormAsyncValidateOrFn<TParentData\> | undefined

[

### TFormOnSubmit

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createField#tformonsubmit)

TFormOnSubmit _extends_ FormValidateOrFn<TParentData\> | undefined

[

### TFormOnSubmitAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createField#tformonsubmitasync)

TFormOnSubmitAsync _extends_ FormAsyncValidateOrFn<TParentData\> | undefined

[

### TFormOnDynamic

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createField#tformondynamic)

TFormOnDynamic _extends_ FormValidateOrFn<TParentData\> | undefined

[

### TFormOnDynamicAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createField#tformondynamicasync)

TFormOnDynamicAsync _extends_ FormAsyncValidateOrFn<TParentData\> | undefined

[

### TFormOnServer

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createField#tformonserver)

TFormOnServer _extends_ FormAsyncValidateOrFn<TParentData\> | undefined

[

### TParentSubmitMeta

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createField#tparentsubmitmeta)

TParentSubmitMeta

[

## Parameters

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createField#parameters)[

### opts

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createField#opts)

() => [CreateFieldOptions](https://tanstack.com/form/latest/docs/framework/solid/reference/interfaces/CreateFieldOptions)<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TParentSubmitMeta\>

[

## Returns

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createField#returns)

```swift
(): FieldApi<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TParentSubmitMeta> & SolidFieldApi<TParentData, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TParentSubmitMeta>;
```

[

### Returns

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createField#returns-1)

FieldApi<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TParentSubmitMeta\> & SolidFieldApi<TParentData, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TParentSubmitMeta\>