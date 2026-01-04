[

## Type Alias: FieldInfo<TFormData>

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldInfo#type-alias-fieldinfotformdata)

```python
type FieldInfo<TFormData> = object;
```

Defined in: [packages/form-core/src/FormApi.ts:545](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L545)

An object representing the field information for a specific field within the form.

[

## Type Parameters

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldInfo#type-parameters)[

### TFormData

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldInfo#tformdata)

TFormData

[

## Properties

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldInfo#properties)[

### instance

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldInfo#instance)

```sql
instance: 
  | FieldApi<TFormData, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>
  | null;
```

Defined in: [packages/form-core/src/FormApi.ts:549](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L549)

An instance of the FieldAPI.

___

[

### validationMetaMap

](https://tanstack.com/form/latest/docs/reference/type-aliases/FieldInfo#validationmetamap)

```css
validationMetaMap: Record<ValidationErrorMapKeys, ValidationMeta | undefined>;
```

Defined in: [packages/form-core/src/FormApi.ts:577](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L577)

A record of field validation internal handling.