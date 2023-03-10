<script lang="ts">
  import { FilteredPosts } from '$lib/components/Search/store';
  import { base } from '$app/paths';
  import { goto } from '$app/navigation';
  import { inPixels, readableDate } from '$lib/utils/utils';
  import { onMount } from 'svelte';
  import { searchHandler } from '$lib/components/Search/utils';

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

  function keydown(event: KeyboardEvent) {
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

  onMount(async () => {
    touchSupport = 'ontouchstart' in window ? true : false;
    modal.addEventListener('click', event => {
      if (event.target === modal) {
        modal.close();
      }
    });
  });

  // onMount(() => {
  //   toggleModal();
  //   value = 'h';
  // });
  $: onDesktop = outerWidth > inPixels('48rem') ? true : false;
  $: complex = onDesktop || !touchSupport;
</script>

<svelte:window bind:outerWidth on:keydown={keydown} />

<button
  class={complex ? 'shiny hover complex' : ''}
  aria-keyshortcuts="Control+K"
  aria-label="Click to open the modal box to search for blogs"
  on:click={toggleModal}>
  <iconify-icon width="24" icon="lucide:search" />
  {#if complex}
    <span> &nbsp;&nbsp;&nbsp </span>
    <kbd>Ctrl K</kbd>
  {/if}
</button>
<dialog
  class="wide shiny blur"
  on:close={() => (value = '')}
  on:cancel={() => (value = '')}
  bind:this={modal}>
  <form on:submit|preventDefault={handleSubmit}>
    <label for="modal-search"
      >Search for a blog posts or go to <a
        href="{base}/blog"
        style="display: inline-flex; padding: 0.1em 0.4rem; border-radius: 0.4rem"
        class='bordered'>/blog</a> for a better view</label>
    <div class="searchbar">
      <button aria-label="Navigate to best match" type="submit">
        <iconify-icon width="24" icon="lucide:search" />
      </button>
      <input
        placeholder="Search"
        bind:value
        bind:this={input}
        type="search"
        id="modal-search"
        autocomplete="off"
        on:input={() => searchHandler(value)} />
      <button
        aria-label="Clear the search bar and search again"
        on:click={() => {
          value = '';
          input.focus();
        }}
        disabled={!value}
        type="button"><iconify-icon width="24" icon="lucide:x" /></button>
    </div>
  </form>
  <ul style:display={value ? 'grid' : 'none'}>
    {#each $FilteredPosts.slice(0, 4) as post}
      <hr aria-orientation="horizontal" />
      <li>
        <a
          class="shiny-select"
          on:click={() => toggleModal()}
          href="{base}/blog{post.href}">
          <article>
            <h3>
              <iconify-icon width="24" icon="lucide:search" />
              {post.title}
            </h3>
            <p>{post.description}</p>
            {#if post.date}
              <small>
                Published: {readableDate(post.date)}
                <time datetime={post.date}>
                  <iconify-icon width="24" icon="lucide:calendar" />: {readableDate(
                    post.date
                  )}
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
    padding: 0.2rem 0;
    gap: var(--gap);
  }

  .complex {
    padding: 0.2rem 0.8rem;
  }

  span {
    text-decoration: underline solid var(--accent-orange) 0.15em;
    text-underline-offset: 0em;
  }

  kbd {
    pointer-events: none;
    border-radius: 0.5em;
    padding-inline: 0.3rem;

    border: 1px solid var(--clr-muted-300);
    border-right-width: 3px;
    border-bottom-width: 3px;
  }

  :modal {
    padding: 0;
    margin: 0;
    margin-inline: auto;
    top: 5vh;
  }

  :modal::backdrop {
    backdrop-filter: blur(12px);
    cursor: pointer;
    animation: fade-in 0.4s;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  :modal > * {
    padding: var(--gap);
  }

  /* :modal button { */
  /*   padding-left: 0; */
  /* } */

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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

  ul:empty {
    padding: 0;
  }

  /* li { */
  /*   padding: 0.8rem; */
  /*   padding-left: 0; */
  /* } */

  a {
    display: grid;
    place-items: start;
    /* outline: 3px solid palegoldenrod; */
  }
</style>
