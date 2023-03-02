<script lang="ts">
  import IconSearch from '$lib/Icons/IconSearch.svelte';
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
  $: onDesktop = outerWidth > inPixels('48rem') ? true : false;
  $: complex = onDesktop || !touchSupport;
</script>

<svelte:window bind:outerWidth on:keydown={onCtrlK} />

<button
  on:click={() => console.log('test')}
  class={complex ? 'attn attnactive' : ''}
  aria-keyshortcuts="Control+K"
  on:click={toggleModal}
>
  <IconSearch />
  {#if complex}
    <span> &nbsp;&nbsp;&nbsp </span>
    <kbd>Ctrl K</kbd>
  {/if}
</button>
<dialog bind:this={modal}>
  <form on:submit|preventDefault={handleSubmit}>
    <label for="search">Search for a blog post:</label>
    <button aria-label="Go to selected blog" type="submit">
      <IconSearch />
    </button>
    <input
      placeholder="Search"
      bind:value
      bind:this={input}
      type="search"
      id="search"
      autocomplete="off"
      on:input={() => searchHandler(value)}
    />
  </form>
  <ul style:display={value.length ? 'grid' : 'none'}>
    {#each $FilteredPosts.slice(0, 3) as post}
      <hr />
      <li>
        <a href="{base}/blog{post.href}">
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
    padding: 0;
    border: 0;
    margin: 0;
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
  }
</style>
