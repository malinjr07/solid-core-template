import { createFileRoute } from '@tanstack/solid-router';

export const Route = createFileRoute('/account/overview')({
  component: AccountOverview,
});

function AccountOverview() {
  return (
    <div class="p-2">
      <h2>Account Overview</h2>
      <div class="space-y-4">
        <div class="rounded border p-4">
          <h3>Profile Summary</h3>
          <div class="mt-2 space-y-1">
            <p>
              <strong>Name:</strong> John Doe
            </p>
            <p>
              <strong>Email:</strong> john.doe@example.com
            </p>
            <p>
              <strong>Member Since:</strong> January 2024
            </p>
            <p>
              <strong>Account Type:</strong> Premium
            </p>
          </div>
        </div>
        <div class="rounded border p-4">
          <h3>Recent Activity</h3>
          <ul class="mt-2 space-y-1 text-sm">
            <li>• Logged in 2 hours ago</li>
            <li>• Updated profile yesterday</li>
            <li>• Changed settings 3 days ago</li>
          </ul>
        </div>
        <div class="rounded border p-4">
          <h3>Quick Stats</h3>
          <div class="mt-2 grid grid-cols-2 gap-4 text-sm">
            <div>
              <p class="font-medium">Posts Created</p>
              <p class="text-2xl font-bold">12</p>
            </div>
            <div>
              <p class="font-medium">Comments Made</p>
              <p class="text-2xl font-bold">48</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
