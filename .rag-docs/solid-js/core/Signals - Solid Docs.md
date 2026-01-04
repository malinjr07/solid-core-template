Signals are the primary means of [managing state](https://docs.solidjs.com/concepts/intro-to-reactivity#state-management) in your Solid application. They provide a way to store and update values, and are the foundation of [reactivity](https://docs.solidjs.com/concepts/intro-to-reactivity) in Solid.

Signals can be used to represent any kind of state in your application, such as the current user, the current page, or the current theme. This can be any value, including primitive values such as strings and numbers, or complex values such as objects and arrays.

___

## [Creating a signal](https://docs.solidjs.com/concepts/signals#creating-a-signal)

You can create a signal by calling the [`createSignal`](https://docs.solidjs.com/reference/basic-reactivity/create-signal) function, which is imported from `solid-js`. This function takes an initial value as an argument, and returns a pair of functions: a **getter** function, and a **setter** function.

```javascript
import { createSignal } from "solid-js";
const [count, setCount] = createSignal(0);//       ^ getter  ^ setter
```

___

## [Accessing values](https://docs.solidjs.com/concepts/signals#accessing-values)

The getter function returned by `createSignal` is used to access the value of the signal. You call this function with no arguments to get the current value of the signal:

```cpp
console.log(count()); // output: 0
```

___

## [Updating values](https://docs.solidjs.com/concepts/signals#updating-values)

The setter function returned by `createSignal` is used to update the value of the signal. This function takes an argument that represents the new value of the signal:

```scss
setCount(count() + 1);
console.log(count()); // output: 1
```

The setter function can also take a function that passes the previous value.

```javascript
setCount((prevCount) => prevCount + 1);
console.log(count()); // output: 1
```

___

## [Reactivity](https://docs.solidjs.com/concepts/signals#reactivity)

Signals are reactive, which means that they automatically update when their value changes. When a signal is called within a [tracking scope](https://docs.solidjs.com/concepts/intro-to-reactivity#tracking-changes), the signal adds the dependency to a list of subscribers. Once a signal's value changes, it notifies all of its dependencies of the change so they can re-evaluate their values and update accordingly.

```javascript
function Counter() {  const [count, setCount] = createSignal(0);  const increment = () => setCount((prev) => prev + 1);
  return (    <div>      <span>Count: {count()}</span> {/* Updates when `count` changes */}      <button type="button" onClick={increment}>        Increment      </button>    </div>  );}
```

To learn more about how to use Signals in your application, visit our [state management guide](https://docs.solidjs.com/guides/state-management).