<script lang="ts">
  import { base } from '$app/paths';
</script>

<section class="wide">
  <h1>Building websites <span>&&</span> clean interfaces</h1>
  <p>
    I'm a web developer and here we'll discuss about <strong>
      web development
    </strong> and show you my projects while at it.
  </p>
  <div class="content-navigation">
    <a
      href={'/'}
      aria-label="Link to my projects page"
      style="color: var(--clr-text)"
      class="shiny hover"
      >Projects <iconify-icon icon="lucide:chevron-right" /></a>
    <a href="/" aria-label="Link to contact me" class="block hover">Contact</a>
  </div>
</section>

<style>
  section {
    display: grid;
    gap: 2rem;
    margin-inline: auto;
  }

  .content-navigation {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(20rem, 100%), 1fr));
    gap: 1rem 2rem;
  }

  p {
    max-width: 40ch;
    margin-inline: auto;
  }

  a {
    display: flex;
    place-items: center;
    place-content: center;
    padding: 0.8rem;
    font-size: clamp(0.8rem, 8vw, 1.42rem);
  }
</style>
