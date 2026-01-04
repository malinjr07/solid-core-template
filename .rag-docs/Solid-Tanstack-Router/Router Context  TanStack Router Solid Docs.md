TanStack Router's router context is a very powerful tool that can be used for dependency injection among many other things. Aptly named, the router context is passed through the router and down through each matching route. At each route in the hierarchy, the context can be modified or added to. Here's a few ways you might use the router context practically:

-   Dependency Injection
    -   You can supply dependencies (e.g. a loader function, a data fetching client, a mutation service) which the route and all child routes can access and use without importing or creating directly.
-   Breadcrumbs
    -   While the main context object for each route is merged as it descends, each route's unique context is also stored making it possible to attach breadcrumbs or methods to each route's context.
-   Dynamic meta tag management
    -   You can attach meta tags to each route's context and then use a meta tag manager to dynamically update the meta tags on the page as the user navigates the site.

These are just suggested uses of the router context. You can use it for whatever you want!

[

## Typed Router Context

](https://tanstack.com/router/latest/docs/framework/solid/guide/router-context#typed-router-context)

Like everything else, the root router context is strictly typed. This type can be augmented via any route's beforeLoad option as it is merged down the route match tree. To constrain the type of the root router context, you must use the createRootRouteWithContext<YourContextTypeHere>()(routeOptions) function to create a new router context instead of the createRootRoute() function to create your root route. Here's an example:

```kotlin
import {
  createRootRouteWithContext,
  createRouter,
} from '@tanstack/solid-router'

interface MyRouterContext {
  user: User
}

// Use the routerContext to create your root route
const rootRoute = createRootRouteWithContext<MyRouterContext>()({
  component: App,
})

const routeTree = rootRoute.addChildren([
  // ...
])

// Use the routerContext to create your router
const router = createRouter({
  routeTree,
})
```

MyRouterContext only needs to contain content that will be passed directly to createRouter below. All other context added in beforeLoad will be inferred.

[

## Passing the initial Router Context

](https://tanstack.com/router/latest/docs/framework/solid/guide/router-context#passing-the-initial-router-context)

The router context is passed to the router at instantiation time. You can pass the initial router context to the router via the context option:

If your context has any required properties, you will see a TypeScript error if you don't pass them in the initial router context. If all of your context properties are optional, you will not see a TypeScript error and passing the context will be optional. If you don't pass a router context, it defaults to {}.

```php
import { createRouter } from '@tanstack/solid-router'

// Use the routerContext you created to create your router
const router = createRouter({
  routeTree,
  context: {
    user: {
      id: '123',
      name: 'John Doe',
    },
  },
})
```

[

### Invalidating the Router Context

](https://tanstack.com/router/latest/docs/framework/solid/guide/router-context#invalidating-the-router-context)

If you need to invalidate the context state you are passing into the router, you can call the invalidate method to tell the router to recompute the context. This is useful when you need to update the context state and have the router recompute the context for all routes.

```javascript
function useAuth() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
      router.invalidate()
    })

    return unsubscribe
  }, [])

  return user
}
```

[

## Using the Router Context

](https://tanstack.com/router/latest/docs/framework/solid/guide/router-context#using-the-router-context)

Once you have defined the router context type, you can use it in your route definitions:

```javascript
// src/routes/todos.tsx
export const Route = createFileRoute('/todos')({
  component: Todos,
  loader: ({ context }) => fetchTodosByUserId(context.user.id),
})
```

You can even inject data fetching and mutation implementations themselves! In fact, this is highly recommended 😜

Let's try this with a simple function to fetch some todos:

```javascript
const fetchTodosByUserId = async ({ userId }) => {
  const response = await fetch(`/api/todos?userId=${userId}`)
  const data = await response.json()
  return data
}

const router = createRouter({
  routeTree: rootRoute,
  context: {
    userId: '123',
    fetchTodosByUserId,
  },
})
```

Then, in your route:

```javascript
// src/routes/todos.tsx
export const Route = createFileRoute('/todos')({
  component: Todos,
  loader: ({ context }) => context.fetchTodosByUserId(context.userId),
})
```

[

### How about an external data fetching library?

](https://tanstack.com/router/latest/docs/framework/solid/guide/router-context#how-about-an-external-data-fetching-library)

```php
import {
  createRootRouteWithContext,
  createRouter,
} from '@tanstack/solid-router'

interface MyRouterContext {
  queryClient: QueryClient
}

const rootRoute = createRootRouteWithContext<MyRouterContext>()({
  component: App,
})

const queryClient = new QueryClient()

const router = createRouter({
  routeTree: rootRoute,
  context: {
    queryClient,
  },
})
```

Then, in your route:

```php
// src/routes/todos.tsx
export const Route = createFileRoute('/todos')({
  component: Todos,
  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData({
      queryKey: ['todos', { userId: user.id }],
      queryFn: fetchTodos,
    })
  },
})
```

[

## How about using React Context/Hooks?

](https://tanstack.com/router/latest/docs/framework/solid/guide/router-context#how-about-using-react-contexthooks)

When trying to use React Context or Hooks in your route's beforeLoad or loader functions, it's important to remember React's [Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks). You can't use hooks in a non-React function, so you can't use hooks in your beforeLoad or loader functions.

So, how do we use React Context or Hooks in our route's beforeLoad or loader functions? We can use the router context to pass down the React Context or Hooks to our route's beforeLoad or loader functions.

Let's look at the setup for an example, where we pass down a useNetworkStrength hook to our route's loader function:

-   src/routes/\_\_root.tsx

```typescript
// First, make sure the context for the root route is typed
import { createRootRouteWithContext } from '@tanstack/solid-router'
import { useNetworkStrength } from '@/hooks/useNetworkStrength'

interface MyRouterContext {
  networkStrength: ReturnType<typeof useNetworkStrength>
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: App,
})
```

In this example, we'd instantiate the hook before rendering the router using the <RouterProvider />. This way, the hook would be called in React-land, therefore adhering to the Rules of Hooks.

-   src/router.tsx

```javascript
import { createRouter } from '@tanstack/solid-router'

import { routeTree } from './routeTree.gen'

export const router = createRouter({
  routeTree,
  context: {
    networkStrength: undefined!, // We'll set this in React-land
  },
})
```

-   src/main.tsx

```javascript
import { RouterProvider } from '@tanstack/solid-router'
import { router } from './router'

import { useNetworkStrength } from '@/hooks/useNetworkStrength'

function App() {
  const networkStrength = useNetworkStrength()
  // Inject the returned value from the hook into the router context
  return <RouterProvider router={router} context={{ networkStrength }} />
}

// ...
```

So, now in our route's loader function, we can access the networkStrength hook from the router context:

-   src/routes/posts.tsx

```javascript
import { createFileRoute } from '@tanstack/solid-router'

export const Route = createFileRoute('/posts')({
  component: Posts,
  loader: ({ context }) => {
    if (context.networkStrength === 'STRONG') {
      // Do something
    }
  },
})
```

[

## Modifying the Router Context

](https://tanstack.com/router/latest/docs/framework/solid/guide/router-context#modifying-the-router-context)

The router context is passed down the route tree and is merged at each route. This means that you can modify the context at each route and the modifications will be available to all child routes. Here's an example:

-   src/routes/\_\_root.tsx

```typescript
import { createRootRouteWithContext } from '@tanstack/solid-router'

interface MyRouterContext {
  foo: boolean
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: App,
})
```

-   src/router.tsx

```javascript
import { createRouter } from '@tanstack/solid-router'

import { routeTree } from './routeTree.gen'

const router = createRouter({
  routeTree,
  context: {
    foo: true,
  },
})
```

-   src/routes/todos.tsx

```javascript
import { createFileRoute } from '@tanstack/solid-router'

export const Route = createFileRoute('/todos')({
  component: Todos,
  beforeLoad: () => {
    return {
      bar: true,
    }
  },
  loader: ({ context }) => {
    context.foo // true
    context.bar // true
  },
})
```

[

## Processing Accumulated Route Context

](https://tanstack.com/router/latest/docs/framework/solid/guide/router-context#processing-accumulated-route-context)

Context, especially the isolated route context objects, make it trivial to accumulate and process the route context objects for all matched routes. Here's an example where we use all of the matched route contexts to generate a breadcrumb trail:

```javascript
// src/routes/__root.tsx
export const Route = createRootRoute({
  component: () => {
    const matches = useRouterState({ select: (s) => s.matches })

    const breadcrumbs = matches
      .filter((match) => match.context.getTitle)
      .map(({ pathname, context }) => {
        return {
          title: context.getTitle(),
          path: pathname,
        }
      })

    // ...
  },
})
```

Using that same route context, we could also generate a title tag for our page's <head>:

```javascript
// src/routes/__root.tsx
export const Route = createRootRoute({
  component: () => {
    const matches = useRouterState({ select: (s) => s.matches })

    const matchWithTitle = [...matches]
      .reverse()
      .find((d) => d.context.getTitle)

    const title = matchWithTitle?.context.getTitle() || 'My App'

    return (
      <html>
        <head>
          <title>{title}</title>
        </head>
        <body>{/* ... */}</body>
      </html>
    )
  },
})
```