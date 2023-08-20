<script lang="ts">
import { retrieve_icon } from '$lib/utils/utils';
import Experience from './-Experience.svelte';
import ShapeButton from '$lib/components/navigation/ShapeButton.svelte';
import config from '$lib/config.json';

const databases = ['MySQL', 'MariaDB', 'SQLite', 'PostgreSQL'];
const frameworks = ['React', 'Svelte', 'SvelteKit', 'Astro'];
const tools = [
  'HTML5',
  'CSS3',
  'CSS Modules',
  'UnoCSS',
  'TailwindCSS',
  'JavaScript',
  'TypeScript',
  'Git',
  'GitHub',
  'Figma',
  'Docker',
  'Podman',
  'Java',
  'Python'
];
</script>

<main>
  <div class="container-main">
    <header>
      <h1 class="font-fluid-2">Get to know me</h1>
      <p>
        <strong>Hello, my name is Santiago!</strong>
      </p>
      <p class="font-h3">
        I enjoy crafting simple interfaces, focusing in <em>maintainability</em>,
        <em>accessibility</em> and
        <em>progressive enhancement</em>.
      </p>
      <div class="cta-links">
        <ShapeButton
          class="reverse"
          href="https://www.linkedin.com/in/santiago-gonzalez-62557221b/"
          icon="linkedin"
          title="Link to my LinkedIn profile"
        >
          LinkedIn</ShapeButton
        >
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
      </div>
    </header>
  </div>
</main>
<div class="about-content">
  <Experience />
  <hr />
  <div id="technologies">
    <h2 class="font-fluid-1">Technology I use</h2>
    <p>
      My set of skills is mostly dedicated to the web, but I'm also interested in Linux and CS in
      general. These are some of the tools I had used in the past:
    </p>
    <div class="wrapper-frameworks">
      <h3>Frameworks and metaframeworks:</h3>
      <ul class="inline-items">
        {#each frameworks as framework}
          <li
            class="flex place-items-center gap-1 px-4 py-2 rounded-2xl dark:bg-dark-400 border-t border-l border-t-solid border-l-solid dark:border-dark-600"
          >
            <iconify-icon width="26" height="26" icon={retrieve_icon(framework)} />{framework}
          </li>
        {/each}
      </ul>
    </div>

    <div class="wrapper-databases mt-4">
      <h3>Databases:</h3>
      <ul class="inline-items">
        {#each databases as database}
          <li
            class="flex place-items-center gap-1 px-4 py-2 rounded-2xl dark:bg-dark-400 border-t border-l border-t-solid border-l-solid dark:border-dark-600"
          >
            <iconify-icon width="26" height="26" icon={retrieve_icon(database)} />{database}
          </li>
        {/each}
      </ul>
    </div>

    <div class="wrapper-others mt-4">
      <h3>Other tools:</h3>
      <ul class="inline-items tags">
        {#each tools as tool}
          <li>
            <iconify-icon width="26" height="26" icon={retrieve_icon(tool)} />{tool}
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<style>
main {
  display: flex;
  background: var(--srf-3);
  border-bottom-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  padding-bottom: clamp(1rem, 2vw + 1rem, 6rem);
  margin-bottom: clamp(1rem, 2vw + 1rem, 3rem);
}

.container-main {
  display: flex;
  flex-wrap: wrap;
  width: min(100% - 2rem, var(--sm));
  margin-inline: auto;
  gap: 3rem;
}

header {
  display: grid;
  margin-inline: auto;
  padding-top: 3rem;
}

header p:nth-child(2) {
  margin-top: 1.5rem;
}

header p:nth-child(3) {
  margin-top: 1rem;
}

.cta-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem 1rem;
  margin-top: 2rem;
}

small {
  display: none;
  color: var(--text-3);
}

@media screen and (min-width: 48rem) {
  .cta-links {
    flex-direction: row;
    place-items: start;
  }

  small {
    display: block;
    padding: 0 2rem;
    margin-top: 0.5rem;
  }
}

@media screen and (min-width: 48rem) {
  .cta-links {
    flex-direction: row;
    place-items: start;
  }
}

.about-content {
  background: var(--srf-3);
  border: 1px var(--srf-3) solid;
  border-top-color: var(--srf-3-brd);
  border-left-color: var(--srf-3-brd);
  border-radius: 0.75rem;
  max-width: var(--md);
  margin-inline: auto;
  padding: clamp(1rem, 2vw + 1rem, 3rem) 0;
  margin-bottom: 3rem;
}

hr {
  width: 90%;
  margin-inline: auto;
  padding-top: 3rem;
}

#technologies {
  margin-inline: auto;
  width: min(100% - 2rem, var(--sm));
  margin-bottom: 2rem;
  margin-top: 3rem;
}

#technologies p {
  margin-top: 1rem;
}

ul {
  margin-top: 0.25rem;
}

ul li {
  background: var(--srf-4);
  border-top-color: var(--srf-4-brd);
  border-left-color: var(--srf-4-brd);
}

.wrapper-frameworks {
  margin-top: 2rem;
}

.wrapper-databases,
.wrapper-others {
  margin-top: 1.5rem;
}
</style>
