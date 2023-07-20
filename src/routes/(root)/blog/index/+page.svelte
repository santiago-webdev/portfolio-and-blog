<script lang="ts">
import { base } from '$app/paths';
import { Posts } from '$lib/components/blog/store';
import LinkArrow from '$lib/components/navigation/LinkArrow.svelte';
import ShapeAnchor from '$lib/components/navigation/ShapeAnchor.svelte';
</script>

<main>
  <header>
    <div class="back-button">
      <LinkArrow orientation="left" href="{base}/blog">Back to Blog</LinkArrow>
    </div>
    <div class="wrapper-index">
      <h1 class="font-fluid-5">Index</h1>
      <p>This is the full list of all the blog posts I've written.</p>
    </div>
  </header>
  <ul class="generic">
    {#each $Posts as post}
      <li class="generic">
        <ShapeAnchor href={post.href}>{post.title}</ShapeAnchor>
      </li>
    {/each}
  </ul>
</main>

<style>
header {
  border-bottom-right-radius: 1.6rem;
  border-bottom-left-radius: 1.6rem;
  padding-bottom: clamp(1rem, 2vw + 1rem, 6rem);
  margin-bottom: clamp(1rem, 2vw + 1rem, 3rem);
  background: var(--clr-400);
}

.wrapper-index {
  width: min(100% - 2.2rem, var(--base));
  margin-inline: auto;
  text-align: center;
}

.wrapper-index p {
  margin-top: 1rem;
}

ul {
  width: min(100% - 2.2rem, var(--base));
  margin-inline: auto;
}

.back-button {
  width: min(100% - 2.2rem, var(--base));
  margin-inline: auto;
  padding-top: 0.5rem;
  margin-bottom: 1rem;
}
</style>
