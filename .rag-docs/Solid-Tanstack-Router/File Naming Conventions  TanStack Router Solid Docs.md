File-based routing requires that you follow a few simple file naming conventions to ensure that your routes are generated correctly. The concepts these conventions enable are covered in detail in the [Route Trees & Nesting](https://tanstack.com/router/latest/docs/framework/solid/routing/route-trees) guide.

|           Feature            |                                                                                                                                                     Description                                                                                                                                                      |
|------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|          **\_\_root.tsx**          |                                                                                                    The root route file must be named \_\_root.tsx and must be placed in the root of the configured routesDirectory.                                                                                                    |
|         **. Separator**          |                                                                                                Routes can use the . character to denote a nested route. For example, blog.post will be generated as a child of blog.                                                                                                 |
|           **$ Token**            |                                                                                                 Route segments with the $ token are parameterized and will extract the value from the URL pathname as a route param.                                                                                                 |
|           **\_ Prefix**           |                                                                             Route segments with the \_ prefix are considered to be pathless layout routes and will not be used when matching its child routes against the URL pathname.                                                                              |
|           **\_ Suffix**           |                                                                                                            Route segments with the \_ suffix exclude the route from being nested under any parent routes.                                                                                                            |
|          **\- Prefix**           |                                                                    Files and folders with the \- prefix are excluded from the route tree. They will not be added to the routeTree.gen.ts file and can be used to colocate logic in route folders.                                                                    |
| **(folder) folder name pattern** |                                                                                          A folder that matches this pattern is treated as a **route group**, preventing the folder from being included in the route's URL path.                                                                                          |
|        **\[x\] Escaping**        |                                                               Square brackets escape special characters in filenames that would otherwise have routing meaning. For example, script\[.\]js.tsx becomes /script.js and api\[.\]v1.tsx becomes /api.v1.                                                                |
|         **index Token**          |                                       Route segments ending with the index token (before any file extensions) will match the parent route when the URL pathname matches the parent route exactly. This can be configured via the indexToken configuration option, see options.                                       |
|     **.route.tsx File Type**     | When using directories to organise routes, the route suffix can be used to create a route file at the directory's path. For example, blog.post.route.tsx or blog/post/route.tsx can be used as the route file for the /blog/post route. This can be configured via the routeToken configuration option, see options. |

> **💡 Remember:** The file-naming conventions for your project could be affected by what [options](https://tanstack.com/router/latest/docs/api/file-based-routing) are configured.

To escape a trailing underscore, for example /posts\[\_\].tsx, usage of the upgraded [Non-Nested Routes](https://tanstack.com/router/latest/docs/framework/solid/routing/routing-concepts#non-nested-routes) is required.

[

## Dynamic Path Params

](https://tanstack.com/router/latest/docs/framework/solid/routing/file-naming-conventions#dynamic-path-params)

Dynamic path params can be used in both flat and directory routes to create routes that can match a dynamic segment of the URL path. Dynamic path params are denoted by the $ character in the filename:

|      Filename       |   Route Path   |  Component Output   |
|---------------------|----------------|---------------------|
|         ...         |      ...       |         ...         |
| ʦ posts.$postId.tsx | /posts/$postId | <Root><Posts><Post> |

We'll learn more about dynamic path params in the [Path Params](https://tanstack.com/router/latest/docs/framework/solid/guide/path-params) guide.

[

## Pathless Routes

](https://tanstack.com/router/latest/docs/framework/solid/routing/file-naming-conventions#pathless-routes)

Pathless routes wrap child routes with either logic or a component without requiring a URL path. Non-path routes are denoted by the \_ character in the filename:

|   Filename    | Route Path | Component Output |
|---------------|------------|------------------|
|  ʦ \_app.tsx  |            |                  |
| ʦ \_app.a.tsx |     /a     |  <Root><App><A>  |
| ʦ \_app.b.tsx |     /b     |  <Root><App><B>  |

To learn more about pathless routes, see the [Routing Concepts - Pathless Routes](https://tanstack.com/router/latest/docs/framework/solid/routing/routing-concepts#pathless-layout-routes) guide.