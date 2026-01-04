The QueryCache is the storage mechanism for TanStack Query. It stores all the data, meta information and state of queries it contains.

**Normally, you will not interact with the QueryCache directly and instead use the QueryClient for a specific cache.**

```javascript
import { QueryCache } from '@tanstack/react-query'

const queryCache = new QueryCache({
  onError: (error) => {
    console.log(error)
  },
  onSuccess: (data) => {
    console.log(data)
  },
  onSettled: (data, error) => {
    console.log(data, error)
  },
})

const query = queryCache.find(['posts'])
```

Its available methods are:

-   [queryCache.find](https://tanstack.com/query/latest/docs/reference/QueryCache#querycachefind)
-   [queryCache.findAll](https://tanstack.com/query/latest/docs/reference/QueryCache#querycachefindall)
-   [queryCache.subscribe](https://tanstack.com/query/latest/docs/reference/QueryCache#querycachesubscribe)
-   [queryCache.clear](https://tanstack.com/query/latest/docs/reference/QueryCache#querycacheclear)
-   [Further reading](https://tanstack.com/query/latest/docs/reference/QueryCache#further-reading)

**Options**

-   onError?: (error: unknown, query: Query) => void
    -   Optional
    -   This function will be called if some query encounters an error.
-   onSuccess?: (data: unknown, query: Query) => void
    -   Optional
    -   This function will be called if some query is successful.
-   onSettled?: (data: unknown | undefined, error: unknown | null, query: Query) => void
    -   Optional
    -   This function will be called if some query is settled (either successful or errored).

[

## queryCache.find

](https://tanstack.com/query/latest/docs/reference/QueryCache#querycachefind)

find is a slightly more advanced synchronous method that can be used to get an existing query instance from the cache. This instance not only contains **all** the state for the query, but all of the instances, and underlying guts of the query as well. If the query does not exist, undefined will be returned.

> Note: This is not typically needed for most applications, but can come in handy when needing more information about a query in rare scenarios (eg. Looking at the query.state.dataUpdatedAt timestamp to decide whether a query is fresh enough to be used as an initial value)

```cpp
const query = queryCache.find(queryKey)
```

**Options**

-   filters?: QueryFilters: [Query Filters](https://tanstack.com/query/latest/docs/framework/react/guides/filters#query-filters)

**Returns**

-   Query
    -   The query instance from the cache

[

## queryCache.findAll

](https://tanstack.com/query/latest/docs/reference/QueryCache#querycachefindall)

findAll is even more advanced synchronous method that can be used to get existing query instances from the cache that partially match query key. If queries do not exist, empty array will be returned.

> Note: This is not typically needed for most applications, but can come in handy when needing more information about a query in rare scenarios

```cpp
const queries = queryCache.findAll(queryKey)
```

**Options**

-   queryKey?: QueryKey: [Query Keys](https://tanstack.com/query/latest/docs/framework/react/guides/query-keys)
-   filters?: QueryFilters: [Query Filters](https://tanstack.com/query/latest/docs/framework/react/guides/filters#query-filters)

**Returns**

-   Query\[\]
    -   Query instances from the cache

[

## queryCache.subscribe

](https://tanstack.com/query/latest/docs/reference/QueryCache#querycachesubscribe)

The subscribe method can be used to subscribe to the query cache as a whole and be informed of safe/known updates to the cache like query states changing or queries being updated, added or removed

```csharp
const callback = (event) => {
  console.log(event.type, event.query)
}

const unsubscribe = queryCache.subscribe(callback)
```

**Options**

-   callback: (event: QueryCacheNotifyEvent) => void
    -   This function will be called with the query cache any time it is updated via its tracked update mechanisms (eg, query.setState, queryClient.removeQueries, etc). Out of scope mutations to the cache are not encouraged and will not fire subscription callbacks

**Returns**

-   unsubscribe: Function => void
    -   This function will unsubscribe the callback from the query cache.

[

## queryCache.clear

](https://tanstack.com/query/latest/docs/reference/QueryCache#querycacheclear)

The clear method can be used to clear the cache entirely and start fresh.

[

## Further reading

](https://tanstack.com/query/latest/docs/reference/QueryCache#further-reading)

To get a better understanding how the QueryCache works internally, have a look at [the Inside React Query article by TkDodo](https://tkdodo.eu/blog/inside-react-query).