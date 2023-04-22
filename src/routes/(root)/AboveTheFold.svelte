<script lang="ts">
  import { base } from '$app/paths'
  import LinkRoundButton from '$lib/components/navigation/LinkRoundButton.svelte'
</script>

<div class="wrapper">
  <main>
    <div class="introduction">
      <h1 class="font-fluid-xl">
        Building the web <br />
        <span>&&</span> clean interfaces
      </h1>
      <p>
        I'm a web developer and here we'll discuss about <strong
          >web deve&shylopment</strong> and show you my projects while at it.
      </p>
      <section>
        <LinkRoundButton href="{base}/projects" class="shiny hover">
          What I've built
        </LinkRoundButton>
        <LinkRoundButton href="{base}/blog" class="reverse">
          Read my blog
        </LinkRoundButton>
      </section>
    </div>
  </main>
</div>

<style>
  .wrapper {
    background-color: var(--clr-25);
    padding: 3rem 0;
  }

  main {
    display: flex;
    gap: 2rem;
    place-items: center;
    flex-direction: column;
    width: min(92%, var(--md));
    margin-inline: auto;
  }

  .introduction {
    display: flex;
    flex-flow: column wrap;
    gap: 2rem;
    max-width: var(--md);
    width: 100%;
  }

  p {
    max-width: 40ch;
  }

  section {
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;
    margin-right: auto;
  }

  @media screen and (min-width: 64rem) {
    main {
      flex-flow: row-reverse;
      padding: 6rem 3rem;
      text-align: left;
    }
  }
</style>
