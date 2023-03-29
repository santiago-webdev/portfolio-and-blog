<script lang="ts">
  import NavBar from '$compose/NavBar.svelte'
  import Transition from '$compose/Transition.svelte'
  import Footer from '$compose/Footer.svelte'
  import ScrollProgressTracker from '$compose/ScrollProgressTracker.svelte'
  import { page } from '$app/stores'
  import '$lib/styles/global.css'
  import 'iconify-icon'
  import ScrollBackToTop from '$compose/ScrollBackToTop.svelte'
</script>

<div class="layout">
  <NavBar />
  <Transition url={$page.url}>
    <slot />
  </Transition>
  <ScrollBackToTop />
</div>
<Footer />
<ScrollProgressTracker />

<style>
  .layout {
    min-height: 100vh;
    min-height: 100dvh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    position: relative;
  }
</style>
