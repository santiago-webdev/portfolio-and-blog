<script>
  import { base } from '$app/paths'
  import ChevronToArrow from '$compose/ChevronToArrow.svelte'
  import { Posts } from '$compose/Search/store'
  import { readableDate, relativeTime } from '$lib/utils/utils'
</script>

<section id="blog-showcase">
  <div class="present">
    <a href="#blog-showcase" data-sveltekit-reload>
      <h2>Check out my blog</h2>
    </a>
    <p class="ff-sz-700">
      I don't focus on just one subject, so here's a few of my posts. If you are
      curious you can search for <a class="slide-forwards" href="{base}/blog"
        >articles here</a>
      or using the modal with <kbd aria-keyshortcuts="Control+K">Ctrl K</kbd>.
    </p>
  </div>

  <section class="wider" id="blog">
    <a href="{base}/blog{$Posts[0].href}">
      <article class="shiny block">
        <h3>{$Posts[0].title}</h3>
        <p>
          {$Posts[0].description}
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
          <button class="ff-sz-700"
            >Read
            <ChevronToArrow />
          </button>
        </p>
      </article>
    </a>

    <a href="{base}/blog{$Posts[1].href}">
      <article class="shiny block">
        <h3>{$Posts[1].title}</h3>
        <p>
          {$Posts[1].description}
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
          <button class="ff-sz-700"
            >Read
            <ChevronToArrow />
          </button>
        </p>
      </article>
    </a>

    <a href="{base}/blog{$Posts[2].href}">
      <article class="shiny block">
        <h3>{$Posts[2].title}</h3>
        <p>
          {$Posts[2].description}
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
          <button class="ff-sz-700"
            >Read
            <ChevronToArrow />
          </button>
        </p>
      </article>
    </a>
  </section>
</section>

<style>
  section {
    padding: 3rem 0;
  }

  #blog {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(29rem, 100%), 1fr));
    grid-auto-rows: min(100%, var(--xs));
    gap: 1rem;
    padding: 2rem 0;
  }

  .present {
    display: flex;
    flex-flow: column wrap;
    margin-inline: auto;
    place-content: center;
    place-items: center;
  }

  .present p {
    width: min(100% - 1rem, 38ch);
  }

  .present a {
    display: inline-block;
    place-items: center;

    border-radius: 999rem;
    width: max-content;
  }

  article {
    display: grid;
    grid-template-rows: auto 1fr;
    flex-flow: column wrap;
    height: 100%;
    overflow: hidden;
  }

  article h3 {
    padding: var(--gap);
    padding-inline: calc(var(--gap) * 1.5);
  }

  article p {
    display: grid;
    grid-template-rows: 1fr 1fr auto;
    gap: var(--gap);
    background-color: var(--clr-bg-300);
    padding: calc(var(--gap) * 1.5);
    padding-top: var(--gap);
  }

  article time {
    display: flex;
    flex-flow: row wrap;
  }

  button {
    display: flex;
    flex-flow: row;
    width: fit-content;
    height: min-content;
  }

  button:hover {
    color: inherit;
  }
</style>
