<script lang="ts">
  import { FilteredPosts, FilterValue } from './store';
  import { searchHandler } from './utils';
  import { base } from '$app/paths';
  import { goto, preloadData } from '$app/navigation';
  import IconSearch from '$lib/Icons/IconSearch.svelte';

  export let input: HTMLElement;
  export let modal = false;

  $: if ($FilteredPosts.length === 1)
    preloadData(`${base}/blog${$FilteredPosts[0].href}`);

  const placeholderDefault = 'Search';
  const placeholderNoInput = "You haven't searched for any post yet";

  export let placeholder = placeholderDefault;
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

  FilterValue.subscribe(() => {
    value = $FilterValue;
  });
</script>

<form
  class={$FilterValue.trim().length !== 0
    ? 'wide attn attn-focus'
    : 'wide attn attn-gradient-border'}
  class:form-modal={modal}
  on:submit|preventDefault={handleSubmit}>
  <button aria-label="Go to selected blog" type="submit">
    <IconSearch />
  </button>

  <input
    {placeholder}
    aria-keyshortcuts="Control+K"
    bind:value
    bind:this={input}
    on:input={() => FilterValue.set(searchHandler(value))}
    on:focus|once={() => (placeholder = placeholderDefault)}
    type="search"
    id="search"
    list="search-terms"
    autocomplete="off" />
  {#if !modal}
    <kbd>Ctrl K</kbd>
  {/if}
</form>

<style>
  form {
    display: grid;
    grid-template-columns: auto 1fr;
    overflow: hidden;
    margin-inline: auto;
    position: relative;
    /* width: min(100%, var(--wide)); */
  }

  .form-modal {
    box-shadow: none;
    border: none;
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
  input::placeholder,
  button {
    color: inherit;
    background-color: inherit;
  }

  input {
    border: none;
    outline: none;
    width: 100%;
    padding: 0.6rem 1.3rem 0.6rem 0;
  }

  input:focus::placeholder {
    color: transparent;
  }

  button {
    display: grid;
    place-items: center;
    padding-inline: 1.3rem 0.8rem;
  }

  kbd {
    position: absolute;
    right: 1.3rem;
    height: 100%;
    display: grid;
    place-items: center;
    color: var(--clr-text-muted);
    pointer-events: none;
  }
</style>
