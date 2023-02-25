<script lang="ts">
  import { base } from '$app/paths';
  import SearchBar from '$lib/components/Search/SearchBar.svelte';
  import { FilteredPosts, FilterValue } from './store';
  import { readableDate } from '$lib/utils/utils';
  import IconSearch from '$lib/Icons/IconSearch.svelte';

  let input: HTMLInputElement;
  let modal: HTMLDialogElement;

  const handleModal = () => (modal.open ? modal.close() : modal.showModal());

  function onCtrlK(event: KeyboardEvent) {
    let { key, ctrlKey, repeat } = event;
    if (repeat) return;

    switch (key) {
      case 'k':
        if (ctrlKey) {
          event.preventDefault();
          handleModal();
          break;
        }
    }
  }
</script>

<svelte:window on:keydown={onCtrlK} />

<dialog class="attn wide" bind:this={modal}>
  <SearchBar bind:input modal />
  {#if $FilterValue.length}
    <ul>
      {#each $FilteredPosts.slice(0, 4) as post}
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
  {/if}
</dialog>

<style>
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
    background-color: rgba(31 31 37 / 0.6);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
  }

  hr {
    width: 99%;
    color: var(--clr-text-muted);
    background-color: var(--clr-text-muted);
    height: 1px;
    border: none;
    outline: 0;
    padding: 0;
    margin: 0;
    margin-inline: auto;
  }

  ul {
    padding: 0.3rem;
  }

  li {
    display: flex;
    place-items: center;
    padding: 1rem;
  }

  h3 {
    display: flex;
    place-items: center;
    gap: 0.5rem;
  }
</style>
