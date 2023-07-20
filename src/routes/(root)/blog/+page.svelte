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
  description = description.replace(
    new RegExp(word, 'g'),
    `<strong>${word}</strong>`
  );
});
</script>

<main>
  <header>
    <div class="back-button">
      <LinkArrow orientation="right" href="{base}/blog/index">Index</LinkArrow>
    </div>
    <hgroup>
      <h1 class="font-fluid-5">Blog</h1>
      <!-- eslint-disable -->
      <p class="font-h3">{@html description}</p>
    </hgroup>
  </header>
  <SearchBar />
</main>
<FilteredPostsCards />

<style>
main {
  background-color: var(--clr-400);
  border-bottom-right-radius: 1.6rem;
  border-bottom-left-radius: 1.6rem;
  padding-bottom: clamp(1rem, 2vw + 1rem, 6rem);
  margin-bottom: clamp(1rem, 2vw + 1rem, 3rem);
  display: grid;
}

h1,
p {
  text-align: center;
  width: min(100% - 1.4rem, 33ch);
}

header {
  width: min(100% - 2.2rem, var(--base));
  margin-inline: auto;
}

hgroup {
  margin-top: 1.5rem;
  display: grid;
  place-items: center;
  /* gap: 1.6rem; */
}

hgroup p {
  margin-top: 1rem;
}

.back-button {
  margin-top: 0.5rem;
  display: grid;
  place-items: end;
}
</style>
