<script lang="ts">
  import { FilteredPosts } from '$ui/Search/store'
  import { base } from '$app/paths'
  import { goto } from '$app/navigation'
  import { inPixels, readableDate } from '$lib/utils/utils'
  import { onMount } from 'svelte'
  import { searchHandler } from '$ui/Search/utils'

  var modal: HTMLDialogElement,
    input: HTMLInputElement,
    value = '',
    onDesktop = true,
    outerWidth = 0,
    complex = true,
    touchSupport = false

  const toggleModal = () =>
    modal.open
      ? (modal.close(), (value = ''))
      : (modal.showModal(), input.focus())

  function keydown(event: KeyboardEvent) {
    let { key, ctrlKey, repeat } = event
    if (repeat) return

    switch (key) {
      case 'k':
        if (ctrlKey) {
          event.preventDefault()
          toggleModal()
          break
        }
    }
  }

  async function handleSubmit() {
    toggleModal()
    await goto(`${base}/blog${$FilteredPosts[0].href}`)
  }

  onMount(async () => {
    touchSupport = 'ontouchstart' in window ? true : false
    modal.addEventListener('click', event => {
      if (event.target === modal) {
        modal.close()
      }
    })
  })

  // onMount(() => {
  //   toggleModal();
  //   value = 'h';
  // });
  $: onDesktop = outerWidth > inPixels('48rem') ? true : false
  $: complex = onDesktop || !touchSupport
</script>

<svelte:window bind:outerWidth on:keydown={keydown} />

<button
  class={complex ? 'shiny hover complex' : ''}
  aria-keyshortcuts="Control+K"
  aria-label="Click to open the modal box to search for blogs"
  on:click={toggleModal}>
  <iconify-icon width="22" icon="lucide:search" />
  {#if complex}
    <span> &nbsp;&nbsp;&nbsp </span>
    <kbd>Ctrl K</kbd>
  {/if}
</button>
<dialog
  class="shiny ff-sz-700"
  on:close={() => (value = '')}
  on:cancel={() => (value = '')}
  bind:this={modal}>
  <form on:submit|preventDefault={handleSubmit}>
    <label
      aria-label="Search and find a blog post using a search bar"
      style:display="none"
      for="modal-search" />
    <div class="searchbar">
      <button aria-label="Navigate to best match">
        <iconify-icon width="24" icon="lucide:search" />
      </button>
      <input
        placeholder="Search for articles"
        bind:value
        bind:this={input}
        type="search"
        id="modal-search"
        autocomplete="off"
        on:input={() => searchHandler(value)} />
      <button
        title="Clear the search bar"
        aria-label="Clear the search bar and search again"
        on:click={() => {
          value = ''
          input.focus()
        }}
        disabled={value.length >= 1 ? false : true}
        type="button"><iconify-icon width="24" icon="lucide:x" /></button>
      <button
        title="Quit the modal box by clicking here or using the keyboard shortcut"
        aria-keyshortcuts="Esc"
        on:click={toggleModal}
        type="button">
        <kbd>Esc</kbd></button>
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
            <h3 class="ff-sz-700">
              {post.title}
            </h3>
            <p>{post.description}</p>
            {#if post.datetime}
              <small>
                Published: {readableDate(post.datetime)}
                <time datetime={post.datetime}>
                  <iconify-icon width="24" icon="lucide:calendar" />: {readableDate(
                    post.datetime
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
    gap: 0.4rem;
  }

  .complex {
    padding: 0.4rem 0.8rem;
  }

  span {
    text-decoration: underline solid var(--accent-orange) 0.15em;
    text-underline-offset: 0em;
  }

  :modal > * {
    font-size: inherit;
    padding: var(--gap);
  }

  :modal {
    padding: 0;
    margin: 0;
    margin-inline: auto;
    top: 5vh;
    width: min(100% - var(--gap), var(--sm));
  }

  :modal::backdrop {
    backdrop-filter: blur(30px);
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

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .searchbar {
    display: flex;
    gap: var(--gap);
    margin-inline: calc(var(--gap) / 2);
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
    width: 100%;
  }

  ul:empty {
    padding: 0;
  }

  a {
    display: grid;
    place-items: start;
  }

  hr {
    margin: calc(var(--gap) / 2) 0;
  }
</style>
