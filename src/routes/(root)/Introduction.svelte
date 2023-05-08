<div id="introduction-about-me">
  <section>
    <div>
      <a href="#introduction-about-me">
        <h2>About</h2>
      </a>
      <br />
      <h3 class="font-30">Hello!</h3>
      <p>
        I'm a web developer based in <em>Argentina</em>, with a passion for
        <strong>Free And Open Source</strong>,
        <strong>UI/UX</strong> and <strong>Linux</strong>. I believe that
        technology should be accessible to everyone that's why I'm always in the
        lookout to include every bit of my life experiences into my projects.
      </p>
    </div>

    <div class="wrapper-introduction-links">TODO</div>
  </section>
  <img
    loading="lazy"
    src="/alleged-photo-of-myself.webp"
    alt="TODO: This is supposed to be me"
    title="TODO: This is supposed to be me" />
</div>

<style>
  #introduction-about-me {
    width: min(92%, var(--md));
    display: grid;
    grid-template-columns: 1fr;
    margin-inline: auto;
    flex-flow: row wrap-reverse;
    padding: 2rem;
    border-radius: 1rem;
    gap: 1rem;
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
    margin-top: 3rem;
  }

  img {
    max-height: 75%;
    max-width: 75%;
    aspect-ratio: 1;
    height: auto;
    object-fit: cover;
    display: flex;
    place-self: center;
    border: 12px var(--clr-55) solid;
    margin-inline: auto;
    border-radius: 100%;
  }

  @media screen and (min-width: 48rem) {
    #introduction-about-me {
      grid-template-columns: 2fr 1fr;
    }
  }
</style>
