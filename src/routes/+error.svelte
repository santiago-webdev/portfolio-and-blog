<script lang="ts">
import { base } from '$app/paths';
import { page } from '$app/stores';
import ShapeAnchor from '$lib/components/navigation/ShapeAnchor.svelte';
import ShapeButton from '$lib/components/navigation/ShapeButton.svelte';
import config from '$lib/config.json';
</script>

<main
  class="min-h-screen flex flex-col max-w-screen-lg px-8 mx-auto justify-center items-center text-center"
>
  <h1 class="font-fluid-4">{$page.status}: {$page.error?.message}</h1>
  <p class="mt-4 mb-8">
    Something has gone wrong, if you'd like to report it, please
    <ShapeAnchor href="{config.landingpage.repo}/issues">open an issue</ShapeAnchor>.
  </p>
  <ShapeButton class="default" href="{base}/">Back to Home</ShapeButton>
</main>
