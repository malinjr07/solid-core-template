The notifyManager handles scheduling and batching callbacks in Tanstack Query.

It exposes the following methods:

-   [batch](https://tanstack.com/query/latest/docs/reference/notifyManager#notifymanagerbatch)
-   [batchCalls](https://tanstack.com/query/latest/docs/reference/notifyManager#notifymanagerbatchcalls)
-   [schedule](https://tanstack.com/query/latest/docs/reference/notifyManager#notifymanagerschedule)
-   [setNotifyFunction](https://tanstack.com/query/latest/docs/reference/notifyManager#notifymanagersetnotifyfunction)
-   [setBatchNotifyFunction](https://tanstack.com/query/latest/docs/reference/notifyManager#notifymanagersetbatchnotifyfunction)
-   [setScheduler](https://tanstack.com/query/latest/docs/reference/notifyManager#notifymanagersetscheduler)

[

## notifyManager.batch

](https://tanstack.com/query/latest/docs/reference/notifyManager#notifymanagerbatch)

batch can be used to batch all updates scheduled inside the passed callback. This is mainly used internally to optimize queryClient updating.

```r
function batch<T>(callback: () => T): T
```

[

## notifyManager.batchCalls

](https://tanstack.com/query/latest/docs/reference/notifyManager#notifymanagerbatchcalls)

batchCalls is a higher-order function that takes a callback and wraps it. All calls to the wrapped function schedule the callback to be run on the next batch.

```typescript
type BatchCallsCallback<T extends Array<unknown>> = (...args: T) => void

function batchCalls<T extends Array<unknown>>(
  callback: BatchCallsCallback<T>,
): BatchCallsCallback<T>
```

[

## notifyManager.schedule

](https://tanstack.com/query/latest/docs/reference/notifyManager#notifymanagerschedule)

schedule schedules a function to be run on the next batch. By default, the batch is run with a setTimeout, but this can be configured.

```javascript
function schedule(callback: () => void): void
```

[

## notifyManager.setNotifyFunction

](https://tanstack.com/query/latest/docs/reference/notifyManager#notifymanagersetnotifyfunction)

setNotifyFunction overrides the notify function. This function is passed the callback when it should be executed. The default notifyFunction just calls it.

This can be used to for example wrap notifications with React.act while running tests:

```javascript
import { notifyManager } from '@tanstack/react-query'
import { act } from 'react-dom/test-utils'

notifyManager.setNotifyFunction(act)
```

[

## notifyManager.setBatchNotifyFunction

](https://tanstack.com/query/latest/docs/reference/notifyManager#notifymanagersetbatchnotifyfunction)

setBatchNotifyFunction sets the function to use for batched updates

If your framework supports a custom batching function, you can let TanStack Query know about it by calling notifyManager.setBatchNotifyFunction.

For example, this is how the batch function is set in solid-query:

```javascript
import { notifyManager } from '@tanstack/query-core'
import { batch } from 'solid-js'

notifyManager.setBatchNotifyFunction(batch)
```

[

## notifyManager.setScheduler

](https://tanstack.com/query/latest/docs/reference/notifyManager#notifymanagersetscheduler)

setScheduler configures a custom callback that should schedules when the next batch runs. The default behaviour is setTimeout(callback, 0).

```javascript
import { notifyManager } from '@tanstack/react-query'

// Schedule batches in the next microtask
notifyManager.setScheduler(queueMicrotask)

// Schedule batches before the next frame is rendered
notifyManager.setScheduler(requestAnimationFrame)

// Schedule batches some time in the future
notifyManager.setScheduler((cb) => setTimeout(cb, 10))
```