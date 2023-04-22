<script lang="ts">
  import { base } from '$app/paths'
  import Forward from '$lib/components/Forward.svelte'
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

<main>
  <section>
    <LinkUI orientation="left" href="{base}/projects" classes="font-3">Home</LinkUI>
    <h1>About</h1>
    <span>Hello again!</span>
    <p>
      I started learning backend tools like Java and Python, but after October
      of 2022 I decided I wanted to be a front-end developer or more
      specifically a web developer. In my work you'll see reflected every bit of
      my life experiences applied.
    </p>

    <p>All of my projects can be found here:</p>
    <a class="shiny hover" href="{base}/" aria-label="Link to my projects"
      >What I've built
      <Forward />
    </a>
  </section>
</main>
<section>
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
  button {
    display: flex;
    color: var(--clr-95);
    /* outline: 3px hotpink solid; */
  }

  a {
    margin-top: 1rem;
    padding: clamp(1rem, 3vw, 2rem) clamp(2rem, 6vw, 3rem);
    width: max-content;
  }

  main {
    display: flex;
    flex-flow: column wrap;
    place-content: center;
    place-items: start;
    background-color: var(--clr-25);
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    background-color: var(--clr-25);
    min-height: 40vh;
    padding-bottom: 1rem;
  }

  section {
    display: flex;
    flex-flow: column wrap;
    gap: 1rem;

    width: min(100% - 1rem, var(--base));
    margin-inline: auto;
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
