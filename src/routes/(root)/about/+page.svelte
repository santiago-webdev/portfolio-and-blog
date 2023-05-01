<script lang="ts">
  import { base } from '$app/paths'
  import LinkInText from '$lib/components/navigation/LinkInText.svelte'
  import LinkRoundButton from '$lib/components/navigation/LinkRoundButton.svelte'
  import LinkUI from '$lib/components/navigation/LinkUI.svelte'
  import site from '$lib/site.json'

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

<div class="wrapper-back-navigation-button">
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
<section class="aboutme-extension">
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
        <h3 class="font-6">As a developer</h3>
        <p class="font-4">
          I enjoy crafting simple interfaces, focusing in
          <em>maintainability</em>, <em>accessibility</em> and
          <em>progressive enhancement</em>.
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
            stroke="var(--clr-green-50)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.2">
            <path d="M7 20h10m-7 0c5.5-2.5.8-6.4 3-10" />
            <path
              d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7c-2 .4-3.5.4-4.8-.3c-1.2-.6-2.3-1.9-3-4.2c2.8-.5 4.4 0 5.5.8zM14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4c1-1 1.6-2.3 1.7-4.6c-2.7.1-4 1-4.9 2z" />
          </g>
        </svg>
        <h3 class="font-6">Lifetime learner</h3>
        <p class="font-4">
          You can check my journey in the <LinkInText href="{base}/blog">
            blog
          </LinkInText>, I try to pour all my knowledge there.
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
            stroke="var(--clr-purple-20)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.2">
            <path
              d="M21.54 15H17a2 2 0 0 0-2 2v4.54M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
            <circle cx="12" cy="12" r="10" />
          </g>
        </svg>
        <h3 class="font-6">For the web</h3>
        <p class="font-4">
          My set of skills is mostly to build the web, but I'm interested in
          <strong>Linux</strong>
          and
          <strong>UI/UX</strong>
          too.
        </p>
      </li>
      <li class="shiny">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="var(--clr-blue-20)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.2"
            d="M4 7V4h16v3M9 20h6M12 4v16" />
        </svg>
        <h3 class="font-6">In the workplace</h3>
        <p class="font-4">
          I consider myself to be T-shaped, putting all of my energy to be an
          all-rounder web developer.
        </p>
      </li>
    </ul>
  </div>
</section>
<div class="worked-at">
  <h2>Where I've worked</h2>
</div>
<div class="technologies">
  <h2>Technology I use</h2>
  <p>
    These are some of the tools I had used in the past (but am not limited to):
  </p>
  <div class="tools-i-use">
    {#each tools as tool}
      <span><iconify-icon icon={tool.icon} />{tool.name}</span>
    {/each}
  </div>
</div>

<svelte:head>
  <title>Santiago Gonzalez ∙ About Me</title>

  <!-- TODO(santigo-zero): meta tags for dynamic routing -->
  <!-- HTML Meta Tags -->
  <meta name="description" content={site.site.description} />

  <!-- Google / Search Engine Tags -->
  <meta itemprop="name" content={site.portfolio.title} />
  <meta itemprop="description" content={site.site.description} />
  <meta itemprop="image" content="" />
  <!-- TODO(santigo-zero): Add image -->

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content={site.portfolio.url} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={site.portfolio.title} />
  <meta property="og:description" content={site.site.description} />
  <meta property="og:image" content="" />
  <!-- TODO(santigo-zero): Add image -->

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={site.portfolio.title} />
  <meta name="twitter:description" content={site.site.description} />
  <meta name="twitter:image" content="" />
  <!-- TODO(santigo-zero): Add image -->
</svelte:head>

<style>
  .wrapper-back-navigation-button {
    width: min(92%, var(--md));
    margin-inline: auto;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 10rem), 1fr));
    gap: 2rem 0;
    margin-bottom: 2rem;

    width: min(92%, var(--md));
    margin-inline: auto;
  }

  .text-about {
    display: grid;
    gap: 1rem;
    grid-column: span 4;
  }

  .img-wrapper {
    grid-column: span 2;
    display: grid;
    place-items: center;
  }

  img {
    border: 8px solid var(--clr-45);
    object-fit: cover;
    max-width: 20rem;
    max-height: 20rem;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .aboutme-extension {
    display: flex;
    place-items: center;
    flex-flow: row wrap;
    gap: 2rem;
    margin: 3rem auto;
    width: min(92%, var(--xl));
    min-height: 100vh;
  }

  @media screen and (min-height: 80rem) {
    .aboutme-extension {
      min-height: 0;
    }
  }

  .random-intro {
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

  .random-cards ul li h3 {
    color: var(--clr-200);
  }

  .random-cards ul li p strong {
    color: var(--clr-150);
    font-variation-settings: 'wght' 800;
  }

  .random-cards ul li p {
    color: var(--clr-100);
    font-variation-settings: 'wght' 450;
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
