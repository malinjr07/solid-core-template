## TanStackQuery

## Powerful asynchronous state management, server-state utilities and data fetching

Powerful asynchronous state management, server-state utilities and data fetching. Fetch, cache, update, and wrangle all forms of async data in your TS/JS, React, Vue, Solid, Svelte & Angular applications all without touching any "global state"

[Read the Docs](https://tanstack.com/query/latest/docs)

[](https://www.npmjs.com/org/tanstack)[](https://github.com/tanstack/query)

1,026

Contributors on GitHub

724,548

Dependents on GitHub

Just a quick look...

```javascript
import { useQuery } from '@tanstack/react-query'

function Todos() {
  const { data, isPending, error } = useQuery({
    queryKey: ['todos'],
    queryFn: () => fetch('/api/todos').then(r => r.json()),
  })

  if (isPending) return <span>Loading...</span>
  if (error) return <span>Oops!</span>

  return <ul>{data.map(t => <li key={t.id}>{t.title}</li>)}</ul>
}

export default Todos
```

[Get Started](https://tanstack.com/query/latest/docs)

### Declarative & Automatic

Writing your data fetching logic by hand is over. Tell TanStack Query where to get your data and how fresh you need it to be and the rest is automatic. It handles

caching, background updates and stale data out of the box with zero-configuration.

### Simple & Familiar

If you know how to work with promises or async/await, then you already know how to use TanStack Query. There's

no global state to manage, reducers, normalization systems or heavy configurations to understand. Simply pass a function that resolves your data (or throws an error) and the rest is history.

### Extensible

TanStack Query is configurable down to each observer instance of a query with knobs and options to fit every use-case. It comes wired up with

dedicated devtools, infinite-loading APIs, and first class mutation tools that make updating your data a breeze. Don't worry though, everything is pre-configured for success!

### No dependencies. All the Features.

With zero dependencies, TanStack Query is extremely lean given the dense feature set it provides. From weekend hobbies all the way to enterprise e-commerce systems (Yes, I'm lookin' at you Walmart! 😉), TanStack Query is the battle-hardened tool to help you succeed at the speed of your creativity.

### No dependencies. All the Features.

Backend agnostic Dedicated Devtools Auto Caching Auto Refetching Window Focus Refetching Polling/Realtime Queries Parallel Queries Dependent Queries Mutations API Automatic Garbage Collection Paginated/Cursor Queries Load-More/Infinite Scroll Queries Scroll Recovery Request Cancellation Suspense Ready! Render-as-you-fetch Prefetching Variable-length Parallel Queries Offline Support SSR Support Data Selectors

### Partners

Query You?

We're looking for

TanStack Query

Partners to join our mission! Partner with us to push the boundaries of

TanStack Query

and build amazing things together.

[Let's chat](mailto:partners@tanstack.com?subject=TanStack%20TanStack%20Query%20Partnership)

### Sponsors

### Less code, fewer edge cases.

Instead of writing reducers, caching logic, timers, retry logic, complex async/await scripting (I could keep going...), you literally write a tiny fraction of the code you normally would. You will be surprised at how little code you're writing or how much code you're deleting when you use TanStack Query. Try it out with one of the examples below!

Wow, you've come a long way!

Only one thing left to do...