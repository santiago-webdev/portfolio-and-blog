<script lang="ts">
import { base } from '$app/paths';
import { page } from '$app/stores';
import ShapeAnchor from '$lib/components/navigation/ShapeAnchor.svelte';
import ShapeButton from '$lib/components/navigation/ShapeButton.svelte';
import config from '$lib/config.json';
</script>

<main>
  <h1>{$page.status}: {$page.error?.message}</h1>
  <p>
    Something has gone wrong, if you'd like to report it, please
    <ShapeAnchor href="{config.landingpage.repo}/issues">open an issue</ShapeAnchor>.
  </p>
  <section>
    <ShapeButton href="{base}/">Back to Home</ShapeButton>
  </section>
</main>

<style>
main {
  min-height: 100dvh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: min(100% - 2.2rem, var(--sm));
  margin-inline: auto;
  place-content: center;
  place-items: center;
  text-align: center;
}

main > * + * {
  margin-block-start: 1em;
}

section {
  display: flex;
  flex-direction: column;
}
</style>
