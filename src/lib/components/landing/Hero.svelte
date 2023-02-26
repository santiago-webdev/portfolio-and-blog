<script lang="ts">
  import { base } from '$app/paths';
</script>

<section class="wide">
  <h1>Building websites <span>&&</span> clean interfaces</h1>
  <p>
    Here we'll discuss about <strong> web development </strong> and show you my projects
    while at it.
  </p>
  <div class="content-navigation">
    <a
      href="{base}/#projects"
      style="color: var(--clr-text)"
      class="attnactive attn"
      >Projects <iconify-icon icon="lucide:chevron-right" /></a
    >
    <a href="/" class="act">Contact</a>
  </div>
</section>

<style>
  section {
    display: grid;
    gap: 2rem;
    padding: 1rem 0;
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
    /* width: 100%; */
  }
</style>
