<script lang="ts">
  import { base } from '$app/paths'
</script>

<div id="featured-projects">
  <div class="wrapper-fp">
    <div class="featured-projects-introduction">
      <a href="#featured-projects">
        <h2 class="font-7">Featured Projects</h2>
      </a>
      <p class="font-6">
        This is a selection of my
        <em>best</em>
        and most noteworthy work.
      </p>
    </div>
    <hr style="border-color: var(--clr-55)" />
    <div class="featured-projects-banner">
      <h3>Some things I've built</h3>
      <a class="font-4 slide-forwards" href="{base}/projects">See all projects</a>
    </div>
  </div>
</div>

<style>
  #featured-projects {
    width: 92%;
    max-width: var(--lg);
    margin: 3rem auto;
    display: flex;
    place-content: center;
    place-items: center;

    --background: var(--clr-30);
    --border: var(--clr-45);
    background-color: var(--background);
    border: 1px solid var(--background);
    border-top-color: var(--border);
    border-left-color: var(--border);
    box-shadow: 0 4px 16px 0 rgba(0 0 0 / 0.1);
    border-radius: 0.8rem;
  }

  .wrapper-fp {
    display: grid;
    gap: 3rem;
    /* margin: 3rem auto; */
    /* TODO(santigo-zero): This layout is not working */
    padding: 2.4rem;

    max-width: var(--lg);
    /* outline: 3px solid hotpink; */
    /* margin-inline: auto; */
  }

  .featured-projects-introduction {
    display: flex;
    flex-flow: row wrap;
    gap: 1.4rem;
    justify-content: space-between;
  }

  .featured-projects-introduction a {
    flex: 1;
  }

  .featured-projects-introduction a h2 {
    color: var(--clr-150);

    font-variation-settings: 'wght' 800;
  }

  .featured-projects-introduction p {
    flex: 1;

    font-variation-settings: 'wght' 250;
    color: var(--clr-90);
  }

  .featured-projects-banner {
    display: flex;
    gap: 1.4rem;
    flex-flow: row wrap;
    place-content: space-between;
    place-items: center;
  }

  .featured-projects-banner h3 {
    color: var(--clr-100);

    font-variation-settings: 'wght' 800;
  }
</style>
