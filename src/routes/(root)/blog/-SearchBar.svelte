<script lang="ts">
import { FilteredPosts } from '$lib/components/blog/store';
import { searchHandler } from '$lib/components/blog/store';
import { base } from '$app/paths';
import { goto, preloadData } from '$app/navigation';

// export let placeholder = `TODO: Make this search better`;
// TODO(santigo-zero): Explain first time users how to search tags
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

$: if ($FilteredPosts.length === 1)
  preloadData(`${base}/blog${$FilteredPosts[0].href}`);
</script>

<form class="font-h3 tpl" on:submit|preventDefault={handleSubmit}>
  <button aria-label="Go to selected blog" type="submit">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
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
    on:input={() => searchHandler(value)}
    on:focus|once={() => (placeholder = placeholderDefault)}
    type="search"
    autocomplete="off"
  />
</form>

<style>
form {
  --bg: var(--clr-600);
  --brd: var(--bg);
  display: flex;
  place-items: center;
  margin-inline: auto;
  position: relative;
  width: min(100% - 2.2rem, 640px);

  transition: background-color 50ms, border 80ms, box-shadow 300ms;

  padding: 0.4rem 0.8rem;
  gap: 0.2rem;
  border-radius: 1rem;

  margin-top: 2rem;
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
  padding: 0.2rem 0;
}

input::placeholder,
form button {
  color: var(--clr-inv-600);
}

input:focus::placeholder {
  color: transparent;
}

input,
form:focus-within button {
  color: var(--clr-inv-800);
  background-color: inherit;
}

button {
  display: grid;
  place-items: center;
  padding-inline: 0.8rem;
}
</style>
