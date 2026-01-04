[

## Type Alias: BaseFormState<TFormData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TOnServer>

](https://tanstack.com/form/latest/docs/reference/type-aliases/BaseFormState#type-alias-baseformstatetformdata-tonmount-tonchange-tonchangeasync-tonblur-tonblurasync-tonsubmit-tonsubmitasync-tondynamic-tondynamicasync-tonserver)

```python
type BaseFormState<TFormData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TOnServer> = object;
```

Defined in: [packages/form-core/src/FormApi.ts:583](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L583)

An object representing the current state of the form.

[

## Extended by

](https://tanstack.com/form/latest/docs/reference/type-aliases/BaseFormState#extended-by)

-   [FormState](https://tanstack.com/form/latest/docs/reference/interfaces/FormState)

[

## Type Parameters

](https://tanstack.com/form/latest/docs/reference/type-aliases/BaseFormState#type-parameters)[

### TFormData

](https://tanstack.com/form/latest/docs/reference/type-aliases/BaseFormState#tformdata)

TFormData

[

### TOnMount

](https://tanstack.com/form/latest/docs/reference/type-aliases/BaseFormState#tonmount)

TOnMount _extends_ undefined | FormValidateOrFn<TFormData\>

[

### TOnChange

](https://tanstack.com/form/latest/docs/reference/type-aliases/BaseFormState#tonchange)

TOnChange _extends_ undefined | FormValidateOrFn<TFormData\>

[

### TOnChangeAsync

](https://tanstack.com/form/latest/docs/reference/type-aliases/BaseFormState#tonchangeasync)

TOnChangeAsync _extends_ undefined | FormAsyncValidateOrFn<TFormData\>

[

### TOnBlur

](https://tanstack.com/form/latest/docs/reference/type-aliases/BaseFormState#tonblur)

TOnBlur _extends_ undefined | FormValidateOrFn<TFormData\>

[

### TOnBlurAsync

](https://tanstack.com/form/latest/docs/reference/type-aliases/BaseFormState#tonblurasync)

TOnBlurAsync _extends_ undefined | FormAsyncValidateOrFn<TFormData\>

[

### TOnSubmit

](https://tanstack.com/form/latest/docs/reference/type-aliases/BaseFormState#tonsubmit)

TOnSubmit _extends_ undefined | FormValidateOrFn<TFormData\>

[

### TOnSubmitAsync

](https://tanstack.com/form/latest/docs/reference/type-aliases/BaseFormState#tonsubmitasync)

TOnSubmitAsync _extends_ undefined | FormAsyncValidateOrFn<TFormData\>

[

### TOnDynamic

](https://tanstack.com/form/latest/docs/reference/type-aliases/BaseFormState#tondynamic)

TOnDynamic _extends_ undefined | FormValidateOrFn<TFormData\>

[

### TOnDynamicAsync

](https://tanstack.com/form/latest/docs/reference/type-aliases/BaseFormState#tondynamicasync)

TOnDynamicAsync _extends_ undefined | FormAsyncValidateOrFn<TFormData\>

[

### TOnServer

](https://tanstack.com/form/latest/docs/reference/type-aliases/BaseFormState#tonserver)

TOnServer _extends_ undefined | FormAsyncValidateOrFn<TFormData\>

[

## Properties

](https://tanstack.com/form/latest/docs/reference/type-aliases/BaseFormState#properties)[

### \_force\_re\_eval?

](https://tanstack.com/form/latest/docs/reference/type-aliases/BaseFormState#_force_re_eval)

```vbnet
optional _force_re_eval: boolean;
```

Defined in: [packages/form-core/src/FormApi.ts:659](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L659)

@private, used to force a re-evaluation of the form state when options change

___

[

### errorMap

](https://tanstack.com/form/latest/docs/reference/type-aliases/BaseFormState#errormap)

```swift
errorMap: ValidationErrorMap<UnwrapFormValidateOrFn<TOnMount>, UnwrapFormValidateOrFn<TOnChange>, UnwrapFormAsyncValidateOrFn<TOnChangeAsync>, UnwrapFormValidateOrFn<TOnBlur>, UnwrapFormAsyncValidateOrFn<TOnBlurAsync>, UnwrapFormValidateOrFn<TOnSubmit>, UnwrapFormAsyncValidateOrFn<TOnSubmitAsync>, UnwrapFormValidateOrFn<TOnDynamic>, UnwrapFormAsyncValidateOrFn<TOnDynamicAsync>, UnwrapFormAsyncValidateOrFn<TOnServer>>;
```

Defined in: [packages/form-core/src/FormApi.ts:603](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L603)

The error map for the form itself.

___

[

### fieldMetaBase

](https://tanstack.com/form/latest/docs/reference/type-aliases/BaseFormState#fieldmetabase)

```swift
fieldMetaBase: Partial<Record<DeepKeys<TFormData>, AnyFieldMetaBase>>;
```

Defined in: [packages/form-core/src/FormApi.ts:622](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L622)

A record of field metadata for each field in the form, not including the derived properties, like errors and such

___

[

### isSubmitSuccessful

](https://tanstack.com/form/latest/docs/reference/type-aliases/BaseFormState#issubmitsuccessful)

```vbnet
isSubmitSuccessful: boolean;
```

Defined in: [packages/form-core/src/FormApi.ts:655](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L655)

A boolean indicating if the last submission was successful.

___

[

### isSubmitted

](https://tanstack.com/form/latest/docs/reference/type-aliases/BaseFormState#issubmitted)

Defined in: [packages/form-core/src/FormApi.ts:643](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L643)

A boolean indicating if the onSubmit function has completed successfully.

Goes back to false at each new submission attempt.

Note: you can use isSubmitting to check if the form is currently submitting.

___

[

### isSubmitting

](https://tanstack.com/form/latest/docs/reference/type-aliases/BaseFormState#issubmitting)

Defined in: [packages/form-core/src/FormApi.ts:635](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L635)

A boolean indicating if the form is currently in the process of being submitted after handleSubmit is called.

Goes back to false when submission completes for one of the following reasons:

-   the validation step returned errors.
-   the onSubmit function has completed.

Note: if you're running async operations in your onSubmit function make sure to await them to ensure isSubmitting is set to false only when the async operation completes.

This is useful for displaying loading indicators or disabling form inputs during submission.

___

[

### isValidating

](https://tanstack.com/form/latest/docs/reference/type-aliases/BaseFormState#isvalidating)

Defined in: [packages/form-core/src/FormApi.ts:647](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L647)

A boolean indicating if the form or any of its fields are currently validating.

___

[

### submissionAttempts

](https://tanstack.com/form/latest/docs/reference/type-aliases/BaseFormState#submissionattempts)

```css
submissionAttempts: number;
```

Defined in: [packages/form-core/src/FormApi.ts:651](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L651)

A counter for tracking the number of submission attempts.

___

[

### validationMetaMap

](https://tanstack.com/form/latest/docs/reference/type-aliases/BaseFormState#validationmetamap)

```css
validationMetaMap: Record<ValidationErrorMapKeys, ValidationMeta | undefined>;
```

Defined in: [packages/form-core/src/FormApi.ts:618](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L618)

An internal mechanism used for keeping track of validation logic in a form.

___

[

### values

](https://tanstack.com/form/latest/docs/reference/type-aliases/BaseFormState#values)

Defined in: [packages/form-core/src/FormApi.ts:599](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L599)

The current values of the form fields.