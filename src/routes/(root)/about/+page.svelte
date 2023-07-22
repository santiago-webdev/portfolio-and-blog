<script lang="ts">
import { retrieve_icon } from '$lib/utils/utils';
import Experience from './-Experience.svelte';
import ShapeButton from '$lib/components/navigation/ShapeButton.svelte';

export let greeting = 'Hello, my name is Santiago.';

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

<main class="dark:bg-dark-400">
  <header
    class="grid gap-y-8 grid-cols-[repeat(auto-fit,_minmax(min(100%,_10rem),_1fr))] max-w-screen-lg mx-auto py-12 px-3 space-x-4"
  >
    <!-- grid-template-columns: repeat(auto-fit, minmax(min(100%, 10rem), 1fr)); -->
    <section class="grid col-span-4">
      <h1 class="font-fluid-3">Get to know me</h1>
      <p class="mt-4"><strong>{greeting}</strong></p>
      <p class="mt-2">
        I enjoy crafting simple interfaces, focusing in <em>maintainability</em
        >,
        <em>accessibility</em> and
        <em>progressive enhancement</em>. My set of skills is mostly dedicated
        to the web, but I'm also interested in Linux and CS in general.
      </p>
      <p class="mt-2">You can find me in this platforms:</p>
      <section
        class="flex gap-4 mt-10 flex-col md:flex-row md:place-items-start"
      >
        <ShapeButton
          class="reverse"
          href="https://github.com/santigo-zero/"
          icon="github">GitHub</ShapeButton
        >
        <ShapeButton
          class="default"
          href="https://www.linkedin.com/in/santiago-gonzalez-62557221b/"
          icon="linkedin"
        >
          LinkedIn</ShapeButton
        >
      </section>
    </section>
    <div class="col-span-2 grid place-items-start">
      <img src="/alleged-photo-of-myself.webp" alt="" />
    </div>
  </header>
</main>
<div id="experience" class="dark:bg-dark-100 py-12">
  <Experience />
</div>
<div id="technologies" class="mx-auto py-12 max-w-screen-lg">
  <h2>Technology I use</h2>
  <p class="mt-4">
    These are some of the tools I had used in the past (but am not limited to):
  </p>
  <div class="wrapper-frameworks mt-12">
    <h3>Frameworks and metaframeworks:</h3>
    <ul class="inline-items mt-2">
      {#each frameworks as framework}
        <li
          class="flex place-items-center gap-1 px-4 py-2 rounded-2xl dark:bg-dark-400 border-t border-l border-t-solid border-l-solid dark:border-dark-600"
        >
          <iconify-icon
            width="26"
            height="26"
            icon={retrieve_icon(framework)}
          />{framework}
        </li>
      {/each}
    </ul>
  </div>

  <div class="wrapper-databases mt-8">
    <h3>Databases:</h3>
    <ul class="inline-items mt-2">
      {#each databases as database}
        <li
          class="flex place-items-center gap-1 px-4 py-2 rounded-2xl dark:bg-dark-400 border-t border-l border-t-solid border-l-solid dark:border-dark-600"
        >
          <iconify-icon
            width="26"
            height="26"
            icon={retrieve_icon(database)}
          />{database}
        </li>
      {/each}
    </ul>
  </div>

  <div class="wrapper-others mt-8">
    <h3>Other tools:</h3>
    <ul class="inline-items mt-2">
      {#each tools as tool}
        <li
          class="flex place-items-center gap-1 px-4 py-2 rounded-2xl dark:bg-dark-400 border-t border-l border-t-solid border-l-solid dark:border-dark-600"
        >
          <iconify-icon
            width="26"
            height="26"
            icon={retrieve_icon(tool)}
          />{tool}
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
/* TODO(santigo-zero): Please rewrite this when you actually take a picture of yourself,
* this is horrible */
img {
  border: 8px solid var(--clr-700);
  object-fit: cover;
  max-width: 20rem;
  max-height: 20rem;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>
