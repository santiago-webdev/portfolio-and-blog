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
      <LinkInText href="{base}/blog">go to my blog</LinkInText> to check them all.
    </p>
  </div>
  <div class="latest-articles">
    {#each $Posts.slice(0, 3) as { href, title, description, datetime }}
      <a href="{base}/blog{href}">
        <article>
          <img
            src={Math.random() < 0.5
              ? '/alleged-photo-of-myself.jpg'
              : 'plant2.jpeg'}
            alt="" />
          <h3 class="font-6">{title}</h3>
          <p>
            {description}
          </p>
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
          {/if}
        </article>
      </a>
    {/each}
  </div>
</section>

<style>
  section {
    margin-inline: auto;
    width: min(92%, var(--lg));
    padding: 3rem 0;
    display: grid;
    place-content: center;
  }

  @media screen and (max-height: 70rem) {
    section {
      min-height: 100vh;
    }
  }

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
    gap: 2.2rem 1rem;
    margin-top: 3rem;
  }

  article {
    position: relative;
    display: grid;
    gap: 0.6rem;
    grid-template-rows: auto 1fr auto;

    text-align: center;
    padding: 14.8rem 1rem 1rem 1rem;
    border-radius: 1.2rem;
    height: 100%;
    background-color: var(--clr-20);
    border: 1px solid var(--clr-40);
  }

  article img {
    position: absolute;
    object-fit: cover;
    max-height: 15rem;
    width: calc(100% - 2rem);
    inset: -1.2rem 1rem;

    border-radius: 1.2rem;
    border: 1px solid var(--clr-50);
  }

  article:hover {
    background-color: var(--clr-25);
  }

  article h3 {
    color: var(--clr-250);
  }

  article p {
    margin-bottom: 1.8rem;
  }

  article time {
    display: flex;
    flex-flow: row wrap;

    font-variation-settings: 'wght' 500;
  }
</style>
