<script lang="ts">
  import { base } from '$app/paths';
  // import { navigating, page } from '$app/stores';
  import { page } from '$app/stores';
  import { navStore } from './store';

  // let burger =
  //   '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7.95 11.95h32m-32 12h32m-32 12h32"/></svg>';
  // let cross =
  //   '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"/></svg>';
  // let showMobile = false;
  let onDesktop = true;

  // const toggleMobile = () => (showMobile = !showMobile);

  let scrollY = 0;
  $: innerHeight = 0;
  let outerWidth = 0;
  $: onDesktop = outerWidth > 700 ? true : false;

  export let pageHeight = 0;
  $: pageHeightWithoutWindow = pageHeight - innerHeight;

  // $: if ($navigating || desktop) {
  //   showMobile = false;
  // }

  const navItems = [
    { label: 'Blog', href: `${base}/blog` },
    { label: 'Projects', href: `${base}/projects` },
    { separator: '|' },
    { label: 'About', href: `${base}/about` },
    { label: 'Contact', href: `${base}/contact`, decoration: 'border' }
  ];

  $navStore.push(...navItems);
</script>

<svelte:window bind:outerWidth bind:innerHeight bind:scrollY />

<nav class="artifact-ui" class:scrollY>
  <progress max={pageHeightWithoutWindow} value={scrollY} />
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
          {#if item.href}
            <a
              aria-current={$page.url.pathname.startsWith(item.href)
                ? 'page'
                : undefined}
              class={item.decoration ? 'attn-border attn' : 'trn-border'}
              href={item.href}>{item.label}</a
            >
          {:else}
            {@html item.separator}
          {/if}
        {/each}
      {:else}
        {2 + 2}
      {/if}
    </section>
  </div>
</nav>

<!-- <nav class="artifact-ui" class:navActive={scrollY > 30 || showMobile}> -->
<!--   <progress max={pageHeightWithoutWindow} value={scrollY} /> -->
<!--   <div -->
<!--     style:flex-direction={desktop ? 'row' : 'column'} -->
<!--     class="nav-container wider" -->
<!--   > -->
<!--     <div class="main-nav"> -->
<!--       <a -->
<!--         style:padding-left="0" -->
<!--         style:visibility={showMobile ? 'hidden' : 'visible'} -->
<!--         aria-current={$page.url.pathname === `/${base}` ? 'page' : undefined} -->
<!--         href="{base}/">Santiago Gonzalez</a -->
<!--       > -->
<!--     </div> -->
<!--     {#if !desktop} -->
<!--       <button on:click={toggleMobile}> -->
<!--         {#if !showMobile} -->
<!--           {@html burger} -->
<!--         {:else} -->
<!--           {@html cross} -->
<!--         {/if} -->
<!--       </button> -->
<!--     {/if} -->
<!--     <section style:display={showMobile || desktop ? 'grid' : 'none'}> -->
<!--       <ul style:flex-direction={desktop ? 'row' : 'column'}> -->
<!--         {#each navItems as item} -->
<!--           {#if item.href} -->
<!--             <li -->
<!--               style:display={item.label === 'Home' && desktop -->
<!--                 ? 'none' -->
<!--                 : 'block'} -->
<!--               class={item.decoration ? 'attn-border attn' : 'trn-border'} -->
<!--             > -->
<!--               <a -->
<!--                 aria-current={$page.url.pathname.startsWith(item.href) -->
<!--                   ? 'page' -->
<!--                   : undefined} -->
<!--                 href={item.href} -->
<!--                 on:click={toggleMobile}>{item.label}</a -->
<!--               > -->
<!--             </li> -->
<!--             <hr -->
<!--               style:display={!desktop ? 'block' : 'none'} -->
<!--               style="width: 80%" -->
<!--             /> -->
<!--           {:else} -->
<!--             <li style:display={desktop ? 'block' : 'none'}> -->
<!--               {@html item.separator} -->
<!--             </li> -->
<!--           {/if} -->
<!--         {/each} -->
<!--       </ul> -->
<!--     </section> -->
<!--   </div> -->

<!-- </nav> -->
<style>
  nav {
    top: 0;
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
    padding: 0.6rem 1.2rem;
    display: grid;
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
  }

  section.left a:nth-child(1) {
    padding-left: 0;
  }

  progress {
    width: 100%;
    height: 3px;
    top: 0;
    border: 0;
    position: fixed;
  }

  progress::-webkit-progress-bar,
  progress {
    background: inherit;
  }

  progress::-moz-progress-bar {
    background: var(--accent-peachy);
  }

  progress::-webkit-progress-value {
    background: var(--accent-peachy);
  }
</style>
