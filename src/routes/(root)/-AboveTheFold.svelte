<script lang="ts">
import { base } from '$app/paths';
import LinkArrow from '$lib/components/navigation/LinkArrow.svelte';
import ShapeButton from '$lib/components/navigation/ShapeButton.svelte';
import config from '$lib/config.json';
</script>

<div class="wrapper-abf">
  <main>
    <h1 class="font-fluid-5">Building the web with clean UI/UX</h1>
    <p class="font-h3">
      I'm a frontend developer and here we'll discuss about
      <strong>web development</strong> and show you my projects while at it.
    </p>
    <section>
      <ShapeButton
        class="reverse"
        href="{base}/portfolio"
        title="Take a look of all my projects in a sorted way"
        >What I've built
      </ShapeButton>
      <div>
        <ShapeButton
          class="default"
          href={config.about.resume}
          target="_blank"
          rel="external"
          title="Read my resume online">Resume</ShapeButton
        >
        <small>Hit Ctrl+P to print</small>
      </div>
    </section>
    <div id="learn-more-container">
      <LinkArrow href="#portfolio">Learn more</LinkArrow>
    </div>
  </main>
</div>

<style>
.wrapper-abf {
  background: var(--srf-3);
}

main {
  position: relative;
  display: grid;
  place-content: center;
  padding: 3rem 0;
  margin-inline: auto;
  width: min(100% - 2rem, var(--md));
}

h1 {
  width: min(100%, 15ch);
}

p {
  margin-top: 1rem;
  width: min(100%, 38ch);
}

section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem 1rem;
  margin-top: 2rem;
}

small {
  display: none;
}

#learn-more-container {
  place-self: start;
  margin-top: 1rem;
  display: none;
}

@media screen and (min-width: 48rem) {
  main {
    padding: 6rem 0;
  }

  section {
    flex-direction: row;
    place-items: start;
  }

  small {
    display: block;
    padding: 0 2rem;
    margin-top: 0.5rem;
  }

  #learn-more-container {
    display: flex;
    position: absolute;
    inset: 70% 0 auto auto;
    transform: rotate(90deg);
  }
}

@media screen and (min-width: 80rem) {
  main {
    min-height: 85dvh;
    min-height: 85vh;
  }
}
</style>
