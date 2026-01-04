[

## Function: formOptions()

](https://tanstack.com/form/latest/docs/reference/functions/formOptions#function-formoptions)

```csharp
function formOptions<TOptions, TFormData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TOnServer, TSubmitMeta>(defaultOpts): TOptions;
```

Defined in: [packages/form-core/src/formOptions.ts:23](https://github.com/TanStack/form/blob/main/packages/form-core/src/formOptions.ts#L23)

[

## Type Parameters

](https://tanstack.com/form/latest/docs/reference/functions/formOptions#type-parameters)[

### TOptions

](https://tanstack.com/form/latest/docs/reference/functions/formOptions#toptions)

TOptions _extends_ Partial<[FormOptions](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions)<TFormData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TOnServer, TSubmitMeta\>>

[

### TFormData

](https://tanstack.com/form/latest/docs/reference/functions/formOptions#tformdata)

TFormData

[

### TOnMount

](https://tanstack.com/form/latest/docs/reference/functions/formOptions#tonmount)

TOnMount _extends_ FormValidateOrFn<TFormData\> | undefined

[

### TOnChange

](https://tanstack.com/form/latest/docs/reference/functions/formOptions#tonchange)

TOnChange _extends_ FormValidateOrFn<TFormData\> | undefined

[

### TOnChangeAsync

](https://tanstack.com/form/latest/docs/reference/functions/formOptions#tonchangeasync)

TOnChangeAsync _extends_ FormAsyncValidateOrFn<TFormData\> | undefined

[

### TOnBlur

](https://tanstack.com/form/latest/docs/reference/functions/formOptions#tonblur)

TOnBlur _extends_ FormValidateOrFn<TFormData\> | undefined

[

### TOnBlurAsync

](https://tanstack.com/form/latest/docs/reference/functions/formOptions#tonblurasync)

TOnBlurAsync _extends_ FormAsyncValidateOrFn<TFormData\> | undefined

[

### TOnSubmit

](https://tanstack.com/form/latest/docs/reference/functions/formOptions#tonsubmit)

TOnSubmit _extends_ FormValidateOrFn<TFormData\> | undefined

[

### TOnSubmitAsync

](https://tanstack.com/form/latest/docs/reference/functions/formOptions#tonsubmitasync)

TOnSubmitAsync _extends_ FormAsyncValidateOrFn<TFormData\> | undefined

[

### TOnDynamic

](https://tanstack.com/form/latest/docs/reference/functions/formOptions#tondynamic)

TOnDynamic _extends_ FormValidateOrFn<TFormData\> | undefined

[

### TOnDynamicAsync

](https://tanstack.com/form/latest/docs/reference/functions/formOptions#tondynamicasync)

TOnDynamicAsync _extends_ FormAsyncValidateOrFn<TFormData\> | undefined

[

### TOnServer

](https://tanstack.com/form/latest/docs/reference/functions/formOptions#tonserver)

TOnServer _extends_ FormAsyncValidateOrFn<TFormData\> | undefined

[

### TSubmitMeta

](https://tanstack.com/form/latest/docs/reference/functions/formOptions#tsubmitmeta)

TSubmitMeta = never

[

## Parameters

](https://tanstack.com/form/latest/docs/reference/functions/formOptions#parameters)[

### defaultOpts

](https://tanstack.com/form/latest/docs/reference/functions/formOptions#defaultopts)

Partial<[FormOptions](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions)<TFormData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TOnServer, TSubmitMeta\>> & TOptions

[

## Returns

](https://tanstack.com/form/latest/docs/reference/functions/formOptions#returns)

TOptions