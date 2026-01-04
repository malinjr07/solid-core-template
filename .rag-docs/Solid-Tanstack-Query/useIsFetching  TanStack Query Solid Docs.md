useIsFetching is an optional hook that returns the number of the queries that your application is loading or fetching in the background (useful for app-wide loading indicators).

```javascript
import { useIsFetching } from '@tanstack/solid-query'
// How many queries are fetching?
const isFetching = useIsFetching()
// How many queries matching the posts prefix are fetching?
const isFetchingPosts = useIsFetching({ queryKey: ['posts'] })
```

**Options**

-   filters?: QueryFilters: [Query Filters](https://tanstack.com/query/latest/docs/framework/solid/guides/filters#query-filters)
-   queryClient?: QueryClient
    -   Use this to use a custom QueryClient. Otherwise, the one from the nearest context will be used.

**Returns**

-   isFetching: number
    -   Will be the number of the queries that your application is currently loading or fetching in the background.