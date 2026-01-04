import { createFileRoute } from '@tanstack/solid-router';

export const Route = createFileRoute('/settings/notifications')({
  component: NotificationSettings,
});

function NotificationSettings() {
  return (
    <div class="p-2">
      <h2>Notification Settings</h2>
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <h3>Email Notifications</h3>
            <p class="text-sm text-gray-600">
              Receive email updates about your account
            </p>
          </div>
          <input type="checkbox" class="h-4 w-4" />
        </div>
        <div class="flex items-center justify-between">
          <div>
            <h3>Push Notifications</h3>
            <p class="text-sm text-gray-600">
              Receive push notifications on your devices
            </p>
          </div>
          <input type="checkbox" class="h-4 w-4" />
        </div>
        <div class="flex items-center justify-between">
          <div>
            <h3>SMS Notifications</h3>
            <p class="text-sm text-gray-600">Receive text message alerts</p>
          </div>
          <input type="checkbox" class="h-4 w-4" />
        </div>
        <button class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Save Preferences
        </button>
      </div>
    </div>
  );
}
