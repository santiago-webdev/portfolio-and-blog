<script lang="ts">
  import Hollow from '../Hollow.svelte';
  import SearchBar from '../Search/SearchBar.svelte';

  let input: HTMLInputElement;
</script>

<section class="wider">
  <div class="hero">
    <h1>Building websites <span>&&</span> clean interfaces</h1>
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
    gap: 1rem;
    margin-inline: auto;
  }

  .hero {
    text-align: left;
  }

  h1 {
    font-size: clamp(3rem, 8vw, 8.1rem);
    line-height: calc(1.5 * clamp(2.3rem, 8vw, 5rem));
    text-transform: uppercase;
  }

  p {
    margin-inline: auto;
  }

  .content {
    display: grid;
    place-content: center;
    gap: 1rem;
    width: 100%;
  }
</style>
