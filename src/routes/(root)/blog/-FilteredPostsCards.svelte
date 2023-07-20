<script lang="ts">
import { readableDate, relativeTime, retrieve_icon } from '$lib/utils/utils';
import { FilteredPosts } from '$lib/components/blog/store';
import { fly } from 'svelte/transition';

const isLocal = import.meta.env.DEV;

let fly_in = { y: 50, duration: 200 };
let fly_out = { y: -50, duration: 200 };
</script>

<section role="complementary">
  <ul>
    {#each $FilteredPosts as post}
      <li in:fly={fly_in} out:fly={fly_out}>
        <a href={post.href}>
          <article class="tpl">
            <h2>{post.title}</h2>
            {#if post.tags}
              <ul class="inline-items">
                {#each post.tags as tag}
                  <li
                    style:display={!isLocal && tag === 'Publish' ? 'none' : ''}
                    class="tpl tags font-sub {tag === 'Publish'
                      ? 'reverse'
                      : 'default'}"
                  >
                    <iconify-icon width="22" icon={retrieve_icon(tag)} />
                    {tag}
                  </li>
                {/each}
              </ul>
            {/if}

            {#if post.description}
              <p>{post.description}</p>
            {/if}

            {#if post.datetime}
              <time datetime={post.datetime}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
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
                &nbsp;{relativeTime(new Date(), new Date(post.datetime))}
                <div aria-orientation="vertical" role="separator">
                  &nbsp;&mdash;&nbsp;
                </div>
                {readableDate(post.datetime)}
              </time>
            {/if}
            {#if !post.finished}
              <small>🚧 In the works 🚧</small>
            {/if}
          </article>
        </a>
      </li>
    {/each}
  </ul>
</section>

<style>
section > ul {
  padding-bottom: 1rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(min(23rem, 100%), 1fr));
  margin-inline: auto;
  width: min(92%, var(--md));
}

li {
  transition: opacity 0.3s;
}

section > ul:hover > li {
  opacity: 0.8;
}

section > ul:hover > li:hover {
  opacity: 1;
}

@supports (grid-template-rows: masonry) {
  section > ul {
    grid-template-rows: masonry;
  }
}

article {
  --bg: var(--clr-25);
  --brd: var(--bg);
  display: grid;
  place-items: start;
  grid-template-rows: auto 1fr auto auto;

  padding: 1rem;
  border-radius: 1.1rem;
  height: 100%;
  transition: transform 100ms, color 100ms, background-color 500ms, border 100ms;
}

/* Hierarchy */
/* h2 | ul || p || time | small */
article ul.inline-items {
  margin-block-start: 0.4rem;
}

article p {
  margin-block-start: 1rem;
}

article time {
  margin-block-start: 2rem;
}

article small {
  margin-block-start: 0.5rem;
}
/* Hierarchy */

@media screen and (min-width: 1024px) and (prefers-reduced-motion: no-preference) {
  article:hover {
    transform: scale(1.02);
  }
}

p {
  color: var(--clr-inv-700);
}

time {
  place-content: center;
}

small {
  border: 1px solid var(--clr-inv-300);
  color: var(--clr-inv-700);
  padding: 0.4rem 0.6rem;
  border-radius: 0.8rem;
}

@media screen and (min-width: 1024px) and (prefers-reduced-motion: no-preference) {
  article:hover {
    transform: scale(1.02);
  }
}
</style>
