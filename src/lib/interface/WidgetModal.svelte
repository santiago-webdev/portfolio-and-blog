<script lang="ts">
  import IconSearch from '$lib/Icons/IconSearch.svelte';
  import { FilteredPosts } from '$lib/components/Search/store';
  import { base } from '$app/paths';
  import { goto } from '$app/navigation';
  import { inPixels, readableDate } from '$lib/utils/utils';
  import { onMount } from 'svelte';
  import { searchHandler } from '$lib/components/Search/utils';
  import Separator from './Separator.svelte';

  var modal: HTMLDialogElement,
    input: HTMLInputElement,
    value = '',
    onDesktop = true,
    outerWidth = 0,
    complex = true,
    touchSupport = false;

  const toggleModal = () =>
    modal.open
      ? (modal.close(), (value = ''))
      : (modal.showModal(), input.focus());

  function onCtrlK(event: KeyboardEvent) {
    let { key, ctrlKey, repeat } = event;
    if (repeat) return;

    switch (key) {
      case 'k':
        if (ctrlKey) {
          event.preventDefault();
          toggleModal();
          break;
        }
    }
  }

  async function handleSubmit() {
    toggleModal();
    await goto(`${base}/blog${$FilteredPosts[0].href}`);
  }

  onMount(() => (touchSupport = 'ontouchstart' in window ? true : false));
  onMount(() =>
    modal.addEventListener('click', event => {
      if (event.target === modal) {
        modal.close();
      }
    })
  );
  $: onDesktop = outerWidth > inPixels('48rem') ? true : false;
  $: complex = onDesktop || !touchSupport;
</script>

<svelte:window bind:outerWidth on:keydown={onCtrlK} />

<button
  class={complex ? 'attn attnactive' : ''}
  aria-keyshortcuts="Control+K"
  aria-label="Click to open the modal box to search for blogs"
  on:click={toggleModal}>
  <IconSearch />
  {#if complex}
    <span> &nbsp;&nbsp;&nbsp </span>
    <kbd>Ctrl K</kbd>
  {/if}
</button>
<dialog
  class="wide"
  on:close={() => (value = '')}
  on:cancel={() => (value = '')}
  bind:this={modal}>
  <form on:submit|preventDefault={handleSubmit}>
    <label for="modal-search">Search for a blog post:</label>
    <div class="searchbar">
      <button aria-label="Go to selected blog" type="submit">
        <IconSearch />
      </button>
      <input
        placeholder=" Search for a blog post"
        bind:value
        bind:this={input}
        type="search"
        id="modal-search"
        autocomplete="off"
        on:input={() => searchHandler(value)} />
    </div>
  </form>
  <ul style:display={value.length ? 'grid' : 'none'}>
    {#each $FilteredPosts.slice(0, 4) as post}
      <Separator render orientation="horizontal" />
      <li>
        <a on:click={() => toggleModal()} href="{base}/blog{post.href}">
          <article>
            <h3>
              <IconSearch />
              {post.title}
            </h3>
            {#if post.description}
              <p>{post.description}</p>
            {:else}
              <p>No description was given.</p>
            {/if}
            {#if post.date}
              <small>Published: {readableDate(post.date)}</small>
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
    padding: 0.2rem 0.8rem;
    gap: 0.6rem;
  }

  span {
    text-decoration: underline solid var(--accent-orange) 0.15em;
    text-underline-offset: 0em;
  }

  kbd {
    pointer-events: none;
    border-top: 1px solid var(--clr-text-muted);
    border-left: 1px solid var(--clr-text-muted);
    border-right: 3px solid var(--clr-text-muted);
    border-bottom: 3px solid var(--clr-text-muted);
    border-radius: 0.4rem;
    padding-inline: 0.3rem;
  }

  :modal {
    border: 0;
    margin: 0;
    padding: 0;
    margin-inline: auto;
    top: 5rem;
    border-radius: 1.1rem;
    background-color: var(--clr-bg-active);
  }

  :modal::backdrop {
    background-color: rgba(31 31 37 / 0.8);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  :modal button {
    padding-left: 0;
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    /* flex-wrap: wrap; */
  }

  .searchbar {
    display: flex;
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

  /* input, */
  /* input::placeholder, */
  /* button { */
  /*   color: inherit; */
  /*   background-color: inherit; */
  /* } */

  input {
    border: none;
    outline: none;
    width: 100%;
    /* padding: 0.6rem 1.3rem 0.6rem 0; */
  }

  /* input:focus::placeholder { */
  /*   color: transparent; */
  /* } */

  ul {
    width: 100%;
  }
</style>
