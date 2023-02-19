<script lang="ts">
  import { base } from '$app/paths';
  import SearchBar from '../Search/SearchBar.svelte';

  let input: HTMLInputElement;

  let chevron_right =
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 2.4 24 24"><path fill="currentColor" d="M8.7 19.7q-.275-.275-.275-.7t.275-.7l3.9-3.9l-3.9-3.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.6 4.6q-.275.275-.7.275t-.7-.275Z"/></svg>';
</script>

<section class="wider">
  <div class="hero">
    <h1>Building websites <span>&&</span> clean interfaces</h1>
    <br />
    <p>
      Here we'll discuss about web technologies and show you my projects while
      at it.
    </p>
  </div>
  <div class="content">
    <h2>If anything of this sounds interesting to you</h2>
    <div class="content-navigation">
      <a
        data-sveltekit-reload
        data-sveltekit-noscroll
        href="{base}/#projects"
        class="attn
        attnactive">Projects {@html chevron_right}</a
      >
      <a
        data-sveltekit-reload
        data-sveltekit-noscroll
        href="/"
        class="attn-border attn">Contact</a
      >
    </div>
    <SearchBar placeholder="You can read my blog" bind:input />
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
    /* text-transform: uppercase; */
  }

  .content {
    display: grid;
    place-content: center;
    gap: 1rem;
    width: 100%;
  }

  .content-navigation {
    display: flex;
    justify-content: space-evenly;
    gap: 3rem;
  }

  a {
    display: flex;
    place-items: center;
    place-content: center;
    padding: 0.8rem;
    font-size: clamp(0.8rem, 8vw, 1.42rem);
    color: var(--clr-text);
    width: 100%;
  }
</style>
