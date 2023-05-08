<script lang="ts">
  import site from '$lib/site.json'
  import { page } from '$app/stores'
  import { onMount } from 'svelte'
  import Hollow from './Hollow.svelte'
  import { readableDate, relativeTime } from '$lib/utils/utils'
  import { base } from '$app/paths'
  import LinkUI from './navigation/LinkUI.svelte'

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

  const keywords = ['How', 'How to', 'How to:', 'How To']

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

<section>
  <main>
    <div class="back-button">
      <LinkUI orientation="left" href="{base}/blog">Back to Blog</LinkUI>
    </div>
    <div class="wrapper-header">
      {#if isHollow}
        <h1 class="font-80">
          <Hollow color={'var(--clr-100)'}>{hollowPrefix}</Hollow>
          {fillSuffix}
        </h1>
      {:else}
        <h1>{title}</h1>
      {/if}
      <p>{description}</p>
      {#if datetime}
        <time
          style="font-weight: 500; color: var(--clr-95)"
          class="font-10"
          {datetime}>
          <iconify-icon icon="lucide:calendar" />: {dateRelative}
          <div aria-orientation="vertical" role="separator">&nbsp;•&nbsp;</div>
          {dateReadable}
        </time>
      {/if}
      {#if !finished}
        <div class="wip">
          <small>🏗 Construction site, keep out 🚧</small>
          <small>🚧 Authorized personnel only 🏗️</small>
          <small>🏗️ This article is not finished 🏗</small>
        </div>
      {/if}
      <br />
    </div>
  </main>
  <article>
    <slot />
  </article>
</section>

<svelte:head>
  <title>{title} - {site.blog.title_append}</title>

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
  main {
    background-color: var(--clr-25);
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    display: flex;
    flex-direction: column;
    place-items: start;
    padding-bottom: 1rem;
  }

  .back-button {
    margin-inline: auto;
    width: min(92%, var(--base));
    margin-bottom: 0.4rem;
  }

  .wrapper-header,
  .wip {
    display: grid;
    width: min(92%, var(--xl));
    margin-inline: auto;
  }

  article {
    width: min(92%, var(--base));
    margin-inline: auto;
  }

  .wrapper-header {
    gap: 1rem;
    text-align: center;
  }

  .wrapper-header p {
    max-width: 44ch;
    margin-inline: auto;
  }

  .wip {
    place-items: center;
  }

  small {
    font-weight: 500;
  }

  time {
    display: flex;
    place-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
