<script lang="ts">
  import site from '$lib/site.json'
  import { page } from '$app/stores'
  import { onMount } from 'svelte'
  import Hollow from './Hollow.svelte'
  import { readableDate, relativeTime } from '$lib/utils/utils'
  import { base } from '$app/paths'

  export let title = ''
  export let datetime = ''
  export let description = ''
  export let finished = false

  const dateRelative = !datetime
    ? datetime
    : relativeTime(new Date(), new Date(datetime))
  const dateReadable = !datetime ? datetime : readableDate(datetime)

  let isHollow = false
  let hollowPrefix = ''
  let fillSuffix = ''

  const keywords = ['How ', 'How to ', 'How to: ']

  onMount(() => {
    if (title) {
      keywords.some(keyword => {
        if (title.startsWith(keyword)) {
          hollowPrefix = keyword
          fillSuffix = title.replace(keyword, '')
          isHollow = true
        }
      })
    }
  })
</script>

<main>
  <header>
    <div class="wrapper-header wider">
      <a class="slide-backwards" id="backtoblog" href="{base}/blog"
        >Back to blog</a>
      {#if isHollow}
        <h1>
          <Hollow color={'var(--txt-A)'}>{hollowPrefix}</Hollow>
          {fillSuffix}
        </h1>
      {:else}
        <h1>{title}</h1>
      {/if}
      <p style="--range: var(--fz-3)">{description}</p>
      {#if !finished}
        <div class="wip">
          <small>🏗 Construction site, keep out 🚧</small>
          <small>🚧 Authorized personnel only 🏗️</small>
          <small>🏗️ This article is not finished 🏗</small>
        </div>
      {/if}
      {#if datetime}
        <hr
          style="width: 50%; margin-inline: auto"
          aria-orientation="horizontal" />
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
  <title>{title}{site.title_blog_append}</title>

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
    background-color: var(--bg-400);
  }

  article,
  .wrapper-header,
  .wip {
    display: grid;
    width: min(100% - 1rem, var(--base));
    margin-inline: auto;
    place-content: center;
  }

  .wrapper-header {
    gap: 1rem;
  }

  .wrapper-header p {
    max-width: 44ch;
    margin-inline: auto;
  }

  .wip {
    place-items: center;
  }

  time {
    display: flex;
    place-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  #backtoblog {
    text-align: left;
    width: min(100% - 1rem, var(--base));
    color: var(--dim-700);
    margin-inline: auto;
    font-variation-settings: 'wght' 600;
  }
</style>
