While it's not required to know the @tanstack/history API itself to use TanStack Router, it's a good idea to understand how it works. Under the hood, TanStack Router requires and uses a history abstraction to manage the routing history.

If you don't create a history instance, a browser-oriented instance of this API is created for you when the router is initialized. If you need a special history API type, You can use the @tanstack/history package to create your own:

-   createBrowserHistory: The default history type.
-   createHashHistory: A history type that uses a hash to track history.
-   createMemoryHistory: A history type that keeps the history in memory.

Once you have a history instance, you can pass it to the Router constructor:

```javascript
import { createMemoryHistory, createRouter } from '@tanstack/solid-router'

const memoryHistory = createMemoryHistory({
  initialEntries: ['/'], // Pass your initial url
})

const router = createRouter({ routeTree, history: memoryHistory })
```

[

## Browser Routing

](https://tanstack.com/router/latest/docs/framework/solid/guide/history-types#browser-routing)

The createBrowserHistory is the default history type. It uses the browser's history API to manage the browser history.

[

## Hash Routing

](https://tanstack.com/router/latest/docs/framework/solid/guide/history-types#hash-routing)

Hash routing can be helpful if your server doesn't support rewrites to index.html for HTTP requests (among other environments that don't have a server).

```javascript
import { createHashHistory, createRouter } from '@tanstack/solid-router'

const hashHistory = createHashHistory()

const router = createRouter({ routeTree, history: hashHistory })
```

[

## Memory Routing

](https://tanstack.com/router/latest/docs/framework/solid/guide/history-types#memory-routing)

Memory routing is useful in environments that are not a browser or when you do not want components to interact with the URL.

```javascript
import { createMemoryHistory, createRouter } from '@tanstack/solid-router'

const memoryHistory = createMemoryHistory({
  initialEntries: ['/'], // Pass your initial url
})

const router = createRouter({ routeTree, history: memoryHistory })
```

Refer to the [SSR Guide](https://tanstack.com/router/latest/docs/framework/solid/guide/ssr#server-history) for usage on the server for server-side rendering.