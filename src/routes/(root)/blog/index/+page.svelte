<script lang="ts">
import { base } from '$app/paths';
import { Posts } from '$lib/components/blog/store';
import LinkArrow from '$lib/components/navigation/LinkArrow.svelte';
import ShapeAnchor from '$lib/components/navigation/ShapeAnchor.svelte';
</script>

<main>
  <header
    class="dark:bg-dark-400 rounded-b-3xl pb-[clamp(1rem,2vw+1rem,6rem)] mb-[clamp(1rem,2vw+1rem,3rem)]"
  >
    <div class="px-3 mx-auto pt-2 mb-4 max-w-screen-md">
      <LinkArrow orientation="left" href="{base}/blog">Back to Blog</LinkArrow>
    </div>
    <div class="mx-auto px-3 text-center max-w-screen-lg">
      <h1 class="font-fluid-5">Index</h1>
      <p class="mt-4">
        This is the full list of all the blog posts I've written.
      </p>
    </div>
  </header>
  <ul class="generic mx-auto max-w-screen-md">
    {#each $Posts as post}
      <li class="generic">
        <ShapeAnchor href={post.href}>{post.title}</ShapeAnchor>
      </li>
    {/each}
  </ul>
</main>
