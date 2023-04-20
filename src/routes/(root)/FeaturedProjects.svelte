<script lang="ts">
  import { base } from '$app/paths'
</script>

<div id="featured-projects">
  <div class="featured-projects-introduction">
    <a href="#featured-projects">
      <h2>Featured Projects</h2>
    </a>
    <p>
      This is a selection of my
      <em>best</em>
      and most noteworthy work.
    </p>
  </div>
  <hr style="border-color: var(--sc-55)" />
  <div class="projects-content">
    <div class="featured-projects-banner">
      <h3>Some things I've built</h3>
      <a
        style="--range:var(--fz-3)"
        class="slide-forwards"
        href="{base}/projects">See all projects</a>
    </div>
  </div>
</div>

<style>
  #featured-projects {
    --background: var(--sc-30);
    --border: var(--sc-45);
    background-color: var(--background);
    border: 1px solid var(--background);
    border-top-color: var(--border);
    border-left-color: var(--border);
    box-shadow: 0 4px 16px 0 rgba(0 0 0 / 0.1);

    display: grid;
    gap: 6rem;
    width: min(92%, var(--lg));
    margin: 3rem auto;
    padding: 6rem;
    border-radius: 0.8rem;

    /* max-width: var(--lg); */
    /* margin-inline: auto; */
  }

  .featured-projects-introduction {
    display: flex;
    gap: 3rem;
    justify-content: space-between;
  }

  .featured-projects-introduction a {
    flex: 1;
  }

  .featured-projects-introduction a h2 {
    --range: var(--fz-5);
    color: var(--sc-150);

    font-variation-settings: 'wght' 800;
  }

  .featured-projects-introduction p {
    flex: 1;

    --range: var(--fz-4);
    font-variation-settings: 'wght' 250;
    color: var(--sc-90);
  }

  .featured-projects-banner {
    display: flex;
    place-content: space-between;
    place-items: center;
  }

  .featured-projects-banner h3 {
    --range: var(--fz-4);
    color: var(--sc-100);

    font-variation-settings: 'wght' 600;
  }
</style>
