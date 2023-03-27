<script lang="ts">
  import { dev } from '$app/environment'
  import { base } from '$app/paths'
  import { AUTHOR_NAME } from '$lib/config'

  const getGithubStars = async () => {
    if (dev) return 0
    try {
      const response = await fetch(
        'https://api.github.com/repos/santigo-zero/santigo-zero.github.io'
      )
      if (!response.ok) {
        throw new Error('Network response was not ok.')
      }
      const data = await response.json()
      return data.stargazers_count
    } catch (error) {
      console.error(error)
      return 0
    }
  }

  let ghStars = 0
  getGithubStars().then(stars => (ghStars = stars))

  const browseItems = [
    { label: 'Home', href: `${base}/` },
    { label: 'Blog', href: `${base}/blog` },
    { label: 'Projects', href: `${base}/projects` },
    { label: 'About', href: `${base}/about` },
    { label: 'Contact', href: `${base}/contact` },
  ]
</script>

<footer class="top-layer-reverse artifact">
  <div class="footer-end">
    <section>
      <a
        href="https://github.com/santigo-zero"
        aria-label="Link to my GitHub profile"
        title="Link to my GitHub profile">
        <small>
          Designed & Built with <iconify-icon icon="lucide:heart" />
          by
          <address>{AUTHOR_NAME}</address>
        </small>
      </a>

      <a
        href="https://github.com/santigo-zero/santigo-zero.github.io"
        aria-label="Link to git repository for this site at Github"
        title="Link to git repository for this site at Github">
        Repository <iconify-icon
          aria-label="GitHub icon"
          role="img"
          icon="simple-icons:github" />
        <div aria-orientation="vertical" role="separator">--</div>
        <iconify-icon icon="lucide:star" />
        <var
          style="font-family: monospace"
          aria-label="Amount of stars in the GitHub repository"
          title="Amount of stars in the GitHub repository">
          {ghStars}
        </var>
      </a>

      <small class="copyright">
        (c) {new Date().getFullYear()} -- present
        <div aria-orientation="vertical" role="separator">•</div>
        All Rights Reserved
        <div aria-orientation="vertical" role="separator">•</div>
        GPL-3.0
      </small>
    </section>
  </div>
</footer>

<style>
  a {
    display: flex;
    place-items: center;
  }

  section {
    display: flex;
    min-height: 60px;
    /* font-size: 18px; */
    margin-inline: auto;
  }

  a,
  small {
    font-size: inherit;
  }

  section {
    width: min(100% - clamp(2rem, 5vw, 3rem), var(--lg));
  }

  .footer-end {
    display: flex;
    place-content: center;
    background-color: var(--clr-bg-600);
  }

  .footer-end section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    place-items: center;
    gap: 1.6rem;
    padding: 2rem 0;
  }

  .copyright {
    display: flex;
    flex-wrap: wrap;
    place-content: center;
  }

  small,
  a {
    display: flex;
    place-items: center;
    /* This centers the icons */
    gap: 0.5ch;
    color: inherit;
  }

  @media screen and (min-width: 90rem) {
    .footer-end section {
      flex-direction: row;
      padding: 0;
    }
  }
</style>
