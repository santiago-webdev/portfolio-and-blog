<script lang="ts">
  import { base } from '$app/paths';
  import { navigating, page } from '$app/stores';
  import { inPixels } from '$lib/utils/utils';
  import { navItems } from './store';
  import Separator from '$lib/interface/Separator.svelte';
  import WidgetSearchBar from '$lib/interface/WidgetSearchBar.svelte';

  let showMobileMenu = false;
  let onDesktop = true;
  let scrollY = 0;
  let outerWidth = 0;

  function toggleMobile() {
    showMobileMenu = !showMobileMenu;
  }

  $: innerHeight = 0;
  $: onDesktop = outerWidth > inPixels('48rem') ? true : false;
  $: showMobileMenu = $navigating || onDesktop ? true : false;
</script>

<svelte:window bind:outerWidth bind:innerHeight bind:scrollY />

<nav
  aria-labelledby="main-navigation"
  class="artifact-ui"
  class:scrollY
  class:banner={showMobileMenu && scrollY > 5}
>
  <div id="main-navigation" class="wider">
    <a
      aria-current={$page.url.pathname === `/${base}` ? 'page' : undefined}
      href="{base}/">Santiago Gonzalez</a
    >

    <button
      style:display={onDesktop ? 'none' : ''}
      aria-label="Toggle navigation list"
      aria-expanded={showMobileMenu ? 'true' : 'false'}
      on:click={toggleMobile}
    >
      {#if showMobileMenu}
        <iconify-icon icon="lucide:x" width="26" height="26" />
      {:else}
        <iconify-icon icon="lucide:grip" width="26" height="26" />
      {/if}
    </button>
    {#if onDesktop || showMobileMenu}
      <div style:grid-column={!onDesktop ? ' 1 / span 2' : ''} class="navItems">
        <WidgetSearchBar />
        {#each $navItems as item}
          <Separator
            render={item.separator}
            orientation={onDesktop ? 'vertical' : 'horizontal'}
          />
          <a
            aria-current={$page.url.pathname.startsWith(
              item.href ? item.href : ''
            )
              ? 'page'
              : undefined}
            class={item.decoration ? 'act' : 'trn-border'}
            href={item.href}>{item.label}</a
          >
        {/each}
      </div>
    {/if}
  </div>
</nav>

<style>
  nav {
    top: 3px;
    position: sticky;
    background-color: var(--clr-background-alt);
    padding: 0.4rem 0;
    transition: filter 0.3s ease-in;

    z-index: 999;
  }

  .scrollY {
    box-shadow: 6px 6px 6px 0px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 6px 6px 6px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 6px 6px 6px 0px rgba(0, 0, 0, 0.1);
  }

  a:first-child {
    padding-left: 0;
  }

  a {
    padding: 0.4em 0.8em;
    display: flex;
    place-items: center;
  }

  a:hover {
    color: var(--clr-hover);
  }

  a:focus {
    color: var(--clr-clicked);
  }

  /* a, */
  /* button { */
  /*   width: 100%; */
  /* } */

  #main-navigation {
    display: grid;
    place-items: center;
    margin-inline: auto;
    justify-content: space-between;
    grid-template-columns: auto auto;
  }

  button {
    display: flex;
    place-items: center;
  }

  .navItems {
    width: 100%;
    display: flex;
    justify-self: center;
    place-items: center;
  }

  @media screen and (max-width: 48rem) {
    .navItems {
      flex-direction: column;
    }
  }
</style>
