This guide provides practical examples of common data-fetching tasks in SolidStart.

Here's an example showing how to create a [`query`](https://docs.solidjs.com/solid-router/reference/data-apis/query) and access its data with the [`createAsync` primitive](https://docs.solidjs.com/solid-router/reference/data-apis/create-async):

```javascript
// src/routes/index.tsximport { For } from "solid-js";import { query, createAsync } from "@solidjs/router";
const getPosts = query(async () => {  const posts = await fetch("https://my-api.com/posts");  return await posts.json();}, "posts");
export default function Page() {  const posts = createAsync(() => getPosts());  return (    <ul>      <For each={posts()}>{(post) => <li>{post.title}</li>}</For>    </ul>  );}
```

___

## [Showing loading UI](https://docs.solidjs.com/solid-start/guides/data-fetching#showing-loading-ui)

To show a loading UI during data fetching:

1.  Import [`Suspense`](https://docs.solidjs.com/reference/components/suspense) from `solid-js`.
2.  Wrap your data rendering in `<Suspense>`, and use the `fallback` prop to show a component during data fetching.

```javascript
// src/routes/index.tsximport { Suspense, For } from "solid-js";import { query, createAsync } from "@solidjs/router";
const getPosts = query(async () => {  const posts = await fetch("https://my-api.com/posts");  return await posts.json();}, "posts");
export default function Page() {  const posts = createAsync(() => getPosts());  return (    <ul>      <Suspense fallback={<div>Loading...</div>}>        <For each={posts()}>{(post) => <li>{post.title}</li>}</For>      </Suspense>    </ul>  );}
```

___

## [Handling errors](https://docs.solidjs.com/solid-start/guides/data-fetching#handling-errors)

To show a fallback UI if the data fetching fails:

1.  Import [`ErrorBoundary`](https://docs.solidjs.com/reference/components/error-boundary) from `solid-js`.
2.  Wrap the data rendering in `<ErrorBoundary>`, and use the `fallback` prop to show a component if an error occurs.

```javascript
// src/routes/index.tsximport { ErrorBoundary, Suspense, For } from "solid-js";import { query, createAsync } from "@solidjs/router";
const getPosts = query(async () => {  const posts = await fetch("https://my-api.com/posts");  return await posts.json();}, "posts");
export default function Page() {  const posts = createAsync(() => getPosts());  return (    <ul>      <ErrorBoundary fallback={<div>Something went wrong!</div>}>        <Suspense fallback={<div>Loading...</div>}>          <For each={posts()}>{(post) => <li>{post.title}</li>}</For>        </Suspense>      </ErrorBoundary>    </ul>  );}
```

___

## [Preloading data](https://docs.solidjs.com/solid-start/guides/data-fetching#preloading-data)

To preload data before a route renders:

1.  Export a `route` object with a [`preload`](https://docs.solidjs.com/solid-router/reference/preload-functions/preload) function.
2.  Run your query inside the `preload` function.
3.  Use the query as usual in your component.

```javascript
// src/routes/index.tsximport { ErrorBoundary } from "solid-js";import { query, createAsync, type RouteDefinition } from "@solidjs/router";
const getPosts = query(async () => {  const posts = await fetch("https://my-api.com/posts");  return await posts.json();}, "posts");
export const route = {  preload: () => getPosts(),} satisfies RouteDefinition;
export default function Page() {  const post = createAsync(() => getPosts());  return (    <div>      <ErrorBoundary fallback={<div>Something went wrong!</div>}>        <h1>{post().title}</h1>      </ErrorBoundary>    </div>  );}
```

___

## [Passing parameters to queries](https://docs.solidjs.com/solid-start/guides/data-fetching#passing-parameters-to-queries)

When creating a query that accepts parameters, define your query function to take any number of parameters:

```typescript
// src/routes/posts/[id]/index.tsximport { ErrorBoundary } from "solid-js";import { query, createAsync, type RouteDefinition } from "@solidjs/router";
const getPost = query(async (id: string) => {  const post = await fetch(`https://my-api.com/posts/${id}`);  return await post.json();}, "post");
export const route = {  preload: ({ params }) => getPost(params.id),} satisfies RouteDefinition;
export default function Page() {  const postId = 1;  const post = createAsync(() => getPost(postId));  return (    <div>      <ErrorBoundary fallback={<div>Something went wrong!</div>}>        <h1>{post().title}</h1>      </ErrorBoundary>    </div>  );}
```

___

## [Using a database or an ORM](https://docs.solidjs.com/solid-start/guides/data-fetching#using-a-database-or-an-orm)

To safely interact with your database or ORM in a query, use a [server function](https://docs.solidjs.com/solid-start/reference/server/use-server):

```javascript
// src/routes/index.tsximport { For, ErrorBoundary } from "solid-js";import { query, createAsync, type RouteDefinition } from "@solidjs/router";import { db } from "~/lib/db";
const getPosts = query(async () => {  "use server";  return await db.from("posts").select();}, "posts");
export const route = {  preload: () => getPosts(),} satisfies RouteDefinition;
export default function Page() {  const posts = createAsync(() => getPosts());  return (    <ul>      <ErrorBoundary fallback={<div>Something went wrong!</div>}>        <For each={posts()}>{(post) => <li>{post.title}</li>}</For>      </ErrorBoundary>    </ul>  );}
```

___

## [Fetching data on the client](https://docs.solidjs.com/solid-start/guides/data-fetching#fetching-data-on-the-client)

To fetch data only on the client, use the [`createResource`](https://docs.solidjs.com/reference/basic-reactivity/create-resource) primitive:

```javascript
// src/routes/index.tsximport { createResource, ErrorBoundary, Suspense, For } from "solid-js";
export default function Page() {  const [posts] = createResource(async () => {    const posts = await fetch("https://my-api.com/posts");    return await posts.json();  });  return (    <ul>      <ErrorBoundary fallback={<div>Something went wrong!</div>}>        <Suspense fallback={<div>Loading...</div>}>          <For each={posts()}>{(post) => <li>{post.title}</li>}</For>        </Suspense>      </ErrorBoundary>    </ul>  );}
```

See the [`createResource`](https://docs.solidjs.com/reference/basic-reactivity/create-resource) API reference for more information.