<script>
import { base } from '$app/paths';
import ShapeButton from '$lib/components/navigation/ShapeButton.svelte';

const stack = ['JS/TS (ES6+)', 'SvelteKit', 'SQL', 'Python', 'React', 'Node.js'];
</script>

<div class="container-cta">
  <div class="about">
    <h2 class="font-fluid-1">About</h2>
    <p>
      Hello, my name is Santiago, a web developer based in Argentina interested in
      <em>FOSS</em>,
      <em>UI/UX</em> and
      <em>Linux</em>.
    </p>
    <p>
      I enjoy crafting effective and user-friendly interfaces, focusing in
      <em>maintainability</em>,
      <em>accessibility</em> and
      <em>progressive enhancement</em>.
    </p>
    <ul>
      {#each stack as individual}<li>{individual}</li>{/each}
    </ul>
    <ShapeButton class="reverse" href="{base}/about">More about me</ShapeButton>
  </div>
  <div id="contact" class="contact">
    <h2 class="font-fluid-1">Contact</h2>
    <p>The form does nothing at the moment :D</p>
    <!-- <p>Feel free to reach out to me at any time</p> -->
    <form action="process_form.php" method="POST">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label for="message">Message:</label>
      <textarea id="message" name="message" rows="4" required />
    </form>
  </div>
</div>

<style>
.container-cta {
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  width: min(100% - 2rem, var(--lg));
  margin: 4rem 0;
  border-radius: 0.75rem;
  margin-inline: auto;
}

.about,
.contact {
  flex: 1;
  padding: 1rem;
}

.about {
  display: grid;
  place-items: start;
  grid-template-rows: auto auto auto 1fr;
}

.about * + * {
  margin-block-start: 1rem;
}

ul {
  columns: 2;
  list-style: disc;
  list-style-position: inside;
  margin-bottom: 3rem;
}

.contact {
  background: var(--srf-3);
  border: 1px var(--srf-3) solid;
  border-top-color: var(--srf-3-brd);
  border-left-color: var(--srf-3-brd);
  border-radius: 1rem;
}

.contact p {
  margin-top: 0.5rem;
}

form {
  display: grid;

  margin-top: 1rem;
}

textarea,
input {
  background: var(--srf-4);
  border: 1px var(--srf-4) solid;
  border-top-color: var(--srf-4-brd);
  border-left-color: var(--srf-4-brd);
  padding: 0.75rem 1rem;
  margin-top: 0.25rem;
  border-radius: 0.75rem;
  display: flex;
}

textarea {
  resize: none;
}

label {
  margin-top: 1rem;
}

@media screen and (min-width: 48rem) {
  .container-cta {
    background: var(--srf-2);
    border: 1px var(--srf-2) solid;
    border-top-color: var(--srf-2-brd);
    border-left-color: var(--srf-2-brd);
    padding: 3rem;
  }

  .about,
  .contact {
    padding: 2rem;
  }
}
</style>
