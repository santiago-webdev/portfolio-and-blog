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
        I'm a web developer based in
        <em>Argentina</em>
        , with a passion for
        <strong> Free And Open Source </strong>
        ,
        <strong> UI/UX </strong>
        and
        <strong> Linux </strong>
        . I believe that technology should be accesible to everyone that's why I'm
        always in the lookout to include every bit of my life experiences into my
        projects.
      </p>
    </div>

    <a class="reverse ff-sz-700" href="{base}/about"
      >More about me
      <Forward />
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
