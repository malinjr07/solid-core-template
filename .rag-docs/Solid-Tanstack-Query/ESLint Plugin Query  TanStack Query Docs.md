TanStack Query comes with its own ESLint plugin. This plugin is used to enforce best practices and to help you avoid common mistakes.

[

## Installation

](https://tanstack.com/query/latest/docs/eslint/eslint-plugin-query#installation)

The plugin is a separate package that you need to install:

```css
npm i -D @tanstack/eslint-plugin-query
```

or

```graphql
pnpm add -D @tanstack/eslint-plugin-query
```

or

```graphql
yarn add -D @tanstack/eslint-plugin-query
```

or

```graphql
bun add -D @tanstack/eslint-plugin-query
```

[

## Flat Config (eslint.config.js)

](https://tanstack.com/query/latest/docs/eslint/eslint-plugin-query#flat-config-eslintconfigjs)[

### Recommended setup

](https://tanstack.com/query/latest/docs/eslint/eslint-plugin-query#recommended-setup)

To enable all of the recommended rules for our plugin, add the following config:

```javascript
import pluginQuery from '@tanstack/eslint-plugin-query'

export default [
  ...pluginQuery.configs['flat/recommended'],
  // Any other config...
]
```

[

### Custom setup

](https://tanstack.com/query/latest/docs/eslint/eslint-plugin-query#custom-setup)

Alternatively, you can load the plugin and configure only the rules you want to use:

```javascript
import pluginQuery from '@tanstack/eslint-plugin-query'

export default [
  {
    plugins: {
      '@tanstack/query': pluginQuery,
    },
    rules: {
      '@tanstack/query/exhaustive-deps': 'error',
    },
  },
  // Any other config...
]
```

[

## Legacy Config (.eslintrc)

](https://tanstack.com/query/latest/docs/eslint/eslint-plugin-query#legacy-config-eslintrc)[

### Recommended setup

](https://tanstack.com/query/latest/docs/eslint/eslint-plugin-query#recommended-setup-1)

To enable all of the recommended rules for our plugin, add plugin:@tanstack/query/recommended in extends:

```perl
{
  "extends": ["plugin:@tanstack/query/recommended"]
}
```

[

### Custom setup

](https://tanstack.com/query/latest/docs/eslint/eslint-plugin-query#custom-setup-1)

Alternatively, add @tanstack/query to the plugins section, and configure the rules you want to use:

```perl
{
  "plugins": ["@tanstack/query"],
  "rules": {
    "@tanstack/query/exhaustive-deps": "error"
  }
}
```

[

## Rules

](https://tanstack.com/query/latest/docs/eslint/eslint-plugin-query#rules)

-   [@tanstack/query/exhaustive-deps](https://tanstack.com/query/latest/docs/eslint/exhaustive-deps)
-   [@tanstack/query/no-rest-destructuring](https://tanstack.com/query/latest/docs/eslint/no-rest-destructuring)
-   [@tanstack/query/stable-query-client](https://tanstack.com/query/latest/docs/eslint/stable-query-client)
-   [@tanstack/query/no-unstable-deps](https://tanstack.com/query/latest/docs/eslint/no-unstable-deps)
-   [@tanstack/query/infinite-query-property-order](https://tanstack.com/query/latest/docs/eslint/infinite-query-property-order)
-   [@tanstack/query/no-void-query-fn](https://tanstack.com/query/latest/docs/eslint/no-void-query-fn)
-   [@tanstack/query/mutation-property-order](https://tanstack.com/query/latest/docs/eslint/mutation-property-order)