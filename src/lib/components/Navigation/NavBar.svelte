<script lang="ts">
  import { base } from '$app/paths';
  import { navigating, page } from '$app/stores';
  import { inPixels } from '$lib/utils/utils';
  import { navItems } from './store';
  import WidgetModal from '$lib/interface/WidgetModal.svelte';
  import { AUTHOR } from '$lib/config';
  import WidgetTheme from '$lib/interface/WidgetTheme.svelte';
  import { beforeNavigate } from '$app/navigation';

  var expMenu = false,
    onDesktop = true,
    scrollY = 0,
    savedY = 0,
    outerWidth = 0;

  const navToggle = (nav: HTMLElement) =>
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

  $: onDesktop = outerWidth > inPixels('48rem') ? true : false;
  $: expMenu = onDesktop ? true : false;
  beforeNavigate(() => {
    expMenu = false;
  });
</script>

<svelte:window bind:outerWidth bind:scrollY />

<nav class="artifact-ui" class:scrollY use:navToggle>
  <div id="main-navigation" class="wider">
    <div class="wrapper-left">
      <a href="{base}/" aria-label="Logo of this site and link to Home"
        >{(onDesktop && AUTHOR) || 'SG'}</a>
      <div class="widget">
        <WidgetModal />
        <WidgetTheme />
      </div>
    </div>
    <button
      aria-label="Toggle navigation list"
      aria-expanded={expMenu}
      style:display={onDesktop ? 'none' : ''}
      on:click={() => (expMenu = !expMenu)}>
      <!-- TODO(santigo-zero): Use an icon here and conditional rendering -->
      {#if expMenu}
        <iconify-icon icon="lucide:x" width="26" height="26" />
      {:else}
        <iconify-icon icon="lucide:grip" width="26" height="26" />
      {/if}
    </button>
    {#if expMenu || onDesktop}
      <div class="navItems">
        {#each $navItems as item}
          {#if item.separator && onDesktop}
            <div aria-orientation="vertical" role="separator" />
          {:else if item.separator && !onDesktop}
            <hr aria-orientation="horizontal" />
          {/if}
          <a
            aria-current={item.href === $page.url.pathname ||
            ($page.url.pathname.startsWith(item.href) && `/` !== item.href)
              ? 'page'
              : undefined}
            aria-label="Link to {item.label}"
            class={item.decoration ? 'block hover' : ''}
            href={item.href}>{item.label}</a>
        {/each}
      </div>
    {/if}
  </div>
</nav>

<style>
  nav {
    inset: 3px 0 auto 0;
    position: sticky;
    background-color: var(--clr-bg-400);
    padding: 0.4rem 0;
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

  a {
    padding: 0.4em 0.8em;
    display: flex;
    place-items: center;
    border-radius: 1rem;
  }

  a:first-child {
    padding-left: 0;
  }

  #main-navigation {
    display: grid;
    place-items: center;
    margin-inline: auto;
    justify-content: space-between;
    grid-template-columns: 1fr auto;
  }

  button {
    display: flex;
    place-items: center;
    padding-left: var(--gap);
  }

  .navItems {
    padding-left: var(--gap);
    width: 100%;
    display: flex;
    justify-self: center;
    place-items: center;
  }

  .wrapper-left {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .widget {
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap);
  }

  @media screen and (max-width: 48rem) {
    .navItems {
      flex-direction: column;
      padding: 1rem;
      grid-column: 1 / span 2;
    }

    .wrapper-left a {
      padding-top: 0;
      padding-bottom: 0;
    }
  }
</style>
