`<Dynamic>` is a Solid component that allows you to render components dynamically based on data. By passing either a string representing a [native HTML element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) or a component function to the `component` prop, you can render the chosen component with the remaining props you provide.

```javascript
import { createSignal, For } from "solid-js"import { Dynamic } from "solid-js/web"
const RedDiv = () => <div style="color: red">Red</div>const GreenDiv = () => <div style="color: green">Green</div>const BlueDiv = () => <div style="color: blue">Blue</div>
const options = {  red: RedDiv,  green: GreenDiv,  blue: BlueDiv,}
function App() {  const [selected, setSelected] = createSignal("red")
  return (    <>      <select        value={selected()}        onInput={(e) => setSelected(e.currentTarget.value)}      >        <For each={Object.keys(options)}>          {(color) => <option value={color}>{color}</option>}        </For>      </select>      <Dynamic component={options[selected()]} />    </>  )}
```

This example renders a `<select>` element that allows you to choose between three colors. Once a color is selected, the `<Dynamic>` component will render the chosen color's corresponding component or element.

`<Dynamic>` creates more concise code than alternative conditional rendering options. For example, the following code renders the same result as the previous example:

```javascript
import { createSignal, Switch, Match, For } from "solid-js"
const RedDiv = () => <div style="color: red">Red</div>const GreenDiv = () => <div style="color: green">Green</div>const BlueDiv = () => <div style="color: blue">Blue</div>
const options = {  red: RedDiv,  green: GreenDiv,  blue: BlueDiv,}
function App() {  const [selected, setSelected] = createSignal("red")
  return (    <>      <select        value={selected()}        onInput={(e) => setSelected(e.currentTarget.value)}      >        <For each={Object.keys(options)}>          {(color) => <option value={color}>{color}</option>}        </For>      </select>      <Switch fallback={<BlueDiv />}>        <Match when={selected() === "red"}>          <RedDiv />        </Match>        <Match when={selected() === "green"}>          <GreenDiv />        </Match>      </Switch>    </>  )}
```

Instead of a more verbose [`<Switch>` and `<Match>`](https://docs.solidjs.com/concepts/control-flow/conditional-rendering) statement, `<Dynamic>` offers a more concise way to render components dynamically.

___

## [Props](https://docs.solidjs.com/concepts/control-flow/dynamic#props)

When working with these components, you can pass [props](https://docs.solidjs.com/concepts/components/props) to the component you are rendering by passing them to the `<Dynamic>` component. This makes them available to the component you are rendering, similar to how you would pass props to components in JSX.

```javascript
import { Dynamic } from "solid-js/web"
function App() {  return (    <Dynamic component={someComponent} someProp="someValue" />  )}
```