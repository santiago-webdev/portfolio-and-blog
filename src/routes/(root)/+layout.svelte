<script lang="ts">
  import { page } from '$app/stores'
  import Footer from '$lib/components/Footer.svelte'
  import NavigationBar from '$lib/components/NavigationBar.svelte'
  import Transition from '$lib/components/Transition.svelte'
</script>

<div id="layout">
  <NavigationBar />
  <Transition url={$page.url}>
    <slot />
  </Transition>
  <Footer />
</div>

<style>
  #layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
