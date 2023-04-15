<script lang="ts">
  import { base } from '$app/paths'
  import { readableDate } from '$lib/utils/utils'
  import { onMount } from 'svelte'
  import { FilteredPosts } from './store'
  import { fly } from 'svelte/transition'

  let fly_in = { y: 0, duration: 0 }
  let fly_out = { y: 0, duration: 0 }

  onMount(() =>
    setTimeout(() => {
      fly_in = { y: 50, duration: 200 }
      fly_out = { y: -50, duration: 200 }
    }, 100)
  )
</script>

<section role="complementary">
  <ul>
    {#each $FilteredPosts as post}
      <li in:fly={fly_in} out:fly={fly_out}>
        <a href="{base}/blog{post.href}">
          <article class="shiny less attn">
            <h2>{post.title}</h2>
            {#if post.description}
              <p>{post.description}</p>
            {:else}
              <p>No description was given.</p>
            {/if}
            {#if post.datetime}
              <small>Published: {readableDate(post.datetime)}</small>
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
    /* grid-auto-rows: minmax(11.5rem, 1fr); */
    margin-inline: auto;
    width: min(100% - 1rem, var(--md));
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
    display: grid;
    gap: 0.5rem;
    grid-template-rows: auto 1fr auto;

    padding: 1rem;
    border-radius: 1.1rem;
    height: 100%;
    transition: transform 100ms, color 100ms, background-color 500ms,
      border 100ms;

    color: var(--sc-200);
  }

  article:hover {
    transform: scale(1.02);
  }

  @media (prefers-reduced-motion: reduce) {
    article:hover {
      transform: scale(1);
    }
  }

  h2 {
    --range: var(--fz-3);
  }

  p {
    --range: var(--fz-3);
  }
</style>
