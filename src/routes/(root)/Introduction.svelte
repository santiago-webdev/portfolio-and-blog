<script>
  import { base } from '$app/paths'
  import Forward from '$lib/components/Forward.svelte'
</script>

<div id="introduction-about-me" class="about-me">
  <section>
    <div>
      <a href="#introduction-about-me">
        <h2>About</h2>
      </a>
      <br />
      <h3 style="--range: var(--fz-3)">Hello!</h3>
      <p>
        I'm a web developer based in <em>Argentina</em>, with a passion for
        <strong>Free And Open Source</strong>,
        <strong>UI/UX</strong> and <strong>Linux</strong>. I believe that
        technology should be accessible to everyone that's why I'm always in the
        lookout to include every bit of my life experiences into my projects.
      </p>
    </div>

    <div class="wrapper-introduction-links">
      <a class="shiny" href="{base}/about">
        More about me
        <Forward />
      </a>
      <a class="block" href="{base}/contact">
        Want to get in touch?
        <Forward />
      </a>
    </div>
  </section>
  <img class="hero logo-santigo-zero" title="My logo" alt="My logo" />
</div>

<style>
  .about-me {
    width: min(92%, var(--base));
    display: flex;
    margin-inline: auto;
    flex-flow: row wrap-reverse;
    background-color: var(--clr-25);
    padding: 2rem;
    border-radius: 1rem;
    gap: 1rem;
  }

  h2 {
    --range: var(--fz-5);
  }

  p {
    --range: var(--fz-3);
  }

  section {
    display: flex;
    max-width: var(--sm);
    flex-flow: row wrap;
    gap: 1rem;
    margin-inline: auto;
  }

  .wrapper-introduction-links {
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;
    margin-right: auto;
  }

  .wrapper-introduction-links a {
    border-radius: 1rem;
    padding: clamp(1rem, 3vw, 2rem) clamp(2rem, 6vw, 3rem);
    gap: 0.2rem;
    border-radius: 999rem;
  }

  img {
    display: none;
  }

  @media screen and (min-width: 48rem) {
    img {
      max-width: 15%;
      flex: 1;
      display: block;
      margin-inline: auto;
    }
  }
</style>
