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
const isLocal = import.meta.env.DEV;

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
        <ul class="inline-items">
          {#each tags as tag}
            <li
              style:display={!isLocal && tag === 'Publish' ? 'none' : ''}
              class="font-sub font-sub drop-shadow inline-flex place-items-center
gap-1 px-2 py-1.5 rounded-xl dark:bg-dark-600 dark:border-dark-800 dark:border-t-solid
dark:border-l-solid border-1"
            >
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
      {#if !finished}
        <div class="wip">
          <small>🏗 Construction site, keep out 🏗</small>
          <small>🚧 This article is not finished 🚧</small>
        </div>
      {/if}

      {#if summary}
        <details class="tpl font-p">
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
[role='banner'] {
  background-color: var(--clr-400);
  border-bottom-right-radius: 1.6rem;
  border-bottom-left-radius: 1.6rem;
  display: flex;
  flex-direction: column;
  place-items: start;
}

.back-button {
  margin-inline: auto;
  width: min(100% - 2.2rem, var(--base));
  margin-top: 0.5rem;
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
  margin-top: clamp(1rem, 2vw + 1rem, 3rem);
}

:global(.blog-post p img),
:global(.blog-post > * + *) {
  margin-block-start: 1em;
}

header {
  display: flex;
  flex-direction: column;
}

.wrapper-header {
  margin-top: 1.5rem;
  text-align: center;
  padding-bottom: clamp(1rem, 2vw + 1rem, 6rem);
}

header p {
  max-width: 44ch;
  margin-top: 1rem;
  margin-inline: auto;
}

.wip {
  place-items: center;
  margin-top: 0.5rem;
}

small {
  font-weight: 500;
}

ul {
  max-width: var(--sm);
  margin-inline: auto;
  justify-content: center;
  margin-top: 0.75rem;
}

time {
  display: flex;
  place-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}

details {
  --bg: var(--clr-600);
  --brd: var(--clr-700);
  font-family: var(--ff-text);
  display: flex;
  max-width: var(--sm);
  margin-inline: auto;
  padding: 0.4rem 0.8rem;
  margin-top: 1rem;
  text-align: left;
}

summary {
  padding: 0 0.4rem;
  color: var(--clr-red-40);
  text-align: center;
}
</style>
