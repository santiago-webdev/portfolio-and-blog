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
    hideHeader = false

  afterNavigate(() => (expanded = false))
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
  })

  onMount(() => $navigationItems.forEach(item => preloadCode(item.href)))
</script>

<svelte:window bind:scrollY bind:innerHeight />

<header class:expanded class:scrollY class:hideHeader>
  <nav aria-label="primary-navigation">
    <a
      href="{base}/"
      aria-label="Home"
      aria-current={`${base}/` === $page.url.pathname ? 'page' : undefined}>
      <img
        class="logo-santigo-zero"
        style="width: 2rem; height: 2rem"
        aria-hidden="true"
        alt="My personal logo"
        title="My personal logo" />
      <span class:scrollY>Santiago Gonzalez</span>
    </a>
    <div id="contextual">
      <WidgetModal />
      {#if !onDesktop}
        <button
          aria-label="Click to expand navigation menu"
          aria-expanded={expanded}
          on:click={() => (expanded = !expanded)}
          style:display={!onDesktop ? 'flex' : 'none'}>
          <iconify-icon icon={expanded ? 'lucide:x' : 'lucide:align-justify'} />
        </button>
      {:else}
        <ThemeSwitch />
        <div role="separator" aria-orientation="vertical" />
        {#each $navigationItems as { label, href, classes }}
          {#if label === 'Separator'}
            <div role="separator" aria-orientation="vertical" />
          {:else if label !== 'Home'}
            <a
              class={classes}
              aria-current={href === $page.url.pathname ||
              ($page.url.pathname.startsWith(href || '') && `/` !== href)
                ? 'page'
                : undefined}
              aria-label="Link to {label}"
              {href}>{label}</a>
          {/if}
        {/each}
      {/if}
    </div>
    <section style:display={expanded ? 'flex' : 'none'}>
      <ThemeSwitch />
      {#each $navigationItems as { label, href, classes }}
        {#if label !== 'Separator'}
          <hr />
          <a
            class="shiny-select {classes}"
            aria-current={href === $page.url.pathname ||
            ($page.url.pathname.startsWith(href || '') && `/` !== href)
              ? 'page'
              : undefined}
            aria-label="Link to {label}"
            {href}>{label}</a>
        {/if}
      {/each}
    </section>
  </nav>
</header>

<style>
  header {
    top: 0;
    position: sticky;
    transition: padding 300ms cubic-bezier(0.07, 0.95, 0, 1),
      background-color 300ms ease-in-out, transform 300ms ease-in-out;
    z-index: 999;
    padding: 0.6rem 0;
    background-color: var(--clr-25);
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

  header.scrollY {
    padding: 0.6rem 0;
  }

  a,
  button {
    color: inherit;
    padding: 0.4rem 0.8rem;
    display: flex;
    place-items: center;
    /* outline: 1px paleturquoise solid; */
  }

  nav {
    display: flex;
    place-items: center;
    margin-inline: auto;
    max-width: var(--xl);
    justify-content: space-between;
    flex-flow: row wrap;
  }

  nav a:first-child {
    display: flex;
    flex-flow: row wrap;
    gap: 0.8rem;
    font-variation-settings: 'wght' 660;
  }

  nav a:first-child span {
    display: none;
  }

  #contextual {
    display: flex;
    flex-flow: row wrap;
    place-items: center;
    gap: 0.8rem;
  }

  section {
    flex-flow: column wrap;
    place-items: center;
    gap: 0.5rem 0;
    padding-top: 1rem;
    width: min(100%, var(--base));
    margin-inline: auto;
  }

  section a {
    width: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    nav,
    header {
      transition: none;
    }
  }

  @media screen and (min-width: 768px) {
    nav {
      width: 90%;
    }

    header.scrollY {
      backdrop-filter: blur(6px);
      background-color: var(--clr-25-trp);
    }

    header {
      padding: 2rem 0;
    }

    nav a:first-child span {
      display: block;
      transition: opacity 150ms ease-in-out;
      opacity: 1;
    }

    nav a:first-child span.scrollY {
      opacity: 0;
    }
  }
</style>
