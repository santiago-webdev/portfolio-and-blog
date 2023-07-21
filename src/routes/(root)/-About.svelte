<script>
import ShapeButton from '$lib/components/navigation/ShapeButton.svelte';
import config from '$lib/config.json';
import { base } from '$app/paths';
</script>

<div class="dark:bg-dark-300 px-3 py-6">
  <h2 class="font-fluid-2 text-center mb-8">About</h2>
  <div class="grid grid-cols-8 gap-12 mx-auto max-w-screen-xl">
    <section class="grid col-span-8 md:col-span-4 gap-4">
      <p class="font-h3">
        <strong> Hello, my name is Santiago. </strong>
      </p>
      <p class="font-h3">
        I'm a web developer based in <em>Argentina</em> with a passion for
        <em>Free And Open Source</em>,
        <em>UI/UX</em> and <em>Linux</em>. I'm fluent in English and Spanish.
      </p>
      <p class="font-h3">
        I enjoy crafting simple interfaces, focusing in
        <em>maintainability</em>, <em>accessibility</em> and
        <em>progressive enhancement</em>.
      </p>
    </section>
    <div class="grid place-content-start gap-4 col-span-8 md:col-span-4">
      <p class="font-h3">And this is the stack I'm most comfortable with</p>
      <ul class="list-disc list-inside grid gap-2">
        <li class="font-h3">JS/TS (ES6+)</li>
        <!-- <li class="font-h3">React</li> -->
        <!-- <li class="font-h3">Node.js</li> -->
        <li class="font-h3">SQL</li>
        <li class="font-h3">Python</li>
      </ul>
    </div>
  </div>
  <div
    class="flex gap-4 mt-10 flex-col md:flex-row md:place-items-start place-content-center max-w-screen-xl mx-auto"
  >
    <ShapeButton class="reverse" href="{base}/about">More about me</ShapeButton>
    <div>
      <ShapeButton
        class="default"
        href={config.about.resume}
        target="_blank"
        rel="external">Resume</ShapeButton
      >
      <small class="hidden md:px-8 md:block md:mt-2">Hit Ctrl+P to print</small>
    </div>
  </div>
</div>

<style>
ul {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 10rem), 1fr));
}
</style>
