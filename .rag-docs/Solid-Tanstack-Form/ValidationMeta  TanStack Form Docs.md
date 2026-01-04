[

## Type Alias: ValidationMeta

](https://tanstack.com/form/latest/docs/reference/type-aliases/ValidationMeta#type-alias-validationmeta)

ts

```python
type ValidationMeta = object;
```

Defined in: [packages/form-core/src/FormApi.ts:535](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L535)

An object representing the validation metadata for a field. Not intended for public usage.

[

## Properties

](https://tanstack.com/form/latest/docs/reference/type-aliases/ValidationMeta#properties)[

### lastAbortController

](https://tanstack.com/form/latest/docs/reference/type-aliases/ValidationMeta#lastabortcontroller)

ts

```css
lastAbortController: AbortController;
```

Defined in: [packages/form-core/src/FormApi.ts:539](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L539)

An abort controller stored in memory to cancel previous async validation attempts.