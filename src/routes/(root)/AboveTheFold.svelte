<script lang="ts">
  import { base } from '$app/paths'
  import LinkRoundButton from '$lib/components/navigation/LinkRoundButton.svelte'
  import LinkUI from '$lib/components/navigation/LinkUI.svelte'
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
    <div class="call-to-scroll">
      <LinkUI classes="font-3" href="#blog-showcase">Learn More</LinkUI>
    </div>
  </main>
</div>

<style>
  .wrapper {
    background-color: var(--clr-25);
    padding: 2rem 0;
  }

  main {
    display: flex;
    gap: 2rem;
    place-items: start;
    flex-direction: column;
    width: min(92%, var(--md));
    margin-inline: auto;
    position: relative;
  }

  .call-to-scroll {
    transition: all 300ms ease-in-out;
  }

  .introduction {
    display: flex;
    flex-flow: column wrap;
    gap: 1rem;
    max-width: var(--md);
    width: 100%;
  }

  p {
    max-width: 40ch;
  }

  section {
    display: flex;
    flex-flow: row wrap;
    gap: 1.4rem;
    margin-top: 1.4rem;
  }

  @media screen and (min-width: 80rem) {
    main {
      flex-flow: row;
      padding: 6rem 0;
      text-align: left;
    }

    .call-to-scroll {
      position: absolute;
      inset: 75% 0 25% auto;
      transform: rotate(90deg);
    }
  }
</style>
