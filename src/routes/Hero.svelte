<script lang="ts">
  import { base } from '$app/paths'
  import ChevronToArrow from '$compose/ChevronToArrow.svelte'
</script>

<div class="top-layer">
  <main>
    <img
      src="/logo.svg"
      title="Logo of the page representing my nickname santigo-zero"
      alt="Logo of the page representing my nickname santigo-zero" />
    <div class="description">
      <h1>
        Build<wbr />ing web<wbr />sites <span>&&</span> clean interfaces
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
    width: min(100% - var(--gap), var(--base));
    gap: 2rem;
    margin-inline: auto;
  }

  .description {
    display: flex;
    flex-flow: column wrap;
    gap: 2rem;
  }

  img {
    max-width: var(--xs);
    margin-inline: auto;
  }

  section {
    display: flex;
    flex-flow: row wrap;
    gap: var(--gap);
    margin-inline: auto;
  }

  p {
    margin-inline: auto;
  }

  a {
    display: flex;
    place-items: center;
    place-content: center;
    /* position: relative; */
    /* padding: 0.8rem; */
    /* font-size: 140%; */
    padding: 0.4rem 0.8rem;
    gap: 0.2rem;
    /* text-transform: uppercase; */
    border-radius: 999rem;
  }

  @media screen and (max-width: 64rem) {
    img {
      width: 50%;
    }
  }

  @media screen and (min-width: 68rem) {
    main {
      flex-flow: row-reverse;
      min-height: min(75vh, 80rem);
      padding: var(--gap) 0;
      text-align: left;
    }

    p {
      max-width: 80%;
      margin-left: 0;
    }

    section {
      margin-inline: 0;
    }
  }
</style>
