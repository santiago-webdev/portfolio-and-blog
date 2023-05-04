<script lang="ts">
  import { base } from '$app/paths'
  import LinkRoundButton from '$lib/components/navigation/LinkRoundButton.svelte'
  import LinkUI from '$lib/components/navigation/LinkUI.svelte'

  const wrapInSpans = (text: string): string =>
    text
      .split('')
      .map(char => (char === ' ' ? char : `<span class='expand-on-hover'>${char}</span>`))
      .join('')
</script>

<div class="wrapper">
  <main>
    <div class="introduction">
      <h1 class="font-fluid-xl">
        {@html wrapInSpans('Building the web')}
        <br />
        {@html wrapInSpans('&& clean interfaces')}
      </h1>
      <p style="max-width: 40ch">
        I'm a web developer and here we'll discuss about
        <strong>web deve&shylopment</strong>
        and show you my projects while at it.
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
      <LinkUI
        class="font-3 learn-more"
        data-sveltekit-reload
        rel="external"
        href="#portfolio">Learn more</LinkUI>
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

  .introduction {
    display: flex;
    flex-flow: column wrap;
    gap: 1rem;
  }

  :global(.expand-on-hover) {
    transition: font-variation-settings 150ms ease-in-out;
  }

  :global(.expand-on-hover:hover) {
    font-variation-settings: 'wght' 900, 'wdth' 125;
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
