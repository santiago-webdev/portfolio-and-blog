<script lang="ts">
  import { base } from '$app/paths'
  import { page } from '$app/stores'
  import { navigationItems } from '$lib/components/navigation/store'
</script>

<div id="layout-contact">
  <div class="wrapper-contact">
    <section>
      <div class="contact-introduction">
        <a class="slide-backwards" href="{base}/">Home</a>
        <h1>Contact me</h1>
        WIP: This currently does not work
        <p>
          Feel free to contact me and I'll get back to you as soon as I can.
        </p>
      </div>

      <br />
      <form autocomplete="off">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="message">Message:</label>
        <textarea rows="3" id="message" name="message" required />

        <button class="reverse">Send email</button>
      </form>
    </section>
    <section>
      <p>You can also find me in this places</p>
      <address>
        <a
          target="_blank"
          class="shiny-select"
          href="https://github.com/santigo-zero/">
          <iconify-icon
            aria-label="GitHub icon"
            role="img"
            icon="simple-icons:github" />
          GitHub</a>

        <a
          target="_blank"
          class="shiny-select"
          href="https://www.linkedin.com/in/santiago-gonzalez-62557221b/">
          <iconify-icon icon="simple-icons:linkedin" />LinkedIn
        </a>
      </address>
      <footer>
        <hr />
        <br />
        <nav>
          {#each $navigationItems as item}
            {#if item.label !== 'Separator' && item.label !== 'Contact'}
              <a
                class="shiny-select"
                aria-current={item.href === $page.url.pathname ||
                ($page.url.pathname.startsWith(item.href || '') &&
                  `/` !== item.href)
                  ? 'page'
                  : undefined}
                aria-label="Link to {item.label}"
                href={item.href}>{item.label}</a>
            {/if}
          {/each}
        </nav>
      </footer>
    </section>
  </div>
</div>

<style>
  #layout-contact {
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: center;
    margin-inline: auto;

    min-height: 100vh;
    width: min(100% - 1rem, var(--md));
  }

  .wrapper-contact {
    --border: var(--sc-40);
    background-color: var(--sc-15);
    border: 1px solid var(--border);
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 38rem), 1fr));
    padding: 3rem;
    gap: 2rem;
    border-radius: 1.6rem;
  }

  section:first-child {
    display: flex;
    flex-flow: column wrap;
    place-content: center;
    gap: 2rem;
  }

  section:first-child p {
    --range: var(--fz-3);
    color: var(--sc-95);
  }

  section:last-child {
    width: 100%;
    display: grid;
    gap: 1rem;
    /* margin-inline: auto; */
    grid-template-rows: auto 1fr auto;
    justify-content: space-between;
    background-color: var(--sc-25);
    padding: 3rem;
    border-radius: 1.2rem;
  }

  section:last-child p {
    color: var(--sc-85);
    --range: var(--fz-2);
    margin-inline: 0.6rem;
  }

  section:last-child a {
    --range: var(--fz-2);
    color: var(--sc-100);
    font-variation-settings: 'wght' 500;
  }

  section:last-child address {
    display: flex;
    flex-flow: column wrap;
    grid-column: span 2;
  }

  section:last-child address a {
    display: flex;
    place-items: center;
    gap: 0.4rem;
  }

  form {
    display: grid;
    border-radius: 0.8rem;
    /* padding: 3rem; */
    gap: 1rem;
    font-variation-settings: 'wght' 600;
    color: var(--sc-150);
  }

  form button {
    max-width: max-content;
    margin-top: 1rem;
    border-radius: 1rem;
    padding: 0.6rem 1.2rem;
  }

  label {
    margin-inline: 1.2rem;
    /* transform: translateY(245%); */
  }

  input,
  textarea {
    width: 100%;
    border: none;
    padding: 1rem;
    border-radius: 0.8rem;
    background-color: var(--sc-25);
  }

  footer {
    grid-column: span 2;
    display: flex;
    flex-direction: column;
    place-items: center;
    gap: 1.2rem;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
  }

  nav a.shiny-select {
    color: var(--sc-85);
  }

  nav a.shiny-select:hover {
    color: var(--sc-150);
  }
</style>
