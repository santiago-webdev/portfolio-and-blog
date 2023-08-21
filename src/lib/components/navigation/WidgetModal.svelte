<script lang="ts">
import { FilteredPosts } from '$lib/components/blog/store';
import { searchHandler } from '$lib/components/blog/store';
import { goto } from '$app/navigation';
import { readableDate, relativeTime } from '$lib/utils/utils';

let modal: HTMLDialogElement,
  input: HTMLInputElement,
  value = '';

function keydown(event: KeyboardEvent) {
  if (event.repeat) return;

  switch (event.key) {
    case 'k':
      if (event.ctrlKey) {
        event.preventDefault();
        return toggleModal();
      }
  }
}

const toggleModal = () =>
  modal.open
    ? (modal.close(), (document.body.style.overflow = ''), (value = ''))
    : (modal.showModal(), (document.body.style.overflow = 'hidden'), input.focus());

async function handleSubmit() {
  await goto(`${$FilteredPosts[0].href}`);
  toggleModal();
}

const clickOutside = (modal: HTMLDialogElement) =>
  modal.addEventListener('click', (event) => {
    if (event.target === modal) toggleModal();
  });
</script>

<svelte:window on:keydown={keydown} />

<button
  class="font-p"
  aria-keyshortcuts="Control+K"
  aria-label="Click to open and search"
  on:click={toggleModal}
>
  <span aria-hidden="true" style="visibility: hidden;">.</span>
  <kbd class="font-small none">CTRL K</kbd>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
    <g
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21l-4.35-4.35" />
    </g>
  </svg>
</button>
<dialog
  aria-modal
  use:clickOutside
  on:close={() => ((value = ''), (document.body.style.overflow = ''))}
  on:cancel={() => ((value = ''), (document.body.style.overflow = ''))}
  bind:this={modal}
>
  <form on:submit|preventDefault={handleSubmit}>
    <label
      aria-label="Search and find a blog post using a search bar"
      style:display="none"
      for="modal-search"
    />
    <div class="searchbar">
      <button aria-label="Navigate to best match">
        <iconify-icon width="24" icon="lucide:search" />
      </button>
      <input
        class="font-h3"
        placeholder="Search for articles"
        bind:value
        bind:this={input}
        type="search"
        id="modal-search"
        autocomplete="off"
        on:input={() => searchHandler(value)}
      />
      <button
        title="Clear the search bar"
        aria-label="Clear the search bar and search again"
        on:click={() => {
          value = '';
          input.focus();
        }}
        disabled={value === '' ? true : false}
        type="button"><iconify-icon width="24" icon="lucide:x" /></button
      >
      <button
        title="Quit the modal box by clicking here or using the keyboard shortcut"
        aria-keyshortcuts="Esc"
        on:click={toggleModal}
        type="button"
      >
        <kbd class="font-sub none">ESC</kbd></button
      >
    </div>
  </form>
  <ul style:display={value ? 'grid' : 'none'}>
    {#each $FilteredPosts.slice(0, 4) as post}
      <hr aria-orientation="horizontal" />
      <li>
        <a class="selection" on:click={() => toggleModal()} href={post.href}>
          <article>
            <h3>{post.title}</h3>
            {#if post.description}
              <p>{post.description}</p>
            {/if}
            {#if post.datetime}
              <small>
                <time datetime={post.datetime}>
                  <iconify-icon icon="lucide:calendar" />&nbsp;{relativeTime(
                    new Date(),
                    new Date(post.datetime)
                  )}
                  <div aria-orientation="vertical" role="separator">&mdash;</div>
                  {readableDate(post.datetime)}
                </time>
              </small>
            {/if}
          </article>
        </a>
      </li>
    {/each}
  </ul>
</dialog>

<style>
button {
  display: flex;
  place-items: center;
  place-content: center;
}

button:not(dialog button) {
  padding: 0.5rem;
}

button kbd {
  display: none;
}

@media screen and (min-width: 48rem) {
  button:not(dialog button) {
    padding: 0.375rem 1.125rem;
    background: var(--srf-4);
    border: thin var(--srf-4) solid;
    border-top-color: var(--srf-4-brd);
    border-left-color: var(--srf-4-brd);
    border-radius: 16px;
    box-shadow: 4px 8px 8px 0 rgb(0 0 0 / 0.06);
  }

  button kbd {
    display: flex;
    place-content: center;
    place-items: center;
    /* Use this margin for spacing */
    margin-right: 0.5rem;
  }

  button:hover > kbd {
    color: var(--text-2);
  }
}

@media (hover: hover) {
  button:not(dialog button):hover {
    background: var(--srf-5);
    border-color: var(--srf-5-brd);
  }

  button:not(dialog button):active {
    background: var(--srf-2);
  }
}

:modal > * {
  font-size: inherit;
  padding: 0.8rem;
}

:modal {
  padding: 0;
  margin: 0;
  min-width: 100%;
  min-height: 100%;

  transition: background-color 50ms, border 80ms, box-shadow 300ms;
  font-variation-settings: 'wght' 500;

  background: var(--srf-3);
  border: thin var(--srf-3) solid;
  border-top-color: var(--srf-3-brd);
  border-left-color: var(--srf-3-brd);
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  box-shadow: 4px 32px 48px 0 rgb(0 0 0 / 0.3);
}

:modal::backdrop {
  background: var(--srf-1);
}

@media screen and (min-width: 48rem) {
  :modal {
    border-radius: 1rem;
    top: 5vh;
    min-width: 0;
    min-height: 0;
    width: min(100% - 1rem, var(--sm));
    margin-inline: auto;
  }

  :modal::backdrop {
    background: rgb(0 0 0 / 0.3);
    backdrop-filter: blur(32px);
  }
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.searchbar {
  display: flex;
  gap: 1rem;
  margin-inline: 2rem;
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

input {
  border: none;
  outline: none;
  background-color: inherit;
  width: 100%;
}

input::placeholder,
form button {
  color: var(--text-4);
}

input:focus::placeholder {
  color: transparent;
}

input,
form:focus-within button {
  color: var(--text-2);
  background-color: inherit;
}

ul:empty {
  padding: 0;
}

li {
  display: grid;
}

a {
  display: grid;
  place-items: start;
}

article {
  display: grid;
  gap: 0.25rem;
}

hr {
  margin: 0.6rem 0;
}
</style>
