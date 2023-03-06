<script lang="ts">
  import { TITLE_BLOG_COMPOSE } from '$lib/config';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import Hollow from './Hollow.svelte';
  import { readableDate, relativeTime } from '$lib/utils/utils';

  export let title = '';
  export let datetime = '';
  export let description = '';
  export let finished = false;

  const dateRelative = !datetime
    ? datetime
    : relativeTime(new Date(), new Date(datetime));
  const dateReadable = !datetime ? datetime : readableDate(datetime);

  let isHollow = false;
  let hollowPrefix = '';
  let fillSuffix = '';

  const keywords = ['How ', 'How to ', 'How to: '];

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
  });
</script>

<main>
  <header id="page-header-info" class="banner">
    <div aria-labelledby="page-header-info" class="wrapper-header wide">
      {#if isHollow}
        <h1>
          <Hollow color={'var(--clr-title)'}>{hollowPrefix}</Hollow>
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
      {#if datetime}
        <small>
          <time {datetime}>
            <iconify-icon icon="lucide:calendar" />: {dateRelative}
            <div aria-orientation="vertical" role="separator">•</div>
            {dateReadable}
          </time>
        </small>
      {/if}
    </div>
  </header>
  <article class="wide">
    <slot />
  </article>
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
    display: grid;
    margin-inline: auto;
  }

  .wrapper-header {
    display: grid;
    gap: 1rem;
  }

  .wrapper-header p {
    color: var(--clr-subtitle);
    max-width: 44ch;
    margin-inline: auto;
  }

  small {
    /* padding: 0.615rem 1.23rem; */
    /* max-width: max-content; */
    /* font-size: unset; */
    margin-inline: auto;
    color: var(--clr-muted-600);
  }

  .wip {
    display: grid;
    place-items: center;
  }

  time {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
