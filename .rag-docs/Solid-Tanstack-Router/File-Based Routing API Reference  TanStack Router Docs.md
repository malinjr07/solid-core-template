TanStack Router's file-based routing is quite flexible and can be configured to suit your project's needs.

[

## Configuration options

](https://tanstack.com/router/latest/docs/api/file-based-routing#configuration-options)

The following options are available for configuring the file-based routing:

-   [routesDirectory (required)](https://tanstack.com/router/latest/docs/api/file-based-routing#routesdirectory-required)
-   [generatedRouteTree (required)](https://tanstack.com/router/latest/docs/api/file-based-routing#generatedroutetree-required)
-   [virtualRouteConfig](https://tanstack.com/router/latest/docs/api/file-based-routing#virtualrouteconfig)
-   [routeFilePrefix](https://tanstack.com/router/latest/docs/api/file-based-routing#routefileprefix)
-   [routeFileIgnorePrefix](https://tanstack.com/router/latest/docs/api/file-based-routing#routefileignoreprefix)
-   [routeFileIgnorePattern](https://tanstack.com/router/latest/docs/api/file-based-routing#routefileignorepattern)
-   [indexToken](https://tanstack.com/router/latest/docs/api/file-based-routing#indextoken)
-   [routeToken](https://tanstack.com/router/latest/docs/api/file-based-routing#routetoken)
-   [quoteStyle](https://tanstack.com/router/latest/docs/api/file-based-routing#quotestyle)
-   [semicolons](https://tanstack.com/router/latest/docs/api/file-based-routing#semicolons)
-   [autoCodeSplitting](https://tanstack.com/router/latest/docs/api/file-based-routing#autocodesplitting)
-   [disableTypes](https://tanstack.com/router/latest/docs/api/file-based-routing#disabletypes)
-   [addExtensions](https://tanstack.com/router/latest/docs/api/file-based-routing#addextensions)
-   [disableLogging](https://tanstack.com/router/latest/docs/api/file-based-routing#disablelogging)
-   [routeTreeFileHeader](https://tanstack.com/router/latest/docs/api/file-based-routing#routetreefileheader)
-   [routeTreeFileFooter](https://tanstack.com/router/latest/docs/api/file-based-routing#routetreefilefooter)
-   [enableRouteTreeFormatting](https://tanstack.com/router/latest/docs/api/file-based-routing#enableroutetreeformatting)
-   [tmpDir](https://tanstack.com/router/latest/docs/api/file-based-routing#tmpdir)

Do not set the routeFilePrefix, routeFileIgnorePrefix, or routeFileIgnorePattern options, to match any of the tokens used in the **File Naming Conventions** guide, or you may run into unexpected behavior.

[

### routesDirectory (required)

](https://tanstack.com/router/latest/docs/api/file-based-routing#routesdirectory-required)

This is the path to the directory where the route files are located, relative to the cwd (current working directory).

By default, the value is set to the following and cannot be set to an empty string or undefined.

[

### generatedRouteTree (required)

](https://tanstack.com/router/latest/docs/api/file-based-routing#generatedroutetree-required)

This is the path to the file where the generated route tree will be saved, relative to the cwd (current working directory).

By default, the value is set to the following and cannot be set to an empty string or undefined.

If the [disableTypes](https://tanstack.com/router/latest/docs/api/file-based-routing#disabletypes) is set to true, the generated route tree will be saved with the .js extension instead of .ts.

[

### virtualRouteConfig

](https://tanstack.com/router/latest/docs/api/file-based-routing#virtualrouteconfig)

This option is used to configure the Virtual File Routes feature. See the "Virtual File Routes" guide for more information.

By default, this value is set to undefined.

[

### routeFilePrefix

](https://tanstack.com/router/latest/docs/api/file-based-routing#routefileprefix)

This option is used to identify route files in the route directory. This means that only files that start with this prefix will be considered for routing.

By default, this value is set to \`\` and as such all files in the route directory will be considered for routing.

[

### routeFileIgnorePrefix

](https://tanstack.com/router/latest/docs/api/file-based-routing#routefileignoreprefix)

This option is used to ignore specific files and directories in the route directory. This can be useful if you want to "opt-in" certain files or directories that you do not want to be considered for routing.

By default, this value is set to \-.

When using this option, it allows you have structures like this where it let's you co-located related files that are not route files:

```bash
src/routes
├── posts
│   ├── -components  // Ignored
│   │   ├── Post.tsx
│   ├── index.tsx
│   ├── route.tsx
```

[

### routeFileIgnorePattern

](https://tanstack.com/router/latest/docs/api/file-based-routing#routefileignorepattern)

This option is used to ignore specific files and directories in the route directory. It can be used in regular expression format. For example, .((css|const).ts)|test-page will ignore files / directories with names containing .css.ts, .const.ts or test-page.

By default, this value is set to undefined.

[

### routeToken

](https://tanstack.com/router/latest/docs/api/file-based-routing#routetoken)

As mentioned in the Routing Concepts guide, a layout route is rendered at the specified path, and the child routes are rendered within the layout route. The routeToken is used to identify the layout route file in the route directory.

By default, this value is set to route.

> 🧠 the following filenames would equal the same runtime URL:

```bash
src/routes/posts.tsx -> /posts
src/routes/posts.route.tsx -> /posts
src/routes/posts/route.tsx -> /posts
```

[

### indexToken

](https://tanstack.com/router/latest/docs/api/file-based-routing#indextoken)

As mentioned in the Routing Concepts guide, an index route is a route that is matched when the URL path is exactly the same as the parent route. The indexToken is used to identify the index route file in the route directory.

By default, this value is set to index.

> 🧠 the following filenames would equal the same runtime URL:

```bash
src/routes/posts.index.tsx -> /posts/
src/routes/posts/index.tsx -> /posts/
```

[

### quoteStyle

](https://tanstack.com/router/latest/docs/api/file-based-routing#quotestyle)

When your generated route tree is generated and when you first create a new route, those files will be formatted with the quote style you specify here.

By default, this value is set to single.

You should ignore the path of your generated route tree file from your linter and formatter to avoid conflicts.

[

### semicolons

](https://tanstack.com/router/latest/docs/api/file-based-routing#semicolons)

When your generated route tree is generated and when you first create a new route, those files will be formatted with semicolons if this option is set to true.

By default, this value is set to false.

You should ignore the path of your generated route tree file from your linter and formatter to avoid conflicts.

[

### autoCodeSplitting

](https://tanstack.com/router/latest/docs/api/file-based-routing#autocodesplitting)

This feature is only available if you are using the TanStack Router Bundler Plugin.

This option is used to enable automatic code-splitting for non-critical route configuration items. See the "Automatic Code-Splitting" guide for more information.

By default, this value is set to false.

The next major release of TanStack Router (i.e. v2), will have this value defaulted to true.

[

### disableTypes

](https://tanstack.com/router/latest/docs/api/file-based-routing#disabletypes)

This option is used to disable generating types for the route tree.

If set to true, the generated route tree will not include any types and will be written as a .js file instead of a .ts file.

By default, this value is set to false.

[

### addExtensions

](https://tanstack.com/router/latest/docs/api/file-based-routing#addextensions)

This option adds file extensions to the route names in the generated route tree.

By default, this value is set to false.

[

### disableLogging

](https://tanstack.com/router/latest/docs/api/file-based-routing#disablelogging)

This option turns off the console logging for the route generation process.

By default, this value is set to false.

[](https://tanstack.com/router/latest/docs/api/file-based-routing#routetreefileheader)

This option let's you prepend content to the start of the generated route tree file.

By default, this value is set to:

```perl
[
  "/* eslint-disable */",
  "// @ts-nocheck",
  "// noinspection JSUnusedGlobalSymbols"
]
```

[](https://tanstack.com/router/latest/docs/api/file-based-routing#routetreefilefooter)

This option let's you append content to the end of the generated route tree file.

By default, this value is set to:

[

### enableRouteTreeFormatting

](https://tanstack.com/router/latest/docs/api/file-based-routing#enableroutetreeformatting)

This option turns on the formatting function on the generated route tree file, which can be time-consuming for large projects.

By default, this value is set to true.

[

### tmpDir

](https://tanstack.com/router/latest/docs/api/file-based-routing#tmpdir)

Atomic file writes (route files and the generated route tree file) are implemented by creating a temporary file first and then renaming it to their actual location.

This config option allows to configure the path of the temp directory that will be used for creating those temporary files. If it is a relative path, it will be resolved to the current working directory. If this value is not set, process.env.TSR\_TMP\_DIR will be used. If process.env.TSR\_TMP\_DIR is not set, it will default to .tanstack/tmp relative to the current working directory.