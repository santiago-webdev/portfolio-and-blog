<script lang="ts">
  import { base } from '$app/paths'
</script>

<div class="wrapper">
  <main>
    <img
      class="hero"
      src="/logo.svg"
      title="Logo of the page representing my nickname santigo-zero"
      alt="Logo of the page representing my nickname santigo-zero" />
    <div class="introduction">
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
          class="shiny hover ff-sz-700"
          href="{base}/projects"
          aria-label="Link to my projects"
          >What I've built
        </a>

        <a
          class="ff-sz-700"
          href="{base}/contact"
          id='go-read-my-blog'
          >Read my blog
        </a>
      </section>
    </div>
  </main>
</div>

<style>
  .wrapper {
    background-color: var(--bg-400);
  }

  main {
    display: flex;
    place-items: center;
    flex-flow: column;
    width: min(100% - 1rem, var(--base));
    margin-inline: auto;
    gap: 2rem;
  }

  .introduction {
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
    gap: 1rem;
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

  #go-read-my-blog {
    background-color: var(--txt-A);
    color: var(--bg-200);
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
