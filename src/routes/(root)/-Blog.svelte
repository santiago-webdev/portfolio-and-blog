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

<div id="mention-blog" class="flex place-content-center place-items-center py-12 mb-12">
  <div class="grid gap-16 px-8 max-w-screen-2xl">
    <div class="flex flex-wrap gap-6 justify-between items-start">
      <h2 class="font-fluid-2">Blog articles</h2>
      <div class="flex flex-col">
        <p>
          Press <kbd aria-keyshortcuts="Control+K">CTRL K</kbd> or
        </p>
        <LinkArrow orientation="right" href="{base}/blog">See the full blog</LinkArrow>
      </div>
    </div>
    <section class="grid gap-y-16 gap-x-6">
      {#each $Posts.slice(0, 3) as { href, title, datetime }, id}
        <a {href}>
          <article class="relative grid gap-4">
            <div class="max-h-[36rem] overflow-hidden rounded-lg">
              <img class="rounded-xl" loading="lazy" src={getPic(id)} alt="" />
            </div>
            {#if datetime}
              <time {datetime} class="flex flex-wrap place-items-center">
                <iconify-icon width="21" heigh="21" icon="lucide:calendar" />
                &nbsp;{relativeTime(new Date(), new Date(datetime))}
                <div aria-orientation="vertical" role="separator">&nbsp;&mdash;&nbsp;</div>
                {readableDate(datetime)}
              </time>
            {:else}
              <small aria-hidden="true" style:visibility="hidden"> No date provided </small>
            {/if}
            <h3 class="font-fluid-1">{title}</h3>
          </article>
        </a>
      {/each}
    </section>
  </div>
</div>

<style>
kbd {
  font-size: inherit;
  line-height: inherit;
  font-weight: normal;
}

section {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));
}

img {
  max-inline-size: 100%;
  block-size: auto;
  object-fit: scale-down;
  object-position: center center;
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
