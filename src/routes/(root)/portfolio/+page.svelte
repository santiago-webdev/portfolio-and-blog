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
  <div
    class="wrapper-header py-6 flex place-items-center dark:bg-dark-400 rounded-b-3xl"
  >
    <header
      class="flex flex-col place-content-center mx-auto px-3 max-w-screen-lg gap-10 lg:flex-row md:py-24"
    >
      <section class="grid gap-4">
        <small>PORTFOLIO SHOWCASE &mdash;</small>
        <h1 class="font-fluid-2">
          {getCategoryInfo($currentGroupOfProjects).label} Projects
        </h1>
        <p class="font-h3">
          {getCategoryInfo($currentGroupOfProjects).description}
        </p>
      </section>
      <form class="font-h3">
        <label for="projects flex flex-wrap mx-6">
          Filter by type of project
          <noscript>
            <small>Sorry Folks! This requires JavaScript to work!</small>
          </noscript>
        </label>
        <div class="wrapper-select tpl">
          <select
            bind:value={$currentGroupOfProjects}
            name="projects"
            id="projects"
          >
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
      <article
        class="flex flex-col flex-wrap md:flex-row p-6 gap-8 rounded-3xl
 border-t border-l border-t-solid border-l-solid
        dark:bg-dark-400 dark:border-dark-600
        "
      >
        <figure>
          <figcaption class="flex place-items-center p-1 pr-2 dark:bg-dark-900">
            <div class="artifact-buttons flex p-1">
              {#each [1, 2, 3] as _}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="var(--clr-500)"
                    d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
                  />
                </svg>
              {/each}
            </div>
            <div class="artifact-link">
              <a
                class="max-w-max"
                href={link.toString()}
                target="_blank"
                rel="external">{link}</a
              >
            </div>
          </figcaption>
          <img
            loading="lazy"
            src={img}
            alt="Screenshot of {name}"
            title="Screenshot of {name}"
          />
        </figure>
        <div id="describe-{name}">
          <header>
            <div style:gap="2ch" class="inline-items">
              <a
                class="font-h3 max-w-max"
                href={link.toString()}
                target="_blank"
              >
                {link.hostname.replace(/^www\./i, '')}
              </a>
              <ul class="inline-items">
                {#each category as tags}
                  <li class="tpl tags">
                    {getCategoryInfo(tags).label}
                  </li>
                {/each}
              </ul>
            </div>
          </header>
          <p>{description}</p>

          <h3 class="font-sub mt-4 dark:text-dark-inv-800 font-bold">
            Tech Stack:
          </h3>
          {#if stack.frontend}
            <div class="list-project-frontend">
              <h4 class="font-sub">Frontend:</h4>
              <ul class="inline-items">
                {#each stack.frontend as tags}
                  <li class="tpl tags font-sub">
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
              <ul class="inline-items">
                {#each stack.api as tags}
                  <li class="tpl tags font-sub">
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
              <ul class="inline-items">
                {#each stack.backend as tags}
                  <li class="tpl tags font-sub">
                    <iconify-icon width="22" icon={retrieve_icon(tags)} />
                    {tags}
                  </li>
                {/each}
              </ul>
            </div>
          {/if}

          <div class="container-project-links">
            <ShapeButton
              class="default"
              target="_blank"
              icon="github"
              href={repo.toString()}>Source Code</ShapeButton
            >
            <ShapeButton class="reverse" href="{base}/blog/{case_study}"
              >Case Study</ShapeButton
            >
          </div>
        </div>
      </article>
    {/each}
    <article
      class="flex flex-col flex-wrap md:flex-row p-6 gap-8 rounded-3xl
 border-t border-l border-t-solid border-l-solid
        dark:bg-dark-400 dark:border-dark-600"
    >
      <button
        class="flex place-items-center place-content-center rounded-xl
        hover:dark:bg-dark-600 border-2 border-solid
        hover:dark:border-palette-orange-50"
      >
        <iconify-icon width="30" height="30" icon="lucide:plus" />
      </button>
      <div id="describe-new-project">
        <header>
          <a class="max-w-max" href="#todo" target="_blank">
            <span class="font-semibold">newdomain.com</span>
          </a>
          <h2 class="font-sub">Takeaway Interview?</h2>
          <p>
            Try Me! As a junior developer with a passion for turning ideas into
            reality, I'm excited to work with you on your new project.
          </p>
          <ul>
            <li class="tpl font-sub">New</li>
          </ul>
        </header>
      </div>
    </article>
  </section>
</main>

<style>
section {
  flex: 6;
}

section p {
  color: var(--text-0);
}

form {
  flex: 4;
  display: flex;
  flex-flow: column wrap;
  place-content: center;
  gap: 1rem;
}

.wrapper-select {
  --bg: var(--clr-600);
  --brd: var(--clr-700);
  padding: 0.6rem 1.6rem;
  border-radius: 1rem;
}

select {
  width: 100%;
  color: var(--text-1);
  background-color: inherit;
  border: none;
}

section {
  padding-top: 2.8rem;
  margin-inline: auto;
  width: min(96%, var(--lg));
  display: grid;
  gap: 1.6rem;
}

[id^='describe-'] {
  flex: 6;
  gap: 1rem;
  display: flex;
  flex-direction: column;
}

article header {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

[class^='list-project'] {
  display: flex;
  flex-direction: column;
  gap: 1ch;
}

h4 {
  color: var(--text-1);
  font-variation-settings: 'wght' 700;
  font-weight: 500;
  min-width: 8ch;
}

.container-project-links {
  margin-top: 1.6rem;
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
}

@media screen and (min-width: 1200px) {
  .container-project-links {
    flex-flow: row wrap;
  }

  [class^='list-project'] {
    flex-direction: row;
    place-items: center;
  }
}

figure {
  height: auto;
  aspect-ratio: 16/10;
  flex: 5;
  overflow-y: scroll;
  border: 3px solid var(--clr-800);
  border-radius: 0.8rem;
}

.artifact-link {
  overflow-x: auto;
  padding: 0.2rem 1rem;
  width: 100%;
  background: var(--clr-800);
  border-radius: 6px;
  display: grid;
}

img {
  max-inline-size: 100%;
  block-size: auto;
}

button {
  min-width: min(100%, var(--xs));
  height: auto;
  cursor: pointer;
  flex: 5;
  aspect-ratio: 16/10;
  border: 3px dashed var(--clr-800);
}
</style>
