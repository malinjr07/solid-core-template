Solid Router supports config-based routing, which offers the same capabilities as [component routing](https://docs.solidjs.com/solid-router/getting-started/component). The decision to use config-based routing over component routing depends largely on personal preference.

To define a single route, a route definition object can be passed to the [`<Router>`](https://docs.solidjs.com/solid-router/reference/components/router) component:

```javascript
import { lazy } from "solid-js";import { render } from "solid-js/web";import { Router } from "@solidjs/router";
const routes = {    path: "/",    component: lazy(() => import("/routes/index.js")),}

render(() => <Router>{routes}</Router>, document.getElementById("app"));
```

In the route definition object, a `path` property must be provided to define the path to match and a `component` property that specifies the component (or element) to render when the path matches.

To define multiple routes, an array of route definition objects can be passed to the `<Router>` component:

```javascript
import { lazy } from "solid-js";import { render } from "solid-js/web";import { Router } from "@solidjs/router";
const routes = [    {        path: "/",        component: lazy(() => import("/routes/index.js")),    },    {        path: "/hello-world",        component: () => <h1>Hello, World!</h1>    },    {        path: "/about",        component: lazy(() => import("/routes/about.js")),    }]

render(() => <Router>{routes}</Router>, document.getElementById("app"));
```

Each path in the array of route definition objects will be matched against the current URL, and the corresponding component will be rendered when a match is found. In the example above, the root path (`/`) renders the `Home` page, the path `/hello-world` renders an `h1` element, and the path `/about` renders the `About` component.