<script lang="ts">
import { FilteredPosts } from '$lib/components/blog/store';
import { searchHandler } from '$lib/components/blog/store';
import { base } from '$app/paths';
import { goto, preloadData } from '$app/navigation';

// export let placeholder = `TODO: Make this search better`;
// TODO(santiagogonzalez-dev): Explain first time users how to search tags
export let placeholder = `Search`;

const placeholderDefault = 'Search';
const placeholderNoInput = "You haven't searched for any post yet";
let value = '';

function handleSubmit() {
  if (value.length !== 0) goto($FilteredPosts[0].href);

  placeholder = placeholderNoInput;
  setTimeout(() => {
    placeholder = placeholderDefault;
  }, 1000);
}

$: if ($FilteredPosts.length === 1) preloadData(`${base}/blog${$FilteredPosts[0].href}`);
</script>

<form class="font-h3" on:submit|preventDefault={handleSubmit}>
  <button aria-label="Go to selected blog" type="submit">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21l-4.3-4.3" />
      </g>
    </svg>
  </button>

  <input
    {placeholder}
    aria-keyshortcuts="Control+K"
    bind:value
    title="Search for a blog post, works with the URL name too"
    on:input={() => searchHandler(value)}
    on:focus|once={() => (placeholder = placeholderDefault)}
    type="search"
    autocomplete="off"
    class="font-h3"
  />
</form>

<style>
form {
  display: flex;
  place-items: center;
  position: relative;
  width: min(100% - 2rem, 640px);
  transition: background-color 50ms, border 80ms, box-shadow 300ms;
  box-shadow: 4px 8px 8px 0 rgb(0 0 0 / 0.06);
  margin-inline: auto;
  background: var(--srf-4);
  border: thin var(--srf-4) solid;
  border-top-color: var(--srf-4-brd);
  border-left-color: var(--srf-4-brd);
  border-radius: 1rem;
  overflow: hidden;
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
  padding: 0.5rem 0;
  padding-left: 0.5rem;
  padding-right: 1.5rem;
}

input::placeholder,
form button {
  color: var(--text-3);
}

input:focus::placeholder {
  color: transparent;
}

input,
form:focus-within button {
  color: var(--text-2);
  background-color: inherit;
}

button {
  display: grid;
  place-items: center;
  padding: 0 1.5rem;
  padding-left: 1.5rem;
  padding-right: 0.5rem;
}
</style>
