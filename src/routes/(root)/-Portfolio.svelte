<script>
import { base } from '$app/paths';
import ShapeAnchor from '$lib/components/navigation/ShapeAnchor.svelte';
import { FilteredProjects } from '$lib/components/projects/store';
</script>

<div class="wrapper-portfolio">
  <div
    id="portfolio"
    class="flex flex-wrap flex-col md:flex-row px-4 place-items-center max-w-screen-xl
    mx-auto lg:min-h-0 min-h-screen px-3 py-24 gap-12 justify-between"
  >
    <section class="flex flex-col flex-1 w-full px-4 max-w-[min(100%-2rem)] dark:text-dark-inv-500">
      <h2 class="font-fluid-2">My work</h2>
      <p class="font-h3 mt-3">
        I've contributed to FOSS as well as created some projects of my own. You can find all of my
        projects
        <ShapeAnchor href="{base}/portfolio">tracked here</ShapeAnchor>.
      </p>
    </section>
    <ol class="gap-4 grid flex-1">
      <li class="default min-w-[20ch]">
        <a
          class="grid p-4 md:p-6"
          href={$FilteredProjects[0].link.toString()}
          target="_blank"
          rel="external"
        >
          <h3 class="flex place-items-center gap-2">
            {$FilteredProjects[0].name}<iconify-icon icon="lucide:external-link" />
          </h3>
          <p class="mt-2">{$FilteredProjects[0].short_description}</p>
        </a>
      </li>
      <li class="default min-w-[20ch] dark:bg-dark-500 dark:border-dark-700">
        <a
          class="grid p-4 md:p-6"
          href={$FilteredProjects[1].link.toString()}
          target="_blank"
          rel="external"
        >
          <h3 class="flex place-items-center gap-2">
            {$FilteredProjects[1].name}<iconify-icon icon="lucide:external-link" />
          </h3>
          <p class="mt-2">{$FilteredProjects[1].short_description}</p>
        </a>
      </li>
      <li class="default min-w-[20ch] dark:bg-dark-300 dark:border-dark-400">
        <a class="grid p-4 md:p-6" href="/" target="_blank" rel="external">
          <h3 class="flex place-items-center gap-2">
            Project<iconify-icon icon="lucide:external-link" />
          </h3>
          <p class="mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </a>
      </li>
    </ol>
  </div>
</div>

<style>
.wrapper-portfolio {
  background: var(--100);
}
</style>
