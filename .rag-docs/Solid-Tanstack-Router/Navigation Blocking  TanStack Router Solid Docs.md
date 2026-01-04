Navigation blocking is a way to prevent navigation from happening. This is typical if a user attempts to navigate while they:

-   Have unsaved changes
-   Are in the middle of a form
-   Are in the middle of a payment

In these situations, a prompt or custom UI should be shown to the user to confirm they want to navigate away.

-   If the user confirms, navigation will continue as normal
-   If the user cancels, all pending navigations will be blocked

[

## How does navigation blocking work?

](https://tanstack.com/router/latest/docs/framework/solid/guide/navigation-blocking#how-does-navigation-blocking-work)

Navigation blocking adds one or more layers of "blockers" to the entire underlying history API. If any blockers are present, navigation will be paused via one of the following ways:

-   Custom UI
    -   If the navigation is triggered by something we control at the router level, we can allow you to perform any task or show any UI you'd like to the user to confirm the action. Each blocker's blocker function will be asynchronously and sequentially executed. If any blocker function resolves or returns true, the navigation will be allowed and all other blockers will continue to do the same until all blockers have been allowed to proceed. If any single blocker resolves or returns false, the navigation will be canceled and the rest of the blocker functions will be ignored.
-   The onbeforeunload event
    -   For page events that we cannot control directly, we rely on the browser's onbeforeunload event. If the user attempts to close the tab or window, refresh, or "unload" the page assets in any way, the browser's generic "Are you sure you want to leave?" dialog will be shown. If the user confirms, all blockers will be bypassed and the page will unload. If the user cancels, the unload will be cancelled, and the page will remain as is.

[

## How do I use navigation blocking?

](https://tanstack.com/router/latest/docs/framework/solid/guide/navigation-blocking#how-do-i-use-navigation-blocking)

There are 2 ways to use navigation blocking:

-   Hook/logical-based blocking
-   Component-based blocking

[

## Hook/logical-based blocking

](https://tanstack.com/router/latest/docs/framework/solid/guide/navigation-blocking#hooklogical-based-blocking)

Let's imagine we want to prevent navigation if a form is dirty. We can do this by using the useBlocker hook:

```javascript
import { useBlocker } from '@tanstack/solid-router'

function MyComponent() {
  const [formIsDirty, setFormIsDirty] = useState(false)

  useBlocker({
    shouldBlockFn: () => {
      if (!formIsDirty) return false

      const shouldLeave = confirm('Are you sure you want to leave?')
      return !shouldLeave
    },
  })

  // ...
}
```

shouldBlockFn gives you type safe access to the current and next location:

```javascript
import { useBlocker } from '@tanstack/solid-router'

function MyComponent() {
  // always block going from /foo to /bar/123?hello=world
  const { proceed, reset, status } = useBlocker({
    shouldBlockFn: ({ current, next }) => {
      return (
        current.routeId === '/foo' &&
        next.fullPath === '/bar/$id' &&
        next.params.id === 123 &&
        next.search.hello === 'world'
      )
    },
    withResolver: true,
  })

  // ...
}
```

Note that even if shouldBlockFn returns false, the browser's beforeunload event may still be triggered on page reloads or tab closing. To gain control over this, you can use the enableBeforeUnload option to conditionally register the beforeunload handler:

```javascript
import { useBlocker } from '@tanstack/solid-router'

function MyComponent() {
  const [formIsDirty, setFormIsDirty] = createSignal(false)

  useBlocker({
    shouldBlockFn: () => {
      if (!formIsDirty()) return false

      const shouldLeave = confirm('Are you sure you want to leave?')
      return !shouldLeave
    },
  })

  // ...
}
```

```kotlin
import { Block } from '@tanstack/solid-router'

function MyComponent() {
  const [formIsDirty, setFormIsDirty] = useState(false)

  return (
    <Block
      shouldBlockFn={() => {
        if (!formIsDirty) return false

        const shouldLeave = confirm('Are you sure you want to leave?')
        return !shouldLeave
      }}
      enableBeforeUnload={formIsDirty}
    />
  )

  // OR

  return (
    <Block
      shouldBlockFn={() => formIsDirty}
      enableBeforeUnload={formIsDirty}
      withResolver
    >
      {({ status, proceed, reset }) => <>{/* ... */}</>}
    </Block>
  )
}
```

```kotlin
import { Block } from '@tanstack/solid-router'

function MyComponent() {
  const [formIsDirty, setFormIsDirty] = createSignal(false)

  return (
    <Block
      shouldBlockFn={() => {
        if (!formIsDirty()) return false

        const shouldLeave = confirm('Are you sure you want to leave?')
        return !shouldLeave
      }}
    />
  )

  // OR

  return (
    <Block shouldBlockFn={() => !formIsDirty} withResolver>
      {({ status, proceed, reset }) => <>{/* ... */}</>}
    </Block>
  )
}
```

```javascript
import { useBlocker } from '@tanstack/solid-router'

function MyComponent() {
  const [formIsDirty, setFormIsDirty] = useState(false)

  const { proceed, reset, status } = useBlocker({
    shouldBlockFn: () => formIsDirty,
    withResolver: true,
  })

  // ...

  return (
    <>
      {/* ... */}
      {status === 'blocked' && (
        <div>
          <p>Are you sure you want to leave?</p>
          <button onClick={proceed}>Yes</button>
          <button onClick={reset}>No</button>
        </div>
      )}
    </>
}
```

```javascript
import { useBlocker } from '@tanstack/solid-router'

function MyComponent() {
  const [formIsDirty, setFormIsDirty] = createSignal(false)

  const { proceed, reset, status } = useBlocker({
    shouldBlockFn: () => formIsDirty(),
    withResolver: true,
  })

  // ...

  return (
    <>
      {/* ... */}
      {status === 'blocked' && (
        <div>
          <p>Are you sure you want to leave?</p>
          <button onClick={proceed}>Yes</button>
          <button onClick={reset}>No</button>
        </div>
      )}
    </>
}
```

```javascript
import { useBlocker } from '@tanstack/solid-router'

function MyComponent() {
  const [formIsDirty, setFormIsDirty] = useState(false)

  useBlocker({
    shouldBlockFn: () => {
      if (!formIsDirty) {
        return false
      }

      const shouldBlock = new Promise<boolean>((resolve) => {
        // Using a modal manager of your choice
        modals.open({
          title: 'Are you sure you want to leave?',
          children: (
            <SaveBlocker
              confirm={() => {
                modals.closeAll()
                resolve(false)
              }}
              reject={() => {
                modals.closeAll()
                resolve(true)
              }}
            />
          ),
          onClose: () => resolve(true),
        })
      })
      return shouldBlock
    },
  })

  // ...
}
```

```javascript
import { useBlocker } from '@tanstack/solid-router'

function MyComponent() {
  const [formIsDirty, setFormIsDirty] = createSignal(false)

  useBlocker({
    shouldBlockFn: () => {
      if (!formIsDirty()) {
        return false
      }

      const shouldBlock = new Promise<boolean>((resolve) => {
        // Using a modal manager of your choice
        modals.open({
          title: 'Are you sure you want to leave?',
          children: (
            <SaveBlocker
              confirm={() => {
                modals.closeAll()
                resolve(false)
              }}
              reject={() => {
                modals.closeAll()
                resolve(true)
              }}
            />
          ),
          onClose: () => resolve(true),
        })
      })
      return shouldBlock
    },
  })

  // ...
}
```

```javascript
import { Block } from '@tanstack/solid-router'

function MyComponent() {
  const [formIsDirty, setFormIsDirty] = useState(false)

  return (
    <Block shouldBlockFn={() => formIsDirty} withResolver>
      {({ status, proceed, reset }) => (
        <>
          {/* ... */}
          {status === 'blocked' && (
            <div>
              <p>Are you sure you want to leave?</p>
              <button onClick={proceed}>Yes</button>
              <button onClick={reset}>No</button>
            </div>
          )}
        </>
      )}
    </Block>
  )
}
```