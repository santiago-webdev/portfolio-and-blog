<script>
  import { base } from '$app/paths'
  import Forward from '$lib/components/Forward.svelte'
  import { Posts } from '$lib/components/Search/store'
  import { readableDate, relativeTime } from '$lib/utils/utils'
</script>

<section id="blog-showcase">
  <div class="present">
    <a href="#blog-showcase" data-sveltekit-reload>
      <h2>Check out my blog</h2>
    </a>
    <p>
      If you are curious you can search for <a
        class="slide-forwards"
        href="{base}/blog">articles here</a>
      or using the modal with <kbd aria-keyshortcuts="Control+K">Ctrl K</kbd>.
    </p>
  </div>
  <br />
  <!-- TODO(santigo-zero): Put time at the end of the card -->
  <div class="latest-articles">
    <a href="{base}/blog{$Posts[0].href}">
      <article>
        <h3>{$Posts[0].title}</h3>
        <hr />
        <p>
          {$Posts[0].description}
        </p>
        {#if $Posts[0].datetime}
          <small>
            <time datetime={$Posts[0].datetime}>
              <iconify-icon icon="lucide:calendar" />: {relativeTime(
                new Date(),
                new Date($Posts[0].datetime)
              )}
              <div aria-orientation="vertical" role="separator">•</div>
              {readableDate($Posts[0].datetime)}
            </time>
          </small>
        {/if}
      </article>
    </a>
    <a href="{base}/blog{$Posts[1].href}">
      <article>
        <h3>{$Posts[1].title}</h3>
        <hr />
        <p>
          {$Posts[1].description}
        </p>
        {#if $Posts[1].datetime}
          <small>
            <time datetime={$Posts[1].datetime}>
              <iconify-icon icon="lucide:calendar" />: {relativeTime(
                new Date(),
                new Date($Posts[1].datetime)
              )}
              <div aria-orientation="vertical" role="separator">•</div>
              {readableDate($Posts[1].datetime)}
            </time>
          </small>
        {/if}
      </article>
    </a>
    <a href="{base}/blog{$Posts[2].href}">
      <article>
        <h3>{$Posts[2].title}</h3>
        <hr />
        <p>
          {$Posts[2].description}
        </p>
        {#if $Posts[2].datetime}
          <small>
            <time datetime={$Posts[2].datetime}>
              <iconify-icon icon="lucide:calendar" />: {relativeTime(
                new Date(),
                new Date($Posts[2].datetime)
              )}
              <div aria-orientation="vertical" role="separator">•</div>
              {readableDate($Posts[2].datetime)}
            </time>
          </small>
        {/if}
      </article>
    </a>
  </div>
</section>

<style>
  section {
    padding: 3rem 0;
    margin-inline: auto;
    width: min(100% - 2rem, var(--lg));
  }

  /* #blog { */
  /*   display: grid; */
  /*   grid-template-columns: repeat(auto-fill, minmax(min(25rem, 100%), 1fr)); */
  /*   grid-auto-rows: minmax(100%, var(--xs)); */
  /*   gap: 1rem; */
  /*   padding: 2rem 0; */
  /* } */

  .present {
    display: flex;
    flex-flow: column wrap;
    margin-inline: auto;
    place-content: center;
    place-items: center;
  }

  .present p {
    width: min(100% - 1rem, 40ch);
    text-align: center;
  }

  .present a h2 {
    --range: var(--fz-5);
  }

  h3 {
    font-variation-settings: 'wght' 650;
  }

  h3,
  p {
    --range: var(--fz-3);
  }

  .latest-articles {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  article {
    padding: 1rem;
    border-radius: 0.8rem;
    display: grid;
    grid-template-rows: auto auto 1fr auto;
    flex-flow: column wrap;
    height: 100%;
    overflow: hidden;
    background-color: var(--sc-20);
    border: 1px solid var(--sc-40);
  }

  article hr {
    margin: 0.6rem 0;
  }

  article:hover {
    background-color: var(--sc-25);
  }

  article h3 {
    padding: var(--gap);
    padding-inline: calc(var(--gap) * 1.5);
  }

  article p {
    display: grid;
    grid-template-rows: 1fr 1fr auto;
    gap: 1rem;
    background-color: var(--clr-sc-15);
    /* padding: 1.5rem; */
    /* padding-top: 1rem; */
  }

  article time {
    display: flex;
    flex-flow: row wrap;

    font-variation-settings: 'wght' 500;
  }
</style>
