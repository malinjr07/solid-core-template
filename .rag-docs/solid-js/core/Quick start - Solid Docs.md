___

## [Try Solid online](https://docs.solidjs.com/quick-start#try-solid-online)

To experiment with Solid directly in your browser, head over to our [interactive playground](https://playground.solidjs.com/). Prefer a full development setup? You can set up a complete environment using StackBlitz. Start with the [TypeScript](https://stackblitz.com/github/solidjs/templates/tree/master/ts) or [JavaScript](https://stackblitz.com/github/solidjs/templates/tree/master/js) templates.

___

## [Create a Solid project](https://docs.solidjs.com/quick-start#create-a-solid-project)

To create a new Solid application, navigate to the directory where you want to create your project and run the following command:

This command installs and runs [create-solid](https://github.com/solidjs-community/solid-cli/tree/main/packages/create-solid), the official project scaffolding tool for Solid. The CLI will guide you through a series of prompts, allowing you to choose options such as [starter templates](https://github.com/solidjs/templates), TypeScript support, and whether to include [Solid's full-stack framework, SolidStart](https://docs.solidjs.com/solid-start):

```yaml
◆ Project Name|  <solid-project>
◆ Is this a SolidStart project?|  ● Yes / ○ No
◆ Which template would you like to use?│  ● ts│  ○ ts-vitest│  ○ ts-uvu│  ○ ts-unocss│  ○ ts-tailwindcss
◆ Use TypeScript?│  ● Yes / ○ No
```

Once the project is created, follow the instructions to install the dependencies and start the development server:

```bash
│  cd solid-project│  npm install│  npm run dev
```

You should now have your Solid project running!