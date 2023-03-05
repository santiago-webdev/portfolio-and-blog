<script lang="ts">
  import NavBar from '$lib/components/Navigation/NavBar.svelte';
  import Transition from '$lib/components/Transition.svelte';
  import Footer from '$lib/components/Navigation/Footer.svelte';
  import ScrollProgressTracker from '$lib/interface/ScrollProgressTracker.svelte';
  import { page } from '$app/stores';
  import '$lib/styles/global.css';
  import 'iconify-icon';
</script>

<div class="layout">
  <NavBar />
  <Transition url={$page.url}>
    <slot />
  </Transition>
  <Footer />
  <ScrollProgressTracker />
</div>

<style>
  .layout {
    min-height: 100vh;
    min-height: 100dvh;
    display: grid;
    grid-template-rows: 1fr auto;
    background-color: var(--clr-bg-200);
  }
</style>
