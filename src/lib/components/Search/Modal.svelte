<script lang="ts">
  import { base } from '$app/paths';
  // import { page } from '$app/stores';
  import SearchBar from '$lib/components/Search/SearchBar.svelte';
  import { FilteredPosts, FilterValue } from './store';
  import { readableDate } from '$lib/utils/utils';
  // import { onMount } from 'svelte';

  let input: HTMLInputElement;
  let modal: HTMLDialogElement;

  const search_icon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M10 6.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Zm-.691 3.516a4.5 4.5 0 1 1 .707-.707l2.838 2.837a.5.5 0 0 1-.708.708L9.31 10.016Z" clip-rule="evenodd"/></svg>';

  // function checkEnv(): boolean {
  //   if ($page.url.pathname.endsWith('blog')) {
  //     return true;
  //   }
  //
  //   return false;
  // }

  const handleModal = async () => {
    if (modal.open) {
      modal.close();
    } else {
      // const inBlogRoute = checkEnv();
      // if (inBlogRoute) {
      //   input.focus();
      // } else {
      modal.showModal();
      // }
    }
  };

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

  // onMount(() => {
  //   modal.showModal();
  // });
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
                {@html search_icon}
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
    position: absolute;
    border-radius: 1.1rem;
    background-color: var(--clr-bg-active);
  }

  :modal::backdrop {
    /* background: linear-gradient( */
    /*   130deg, */
    /*   rgba(43 42 51 / 0.03), */
    /*   rgba(0 0 0 / 0.04) */
    /* ); */
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
