Getting started

For server setup, wrap your application with [`MetaProvider`](https://docs.solidjs.com/solid-meta/reference/meta/metaprovider) on the server. This component uses a `tags[]` array to pass down your head tags as part of your server-rendered payload. Once rendered on the server, the component updates this array to include the tags.

```php-template
import { renderToString, getAssets } from "solid-js/web";import { MetaProvider } from "@solidjs/meta";import App from "./App";
// ... within the context of a request ...const app = renderToString(() => (  <MetaProvider>    <App />  </MetaProvider>));
res.send(`  <!doctype html>  <html>    <head>      ${getAssets()}    </head>    <body>      <div id="root">${app}</div>    </body>  </html>`);
```