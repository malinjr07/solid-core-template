import { createRootRoute, Link, Outlet } from '@tanstack/solid-router';
import { TanStackRouterDevtools } from '@tanstack/solid-router-devtools';

const RootLayout = () => (
  <>
    <div class="flex gap-2 p-2">
      <Link to="/" class="[&.active]:font-bold">
        Home
      </Link>{' '}
      <Link to="/about" class="[&.active]:font-bold">
        About
      </Link>{' '}
      <Link to="/posts" class="[&.active]:font-bold">
        Posts
      </Link>{' '}
      <Link to="/settings" class="[&.active]:font-bold">
        Settings
      </Link>{' '}
      <Link to="/account" class="[&.active]:font-bold">
        Account
      </Link>
    </div>
    <hr />
    <Outlet />
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
