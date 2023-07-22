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
    : (modal.showModal(),
      (document.body.style.overflow = 'hidden'),
      input.focus());

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
  aria-keyshortcuts="Control+K"
  aria-label="Click to open and search"
  on:click={toggleModal}
  class="px-1 py-2"
>
  <kbd
    class="flex place-content-center place-items-center font-small dark:text-dark-inv-700"
    >CTRL K</kbd
  >
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="21"
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
      <path d="m21 21l-4.35-4.35" />
    </g>
  </svg>
</button>
<dialog
  class="border-t border-l border-b-0 border-r-0 border-t-solid border-l-solid
rounded-2xl drop-shadow dark:bg-dark-700 dark:border-dark-900"
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
        disabled={value.length >= 1 ? false : true}
        type="button"><iconify-icon width="24" icon="lucide:x" /></button
      >
      <button
        title="Quit the modal box by clicking here or using the keyboard shortcut"
        aria-keyshortcuts="Esc"
        on:click={toggleModal}
        type="button"
      >
        <kbd class="font-sub">ESC</kbd></button
      >
    </div>
  </form>
  <ul style:display={value ? 'grid' : 'none'}>
    {#each $FilteredPosts.slice(0, 4) as post}
      <hr aria-orientation="horizontal" />
      <li>
        <a
          class="selection grid place-items-start"
          on:click={() => toggleModal()}
          href={post.href}
        >
          <article class="grid gap-1">
            <h3 class="font-semibold">{post.title}</h3>
            <p>{post.description}</p>
            {#if post.datetime}
              <small>
                <time datetime={post.datetime}>
                  <iconify-icon icon="lucide:calendar" />&nbsp;{relativeTime(
                    new Date(),
                    new Date(post.datetime)
                  )}
                  <div aria-orientation="vertical" role="separator">
                    &mdash;
                  </div>
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
  gap: 0.4rem;
  place-items: center;
  place-content: center;
}

button kbd {
  display: none;
}

@media (hover: hover) {
  button:not(dialog button) {
    --at-apply: 'px-5';
    --at-apply: 'border-t';
    --at-apply: 'border-l';
    --at-apply: 'border-t-solid';
    --at-apply: 'border-l-solid';
    --at-apply: 'rounded-full';
    --at-apply: 'drop-shadow';
    --at-apply: 'dark:bg-dark-700';
    --at-apply: 'dark:border-dark-800';
    --at-apply: 'dark:text-dark-inv-800';
    --at-apply: 'hover:dark:bg-dark-800';
    --at-apply: 'hover:dark:border-dark-900';
  }

  button kbd {
    display: block;
  }
}

:modal > * {
  font-size: inherit;
  padding: 0.8rem;
}

:modal {
  --bg: var(--clr-600);
  --brd: var(--clr-700);

  padding: 0;
  margin: 0;
  min-width: 100%;
  min-height: 100%;

  transition: background-color 50ms, border 80ms, box-shadow 300ms;
  font-variation-settings: 'wght' 500;
}

:modal::backdrop {
  background-color: unset;
}

@media screen and (min-width: 48rem) {
  :modal {
    top: 5vh;
    min-width: 0;
    min-height: 0;
    width: min(100% - 1rem, var(--sm));
    margin-inline: auto;
  }

  :modal::backdrop {
    backdrop-filter: blur(30px);
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
  margin-inline: 0.6rem;
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
  color: var(--text-0);
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

hr {
  margin: 0.6rem 0;
}

time {
  display: flex;
  place-items: center;
}
</style>
