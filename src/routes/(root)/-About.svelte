<script>
  import ShapeButton from '$lib/components/navigation/ShapeButton.svelte';
  import config from '$lib/config.json';
  import { base } from '$app/paths';
</script>

<div class="wrapper-about">
  <h2 class="font-70">About</h2>
  <div class="aboutme">
    <section>
      <p style="font-weight: 500">Hello, my name is Santiago.</p>
      <p class="font-20">
        I'm a web developer based in <em>Argentina</em> with a passion for
        <em>Free And Open Source</em>,
        <em>UI/UX</em> and <em>Linux</em>. I'm fluent in English and Spanish.
      </p>
      <p class="font-20">
        I enjoy crafting simple interfaces, focusing in
        <em>maintainability</em>, <em>accessibility</em> and
        <em>progressive enhancement</em>.
      </p>
    </section>
    <div class="familiar-stack">
      <span style="font-weight: 500" class="font-30"
        >And this is the stack I'm most comfortable with</span
      >
      <ul class="font-20">
        <li>JavaScript(ES6+)</li>
        <li>React</li>
        <li>Node.js</li>
        <li>SQL</li>
        <li>Python</li>
      </ul>
    </div>
  </div>
  <div class="links-about">
    <ShapeButton href="{base}/about" class="reverse">More About me</ShapeButton>
    <div class="container">
      <ShapeButton href={config.about.url} target="_blank" rel="external"
        >Resume</ShapeButton
      >
      <small>Hit Ctrl+P to print</small>
    </div>
  </div>
</div>

<style>
  .wrapper-about {
    background-color: var(--clr-20);
    padding: 1rem 0;
  }

  .aboutme {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 3rem;
    width: min(100% - 2.2rem, var(--md));
    margin-inline: auto;
  }

  h2 {
    text-align: center;
    margin-bottom: clamp(2rem, 2vw + 1rem, 6rem);
  }

  section {
    display: flex;
    flex-direction: column;
    min-width: min(100%, var(--xs));
    grid-column: span 8;
    gap: 1.4rem;
  }

  .familiar-stack {
    grid-column: span 8;
    display: grid;
    place-content: start;
    gap: 1rem;
  }

  .links-about {
    display: flex;
    flex-direction: column;

    margin-top: clamp(2rem, 2vw + 1rem, 6rem);
    width: min(100% - 2.2rem, var(--md));
    margin-inline: auto;
    place-content: center;
    gap: 1rem;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 10rem), 1fr));
    gap: 1rem;

    list-style: disc inside;
  }

  li {
    margin-right: 2ch;
  }

  small {
    visibility: hidden;
    display: block;
    margin-top: 1ch;
    padding-inline: 2rem;
  }

  @media screen and (min-width: 768px) {
    small {
      visibility: visible;
    }

    section {
      grid-column: span 4;
    }

    .familiar-stack {
      grid-column: span 4;
    }

    .links-about {
      flex-direction: revert;
      place-items: self-start;
      grid-column: span 8;
    }
  }
</style>
