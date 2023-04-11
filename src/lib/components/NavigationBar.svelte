<script lang="ts">
  import { base } from '$app/paths'
  import { page } from '$app/stores'
  import { afterNavigate } from '$app/navigation'
  import { onMount } from 'svelte'
  import ThemeSwitch from './ThemeSwitch.svelte'

  var expanded = false,
    onDesktop = false,
    scrollY = 0,
    savedY = 0,
    innerHeight = 0,
    hideElement: boolean = false,
    header: HTMLElement

  const navItems = [
    { label: 'Blog', href: `${base}/blog` },
    { label: 'About', href: `${base}/about` },
  ]

  afterNavigate(() => (expanded = false))
  onMount(() => {
    const checkForDesktop = () =>
      window.matchMedia('(min-width: 64rem)').matches
        ? ((onDesktop = true), (expanded = false))
        : (onDesktop = false)

    checkForDesktop()
    window.addEventListener('resize', checkForDesktop)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const hideNav = () =>
      (header.style.transform =
        !expanded && hideElement && scrollY > savedY
          ? 'translateY(-200%)'
          : 'translateY(0)')

    window.addEventListener('scroll', hideNav)
    window.addEventListener('scroll', () => (savedY = scrollY))

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
</script>

<svelte:window bind:scrollY bind:innerHeight />

<header
  style:border-bottom={expanded || scrollY ? '2px solid var(--dim-200)' : ''}
  class:scrollY
  bind:this={header}>
  <nav aria-label="primary-navigation">
    <a
      href="{base}/"
      aria-label="Home"
      aria-current={`${base}/` === $page.url.pathname ? 'page' : undefined}>
      <img
        style="width: 2rem"
        aria-hidden="true"
        src="/logo.svg"
        alt="My personal logo"
        title="My personal logo" />
      <span class:scrollY>Santiago Gonzalez</span>
    </a>
    <div id="contextual">
      <ThemeSwitch />
      {#if !onDesktop}
        <button
          aria-label="Click to expand navigation menu"
          aria-expanded={expanded}
          on:click={() => (expanded = !expanded)}
          style:display={!onDesktop ? 'flex' : 'none'}>
          <iconify-icon
            width="24"
            icon={expanded ? 'lucide:x' : 'lucide:align-justify'} />
        </button>
      {:else}
        {#each navItems as item}
          <a
            aria-current={item.href === $page.url.pathname ||
            ($page.url.pathname.startsWith(item.href || '') &&
              `/` !== item.href)
              ? 'page'
              : undefined}
            aria-label="Link to {item.label}"
            href={item.href}>{item.label}</a>
        {/each}
      {/if}
    </div>
    <section style:display={expanded ? 'flex' : 'none'}>
      {#each navItems as item}
        <hr />
        <a
          class="shiny-select"
          aria-current={item.href === $page.url.pathname ||
          ($page.url.pathname.startsWith(item.href || '') && `/` !== item.href)
            ? 'page'
            : undefined}
          aria-label="Link to {item.label}"
          href={item.href}>{item.label}</a>
      {/each}
    </section>
  </nav>
</header>

<style>
  header {
    top: 0;
    position: sticky;
    transition: padding 300ms cubic-bezier(0.07, 0.95, 0, 1),
      transform 300ms ease-in-out;
    z-index: 999;
    padding: 1.5rem 0;
  }

  header.scrollY {
    padding: 0.2rem 0;
  }

  @media screen and (min-width: 90rem) {
    header.scrollY {
      backdrop-filter: blur(6px);
      background-color: var(--bg-trp-400);
    }
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
    width: min(100% - 1rem, var(--xl));
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
    transition: opacity 150ms ease-in-out;
    opacity: 1;
  }

  nav a:first-child span.scrollY {
    opacity: 0;
  }

  #contextual {
    display: flex;
    flex-flow: row wrap;
    place-items: center;
    gap: 2rem;
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
    nav {
      transition: none;
    }
  }
</style>
