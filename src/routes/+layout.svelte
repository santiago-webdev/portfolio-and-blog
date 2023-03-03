<script lang="ts">
  import ScrollProgress from '$lib/interface/ScrollProgress.svelte';
  import NavBar from '$lib/components/Navigation/NavBar.svelte';
  import Footer from '$lib/components/Navigation/Footer.svelte';
  import Transition from '$lib/components/Transition.svelte';
  import { page } from '$app/stores';

  import '$lib/styles/global.css';

  import '@fontsource/manrope/variable.css';
  // import '@fontsource/manrope/200.css';
  // import '@fontsource/manrope/300.css';
  // import '@fontsource/manrope/400.css';
  // import '@fontsource/manrope/500.css';
  // import '@fontsource/manrope/600.css';
  // import '@fontsource/manrope/700.css';
  // import '@fontsource/manrope/800.css';

  import 'iconify-icon';
</script>

<div class="layout">
  <NavBar />
  <Transition url={$page.url}>
    <slot />
  </Transition>
  <Footer />

  <ScrollProgress />
</div>

<style>
  .layout {
    min-height: 100vh;
    min-height: 100dvh;
    display: grid;
    grid-template-rows: 1fr auto;
    background-color: var(--clr-background);
  }
</style>
