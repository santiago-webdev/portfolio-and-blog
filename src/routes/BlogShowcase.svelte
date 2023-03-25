<script>
  import { base } from '$app/paths'
  import ChevronToArrow from '$compose/ChevronToArrow.svelte'
  import { Posts } from '$compose/Search/store'

  let latestPost = $Posts[0]
</script>

<section class="wider" id="blog">
  <div class="present">
    <h2>Check out my blog</h2>
    <a href="#blog" class="ff-sz-700">test</a>
    <p class="ff-sz-700">
      I don't focus on just one subject, so here's a few of my posts
    </p>
    <a id='goto_blog' href="{base}/blog" class="ff-sz-700 bordered">
      My blog
      <ChevronToArrow />
    </a>
  </div>

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

<style>
  section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(29rem, 100%), 1fr));
    grid-auto-rows: var(--xs);
    gap: 1rem;
    padding: 2rem 0;
  }

  .present a {
    display: flex;
    place-items: center;

    border-radius: 999rem;
    padding: 0.2rem 0.8rem;
    width: max-content;
  }

  article {
    height: 100%;
    padding: var(--gap);
  }

  #goto_blog {
    padding: clamp(1rem, 1.5vw, 2rem) clamp(2rem, 3vw, 3rem);
  }

  @media screen and (min-width: 48rem) {
    section {
      padding: 9rem 0;
    }
  }
</style>
