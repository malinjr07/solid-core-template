```scss
queryOptions({
  queryKey,
  ...options,
})
```

**Options**

You can generally pass everything to queryOptions that you can also pass to [useQuery](https://tanstack.com/query/latest/docs/framework/solid/reference/useQuery). Some options will have no effect when then forwarded to a function like queryClient.prefetchQuery, but TypeScript will still be fine with those excess properties.

-   queryKey: QueryKey
    -   **Required**
    -   The query key to generate options for.
-   experimental\_prefetchInRender?: boolean
    -   Optional
    -   Defaults to false
    -   When set to true, queries will be prefetched during render, which can be useful for certain optimization scenarios
    -   Needs to be turned on for the experimental useQuery().promise functionality

[

## Further reading

](https://tanstack.com/query/latest/docs/framework/solid/reference/queryOptions#further-reading)

To learn more about QueryOptions, have a look at [this article by TkDodo The Query Options API](https://tkdodo.eu/blog/the-query-options-api).