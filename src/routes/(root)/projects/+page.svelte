<script lang="ts">
  import ShapeButton from '$lib/components/navigation/ShapeButton.svelte'
  import {
    currentGroupOfProjects,
    jobSelector,
    getCategoryInfo,
    FilteredProjects,
  } from '$lib/components/projects/store'
  import site from '$lib/site.json'
</script>

<main>
  <div class="container-projects">
    <div class="projects-presentation">
      <h1 class="font-50">
        Projects Showcase - {getCategoryInfo($currentGroupOfProjects).label}
      </h1>
      <p class="font-50">
        {getCategoryInfo($currentGroupOfProjects).description}
      </p>
    </div>
    <form class="font-30">
      <label style="display: flex; flex-wrap: wrap" for="projects">
        Filter by type of project
        <noscript>
          <small>Sorry Folks! This requires JavaScript to work!</small>
        </noscript>
      </label>
      <select
        bind:value={$currentGroupOfProjects}
        name="projects"
        id="projects">
        {#each Object.entries(jobSelector) as [value, [label]]}
          <option {value} {label} />
        {/each}
      </select>
    </form>
  </div>
</main>
<section>
  {#each $FilteredProjects as { name, description, category, stack, img, repo, link, accent }}
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
            style="display: flex; place-items: center; gap: 0.5ch"
            class="font-40">
            <span
              style:font-variation-settings="'wght' 500"
              style:color="var({accent ? accent : '--clr-200'})"
              >{link.hostname.replace(/^www\./i, '')}</span>
          </a>
          <div style:gap="2ch" class="inline-items">
            <h2 class="font-30">{name}</h2>
            <ul class="inline-items">
              {#each category as tags}
                <li class="shiny font-20">{getCategoryInfo(tags).label}</li>
              {/each}
            </ul>
          </div>
        </div>
        <p class="font-20">{description}</p>

        <h3
          class="font-10"
          style="margin-top: 0.8rem; color: var(--clr-150); font-variation-settings: 'wght' 700;">
          Tech Stack:
        </h3>
        <div class="list-project-frontend inline-items">
          {#if stack.frontend}
            <h4 class="font-10">Frontend:</h4>
            <ul class="inline-items font-10">
              {#each stack.frontend as tags}
                <li class="shiny">{tags}</li>
              {/each}
            </ul>
          {/if}
        </div>

        <div class="list-project-api inline-items">
          {#if stack.api}
            <h4 class="font-10">API:</h4>
            <ul class="inline-items font-10">
              {#each stack.api as tags}
                <li class="shiny">{tags}</li>
              {/each}
            </ul>
          {/if}
        </div>

        <div class="list-project-backend inline-items">
          {#if stack.backend}
            <h4 class="font-10">Backend:</h4>
            <ul class="inline-items font-10">
              {#each stack.backend as tags}
                <li class="shiny">{tags}</li>
              {/each}
            </ul>
          {/if}
        </div>

        <div class="container-project-links">
          <ShapeButton
            class="bttn-big-round shiny hover"
            target="_blank"
            custom_symbol="<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 256 250'> <path fill='currentColor' d='M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403Z' /> </svg>"
            href={repo.toString()}>
            Source Code
          </ShapeButton>
          <ShapeButton
            class="bttn-big-round reverse hover"
            href={link.toString()}>
            Case Study</ShapeButton>
        </div>
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

  .container-projects {
    display: flex;
    flex-flow: row wrap;

    width: min(92%, var(--base));
    margin-inline: auto;
    padding: 3rem 0;
    place-content: center;
    gap: 1.6rem;
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
    min-width: var(--xs);
  }

  label {
    margin-inline: 1.6rem;
  }

  select {
    width: 100%;
    padding: 0.7rem 1.6rem;
    border-radius: 1rem;
    color: var(--clr-150);

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
    border-radius: 1.2rem;
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

  h4 {
    color: var(--clr-90);
    font-variation-settings: 'wght' 700;
    min-width: 8ch;
  }

  .container-project-links {
    margin-top: 1.6rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  li {
    border-radius: 0.6rem;
    padding: 0.3rem 0.9rem;
  }

  .img-wrapper {
    min-width: min(100%, var(--xs));
    aspect-ratio: 16/10;
    flex: 3;
    height: auto;
    overflow-y: scroll;
    border: 3px solid var(--clr-50);
    border-radius: 0.8rem;
  }

  img {
    max-inline-size: 100%;
    block-size: auto;
  }

  button {
    min-width: min(100%, var(--xs));
    height: auto;
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
</style>
