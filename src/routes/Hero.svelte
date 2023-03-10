<script lang="ts">
  import { base } from '$app/paths';
</script>

<section class="wide">
  <h1>
    Build<wbr />ing web<wbr />sites <span>&&</span> clean inter<wbr />faces
  </h1>
  <p>
    I'm a web developer and here we'll discuss about <strong>
      web de&shy;vel&shy;op&shy;ment
    </strong> and show you my projects while at it.
  </p>
  <div class="content-navigation">
    <a
      href="{base}/projects"
      aria-label="Link to my projects page"
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
    font-size: 140%;
  }
</style>
