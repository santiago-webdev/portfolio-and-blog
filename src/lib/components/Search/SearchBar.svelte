<script lang="ts">
  import { FilteredPosts, FilterValue } from './store';
  import { searchHandler } from './utils';
  import { base } from '$app/paths';
  import { goto, preloadData } from '$app/navigation';

  export let insideModal = false;
  export let input: HTMLElement;

  $: if ($FilteredPosts.length === 1)
    preloadData(`${base}/blog${$FilteredPosts[0].href}`);

  const search_icon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M10 6.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Zm-.691 3.516a4.5 4.5 0 1 1 .707-.707l2.838 2.837a.5.5 0 0 1-.708.708L9.31 10.016Z" clip-rule="evenodd"/></svg>';
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
  style={insideModal ? 'width: 100%' : ''}
  on:submit|preventDefault={handleSubmit}
>
  <button aria-label="Go to selected blog" type="submit"
    >{@html search_icon}</button
  >
  <!-- <label class="search-label" for="search">Search about recipes:</label> -->
  <input
    {placeholder}
    bind:value
    bind:this={input}
    on:input={() => FilterValue.set(searchHandler(value))}
    on:focus|once={() => (placeholder = placeholderDefault)}
    type="search"
    id="search"
    list="search-terms"
    autocomplete="off"
  />
  <!-- <input class="button" type="button" value="Search"> -->
  <!-- <kbd>Ctrl K</kbd> -->
</form>

<style>
  form {
    display: grid;
    grid-template-columns: auto 1fr;
    overflow: hidden;
    margin-inline: auto;
    position: relative;
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

  /* kbd { */
  /*   position: absolute; */
  /*   right: 1.3rem; */
  /*   height: 100%; */
  /*   display: grid; */
  /*   place-items: center; */
  /*   color: var(--clr-text-muted); */
  /* } */
</style>
