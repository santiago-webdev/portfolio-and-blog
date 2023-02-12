<script lang="ts">
  import { FilteredPosts, FilterValue } from './store';
  import { searchHandler } from './utils';
  import { base } from '$app/paths';
  import { goto, preloadData } from '$app/navigation';
  import { get } from 'svelte/store';
  import { onDestroy } from 'svelte';
  import { onMount } from 'svelte';

  let banner: HTMLElement;
  let isCollapsed: boolean;
  let hideBanner: boolean;

  $: if ($FilteredPosts.length === 1) {
    preloadData(`${base}/blog${$FilteredPosts[0].href}`);
  }

  const search_icon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z"></path></svg>';
  const placeholderDefault = 'Search';
  const placeholderNoInput = "You haven't searched for any post yet";
  let placeholder = placeholderDefault;

  let value = '';

  async function handleSubmit() {
    if (value.length === 0) {
      placeholder = placeholderNoInput;

      setTimeout(() => {
        placeholder = placeholderDefault;
      }, 1000);
      return;
    }

    await goto(`${base}/blog${$FilteredPosts[0].href}`);
  }

  function collapseBanner() {
    let bannerHeight = banner.scrollHeight;
    let elementTransition = banner.style.transition;
    banner.style.transition = '';

    requestAnimationFrame(function () {
      banner.style.height = `${bannerHeight}px`;
      banner.style.transition = elementTransition;

      requestAnimationFrame(function () {
        banner.style.height = 0 + 'px';
      });
    });

    setTimeout(() => {
      // TODO(santigo-zero): Make this transition in phones smoother
      // Becuase mobile phones have animations disabled and the keyboard pops
      // up each time you start typing in the search bar.
      if (window.innerWidth < 700) {
        window.scrollTo(0, 0);
      }
    }, 100);

    isCollapsed = true;
  }

  onMount(() => (value = get(FilterValue)));
  onDestroy(() => FilterValue.set(value));
</script>

<div class="container">
  <div class:hideBanner bind:this={banner} class="wrapper-header">
    <h1>Blog</h1>
    <p>
      In this blog you are going to find articles about <strong>Linux</strong>,
      <strong>web technologies</strong>
      and
      <strong>frontend development</strong>.
    </p>
    <br />
  </div>
  <form class="wide" on:submit|preventDefault={handleSubmit} autocomplete="off">
    <button aria-label="Go to selected blog" type="submit"
      >{@html search_icon}</button
    >
    <input
      {placeholder}
      on:focus={() =>
        !isCollapsed ? setTimeout(collapseBanner, 333) : undefined}
      bind:value
      on:input={() => searchHandler(value)}
      type="search"
      id="search"
      list="search-terms"
    />
    <!-- <datalist id="search-terms"> -->
    <!--   {#each $FilteredPosts as post} -->
    <!--     <option value={post.title} /> -->
    <!--   {/each} -->
    <!-- </datalist> -->
  </form>
</div>

<style>
  .wrapper-header {
    display: grid;
    gap: 1rem;
    overflow: hidden;
    transition: height 100ms ease-in-out 0s;
  }

  p {
    width: min(33ch, 100%);
    margin-inline: auto;
  }

  .container {
    width: 100%;
    background-color: var(--clr-background-alt);
    padding: 2rem 0;
    margin-inline: auto;
    display: grid;
    /* gap: 3rem; */
    text-align: center;
  }

  form {
    display: grid;
    grid-template-columns: auto 1fr;
    overflow: hidden;
    background-color: transparent;
    border: var(--border-highlight-secondary);
    color: var(--clr-text-muted);
    border-radius: 1.1rem;
    margin-inline: auto;
  }

  form:focus-within {
    border-color: transparent;
    filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
      drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
    background-color: var(--clr-background-highlight-secondary);
    color: var(--clr-text);
  }

  input:-moz-placeholder,
  input::-moz-placeholder {
    opacity: 1;
  }

  input[type='search']::-ms-clear {
    display: none;
  }

  input[type='search']::-webkit-search-cancel-button {
    display: none;
  }

  input,
  button {
    color: inherit;
    background-color: inherit;
  }

  input {
    border: none;
    outline: none;
    padding: 0.6rem 1.3rem 0.6rem 0;
    /* padding-top: 0.6rem; */
    /* padding-bottom: 0.6rem; */
  }

  input:focus::placeholder {
    color: transparent;
  }

  button {
    display: grid;
    place-items: center;
    padding-inline: 1.3rem 0.8rem;
  }
</style>
