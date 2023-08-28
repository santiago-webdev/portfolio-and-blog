<script lang="ts">
import { base } from '$app/paths';
import LinkArrow from '$lib/components/navigation/LinkArrow.svelte';
import { Posts } from '$lib/components/blog/store';
import { readableDate, relativeTime } from '$lib/utils/utils';

function getPic(id: number) {
  let pics = ['/plant.webp', '/plant2.webp', '/plant3.webp'];
  return pics[id];
}
</script>

<div id="blog">
  <div class="container-blog">
    <div class="header-blog">
      <h2 class="font-fluid-1">Blog articles</h2>
      <div>
        <p class="font-body">
          Press
          <kbd class="font-sub" aria-keyshortcuts="Control+K">
            <kbd>Ctrl</kbd>+<kbd>K</kbd>
          </kbd>
          or
        </p>
        <LinkArrow orientation="right" href="{base}/blog">Check all articles</LinkArrow>
      </div>
    </div>
    <section>
      {#each $Posts.slice(0, 3) as { href, title, datetime }, id}
        <a {href}>
          <article>
            <div class="wrapper-img-placeholder">
              <img loading="lazy" src={getPic(id)} alt="" />
            </div>
            {#if datetime}
              <time {datetime}>
                <iconify-icon width="21" heigh="21" icon="lucide:calendar" />
                &nbsp;{relativeTime(new Date(), new Date(datetime))}
                <div aria-orientation="vertical" role="separator">&nbsp;&mdash;&nbsp;</div>
                {readableDate(datetime)}
              </time>
            {/if}
            <h3 class="font-h2">{title}</h3>
          </article>
        </a>
      {/each}
    </section>
  </div>
</div>

<style>
#blog {
  display: flex;
  place-content: center;
  place-items: center;
  padding: clamp(3rem, 10vw + 1rem, 6rem) 0;
  background: var(--srf-3);
}

.container-blog {
  display: grid;
  gap: 3rem;
  width: min(100% - 4rem, var(--lg));
}

.header-blog {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: end;
  gap: 1rem 6rem;
}

section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));
  gap: 3rem 1.5rem;
}

a:nth-child(3) {
  display: none;
}

article {
  position: relative;
  display: grid;
  gap: 1rem;
}

.wrapper-img-placeholder {
  max-height: 36rem;
  overflow: hidden;
  border-radius: 14px;
}

img {
  width: 100%;
  height: auto;
  object-fit: scale-down;
  object-position: center;
}

@media screen and (min-width: 80rem) {
  section a:nth-child(3) {
    display: initial;
  }
}
</style>
