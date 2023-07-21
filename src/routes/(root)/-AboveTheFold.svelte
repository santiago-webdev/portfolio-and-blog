<script lang="ts">
import { base } from '$app/paths';
import LinkArrow from '$lib/components/navigation/LinkArrow.svelte';
import ShapeButton from '$lib/components/navigation/ShapeButton.svelte';
import config from '$lib/config.json';
</script>

<div class="px-3 bg-light-800 dark:bg-dark-400">
  <main
    class="grid place-items-center py-6 relative mx-auto max-w-screen-xl
    xl:py-24 xl:min-h-[80vh] xl:min-h-[80dvh]"
  >
    <div class="flex flex-col flex-wrap">
      <h1 class="font-fluid-5 max-w-[15ch]">
        Building the web<br /> with clean interfaces
      </h1>
      <p class="font-h3 mt-2 max-w-[38ch]">
        I'm a frontend developer and here we'll discuss about <strong
          >web deve&shylopment</strong
        > and show you my projects while at it.
      </p>
      <section
        class="flex gap-4 mt-10 flex-col md:flex-row md:place-items-start"
      >
        <ShapeButton class="reverse" href="{base}/portfolio"
          >What I've built</ShapeButton
        >
        <div>
          <ShapeButton
            class="default"
            href={config.about.resume}
            target="_blank"
            rel="external">Resume</ShapeButton
          >
          <small class="hidden md:px-8 md:block md:mt-2"
            >Hit Ctrl+P to print</small
          >
        </div>
      </section>
    </div>
    <div
      class="place-self-start mt-8 hover:dark-red-50
      xl:absolute xl:rotate-90 xl:top-[70%] xl:right-0"
    >
      <LinkArrow href="#portfolio">Learn more</LinkArrow>
    </div>
  </main>
</div>
