<script lang="ts">
import { readableDate, relativeTime, retrieve_icon } from '$lib/utils/utils';
import { FilteredPosts } from '$lib/components/blog/store';
// import { fly } from 'svelte/transition';
//
// let fly_in = { y: 50, duration: 200 };
// let fly_out = { y: -50, duration: 200 };
</script>

<section role="complementary">
  <ul>
    {#each $FilteredPosts as post}
      <!-- <li in:fly={fly_in} out:fly={fly_out}> -->
      <li>
        <a href={post.href}>
          <article class="tpl">
            <h2 class="font-30">
              {post.title}
            </h2>
            {#if post.description}
              <p class="font-20">{post.description}</p>
            {:else}
              <p class="font-20">No description was given.</p>
            {/if}

            {#if post.tags}
              <ul class="tags">
                {#each post.tags as tag}
                  <li class="tpl font-10">
                    <iconify-icon
                      width="20"
                      height="20"
                      icon={retrieve_icon(tag)}
                    />
                    {tag}
                  </li>
                {/each}
              </ul>
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
              <small class="tpl">🚧 In the works 🚧</small>
            {/if}
          </article>
        </a>
      </li>
    {/each}
  </ul>
</section>

<style>
ul {
  padding: 2rem 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(min(23rem, 100%), 1fr));
  margin-inline: auto;
  width: min(92%, var(--md));
}

li {
  transition: opacity 0.3s;
}

ul:hover > li {
  opacity: 0.8;
}

ul:hover > li:hover {
  opacity: 1;
}

@supports (grid-template-rows: masonry) {
  ul {
    grid-template-rows: masonry;
  }
}

article {
  --bg: var(--clr-25);
  --brd: var(--clr-30);
  display: grid;
  place-items: start;
  grid-template-rows: auto 1fr auto auto;

  padding: 1rem;
  border-radius: 1.1rem;
  height: 100%;
  transition: transform 100ms, color 100ms, background-color 500ms, border 100ms;
}

article p {
  color: var(--clr-200);
}

article > * + * {
  margin-block-start: 1em;
}

@media screen and (min-width: 1024px) and (prefers-reduced-motion: no-preference) {
  article:hover {
    transform: scale(1.02);
  }
}

h2 {
  font-family: var(--ff-dflt);
  font-variation-settings: 'wght' 750;
  font-weight: 500;
}

p {
  font-variation-settings: 'wght' 400;
  font-weight: 400;
}

time {
  place-content: center;
}

small {
  --bg: var(--clr-15);
  --brd: var(--clr-15);
  color: var(--clr-200);
  padding: 0.4rem;
  border-radius: 8px;
}

.tags {
  --bg: var(--clr-35);
  --brd: var(--clr-40);
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 2rem;
}

.tags li {
  --bg: var(--clr-40);
  --brd: var(--clr-45);
  color: var(--clr-200);

  display: flex;
  place-items: center;
  padding: 0.3rem 0.8rem;
  /* margin-top: 0.6rem; */
  gap: 0.5ch;
  /* padding: 0.4rem 0.8rem; */
  border-radius: 0.75rem;
}
</style>
