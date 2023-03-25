<script lang="ts">
  import { base } from '$app/paths'
  import ChevronToArrow from '$compose/ChevronToArrow.svelte'
</script>

<div class="top-layer">
  <main>
    <img
      class="hero"
      src="/logo.svg"
      title="Logo of the page representing my nickname santigo-zero"
      alt="Logo of the page representing my nickname santigo-zero" />
    <div class="description">
      <h1>
        Building the web <br />
        <span>&&</span> clean interfaces
      </h1>
      <p>
        I'm a web developer and here we'll discuss about <strong>
          web deve&shylopment
        </strong> and show you my projects while at it.
      </p>
      <section>
        <a
          href="{base}/projects"
          aria-label="Link to my projects page"
          class="shiny hover ff-sz-700"
          >Projects
          <ChevronToArrow />
        </a>

        <a
          aria-label="Link to contact me"
          class="block hover ff-sz-700"
          href="{base}/contact"
          >Contact
          <ChevronToArrow />
        </a>
      </section>
    </div>
  </main>
</div>

<style>
  main {
    display: flex;
    place-items: center;
    flex-flow: column;
    width: min(100% - var(--gap), var(--md));
    gap: 2rem;
    margin-inline: auto;
  }

  .description {
    display: flex;
    flex-flow: column wrap;
    gap: 2rem;
  }

  .hero {
    max-width: 45%;
  }

  section {
    display: flex;
    flex-flow: row wrap;
    gap: var(--gap);
    margin-right: auto;
  }

  p {
    margin-inline: auto;
  }

  a {
    display: flex;
    place-items: center;
    place-content: center;
    padding: clamp(1rem, 1.5vw, 2rem) clamp(2rem, 3vw, 3rem);
    gap: 0.2rem;
    border-radius: 999rem;
  }

  @media screen and (min-width: 64rem) {
    main {
      flex-flow: row-reverse;
      padding: 6rem 3rem;
      text-align: left;
    }

    p {
      max-width: 80%;
      margin-left: 0;
    }

    .hero {
      max-width: 23%;
    }
  }
</style>
