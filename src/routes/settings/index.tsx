import { createFileRoute } from '@tanstack/solid-router';

export const Route = createFileRoute('/settings/')({
  component: SettingsIndex,
});

function SettingsIndex() {
  return (
    <div class="p-2">
      <h2>Settings</h2>
      <div class="space-y-2">
        <a
          href="/settings/profile"
          class="block rounded border p-2 hover:bg-gray-50"
        >
          <h3>Profile Settings</h3>
          <p class="text-sm text-gray-600">Manage your profile information</p>
        </a>
        <a
          href="/settings/notifications"
          class="block rounded border p-2 hover:bg-gray-50"
        >
          <h3>Notification Settings</h3>
          <p class="text-sm text-gray-600">
            Configure your notification preferences
          </p>
        </a>
      </div>
    </div>
  );
}
