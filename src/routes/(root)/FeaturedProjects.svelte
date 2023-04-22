<script lang="ts">
  import { base } from '$app/paths'
  import LinkUI from '$lib/components/navigation/LinkUI.svelte'
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
    <section>
      <h3>Some things I've built</h3>
      <LinkUI orientation="right" classes="font-4" href="{base}/projects"
        >See all projects</LinkUI>
      <article>
        <img
          src="/zapzsh.jpg"
          loading="lazy"
          title="Zap zsh plugin manager website screenshot"
          alt="Zap zsh plugin manager website screenshot" />
        <div class="description">
          <h4>Zap zsh website</h4>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
        </div>
      </article>
    </section>
  </div>
</div>

<style>
  #featured-projects {
    margin: 3rem auto;
    display: flex;
    place-content: center;
    place-items: center;

    background-color: var(--clr-25);
    border-top: 1px solid var(--clr-45);
  }

  .wrapper-fp {
    display: grid;
    gap: 3rem;
    /* margin: 3rem auto; */
    /* TODO(santigo-zero): This layout is not working */
    padding: 2.4rem;

    width: 92%;
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

  section {
    display: flex;
    gap: 1.4rem;
    flex-flow: row wrap;
    place-content: space-between;
    place-items: center;
  }

  h3 {
    color: var(--clr-100);

    font-variation-settings: 'wght' 800;
  }

  article {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 20rem), 1fr));
    gap: 3rem;
    background-color: var(--clr-40);
    padding: 0.8rem;
    border-radius: 1.2rem;
  }

  img {
    grid-column: span 1;
    object-fit: contain;
    border-radius: 1rem;
  }

  .description {
    grid-column: span 1;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
</style>
