> ⚠️ This comparison table is under construction and is still not completely accurate. If you use any of these libraries and feel the information could be improved, feel free to suggest changes (with notes or evidence of claims) using the "Edit this page on Github" link at the bottom of this page.

Feature/Capability Key:

-   ✅ 1st-class, built-in, and ready to use with no added configuration or code
-   🟡 Supported, but as an unofficial 3rd party or community library/contribution
-   🔶 Supported and documented, but requires extra user-code to implement
-   🛑 Not officially supported or documented.

|                      Feature                      |          TanStack Form          | Formik | Redux Form | React Hook Form |               Final Form               |
|---------------------------------------------------|---------------------------------|--------|------------|-----------------|----------------------------------------|
|                Github Repo / Stars                |                ![](https://img.shields.io/github/stars/TanStack/form?label=%F0%9F%8C%9F)                 |    ![](https://img.shields.io/github/stars/jaredpalmer/formik?label=%F0%9F%8C%9F)    |      ![](https://img.shields.io/github/stars/redux-form/redux-form?label=%F0%9F%8C%9F)      |        ![](https://img.shields.io/github/stars/react-hook-form/react-hook-form?label=%F0%9F%8C%9F)         |                    ![](https://img.shields.io/github/stars/final-form/final-form?label=%F0%9F%8C%9F)                    |
|               Supported Frameworks                | React, Vue, Angular, Solid, Lit | React  |   React    |      React      | React, Vue, Angular, Solid, Vanilla JS |
|                    Bundle Size                    |                ![](https://badgen.net/bundlephobia/minzip/@tanstack/react-form?label=%F0%9F%92%BE)                 |    ![](https://badgen.net/bundlephobia/minzip/formik?label=%F0%9F%92%BE)    |      ![](https://badgen.net/bundlephobia/minzip/redux-form?label=%F0%9F%92%BE)      |        ![](https://badgen.net/bundlephobia/minzip/react-hook-form?label=%F0%9F%92%BE)         |                    ![](https://badgen.net/bundlephobia/minzip/final-form?label=%F0%9F%92%BE)                    |
|          First-class TypeScript support           |                ✅                |   ❓    |     ❓      |        ✅        |                   ✅                    |
| Fully Inferred TypeScript (Including Deep Fields) |                ✅                |   ❓    |     ❓      |        ✅        |                   🛑                   |
|              Headless UI components               |                ✅                |   ❓    |     ❓      |        ✅        |                   ❓                    |
|                Framework agnostic                 |                ✅                |   ❓    |     ❓      |       🛑        |                   ✅                    |
|                Granular reactivity                |                ✅                |   ❓    |     ❓      |        ❓        |                   ✅                    |
|            Nested object/array fields             |                ✅                |   ✅    |     ❓      |     ✅\*(1)      |                   ✅                    |
|                 Async validation                  |                ✅                |   ✅    |     ❓      |        ✅        |                   ✅                    |
|        Built-in async validation debounce         |                ✅                |   ❓    |     ❓      |        ❓        |                   ❓                    |
|              Schema-based Validation              |                ✅                |   ✅    |     ❓      |        ✅        |                   ❓                    |
|               First Party Devtools                |             🛑\*(2)             |   🛑   |   ✅\*(3)   |        ✅        |                   ❓                    |
|                 SSR integrations                  |                ✅                |   🛑   |     🛑     |       🛑        |                   🛑                   |
|              React Compiler support               |                ✅                |   ❓    |     ❓      |       🛑        |                   ❓                    |

\*(1) For nested arrays, react-hook-form requires you [to cast the field array by its name](https://react-hook-form.com/docs/usefieldarray) if you're using TypeScript

\*(2) Planned

\*(3) Via Redux Devtools