This guide provides practical examples of using actions to mutate data in SolidStart.

___

## [Handling form submission](https://docs.solidjs.com/solid-start/guides/data-mutation#handling-form-submission)

To handle [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) submissions with an action:

1.  Ensure the action has a unique name. See the [Action API reference](https://docs.solidjs.com/solid-router/reference/data-apis/action#notes-of-form-implementation-and-ssr) for more information.
2.  Pass the action to the `<form>` element using the `action` prop.
3.  Ensure the `<form>` element uses the `post` method for submission.
4.  Use the [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData) object in the action to extract field data using the native `FormData` methods.

```javascript
// src/routes/index.tsximport { action } from "@solidjs/router";
const addPost = action(async (formData: FormData) => {  const title = formData.get("title") as string;  await fetch("https://my-api.com/posts", {    method: "POST",    body: JSON.stringify({ title }),  });}, "addPost");
export default function Page() {  return (    <form action={addPost} method="post">      <input name="title" />      <button>Add Post</button>    </form>  );}
```

___

## [Passing additional arguments](https://docs.solidjs.com/solid-start/guides/data-mutation#passing-additional-arguments)

To pass additional arguments to your action, use the `with` method:

```typescript
// src/routes/index.tsximport { action } from "@solidjs/router";
const addPost = action(async (userId: number, formData: FormData) => {  const title = formData.get("title") as string;  await fetch("https://my-api.com/posts", {    method: "POST",    body: JSON.stringify({ userId, title }),  });}, "addPost");
export default function Page() {  const userId = 1;  return (    <form action={addPost.with(userId)} method="post">      <input name="title" />      <button>Add Post</button>    </form>  );}
```

___

## [Showing pending UI](https://docs.solidjs.com/solid-start/guides/data-mutation#showing-pending-ui)

To display a pending UI during action execution:

1.  Import [`useSubmission`](https://docs.solidjs.com/solid-router/reference/data-apis/use-submission) from `@solidjs/router`.
2.  Call `useSubmission` with your action, and use the returned `pending` property to display pending UI.

```javascript
// src/routes/index.tsximport { action, useSubmission } from "@solidjs/router";
const addPost = action(async (formData: FormData) => {  const title = formData.get("title") as string;  await fetch("https://my-api.com/posts", {    method: "POST",    body: JSON.stringify({ title }),  });}, "addPost");
export default function Page() {  const submission = useSubmission(addPost);  return (    <form action={addPost} method="post">      <input name="title" />      <button disabled={submission.pending}>        {submission.pending ? "Adding..." : "Add Post"}      </button>    </form>  );}
```

___

## [Handling errors](https://docs.solidjs.com/solid-start/guides/data-mutation#handling-errors)

To handle errors that occur within an action:

1.  Import [`useSubmission`](https://docs.solidjs.com/solid-router/reference/data-apis/use-submission) from `@solidjs/router`.
2.  Call `useSubmission` with your action, and use the returned `error` property to handle the error.

```javascript
// src/routes/index.tsximport { Show } from "solid-js";import { action, useSubmission } from "@solidjs/router";
const addPost = action(async (formData: FormData) => {  const title = formData.get("title") as string;  await fetch("https://my-api.com/posts", {    method: "POST",    body: JSON.stringify({ title }),  });}, "addPost");
export default function Page() {  const submission = useSubmission(addPost);  return (    <form action={addPost} method="post">      <Show when={submission.error}>        <p>{submission.error.message}</p>      </Show>      <input name="title" />      <button>Add Post</button>    </form>  );}
```

___

## [Validating form fields](https://docs.solidjs.com/solid-start/guides/data-mutation#validating-form-fields)

To validate form fields in an action:

1.  Add validation logic in your action and return validation errors if the data is invalid.
2.  Import [`useSubmission`](https://docs.solidjs.com/solid-router/reference/data-apis/use-submission) from `@solidjs/router`.
3.  Call `useSubmission` with your action, and use the returned `result` property to handle the errors.

```javascript
// src/routes/index.tsximport { Show } from "solid-js";import { action, useSubmission } from "@solidjs/router";
const addPost = action(async (formData: FormData) => {  const title = formData.get("title") as string;  if (!title || title.length < 2) {    return {      error: "Title must be at least 2 characters",    };  }  await fetch("https://my-api.com/posts", {    method: "POST",    body: JSON.stringify({ title }),  });}, "addPost");
export default function Page() {  const submission = useSubmission(addPost);  return (    <form action={addPost} method="post">      <input name="title" />      <Show when={submission.result?.error}>        <p>{submission.result?.error}</p>      </Show>      <button>Add Post</button>    </form>  );}
```

___

## [Showing optimistic UI](https://docs.solidjs.com/solid-start/guides/data-mutation#showing-optimistic-ui)

To update the UI before the server responds:

1.  Import [`useSubmission`](https://docs.solidjs.com/solid-router/reference/data-apis/use-submission) from `@solidjs/router`.
2.  Call `useSubmission` with your action, and use the returned `pending` and `input` properties to display optimistic UI.

```javascript
// src/routes/index.tsximport { For, Show } from "solid-js";import { action, useSubmission, query, createAsync } from "@solidjs/router";
const getPosts = query(async () => {  const posts = await fetch("https://my-api.com/blog");  return await posts.json();}, "posts");
const addPost = action(async (formData: FormData) => {  const title = formData.get("title");  await fetch("https://my-api.com/posts", {    method: "POST",    body: JSON.stringify({ title }),  });}, "addPost");
export default function Page() {  const posts = createAsync(() => getPosts());  const submission = useSubmission(addPost);  return (    <main>      <form action={addPost} method="post">        <input name="title" />        <button>Add Post</button>      </form>      <ul>        <For each={posts()}>{(post) => <li>{post.title}</li>}</For>        <Show when={submission.pending}>          {submission.input?.[0]?.get("title")?.toString()}        </Show>      </ul>    </main>  );}
```

___

## [Redirecting](https://docs.solidjs.com/solid-start/guides/data-mutation#redirecting)

To redirect users to a different route within an action:

1.  Import [`redirect`](https://docs.solidjs.com/solid-router/reference/response-helpers/redirect) from `@solidjs/router`.
2.  Call `redirect` with the route you want to navigate to, and throw its response.

```javascript
// src/routes/index.tsximport { action, redirect } from "@solidjs/router";
const addPost = action(async (formData: FormData) => {  const title = formData.get("title") as string;  const response = await fetch("https://my-api.com/posts", {    method: "POST",    body: JSON.stringify({ title }),  });  const post = await response.json();  throw redirect(`/posts/${post.id}`);}, "addPost");
export default function Page() {  return (    <form action={addPost} method="post">      <input name="title" />      <button>Add Post</button>    </form>  );}
```

___

## [Using a database or an ORM](https://docs.solidjs.com/solid-start/guides/data-mutation#using-a-database-or-an-orm)

To safely interact with your database or ORM in an action, ensure it's server-only by adding [`"use server"`](https://docs.solidjs.com/solid-start/reference/server/use-server) as the first line of your action:

```javascript
// src/routes/index.tsximport { action } from "@solidjs/router";import { db } from "~/lib/db";
const addPost = action(async (formData: FormData) => {  "use server";  const title = formData.get("title") as string;  await db.insert("posts").values({ title });}, "addPost");
export default function Page() {  return (    <form action={addPost} method="post">      <input name="title" />      <button>Add Post</button>    </form>  );}
```

___

## [Triggering an action programmatically](https://docs.solidjs.com/solid-start/guides/data-mutation#triggering-an-action-programmatically)

To programmatically trigger an action:

1.  Import [`useAction`](https://docs.solidjs.com/solid-router/reference/data-apis/use-action) from `@solidjs/router`.
2.  Call `useAction` with your action, and use the returned function to trigger the action.

```javascript
// src/routes/index.tsximport { createSignal } from "solid-js";import { action, useAction } from "@solidjs/router";
const addPost = action(async (title: string) => {  await fetch("https://my-api.com/posts", {    method: "POST",    body: JSON.stringify({ title }),  });}, "addPost");
export default function Page() {  const [title, setTitle] = createSignal("");  const addPostAction = useAction(addPost);  return (    <div>      <input value={title()} onInput={(e) => setTitle(e.target.value)} />      <button onClick={() => addPostAction(title())}>Add Post</button>    </div>  );}
```