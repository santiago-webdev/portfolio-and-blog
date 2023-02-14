<script lang="ts">
  import { base } from '$app/paths';
    import { readableDate } from '$lib/utils/utils';
  import { FilteredPosts } from './store';

  FilteredPosts;
</script>

<section role="complementary">
  <ul class="wider">
    {#each $FilteredPosts as post}
      <li>
        <a href="{base}/blog{post.href}">
          <article>
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

  li {
    transition: opacity 0.3s;
  }

  ul:hover > li {
    opacity: 0.6;
  }

  ul:hover > li:hover {
    opacity: 1;
  }

  /* ul:hover > li { */
  /*   opacity: 1; */
  /* } */

  /* TODO(santigo-zero): Add this programatically instead of hardcoding values */
  /* li:nth-child(4) { */
  /*   opacity: 0.8; */
  /* } */
  /**/
  /* li:nth-child(5) { */
  /*   opacity: 0.75; */
  /* } */
  /**/
  /* li:nth-child(6) { */
  /*   opacity: 0.7; */
  /* } */
  /**/
  /* li:nth-child(7) { */
  /*   opacity: 0.65; */
  /* } */
  /**/
  /* li:nth-child(8) { */
  /*   opacity: 0.6; */
  /* } */

  @supports (grid-template-rows: masonry) {
    ul {
      grid-template-rows: masonry;
    }
  }

  article {
    /* TODO(santigo-zero): Make this borders smaller in mobile */
    border-top: 0.12rem solid var(--clr-border-card);
    border-left: 0.12rem solid var(--clr-border-card);
    border-right: 0.12rem solid transparent;
    border-bottom: 0.12rem solid transparent;
    background-color: var(--clr-background-alt);
    color: var(--clr-text);
    box-shadow: 6px 6px 6px 0px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 6px 6px 6px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 6px 6px 6px 0px rgba(0, 0, 0, 0.1);

    display: grid;
    gap: 0.5rem;
    grid-template-rows: auto 1fr auto;

    padding: 1rem;
    border-radius: 1.1rem;
    height: 100%;
    transition: transform 0.15s;
  }

  article:hover {
    transform: scale(1.02);
    background-color: var(--clr-background-highlight-secondary);
    border-top: 0.12rem solid var(--clr-border-card-active);
    border-left: 0.12rem solid var(--clr-border-card-active);
    border-right: 0.12rem solid transparent;
    border-bottom: 0.12rem solid transparent;
  }

  @media (prefers-reduced-motion: reduce) {
    article:hover {
      transform: scale(1);
    }
  }

  a,
  p {
    color: inherit;
  }

  a:focus article {
    color: var(--clr-background-alt);
    background-color: var(--accent-peachy);
  }

  h2 {
    font-weight: 700;
    font-size: clamp(1rem, 8vw, 1.6rem);

    color: var(--clr-subtitle);
    line-height: calc(1.5 * clamp(1rem, 8vw, 1.8rem));
  }

  small {
    color: var(--clr-text-muted);
  }
</style>
