<script lang="ts">
  import ButtonToTheTop from '$lib/components/ButtonToTheTop.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import NavigationBar from '$lib/components/NavigationBar.svelte'
  import { fly } from 'svelte/transition'

  export let data
</script>

<div id="layout">
  <NavigationBar />
  {#key data.pathname}
    <div
      in:fly={{ y: -30, duration: 200, delay: 150 }}
      out:fly={{ y: -30, duration: 200 }}>
      <slot />
    </div>
  {/key}
  <ButtonToTheTop />
  <Footer />
</div>

<style>
  #layout {
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
</style>
