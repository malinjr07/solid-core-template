While repeating yourself can be acceptable in many situations, you might find that you do it too often. At times, you may want to create cross-cutting components with additional behavior or styles. You might also consider using third-party libraries in combination with TanStack Router's type safety.

[

## createLink for cross-cutting concerns

](https://tanstack.com/router/latest/docs/framework/solid/guide/custom-link#createlink-for-cross-cutting-concerns)

createLink creates a custom Link component with the same type parameters as Link. This means you can create your own component which provides the same type safety and typescript performance as Link.

[

### Basic example

](https://tanstack.com/router/latest/docs/framework/solid/guide/custom-link#basic-example)

If you want to create a basic custom link component, you can do so with the following:

```typescript
import * as Solid from 'solid-js'
import { createLink, LinkComponent } from '@tanstack/solid-router'

export const Route = createRootRoute({
  component: RootComponent,
})

type BasicLinkProps = Solid.JSX.IntrinsicElements['a'] & {
  // Add any additional props you want to pass to the anchor element
}

const BasicLinkComponent: Solid.Component<BasicLinkProps> = (props) => (
  <a {...props} class="block px-3 py-2 text-red-700">
    {props.children}
  </a>
)

const CreatedLinkComponent = createLink(BasicLinkComponent)

export const CustomLink: LinkComponent<typeof BasicLinkComponent> = (props) => {
  return <CreatedLinkComponent preload={'intent'} {...props} />
}
```

You can then use your newly created Link component as any other Link

```php-template
<CustomLink to={'/dashboard/invoices/$invoiceId'} params={{ invoiceId: 0 }} />
```

[

## createLink with third party libraries

](https://tanstack.com/router/latest/docs/framework/solid/guide/custom-link#createlink-with-third-party-libraries)

Here are some examples of how you can use createLink with third-party libraries.

[

### Some Library example

](https://tanstack.com/router/latest/docs/framework/solid/guide/custom-link#some-library-example)

```cpp
// TODO: Add this example.
```