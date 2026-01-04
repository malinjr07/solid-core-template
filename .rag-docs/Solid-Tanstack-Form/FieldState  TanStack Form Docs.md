[

## Type Alias: FieldState<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync>

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldState#type-alias-fieldstatetparentdata-tname-tdata-tonmount-tonchange-tonchangeasync-tonblur-tonblurasync-tonsubmit-tonsubmitasync-tondynamic-tondynamicasync-tformonmount-tformonchange-tformonchangeasync-tformonblur-tformonblurasync-tformonsubmit-tformonsubmitasync-tformondynamic-tformondynamicasync)

```python
type FieldState<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync> = object;
```

Defined in: [packages/form-core/src/FieldApi.ts:871](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L871)

An object type representing the state of a field.

[

## Type Parameters

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldState#type-parameters)[

### TParentData

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldState#tparentdata)

TParentData

[

### TName

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldState#tname)

TName _extends_ [DeepKeys](https://tanstack.com/form/latest/docs/reference/type-aliases/DeepKeys)<TParentData\>

[

### TData

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldState#tdata)

TData _extends_ [DeepValue](https://tanstack.com/form/latest/docs/reference/type-aliases/DeepValue)<TParentData, TName\>

[

### TOnMount

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldState#tonmount)

TOnMount _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnChange

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldState#tonchange)

TOnChange _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnChangeAsync

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldState#tonchangeasync)

TOnChangeAsync _extends_ undefined | FieldAsyncValidateOrFn<TParentData, TName, TData\>

[

### TOnBlur

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldState#tonblur)

TOnBlur _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnBlurAsync

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldState#tonblurasync)

TOnBlurAsync _extends_ undefined | FieldAsyncValidateOrFn<TParentData, TName, TData\>

[

### TOnSubmit

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldState#tonsubmit)

TOnSubmit _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnSubmitAsync

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldState#tonsubmitasync)

TOnSubmitAsync _extends_ undefined | FieldAsyncValidateOrFn<TParentData, TName, TData\>

[

### TOnDynamic

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldState#tondynamic)

TOnDynamic _extends_ undefined | FieldValidateOrFn<TParentData, TName, TData\>

[

### TOnDynamicAsync

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldState#tondynamicasync)

TOnDynamicAsync _extends_ undefined | FieldAsyncValidateOrFn<TParentData, TName, TData\>

[

### TFormOnMount

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldState#tformonmount)

TFormOnMount _extends_ undefined | FormValidateOrFn<TParentData\>

[

### TFormOnChange

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldState#tformonchange)

TFormOnChange _extends_ undefined | FormValidateOrFn<TParentData\>

[

### TFormOnChangeAsync

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldState#tformonchangeasync)

TFormOnChangeAsync _extends_ undefined | FormAsyncValidateOrFn<TParentData\>

[

### TFormOnBlur

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldState#tformonblur)

TFormOnBlur _extends_ undefined | FormValidateOrFn<TParentData\>

[

### TFormOnBlurAsync

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldState#tformonblurasync)

TFormOnBlurAsync _extends_ undefined | FormAsyncValidateOrFn<TParentData\>

[

### TFormOnSubmit

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldState#tformonsubmit)

TFormOnSubmit _extends_ undefined | FormValidateOrFn<TParentData\>

[

### TFormOnSubmitAsync

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldState#tformonsubmitasync)

TFormOnSubmitAsync _extends_ undefined | FormAsyncValidateOrFn<TParentData\>

[

### TFormOnDynamic

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldState#tformondynamic)

TFormOnDynamic _extends_ undefined | FormValidateOrFn<TParentData\>

[

### TFormOnDynamicAsync

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldState#tformondynamicasync)

TFormOnDynamicAsync _extends_ undefined | FormAsyncValidateOrFn<TParentData\>

[

## Properties

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldState#properties)[

### meta

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldState#meta)

```css
meta: FieldMeta<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnDynamic, TFormOnDynamicAsync>;
```

Defined in: [packages/form-core/src/FieldApi.ts:909](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L909)

The current metadata of the field.

___

[

### value

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldState#value)

Defined in: [packages/form-core/src/FieldApi.ts:905](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L905)

The current value of the field.