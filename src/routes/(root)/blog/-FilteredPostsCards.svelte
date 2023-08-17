<script lang="ts">
import { readableDate, relativeTime, retrieve_icon } from '$lib/utils/utils';
import { FilteredPosts } from '$lib/components/blog/store';
import { fly } from 'svelte/transition';

const isLocal = import.meta.env.DEV;

let fly_in = { y: 50, duration: 200 };
let fly_out = { y: -50, duration: 200 };
</script>

<section role="complementary">
  <ul class="blog-list">
    {#each $FilteredPosts as post}
      <li in:fly={fly_in} out:fly={fly_out}>
        <a href={post.href}>
          <article>
            <h2>{post.title}</h2>
            {#if post.tags}
              <ul class="inline-items mt-1">
                {#each post.tags as tag}
                  <li
                    style:display={!isLocal && tag === 'Publish' ? 'none' : ''}
                    class="font-sub drop-shadow inline-flex place-items-center gap-1 px-2 py-1.5 rounded-xl {tag ===
                    'Publish'
                      ? 'reverse'
                      : 'dark:bg-dark-700 dark:border-dark-800 dark:border-t-solid dark:border-l-solid border-1'}"
                  >
                    <iconify-icon width="22" icon={retrieve_icon(tag)} />
                    {tag}
                  </li>
                {/each}
              </ul>
            {/if}

            {#if post.description}<p>{post.description}</p>{/if}

            {#if post.datetime}
              <time class="mt-8" datetime={post.datetime}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
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
                <div aria-orientation="vertical" role="separator">&nbsp;&mdash;&nbsp;</div>
                {readableDate(post.datetime)}
              </time>
            {/if}
            {#if !post.finished}
              <small
                class="mt-1 p-2 border-solid border-2 dark:border-dark-inv-200 rounded-xl dark:text-dark-inv-600"
                >🚧 In the works 🚧</small
              >
            {/if}
          </article>
        </a>
      </li>
    {/each}
  </ul>
</section>

<style>
@supports (grid-template-rows: masonry) {
  section > ul {
    grid-template-rows: masonry;
  }
}

li {
  transition: opacity 0.3s;
}

.blog-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(23rem, 100%), 1fr));
  gap: 0.75rem;
  padding-bottom: 1rem;
  margin-inline: auto;
}

section {
  margin-inline: auto;
  width: min(100% - 1rem, var(--xl));
}

section > ul:hover > li {
  opacity: 0.8;
}

section > ul:hover > li:hover {
  opacity: 1;
}

article {
  grid-template-rows: auto 1fr auto auto;
  transition: transform 100ms, color 100ms, background-color 500ms, border 100ms;
  display: grid;
  place-items: start;
  padding: 0.75rem;
  height: 100%;
  background: var(--srf-3);
  border: 0px var(--srf-3-brd) solid;
  border-width: 1px 0 0 1px;
  border-radius: 12px;
}

p {
  margin-top: 1.5rem;
  color: var(--text-2);
}

@media screen and (min-width: 1024px) and (prefers-reduced-motion: no-preference) {
  article:hover {
    transform: scale(1.02);
  }

  .blog-list {
    gap: 1rem;
  }
}
</style>
