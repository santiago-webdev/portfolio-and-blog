<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { afterNavigate } from '$app/navigation';

  import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
  import WidgetModal from '$lib/components/navigation/WidgetModal.svelte';
  import { navigationItems } from '$lib/components/navigation/store';

  type Transform = '' | 'translateY(-200%)';

  var expanded = false,
    scrollY = 0,
    savedY = 0,
    outerWidth = 0,
    transform: Transform = '';

  afterNavigate(() => (expanded = false));
  $: if (outerWidth > 768) expanded = false;

  $: {
    transform =
      !expanded && scrollY > 300 && scrollY > savedY ? 'translateY(-200%)' : '';
    savedY = scrollY;
  }
</script>

<svelte:window bind:scrollY bind:outerWidth />

<header style:transform class:expanded class:scrollY>
  <nav aria-label="primary-navigation">
    <a
      href="{base}/"
      aria-label="Home"
      data-sveltekit-preload-code="eager"
      aria-current={`${base}/` === $page.url.pathname ? 'page' : undefined}
    >
      <img
        aria-labelledby="authors-name"
        class="logo-santigo-zero"
        alt="My personal logo"
      />
      <span id="authors-name">Santiago Gonzalez</span>
    </a>
    <div class="navigation-items">
      <WidgetModal />

      <button
        aria-label="Click or tap to {expanded ? 'close' : 'open'} the menu"
        aria-expanded={expanded}
        on:click={() => (expanded = !expanded)}
      >
        {#if expanded}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18 6L6 18M6 6l12 12"
            />
          </svg>
        {:else}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 6h18M3 12h18M3 18h18"
            />
          </svg>
        {/if}
      </button>

      <div class="list-items">
        <ThemeSwitch />
        <div role="separator" aria-orientation="vertical" />
        {#each $navigationItems as { label, href }}
          {#if label === 'Separator'}
            <div role="separator" aria-orientation="vertical" />
          {:else if label === 'Contact'}
            <a
              data-sveltekit-preload-code="eager"
              aria-label="Contact me here"
              class="bordered"
              aria-current={$page.url.pathname.startsWith(href) && `/` !== href
                ? 'page'
                : undefined}
              {href}>{label}</a
            >
          {:else if label !== 'Home'}
            <a
              data-sveltekit-preload-code="eager"
              aria-current={$page.url.pathname.startsWith(href) && `/` !== href
                ? 'page'
                : undefined}
              aria-label="Link to {label}"
              {href}>{label}</a
            >
          {/if}
        {/each}
      </div>
    </div>
    <section style:display={expanded ? 'flex' : 'none'}>
      {#each $navigationItems as { label, href }}
        {#if label !== 'Separator'}
          {#if label === 'Contact'}
            <a
              data-sveltekit-preload-code="eager"
              aria-label="Contact me here"
              class="bordered"
              aria-current={$page.url.pathname.startsWith(href) && `/` !== href
                ? 'page'
                : undefined}
              {href}>{label}</a
            >
          {:else}
            <a
              data-sveltekit-preload-code="eager"
              class="shiny-select"
              aria-current={$page.url.pathname.startsWith(href) && `/` !== href
                ? 'page'
                : undefined}
              aria-label="Link to {label}"
              {href}>{label}</a
            >
          {/if}
          <hr />
        {/if}
      {/each}
      <ThemeSwitch />
    </section>
  </nav>
</header>

<style>
  header {
    position: sticky;
    top: 0;
    transition: background, transform 200ms cubic-bezier(0.5, 0.95, 0, 1);
    z-index: 999;
    padding: 0.2rem 0;
    background: var(--clr-25);
    border-bottom: 1px solid transparent;
  }

  a {
    color: inherit;
  }

  header.expanded {
    border-bottom: 2px solid var(--clr-55);
    background: var(--clr-30);
  }

  header.scrollY {
    background: var(--clr-35-trp);
    border-bottom-color: var(--clr-65);
  }

  a,
  button {
    padding: 0.4rem 0.8rem;
    display: flex;
    place-items: center;
    place-content: center;
  }

  button {
    border-radius: 999rem;
    min-width: 3.5ch;
  }

  button[aria-expanded='true'] {
    background: var(--clr-55);
  }

  .list-items {
    display: none;
    gap: 0.8rem;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    place-items: center;
    justify-content: space-between;

    width: min(100% - 2.2rem, var(--xl));
    margin-inline: auto;
  }

  nav a:first-child {
    display: flex;
    flex-flow: row wrap;
    gap: 0.8rem;
    font-variation-settings: 'wght' 660;
  }

  img {
    width: 1.8rem;
    height: 1.8rem;
  }

  header.scrollY span,
  header span {
    display: none;
  }

  .navigation-items {
    display: flex;
    gap: 0.8rem;
  }

  section {
    flex-direction: column;
    gap: 0.5rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    width: min(100% - 2.2rem, var(--sm));
    margin-inline: auto;
  }

  @media screen and (min-width: 768px) {
    header {
      padding: 0.6rem 0;
    }

    header span {
      display: flex;
    }

    header.scrollY {
      backdrop-filter: blur(10px);
    }

    button {
      display: none;
    }

    .list-items {
      display: flex;
      place-items: center;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    header {
      transition: none;
    }
  }
</style>
