Route matching follows a consistent and predictable pattern. This guide will explain how route trees are matched.

When TanStack Router processes your route tree, all of your routes are automatically sorted to match the most specific routes first. This means that regardless of the order your route tree is defined, routes will always be sorted in this order:

-   Index Route
-   Static Routes (most specific to least specific)
-   Dynamic Routes (longest to shortest)
-   Splat/Wildcard Routes

Consider the following pseudo route tree:

```markdown
Root
  - blog
    - $postId
    - /
    - new
  - /
  - *
  - about
  - about/us
```

After sorting, this route tree will become:

```markdown
Root
  - /
  - about/us
  - about
  - blog
    - /
    - new
    - $postId
  - *
```

This final order represents the order in which routes will be matched based on specificity.

Using that route tree, let's follow the matching process for a few different URLs:

-   /blog
    
    ```bash
    Root
      ❌ /
      ❌ about/us
      ❌ about
      ⏩ blog
        ✅ /
        - new
        - $postId
      - *
    ```
    
-   /blog/my-post
    
    ```bash
    Root
      ❌ /
      ❌ about/us
      ❌ about
      ⏩ blog
        ❌ /
        ❌ new
        ✅ $postId
      - *
    ```
    
-   /
    
    ```markdown
    Root
      ✅ /
      - about/us
      - about
      - blog
        - /
        - new
        - $postId
      - *
    ```
    
-   /not-a-route
    
    ```markdown
    Root
      ❌ /
      ❌ about/us
      ❌ about
      ❌ blog
        - /
        - new
        - $postId
      ✅ *
    ```