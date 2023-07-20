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
      <hgroup>
        <small>PORTFOLIO SHOWCASE &mdash;</small>
        <h1 class="font-fluid-2">
          {getCategoryInfo($currentGroupOfProjects).label} Projects
        </h1>
        <p class="font-h3">
          {getCategoryInfo($currentGroupOfProjects).description}
        </p>
      </hgroup>
      <form class="font-h3">
        <label for="projects">
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
      <article class="tpl">
        <figure>
          <figcaption>
            <div class="artifact-buttons">
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
              <a href={link.toString()} target="_blank" rel="external">{link}</a
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
              <a class="font-h3" href={link.toString()} target="_blank">
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

          <h3 class="font-sub">Tech Stack:</h3>
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
            <ShapeButton target="_blank" icon="github" href={repo.toString()}
              >Source Code</ShapeButton
            >
            <ShapeButton class="reverse" href="{base}/blog/{case_study}"
              >Case Study</ShapeButton
            >
          </div>
        </div>
      </article>
    {/each}
    <article class="tpl">
      <button>
        <iconify-icon width="30" height="30" icon="lucide:plus" />
      </button>
      <div id="describe-new-project">
        <header>
          <a href="#todo" target="_blank">
            <span style:color="var(--clr-inv-700)">newdomain.com</span>
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
.wrapper-header {
  border-bottom-right-radius: 1.6rem;
  border-bottom-left-radius: 1.6rem;
  padding-bottom: 1.4rem;
  padding-top: 1.8rem;
  background-color: var(--clr-400);
  display: flex;
  place-items: center;
}

.wrapper-header header {
  display: flex;
  flex-direction: column;
  width: min(92%, var(--base));
  margin-inline: auto;
  place-content: center;
  gap: 2.6rem;
}

hgroup {
  flex: 6;
  display: grid;
  gap: 1rem;
}

hgroup p {
  color: var(--clr-inv-600);
}

form {
  flex: 4;
  display: flex;
  flex-flow: column wrap;
  place-content: center;
  gap: 1rem;
}

label {
  margin-inline: 1.6rem;
  display: flex;
  flex-wrap: wrap;
}

.wrapper-select {
  --bg: var(--clr-600);
  --brd: var(--clr-700);
  padding: 0.6rem 1.6rem;
  border-radius: 1rem;
}

select {
  width: 100%;
  color: var(--clr-inv-700);
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

article {
  --bg: var(--clr-400);
  --brd: var(--clr-500);
  border-radius: 1.2rem;
  display: flex;
  flex-flow: column wrap;
  gap: 2rem;
  padding: 1.6rem;
}

a {
  max-width: max-content;
}

[id^='describe-'] {
  flex: 6;
  gap: 1rem;
  display: flex;
  flex-direction: column;
}

h3 {
  margin-top: 0.8rem;
  color: var(--clr-inv-150);
  font-weight: 500;
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
  color: var(--clr-inv-700);
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

@media screen and (min-width: 896px) {
  .wrapper-header header {
    flex-direction: row;
    padding: 6rem 0;
  }

  article {
    flex-direction: row;
  }
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

figcaption {
  display: flex;
  place-items: center;
  padding: 0.2rem;
  padding-right: 0.8rem;
  background: red;
}

.artifact-buttons {
  display: flex;
  padding: 0.4rem;
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

span {
  font-variation-settings: 'wght' 500;
}

button {
  min-width: min(100%, var(--xs));
  height: auto;
  cursor: pointer;
  flex: 5;
  aspect-ratio: 16/10;
  border: 3px dashed var(--clr-800);
  display: flex;
  place-items: center;
  place-content: center;
}

button:hover {
  border: 3px dashed var(--clr-orange-50);
  background-color: var(--clr-600);
}

[icon='lucide:plus'] {
  color: var(--clr-inv-600);
}

button:hover [icon='lucide:plus'] {
  color: var(--clr-inv-900);
}
</style>
