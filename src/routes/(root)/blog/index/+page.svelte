<script lang="ts">
import { base } from '$app/paths';
import { Posts } from '$lib/components/blog/store';
import LinkArrow from '$lib/components/navigation/LinkArrow.svelte';
import ShapeAnchor from '$lib/components/navigation/ShapeAnchor.svelte';
</script>

<main>
  <header>
    <div class="wrapper-backtoblog-anchor">
      <LinkArrow orientation="left" href="{base}/blog">Back to Blog</LinkArrow>
    </div>
    <div class="container-index">
      <h1 class="font-fluid-5">Index</h1>
      <p class="font-h3">All of the blogs I've written</p>
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
main {
  --contain: min(100% - 2rem, var(--sm));
}

header {
  display: grid;
  padding-bottom: clamp(1rem, 2vw + 1rem, 6rem);
  margin-bottom: clamp(1rem, 2vw + 1rem, 3rem);
  border-bottom-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  background: var(--srf-3);
}

.wrapper-backtoblog-anchor {
  width: var(--contain);
  display: grid;
  place-items: start;
  margin-inline: auto;
  margin-top: 0.5rem;
}

.container-index {
  width: var(--contain);
  display: grid;
  place-items: center;
  margin-inline: auto;
  margin-top: 1.5rem;
}

p,
h1 {
  text-align: center;
  width: min(100%, 33ch);
}

p {
  margin-top: 1.5rem;
}

ul {
  margin-inline: auto;
  width: var(--contain);
}
</style>
