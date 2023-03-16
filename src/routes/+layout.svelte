<script lang="ts">
  import NavBar from '$ui/NavBar.svelte'
  import Transition from '$ui/Transition.svelte'
  import Footer from '$ui/Footer.svelte'
  import ScrollProgressTracker from '$ui/ScrollProgressTracker.svelte'
  import { page } from '$app/stores'
  import '$lib/styles/global.css'
  import 'iconify-icon'
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
    grid-template-rows: auto 1fr auto;
  }
</style>
