<script lang="ts">
  import { TITLE_BLOG_COMPOSE } from '$lib/config';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import Hollow from './Hollow.svelte';

  export let title = '';
  export let date = '';
  export let description = '';

  let isHollow = false;
  let hollowPrefix = '';

  const keywords = ['How ', 'How to ', 'How to: '];
  onMount(() => {
    if (title) {
      keywords.some(keyword => {
        if (title.startsWith(keyword)) {
          hollowPrefix = keyword;
          title = title.replace(keyword, '');
          isHollow = true;
        }
      });
    }
  });
</script>

<main>
  <header>
    <div class="focus container-header">
      {#if isHollow}
        <h1>
          <Hollow text={hollowPrefix} color={'var(--clr-title)'} />
          {title}
        </h1>
      {:else}
        <h1>{title}</h1>
      {/if}
      <p>{description}</p>
      <hr />
      <small>Published: {date}</small>
    </div>
  </header>
  <article class="wide">
    <slot />
  </article>
</main>

<svelte:head>
  <title>{title}{TITLE_BLOG_COMPOSE}</title>

  <!-- TODO(santigo-zero): meta tags for dynamic routing -->
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
  header {
    background-color: var(--clr-background-alt);
    padding: 3rem 0;
  }

  .container-header {
    display: grid;
    place-content: center;
    gap: 1rem;
    text-align: center;
  }

  article {
    /* display: grid; */
    /* text-align: center; */
    /* width: 100%; */
    padding: 3rem 0;
    margin-inline: auto;
  }

  header p {
    color: var(--clr-subtitle);
    max-width: 44ch;
    margin-inline: auto;
  }

  small {
    color: var(--clr-text-muted);
  }

  hr {
    display: grid;
    place-items: center;
    width: min(100% - 1rem);
    border-color: var(--clr-text-muted);
    padding: 0;
    margin: 0;
    margin-inline: auto;
  }
</style>
