Solid Router is the universal router for Solid which works for rendering on the client or the server. It was inspired by and combines paradigms of [React Router](https://reactrouter.com/en/main) and the [Ember Router](https://guides.emberjs.com/release/routing/).

A router provides a way to change a user's view based on the URL in the browser. This allows a "single-page" application to simulate a traditional multipage site. To use Solid Router, components called Routes that depend on the value of the URL (the "path") are specified, and the router handles the mechanism of swapping them in and out.

___

## [Setup](https://docs.solidjs.com/solid-router/getting-started/installation-and-setup#setup)

To get started with Solid Router, install it using your preferred package manager.

___

## [Configure the routes](https://docs.solidjs.com/solid-router/getting-started/installation-and-setup#configure-the-routes)

The [`Router`](https://docs.solidjs.com/solid-router/reference/components/router) component is the root component of the router. It is responsible for managing the URL and rendering the appropriate [`Route`](https://docs.solidjs.com/solid-router/reference/components/route) based on the URL.

To configure your routes, import the `Router` component and then start the application by rendering the router component.

```javascript
import { render } from "solid-js/web";import { Router } from "@solidjs/router";
const wrapper = document.getElementById("app");
if (!wrapper) {  throw new Error("Wrapper div not found");}
render(() => <Router />, wrapper)
```

This sets up the router that will match on the url and render the appropriate route.