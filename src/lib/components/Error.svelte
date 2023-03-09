<script lang="ts">
  import { base } from '$app/paths';
  import Hollow from './Hollow.svelte';
</script>

<section role="banner" class="wide banner">
  <h1>
    <Hollow color="var(--clr-txt-A)">404</Hollow>: This page doesn't exists
  </h1>
</section>
<div class="wide goback">
  <!-- TODO(santigo-zero): Use the size of an h3 for this h2 -->
  <p>You can either use the search bar located in the navbar or:</p>
  <a href="{base}/" aria-label="Link to go back to home" class="attn attnactive"
    >Go back Home</a>
</div>

<style>
  section,
  .goback {
    display: grid;
    place-items: center;
    place-content: center;
    gap: 2rem;
    margin-inline: auto;
    text-align: center;
    padding: auto 6rem;
  }

  .goback {
    padding: 3rem 0;
  }

  a {
    display: flex;
    place-items: center;
    place-content: center;
    padding: 1rem min(100%, 6rem);
    font-size: clamp(0.8rem, 8vw, 1.42rem);
    color: var(--clr-text);
  }
</style>
