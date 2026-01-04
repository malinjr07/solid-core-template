[

## Function: mergeForm()

](https://tanstack.com/form/latest/docs/reference/functions/mergeForm#function-mergeform)

```swift
function mergeForm<TFormData>(baseForm, state): FormApi<NoInfer<TFormData>, any, any, any, any, any, any, any, any, any, any, any>;
```

Defined in: [packages/form-core/src/mergeForm.ts:73](https://github.com/TanStack/form/blob/main/packages/form-core/src/mergeForm.ts#L73)

[

## Type Parameters

](https://tanstack.com/form/latest/docs/reference/functions/mergeForm#type-parameters)[

### TFormData

](https://tanstack.com/form/latest/docs/reference/functions/mergeForm#tformdata)

TFormData

[

## Parameters

](https://tanstack.com/form/latest/docs/reference/functions/mergeForm#parameters)[

### baseForm

](https://tanstack.com/form/latest/docs/reference/functions/mergeForm#baseform)

[FormApi](https://tanstack.com/form/latest/docs/reference/classes/FormApi)<NoInfer<TFormData\>, any, any, any, any, any, any, any, any, any, any, any\>

[

### state

](https://tanstack.com/form/latest/docs/reference/functions/mergeForm#state)

Partial<[FormApi](https://tanstack.com/form/latest/docs/reference/classes/FormApi)<TFormData, any, any, any, any, any, any, any, any, any, any, any\>\["state"\]>

[

## Returns

](https://tanstack.com/form/latest/docs/reference/functions/mergeForm#returns)

[FormApi](https://tanstack.com/form/latest/docs/reference/classes/FormApi)<NoInfer<TFormData\>, any, any, any, any, any, any, any, any, any, any, any\>