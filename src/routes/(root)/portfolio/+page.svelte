<script lang="ts">
import { base } from '$app/paths';
import ShapeButton from '$lib/components/navigation/ShapeButton.svelte';
import {
  currentGroupOfProjects,
  jobSelector,
  getCategoryInfo,
  FilteredProjects
} from '$lib/components/projects/store';
import { retrieve_icon } from '$lib/utils/utils';
</script>

<main>
  <div class="wrapper-header">
    <header>
      <section>
        <small>PORTFOLIO SHOWCASE &mdash;</small>
        <h1 class="font-fluid-2">
          {getCategoryInfo($currentGroupOfProjects).label} Projects
        </h1>
        <p class="font-h3">
          {getCategoryInfo($currentGroupOfProjects).description}
        </p>
      </section>
      <form class="font-h3">
        <label for="projects" class="font-p">
          Filter by type of project
          <noscript>
            <small>Sorry Folks! This requires JavaScript to work!</small>
          </noscript>
        </label>
        <div class="around-select">
          <select bind:value={$currentGroupOfProjects} name="projects" id="projects">
            {#each Object.entries(jobSelector) as [value, [label]]}
              <option {value} {label} />
            {/each}
          </select>
        </div>
      </form>
    </header>
  </div>
  <section>
    {#each $FilteredProjects as { name, description, category, stack, img, repo, link, case_study }}
      <article>
        <figure>
          <figcaption>
            <div class="artifact-buttons">
              {#each [1, 2, 3] as _}
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
                  <path
                    d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
                  />
                </svg>
              {/each}
            </div>
            <a
              href={link.toString()}
              target="_blank"
              rel="external"
              title="Link to live site of this project">{link}</a
            >
          </figcaption>
          <div class="wrapper-image">
            <img src={img} alt="Screenshot of {name}" title="Screenshot of {name}" />
          </div>
        </figure>
        <div id="describe-{name}">
          <header>
            <div class="container-card-title inline-items">
              <a class="font-p" href={link.toString()} target="_blank">
                {link.hostname.replace(/^www\./i, '')}
              </a>
              <ul class="inline-items tags">
                {#each category as tags}
                  <li class="font-sub">
                    {getCategoryInfo(tags).label}
                  </li>
                {/each}
              </ul>
            </div>
          </header>
          <p>{description}</p>

          <div class="container-stacktags">
            <h3 class="font-sub">Tech Stack:</h3>
            {#if stack.frontend}
              <div class="list-project-frontend">
                <h4 class="font-sub">Frontend:</h4>
                <ul class="inline-items tags">
                  {#each stack.frontend as tags}
                    <li class="font-sub">
                      <iconify-icon width="22" icon={retrieve_icon(tags)} />
                      {tags}
                    </li>
                  {/each}
                </ul>
              </div>
            {/if}
            {#if stack.api}
              <div class="list-project-api">
                <h4 class="font-sub">API:</h4>
                <ul class="inline-items tags">
                  {#each stack.api as tags}
                    <li class="font-sub">
                      <iconify-icon width="22" icon={retrieve_icon(tags)} />
                      {tags}
                    </li>
                  {/each}
                </ul>
              </div>
            {/if}
            {#if stack.backend}
              <div class="list-project-backend">
                <h4 class="font-sub">Backend:</h4>
                <ul class="inline-items tags">
                  {#each stack.backend as tags}
                    <li class="font-sub">
                      <iconify-icon width="22" icon={retrieve_icon(tags)} />
                      {tags}
                    </li>
                  {/each}
                </ul>
              </div>
            {/if}
            <div class="mt-6 flex flex-col flex-nowrap gap-4 xl:flex-row xl:flex-wrap">
              <ShapeButton
                class="reverse"
                href="{base}/blog/{case_study}"
                title="Read the case study for this project in my blog"
              >
                Case Study</ShapeButton
              >
              <ShapeButton
                class="default"
                target="_blank"
                icon="github"
                href={repo.toString()}
                title="Find the source code of this project in GitHub"
              >
                Source Code</ShapeButton
              >
            </div>
          </div>
        </div>
      </article>
    {/each}
    <article>
      <a id="new-project" href="{base}/#contact">
        Add a new project <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h14m-7-7v14"
          />
        </svg>
      </a>
      <div id="describe-new-project">
        <span class="font-p"> yourname.com </span>
        <p>
          Try Me! As a junior developer with a passion for turning ideas into reality, I'm excited
          to work with you on your new project.
        </p>
      </div>
    </article>
  </section>
</main>

<style>
.wrapper-header {
  display: grid;
  place-items: center;
  place-content: center;
  padding: 1.5rem 0;
  background: var(--srf-3);
  border-bottom-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}

.wrapper-header header {
  width: min(100% - 2rem, var(--md));
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  gap: 3rem;
}

.wrapper-header header .inline-items {
  gap: 1rem;
}

form {
  flex: 3;
  display: flex;
  flex-flow: column wrap;
  gap: 1rem;
}

label {
  display: flex;
  flex-wrap: wrap;
  margin-inline: 1rem;
}

.around-select {
  background: var(--srf-4);
  border: thin var(--srf-4) solid;
  border-top-color: var(--srf-4-brd);
  border-left-color: var(--srf-4-brd);
  border-radius: 1rem;
  box-shadow: 4px 8px 8px 0 rgb(0 0 0 / 0.06);
  overflow: hidden;
}

@media (hover: hover) {
  .around-select:hover {
    background: var(--srf-5);
    border-color: var(--srf-5-brd);
  }
}

select {
  width: 100%;
  border: 0;
  padding: 0.5rem 1.5rem;
  background: inherit;
  color: var(--text-2);
}

h3 {
  /* margin-top: 4rem; */
  color: var(--text-2);
}

h4 {
  color: var(--text-3);
  min-width: 8ch;
}

figure {
  flex: 6;
  background: var(--srf-4);
  border: thin var(--srf-4) solid;
  border-top-color: var(--srf-4-brd);
  border-left-color: var(--srf-4-brd);
  border-radius: 0.75rem;
  height: min-content;
}

figcaption {
  display: flex;
  place-items: center;
  padding: 0.25rem;
}

figcaption a {
  padding: 0.125rem 1rem;
  margin-left: 0.5rem;
  border-radius: 0.5rem;
  width: 100%;
  background: var(--srf-5);
}

.wrapper-image {
  overflow: hidden;
  overflow-y: scroll;
  aspect-ratio: 16/10;
  border-end-start-radius: 0.75rem;
  border-end-end-radius: 0.75rem;
}

.artifact-buttons {
  display: flex;
  padding: 0.25rem;
}

.artifact-buttons path {
  fill: var(--srf-1);
}

img {
  max-inline-size: 100%;
  block-size: auto;
  width: 100%;
  height: auto;
}

article {
  display: flex;
  flex-flow: column wrap;
  background: var(--srf-3);
  border: thin var(--srf-3) solid;
  border-top-color: var(--srf-3-brd);
  border-left-color: var(--srf-3-brd);
  border-radius: 1rem;
  padding: 1.5rem;
  gap: 2rem;
}

a#new-project {
  flex: 5;
  aspect-ratio: 16/10;
  cursor: pointer;
  display: flex;
  place-items: center;
  place-content: center;
  gap: 0.25rem;
  background: var(--srf-4);
  border: thin var(--srf-4) solid;
  border-top-color: var(--srf-4-brd);
  border-left-color: var(--srf-4-brd);
  border-radius: 0.75rem;
}

@media (hover: hover) {
  a#new-project:hover {
    background: var(--srf-5);
    border-color: var(--srf-5-brd);
  }

  a#new-project:active {
    background: var(--srf-2);
    border: var(--srf-2-brd);
    box-shadow: 4px 8px 8px 0 rgb(0 0 0 / 0.06);
  }
}

[id^='describe-'] {
  flex: 6;
  display: grid;
  grid-template-rows: auto 1fr auto;
  flex-wrap: wrap;
  place-content: start;
  gap: 1rem;
}

section {
  display: grid;
  flex: 6;
  margin-inline: auto;
  width: min(100%, var(--md));
  gap: 1.5rem;
}

main > section {
  padding: 3rem 0.75rem;
}

.container-card-title {
  gap: 1rem;
}

[class^='list-project'] {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.container-stacktags {
  display: grid;
  gap: 0.5rem;
}

@media screen and (min-width: 48rem) {
  .wrapper-header header {
    flex-direction: row;
    padding: 6rem 0;
    place-items: center;
  }

  article {
    flex-direction: row;
  }

  [class^='list-project'] {
    flex-direction: row;
    place-items: center;
  }

  .wrapper-image {
    aspect-ratio: 4/3;
  }
}
</style>
