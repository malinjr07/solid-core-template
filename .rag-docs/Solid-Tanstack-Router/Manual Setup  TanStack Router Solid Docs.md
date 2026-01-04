To set up TanStack Router manually in a React project, follow the steps below. This gives you a bare minimum setup to get going with TanStack Router using both file-based route generation and code-based route configuration:

[

## Using File-Based Route Generation

](https://tanstack.com/router/latest/docs/framework/solid/installation/manual#using-file-based-route-generation)[

#### Install TanStack Router, Vite Plugin, and the Router Devtools

](https://tanstack.com/router/latest/docs/framework/solid/installation/manual#install-tanstack-router-vite-plugin-and-the-router-devtools)

```sql
npm install @tanstack/solid-router @tanstack/solid-router-devtools
npm install -D @tanstack/router-plugin
# or
pnpm add @tanstack/solid-router @tanstack/solid-router-devtools
pnpm add -D @tanstack/router-plugin
# or
yarn add @tanstack/solid-router @tanstack/solid-router-devtools
yarn add -D @tanstack/router-plugin
# or
bun add @tanstack/solid-router @tanstack/solid-router-devtools
bun add -D @tanstack/router-plugin
# or
deno add npm:@tanstack/solid-router npm:@tanstack/router-plugin npm:@tanstack/solid-router-devtools
```

[

#### Configure the Vite Plugin

](https://tanstack.com/router/latest/docs/framework/solid/installation/manual#configure-the-vite-plugin)

```javascript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Please make sure that '@tanstack/router-plugin' is passed before '@vitejs/plugin-react'
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    // ...,
  ],
})
```

If you are not using Vite, or any of the supported bundlers, you can check out the [TanStack Router CLI](https://tanstack.com/router/latest/docs/framework/solid/installation/with-router-cli) guide for more info.

Create the following files:

-   src/routes/\_\_root.tsx (with two '\_' characters)
-   src/routes/index.tsx
-   src/routes/about.tsx
-   src/main.tsx

[

#### src/routes/\_\_root.tsx

](https://tanstack.com/router/latest/docs/framework/solid/installation/manual#srcroutes__roottsx)

```javascript
import { createRootRoute, Link, Outlet } from '@tanstack/solid-router'
import { TanStackRouterDevtools } from '@tanstack/solid-router-devtools'

const RootLayout = () => (
  <>
    <div className="p-2 flex gap-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{' '}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
    </div>
    <hr />
    <Outlet />
    <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({ component: RootLayout })
```

[

#### src/routes/index.tsx

](https://tanstack.com/router/latest/docs/framework/solid/installation/manual#srcroutesindextsx)

```javascript
import { createFileRoute } from '@tanstack/solid-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  )
}
```

[

#### src/routes/about.tsx

](https://tanstack.com/router/latest/docs/framework/solid/installation/manual#srcroutesabouttsx)

```javascript
import { createFileRoute } from '@tanstack/solid-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return <div className="p-2">Hello from About!</div>
}
```

[

#### src/main.tsx

](https://tanstack.com/router/latest/docs/framework/solid/installation/manual#srcmaintsx)

Regardless of whether you are using the @tanstack/router-plugin package and running the npm run dev/npm run build scripts, or manually running the tsr watch/tsr generate commands from your package scripts, the route tree file will be generated at src/routeTree.gen.ts.

Import the generated route tree and create a new router instance:

```typescript
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/solid-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/solid-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}
```

If you are working with this pattern you should change the id of the root <div> on your index.html file to <div id='root'></div>

[

## Using Code-Based Route Configuration

](https://tanstack.com/router/latest/docs/framework/solid/installation/manual#using-code-based-route-configuration)

The following example shows how to configure routes using code, and for simplicity's sake is in a single file for this demo. While code-based generation allows you to declare many routes and even the router instance in a single file, we recommend splitting your routes into separate files for better organization and performance as your application grows.

```javascript
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {
  Outlet,
  RouterProvider,
  Link,
  createRouter,
  createRoute,
  createRootRoute,
} from '@tanstack/solid-router'
import { TanStackRouterDevtools } from '@tanstack/solid-router-devtools'

const rootRoute = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: function Index() {
    return (
      <div className="p-2">
        <h3>Welcome Home!</h3>
      </div>
    )
  },
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: function About() {
    return <div className="p-2">Hello from About!</div>
  },
})

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute])

const router = createRouter({ routeTree })

declare module '@tanstack/solid-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('app')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}
```

If you glossed over these examples or didn't understand something, we don't blame you, because there's so much more to learn to really take advantage of TanStack Router! Let's move on.