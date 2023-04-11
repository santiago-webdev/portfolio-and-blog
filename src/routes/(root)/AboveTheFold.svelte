<script lang="ts">
  import { base } from '$app/paths'
  import Forward from '$lib/components/Forward.svelte'
</script>

<div class="wrapper">
  <main>
    <div class="introduction">
      <h1>
        Building the web <br />
        <span>&&</span> clean interfaces
      </h1>
      <p>
        I'm a web developer and here we'll discuss about <strong
          >web deve&shylopment</strong> and show you my projects while at it.
      </p>
      <section>
        <a class="shiny hover" href="{base}/" aria-label="Link to my projects"
          >What I've built
          <Forward />
        </a>

        <a class="reverse" href="{base}/" id="go-read-my-blog"
          >Read my blog
          <Forward />
        </a>
      </section>
    </div>
  </main>
</div>

<style>
  .wrapper {
    background-color: var(--bg-400);
    padding: 3rem 0;
  }

  main {
    display: flex;
    place-items: center;
    flex-flow: column;
    width: min(100% - 1rem, var(--md));
    margin-inline: auto;
    gap: 2rem;
  }

  .introduction {
    display: flex;
    flex-flow: column wrap;
    gap: 2rem;
  }

  .introduction p {
    --range: var(--fz-4);
  }

  section {
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;
    margin-right: auto;
  }

  a {
    display: flex;
    place-items: center;
    place-content: center;
    padding: clamp(1rem, 3vw, 2rem) clamp(2rem, 6vw, 3rem);
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
  }
</style>
