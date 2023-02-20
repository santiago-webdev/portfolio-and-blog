<script lang="ts">
  import { dev } from '$app/environment';
  import { onMount } from 'svelte';
  var ghStars = 0; // Use 0 in here so that it doesn't show "undefined" while it loads

  let start_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21L12 17.27Z"/></svg>'

  onMount(async () => {
    if (!dev) {
      const response = await fetch(
        'https://api.github.com/repos/santigo-zero/santigo-zero.github.io'
      );
      const character = await response.json();
      ghStars = character.stargazers_count;
    }
  });
</script>

<footer class="artifact-ui">
  <section class="upper wider">
    <small>Designed & Built with &lt;3 by Santiago</small>

    <!-- <a href="https://github.com/santigo-zero/santigo-zero.github.io" -->
    <!--   >nth({ghStars}) on GitHub</a -->
    <!-- > -->
    <a href="https://github.com/santigo-zero/santigo-zero.github.io"
    >GitHub Repo {@html start_icon}{ghStars}</a
    >
  </section>
  <section class="bottom wider">
    <div class="copyright">
      <small>© GPL-3.0 Santiago Gonzalez</small>
      <small>2022-2023. All Rights Reserved</small>
    </div>
    <ul>
      <!-- TODO(santigo-zero): Move all of this to #cta -->
      <li>
        <a href="https://github.com/santigo-zero/">GitHub @santigo-zero</a>
      </li>
      <li class="separator">•</li>
      <li>
        <a href="https://www.linkedin.com/in/santiago-gonzalez-62557221b/">
          LinkedIn</a
        >
      </li>
    </ul>
  </section>
</footer>

<style>
  /* TODO(santigo-zero): Fix this component entirely */
  footer {
    display: grid;
    place-items: center;
    gap: 2rem;
    background-color: var(--clr-background-alt);
  }

  a {
    display: flex;
    place-items: center;
  }

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;

    min-height: 60px;
    /* font-size: 18px; */
    margin-inline: auto;
  }

  ul {
    display: flex;
    place-items: center;
    flex-direction: row;
    gap: 0.6rem;
  }

  .bottom {
    flex-wrap: wrap;
    gap: 1rem;
  }

  .copyright {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  @media screen and (max-width: 43.75em) {
    .upper,
    .bottom {
      flex-direction: column-reverse;
      gap: 1rem;
      text-align: center;
    }

    .separator {
      display: none;
    }

    ul {
      flex-direction: column;
    }
  }
</style>
