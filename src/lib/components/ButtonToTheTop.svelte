<script lang="ts">
  import { afterUpdate } from 'svelte'

  let scrollY = 0,
    showElement = false

  const startObserving = () => {
    const main = document.querySelector('main')

    if (main) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.target === main) {
            showElement = !entry.isIntersecting
          }
        })
      })

      observer.observe(main)
    }
  }

  afterUpdate(() => startObserving())
</script>

<svelte:window bind:scrollY />

<section class:showElement>
  <a
    style:transform={showElement ? 'translateY(0)' : 'translateY(100px)'}
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

  .showElement {
    display: flex;
  }

  /* TODO(santigo-zero): The transition doesn't work because of display: none */
  a {
    transition: translate 0.5s;
  }
</style>
