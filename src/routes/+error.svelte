<script lang="ts">
  import { base } from '$app/paths'
  import { page } from '$app/stores'
</script>

<section>
  <h1>404 {$page.error?.message}</h1>
  <a class="shiny hover ff-sz-700" href="{base}/">Home</a>
</section>

<style>
  section {
    display: grid;
    margin: auto;
    gap: 2rem;
  }

  a {
    display: flex;
    place-items: center;
    place-content: center;
    padding: clamp(1rem, 1.5vw, 2rem) clamp(2rem, 3vw, 3rem);
    gap: 0.2rem;
    border-radius: 999rem;
  }
</style>
