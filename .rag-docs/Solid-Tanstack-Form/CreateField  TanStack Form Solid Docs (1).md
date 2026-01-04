[](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/CreateField#type-alias-createfieldtparentdata-tformonmount-tformonchange-tformonchangeasync-tformonblur-tformonblurasync-tformonsubmit-tformonsubmitasync-tformondynamic-tformondynamicasync-tformonserver-tparentsubmitmeta)

```typescript
type CreateField<TParentData, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TParentSubmitMeta> = <TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync>(opts) => () => FieldApi<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TParentSubmitMeta> & SolidFieldApi<TParentData, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TParentSubmitMeta>;
```

Defined in: [packages/solid-form/src/createField.tsx:53](https://github.com/TanStack/form/blob/main/packages/solid-form/src/createField.tsx#L53)

[

## Type Parameters

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/CreateField#type-parameters)[

### TParentData

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/CreateField#tparentdata)

TParentData

[

### TFormOnMount

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/CreateField#tformonmount)

TFormOnMount _extends_ undefined | FormValidateOrFn<TParentData\>

[

### TFormOnChange

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/CreateField#tformonchange)

TFormOnChange _extends_ undefined | FormValidateOrFn<TParentData\>

[

### TFormOnChangeAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/CreateField#tformonchangeasync)

TFormOnChangeAsync _extends_ undefined | FormAsyncValidateOrFn<TParentData\>

[

### TFormOnBlur

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/CreateField#tformonblur)

TFormOnBlur _extends_ undefined | FormValidateOrFn<TParentData\>

[

### TFormOnBlurAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/CreateField#tformonblurasync)

TFormOnBlurAsync _extends_ undefined | FormAsyncValidateOrFn<TParentData\>

[

### TFormOnSubmit

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/CreateField#tformonsubmit)

TFormOnSubmit _extends_ undefined | FormValidateOrFn<TParentData\>

[

### TFormOnSubmitAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/CreateField#tformonsubmitasync)

TFormOnSubmitAsync _extends_ undefined | FormAsyncValidateOrFn<TParentData\>

[

### TFormOnDynamic

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/CreateField#tformondynamic)

TFormOnDynamic _extends_ undefined | FormValidateOrFn<TParentData\>

[

### TFormOnDynamicAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/CreateField#tformondynamicasync)

TFormOnDynamicAsync _extends_ undefined | FormAsyncValidateOrFn<TParentData\>

[

### TFormOnServer

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/CreateField#tformonserver)

TFormOnServer _extends_ undefined | FormAsyncValidateOrFn<TParentData\>

[

### TParentSubmitMeta

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/CreateField#tparentsubmitmeta)

TParentSubmitMeta

[

## Type Parameters

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/CreateField#type-parameters-1)[

### TName

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/CreateField#tname)

TName _extends_ DeepKeys<TParentData\>

[

### TData

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/CreateField#tdata)

TData _extends_ DeepValue<TParentData, TName\>

[

### TOnMount

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/CreateField#tonmount)

TOnMount _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnChange

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/CreateField#tonchange)

TOnChange _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnChangeAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/CreateField#tonchangeasync)

TOnChangeAsync _extends_ undefined | FieldAsyncValidateOrFn<TParentData, TName, TData\>

[

### TOnBlur

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/CreateField#tonblur)

TOnBlur _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnBlurAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/CreateField#tonblurasync)

TOnBlurAsync _extends_ undefined | FieldAsyncValidateOrFn<TParentData, TName, TData\>

[

### TOnSubmit

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/CreateField#tonsubmit)

TOnSubmit _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnSubmitAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/CreateField#tonsubmitasync)

TOnSubmitAsync _extends_ undefined | FieldAsyncValidateOrFn<TParentData, TName, TData\>

[

### TOnDynamic

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/CreateField#tondynamic)

TOnDynamic _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnDynamicAsync

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/CreateField#tondynamicasync)

TOnDynamicAsync _extends_ undefined | FieldAsyncValidateOrFn<TParentData, TName, TData\>

[

## Parameters

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/CreateField#parameters)[

### opts

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/CreateField#opts)

() => object & [CreateFieldOptionsBound](https://tanstack.com/form/latest/docs/framework/solid/reference/interfaces/CreateFieldOptionsBound)<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync\>

[

## Returns

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/CreateField#returns)

```swift
(): FieldApi<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TParentSubmitMeta> & SolidFieldApi<TParentData, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TParentSubmitMeta>;
```

[

### Returns

](https://tanstack.com/form/latest/docs/framework/solid/reference/type-aliases/CreateField#returns-1)

FieldApi<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TParentSubmitMeta\> & SolidFieldApi<TParentData, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync, TFormOnServer, TParentSubmitMeta\>