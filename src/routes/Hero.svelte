<script lang="ts">
  import { base } from '$app/paths'
</script>

<div class="top-layer">
  <main class="wide">
    <h1>
      Build<wbr />ing web<wbr />sites <span>&&</span> clean inter<wbr />faces
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
        class="shiny hover"
        >Projects <iconify-icon icon="lucide:chevron-right" /></a>
      <a href="/" aria-label="Link to contact me" class="block hover"
        >Contact</a>
    </section>
  </main>
</div>

<style>
  main {
    display: grid;
    gap: 2rem;
    text-align: left;
    place-content: center;
  }

  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(20rem, 100%), 1fr));
    gap: 1rem 2rem;
  }

  p {
    max-width: 40ch;
  }

  a {
    display: flex;
    place-items: center;
    place-content: center;
    padding: 0.8rem;
    font-size: 140%;
  }

  @media screen and (min-width: 68rem) {
    main {
      min-height: min(50vh, 80rem);
      text-align: center;
    }

    p {
      margin-inline: auto;
    }
  }
</style>
