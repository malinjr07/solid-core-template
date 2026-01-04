import { createFileRoute } from '@tanstack/solid-router';

export const Route = createFileRoute('/posts/$postId')({
  component: PostDetail,
});

function PostDetail() {
  const params = Route.useParams();
  const postId = params().postId;

  return (
    <div class="p-2">
      <h2>Post {postId}</h2>
      <div class="rounded border p-4">
        <p>This is the content for post #{postId}.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a href="/posts" class="text-blue-500 hover:underline">
          ← Back to posts
        </a>
      </div>
    </div>
  );
}
