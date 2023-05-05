<script lang="ts">
  import { base } from '$app/paths'
  import LinkUI from '$lib/components/navigation/LinkUI.svelte'
  import { Posts } from '$lib/components/search/store'
  import { readableDate, relativeTime } from '$lib/utils/utils'

  function getPic(id: number) {
    let pics = ['/alleged-photo-of-myself.webp', '/plant.webp', '/plant2.webp']
    return pics[id]
  }
</script>

<div id="mention-blog">
  <div class="wrapper">
    <div class="intro">
      <a href="#mention-blog">
        <h2 style:color="var(--clr-250)" class="font-fluid-bs">
          Blog articles
        </h2>
        <p style:color="var(--clr-95)" class="font-fluid-bs">
          Some of my latests posts.
        </p>
      </a>
      <div class="font-3 goto-blog">
        <p class="font-3">
          Press <kbd aria-keyshortcuts="Control+K">Ctrl K</kbd> or
        </p>
        <LinkUI orientation="right" href="{base}/blog">
          See the full blog
        </LinkUI>
      </div>
    </div>
    <section>
      {#each $Posts.slice(0, 3) as { href, title, datetime }, id}
        <a href="{base}/blog{href}">
          <article>
            <img loading="lazy" src={getPic(id)} alt="" />
            {#if datetime}
              <small>
                <time {datetime}>
                  <iconify-icon icon="lucide:calendar" />: {relativeTime(
                    new Date(),
                    new Date(datetime)
                  )}
                  <div aria-orientation="vertical" role="separator">•</div>
                  {readableDate(datetime)}
                </time>
              </small>
            {:else}
              <small aria-hidden="true" style:visibility="hidden">
                No date provided
              </small>
            {/if}
            <h3 style:color="var(--clr-250)" class="font-6">{title}</h3>
          </article>
        </a>
      {/each}
    </section>
  </div>
</div>

<style>
  #mention-blog {
    padding: 6rem 0;
    display: flex;
    min-height: 100vh;
    place-content: center;
    place-items: center;
    border-top: 1px solid var(--clr-15);
  }

  @media screen and (min-height: 80rem) {
    #mention-blog {
      min-height: 0;
    }
  }

  .wrapper {
    display: grid;
    gap: 3rem;

    width: 92%;
    max-width: var(--lg);
  }

  .intro {
    display: flex;
    flex-flow: row wrap-reverse;
    gap: 1.4rem;
    justify-content: space-between;
    place-items: flex-start;
  }

  .intro a[href='#mention-blog'] p,
  .intro a[href='#mention-blog'] h2 {
    font-variation-settings: 'wght' 500;
  }

  .goto-blog {
    display: flex;
    flex-direction: column;
  }

  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 23rem), 1fr));
    gap: 1.6rem;
  }

  article {
    position: relative;
    display: grid;
    gap: 1rem;
    grid-template-rows: auto 1fr auto;
    border-radius: 1.2rem;
    height: 100%;
  }

  article img {
    object-fit: cover;
    border-radius: 0.6rem;
  }

  article time {
    display: flex;
    flex-flow: row wrap;

    font-variation-settings: 'wght' 500;
  }

  section a:nth-child(3) {
    display: none;
  }

  @media screen and (min-width: 80rem) {
    section a:nth-child(3) {
      display: initial;
    }
  }
</style>
