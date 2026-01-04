/* @refresh reload */
import { render } from 'solid-js/web';
import 'solid-devtools';

import './styles/app.css';
import { RouterProvider, createRouter } from '@tanstack/solid-router';
import { routeTree } from './routeTree.gen';

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/solid-router' {
  interface Register {
    router: typeof router;
  }
}

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => <RouterProvider router={router} />, root!);
