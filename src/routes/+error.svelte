<script lang="ts">
import { base } from '$app/paths';
import { page } from '$app/stores';
import ShapeAnchor from '$lib/components/navigation/ShapeAnchor.svelte';
import ShapeButton from '$lib/components/navigation/ShapeButton.svelte';
import config from '$lib/config.json';
</script>

<main>
  <h1 class="font-fluid-4">{$page.status}: {$page.error?.message}</h1>
  <p>
    Something has gone wrong, if you'd like to report it, please
    <ShapeAnchor href="{config.landingpage.repo}/issues">open an issue</ShapeAnchor>.
  </p>
  <ShapeButton class="default" href="{base}/">Back to Home</ShapeButton>
</main>

<style>
main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
  margin-inline: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: min(100% 2rem, var(--md));
}

p {
  margin-top: 1rem;
  margin-bottom: 1.5rem;
}
</style>
