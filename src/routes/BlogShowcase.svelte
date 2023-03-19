<script>
  import { base } from '$app/paths'
  import ChevronToArrow from '$compose/ChevronToArrow.svelte'
</script>

<!-- <script lang="ts"> -->
<!--   // <script context="module" lang="ts"> -->
<!-- </script> -->
<!---->
<!-- <div class="focus wider" id="blog"> -->
<!--   <a href="#blog">test</a> -->
<!--   <h2>Check out my blog</h2> -->
<!--   <p> -->
<!--     I don't focus on just one subject, so here's a recommendation of a few of my -->
<!--     posts -->
<!--   </p> -->
<!--   <section> -->
<!--     <article class="shiny less attn"> -->
<!--       <h3>Title</h3> -->
<!--       <p>Description</p> -->
<!--     </article> -->
<!---->
<!--     <article class="shiny less attn"> -->
<!--       <h3>Title</h3> -->
<!--       <p>Description</p> -->
<!--     </article> -->
<!---->
<!--     <article class="shiny less attn"> -->
<!--       <h3>Title</h3> -->
<!--       <p>Description</p> -->
<!--     </article> -->
<!--   </section> -->
<!-- </div> -->
<!---->
<!-- <style> -->
<!--   #blog { -->
<!--     display: flex; -->
<!--     flex-direction: column; -->
<!--     gap: 2rem; -->
<!---->
<!--     text-align: center; -->
<!--     padding: 3rem 0; -->
<!--     /* width: 100%; */ -->
<!--   } -->
<!---->
<!--   p { -->
<!--     max-width: 40ch; -->
<!--     margin-inline: auto; -->
<!--   } -->
<!---->
<!--   section { -->
<!--     display: grid; -->
<!--     place-items: center; -->
<!--     justify-content: center; -->
<!--     grid-template-columns: repeat(auto-fill, minmax(min(22rem, 100%), 1fr)); -->
<!--     width: 100%; -->
<!--     gap: 1rem; -->
<!--   } -->
<!-- </style> -->

<section class="wider" id="blog">
  <div class="present">
    <h2>Check out my blog</h2>
    <a href="#blog" class="ff-sz-700">test</a>
    <p class="ff-sz-700">
      I don't focus on just one subject, so here's a few of my posts
    </p>
    <a href="{base}/blog" class="ff-sz-700 bordered">
      My blog
      <ChevronToArrow />
    </a>
  </div>

  <a href="/todo">
    <article class="shiny block">
      <h3>Title</h3>
      <p>Description</p>
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

  @media screen and (min-width: 48rem) {
    section {
      padding: 9rem 0;
    }
  }
</style>
