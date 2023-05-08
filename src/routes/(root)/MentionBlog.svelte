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
        <h2 style:color="var(--clr-200)">Blog articles</h2>
        <p style:color="var(--clr-95)" class="font-60">
          Some of my latests posts.
        </p>
      </a>
      <div class="goto-blog">
        <p>
          Press <kbd aria-keyshortcuts="Control+K">Ctrl K</kbd> or
        </p>
        <LinkUI class="font-30" orientation="right" href="{base}/blog">
          See the full blog
        </LinkUI>
      </div>
    </div>
    <section>
      {#each $Posts.slice(0, 3) as { href, title, datetime }, id}
        <a href="{base}/blog{href}">
          <article>
            <div class="img-wrapper">
              <img loading="lazy" src={getPic(id)} alt="" />
            </div>
            {#if datetime}
              <time class="font-20" {datetime}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24">
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <path d="M16 2v4M8 2v4m-5 4h18" />
                  </g>
                </svg>&nbsp;{relativeTime(new Date(), new Date(datetime))}
                <div aria-orientation="vertical" role="separator">
                  &nbsp;&mdash;&nbsp;
                </div>
                {readableDate(datetime)}
              </time>
            {:else}
              <small aria-hidden="true" style:visibility="hidden">
                No date provided
              </small>
            {/if}
            <h3 style:color="var(--clr-250)">{title}</h3>
          </article>
        </a>
      {/each}
    </section>
  </div>
</div>

<style>
  #mention-blog {
    padding: 3rem 0;
    display: flex;
    place-content: center;
    place-items: center;
    border-top: 1px solid var(--clr-15);
    margin-bottom: 3rem;
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

  .goto-blog {
    display: flex;
    flex-direction: column;
  }

  kbd {
    font-size: inherit;
    font-weight: normal;
  }

  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 23rem), 1fr));
    gap: 1.6rem;
  }

  article {
    position: relative;
    display: flex;
    flex-flow: column wrap;
    gap: 1rem;
  }

  .img-wrapper {
    max-height: 36rem;
    overflow: hidden;
    border-radius: 0.8rem;
  }

  img {
    max-inline-size: 100%;
    block-size: auto;
    object-fit: scale-down;
    object-position: center center;
  }

  time {
    display: flex;
    flex-flow: row wrap;
    place-items: center;

    /* font-variation-settings: 'wght' 450; */
    /* font-weight: 400; */
    color: var(--clr-90);
  }

  section a:nth-child(3) {
    display: none;
  }

  @media screen and (min-width: 1280px) {
    section a:nth-child(3) {
      display: initial;
    }
  }
</style>
