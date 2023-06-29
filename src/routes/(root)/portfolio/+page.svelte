<script lang="ts">
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
        <span class="font-10">Portfolio Showcase &mdash;</span>
        <h1 class="font-60">
          {getCategoryInfo($currentGroupOfProjects).label} Projects
        </h1>
        <p>
          {getCategoryInfo($currentGroupOfProjects).description}
        </p>
      </hgroup>
      <form class="font-30">
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
    {#each $FilteredProjects as { name, description, category, stack, img, repo, link, accent }}
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
                    fill="var(--clr-30)"
                    d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
                  />
                </svg>
              {/each}
            </div>
            <div class="artifact-link">
              <a
                class="font-10"
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
              <a href={link.toString()} target="_blank" class="font-40">
                <span style:color="var({accent ? accent : '--clr-inv-600'})"
                  >{link.hostname.replace(/^www\./i, '')}</span
                >
              </a>
              <ul class="inline-items">
                {#each category as tags}
                  <li class="tpl font-20">
                    {getCategoryInfo(tags).label}
                  </li>
                {/each}
              </ul>
            </div>
          </header>
          <p class="font-20">{description}</p>

          <h3 class="font-10">Tech Stack:</h3>
          {#if stack.frontend}
            <div class="list-project-frontend">
              <h4 class="font-10">Frontend:</h4>
              <ul class="inline-items font-10">
                {#each stack.frontend as tags}
                  <li class="tpl">
                    <iconify-icon width="22" icon={retrieve_icon(tags)} />
                    {tags}
                  </li>
                {/each}
              </ul>
            </div>
          {/if}
          {#if stack.api}
            <div class="list-project-api">
              <h4 class="font-10">API:</h4>
              <ul class="inline-items font-10">
                {#each stack.api as tags}
                  <li class="tpl">
                    <iconify-icon width="22" icon={retrieve_icon(tags)} />
                    {tags}
                  </li>
                {/each}
              </ul>
            </div>
          {/if}
          {#if stack.backend}
            <div class="list-project-backend">
              <h4 class="font-10">Backend:</h4>
              <ul class="inline-items font-10">
                {#each stack.backend as tags}
                  <li class="tpl">
                    <iconify-icon width="22" icon={retrieve_icon(tags)} />
                    {tags}
                  </li>
                {/each}
              </ul>
            </div>
          {/if}

          <div class="container-project-links">
            <ShapeButton
              target="_blank"
              custom_symbol="mdi:github"
              href={repo.toString()}>Source Code</ShapeButton
            >
            <ShapeButton class="reverse" href={link.toString()}
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
          <a href="#todo" target="_blank" class="font-40">
            <span style:color="var(--clr-inv-700)">newdomain.com</span>
          </a>
          <h2 class="font-30">Takeaway Interview?</h2>
          <p>
            Try Me! As a junior developer with a passion for turning ideas into
            reality, I'm excited to work with you on your new project.
          </p>
          <ul>
            <li class="tpl">New</li>
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
  background-color: var(--clr-25);
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

hgroup span {
  font-weight: 800;
  font-variation-settings: 'wght' 800;
  color: var(--clr-inv-700);
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
  --bg: var(--clr-40);
  --brd: var(--clr-45);
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
  --bg: var(--clr-25);
  --brd: var(--clr-30);
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
  font-variation-settings: 'wght' 700;
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
  color: var(--clr-90);
  font-variation-settings: 'wght' 700;
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

li {
  --bg: var(--clr-40);
  --brd: var(--clr-45);
  border-radius: 0.6rem;
  padding: 0.3rem 0.9rem;
  display: flex;
  gap: 1ch;
}

figure {
  height: auto;
  aspect-ratio: 16/10;
  flex: 5;
  overflow-y: scroll;
  border: 3px solid var(--clr-50);
  border-radius: 0.8rem;
}

figcaption {
  display: flex;
  place-items: center;
  padding: 0.2rem;
  padding-right: 0.8rem;
  background: var(--clr-60);
}

.artifact-buttons {
  display: flex;
  padding: 0.4rem;
}

.artifact-link {
  overflow-x: auto;
  padding: 0.2rem 1rem;
  width: 100%;
  background: var(--clr-50);
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
  border: 3px dashed var(--clr-50);
  display: flex;
  place-items: center;
  place-content: center;
}

button:hover {
  border: 3px dashed var(--clr-55);
  background-color: var(--clr-30);
}

[icon='lucide:plus'] {
  color: var(--clr-95);
}

button:hover [icon='lucide:plus'] {
  color: var(--clr-inv-200);
}
</style>
