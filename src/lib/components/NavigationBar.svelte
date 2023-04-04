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
</script>

<svelte:window bind:scrollY />

<header style:border-bottom-width={expanded || scrollY ? '2px' : ''} bind:this={header}>
  <nav aria-label='primary-navigation' class="ff-sz-900">
    <a
      href="{base}/"
      aria-label="Logo of this site and link to Home"
      aria-current={`${base}/` === $page.url.pathname ? 'page' : undefined}>
      Santiago Gonzalez</a>
    <div id="contextual">
      {#each navItems as item}
        <a
          aria-current={item.href === $page.url.pathname ||
          ($page.url.pathname.startsWith(item.href || '') && `/` !== item.href)
            ? 'page'
            : undefined}
          aria-label="Link to {item.label}"
          class={item.classes}
          href={item.href}>{item.label}</a>
      {/each}
      <button
        aria-label="Click to expand navigation menu"
        aria-expanded={expanded}
        on:click={() => (expanded = !expanded)}
        style:display={currentContext.length > 0 ? '' : 'none'}>
        <iconify-icon
          width="24"
          icon={expanded ? 'lucide:x' : currentContext} />
      </button>
    </div>
  </nav>
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
</header>

<style>
  header {
    top: 0;
    position: sticky;
    background-color: var(--bg-400);
    transition: box-shadow 150ms ease-in-out, background-color 150ms ease-in-out,
      backdrop-filter 150ms ease-in-out, transform 0.6s ease-in-out,
      padding 150ms ease-in-out;
    z-index: 999;
    border: 0 solid var(--dim-300);
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
    gap: var(--gap);
  }

  button {
    display: flex;
    place-items: center;
    padding-left: var(--gap);
    /* position: relative; */
  }

  section {
    flex-flow: column wrap;
    place-items: center;
    gap: calc(var(--gap) / 2) 0;
    padding-top: var(--gap);
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

  /* @media screen and (min-width: 48rem) { */
  /*   nav { */
  /*     padding: 2rem 0; */
  /*   } */
  /* } */
</style>
