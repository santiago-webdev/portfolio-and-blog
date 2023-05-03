<script lang="ts">
  import { FilteredPosts } from '$lib/components/search/store'
  import { base } from '$app/paths'
  import { goto } from '$app/navigation'
  import { readableDate, relativeTime } from '$lib/utils/utils'
  import { onMount } from 'svelte'
  import { searchHandler } from '$lib/components/search/utils'

  var modal: HTMLDialogElement,
    input: HTMLInputElement,
    value = '',
    onDesktop = true,
    outerWidth = 0,
    complex = true,
    touchSupport = false

  const toggleModal = () =>
    modal.open
      ? (modal.close(), (document.body.style.overflow = ''), (value = ''))
      : (modal.showModal(),
        (document.body.style.overflow = 'hidden'),
        input.focus())

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
        document.body.style.overflow = ''
      }
    })

    onDesktop = window.matchMedia('(min-width: 48rem)').matches
    window
      .matchMedia('(min-width: 48rem)')
      .addEventListener('change', event => {
        onDesktop = event.matches
      })
  })

  // onMount(() => {
  //   toggleModal()
  //   value = 'h'
  // })

  $: complex = onDesktop || !touchSupport
</script>

<svelte:window bind:outerWidth on:keydown={keydown} />

<button
  class={complex ? 'shiny hover complex' : ''}
  aria-keyshortcuts="Control+K"
  aria-label="Click to open the modal box to search for blogs"
  on:click={toggleModal}>
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24">
    <g
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21l-4.35-4.35" />
    </g>
  </svg>
  {#if complex}
    <span> &nbsp;&nbsp;&nbsp </span>
    <kbd>Ctrl K</kbd>
  {/if}
</button>

<dialog
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
            <h3 class="font-4">
              {post.title}
            </h3>
            <p class="font-3">{post.description}</p>
            {#if post.datetime}
              <small>
                <time datetime={post.datetime}>
                  <iconify-icon icon="lucide:calendar" />: {relativeTime(
                    new Date(),
                    new Date(post.datetime)
                  )}
                  <div aria-orientation="vertical" role="separator">•</div>
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
    gap: 0.4rem;

    border-radius: 0.8rem;
  }

  .complex {
    padding: 0.4rem 0.8rem;
  }

  span {
    text-decoration: underline solid var(--clr-blue-20) 0.15em;
    text-underline-offset: 0em;
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
    color: var(--clr-100);
  }

  p {
    color: var(--clr-100);
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
