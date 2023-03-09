<script lang="ts">
  import { dev } from '$app/environment';
  import { AUTHOR, AUTHOR_NAME } from '$lib/config';

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
  <div id="main-footer">
    <section class="upper wider">
      <div class="services">
        My services
        <ol>
          <li>Web Design</li>
        </ol>
      </div>
      <ul>
        <li>
          <a
            href="https://github.com/santigo-zero/"
            aria-label="Link to my GitHub profile">GitHub</a>
        </li>
        <li>
          <a
            href="https://github.com/santigo-zero/"
            aria-label="Link to my GitHub profile">GitHub</a>
        </li>
        <li>
          <a
            href="https://github.com/santigo-zero/"
            aria-label="Link to my GitHub profile">GitHub</a>
        </li>
        <li>
          <a
            href="https://github.com/santigo-zero/"
            aria-label="Link to my GitHub profile">GitHub</a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/santiago-gonzalez-62557221b/"
            aria-label="Link to my LinkedIn profile">
            LinkedIn</a>
        </li>
      </ul>
      <div class="aboutme">
        <h3>{AUTHOR}</h3>
        <h3>
          I'm a web developer with a purpose, bring accessibility to the web.
        </h3>
      </div>
    </section>
    <div class="wrapper-bottom">
      <section class="bottom wider">
        <div class="copyright">
          <small>
            (c) {new Date().getFullYear()}
            <div aria-orientation="vertical" role="separator">•</div>
            All Rights Reserved
            <div aria-orientation="vertical" role="separator">•</div>
            GPL-3.0
          </small>
        </div>

        <a
          href="https://github.com/santigo-zero/santigo-zero.github.io"
          aria-label="Link to git repository for this site at Github">
          Repository <iconify-icon
            aria-label="GitHub icon"
            role="img"
            icon="simple-icons:github" />
          <div aria-orientation="vertical" role="separator">-</div>
          <iconify-icon icon="lucide:star" />
          <var aria-label="Amount of stars in the GitHub repository">
            {ghStars}
          </var>
        </a>

        <a
          href="https://github.com/santigo-zero/santigo-zero.github.io"
          aria-label="Link to git repository for this site at Github">
          <small
            >Designed & Built with <iconify-icon icon="lucide:heart" /> by
            <address>{AUTHOR_NAME}</address>
          </small>
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
    background-color: var(--clr-bg-600);
  }

  .bottom {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 1.5rem 0;
  }

  .bottom a {
    display: flex;
    place-items: center;
    justify-content: center;
    flex-wrap: wrap;
    /* flex-direction: column; */
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
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5ch;
  }

  @media screen and (max-width: 48rem) {
    .bottom {
      justify-content: space-around;
    }
  }
</style>
