<script lang="ts">
  import SearchBar from '../Search/SearchBar.svelte';
  let input: HTMLInputElement;
</script>

<header class="wider">
  <section>
    <h1>Building websites && clean interfaces</h1>
    <br />
    <h2>
      Here we'll discuss about web technologies and show you my projects while
      at it.
    </h2>
  </section>
  <article>
    <h2>My blog</h2>
    <SearchBar bind:input insideModal={true} />
    <h2>TODO</h2>
    <div class="wrapper-links">
      <a href="/">PROJECTS</a>
      <a href="/">CONTACT</a>
    </div>
  </article>
</header>

<style>
  header {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(23.7rem, 100%), 1fr));
    gap: 3rem;
    margin-inline: auto;
  }

  section {
    grid-column: span 2;
  }

  article {
    grid-column: span 1;
    width: 100%;
  }

  a {
    border-radius: 1.1rem;
    font-size: clamp(1rem, 8vw, 1.3rem);
    padding: 1rem 2.6rem;
    color: var(--clr-subtitle);
    text-align: center;
  }

  a:first-child {
    background-color: black;
    border: 0.2rem solid black;
  }

  a:last-child {
    border: 0.2rem solid var(--clr-text-muted);
    color: var(--clr-text);
  }

  .wrapper-links {
    display: flex;
    place-items: center;
    gap: 1.3rem;
    flex-wrap: wrap;
    width: 100%;
  }
</style>
