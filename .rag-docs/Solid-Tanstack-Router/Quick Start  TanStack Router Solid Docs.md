[

## Impatient?

](https://tanstack.com/router/latest/docs/framework/solid/quick-start#impatient)

The fastest way to get started with TanStack Router is to scaffold a new project. Just run:

```sql
npx create-tsrouter-app@latest --framework solid
```

The CLI will guide you through a short series of prompts to customize your setup, including options for:

-   File-based or code-based route configuration
-   TypeScript support
-   Toolchain setup
-   Git initialization

Once complete, a new Solid project will be generated with TanStack Router installed and ready to use:

```bash
cd your-project-name
npm run dev
```

[

## Routing Options

](https://tanstack.com/router/latest/docs/framework/solid/quick-start#routing-options)

TanStack Router supports both file-based and code-based route configurations. You can specify your preference during the CLI setup, or use these commands directly:

[

### File-Based Route Generation

](https://tanstack.com/router/latest/docs/framework/solid/quick-start#file-based-route-generation)

The file-based approach is the recommended option for most projects. It automatically creates routes based on your file structure, giving you the best mix of performance, simplicity, and developer experience.

```sql
npx create-tsrouter-app@latest my-app --framework solid --template file-router
```

[

### Code-Based Route Configuration

](https://tanstack.com/router/latest/docs/framework/solid/quick-start#code-based-route-configuration)

If you prefer to define routes programmatically, you can use the code-based route configuration. This approach gives you full control over routing logic.

```sql
npx create-tsrouter-app@latest my-app --framework solid
```

With either approach, navigate to your project directory and start the development server:

[

## Existing Project

](https://tanstack.com/router/latest/docs/framework/solid/quick-start#existing-project)

If you have an existing Solid project and want to add TanStack Router to it, you can install it manually.

[

### Requirements

](https://tanstack.com/router/latest/docs/framework/solid/quick-start#requirements)

Before installing TanStack Router, please ensure your project meets the following requirements:

-   solid-js v1.x.x

Using TypeScript (v5.3.x or higher) is recommended for the best development experience, though not strictly required. We aim to support the last 5 minor versions of TypeScript, but using the latest version will help avoid potential issues.

TanStack Router is currently only compatible with Solid (with SolidDOM) and Solid. If you're interested in contributing to support other frameworks, such as Solid Native, Angular, or Vue, please reach out to us on [Discord](https://tlinz.com/discord).

[

### Installation

](https://tanstack.com/router/latest/docs/framework/solid/quick-start#installation)

To install TanStack Router in your project, run the following command using your preferred package manager:

```bash
npm install @tanstack/solid-router
# or
pnpm add @tanstack/solid-router
#or
yarn add @tanstack/solid-router
# or
bun add @tanstack/solid-router
# or
deno add npm:@tanstack/solid-router
```

Once installed, you can verify the installation by checking your package.json file for the dependency.

```perl
{
  "dependencies": {
    "@tanstack/solid-router": "^x.x.x"
  }
}
```