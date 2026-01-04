If a user leaves your application and returns and the query data is stale, **TanStack Query automatically requests fresh data for you in the background**. You can disable this globally or per-query using the refetchOnWindowFocus option:

[

#### Disabling Globally

](https://tanstack.com/query/latest/docs/framework/solid/guides/window-focus-refetching#disabling-globally)

```javascript
//
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
})

function App() {
  return <QueryClientProvider client={queryClient}>...</QueryClientProvider>
}
```

[

#### Disabling Per-Query

](https://tanstack.com/query/latest/docs/framework/solid/guides/window-focus-refetching#disabling-per-query)

```yaml
useQuery(() => {
  queryKey: ['todos'],
  queryFn: fetchTodos,
  refetchOnWindowFocus: false,
})
```

[

## Custom Window Focus Event

](https://tanstack.com/query/latest/docs/framework/solid/guides/window-focus-refetching#custom-window-focus-event)

In rare circumstances, you may want to manage your own window focus events that trigger TanStack Query to revalidate. To do this, TanStack Query provides a focusManager.setEventListener function that supplies you the callback that should be fired when the window is focused and allows you to set up your own events. When calling focusManager.setEventListener, the previously set handler is removed (which in most cases will be the default handler) and your new handler is used instead. For example, this is the default handler:

```javascript
focusManager.setEventListener((handleFocus) => {
  // Listen to visibilitychange
  if (typeof window !== 'undefined' && window.addEventListener) {
    const visibilitychangeHandler = () => {
      handleFocus(document.visibilityState === 'visible')
    }
    window.addEventListener('visibilitychange', visibilitychangeHandler, false)
    return () => {
      // Be sure to unsubscribe if a new handler is set
      window.removeEventListener('visibilitychange', visibilitychangeHandler)
    }
  }
})
```

[

## Managing Focus in React Native

](https://tanstack.com/query/latest/docs/framework/solid/guides/window-focus-refetching#managing-focus-in-react-native)

Instead of event listeners on window, React Native provides focus information through the [AppState module](https://reactnative.dev/docs/appstate#app-states). You can use the AppState "change" event to trigger an update when the app state changes to "active":

```javascript
import { AppState } from 'react-native'
import { focusManager } from '@tanstack/solid-query'

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active')
  }
}

useEffect(() => {
  const subscription = AppState.addEventListener('change', onAppStateChange)

  return () => subscription.remove()
}, [])
```

[

## Managing focus state

](https://tanstack.com/query/latest/docs/framework/solid/guides/window-focus-refetching#managing-focus-state)

```javascript
import { focusManager } from '@tanstack/solid-query'

// Override the default focus state
focusManager.setFocused(true)

// Fallback to the default focus check
focusManager.setFocused(undefined)
```