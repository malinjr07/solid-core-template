[

## Function: createForm()

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createForm#function-createform)

```csharp
function createForm<TParentData, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TSubmitMeta>(opts?): FormApi<TParentData, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TSubmitMeta> & SolidFormApi<TParentData, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TSubmitMeta>;
```

Defined in: [packages/solid-form/src/createForm.tsx:173](https://github.com/TanStack/form/blob/main/packages/solid-form/src/createForm.tsx#L173)

[

## Type Parameters

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createForm#type-parameters)[

### TParentData

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createForm#tparentdata)

TParentData

[

### TFormOnMount

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createForm#tformonmount)

TFormOnMount _extends_ FormValidateOrFn<TParentData\> | undefined

[

### TFormOnChange

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createForm#tformonchange)

TFormOnChange _extends_ FormValidateOrFn<TParentData\> | undefined

[

### TFormOnChangeAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createForm#tformonchangeasync)

TFormOnChangeAsync _extends_ FormAsyncValidateOrFn<TParentData\> | undefined

[

### TFormOnBlur

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createForm#tformonblur)

TFormOnBlur _extends_ FormValidateOrFn<TParentData\> | undefined

[

### TFormOnBlurAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createForm#tformonblurasync)

TFormOnBlurAsync _extends_ FormAsyncValidateOrFn<TParentData\> | undefined

[

### TFormOnSubmit

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createForm#tformonsubmit)

TFormOnSubmit _extends_ FormValidateOrFn<TParentData\> | undefined

[

### TFormOnSubmitAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createForm#tformonsubmitasync)

TFormOnSubmitAsync _extends_ FormAsyncValidateOrFn<TParentData\> | undefined

[

### TFormOnDynamic

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createForm#tformondynamic)

TFormOnDynamic _extends_ FormValidateOrFn<TParentData\> | undefined

[

### TFormOnDynamicAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createForm#tformondynamicasync)

TFormOnDynamicAsync _extends_ FormAsyncValidateOrFn<TParentData\> | undefined

[

### TFormOnServer

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createForm#tformonserver)

TFormOnServer _extends_ FormAsyncValidateOrFn<TParentData\> | undefined

[

### TSubmitMeta

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createForm#tsubmitmeta)

TSubmitMeta

[

## Parameters

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createForm#parameters)[

### opts?

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createForm#opts)

() => FormOptions<TParentData, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TSubmitMeta\>

[

## Returns

](https://tanstack.com/form/latest/docs/framework/solid/reference/functions/createForm#returns)

FormApi<TParentData, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TSubmitMeta\> & [SolidFormApi](https://tanstack.com/form/latest/docs/framework/solid/reference/interfaces/SolidFormApi)<TParentData, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TSubmitMeta\>