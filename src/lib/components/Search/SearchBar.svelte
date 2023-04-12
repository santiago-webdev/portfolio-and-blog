<script lang="ts">
  import { FilteredPosts, FilterValue } from './store'
  import { searchHandler } from './utils'
  import { base } from '$app/paths'
  import { goto, preloadData } from '$app/navigation'

  export let modal = false

  $: if ($FilteredPosts.length === 1)
    preloadData(`${base}/blog${$FilteredPosts[0].href}`)

  const placeholderDefault = 'Search'
  const placeholderNoInput = "You haven't searched for any post yet"

  export let placeholder = placeholderDefault
  let value = ''

  async function handleSubmit() {
    if (value.length === 0) {
      placeholder = placeholderNoInput

      setTimeout(() => {
        placeholder = placeholderDefault
      }, 1000)
      return
    }

    await goto(`${base}/blog${$FilteredPosts[0].href}`)
  }

  FilterValue.subscribe(() => {
    value = $FilterValue
  })
</script>

<form
  class="shiny"
  class:form-modal={modal}
  on:submit|preventDefault={handleSubmit}>
  <button aria-label="Go to selected blog" type="submit">
    <iconify-icon width="24" icon="lucide:search" />
  </button>

  <input
    {placeholder}
    aria-keyshortcuts="Control+K"
    bind:value
    on:input={() => FilterValue.set(searchHandler(value))}
    on:focus|once={() => (placeholder = placeholderDefault)}
    type="search"
    id="search"
    class="ff-sz-700"
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
    border-radius: 1rem;
    width: min(100% - 1rem, var(--sm));
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
    background-color: inherit;
  }

  input {
    --range: var(--fz-3);
    border: none;
    outline: none;
    width: 100%;
    padding: 0.3rem 0;
  }

  input::placeholder,
  form button {
    color: var(--dim-600);
  }

  input:focus::placeholder {
    color: transparent;
  }

  input,
  form:focus-within button {
    color: inherit;
  }

  button {
    display: grid;
    place-items: center;
    padding-inline: 0.8rem;
  }

  kbd {
    display: grid;
    place-items: center;
    position: absolute;
    right: 1.3rem;
    height: 100%;
    pointer-events: none;
    background-color: transparent;
  }
</style>
