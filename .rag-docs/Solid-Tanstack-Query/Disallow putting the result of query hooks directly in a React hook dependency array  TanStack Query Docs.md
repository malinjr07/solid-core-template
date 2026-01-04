The object returned from the following query hooks is **not** referentially stable:

-   useQuery
-   useSuspenseQuery
-   useQueries
-   useSuspenseQueries
-   useInfiniteQuery
-   useSuspenseInfiniteQuery
-   useMutation

The object returned from those hooks should **not** be put directly into the dependency array of a React hook (e.g. useEffect, useMemo, useCallback). Instead, destructure the return value of the query hook and pass the destructured values into the dependency array of the React hook.

[

## Rule Details

](https://tanstack.com/query/latest/docs/eslint/no-unstable-deps#rule-details)

Examples of **incorrect** code for this rule:

```javascript
/* eslint "@tanstack/query/no-unstable-deps": "warn" */
import { useCallback } from 'React'
import { useMutation } from '@tanstack/react-query'

function Component() {
  const mutation = useMutation({ mutationFn: (value: string) => value })
  const callback = useCallback(() => {
    mutation.mutate('hello')
  }, [mutation])
  return null
}
```

Examples of **correct** code for this rule:

```javascript
/* eslint "@tanstack/query/no-unstable-deps": "warn" */
import { useCallback } from 'React'
import { useMutation } from '@tanstack/react-query'

function Component() {
  const { mutate } = useMutation({ mutationFn: (value: string) => value })
  const callback = useCallback(() => {
    mutate('hello')
  }, [mutate])
  return null
}
```

[

## Attributes

](https://tanstack.com/query/latest/docs/eslint/no-unstable-deps#attributes)

-   ✅ Recommended
-   🔧 Fixable