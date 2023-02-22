<script lang="ts">
  import { base } from '$app/paths';
</script>

<section class="wide">
  <h1>Building websites <span>&&</span> clean interfaces</h1>
  <br />
  <p>
    Here we'll discuss about web technologies and show you my projects while at
    it.
  </p>
  <div class="content-navigation">
    <a
      data-sveltekit-reload
      data-sveltekit-noscroll
      href="{base}/#projects"
      class="act">Projects <iconify-icon icon="lucide:chevron-right" /></a
    >
    <a
      data-sveltekit-reload
      data-sveltekit-noscroll
      href="/"
      style="color: var(--clr-text)"
      class="attn-border attn">Contact</a
    >
  </div>
</section>

<style>
  section {
    display: grid;
    gap: 1rem;
    margin-inline: auto;
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
    width: 100%;
  }
</style>
