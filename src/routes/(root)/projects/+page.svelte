<script lang="ts">
  import {
    currentGroupOfProjects,
    filterJobGroupSelector,
    FilteredProjects,
  } from '$lib/components/projects/store'
  import site from '$lib/site.json'

  $: getCurrent = () => {
    let currentItem = $filterJobGroupSelector.find(
      p => p.category === $currentGroupOfProjects
    )
    return {
      label: currentItem ? currentItem.label : 'nothing',
      description: currentItem ? currentItem.description : 'nothing',
      name: currentItem ? currentItem.name : 'nothing'
    }
  }
</script>

<main>
  <div class="wrapper-projects">
    <div class="projects-presentation">
      <h1 class="font-fluid-bs">
        Projects Showcase - {getCurrent().name}
      </h1>
      <p class="font-fluid-bs">
        {getCurrent().description}.
      </p>
    </div>
    <form class="font-fluid-xs">
      <label class="font-fluid-sm" for="projects">
        Filter by type of project
      </label>
      <select
        bind:value={$currentGroupOfProjects}
        class="shiny"
        name="projects"
        id="projects">
        {#each $filterJobGroupSelector as { category, label }}
          <option value={category} {label} />
        {/each}
      </select>
    </form>
  </div>
</main>

<section>
  {JSON.stringify($FilteredProjects)}
</section>

<svelte:head>
  <title>{site.portfolio.title}</title>

  <!-- TODO(santigo-zero): meta tags for dynamic routing -->
  <!-- HTML Meta Tags -->
  <meta name="description" content={site.portfolio.description} />

  <!-- Google / Search Engine Tags -->
  <meta itemprop="name" content={site.portfolio.title} />
  <meta itemprop="description" content={site.portfolio.description} />
  <meta itemprop="image" content="" />
  <!-- TODO(santigo-zero): Add image -->

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content={site.portfolio.url} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={site.portfolio.title} />
  <meta property="og:description" content={site.portfolio.description} />
  <meta property="og:image" content="" />
  <!-- TODO(santigo-zero): Add image -->

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={site.portfolio.title} />
  <meta name="twitter:description" content={site.portfolio.description} />
  <meta name="twitter:image" content="" />
  <!-- TODO(santigo-zero): Add image -->
</svelte:head>

<style>
  main {
    background-color: var(--clr-25);
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    padding-bottom: 1rem;
    display: grid;
    place-items: center;
  }

  .wrapper-projects {
    display: flex;
    flex-flow: row wrap;

    width: min(92%, var(--md));
    margin-inline: auto;
    padding: 3rem 0;
    place-content: center;
    gap: 1rem;
  }

  .projects-presentation {
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .projects-presentation p {
    color: var(--clr-90);
  }

  form {
    flex: 2;
    display: flex;
    flex-flow: column wrap;
    place-content: center;
    gap: 1rem;
  }

  label {
    margin-inline: 1.2rem;
  }

  select {
    padding: 0.4rem 1.2rem;
    border-radius: 1rem;
    color: inherit;
  }

  section {
    width: min(92%, var(--md));
    margin-inline: auto;
  }
</style>
