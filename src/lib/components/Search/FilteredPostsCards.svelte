<script lang="ts">
  import { base } from '$app/paths';
  import { readableDate } from '$lib/utils/utils';
  import { FilteredPosts } from './store';
  import { fly } from 'svelte/transition';

  FilteredPosts;
</script>

<section role="complementary">
  <ul class="wider">
    {#each $FilteredPosts as post}
      <li in:fly={{ y: 50, duration: 300 }} out:fly={{ y: -50, duration: 300 }}>
        <a href="{base}/blog{post.href}">
          <article class="base act">
            <h2>{post.title}</h2>
            {#if post.description}
              <p>{post.description}</p>
            {:else}
              <p>No description was given.</p>
            {/if}
            {#if post.date}
              <small>Published: {readableDate(post.date)}</small>
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
    gap: var(--gap);
    grid-template-columns: repeat(auto-fill, minmax(min(23rem, 100%), 1fr));
    grid-auto-rows: minmax(11.5rem, 1fr);
    margin-inline: auto;
  }

  /* li { */
  /*   transition: opacity 0.3s; */
  /* } */

  /* ul:hover > li { */
  /*   opacity: 0.8; */
  /* } */

  /* ul:hover > li:hover { */
  /*   opacity: 1; */
  /* } */

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
    transition: transform 0.2s;
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
    font-weight: 700;
    font-size: clamp(1rem, 8vw, 1.6rem);

    color: var(--clr-title);
    line-height: calc(1.5 * clamp(1rem, 8vw, 1.8rem));
  }
</style>
