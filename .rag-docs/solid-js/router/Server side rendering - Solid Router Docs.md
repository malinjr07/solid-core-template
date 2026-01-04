Rendering modes

Solid Router supports all of Solid's SSR capabilities. In addition, it has Solid's transitions included, so it can be used freely with [suspense](https://docs.solidjs.com/reference/components/suspense), [resources](https://docs.solidjs.com/reference/basic-reactivity/create-resource), and [lazy components](https://docs.solidjs.com/reference/component-apis/lazy).

When using SSR, there is the option to use the static router directly or let the browser router default to it on the server by passing in the URL.

```javascript
import { isServer } from "solid-js/web";import { Router } from "@solidjs/router";
<Router url={isServer ? req.url : ""} />;
```

Solid Router also provides a way to define a `preload` function that loads parallel to the routes [render-as-you-fetch](https://epicreact.dev/render-as-you-fetch/).