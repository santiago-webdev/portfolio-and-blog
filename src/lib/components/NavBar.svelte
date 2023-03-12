<script lang="ts">
  import { AUTHOR } from '$lib/config';
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { afterNavigate } from '$app/navigation';
  import { onMount, type ComponentType } from 'svelte';
  import WidgetModal from '$lib/components/Search/WidgetModal.svelte';
  import WidgetTheme from '$lib/components/WidgetTheme.svelte';

  var expanded = false,
    onDesktop = false,
    scrollY = 0,
    savedY = 0,
    currentContext = '',
    nav: HTMLElement,
    button: HTMLButtonElement;

  interface ComponentNavItem {
    component: true;
    widget: ComponentType;
  }

  interface LinkNavItem {
    component: false;
    label: string;
    href: string;
  }

  type NavItem = ComponentNavItem | LinkNavItem;

  const navItems1: NavItem[] = [{ component: true, widget: WidgetModal }];

  const navItems2: NavItem[] = [
    { component: false, label: 'Blog', href: `${base}/blog` },
    { component: false, label: 'Projects', href: `${base}/projects` }
  ];

  const navItems3: NavItem[] = [
    { component: true, widget: WidgetTheme },
    { component: false, label: 'Home', href: `${base}/` },
    { component: false, label: 'Blog', href: `${base}/blog` },
    { component: false, label: 'Projects', href: `${base}/projects` }
  ];

  const navItems4: NavItem[] = [
    { component: false, label: 'About', href: `${base}/about` },
    { component: false, label: 'Contact', href: `${base}/contact` }
  ];

  let displayedNavItems: NavItem[] = [];
  let contextNavItems: NavItem[] = [];

  onMount(() => {
    const mediaQuery1 = window.matchMedia('(max-width: 48rem)');
    const mediaQuery2 = window.matchMedia('(min-width: 48rem)');
    const mediaQuery3 = window.matchMedia('(min-width: 64rem)');
    const mediaQuery4 = window.matchMedia('(min-width: 90rem)');

    function updateContext() {
      switch (true) {
        case mediaQuery4.matches:
          displayedNavItems = [...navItems1, ...navItems3, ...navItems4];
          contextNavItems = [];
          currentContext = '';
          onDesktop = true;
          break;
        case mediaQuery3.matches:
          displayedNavItems = [...navItems1, ...navItems3];
          contextNavItems = navItems4;
          currentContext = 'lucide:more-horizontal'; // 3 dots
          onDesktop = true;
          break;
        case mediaQuery2.matches:
          displayedNavItems = [...navItems1, ...navItems2];
          contextNavItems = [
            { component: true, widget: WidgetTheme },
            { component: false, label: 'Home', href: `${base}/` },
            ...navItems4
          ];
          currentContext = 'lucide:grip-horizontal'; // 6 dots
          onDesktop = true;
          break;
        default:
          displayedNavItems = navItems1;
          contextNavItems = [...navItems3, ...navItems4];
          currentContext = 'lucide:grip'; // 9 dots
          onDesktop = false;
          break;
      }
    }

    updateContext();
    mediaQuery1.addEventListener('change', updateContext);
    mediaQuery2.addEventListener('change', updateContext);
    mediaQuery3.addEventListener('change', updateContext);
    mediaQuery4.addEventListener('change', updateContext);

    window.addEventListener('scroll', (): void => {
      const direction = scrollY > savedY ? 'down' : 'up';

      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        nav.style.transform = 'translateY(0)';
        return;
      }

      if (direction === 'down' && scrollY > 500 && (!expanded || onDesktop)) {
        nav.style.transform = 'translateY(-200%)';
      } else {
        nav.style.transform = 'translateY(0)';
      }

      savedY = scrollY;
    });
  });

  afterNavigate(() => (expanded = false));
</script>

<svelte:window bind:scrollY />

<nav
  class="artifact"
  style:border-bottom={expanded || scrollY
    ? '1px solid var(--clr-muted-300)'
    : ''}
  class:scrollY
  bind:this={nav}>
  <div id="wrapper" class="wider">
    <a href="{base}/" aria-label="Logo of this site and link to Home"
      >{(onDesktop && AUTHOR) || 'SG'}</a>
    <div id="contextual">
      {#each displayedNavItems as item}
        {#if item.component}
          <svelte:component this={item.widget} />
        {:else}
          <a
            aria-current={item.href === $page.url.pathname ||
            ($page.url.pathname.startsWith(item.href || '') &&
              `/` !== item.href)
              ? 'page'
              : undefined}
            aria-label="Link to {item.label}"
            href={item.href}>{item.label}</a>
        {/if}
      {/each}
      <button
        aria-expanded={expanded}
        on:click={() => (expanded = !expanded)}
        style:display={currentContext.length > 0 ? '' : 'none'}
        bind:this={button}>
        <iconify-icon width="24" icon={currentContext} />
      </button>
    </div>
  </div>
  <section style:display={expanded ? 'flex' : 'none'}>
    {#each contextNavItems as item}
      {#if item.component}
        <svelte:component this={item.widget} />
      {:else}
        <hr aria-orientation="horizontal" />
        <a
          class="shiny-select"
          aria-current={item.href === $page.url.pathname ||
          ($page.url.pathname.startsWith(item.href || '') && `/` !== item.href)
            ? 'page'
            : undefined}
          aria-label="Link to {item.label}"
          href={item.href}>{item.label}</a>
      {/if}
    {/each}
  </section>
</nav>

<style>
  nav {
    inset: 3px 0 auto 0;
    position: sticky;
    background-color: var(--clr-bg-400);
    padding: 0.2rem 0;
    transition: box-shadow 200ms ease-in-out, background-color 200ms ease-in-out,
      backdrop-filter 200ms ease-in-out, transform 0.6s ease-in-out;
    z-index: 999;
  }

  .scrollY {
    box-shadow: 6px 6px 6px 0px rgba(0, 0, 0, 0.1);
    background-color: var(--trp-bg-400);
    backdrop-filter: blur(10px);
  }

  @media (prefers-reduced-motion: reduce) {
    nav {
      transition: none;
    }
  }

  a,
  button {
    padding: 0.4rem 0.8rem;
    display: flex;
    place-items: center;
    /* outline: 1px paleturquoise solid; */
  }

  #wrapper {
    display: flex;
    place-items: center;
    /* margin-inline: auto; */
    justify-content: space-between;
    /* grid-template-columns: 1fr auto; */
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
  }

  section a,
  hr {
    width: calc(100% - var(--gap) * 3);
  }
</style>
