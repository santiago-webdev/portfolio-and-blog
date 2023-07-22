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
      <!-- section { -->
      <!--   padding-top: 2.8rem; -->
      <!--   margin-inline: auto; -->
      <!--   width: min(96%, var(--lg)); -->
      <!--   display: grid; -->
      <!--   gap: 1.6rem; -->
      <!-- } -->
      <!---->
      <section class="flex-[6] pt-12 mx-auto max-w-screen-xl px-3 grid gap-6">
        <small>PORTFOLIO SHOWCASE &mdash;</small>
        <h1 class="font-fluid-2">
          {getCategoryInfo($currentGroupOfProjects).label} Projects
        </h1>
        <p class="font-h3 dark:text-dark-inv-600">
          {getCategoryInfo($currentGroupOfProjects).description}
        </p>
      </section>
      <form
        class="font-h3 flex-[4] flex flex-col flex-wrap place-items-center place-content-center gap-4"
      >
        <label for="projects flex flex-wrap mx-6">
          Filter by type of project
          <noscript>
            <small>Sorry Folks! This requires JavaScript to work!</small>
          </noscript>
        </label>
        <div
          class="border-t border-l border-t-solid border-l-solid rounded-xl drop-shadow
      dark:bg-dark-600 dark:border-dark-800 rounded-xl
      "
        >
          <select
            class="w-full dark:text-dark--inv-700 border-0 dark:bg-dark-600
            dark:text-dark-inv-700 py-2 px-6 rounded-xl"
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
  <section class="flex-[6] pt-12 mx-auto max-w-screen-xl px-3 grid gap-6">
    {#each $FilteredProjects as { name, description, category, stack, img, repo, link, case_study }}
      <article
        class="flex flex-col flex-wrap md:flex-row p-6 gap-8 rounded-3xl
 border-t border-l border-t-solid border-l-solid
        dark:bg-dark-400 dark:border-dark-600
        "
      >
        <figure
          class="flex-[5] aspect-video h-auto overflow-y-scroll border-solid border
          dark:border-dark-800 rounded-xl"
        >
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
            <div
              class="mx-auto overflow-x-auto py-1 px-4 dark:bg-dark-800 rounded-md"
            >
              <a
                class="max-w-max"
                href={link.toString()}
                target="_blank"
                rel="external">{link}</a
              >
            </div>
          </figcaption>
          <img
            style="max-inline-size: 100%; block-size: auto"
            loading="lazy"
            src={img}
            alt="Screenshot of {name}"
            title="Screenshot of {name}"
          />
        </figure>
        <div id="describe-{name}" class="flex-[6] gap-4 flex flex-col">
          <header class="flex flex-wrap gap-2">
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
            <div
              class="list-project-frontend flex flex-col gap-[1ch] xl:flex-row xl:place-items-center"
            >
              <h4 class="font-sub dark:text-dark-inv-700 font-bold min-w-[8ch]">
                Frontend:
              </h4>
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
            <div
              class="list-project-api flex flex-col gap-[1ch] xl:flex-row xl:place-items-center"
            >
              <h4 class="font-sub dark:text-dark-inv-700 font-bold min-w-[8ch]">
                API:
              </h4>
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
            <div
              class="list-project-backend flex flex-col gap-[1ch] xl:flex-row xl:place-items-center"
            >
              <h4 class="font-sub dark:text-dark-inv-700 font-bold min-w-[8ch]">
                Backend:
              </h4>
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
          <div
            class="mt-6 flex flex-col flex-nowrap gap-4 xl:flex-row xl:flex-wrap"
          >
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
        class="cursor-pointer flex-[5] w-full aspect-video place-items-center
rounded-xl hover:dark:bg-dark-600 border-2 border-dashed
hover:dark:border-palette-orange-50"
      >
        <iconify-icon width="30" height="30" icon="lucide:plus" />
      </button>
      <div id="describe-new-project" class="flex-[6] gap-4 flex flex-col">
        <header class="flex flex-wrap gap-2">
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
