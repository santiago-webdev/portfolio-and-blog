<script lang="ts">
  import site from '$lib/site.json'

  const jobs = [
    {
      value: 0,
      label: 'Featured',
      name: 'Featured projects',
      description:
        "Here's a selection of the most relevant projects I have for you to explore",
    },
    {
      value: 1,
      label: 'Open Source',
      name: 'Open Source contributions',
      description: `As a Linux enthusiast, I'm a firm believer in FOSS, check
      out the projects I'm being part of`,
    },
    {
      value: 2,
      label: 'Full Stack',
      name: 'Full Stack projects',
      description: `This are some of the most 'complete' projects I have to date`,
    },
    {
      value: 3,
      label: 'Front End',
      name: 'Front End projects',
      description: `In here you'll find rewrites with a focus on making the UI/UX of this
pages accesible to everyone`,
    },
  ]

  let value = 0
</script>

<main>
  <div class="wrapper-projects">
    <div class="projects-presentation">
      <h1 class="font-fluid-bs">
        Projects Showcase - {jobs[value].name}
      </h1>
      <p class="font-fluid-bs">
        {jobs[value].description}.
      </p>
    </div>
    <form class="font-fluid-xs">
      <label class="font-fluid-sm" for="projects">
        Filter by type of project
      </label>
      <select bind:value class="shiny" name="projects" id="projects">
        {#each jobs as { value, label }}
          <option {value} {label} />
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
  <title>{site.portfolio.title} - {jobs[value].name}</title>

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

    width: min(92%, var(--base));
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
