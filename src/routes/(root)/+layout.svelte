<script lang="ts">
  import Footer from '$lib/components/Footer.svelte'
  import NavigationBar from '$lib/components/NavigationBar.svelte'
</script>

<div id="layout">
  <NavigationBar />
  <slot />
  <Footer />
</div>

<style>
  #layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
