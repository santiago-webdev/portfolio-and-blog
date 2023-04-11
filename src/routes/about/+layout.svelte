<script lang="ts">
  import Footer from '$lib/components/Footer.svelte'
</script>

<div id="layout-about">
  <slot />
  <Footer />
</div>

<style>
  #layout-about {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
  }
</style>
