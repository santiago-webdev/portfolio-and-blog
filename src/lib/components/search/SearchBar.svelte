<script lang="ts">
  import { FilteredPosts, FilterValue } from './store'
  import { searchHandler } from './utils'
  import { base } from '$app/paths'
  import { goto, preloadData } from '$app/navigation'

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

<form class="shiny font-fluid-xs" on:submit|preventDefault={handleSubmit}>
  <button aria-label="Go to selected blog" type="submit">
    <iconify-icon icon="lucide:search" />
  </button>

  <input
    {placeholder}
    aria-keyshortcuts="Control+K"
    bind:value
    on:input={() => FilterValue.set(searchHandler(value))}
    on:focus|once={() => (placeholder = placeholderDefault)}
    type="search"
    id="search"
    list="search-terms"
    autocomplete="off" />
  <kbd>Ctrl K</kbd>
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

  form > *:not(kbd) {
    font-size: inherit;
    line-height: inherit;
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
    border: none;
    outline: none;
    width: 100%;
    padding: 0.3rem 0;
  }

  input::placeholder,
  form button {
    color: var(--clr-85);
  }

  input:focus::placeholder {
    color: transparent;
  }

  form:focus-within button {
    color: inherit;
    background-color: inherit;
  }

  button {
    display: grid;
    place-items: center;
    padding-inline: 0.8rem;
  }

  kbd {
    position: absolute;
    right: 1.3rem;
    font-size: 60%;
  }
</style>
