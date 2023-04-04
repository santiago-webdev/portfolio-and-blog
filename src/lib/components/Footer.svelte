<script lang="ts">
  import { dev } from '$app/environment'
  import { base } from '$app/paths'
  import { page } from '$app/stores'

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

  const donateItems = [
    {
      name: 'Bitcoin(BEP20)',
      logo: 'bitcoin',
      direction: '0x3f8347d947c5bbdd166013e01ec4b645883e0fbb',
    },
  ]

  const browseItems = [
    { label: 'Home', href: `${base}/` },
    { label: 'Blog', href: `${base}/blog` },
    { label: 'Projects', href: `${base}/projects` },
    { label: 'About', href: `${base}/about` },
    { label: 'Contact', href: `${base}/contact` },
  ]
</script>

<footer class="ff-sz-900 top-layer-reverse">
  <div class="footer-start">
    <section>
      <div class="ff-sz-700 shiny aboutme">
        <img src="/logo.svg" alt="My personal logo" title="My personal logo" />
        <h3>Santiago Gonzalez</h3>
        <p class="ff-sz-700">
          I'm a web developer that can help you craft accessible website
          experiences without leaving the aesthetics aside.
        </p>
      </div>

      <div class="browse">
        <h3>Browse</h3>
        <hr />
        {#each browseItems as item}
          <a
            class="shiny-select"
            aria-current={item.href === $page.url.pathname ||
            ($page.url.pathname.startsWith(item.href || '') &&
              `/` !== item.href)
              ? 'page'
              : undefined}
            aria-label="Link to {item.label}"
            href={item.href}>{item.label}</a>
        {/each}
      </div>

      <div class="donate">
        <h3>Donate</h3>
        <hr />
        <ul>
          {#each donateItems as item}
            <li>
              <a class="shiny-select" href="bitcoin:{item.direction}">
                <address>
                  <iconify-icon icon="simple-icons:{item.logo}" />
                  {item.name}
                </address>
              </a>
              <button
                class="shiny-select"
                aria-label="Copy the direction of the wallet"
                title="Copy the direction of the wallet"
                on:click={() =>
                  navigator.clipboard
                    .writeText(item.direction)
                    .then(() => console.log('Text copied to clipboard'))
                    .catch(error =>
                      console.error('Could not copy text: ', error)
                    )}><iconify-icon icon="lucide:clipboard-copy" /></button>
            </li>
          {/each}
        </ul>
      </div>

      <div class="contact">
        <h3>Contact</h3>
        <hr />
        <address>
          <a
            target="_blank"
            class="shiny-select"
            href="mailto:santiagogonzalezbogado@gmail.com">
            <iconify-icon icon="lucide:mail" />
            Email me</a>
        </address>
        <address>
          <a
            target="_blank"
            class="shiny-select"
            href="https://github.com/santigo-zero/">
            <iconify-icon
              aria-label="GitHub icon"
              role="img"
              icon="simple-icons:github" />
            GitHub profile</a>
        </address>
        <address>
          <a
            target="_blank"
            class="shiny-select"
            href="https://www.linkedin.com/in/santiago-gonzalez-62557221b/">
            <iconify-icon icon="simple-icons:linkedin" />LinkedIn profile
          </a>
        </address>
      </div>
    </section>
  </div>
  <div class="footer-end">
    <section>
      <a
        target="_blank"
        href="https://github.com/santigo-zero"
        aria-label="Link to my GitHub profile"
        title="Link to my GitHub profile">
        <small>
          Designed & Built with <iconify-icon icon="lucide:heart" />
          by
          <address>Santiago</address>
        </small>
      </a>

      <a
        target="_blank"
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
          style="margin-top: 1px"
          aria-label="Amount of stars in the GitHub repository"
          title="Amount of stars in the GitHub repository">
          {ghStars}
        </var>
      </a>

      <small class="copyright">
        (c) {new Date().getFullYear()} -- present
        <div aria-orientation="vertical" role="separator">•</div>
        All rights reserved
        <div aria-orientation="vertical" role="separator">•</div>
        GPL-3.0
      </small>
    </section>
  </div>
</footer>

<style>
  small,
  button,
  li,
  a {
    display: flex;
    place-items: center;
    gap: 0.5ch;
    font-size: inherit;
    color: inherit;
  }

  section {
    display: flex;
    margin-inline: auto;
    width: min(100% - clamp(2rem, 5vw, 3rem), var(--lg));
  }

  .footer-start section {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    padding: clamp(1rem, 3vw, 2rem) 0;
    gap: 2rem;
  }

  .footer-start h3 {
    font-variation-settings: 'wght' 600;
    font-size: 110%;
    text-indent: 0.6rem;
  }

  .footer-start hr {
    margin-left: 0.6rem;
    color: var(--dim-250);
    border: 1px solid var(--dim-250);
    width: 95%;
  }

  .aboutme h3 {
    text-indent: 0;
  }

  .shiny-select {
    border-radius: 0.6rem;
  }

  .footer-start p,
  .footer-start a {
    color: var(--dim-700);
  }

  .footer-start img {
    width: 50%;
    margin-inline: auto;
  }

  .aboutme {
    display: flex;
    position: relative;
    place-content: center;
    flex-flow: column wrap;
    flex: 2;
    gap: 1rem;
    --background: var(--bg-500);
    --border: var(--bg-600);
    padding: 2rem 0;
    border-radius: 1rem;
  }

  .aboutme:after {
    content: '';
    position: absolute;
    pointer-events: none;
    display: none;
    width: 100%;
    height: 100%;
    opacity: 0.05;
    background-image: url('/logo.svg');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 50% 75%;
  }

  .browse {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .donate {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .donate address {
    display: flex;
    place-items: center;
    gap: 0.5ch;
    padding: 0;
    border-radius: 0;
  }

  .contact {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  @media screen and (min-width: 64rem) {
    .footer-start section {
      flex-direction: row;
    }

    .footer-start img {
      display: none;
    }

    .aboutme:after {
      display: block;
    }
  }

  .footer-end {
    display: flex;
    place-content: center;
    background-color: var(--bg-600);
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

  @media screen and (min-width: 64rem) {
    .footer-end section {
      flex-direction: row;
      padding: 1rem 0;
    }
  }
</style>
