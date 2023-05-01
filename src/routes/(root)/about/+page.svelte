<script lang="ts">
  import { base } from '$app/paths'
  import LinkRoundButton from '$lib/components/navigation/LinkRoundButton.svelte'
  import LinkUI from '$lib/components/navigation/LinkUI.svelte'

  const tools = [
    { name: 'HTML', icon: 'logos:html-5' },
    { name: 'CSS3', icon: 'logos:css-3' },
    { name: 'Javascript', icon: 'logos:javascript' },
    { name: 'Typescript', icon: 'logos:typescript-icon' },
    { name: 'CSS Modules', icon: 'simple-icons:cssmodules' },
    { name: 'Git', icon: 'mdi:git' },
    { name: 'Figma', icon: 'ph:figma-logo' },
    { name: 'React', icon: 'logos:react' },
    { name: 'NextJS', icon: 'logos:nextjs' },
    { name: 'Svelte', icon: 'logos:svelte' },
    { name: 'SvelteKit', icon: 'logos:svelte-kit' },
    { name: 'Podman', icon: 'simple-icons:podman' },
    { name: 'Docker', icon: 'logos:docker' },
    { name: 'Java', icon: 'logos:java' },
    { name: 'Python', icon: 'logos:python' },
    { name: 'MySQL', icon: 'logos:mysql' },
    { name: 'SQLite', icon: 'vscode-icons:file-type-sqlite' },
    { name: 'PostgreSQL', icon: 'logos:postgresql' },
    { name: 'Systemd', icon: 'vscode-icons:file-type-systemd' },
  ]
</script>

<div
  style="width: min(92%, var(--md)); margin-inline: auto"
  class="wrapper-back-navigation-button">
  <LinkUI orientation="left" href="{base}/" class="font-3">Home</LinkUI>
</div>
<main>
  <div class="text-about">
    <h1 class="font-fluid-md">About</h1>
    <span class="font-fluid-xs">Hello again!</span>
    <p class="font-fluid-sm">
      Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
      labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.
    </p>

    <p>All of my projects can be found here:</p>
    <LinkRoundButton href="{base}/projects" class="shiny hover">
      What I've built
    </LinkRoundButton>
  </div>
  <div class="img-wrapper">
    <img src="/alleged-photo-of-myself.webp" alt="" />
  </div>
</main>
<section>
  <div class="random">
    <div class="random-intro">
      <h2 class="font-fluid-bs">
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
      </h2>
      <p style="color: var(--clr-90)" class="font-fluid-bs">
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
      </p>
    </div>
    <div class="random-cards">
      <ul>
        <li class="shiny">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="var(--clr-orange-50)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.2"
              d="m9 9l5 12l1.774-5.226L21 14L9 9zm7.071 7.071l4.243 4.243M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>
          <h3 class="font-6">Test</h3>
          <p style="color: var(--clr-95)" class="font-4">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          </p>
        </li>
        <li class="shiny">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="var(--clr-purple-20)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.2">
              <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
              <path d="M12 18h.01" />
            </g>
          </svg>
          <h3 class="font-6">Mobile First Design</h3>
          <p style="color: var(--clr-95)" class="font-4">
            I have gotten used to this desing approach, all my pages start this
            way.
          </p>
        </li>
      </ul>
      <ul>
        <li class="shiny">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="var(--clr-blue-20)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.2">
              <path
                d="M21.54 15H17a2 2 0 0 0-2 2v4.54M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
              <circle cx="12" cy="12" r="10" />
            </g>
          </svg>
          <h3 class="font-6">For the web</h3>
          <p style="color: var(--clr-95)" class="font-4">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          </p>
        </li>
        <li class="shiny">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="var(--clr-red-40)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.2">
              <path
                d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1" />
              <circle cx="12" cy="8" r="2" />
              <path
                d="M12 10v12m0 0c4.2 0 7-1.667 7-5c-4.2 0-7 1.667-7 5Zm0 0c-4.2 0-7-1.667-7-5c4.2 0 7 1.667 7 5Z" />
            </g>
          </svg>
          <h3 class="font-6">Test</h3>
          <p style="color: var(--clr-95)" class="font-4">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          </p>
        </li>
      </ul>
    </div>
  </div>
  <div class="worked-at">
    <h2>Where I've worked</h2>
  </div>
  <div class="technologies">
    <h2>Technology I use</h2>
    <p>
      These are some of the tools I had used in the past (but am not limited
      to):
    </p>
    <div class="tools-i-use">
      {#each tools as tool}
        <span><iconify-icon icon={tool.icon} />{tool.name}</span>
      {/each}
    </div>
  </div>
</section>

<style>
  main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 10rem), 1fr));
    gap: 2rem 0;
    margin: 2rem 0;

    /* place-items: center; */
    /* place-content: center; */
    /* place-self: center; */
    /* justify-items: center; */
    /* justify-content: center; */
    /* justify-self: center; */
    /* align-items: center; */
    /* align-content: center; */
    /* align-self: center; */

    width: min(92%, var(--md));
    margin-inline: auto;
    /* outline: 3px hotpink solid; */
  }

  .text-about {
    display: grid;
    gap: 1rem;
    grid-column: span 4;
  }

  .img-wrapper {
    /* outline: 3px crimson solid; */
    width: 100%;
    grid-column: span 2;
    margin-inline: auto;
    display: grid;

    place-items: center;
    /* place-content: center; */
    /* place-self: center; */
    /* justify-items: center; */
    /* justify-content: center; */
    /* justify-self: center; */
    /* align-items: center; */
    /* align-content: center; */
    /* align-self: center; */
  }

  img {
    /* flex: 1; */
    border: 8px solid var(--clr-45);
    object-fit: cover;
    aspect-ratio: 1;
    max-width: 20rem;
    max-height: 20rem;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  section {
    display: flex;
    flex-flow: column wrap;
    gap: 1rem;

    width: min(100% - 1rem, var(--lg));
    margin-inline: auto;
  }

  .random {
    display: flex;
    gap: 2rem;
    margin: 3rem 0;
    flex-flow: row wrap;
  }

  .random-intro {
    /* background-color: crimson; */
    flex: 4;
    display: flex;
    flex-flow: row wrap;
    place-content: center;
  }

  .random-cards {
    flex: 6;
    display: flex;
    flex-flow: row wrap;
    gap: 2rem;
  }

  .random-cards ul {
    display: grid;
    gap: 2rem;
    flex: 1;
  }

  .random-cards ul li {
    min-width: 15rem;
    background-color: var(--clr-30);
    padding: 2.2rem;
    gap: 0.6rem;
    display: grid;
    place-items: start;
    border-radius: 1.2rem;
    min-height: 20rem;
  }

  .random-cards ul:first-child {
    margin-bottom: 3rem;
  }

  .random-cards ul:last-child {
    margin-top: 3rem;
  }

  .technologies {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    width: min(100% - 1rem, var(--base));
  }

  .technologies span {
    display: flex;
    place-items: center;
    border: 2px solid var(--clr-95);
    border-radius: 1rem;
    padding: 0.6rem 1.2rem;
    gap: 0.6rem;
  }

  .tools-i-use {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }
</style>
