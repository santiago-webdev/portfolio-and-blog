<script lang="ts">
  import { dev } from '$app/environment';

  const getGithubStars = async () => {
    if (dev) return 0;
    try {
      const response = await fetch(
        'https://api.github.com/repos/santigo-zero/santigo-zero.github.io'
      );
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      return data.stargazers_count;
    } catch (error) {
      console.error(error);
      return 0;
    }
  };

  let ghStars = 0;
  getGithubStars().then(stars => (ghStars = stars));
</script>

<footer class="banner-reverse artifact-ui">
  <section class="upper wider">
    <small
      >Designed & Built with <iconify-icon icon="lucide:heart" /> by Santiago</small
    >
    <a href="https://github.com/santigo-zero/santigo-zero.github.io"
      >Repository at<iconify-icon icon="lucide:github" />-
      <iconify-icon icon="lucide:star" />
      <span>
        {ghStars}
      </span>
    </a>
  </section>
  <section class="bottom wider">
    <div class="copyright">
      <small>© GPL-3.0 Santiago Gonzalez</small>
      <small>2023. All Rights Reserved</small>
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
      <!-- TODO(santigo-zero): Add my email here -->
    </ul>
  </section>
</footer>

<style>
  a {
    display: flex;
    place-items: center;
  }

  a:hover span::before {
    content: 'nth(';
  }

  a:hover span::after {
    content: ')';
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

  small,
  a {
    display: flex;
    place-items: center;
    gap: 0.5ch;
  }

  @media screen and (max-width: 48rem) {
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
