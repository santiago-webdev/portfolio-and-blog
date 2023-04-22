<script>
  import { base } from '$app/paths'
  import { Posts } from '$lib/components/Search/store'
  import LinkInText from '$lib/components/navigation/LinkInText.svelte'
  import { readableDate, relativeTime } from '$lib/utils/utils'
</script>

<section id="blog-showcase">
  <div class="present">
    <a href="#blog-showcase" data-sveltekit-reload>
      <h2 class="font-fluid-md">Check out my blog</h2>
      <br />
    </a>
    <p>
      Welcome! If you are curious you can search for blog articles by pressing
      <kbd aria-keyshortcuts="Control+K">Ctrl K</kbd> or
      <LinkInText href="{base}/blog">here</LinkInText>.
    </p>
  </div>
  <br />
  <!-- TODO(santigo-zero): Put time at the end of the card -->
  <div class="latest-articles">
    <a href="{base}/blog{$Posts[0].href}">
      <article>
        <h3 class="font-fluid-sm">{$Posts[0].title}</h3>
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
        <h3 class="font-fluid-sm">{$Posts[1].title}</h3>
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
        <h3 class="font-fluid-sm">{$Posts[2].title}</h3>
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
    width: min(92%, var(--lg));
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
    text-align: center;
  }

  h3 {
    font-variation-settings: 'wght' 550;
  }

  .latest-articles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--xs)), 1fr));
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
    background-color: var(--clr-20);
    border: 1px solid var(--clr-40);
  }

  article hr {
    margin: 0.6rem 0;
  }

  article:hover {
    background-color: var(--clr-25);
  }

  article h3 {
    padding: var(--gap);
    padding-inline: calc(var(--gap) * 1.5);
  }

  article p {
    display: grid;
    grid-template-rows: 1fr 1fr auto;
    gap: 1rem;
    background-color: var(--clr-clr-15);
    /* padding: 1.5rem; */
    /* padding-top: 1rem; */
  }

  article time {
    display: flex;
    flex-flow: row wrap;

    font-variation-settings: 'wght' 500;
  }
</style>
