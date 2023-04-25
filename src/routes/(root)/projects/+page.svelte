<script lang="ts">
  import site from '$lib/site.json'

  const jobs = [
    {
      value: 'featured',
      label: 'Featured',
      text: 'Featured projects',
    },
    {
      value: 'opensource',
      label: 'Open Source',
      text: 'Open Source projects',
    },
    {
      value: 'fullstack',
      label: 'Full Stack',
      text: 'Full stack projects',
    },
    {
      value: 'frontend',
      label: 'Front End',
      text: 'Front End projects',
    },
  ]
  let value = jobs[0].value
</script>

<main>
  <div class="wrapper-projects">
    <div class="projects-presentation">
      <h1 class="font-fluid-bs">Featured Projects - Here you'll find:</h1>
      <p class="font-fluid-bs">
        A selection of my most notorious {value} projects to explore.
      </p>
    </div>
    <form>
      <label class="font-fluid-sm" for="projects-type">
        Filter by type of project
      </label>
      <select
        bind:value
        class="font-fluid-xs shiny"
        name="projects-type"
        id="projects-type">
        {#each jobs as { value, label, text }}
          <option {value} {label}>{text}</option>
        {/each}
      </select>
    </form>
  </div>
</main>

<section>
  <article>project 1</article>
  <article>project 2</article>
  <article>project 3</article>
  <article>project 4</article>
</section>

<svelte:head>
  <title>Santiago's Projects</title>

  <!-- TODO(santigo-zero): meta tags for dynamic routing -->
  <!-- HTML Meta Tags -->
  <meta name="description" content={site.description} />

  <!-- Google / Search Engine Tags -->
  <meta itemprop="name" content={site.title} />
  <meta itemprop="description" content={site.description} />
  <meta itemprop="image" content="" />
  <!-- TODO(santigo-zero): Add image -->

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content={site.url} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={site.title} />
  <meta property="og:description" content={site.description} />
  <meta property="og:image" content="" />
  <!-- TODO(santigo-zero): Add image -->

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={site.title} />
  <meta name="twitter:description" content={site.description} />
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
    gap: 3rem;
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

  select {
    padding: 0.4rem 1.2rem;
    border-radius: 1rem;
    color: inherit;
    /* outline: 3px greenyellow solid; */
  }

  section {
    width: min(92%, var(--lg));
    margin-inline: auto;
    /* outline: 3px palevioletred solid; */
  }
</style>
