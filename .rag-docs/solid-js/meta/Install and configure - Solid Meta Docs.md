Getting started

___

## [Installation](https://docs.solidjs.com/solid-meta/getting-started/installation-and-setup#installation)

To get started, install using your preferred package manager.

___

## [Setup](https://docs.solidjs.com/solid-meta/getting-started/installation-and-setup#setup)

1.  Wrap your application with [`<MetaProvider />`](https://docs.solidjs.com/solid-meta/reference/meta/metaprovider)
2.  To include head tags within your application, render any of the following:
    1.  [`<Title />`](https://docs.solidjs.com/solid-meta/reference/meta/title): Adds the `title` of the page.
    2.  [`<Meta />`](https://docs.solidjs.com/solid-meta/reference/meta/meta): Adds extra metadata to the page.
    3.  [`<Style />`](https://docs.solidjs.com/solid-meta/reference/meta/style): Adds a `style` element to the page.
    4.  [`<Link />`](https://docs.solidjs.com/solid-meta/reference/meta/link): Specifies a relationship between the page and an external resource.
    5.  [`<Base />`](https://docs.solidjs.com/solid-meta/reference/meta/base): Specifies the base URL for all relative URLs in the document.

-   These components can be used multiple times within the application.

3.  If using Solid on the server with JSX, no additional configuration is required.

Here is an example of how your code might look after this setup.

```javascript
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
const App = () => (  <MetaProvider>    <div class="Home">      <Title>Title of page</Title>      <Link rel="canonical" href="http://solidjs.com/" />      <Meta name="example" content="whatever" />    </div>  </MetaProvider>);
```

On the server, tags are collected, and then on the client, server-generated tags are replaced with those rendered on the client side. This process is important for maintaining the expected behavior, such as Single Page Applications (SPAs) when pages load that require changes to the head tags.

However, you can manage asset insertion using `getAssets` from `solid-js/web`.