Advanced

Request events in SolidStart are retrieved using the [`getRequestEvent`](https://docs.solidjs.com/reference/server-utilities/get-request-event) from `@solidjs/web`. These requests happen anywhere on the server.

___

## [Locals](https://docs.solidjs.com/solid-start/advanced/request-events#locals)

SolidStart uses `event.locals` to pass around a local context where needed.

When adding fields to `event.locals`, the fields can be typed:

```ruby
/// <reference types="@solidjs/start/env" />declare module App {  interface RequestEventLocals {    /**     * Declare your getRequestEvent().locals here     */  }}
```

___

## [nativeEvent](https://docs.solidjs.com/solid-start/advanced/request-events#nativeevent)

Sometimes access is still needed to the underlying event from [Vinxi](https://vinxi.vercel.app/). This can be accessed that using the `.nativeEvent` property, which is the underlying H3Event used, and can be passed to the helpers available in the ecosystem. Note that Vinxi HTTP helpers _do not_ treeshake so you can only import them in files that do not contain client or isomorphic code.

Many of these events support Async Local Storage so this may not be needed.