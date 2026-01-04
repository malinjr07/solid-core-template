TanStack Router's documentation is integrated into its NPM module, making it available to install as LLM assistance rules. These rules can be integrated into various editors to provide context-aware help using [vibe-rules](https://www.npmjs.com/package/vibe-rules).

[

## Installation

](https://tanstack.com/router/latest/docs/framework/solid/llm-support#installation)

To use vibe-rules, install it globally using your package manager of choice. For example, with pnpm:

Once installed, you can then run it in the editor of your choice. For example, to integrate with Cursor:

```css
vibe-rules install cursor
```

[

## Supported Editors

](https://tanstack.com/router/latest/docs/framework/solid/llm-support#supported-editors)

vibe-rules supports a variety of editors, including windsurf, claude-code, and more. For more information on supported editors and how to set them up, refer to the [vibe-rules documentation](https://github.com/FutureExcited/vibe-rules).

If you're using [Yarn Workspaces](https://yarnpkg.com/features/workspaces), you will need to add the following configuration to your .yarnrc.yaml file of your application that uses TanStack Router:

> ```makefile
> pnpFallbackMode: all
> pnpMode: loose
> ```