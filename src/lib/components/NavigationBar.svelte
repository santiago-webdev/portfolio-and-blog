<script lang="ts">
  import { base } from '$app/paths'
  import { page } from '$app/stores'
  import { afterNavigate } from '$app/navigation'
  import { onMount } from 'svelte'

  var expanded = false,
    onDesktop = false,
    scrollY = 0,
    savedY = 0,
    currentContext = '',
    header: HTMLElement

  $: console.log(onDesktop)

  const navItems = [
    { label: 'Blog', href: `${base}/blog` },
    { label: 'Projects', href: `${base}/projects` },
    { label: 'About', href: `${base}/about` },
    { label: 'Contact', href: `${base}/contact`, classes: 'block' },
  ]

  onMount(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.addEventListener('scroll', (): void => {
        const direction = scrollY > savedY ? 'down' : 'up'

        if (
          window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight
        ) {
          header.style.transform = 'translateY(0)'
          return
        }

        if (direction === 'down' && scrollY && (!expanded || onDesktop)) {
          header.style.transform = 'translateY(-200%)'
        } else {
          header.style.transform = 'translateY(0)'
        }

        savedY = scrollY
      })
    }
  })

  afterNavigate(() => (expanded = false))

  onMount(() => {
    const checkForDesktop = () =>
      window.matchMedia('(min-width: 64rem)').matches
        ? ((onDesktop = true), (expanded = false))
        : (onDesktop = false)

    checkForDesktop()
    window.addEventListener('resize', checkForDesktop)
  })
</script>

<svelte:window bind:scrollY />

<header
  style:border-bottom={expanded || scrollY ? '2px solid var(--dim-300)' : ''}
  bind:this={header}>
  <nav aria-label="primary-navigation" class="ff-sz-900">
    <a
      href="{base}/"
      aria-label="Logo of this site and link to Home"
      aria-current={`${base}/` === $page.url.pathname ? 'page' : undefined}>
      Santiago Gonzalez</a>
    <div id="contextual">
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
            class={item.classes}
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
    transition: transform 0.3s ease-in-out;
    z-index: 999;
    padding: 0.4rem 0;
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
    width: min(100% - 1rem, var(--lg));
    justify-content: space-between;
    flex-flow: row wrap;
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
