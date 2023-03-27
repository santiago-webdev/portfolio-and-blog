<script>
  import { base } from '$app/paths'
  import ChevronToArrow from '$compose/ChevronToArrow.svelte'
  import { Posts } from '$compose/Search/store'

  let latestPost = $Posts[0]
</script>

<section>
  <div class="present">
    <h2>Check out my blog</h2>
    <p class="ff-sz-700">
      I don't focus on just one subject, so here's a few of my posts or if you
      are curious you can search for a <a
        class="slide-forwards"
        href="{base}/blog">blog</a>
    </p>
  </div>

  <section class="wider" id="blog">
    <a href="{base}/blog{latestPost.href}">
      <article class="shiny block">
        <h3>{latestPost.title}</h3>
        <p>{latestPost.description}</p>
      </article>
    </a>

    <a href="{base}/blog{latestPost.href}">
      <article class="shiny block">
        <h3>{latestPost.title}</h3>
        <p>{latestPost.description}</p>
      </article>
    </a>

    <a href="/todo">
      <article class="shiny block">
        <h3>Title</h3>
        <p>Description</p>
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
    grid-auto-rows: var(--xs);
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
    width: min(100% - 1rem, var(--sm))
  }

  .present a {
    display: inline-block;
    place-items: center;

    border-radius: 999rem;
    /* padding: 0.2rem 0.8rem; */
    width: max-content;
  }

  article {
    height: 100%;
    padding: var(--gap);
  }
</style>
