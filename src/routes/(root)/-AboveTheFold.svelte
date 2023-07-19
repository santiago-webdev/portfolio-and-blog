<script lang="ts">
import { base } from '$app/paths';
import LinkArrow from '$lib/components/navigation/LinkArrow.svelte';
import ShapeButton from '$lib/components/navigation/ShapeButton.svelte';
import config from '$lib/config.json';
</script>

<div class="wrapper">
  <main>
    <div class="introduction">
      <h1 class="font-fluid-5">
        Building the web<br /> with clean interfaces
      </h1>
      <p class="font-h3">
        I'm a frontend developer and here we'll discuss about
        <strong>web deve&shylopment</strong>
        and show you my projects while at it.
      </p>
      <section>
        <ShapeButton class="reverse" href="{base}/portfolio"
          >What I've built</ShapeButton
        >
        <div class="container">
          <ShapeButton href={config.about.resume} target="_blank" rel="external"
            >Resume</ShapeButton
          >
          <small>Hit Ctrl+P to print</small>
        </div>
      </section>
    </div>
    <div class="call-to-scroll">
      <LinkArrow href="#portfolio">Learn more</LinkArrow>
    </div>
  </main>
</div>

<style>
.wrapper {
  background: var(--clr-25);
  padding: 2rem 0;
}

main {
  display: grid;
  place-items: center;
  width: min(100% - 2.2rem, var(--md));
  margin-inline: auto;
  position: relative;
}

.introduction {
  display: flex;
  flex-flow: column wrap;
}

small {
  display: none;
}

h1 {
  max-width: 15ch;
}

p {
  margin-top: 0.5rem;
  max-width: 38ch;
}

section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2.5rem;
}

.call-to-scroll {
  place-self: start;
  margin-top: 2rem;
}

@media screen and (min-width: 768px) {
  section {
    flex-direction: row;
    place-items: start;
  }

  small {
    padding-inline: 2rem;
    display: block;
    margin-top: 0.5rem;
  }
}

@media screen and (min-height: 1280px) {
  main {
    padding: 3rem 0;
  }
}

@media screen and (min-width: 1280px) {
  main {
    padding: 6rem 0;
    text-align: left;
    min-height: 80vh;
    min-height: 80dvh;
  }

  .call-to-scroll {
    position: absolute;
    inset: 70% 0 auto auto;
    transform: rotate(90deg);
  }
}
</style>
