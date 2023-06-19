<script lang="ts">
  import { FilteredPosts } from '$lib/components/blog/store';
  import { searchHandler } from '$lib/components/blog/store';
  import { goto } from '$app/navigation';
  import { readableDate, relativeTime } from '$lib/utils/utils';

  var modal: HTMLDialogElement,
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
>
  <span class="font-20">&nbsp;&nbsp</span>
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
      <path d="m21 21l-4.35-4.35" />
    </g>
  </svg>
  <kbd class="font-20">Ctrl K</kbd>
</button>
<dialog
  aria-modal
  use:clickOutside
  on:close={() => (value = '')}
  on:cancel={() => (value = '')}
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
        class="font-30"
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
        <kbd>Esc</kbd></button
      >
    </div>
  </form>
  <ul style:display={value ? 'grid' : 'none'}>
    {#each $FilteredPosts.slice(0, 4) as post}
      <hr aria-orientation="horizontal" />
      <li>
        <a class="shiny-select" on:click={() => toggleModal()} href={post.href}>
          <article>
            <h3 class="font-30" style="font-weight: 499;">
              {post.title}
            </h3>
            <p class="font-20">{post.description}</p>
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
    border-radius: 1rem;
  }

  button span,
  button kbd {
    display: none;
  }

  @media (hover: hover) {
    button:not(dialog button) {
      --background: var(--clr-40);
      --border: var(--clr-45);
      background-color: var(--background);
      border: 1px solid var(--background);
      border-top-color: var(--border);
      border-left-color: var(--border);
      box-shadow: 0 4px 16px 0 rgba(0 0 0 / 0.1);

      display: flex;
      padding: 0.4rem 0.8rem;
    }

    button span,
    button kbd {
      display: block;
    }
  }

  span {
    text-decoration: underline solid var(--clr-blue-20) 0.15em;
    text-underline-offset: 0em;
  }

  kbd {
    font-size: 60%;
    font-weight: bold;
    font-family: var(--ff-mono);
    border-radius: 0.4rem;
  }

  :modal > * {
    font-size: inherit;
    padding: 1rem;
  }

  :modal {
    --background: var(--clr-35);
    --border: var(--clr-45);
    background-color: var(--background);
    border: 1px solid var(--background);
    border-top-color: var(--border);
    border-left-color: var(--border);

    padding: 0;
    margin: 0;
    min-width: 100%;
    min-height: 100%;

    transition: background-color 50ms, border 80ms, box-shadow 300ms;
    font-variation-settings: 'wght' 500;
  }

  :modal::backdrop {
    background-color: none;
  }

  @media screen and (min-width: 48rem) {
    :modal {
      top: 5vh;
      min-width: 0;
      min-height: 0;
      width: min(100% - 1rem, var(--sm));
      margin-inline: auto;
      border-radius: 0.8rem;
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

  input,
  form {
    color: var(--clr-250);
  }

  ul:empty {
    padding: 0;
  }

  li {
    display: grid;
  }

  article {
    display: grid;
    gap: 0.4rem;
  }

  h3 {
    color: var(--clr-250);
  }

  p {
    color: var(--clr-200);
  }

  time {
    color: var(--clr-150);
  }

  a {
    display: grid;
    place-items: start;
  }

  hr {
    margin: 0.6rem 0;
  }

  time {
    display: flex;
    place-items: center;
  }
</style>
