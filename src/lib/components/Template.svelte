<script context="module">
  import { img, ol, ul, li, table, a, p } from '$lib/mdsvex_components/index';
  export { img, ol, ul, li, table, a, p };
</script>

<script>
  import Hollow from './Hollow.svelte';
  import { readableDate, relativeTime, retrieve_icon } from '$lib/utils/utils';
  import { base } from '$app/paths';

  import LinkArrow from './navigation/LinkArrow.svelte';

  export let title = '';
  export let datetime = '';
  export let description = '';
  export let finished = false;
  /** @type {string[]} */
  export let tags = [];
  export let summary = '';

  const dateRelative = !datetime
    ? datetime
    : relativeTime(new Date(), new Date(datetime));
  const dateReadable = !datetime ? datetime : readableDate(datetime);

  let isHollow = false;
  let hollowPrefix = '';
  let fillSuffix = '';

  const keywords = ['How', 'How to', 'How to:', 'How To'];

  if (title) {
    keywords.some((keyword) => {
      if (title.startsWith(keyword)) {
        hollowPrefix = keyword;
        fillSuffix = title.replace(keyword, '');
        isHollow = true;
      }
    });
  }
</script>

<section>
  <div role="banner">
    <div class="back-button">
      <LinkArrow orientation="left" href="{base}/blog">Back to Blog</LinkArrow>
    </div>
    <div class="wrapper-header">
      <hgroup>
        {#if isHollow}
          <h1 class="font-90">
            <Hollow color={'var(--clr-250)'}>{hollowPrefix}</Hollow>
            {fillSuffix}
          </h1>
        {:else}
          <h1 class="font-90">{title}</h1>
        {/if}
        <p class="font-30">{description}</p>
      </hgroup>
      {#if tags}
        <ul class="tags inline-items font-10">
          {#each tags as tag}
            <li class="tpl">
              <iconify-icon width="22" height="22" icon={retrieve_icon(tag)} />
              {tag}
            </li>
          {/each}
        </ul>
      {/if}

      {#if datetime}
        <time {datetime}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <path d="M16 2v4M8 2v4m-5 4h18" />
            </g>
          </svg>
          &nbsp;{dateRelative}
          <div aria-orientation="vertical" role="separator">&nbsp;•&nbsp;</div>
          {dateReadable}
        </time>
      {/if}

      {#if summary}
        <details class="tpl font-20">
          <summary class="font-10">Summary</summary>
          {summary}
        </details>
      {/if}

      {#if !finished}
        <div class="wip">
          <small>🏗 Construction site, keep out 🏗</small>
          <small>🚧 This article is not finished 🚧</small>
        </div>
      {/if}
      <br />
    </div>
  </div>

  <main class="blog-post">
    <slot />
  </main>
</section>

<style>
  [role='banner'] {
    background-color: var(--clr-25);
    border-bottom-right-radius: 1.6rem;
    border-bottom-left-radius: 1.6rem;
    display: flex;
    flex-direction: column;
    place-items: start;
  }

  .back-button {
    margin-inline: auto;
    width: min(100% - 2.2rem, var(--base));
    margin-top: 0.8rem;
    margin-bottom: 0.4rem;
  }

  .wrapper-header,
  .wip {
    display: grid;
    width: min(100% - 2.2rem, var(--xl));
    margin-inline: auto;
  }

  main {
    width: min(100% - 2.2rem, var(--sm));
    margin-inline: auto;
    padding-top: 1rem;
  }

  :global(.blog-post p img),
  :global(.blog-post > * + *) {
    margin-block-start: 1em;
  }

  hgroup {
    display: flex;
    flex-direction: column;
  }

  hgroup > * + * {
    margin-block-start: 1em;
  }

  .wrapper-header {
    gap: 1.2rem;
    text-align: center;
  }

  .wrapper-header p {
    max-width: 44ch;
    margin-inline: auto;
  }

  .wip {
    place-items: center;
    margin-top: 0.6rem;
  }

  small {
    font-weight: 500;
  }

  .tags {
    /* width: min(100%, var(--sm)); */
    max-width: var(--sm);
    margin-inline: auto;
    place-content: center;
  }

  .tags li {
    --bg: var(--clr-40);
    --brd: var(--clr-45);
    margin-top: 0.6rem;
    display: flex;
    place-items: center;
    gap: 0.5ch;
    padding: 0.4rem 0.8rem;
    border-radius: 0.75rem;
  }

  time {
    display: flex;
    place-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  details {
    --bg: var(--clr-40);
    --brd: var(--clr-45);
    font-family: var(--ff-text);
    display: flex;
    gap: 2rem;
    /* width: min(100% - 2.2rem, var(--base)); */
    margin-inline: auto;
    padding: 0.4rem 0.8rem;
  }

  summary {
    padding: 0.2rem 0.4rem;
    color: var(--clr-red-40);
  }
</style>
