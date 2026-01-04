import { createFileRoute } from '@tanstack/solid-router';

export const Route = createFileRoute('/posts/')({
  component: PostsIndex,
});

function PostsIndex() {
  return (
    <div class="p-2">
      <h2>Posts</h2>
      <div class="space-y-2">
        <div class="rounded border p-2">
          <h3>Post 1</h3>
          <p>First post content...</p>
          <a href="/posts/1" class="text-blue-500 hover:underline">
            Read more
          </a>
        </div>
        <div class="rounded border p-2">
          <h3>Post 2</h3>
          <p>Second post content...</p>
          <a href="/posts/2" class="text-blue-500 hover:underline">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}
