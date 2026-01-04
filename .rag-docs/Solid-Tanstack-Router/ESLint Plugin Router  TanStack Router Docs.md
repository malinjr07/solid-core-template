TanStack Router comes with its own ESLint plugin. This plugin is used to enforce best practices and to help you avoid common mistakes.

[

## Installation

](https://tanstack.com/router/latest/docs/eslint/eslint-plugin-router#installation)

The plugin is a separate package that you need to install:

```bash
npm install -D @tanstack/eslint-plugin-router
```

or

```sql
pnpm add -D @tanstack/eslint-plugin-router
```

or

```sql
yarn add -D @tanstack/eslint-plugin-router
```

or

```sql
bun add -D @tanstack/eslint-plugin-router
```

[

## Flat Config (eslint.config.js)

](https://tanstack.com/router/latest/docs/eslint/eslint-plugin-router#flat-config-eslintconfigjs)

The release of ESLint 9.0 introduced a new way to configure ESLint using a flat config format. This new format is more flexible and allows you to configure ESLint in a more granular way than the legacy .eslintrc format. The TanStack Router ESLint Plugin supports this new format and provides a recommended config that you can use to enable all of the recommended rules for the plugin .

[

### Recommended Flat Config setup

](https://tanstack.com/router/latest/docs/eslint/eslint-plugin-router#recommended-flat-config-setup)

To enable all of the recommended rules for our plugin, add the following config:

```javascript
// eslint.config.js
import pluginRouter from '@tanstack/eslint-plugin-router'

export default [
  ...pluginRouter.configs['flat/recommended'],
  // Any other config...
]
```

[

### Custom Flat Config setup

](https://tanstack.com/router/latest/docs/eslint/eslint-plugin-router#custom-flat-config-setup)

Alternatively, you can load the plugin and configure only the rules you want to use:

```javascript
// eslint.config.js
import pluginRouter from '@tanstack/eslint-plugin-router'

export default [
  {
    plugins: {
      '@tanstack/router': pluginRouter,
    },
    rules: {
      '@tanstack/router/create-route-property-order': 'error',
    },
  },
  // Any other config...
]
```

[

## Legacy Config (.eslintrc)

](https://tanstack.com/router/latest/docs/eslint/eslint-plugin-router#legacy-config-eslintrc)

Prior to the ESLint 9.0 release, the most common way of configuring EsLint was using a .eslintrc file. The TanStack Router ESLint Plugin still supports this configuration method.

[

### Recommended Legacy Config setup

](https://tanstack.com/router/latest/docs/eslint/eslint-plugin-router#recommended-legacy-config-setup)

To enable all of the recommended rules for our plugin, add plugin:@tanstack/eslint-plugin-router/recommended in extends:

```perl
{
  "extends": ["plugin:@tanstack/eslint-plugin-router/recommended"]
}
```

[

### Custom Legacy Config setup

](https://tanstack.com/router/latest/docs/eslint/eslint-plugin-router#custom-legacy-config-setup)

Alternatively, add @tanstack/eslint-plugin-router to the plugins section, and configure the rules you want to use:

```perl
{
  "plugins": ["@tanstack/eslint-plugin-router"],
  "rules": {
    "@tanstack/router/create-route-property-order": "error"
  }
}
```

[

## Rules

](https://tanstack.com/router/latest/docs/eslint/eslint-plugin-router#rules)

The following rules are available in the TanStack Router ESLint Plugin:

-   [@tanstack/router/create-route-property-order](https://tanstack.com/router/latest/docs/eslint/create-route-property-order)

[

## Conflicts with other ESLint plugins

](https://tanstack.com/router/latest/docs/eslint/eslint-plugin-router#conflicts-with-other-eslint-plugins)

If you have other ESLint plugins installed, they may rules that conflict with this plugin. If so, you'll need to make some tweaks to allow these plugins to work together.

[

### typescript-eslint

](https://tanstack.com/router/latest/docs/eslint/eslint-plugin-router#typescript-eslint)

The [@typescript-eslint/only-throw-error](https://typescript-eslint.io/rules/only-throw-error/) rule, enabled by default in the recommended-type-checked and strict-type-checked rulesets, disallows the throwing of non-Error values as exceptions, which is considered a good practice.

To make sure it that it does not conflict with TanStack Router, you should add redirect to the allowed as a throwable objects.

```perl
{
  "rules": {
    "@typescript-eslint/only-throw-error": [
      "error",
      {
        "allow": [
          {
            "from": "package",
            "package": "@tanstack/router-core",
            "name": "Redirect"
          }
        ]
      }
    ]
  }
}
```