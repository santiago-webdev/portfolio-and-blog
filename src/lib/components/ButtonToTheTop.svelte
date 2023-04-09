<script lang="ts">
  import { afterUpdate } from 'svelte'

  let scrollY = 0,
    isNecessary = false

  const startObserving = () => {
    const main = document.querySelector('main')

    if (main) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.target === main) {
            isNecessary = !entry.isIntersecting
          }
        })
      })

      observer.observe(main)
    }
  }

  afterUpdate(() => startObserving())
</script>

<svelte:window bind:scrollY />

<section class:isNecessary>
  <a
    on:click|preventDefault={() =>
      window.scrollTo({ top: 0, behavior: 'smooth' })}
    data-sveltekit-reload
    class="reverse"
    href="#body">
    <iconify-icon icon="lucide:arrow-up" />
    Go to top
  </a>
</section>

<style>
  section {
    position: sticky;
    bottom: 1rem;
    margin: 1rem auto;
    width: min(100% - 1rem, var(--xl));
    justify-content: flex-end;
    display: none;
  }

  .isNecessary {
    display: flex;
  }

  a {
    border-radius: 1rem;
    padding: 0.6rem 1.2rem;
  }
</style>
