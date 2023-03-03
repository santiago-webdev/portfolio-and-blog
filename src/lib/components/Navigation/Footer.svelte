<script lang="ts">
  import { dev } from '$app/environment';

  const year = new Date().getFullYear();

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

<footer aria-labelledby="main-footer" class="banner-reverse artifact-ui">
  <div id="main-footer">
    <section class="upper wider">
      <div class="services">
        My services
        <ol>
          <li>Web Design</li>
        </ol>
      </div>
      <ul>
        <!-- TODO(santigo-zero): Move all of this to #cta -->
        <li>
          <a
            href="https://github.com/santigo-zero/"
            aria-label="Link to my GitHub profile">GitHub</a
          >
        </li>
        <li>
          <a
            href="https://github.com/santigo-zero/"
            aria-label="Link to my GitHub profile">GitHub</a
          >
        </li>
        <li>
          <a
            href="https://github.com/santigo-zero/"
            aria-label="Link to my GitHub profile">GitHub</a
          >
        </li>
        <li>
          <a
            href="https://github.com/santigo-zero/"
            aria-label="Link to my GitHub profile">GitHub</a
          >
        </li>
        <!-- <li class="separator">•</li> -->
        <li>
          <a
            href="https://www.linkedin.com/in/santiago-gonzalez-62557221b/"
            aria-label="Link to my LinkedIn profile"
          >
            LinkedIn</a
          >
        </li>
      </ul>
      <div class="aboutme">
        <h3>Santiago Gonzalez</h3>
        <h3>
          I'm a web developer with a purpose, bring accessibility to the web.
        </h3>
      </div>
    </section>
    <div class="wrapper-bottom">
      <section class="bottom wider">
        <div class="copyright">
          <small
            >(c) GPL-3.0 {year}
            <span class="separator">•</span>
            All Rights Reserved.</small
          >
        </div>
        <small
          >Designed & Built with <iconify-icon icon="lucide:heart" /> by Santiago</small
        >
        <a
          href="https://github.com/santigo-zero/santigo-zero.github.io"
          aria-label="Link to git repository for this site at Github"
          >Repository at<iconify-icon icon="lucide:github" />-
          <iconify-icon icon="lucide:star" />
          <span>
            {ghStars}
          </span>
        </a>
      </section>
    </div>
  </div>
</footer>

<style>
  footer {
    min-height: min(50vh, calc(var(--wide) / (16 / 9)));
    padding-bottom: 0;
  }

  #main-footer {
    display: grid;
    grid-template-rows: 1fr auto;
  }

  h3:last-child {
    font-weight: lighter;
    color: var(--clr-text-muted);
  }

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
    flex-direction: column;
    align-items: flex-start;
    padding: inherit;
    gap: 1.5rem;
  }

  .wrapper-bottom {
    width: 100%;
    background-color: var(--clr-background-alt-alt);
  }

  .bottom {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 1.5rem 0;
    color: var(--clr-text-muted);
  }

  .upper {
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(auto-fill, minmax(min(30ch, 100%), 1fr));
    padding: 1rem;
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
    .separator {
      display: none;
    }

    .bottom {
      justify-content: space-around;
    }
  }
</style>
