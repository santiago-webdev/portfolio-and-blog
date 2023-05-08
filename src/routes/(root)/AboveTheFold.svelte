<script lang="ts">
  import { base } from '$app/paths'
  import LinkUI from '$lib/components/navigation/LinkUI.svelte'
  import ShapeButton from '$lib/components/navigation/ShapeButton.svelte'

  const wrapInSpans = (text: string): string =>
    text
      .split('')
      .map(char =>
        char === ' ' ? char : `<span class='expand-on-hover'>${char}</span>`
      )
      .join('')
</script>

<div class="wrapper">
  <main>
    <div class="introduction">
      <h1 class="font-80">
        {@html wrapInSpans('Building the web')}
        <br />
        {@html wrapInSpans('&& clean interfaces')}
      </h1>
      <p>
        I'm a frontend developer and here we'll discuss about
        <strong>web deve&shylopment</strong>
        and show you my projects while at it.
      </p>
      <section>
        <ShapeButton
          href="{base}/projects"
          class="bttn-big-round reverse hover">
          What I've built</ShapeButton>
        <ShapeButton
          href="#todo"
          rel="external"
          class="bttn-big-round shiny hover">
          Resume</ShapeButton>
      </section>
    </div>
    <div class="call-to-scroll">
      <LinkUI
        class="learn-more"
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

  :global(h1 .expand-on-hover) {
    color: var(--clr-150);
  }

  p {
    max-width: 38ch;
  }

  :global(.expand-on-hover) {
    transition: font-variation-settings 150ms ease-in-out;
  }

  :global(.expand-on-hover:hover) {
    font-variation-settings: 'wght' 900, 'wdth' 125;
  }

  section {
    display: flex;
    flex-flow: row wrap-reverse;
    gap: 2rem;
    margin-top: 2rem;
  }

  @media screen and (min-width: 1280px) {
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
