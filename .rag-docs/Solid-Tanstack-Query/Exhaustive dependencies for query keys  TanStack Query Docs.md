Query keys should be seen like a dependency array to your query function: Every variable that is used inside the queryFn should be added to the query key. This makes sure that queries are cached independently and that queries are refetched automatically when the variables changes.

[

## Rule Details

](https://tanstack.com/query/latest/docs/eslint/exhaustive-deps#rule-details)

Examples of **incorrect** code for this rule:

```javascript
/* eslint "@tanstack/query/exhaustive-deps": "error" */

useQuery({
  queryKey: ['todo'],
  queryFn: () => api.getTodo(todoId),
})

const todoQueries = {
  detail: (id) => ({ queryKey: ['todo'], queryFn: () => api.getTodo(id) }),
}
```

Examples of **correct** code for this rule:

```javascript
useQuery({
  queryKey: ['todo', todoId],
  queryFn: () => api.getTodo(todoId),
})

const todoQueries = {
  detail: (id) => ({ queryKey: ['todo', id], queryFn: () => api.getTodo(id) }),
}
```

[

## When Not To Use It

](https://tanstack.com/query/latest/docs/eslint/exhaustive-deps#when-not-to-use-it)

If you don't care about the rules of the query keys, then you will not need this rule.

[

## Attributes

](https://tanstack.com/query/latest/docs/eslint/exhaustive-deps#attributes)

-   ✅ Recommended
-   🔧 Fixable