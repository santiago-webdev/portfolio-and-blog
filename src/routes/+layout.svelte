<script lang="ts">
  import ScrollProgress from '$lib/interface/ScrollProgress.svelte';
  import NavBar from '$lib/components/Navigation/NavBar.svelte';
  import Footer from '$lib/components/Navigation/Footer.svelte';
  import Transition from '$lib/components/Transition.svelte';
  import Noise from '$lib/components/Noise.svelte';
  import { page } from '$app/stores';

  import '$lib/styles/global.css';
  import '$lib/styles/typography.css';
  import '$lib/styles/system.css';

  import '@fontsource/manrope/variable.css';
  import '@fontsource/manrope/200.css';
  import '@fontsource/manrope/300.css';
  import '@fontsource/manrope/400.css';
  import '@fontsource/manrope/500.css';
  import '@fontsource/manrope/600.css';
  import '@fontsource/manrope/700.css';
  import '@fontsource/manrope/800.css';

  import 'iconify-icon';
</script>

<div class="layout">
  <ScrollProgress />
  <NavBar />
  <Transition url={$page.url}>
    <slot />
  </Transition>
  <Footer />
  <Noise />
</div>

<style>
  .layout {
    color-scheme: dark;
    min-height: 100vh;
    min-height: 100dvh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    background-color: var(--clr-background);
  }
</style>
