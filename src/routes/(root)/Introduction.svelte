<script>
  import { base } from '$app/paths'
  import Forward from '$lib/components/Forward.svelte'
</script>

<div id="introduction-about-me" class="about-me">
  <section>
    <div>
      <a href="#introduction-about-me">
        <h2>Santiago Gonzalez</h2>
      </a>
      <h3 style="color: inherit" class="ff-sz-800">Hello!</h3>
      <p>
        I'm a web developer based in <em>Argentina</em>, with a passion for
        <strong>Free And Open Source</strong>,
        <strong>UI/UX</strong> and <strong>Linux</strong>. I believe that
        technology should be accessible to everyone that's why I'm always in the
        lookout to include every bit of my life experiences into my projects.
      </p>
    </div>

    <div class="wrapper-introduction-links">
      <a class="shiny ff-sz-700" href="{base}/about">
        More about me
        <Forward />
      </a>
      <a class="block ff-sz-700" href="{base}/about">
        Want to get in touch?
        <Forward />
      </a>
    </div>
  </section>
  <div class="about-me-hero" />
</div>

<style>
  .about-me {
    width: min(100% - 1rem, var(--md));
    margin: auto;
    display: grid;
    grid-template-columns: 1fr;
    background-color: var(--bg-400);
    padding: 2rem;
    border-radius: 1rem;
    gap: 1rem;
  }

  @media (min-width: 48rem) {
    .about-me {
      grid-template-columns: 2fr 1fr;
    }
  }

  section {
    display: flex;
    /* flex-flow: column wrap; */
    /* justify-content: space-between; */
    width: min(100% - 1rem, var(--md));
    gap: 1rem;

    display: flex;
    flex-flow: row wrap;
    gap: 1rem;
    /* margin-right: auto; */
  }

  section a {
    border-radius: 1rem;
    padding: clamp(1rem, 1.5vw, 2rem) clamp(2rem, 3vw, 3rem);
    gap: 0.2rem;
    border-radius: 999rem;
  }

  .wrapper-introduction-links {
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;
    margin-right: auto;
  }

  .about-me-hero {
    content: 'My image goes here';
    height: 300px;
    width: 300px;
    background-color: blue;
    place-self: center;
  }
</style>
