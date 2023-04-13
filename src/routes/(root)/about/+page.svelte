<script lang="ts">
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
  <button class="slide-backwards" on:click={() => history.back()}>
    Go Back
  </button>
  <section>
    <h1 style="--range: var(--fz-4)">About</h1>

    <h3 style="--range: var(--fz-3)">Hello again!</h3>
    <p>
      I started learning backend tools like Java and Python but after October of
      2022 I decided I wanted to be a frontend developer or more specifically a
      web developer. In my work you'll see reflected every bit of my life
      experiences applied.
    </p>
    <br />
    <h2 style="--range: var(--fz-4)">Technology I use</h2>
    <p>
      These are some of the tools I had used in the past (but am not limited
      to):
    </p>
  </section>

  <div class="i-use">
    {#each tools as tool}
      <span><iconify-icon icon={tool.icon} />{tool.name}</span>
    {/each}
  </div>
</main>

<style>
  button {
    display: flex;
    color: var(--sc-95);
    /* outline: 3px hotpink solid; */
  }

  main {
    display: flex;
    flex-flow: column wrap;
    place-content: center;
    place-items: start;
    background-color: var(--sc-15);
  }

  section {
    display: flex;
    flex-flow: column wrap;
    gap: 1rem;

    width: min(100% - 1rem, var(--base));
    margin-inline: auto;
  }

  section p {
    --range: var(--fz-3);
  }

  .i-use {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    width: min(100% - 1rem, var(--base));
  }

  span {
    --range: var(--fz-2);
    display: flex;
    place-items: center;
    border: 1px solid var(--sc-95);
    border-radius: 1rem;
    padding: 0.6rem 1.2rem;
    gap: 0.6rem;
  }
</style>
