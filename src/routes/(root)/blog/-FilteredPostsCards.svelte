<script lang="ts">
import { readableDate, relativeTime, retrieve_icon } from '$lib/utils/utils';
import { FilteredPosts } from '$lib/components/blog/store';
import { fly } from 'svelte/transition';

const isLocal = import.meta.env.DEV;

let fly_in = { y: 50, duration: 200 };
let fly_out = { y: -50, duration: 200 };
</script>

<section role="complementary" class="mx-auto max-w-screen-2xl">
  <ul
    class="grid grid-cols-[repeat(auto-fill,minmax(min(23rem,100%),1fr))] gap-4 px-2 pb-4 mx-auto"
  >
    {#each $FilteredPosts as post}
      <li in:fly={fly_in} out:fly={fly_out}>
        <a href={post.href}>
          <article
            class="grid place-items-start p-3 md:p-5 h-full rounded-2xl dark:bg-dark-400 border-t border-l border-t-solid border-l-solid dark:border-dark-600"
          >
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

            {#if post.description}
              <p class="mt-3 dark:text-dark-inv-700">{post.description}</p>
            {/if}

            {#if post.datetime}
              <time class="mt-8" datetime={post.datetime}>
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

section > ul:hover > li {
  opacity: 0.8;
}

section > ul:hover > li:hover {
  opacity: 1;
}

article {
  grid-template-rows: auto 1fr auto auto;
  transition: transform 100ms, color 100ms, background-color 500ms, border 100ms;
}

@media screen and (min-width: 1024px) and (prefers-reduced-motion: no-preference) {
  article:hover {
    transform: scale(1.02);
  }
}
</style>
