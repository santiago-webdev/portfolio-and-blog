<script lang="ts">
import { base } from '$app/paths';
import LinkArrow from '$lib/components/navigation/LinkArrow.svelte';
import { Posts } from '$lib/components/blog/store';
import { readableDate, relativeTime } from '$lib/utils/utils';

function getPic(id: number) {
  let pics = ['/alleged-photo-of-myself.webp', '/plant.webp', '/plant2.webp'];
  return pics[id];
}
</script>

<div id="mention-blog">
  <div class="wrapper">
    <div class="intro">
      <h2 style:color="var(--clr-200)">Blog articles</h2>
      <div class="goto-blog">
        <p>
          Press <kbd aria-keyshortcuts="Control+K">Ctrl K</kbd> or
        </p>
        <LinkArrow class="font-30" orientation="right" href="{base}/blog"
          >See the full blog</LinkArrow
        >
      </div>
    </div>
    <section>
      {#each $Posts.slice(0, 3) as { href, title, datetime }, id}
        <a {href}>
          <article>
            <div class="img-wrapper">
              <img loading="lazy" src={getPic(id)} alt="" />
            </div>
            {#if datetime}
              <time {datetime}>
                <iconify-icon width="21" heigh="21" icon="lucide:calendar" />
                &nbsp;{relativeTime(new Date(), new Date(datetime))}
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
  gap: 4rem;

  width: min(100% - 2.2rem, var(--lg));
  border-radius: 0.8rem;
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
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));
  gap: 4rem 1.6rem;
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
  border-radius: 0.6rem;
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
  color: var(--clr-100);
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
