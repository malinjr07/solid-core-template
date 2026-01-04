The MutationCache is the storage for mutations.

**Normally, you will not interact with the MutationCache directly and instead use the QueryClient.**

```javascript
import { MutationCache } from '@tanstack/react-query'

const mutationCache = new MutationCache({
  onError: (error) => {
    console.log(error)
  },
  onSuccess: (data) => {
    console.log(data)
  },
})
```

Its available methods are:

-   [getAll](https://tanstack.com/query/latest/docs/reference/MutationCache#mutationcachegetall)
-   [subscribe](https://tanstack.com/query/latest/docs/reference/MutationCache#mutationcachesubscribe)
-   [clear](https://tanstack.com/query/latest/docs/reference/MutationCache#mutationcacheclear)

**Options**

-   onError?: (error: unknown, variables: unknown, onMutateResult: unknown, mutation: Mutation, mutationFnContext: MutationFunctionContext) => Promise<unknown> | unknown
    -   Optional
    -   This function will be called if some mutation encounters an error.
    -   If you return a Promise from it, it will be awaited
-   onSuccess?: (data: unknown, variables: unknown, onMutateResult: unknown, mutation: Mutation, mutationFnContext: MutationFunctionContext) => Promise<unknown> | unknown
    -   Optional
    -   This function will be called if some mutation is successful.
    -   If you return a Promise from it, it will be awaited
-   onSettled?: (data: unknown | undefined, error: unknown | null, variables: unknown, onMutateResult: unknown, mutation: Mutation, mutationFnContext: MutationFunctionContext) => Promise<unknown> | unknown
    -   Optional
    -   This function will be called if some mutation is settled (either successful or errored).
    -   If you return a Promise from it, it will be awaited
-   onMutate?: (variables: unknown, mutation: Mutation, mutationFnContext: MutationFunctionContext) => Promise<unknown> | unknown
    -   Optional
    -   This function will be called before some mutation executes.
    -   If you return a Promise from it, it will be awaited

[

## Global callbacks

](https://tanstack.com/query/latest/docs/reference/MutationCache#global-callbacks)

The onError, onSuccess, onSettled and onMutate callbacks on the MutationCache can be used to handle these events on a global level. They are different to defaultOptions provided to the QueryClient because:

-   defaultOptions can be overridden by each Mutation - the global callbacks will **always** be called.
-   onMutate does not allow returning a result.

[

## mutationCache.getAll

](https://tanstack.com/query/latest/docs/reference/MutationCache#mutationcachegetall)

getAll returns all mutations within the cache.

> Note: This is not typically needed for most applications, but can come in handy when needing more information about a mutation in rare scenarios

```cpp
const mutations = mutationCache.getAll()
```

**Returns**

-   Mutation\[\]
    -   Mutation instances from the cache

[

## mutationCache.subscribe

](https://tanstack.com/query/latest/docs/reference/MutationCache#mutationcachesubscribe)

The subscribe method can be used to subscribe to the mutation cache as a whole and be informed of safe/known updates to the cache like mutation states changing or mutations being updated, added or removed.

```csharp
const callback = (event) => {
  console.log(event.type, event.mutation)
}

const unsubscribe = mutationCache.subscribe(callback)
```

**Options**

-   callback: (mutation?: MutationCacheNotifyEvent) => void
    -   This function will be called with the mutation cache any time it is updated.

**Returns**

-   unsubscribe: Function => void
    -   This function will unsubscribe the callback from the mutation cache.

[

## mutationCache.clear

](https://tanstack.com/query/latest/docs/reference/MutationCache#mutationcacheclear)

The clear method can be used to clear the cache entirely and start fresh.