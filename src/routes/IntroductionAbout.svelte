<script>
  import { base } from '$app/paths'
  import ChevronToArrow from '$compose/ChevronToArrow.svelte'
</script>

<div id="introduction-about-me" class="about-me">
  <div class="introduction-about-me">
    <a href="#introduction-about-me" data-sveltekit-reload>
      <h2>About</h2>
    </a>
    <h3 style="color: inherit" class="ff-sz-800">Hello!</h3>
    <p>
      I'm Santiago Gonzalez, a web developer based in Argentina. And I'm trying
      to make my way into the IT
    </p>

    <a class="bordered ff-sz-700" href="{base}/about"
      >Learn more
      <ChevronToArrow />
    </a>
  </div>
  <div class="about-me-hero" />
</div>

<style>
  .about-me {
    width: min(100% - 1rem, var(--base));
    margin: 1.5rem auto;
    display: grid;
    grid-template-columns: 1fr;
    background-color: var(--clr-bg-400);
    padding: calc(var(--gap) * 2);
    border-radius: 1.2rem;
    gap: var(--gap);
  }

  @media (min-width: 48rem) {
    .about-me {
      grid-template-columns: 2fr 1fr;
    }
  }

  a.bordered {
    display: flex;
    place-items: center;
    width: max-content;
    padding: 0.4rem 0.8rem;
    gap: 0.2rem;
    border-radius: 999rem;
  }

  .introduction-about-me {
    display: flex;
    flex-flow: column wrap;
    gap: var(--gap);
  }

  .about-me-hero {
    content: 'My image goes here';
    height: 300px;
    width: 300px;
    background-color: blue;
    place-self: center;
  }
</style>
