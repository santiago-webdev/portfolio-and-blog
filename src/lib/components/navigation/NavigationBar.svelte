<script lang="ts">
  import { base } from '$app/paths'
  import { page } from '$app/stores'
  import { afterNavigate, preloadCode } from '$app/navigation'
  import { onMount } from 'svelte'

  import ThemeSwitch from '$lib/components/ThemeSwitch.svelte'
  import WidgetModal from '$lib/components/search/WidgetModal.svelte'
  import { navigationItems } from '$lib/components/navigation/store'

  var expanded = false,
    onDesktop = false,
    scrollY = 0,
    savedY = 0,
    innerHeight = 0,
    hideElement = false,
    hideHeader = false,
    transparent = false,
    anchored = false

  afterNavigate(() => {
    expanded = false

    if ($page.url.pathname === `${base}/about`) {
      transparent = true
      anchored = true
    } else {
      transparent = false
      anchored = false
    }
  })

  onMount(() => {
    const checkForDesktop = () =>
      window.matchMedia('(min-width: 1280px)').matches
        ? ((onDesktop = true), (expanded = false))
        : (onDesktop = false)

    checkForDesktop()
    window.addEventListener('resize', checkForDesktop)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    window.addEventListener('scroll', () => {
      hideHeader = !expanded && hideElement && scrollY > savedY
      savedY = scrollY
    })

    const main = document.querySelector('main')

    if (main) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.target === main) {
            hideElement = !entry.isIntersecting
          }
        })
      })

      observer.observe(main)
    }

    setTimeout(
      () => $navigationItems.forEach(item => preloadCode(item.href)),
      3000
    )
  })

  $: display = expanded ? 'flex' : 'none'
</script>

<svelte:window bind:scrollY bind:innerHeight />

<header
  class:anchored
  class:transparent
  class:expanded
  class:scrollY
  class:hideHeader>
  <nav aria-label="primary-navigation">
    <a
      href="{base}/"
      aria-label="Home"
      aria-current={`${base}/` === $page.url.pathname ? 'page' : undefined}>
      <img
        class="logo-santigo-zero"
        aria-hidden="true"
        alt="My personal logo"
        title="My personal logo" />
      <span>Santiago Gonzalez</span>
    </a>
    <div class="navigation-items">
      <WidgetModal />
      {#if !onDesktop}
        <button
          aria-label="Click to expand navigation menu"
          aria-expanded={expanded}
          on:click={() => (expanded = !expanded)}>
          <iconify-icon icon={expanded ? 'lucide:x' : 'lucide:align-justify'} />
        </button>
      {:else}
        <ThemeSwitch />
        <div role="separator" aria-orientation="vertical" />
        {#each $navigationItems as { label, href }}
          {#if label === 'Separator'}
            <div role="separator" aria-orientation="vertical" />
          {:else if label !== 'Home'}
            <a
              aria-current={$page.url.pathname.startsWith(href) && `/` !== href
                ? 'page'
                : undefined}
              aria-label="Link to {label}"
              {href}>{label}</a>
          {/if}
        {/each}
      {/if}
    </div>
    <section style:display>
      {#each $navigationItems as { label, href }}
        {#if label !== 'Separator'}
          <a
            class="shiny-select"
            aria-current={$page.url.pathname.startsWith(href) && `/` !== href
              ? 'page'
              : undefined}
            aria-label="Link to {label}"
            {href}>{label}</a>
          <hr />
        {/if}
      {/each}
      <ThemeSwitch />
    </section>
  </nav>
</header>

<style>
  header {
    position: sticky;
    top: 0;
    transition: background-color, transform 300ms ease-in-out;
    z-index: 999;
    padding: 0.6rem 0;
    background-color: var(--clr-25);
  }

  header.anchored {
    top: unset !important;
    transform: none !important;
    background-color: transparent !important;
    border-color: transparent !important;
    border-width: 0 !important;
  }

  header.hideHeader {
    transform: translateY(-200%);
  }

  header.expanded,
  header.scrollY {
    border-bottom: 2px solid var(--clr-55);
  }

  header.expanded {
    background-color: var(--clr-30);
  }

  header.transparent {
    background-color: transparent;
  }

  header.transparent.scrollY {
    background-color: var(--clr-25);
  }

  a,
  button {
    padding: 0.4rem 0.8rem;
    display: flex;
    place-items: center;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    place-items: center;
    justify-content: space-between;

    width: min(92%, var(--xl));
    margin-inline: auto;
  }

  nav a:first-child {
    display: flex;
    flex-flow: row wrap;
    gap: 0.8rem;
    font-variation-settings: 'wght' 660;
  }

  img {
    width: 2rem;
    height: 2rem;
  }

  header.scrollY nav a:first-child span,
  header nav a:first-child span {
    opacity: 0;
  }

  .navigation-items {
    display: flex;
    gap: 0.8rem;
  }

  section {
    flex-direction: column;
    gap: 0.5rem;
    padding-top: 2rem;
    width: min(92%, var(--sm));
    margin-inline: auto;
  }

  @media screen and (min-width: 768px) {
    header.scrollY {
      backdrop-filter: blur(6px);
      background-color: var(--clr-25-trp);
    }

    header.anchored nav a:first-child span,
    header nav a:first-child span {
      opacity: 1;
      transition: opacity 150ms ease-in-out;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      transition-property: none;
      transition: none;
      animation: none;
    }
  }
</style>
