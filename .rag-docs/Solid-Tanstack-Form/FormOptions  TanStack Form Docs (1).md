[](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#interface-formoptionstformdata-tonmount-tonchange-tonchangeasync-tonblur-tonblurasync-tonsubmit-tonsubmitasync-tondynamic-tondynamicasync-tonserver-tsubmitmeta)

Defined in: [packages/form-core/src/FormApi.ts:375](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L375)

An object representing the options for a form.

[

## Extends

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#extends)

-   [BaseFormOptions](https://tanstack.com/form/latest/docs/reference/interfaces/BaseFormOptions)<TFormData, TSubmitMeta\>

[

## Type Parameters

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#type-parameters)[

### TFormData

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#tformdata)

TFormData

[

### TOnMount

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#tonmount)

TOnMount _extends_ undefined | FormValidateOrFn<TFormData\>

[

### TOnChange

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#tonchange)

TOnChange _extends_ undefined | FormValidateOrFn<TFormData\>

[

### TOnChangeAsync

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#tonchangeasync)

TOnChangeAsync _extends_ undefined | FormAsyncValidateOrFn<TFormData\>

[

### TOnBlur

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#tonblur)

TOnBlur _extends_ undefined | FormValidateOrFn<TFormData\>

[

### TOnBlurAsync

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#tonblurasync)

TOnBlurAsync _extends_ undefined | FormAsyncValidateOrFn<TFormData\>

[

### TOnSubmit

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#tonsubmit)

TOnSubmit _extends_ undefined | FormValidateOrFn<TFormData\>

[

### TOnSubmitAsync

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#tonsubmitasync)

TOnSubmitAsync _extends_ undefined | FormAsyncValidateOrFn<TFormData\>

[

### TOnDynamic

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#tondynamic)

TOnDynamic _extends_ undefined | FormValidateOrFn<TFormData\>

[

### TOnDynamicAsync

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#tondynamicasync)

TOnDynamicAsync _extends_ undefined | FormAsyncValidateOrFn<TFormData\>

[

### TOnServer

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#tonserver)

TOnServer _extends_ undefined | FormAsyncValidateOrFn<TFormData\>

[

### TSubmitMeta

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#tsubmitmeta)

TSubmitMeta = never

[

## Properties

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#properties)[

### asyncAlways?

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#asyncalways)

```vbnet
optional asyncAlways: boolean;
```

Defined in: [packages/form-core/src/FormApi.ts:414](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L414)

If true, always run async validation, even when sync validation has produced an error. Defaults to undefined.

___

[

### asyncDebounceMs?

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#asyncdebouncems)

```cpp
optional asyncDebounceMs: number;
```

Defined in: [packages/form-core/src/FormApi.ts:418](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L418)

Optional time in milliseconds if you want to introduce a delay before firing off an async action.

___

[

### canSubmitWhenInvalid?

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#cansubmitwheninvalid)

```vbnet
optional canSubmitWhenInvalid: boolean;
```

Defined in: [packages/form-core/src/FormApi.ts:422](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L422)

If true, allows the form to be submitted in an invalid state i.e. canSubmit will remain true regardless of validation errors. Defaults to undefined.

___

[

### defaultState?

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#defaultstate)

```swift
optional defaultState: Partial<FormState<TFormData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TOnServer>>;
```

Defined in: [packages/form-core/src/FormApi.ts:396](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L396)

The default state for the form.

___

[

### defaultValues?

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#defaultvalues)

```cpp
optional defaultValues: TFormData;
```

Defined in: [packages/form-core/src/FormApi.ts:365](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L365)

Set initial values for your form.

[

#### Inherited from

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#inherited-from)

[BaseFormOptions](https://tanstack.com/form/latest/docs/reference/interfaces/BaseFormOptions).[defaultValues](https://tanstack.com/form/latest/docs/reference/interfaces/BaseFormOptions#defaultvalues)

___

[

### formId?

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#formid)

Defined in: [packages/form-core/src/FormApi.ts:392](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L392)

The form name, used for devtools and identification

___

[

### listeners?

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#listeners)

```swift
optional listeners: FormListeners<TFormData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TOnServer, TSubmitMeta>;
```

Defined in: [packages/form-core/src/FormApi.ts:444](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L444)

form level listeners

___

[

### onSubmit()?

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#onsubmit)

```typescript
optional onSubmit: (props) => any;
```

Defined in: [packages/form-core/src/FormApi.ts:462](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L462)

A function to be called when the form is submitted, what should happen once the user submits a valid form returns any or a promise Promise<any>

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#parameters)[

##### props

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#props)[

###### formApi

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#formapi)

[FormApi](https://tanstack.com/form/latest/docs/reference/classes/FormApi)<TFormData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TOnServer, TSubmitMeta\>

[

###### meta

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#meta)

TSubmitMeta

[

###### value

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#value)

TFormData

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#returns)

any

___

[

### onSubmitInvalid()?

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#onsubmitinvalid)

```javascript
optional onSubmitInvalid: (props) => void;
```

Defined in: [packages/form-core/src/FormApi.ts:483](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L483)

Specify an action for scenarios where the user tries to submit an invalid form.

[

#### Parameters

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#parameters-1)[

##### props

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#props-1)[

###### formApi

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#formapi-1)

[FormApi](https://tanstack.com/form/latest/docs/reference/classes/FormApi)<TFormData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync, TOnServer, TSubmitMeta\>

[

###### meta

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#meta-1)

TSubmitMeta

[

###### value

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#value-1)

TFormData

[

#### Returns

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#returns-1)

void

___

[

### onSubmitMeta?

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#onsubmitmeta)

```cpp
optional onSubmitMeta: TSubmitMeta;
```

Defined in: [packages/form-core/src/FormApi.ts:369](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L369)

onSubmitMeta, the data passed from the handleSubmit handler, to the onSubmit function props

[

#### Inherited from

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#inherited-from-1)

[BaseFormOptions](https://tanstack.com/form/latest/docs/reference/interfaces/BaseFormOptions).[onSubmitMeta](https://tanstack.com/form/latest/docs/reference/interfaces/BaseFormOptions#onsubmitmeta)

___

[

### transform?

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#transform)

```swift
optional transform: FormTransform<NoInfer<TFormData>, NoInfer<TOnMount>, NoInfer<TOnChange>, NoInfer<TOnChangeAsync>, NoInfer<TOnBlur>, NoInfer<TOnBlurAsync>, NoInfer<TOnSubmit>, NoInfer<TOnSubmitAsync>, NoInfer<TOnDynamic>, NoInfer<TOnDynamicAsync>, NoInfer<TOnServer>, NoInfer<TSubmitMeta>>;
```

Defined in: [packages/form-core/src/FormApi.ts:501](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L501)

___

[

### validationLogic?

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#validationlogic)

```cpp
optional validationLogic: ValidationLogicFn;
```

Defined in: [packages/form-core/src/FormApi.ts:439](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L439)

___

[

### validators?

](https://tanstack.com/form/latest/docs/reference/interfaces/FormOptions#validators)

```swift
optional validators: FormValidators<TFormData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnDynamic, TOnDynamicAsync>;
```

Defined in: [packages/form-core/src/FormApi.ts:426](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L426)

A list of validators to pass to the form