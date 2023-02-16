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
    '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z"></path></svg>';
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

<form class="wide base-border act" on:submit|preventDefault={handleSubmit}>
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
    background-color: transparent;
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
