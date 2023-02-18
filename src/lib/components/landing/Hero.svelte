<script lang="ts">
  import SearchBar from '../Search/SearchBar.svelte';

  let input: HTMLInputElement;
</script>

<section class="wide">
  <div class="noise" />
  <h1>Building websites && clean interfaces</h1>
  <p>
    Here we'll discuss about web technologies and show you my projects while at
    it.
  </p>
  <SearchBar bind:input />
</section>

<style>
  section {
    text-align: center;
    display: grid;
    gap: 2.2rem;
    margin-inline: auto;
  }
</style>
