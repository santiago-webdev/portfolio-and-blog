<script lang="ts">
  import Hero from './Hero.svelte';
  import PresentationBlog from '$lib/components/PresentationBlog.svelte';
  import { DESCRIPTION, TITLE, URL } from '$lib/config';
  import BlogShowcase from './BlogShowcase.svelte';
</script>

<main role="banner" class="banner">
  <Hero />
</main>
<BlogShowcase />
<section id="projects">
  <PresentationBlog />
</section>

<svelte:head>
  <title>{TITLE}</title>

  <!-- TODO(santigo-zero): meta tags for dynamic routing -->
  <!-- HTML Meta Tags -->
  <meta name="description" content={DESCRIPTION} />

  <!-- Google / Search Engine Tags -->
  <meta itemprop="name" content={TITLE} />
  <meta itemprop="description" content={DESCRIPTION} />
  <meta itemprop="image" content="" />
  <!-- TODO(santigo-zero): Add image -->

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content={URL} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={TITLE} />
  <meta property="og:description" content={DESCRIPTION} />
  <meta property="og:image" content="" />
  <!-- TODO(santigo-zero): Add image -->

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={TITLE} />
  <meta name="twitter:description" content={DESCRIPTION} />
  <meta name="twitter:image" content="" />
  <!-- TODO(santigo-zero): Add image -->
</svelte:head>

<style>
  main {
    display: grid;
    place-content: center;
  }

  @media screen and (min-width: 48rem) {
    main {
      min-height: min(100vh, 80rem);
    }
  }
</style>
