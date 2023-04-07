<script>
  import { base } from '$app/paths'
  import ChevronToArrow from '$lib/components/ChevronToArrow.svelte'
</script>

<div id="introduction-about-me" class="about-me">
  <section>
    <div>
      <a href="#introduction-about-me">
        <h2>About</h2>
      </a>
      <h3 style="color: inherit" class="ff-sz-800">Hello!</h3>
      <p>
        I'm Santiago Gonzalez, a web developer based in Argentina, I'm
        interested in Linux, UI/UX and Open Source.
      </p>
    </div>

    <a class="reverse ff-sz-700" href="{base}/about"
      >More about me
      <ChevronToArrow />
    </a>
  </section>
  <div class="about-me-hero" />
</div>

<style>
  .about-me {
    width: min(100% - 1rem, var(--base));
    margin: auto;
    display: grid;
    grid-template-columns: 1fr;
    background-color: var(--bg-400);
    padding: 2rem;
    border-radius: 1.2rem;
    gap: 1rem;
  }

  @media (min-width: 48rem) {
    .about-me {
      grid-template-columns: 2fr 1fr;
    }
  }

  section {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    gap: 1rem;
  }

  .about-me-hero {
    content: 'My image goes here';
    height: 300px;
    width: 300px;
    background-color: blue;
    place-self: center;
  }
</style>
