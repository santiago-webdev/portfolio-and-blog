<script lang="ts">
  import { base } from '$app/paths';
  // import { navigating, page } from '$app/stores';
  import { page } from '$app/stores';
  import Separator from '$lib/interface/Separator.svelte';
  import { navStore } from './store';

  let onDesktop = true;

  let scrollY = 0;
  $: innerHeight = 0;
  let outerWidth = 0;
  $: onDesktop = outerWidth > 768 ? true : false;

  // $: if ($navigating || desktop) {
  //   showMobile = false;
  // }

  const navItems = [
    { label: 'Blog', href: `${base}/blog` },
    { label: 'Projects', href: `${base}/projects` },
    { separator: true, label: 'About', href: `${base}/about` },
    { label: 'Contact', href: `${base}/contact`, decoration: 'border' }
  ];

  $navStore.push(...navItems);
</script>

<svelte:window bind:outerWidth bind:innerHeight bind:scrollY />

<nav class="artifact-ui" class:scrollY>
  <div class="container wider">
    <section class="left">
      <a
        aria-current={$page.url.pathname === `/${base}` ? 'page' : undefined}
        href="{base}/">Santiago Gonzalez</a
      >
    </section>

    <section class="right">
      {#if onDesktop}
        {#each navItems as item}
          <Separator render={item.separator} orientation="vertical" />
          <a
            aria-current={$page.url.pathname.startsWith(item.href)
              ? 'page'
              : undefined}
            class={item.decoration ? 'attn-border attn' : 'trn-border'}
            href={item.href}>{item.label}</a
          >
        {/each}
      {:else}
        <button>
          <iconify-icon icon="lucide:align-right" width="26" height="26" />
        </button>
      {/if}
    </section>
  </div>
</nav>

<style>
  nav {
    top: 3px;
    position: sticky;
    background-color: var(--clr-background-alt);
    padding: 0.6rem 0;
    transition: filter 0.3s ease-in;

    z-index: 999;
  }

  .scrollY {
    box-shadow: 6px 6px 6px 0px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 6px 6px 6px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 6px 6px 6px 0px rgba(0, 0, 0, 0.1);
  }

  a {
    padding: var(--bttn-szb-100) var(--bttn-szh-100);
    display: flex;
    place-items: center;
  }

  a:hover {
    color: var(--clr-hover);
  }

  a:focus {
    color: var(--clr-clicked);
  }

  .container {
    display: flex;
    place-items: center;
    margin-inline: auto;
    justify-content: space-between;
  }

  section:is(.right, .left) {
    display: flex;
    place-items: center;
    gap: 1rem;
  }

  section.left a:nth-child(1) {
    padding-left: 0;
  }

  button {
    display: flex;
    place-items: center;
  }
</style>
