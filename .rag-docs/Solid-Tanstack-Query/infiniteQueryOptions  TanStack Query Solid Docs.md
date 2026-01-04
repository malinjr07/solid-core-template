tsx

```scss
infiniteQueryOptions({
  queryKey,
  ...options,
})
```

**Options**

You can generally pass everything to infiniteQueryOptions that you can also pass to [useInfiniteQuery](https://tanstack.com/query/latest/docs/framework/solid/reference/useInfiniteQuery). Some options will have no effect when then forwarded to a function like queryClient.prefetchInfiniteQuery, but TypeScript will still be fine with those excess properties.

-   queryKey: QueryKey
    -   **Required**
    -   The query key to generate options for.

See [useInfiniteQuery](https://tanstack.com/query/latest/docs/framework/solid/reference/useInfiniteQuery) for more information.