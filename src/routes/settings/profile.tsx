import { createFileRoute } from '@tanstack/solid-router';

export const Route = createFileRoute('/settings/profile')({
  component: ProfileSettings,
});

function ProfileSettings() {
  return (
    <div class="p-2">
      <h2>Profile Settings</h2>
      <div class="space-y-4">
        <div>
          <label class="mb-1 block text-sm font-medium">Name</label>
          <input
            type="text"
            class="w-full rounded border p-2"
            placeholder="Your name"
          />
        </div>
        <div>
          <label class="mb-1 block text-sm font-medium">Email</label>
          <input
            type="email"
            class="w-full rounded border p-2"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label class="mb-1 block text-sm font-medium">Bio</label>
          <textarea
            class="w-full rounded border p-2"
            rows={4}
            placeholder="Tell us about yourself..."
          />
        </div>
        <button class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Save Profile
        </button>
      </div>
    </div>
  );
}
