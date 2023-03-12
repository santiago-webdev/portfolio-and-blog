<script lang="ts">
  import { AUTHOR } from '$lib/config';
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { afterNavigate } from '$app/navigation';
  import { onMount, type ComponentType } from 'svelte';
  import WidgetModal from '$lib/components/WidgetModal.svelte';
  import WidgetTheme from '$lib/components/WidgetTheme.svelte';

  var expMenu = false,
    onDesktop = false,
    scrollY = 0,
    savedY = 0,
    currentContext = '',
    nav: HTMLElement,
    button: HTMLButtonElement,
    dialog: HTMLDialogElement;

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

  const navItems: NavItem[] = [
    { component: true, widget: WidgetModal },
    { component: true, widget: WidgetTheme },
    { component: false, label: 'Home', href: `${base}/` },
    { component: false, label: 'Blog', href: `${base}/blog` },
    { component: false, label: 'Projects', href: `${base}/projects` }
  ];

  const viewItems: NavItem[] = [...navItems];
  const contextItems: NavItem[] = [
    { component: false, label: 'About', href: `${base}/about` },
    { component: false, label: 'Contact', href: `${base}/contact` }
  ];

  const updateCurrentContext = () => {
    let width = document.body.clientWidth / 16; // convert to rem
    if (width < 48) {
      currentContext = 'lucide:grip';
    } else if (width < 64) {
      currentContext = 'lucide:grip-horizontal';
    } else if (width < 90) {
      currentContext = 'lucide:more-horizontal';
    } else {
      currentContext = ''; // set a default value if none of the conditions are met
    }
  };

  const togglePicker = () =>
    dialog.open ? dialog.close() : openDialogRelatively();

  function openDialogRelatively() {
    dialog.show();
    const buttonRect = button.getBoundingClientRect();
    const dialogRect = dialog.getBoundingClientRect();
    const left = buttonRect.left + buttonRect.width / 2 - dialogRect.width / 2;
    dialog.style.left =
      Math.min(Math.max(left, 0), window.innerWidth - dialogRect.width) + 'px';
    // dialog.style.top = buttonRect.top + buttonRect.height + 'px';
    dialog.style.top = button.offsetTop + button.offsetHeight + 'px';
  }

  onMount(() => {
    onDesktop = window.matchMedia('(min-width: 48rem)').matches;
    window.addEventListener('resize', () => {
      onDesktop = window.matchMedia('(min-width: 48rem)').matches;
      if (onDesktop) expMenu = false;
    });

    window.addEventListener('scroll', (): void => {
      const direction = scrollY > savedY ? 'down' : 'up';

      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        nav.style.transform = 'translateY(0)';
        return;
      }

      if (direction === 'down' && scrollY > 500 && (!expMenu || onDesktop)) {
        nav.style.transform = 'translateY(-200%)';
      } else {
        nav.style.transform = 'translateY(0)';
      }

      savedY = scrollY;
    });
    updateCurrentContext();
    window.addEventListener('resize', updateCurrentContext);
  });

  afterNavigate(() => (expMenu = false));
</script>

<svelte:window bind:scrollY />

<nav class="artifact" class:scrollY bind:this={nav}>
  <div id="wrapper" class="wider">
    <a href="{base}/" aria-label="Logo of this site and link to Home"
      >{(onDesktop && AUTHOR) || 'SG'}</a>
    <div id="contextual">
      {#each viewItems as item}
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
      <div id="contextual-menu">
        <button
          on:click={togglePicker}
          style:display={contextItems.length > 0 ? '' : 'none'}
          bind:this={button}>
          <iconify-icon width="24" icon={currentContext} />
        </button>
      </div>
    </div>
  </div>
</nav>
<dialog class="shiny" bind:this={dialog}>context test test</dialog>

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
    border-bottom: 1px solid var(--clr-muted-300);
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
    outline: 1px paleturquoise solid;
  }

  /* a:first-child { */
  /*   padding-left: 0; */
  /* } */

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

  #contextual-menu {
    position: relative;
  }

  dialog {
    position: absolute;
    /* padding: var(--gap); */
    margin: var(--gap) var(--gap) 0 0;
    padding: var(--gap);
    left: 0;
    /* top: calc(100% + .3rem); */
    /* margin: var(--gap) 0 0 0; */
    /* padding: var(--gap); */
    /* max-width: 90%; */
  }

  /* padding-left: var(--gap); */
  /* .navItems { */
  /*   width: 100%; */
  /*   display: flex; */
  /*   justify-self: center; */
  /*   place-items: center; */
  /* } */

  /* .wrapper-left { */
  /*   display: flex; */
  /*   justify-content: space-between; */
  /*   width: 100%; */
  /* } */

  /* .widget { */
  /*   display: flex; */
  /*   flex-wrap: wrap; */
  /*   gap: var(--gap); */
  /* } */

  /* @media screen and (max-width: 48rem) { */
  /*   .navItems { */
  /*     flex-direction: column; */
  /*     padding: 1rem; */
  /*     grid-column: 1 / span 2; */
  /*   } */
  /* } */
</style>
