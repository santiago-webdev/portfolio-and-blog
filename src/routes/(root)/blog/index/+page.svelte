<script lang="ts">
import { base } from '$app/paths';
import { Posts } from '$lib/components/blog/store';
import LinkArrow from '$lib/components/navigation/LinkArrow.svelte';
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
        <a class="link" href={post.href}>{post.title}</a>
      </li>
    {/each}
  </ul>
</main>

<style>
header {
  border-bottom-right-radius: 1.6rem;
  border-bottom-left-radius: 1.6rem;
  padding-bottom: 1.4rem;
  margin-bottom: 1.4rem;
  background: var(--clr-25);
}

.wrapper-index {
  width: min(100% - 2.2rem, var(--base));
  margin-inline: auto;
  text-align: center;
}

.wrapper-index > * + * {
  margin-block-start: 1em;
}

ul {
  width: min(100% - 2.2rem, var(--base));
  margin-inline: auto;
}

.back-button {
  width: min(100% - 2.2rem, var(--base));
  margin-inline: auto;
  padding-top: 0.8rem;
  margin-bottom: 1rem;
}
</style>
