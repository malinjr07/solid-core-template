You can install Solid Query via [NPM](https://npmjs.com/), or a good ol' <script> via [ESM.sh](https://esm.sh/).

[

### NPM

](https://tanstack.com/query/latest/docs/framework/solid/installation#npm)

```css
npm i @tanstack/solid-query
```

or

```graphql
pnpm add @tanstack/solid-query
```

or

```graphql
yarn add @tanstack/solid-query
```

or

```graphql
bun add @tanstack/solid-query
```

> Wanna give it a spin before you download? Try out the [simple](https://tanstack.com/query/latest/docs/framework/solid/examples/simple) or [basic](https://tanstack.com/query/latest/docs/framework/solid/examples/basic) examples!

[

### CDN

](https://tanstack.com/query/latest/docs/framework/solid/installation#cdn)

If you're not using a module bundler or package manager, you can also use this library via an ESM-compatible CDN such as [ESM.sh](https://esm.sh/). Simply add a <script type="module"> tag to the bottom of your HTML file:

```php-template
<script type="module">
  import { QueryClient } from 'https://esm.sh/@tanstack/solid-query'
</script>
```

[

### Requirements

](https://tanstack.com/query/latest/docs/framework/solid/installation#requirements)

Solid Query is optimized for modern browsers. It is compatible with the following browsers config

```
Chrome >= 91
Firefox >= 90
Edge >= 91
Safari >= 15
iOS >= 15
Opera >= 77
```

> Depending on your environment, you might need to add polyfills. If you want to support older browsers, you need to transpile the library from node\_modules yourselves.