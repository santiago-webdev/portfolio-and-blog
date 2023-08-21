<script lang="ts">
import SearchBar from './-SearchBar.svelte';
import FilteredPostsCards from './-FilteredPostsCards.svelte';
import config from '$lib/config.json';
import { Posts } from '$lib/components/blog/store';
import LinkArrow from '$lib/components/navigation/LinkArrow.svelte';
import { base } from '$app/paths';

let description = `${$Posts.length} ${config.blog.description}`;
const boldWords = ['Linux', 'web development', 'tooling'];

boldWords.forEach((word: string) => {
  description = description.replace(new RegExp(word, 'g'), `<strong>${word}</strong>`);
});
</script>

<main>
  <header>
    <div class="wrapper-index-anchor">
      <LinkArrow orientation="right" href="{base}/blog/index">Index</LinkArrow>
    </div>
    <div class="container-blog">
      <h1 class="font-fluid-5">Blog</h1>
      <!-- eslint-disable -->
      <p class="font-h3">{@html description}</p>
    </div>
  </header>
  <SearchBar />
</main>
<FilteredPostsCards />

<style>
main {
  --contain: min(100% - 2rem, var(--sm));
  display: grid;
  padding-bottom: clamp(1rem, 2vw + 1rem, 6rem);
  margin-bottom: clamp(1rem, 2vw + 1rem, 3rem);
  border-bottom-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  background: var(--srf-3);
}

header {
  margin-bottom: 2rem;
}

.wrapper-index-anchor {
  width: var(--contain);
  display: grid;
  place-items: end;
  margin-inline: auto;
  margin-top: 0.5rem;
}

.container-blog {
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
</style>
