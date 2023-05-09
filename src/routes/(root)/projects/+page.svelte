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
  {#each $FilteredProjects as { name, description, category, img, repo, link, accent }}
    <article>
      <div class="img-wrapper">
        <img
          src={img}
          alt="Screenshot of {name}"
          title="Screenshot of {name}" />
      </div>
      <div id="describe-{name}">
        <div class="describe-project-banner">
          <a
            href={link.toString()}
            target="_blank"
            style:color="var({accent})"
            class="font-40">{link.hostname.replace(/^www\./i, '')}</a>
          <div style:gap="2ch" class="inline-items">
            <h2 class="font-30">{name}</h2>
            <ul class="inline-items">
              {#each category as tags}
                <li class="shiny font-20">{tags}</li>
              {/each}
            </ul>
          </div>
        </div>
        <p class="font-20">{description}</p>
        <a target="_blank" href={repo.toString()}>Source code</a>
        <a target="_blank" href={link.toString()}>Visit site</a>
      </div>
    </article>
  {/each}
  <article id="portfolio-new">
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="shiny"
        width="24"
        height="24"
        viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 5v14m-7-7h14" />
      </svg>
    </button>
    <div id="describe-new">
      <div>newdomain.com</div>
      <h2>New Project</h2>
      <p>
        Take Away Interview? Try Me! As a junior developer with a passion for
        turning ideas into reality, I'm excited to work with you on your new
        project.
      </p>
      <ul>
        <li class="shiny">New</li>
      </ul>
    </div>
  </article>
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
    border-bottom-right-radius: 1.6rem;
    border-bottom-left-radius: 1.6rem;
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
    padding-top: 3rem;
    margin-inline: auto;
    width: min(92%, var(--lg));
    display: grid;
    gap: 1.6rem;
  }

  article {
    background-color: var(--clr-25);
    border-radius: 0.8rem;
    display: flex;
    flex-flow: row wrap;
    gap: 2rem;
    padding: 1.6rem;
  }

  [id^='describe-'] {
    flex: 6;
    gap: 1rem;
    display: flex;
    flex-direction: column;
  }

  .describe-project-banner {
    display: flex;
    flex-direction: column;
    gap: 1ch;
  }

  li {
    border-radius: 0.6rem;
    padding: 0.4rem 0.8rem;
  }

  .img-wrapper {
    min-width: min(100%, var(--xs));
    /* max-height: 23rem; */
    aspect-ratio: 16/10;
    flex: 3;
    height: auto;
    overflow-y: scroll;
    border: 3px dashed var(--clr-50);
  }

  img {
    max-inline-size: 100%;
    block-size: auto;
  }

  button {
    min-width: min(100%, var(--xs));
    cursor: pointer;
    flex: 3;
    aspect-ratio: 16/10;
    border: 3px dashed var(--clr-50);
    display: flex;
    place-items: center;
    place-content: center;
  }

  button:hover {
    border: 3px dashed var(--clr-55);
    background-color: var(--clr-30);
  }

  button:hover svg {
    background-color: var(--clr-45);
  }

  svg {
    width: max-content;
    height: max-content;
    border-radius: 1rem;
  }
</style>
