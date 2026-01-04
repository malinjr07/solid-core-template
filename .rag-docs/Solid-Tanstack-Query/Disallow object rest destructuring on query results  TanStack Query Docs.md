Use object rest destructuring on query results automatically subscribes to every field of the query result, which may cause unnecessary re-renders. This makes sure that you only subscribe to the fields that you actually need.

[

## Rule Details

](https://tanstack.com/query/latest/docs/eslint/no-rest-destructuring#rule-details)

Examples of **incorrect** code for this rule:

```php
/* eslint "@tanstack/query/no-rest-destructuring": "warn" */

const useTodos = () => {
  const { data: todos, ...rest } = useQuery({
    queryKey: ['todos'],
    queryFn: () => api.getTodos(),
  })
  return { todos, ...rest }
}
```

Examples of **correct** code for this rule:

```php
const todosQuery = useQuery({
  queryKey: ['todos'],
  queryFn: () => api.getTodos(),
})

// normal object destructuring is fine
const { data: todos } = todosQuery
```

[

## When Not To Use It

](https://tanstack.com/query/latest/docs/eslint/no-rest-destructuring#when-not-to-use-it)

If you set the notifyOnChangeProps options manually, you can disable this rule. Since you are not using tracked queries, you are responsible for specifying which props should trigger a re-render.

[

## Attributes

](https://tanstack.com/query/latest/docs/eslint/no-rest-destructuring#attributes)

-   ✅ Recommended
-   🔧 Fixable