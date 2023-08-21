<script context="module">
import { img, ol, ul, li, table, a, p, hr } from '$lib/mdsvex_components/index';
export { img, ol, ul, li, table, a, p, hr };
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

const dateRelative = !datetime ? datetime : relativeTime(new Date(), new Date(datetime));
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
    <div class="wrapper-backtoblog-anchor">
      <LinkArrow orientation="left" href="{base}/blog">Back to Blog</LinkArrow>
    </div>
    <div class="wrapper-header">
      <header>
        {#if isHollow}
          <h1 class="font-fluid-5">
            <Hollow color={'var(--text-2)'}>{hollowPrefix}</Hollow>
            {fillSuffix}
          </h1>
        {:else}
          <h1 class="font-fluid-5">{title}</h1>
        {/if}
        {#if description}
          <p class="font-h3">{description}</p>
        {/if}
      </header>
      {#if tags}
        <ul class="inline-items tags">
          {#each tags as tag}
            <li class="font-sub">
              <iconify-icon width="22" height="22" icon={retrieve_icon(tag)} />{tag}
            </li>
          {/each}
        </ul>
      {/if}

      {#if datetime}
        <time {datetime}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
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
      {#if !finished}
        <div class="wip">
          <small>🏗 Construction site, keep out 🏗</small>
          <small>🚧 This article is not finished 🚧</small>
        </div>
      {/if}

      {#if summary}
        <details class="font-p">
          <summary>Summary</summary>
          {summary}
        </details>
      {/if}
    </div>
  </div>

  <main class="blog-post">
    <slot />
  </main>
</section>

<style>
section {
  --contain: min(100% - 2rem, var(--sm));
}

[role='banner'] {
  display: flex;
  flex-direction: column;
  place-items: start;
  background-color: var(--srf-3);
  border-bottom-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}

.wrapper-backtoblog-anchor {
  width: var(--contain);
  display: grid;
  place-items: start;
  margin-inline: auto;
  margin-top: 0.5rem; /* spacing from navbar */
}

.wrapper-header,
.wip {
  display: grid;
  width: min(100% - 2.2rem, var(--2xl));
  margin-inline: auto;
}

time {
  margin-top: 3rem;
  place-content: center;
}

.wrapper-header {
  margin-top: 1.5rem; /* spacing h1 from Index anchor */
  text-align: center;
  padding-bottom: clamp(1rem, 2vw + 1rem, 6rem);
}

header {
  display: flex;
  flex-direction: column;
}

header p {
  max-width: 44ch;
  margin-top: 1.5rem; /* spacing p from h1 */
  margin-inline: auto;
}

.wip {
  place-items: center;
  margin-top: 0.5rem;
}

ul {
  max-width: var(--sm);
  margin-inline: auto;
  justify-content: center;
  margin-top: 0.75rem;
}

details {
  display: flex;
  background: var(--srf-4);
  border: thin var(--srf-4) solid;
  border-top-color: var(--srf-4-brd);
  border-left-color: var(--srf-4-brd);
  border-radius: 0.75rem;
  margin-top: 1rem;
  margin-inline: auto;
  padding: 0.5rem 1rem;
  max-width: var(--sm);
  text-align: left;

  box-shadow: 4px 4px 4px 0 rgb(0 0 0 / 0.06);
}

summary {
  padding: 0 0.5rem;
  text-align: center;
  color: var(--clr-red-40);
}

main {
  margin: clamp(1rem, 2vw + 1rem, 3rem) auto 3rem auto;
  width: var(--contain);
}

:global(.blog-post p img),
:global(.blog-post > * + *) {
  margin-block-start: 1em;
}
</style>
