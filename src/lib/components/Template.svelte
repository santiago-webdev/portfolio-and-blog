<script lang="ts">
  import { TITLE_BLOG_COMPOSE } from '$lib/config';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import Hollow from './Hollow.svelte';
  import { articleHeaders, readableDate, relativeTime } from '$lib/utils/utils';

  export let title = '';
  export let date = '';
  export let description = '';
  export let finished = false;

  let dateRelative = '';
  let dateReadable = '';
  let showRelative = false;

  let isHollow = false;
  let hollowPrefix = '';
  let fillSuffix = '';

  const keywords = ['How ', 'How to ', 'How to: '];

  let mounted = false;

  onMount(() => {
    if (title) {
      keywords.some(keyword => {
        if (title.startsWith(keyword)) {
          hollowPrefix = keyword;
          fillSuffix = title.replace(keyword, '');
          isHollow = true;
        }
      });
    }

    dateRelative = relativeTime(new Date(), new Date(date));
    dateReadable = readableDate(date);
    setTimeout(() => (showRelative = true), 3000);

    mounted = true;
  });
</script>

<main>
  <header class="banner">
    {#if isHollow}
      <h1>
        <Hollow text={hollowPrefix} color={'var(--clr-title)'} />
        {fillSuffix}
      </h1>
    {:else}
      <h1>{title}</h1>
    {/if}
    <p>{description}</p>
    {#if !finished}
      <div class="wip">
        <small> 🏗 Construction site, keep out 🏗️ </small>
        <small> 🚧 Authorized personnel only 🚧 </small>
      </div>
    {/if}
    <button
      class="act act-border"
      on:click={() => (showRelative = !showRelative)}
    >
      <small>
        Published: {showRelative ? dateRelative : dateReadable}
      </small>
    </button>
  </header>
  <div class="wider sidebar">
    <aside class="base">
      {#if mounted}
        <ul>
          {#each articleHeaders() as heading}
            <li>{heading.innerText}</li>
          {/each}
        </ul>
      {/if}
    </aside>
    <article id="post">
      <slot />
    </article>
  </div>
</main>

<svelte:head>
  <title>{title}{TITLE_BLOG_COMPOSE}</title>

  <!-- HTML Meta Tags -->
  <meta name="description" content={description} />

  <!-- Google / Search Engine Tags -->
  <meta itemprop="name" content={title} />
  <meta itemprop="description" content={description} />
  <meta itemprop="image" content="" />
  <!-- TODO(santigo-zero): Add image -->

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content={$page.url.toString()} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="" />
  <!-- TODO(santigo-zero): Add image -->

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content="" />
  <!-- TODO(santigo-zero): Add image -->
</svelte:head>

<style>
  article {
    padding: 3rem 0;
    margin-inline: auto;
  }

  header p {
    color: var(--clr-subtitle);
    max-width: 44ch;
    margin-inline: auto;
  }

  button {
    padding: 0.615rem 1.23rem;
    max-width: max-content;
    margin-inline: auto;
    font-size: unset;
  }

  small:active {
    color: inherit;
    background-color: inherit;
  }

  .sidebar {
    display: grid;
    margin-inline: auto;
    grid-template-columns: fit-content(33ch) minmax(min(50vw, 65ch), 1fr);
  }

  aside {
    position: sticky;
    top: 6rem;
    display: grid;
    padding: 1.5rem;
    margin: 1rem;
    place-items: center;
    height: max-content;
    color: var(--clr-subtitle);
    /* background-color: var(--clr-background-alt); */
  }

  ul {
    display: grid;
    gap: 1rem;
  }

  .wip {
    display: grid;
    place-items: center;
  }
</style>
