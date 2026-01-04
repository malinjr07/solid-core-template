TanStack Router is designed to run loaders in parallel and wait for all of them to resolve before rendering the next route. This is great most of the time, but occasionally, you may want to show the user something sooner while the rest of the data loads in the background.

Deferred data loading is a pattern that allows the router to render the next location's critical data/markup while slower, non-critical route data is resolved in the background. This process works on both the client and server (via streaming) and is a great way to improve the perceived performance of your application.

If you are using a library like [TanStack Query](https://tanstack.com/query/latest) or any other data fetching library, then deferred data loading works a bit differently. Skip ahead to the [Deferred Data Loading with External Libraries](https://tanstack.com/router/latest/docs/framework/solid/guide/deferred-data-loading#deferred-data-loading-with-external-libraries) section for more information.

[

## Deferred Data Loading with Await

](https://tanstack.com/router/latest/docs/framework/solid/guide/deferred-data-loading#deferred-data-loading-with-await)

To defer slow or non-critical data, return an **unawaited/unresolved** promise anywhere in your loader response:

```javascript
// src/routes/posts.$postId.tsx
import { createFileRoute, defer } from '@tanstack/solid-router'

export const Route = createFileRoute('/posts/$postId')({
  loader: async () => {
    // Fetch some slower data, but do not await it
    const slowDataPromise = fetchSlowData()

    // Fetch and await some data that resolves quickly
    const fastData = await fetchFastData()

    return {
      fastData,
      deferredSlowData: slowDataPromise,
    }
  },
})
```

As soon as any awaited promises are resolved, the next route will begin rendering while the deferred promises continue to resolve.

In the component, deferred promises can be resolved and utilized using the Await component:

```javascript
// src/routes/posts.$postId.tsx
import { createFileRoute, Await } from '@tanstack/solid-router'

export const Route = createFileRoute('/posts/$postId')({
  // ...
  component: PostIdComponent,
})

function PostIdComponent() {
  const { deferredSlowData, fastData } = Route.useLoaderData()

  // do something with fastData

  return (
    <Await promise={deferredSlowData} fallback={<div>Loading...</div>}>
      {(data) => {
        return <div>{data}</div>
      }}
    </Await>
  )
}
```

If your component is code-split, you can use the [getRouteApi function](https://tanstack.com/router/latest/docs/framework/solid/guide/code-splitting#manually-accessing-route-apis-in-other-files-with-the-getrouteapi-helper) to avoid having to import the Route configuration to get access to the typed useLoaderData() hook.

The Await component resolves the promise by triggering the nearest suspense boundary until it is resolved, after which it renders the component's children as a function with the resolved data.

If the promise is rejected, the Await component will throw the serialized error, which can be caught by the nearest error boundary.

[

## Deferred Data Loading with External libraries

](https://tanstack.com/router/latest/docs/framework/solid/guide/deferred-data-loading#deferred-data-loading-with-external-libraries)

When your strategy for fetching information for the route relies on [External Data Loading](https://tanstack.com/router/latest/docs/framework/solid/guide/external-data-loading) with an external library like [TanStack Query](https://tanstack.com/query), deferred data loading works a bit differently, as the library handles the data fetching and caching for you outside of TanStack Router.

So, instead of using defer and Await, you'll instead want to use the Route's loader to kick off the data fetching and then use the library's hooks to access the data in your components.

```javascript
// src/routes/posts.$postId.tsx
import { createFileRoute } from '@tanstack/solid-router'
import { slowDataOptions, fastDataOptions } from '~/api/query-options'

export const Route = createFileRoute('/posts/$postId')({
  loader: async ({ context: { queryClient } }) => {
    // Kick off the fetching of some slower data, but do not await it
    queryClient.prefetchQuery(slowDataOptions())

    // Fetch and await some data that resolves quickly
    await queryClient.ensureQueryData(fastDataOptions())
  },
})
```

Then in your component, you can use the library's hooks to access the data:

```javascript
// src/routes/posts.$postId.tsx
import { createFileRoute } from '@tanstack/solid-router'
import { useSuspenseQuery } from '@tanstack/solid-query'
import { slowDataOptions, fastDataOptions } from '~/api/query-options'

export const Route = createFileRoute('/posts/$postId')({
  // ...
  component: PostIdComponent,
})

function PostIdComponent() {
  const fastData = useSuspenseQuery(fastDataOptions())

  // do something with fastData

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SlowDataComponent />
    </Suspense>
  )
}

function SlowDataComponent() {
  const data = useSuspenseQuery(slowDataOptions())

  return <div>{data}</div>
}
```

[

## Caching and Invalidation

](https://tanstack.com/router/latest/docs/framework/solid/guide/deferred-data-loading#caching-and-invalidation)

Streamed promises follow the same lifecycle as the loader data they are associated with. They can even be preloaded!