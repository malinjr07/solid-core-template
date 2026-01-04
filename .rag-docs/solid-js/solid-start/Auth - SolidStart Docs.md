Advanced

Server functions can be used to protect sensitive resources like user data.

```csharp
"use server"
async function getPrivatePosts() {  const user = await getUser()  if(!user) {    return null  // or throw an error  }
  return db.getPosts({ userId: user.id, private: true })}
```

The `getUser` function can be [implemented using sessions](https://docs.solidjs.com/solid-start/advanced/session).

___

## [Protected Routes](https://docs.solidjs.com/solid-start/advanced/auth#protected-routes)

Routes can be protected by checking the user or session object during data fetching. This example uses [Solid Router](https://docs.solidjs.com/solid-router).

```javascript
const getPrivatePosts = query(async function() {  "use server"  const user = await getUser()  if(!user) {    throw redirect("/login");  }
  return db.getPosts({ userId: user.id, private: true })})
export default function Page() {  const posts = createAsync(() => getPrivatePosts());}
```

Once the user hits this route, the router will attempt to fetch `getPrivatePosts` data. If the user is not signed in, `getPrivatePosts` will throw and the router will redirect to the login page.