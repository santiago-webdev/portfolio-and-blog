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

<main
  class="grid dark:bg-dark-400 rounded-b-3xl pb-[clamp(1rem,2vw+1rem,6rem)] mb-[clamp(1rem,2vw+1rem,3rem)]"
>
  <header>
    <div class="grid px-4 mt-2 max-w-screen-md mx-auto place-items-end">
      <LinkArrow orientation="right" href="{base}/blog/index">Index</LinkArrow>
    </div>
    <div class="grid max-w-screen-md mx-auto place-items-center mt-6">
      <h1 class="font-fluid-5 text-center max-w-[33ch]">Blog</h1>
      <!-- eslint-disable -->
      <p class="font-h3 mt-4 text-center max-w-[33ch]">{@html description}</p>
    </div>
  </header>
  <SearchBar />
</main>
<FilteredPostsCards />
