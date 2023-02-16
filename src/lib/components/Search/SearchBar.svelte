<script lang="ts">
  import { FilteredPosts, FilterValue } from './store';
  import { searchHandler } from './utils';
  import { base } from '$app/paths';
  import { goto, preloadData } from '$app/navigation';
  import { get } from 'svelte/store';
  import { onMount } from 'svelte';

  $: if ($FilteredPosts.length === 1) {
    preloadData(`${base}/blog${$FilteredPosts[0].href}`);
  }

  const search_icon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M10 6.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Zm-.691 3.516a4.5 4.5 0 1 1 .707-.707l2.838 2.837a.5.5 0 0 1-.708.708L9.31 10.016Z" clip-rule="evenodd"/></svg>';
  const placeholderDefault = 'Search';
  const placeholderNoInput = "You haven't searched for any post yet";
  let placeholder = placeholderDefault;

  let value = '';

  async function handleSubmit() {
    if (value.length === 0) {
      placeholder = placeholderNoInput;

      setTimeout(() => {
        placeholder = placeholderDefault;
      }, 1000);
      return;
    }

    await goto(`${base}/blog${$FilteredPosts[0].href}`);
  }

  onMount(() => (value = get(FilterValue)));
</script>

<form class="wide attn-border attn" on:submit|preventDefault={handleSubmit}>
  <button aria-label="Go to selected blog" type="submit"
    >{@html search_icon}</button
  >
  <input
    {placeholder}
    bind:value
    on:input={() => FilterValue.set(searchHandler(value))}
    type="search"
    id="search"
    list="search-terms"
    autocomplete="off"
  />
  <!-- {#if suggestions.length > 0} -->
  <!-- {#if true} -->
  <!--   <div class="suggestions">  -->
  <!---->
  <!--   <hr style="width: 100%"/> -->
  <!--   <ul> -->
  <!--     {#each $FilteredPosts as post} -->
  <!--       <li>You could try with: {post.title}</li> -->
  <!--     {/each} -->
  <!--   </ul> -->
  <!--   </div> -->
  <!-- {/if} -->
  <!-- {#if true} -->
  <!--   <div class="suggestions"> -->
  <!--     <hr style="width: 96%" /> -->
  <!--     <datalist id="search-terms"> -->
  <!--       <ul> -->
  <!--         {#each $FilteredPosts as post} -->
  <!--           <li>You could try with: {post.title}</li> -->
  <!--           <option value={post.title} /> -->
  <!--         {/each} -->
  <!--       </ul> -->
  <!--     </datalist> -->
  <!--   </div> -->
  <!-- {/if} -->
</form>

<style>
  form {
    display: grid;
    grid-template-columns: auto 1fr;
    overflow: hidden;
    margin-inline: auto;
  }

  /* .suggestions { */
  /*   grid-column: 1 / span 2; */
  /* } */

  /* ul { */
  /*   display: grid; */
  /*   place-content: start; */
  /*   padding-inline: 3rem; */
  /* } */

  input:-moz-placeholder,
  input::-moz-placeholder {
    opacity: 1;
  }

  /* input[type='search']::-ms-clear { */
  /*   display: none; */
  /* } */

  /* input[type='search']::-webkit-search-cancel-button { */
  /*   display: none; */
  /* } */

  input,
  input::placeholder,
  button {
    color: inherit;
    background-color: inherit;
  }

  input {
    border: none;
    outline: none;
    padding: 0.6rem 1.3rem 0.6rem 0;
  }

  input:focus::placeholder {
    color: transparent;
  }

  button {
    display: grid;
    place-items: center;
    padding-inline: 1.3rem 0.8rem;
  }
</style>
