<script lang="ts">
  import LinkInText from '$lib/components/navigation/LinkInText.svelte'
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
      name: currentItem ? currentItem.name : 'nothing',
    }
  }
</script>

<main>
  <div class="wrapper-projects">
    <div class="projects-presentation">
      <h1 class="font-50">
        Projects Showcase - {getCurrent().name}
      </h1>
      <p class="font-50">
        {getCurrent().description}.
      </p>
    </div>
    <form class="font-30">
      <label for="projects"> Filter by type of project </label>
      <select
        bind:value={$currentGroupOfProjects}
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
  {#each $FilteredProjects as { name, description, category, img, repo, link }}
    <article id="portfolio-{name}">
      <div class="img-wrapper">
        <img src={img} alt="" />
      </div>
      <div id="describe-{name}">
        <LinkInText target="_blank" href={link.toString()}>
          {link.hostname.replace(/^www\./i, '')}
        </LinkInText>
        <h2>{name}</h2>
        <p>{description}</p>
        <ul>
          {#each category as tags}
            <li class="shiny">{tags}</li>
          {/each}
        </ul>
        <a target="_blank" href={repo.toString()}>Repo</a>
        <a target="_blank" href={link.toString()}>Link Live</a>
      </div>
    </article>
  {/each}
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
    margin-inline: 1.6rem;
  }

  select {
    padding: 0.7rem 1.6rem;
    border-radius: 1rem;
    color: var(--clr-85);

    background-color: var(--clr-40);
    border: 1px solid var(--clr-40);
    border-top-color: var(--clr-45);
    border-left-color: var(--clr-45);
    box-shadow: 0 4px 16px 0 rgba(0 0 0 / 0.1);

    transition: background-color 50ms, border 80ms, box-shadow 300ms;
  }

  section {
    padding: 3rem 0;
    margin-inline: auto;
    display: grid;
    gap: 1.5rem;
  }

  article {
    background-color: var(--clr-25);
    border-radius: 0.8rem;
    display: flex;
    flex-flow: row wrap;
    gap: 2rem;
    margin-inline: auto;
    padding: 2rem;
    place-items: center;
    width: min(92%, var(--md));
  }

  article [id^='describe-'] {
    flex: 6;
    gap: 1rem;
    display: flex;
    flex-direction: column;
  }

  article [id^='describe-'] ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6ch;
  }

  article [id^='describe-'] ul li {
    border-radius: 0.8rem;
    padding: 0.6rem 1.2rem;
  }

  article .img-wrapper {
    min-width: 12rem;
    max-height: 23rem;
    flex: 3;
    height: auto;
    overflow-y: scroll;
    border: 3px dashed var(--clr-50);
  }

  article .img-wrapper img {
    max-inline-size: 100%;
    block-size: auto;
  }
</style>
