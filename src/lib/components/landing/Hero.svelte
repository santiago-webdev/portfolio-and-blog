<script lang="ts">
  import Hollow from '../Hollow.svelte';
  import SearchBar from '../Search/SearchBar.svelte';

  let input: HTMLInputElement;
</script>

<section class="wider">
  <div class="hero">
    <h1>
      Building websites <span>&&</span>
      clean
      interfaces
    </h1>
  </div>
  <div class="content">
    <p>
      Here we'll discuss about web technologies and show you my projects while
      at it.
    </p>
    <SearchBar bind:input />
  </div>
</section>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(20rem, 100%), 1fr));
    /* grid-template-columns: 1fr 1fr; */
    gap: 1rem;
    margin-inline: auto;
    /* width: 100%; */
    /* height: 100%; */
  }

  .hero {
    text-align: left;
  }

  /* h1 { */
  /*   text-transform: uppercase; */
  /* } */

  /* p { */
  /*   max-width: 40ch; */
  /*   margin-inline: auto; */
  /* } */

  .content {
    display: grid;
    place-content: center;
    gap: 1rem;
    width: 100%;
  }
</style>
