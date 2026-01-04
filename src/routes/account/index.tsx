import { createFileRoute } from '@tanstack/solid-router';

export const Route = createFileRoute('/account/')({
  component: AccountIndex,
});

function AccountIndex() {
  return (
    <div class="p-2">
      <h2>Account</h2>
      <div class="space-y-4">
        <div class="rounded border p-4">
          <h3>Account Information</h3>
          <p class="text-gray-600">
            Manage your account details and preferences
          </p>
        </div>
        <a
          href="/account/overview"
          class="block rounded border p-2 hover:bg-gray-50"
        >
          <h3>Account Overview</h3>
          <p class="text-sm text-gray-600">
            View your account summary and activity
          </p>
        </a>
      </div>
    </div>
  );
}
