<script lang="ts">
  import { TITLE_BLOG_COMPOSE } from '$lib/config';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import Hollow from './Hollow.svelte';
  import { articleHeaders, readableDate, relativeTime } from '$lib/utils/utils';

  export let title = '';
  export let date = '';
  export let description = '';

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
    <button on:click={() => (showRelative = !showRelative)}>
      <small>
        Published: {showRelative ? dateRelative : dateReadable}
      </small>
    </button>
  </header>
  <div class="wider sidebar">
    <aside>
      {#if mounted}
        <ul>
          {#each articleHeaders() as heading}
            <li>{heading.innerText}</li>
          {/each}
        </ul>
      {/if}
    </aside>
    <article>
      <slot />
    </article>
    <!-- </div> -->
  </div>
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
  article {
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

  button {
    border: 0.13rem solid transparent;
    border-radius: 0.6rem;
    padding: 0.3rem 0.6rem;
    max-width: max-content;
    margin-inline: auto;
  }

  button:hover {
    filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
      drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
    background-color: var(--clr-background-highlight-secondary);
    color: var(--clr-text);
    border-top: 0.13rem solid var(--clr-border-card-active);
    border-left: 0.13rem solid var(--clr-border-card-active);
    border-right: 0.13rem solid transparent;
    border-bottom: 0.13rem solid transparent;
  }

  .sidebar {
    display: grid;
    margin-inline: auto;
    grid-template-columns: fit-content(30ch) minmax(min(50vw, 30ch), 1fr);
  }

  aside {
    position: sticky;
    top: 10rem;
    display: grid;
    place-items: center;
    height: max-content;
    color: var(--clr-subtitle);
    background-color: var(--clr-background-alt);
    padding: 1.5rem;
    margin: 1rem;
  }
</style>
