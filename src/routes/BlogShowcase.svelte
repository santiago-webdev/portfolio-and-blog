<script lang="ts">
  // <script context="module" lang="ts">
</script>

<div class="focus wider" id="blog">
  <a href="#blog">test</a>
  <h2>Check out my blog</h2>
  <p>
    I don't focus on just one subject, so here's a recommendation of a few of my
    posts
  </p>
  <section>
    <article class="shiny less attn">
      <h3>Title</h3>
      <p>Description</p>
    </article>

    <article class="shiny less attn">
      <h3>Title</h3>
      <p>Description</p>
    </article>

    <article class="shiny less attn">
      <h3>Title</h3>
      <p>Description</p>
    </article>
  </section>
</div>

<style>
  #blog {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    text-align: center;
    padding: 3rem 0;
    /* width: 100%; */
  }

  p {
    max-width: 40ch;
    margin-inline: auto;
  }

  section {
    display: grid;
    place-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(min(22rem, 100%), 1fr));
    width: 100%;
    gap: 1rem;
  }
</style>
