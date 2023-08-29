<script lang="ts">
import { dev } from '$app/environment';
import { page } from '$app/stores';
import { navigationItems } from '$lib/components/navigation/store';
import config from '$lib/config.json';

let ghStars = 0;

const getGithubStars = async () => {
  if (dev) return 0;
  try {
    const response = await fetch('https://api.github.com/repos/santigo-zero/portfolio-and-blog');
    if (!response.ok) throw new Error('Network response was not ok.');

    const data = await response.json();
    return data.stargazers_count;
  } catch (error) {
    console.error(error);
    return 0;
  }
};

getGithubStars().then((stars) => (ghStars = stars));
</script>

<footer>
  <header>
    <div class="whosthis">
      <h3>Santiago Gonzalez</h3>
      <p>Crafting accessible web experiences without leaving the aesthetics aside.</p>
    </div>

    <nav aria-label="footer-navigation">
      <h3 class="font-p">Sitemap</h3>
      <ul>
        {#each $navigationItems as item}
          {#if item.label !== 'Separator'}
            <li>
              <a
                class="selection"
                aria-current={item.href === $page.url.pathname ||
                ($page.url.pathname.startsWith(item.href || '') && `/` !== item.href)
                  ? 'page'
                  : undefined}
                aria-label="Link to {item.label}"
                href={item.href}>{item.label}</a
              >
            </li>
          {/if}
        {/each}
      </ul>
    </nav>

    <div class="projects">
      <h3 class="font-p">Projects</h3>
      <ul>
        <li>
          <a class="selection" target="_blank" href="https://zapzsh.org">Zap website</a>
        </li>
      </ul>
    </div>

    <div class="contact">
      <h3 class="font-p">Contact</h3>
      <address>
        <a class="selection" target="_blank" href="mailto:santiagogonzalezbogado@gmail.com">
          <iconify-icon icon="lucide:mail" />
          Email me</a
        >
      </address>
      <address>
        <a class="selection" target="_blank" href="https://github.com/santigo-zero/">
          <iconify-icon icon="simple-icons:github" />
          GitHub</a
        >
      </address>
      <address>
        <a
          class="selection"
          target="_blank"
          href="https://www.linkedin.com/in/santiago-gonzalez-62557221b/"
        >
          <iconify-icon icon="simple-icons:linkedin" />
          LinkedIn
        </a>
      </address>
    </div>
  </header>
  <div class="wrapper-bottom-footer">
    <section class="font-p">
      <a
        target="_blank"
        href="https://github.com/santigo-zero"
        aria-label="Link to my GitHub profile"
        title="Link to my GitHub profile"
      >
        <small>
          Designed & Built with <iconify-icon icon="lucide:heart" /> by
          <address>Santiago</address>
        </small>
      </a>

      <a
        target="_blank"
        href={config.landingpage.repo}
        aria-label="Link to git repository for this site at Github"
        title="Link to git repository for this site at Github"
      >
        Repository
        <iconify-icon width="24" height="24" icon="mdi:github" />
        <div aria-orientation="vertical" role="separator">-</div>
        <iconify-icon icon="lucide:star" />
        <var
          aria-label="Amount of stars in the GitHub repository"
          title="Amount of stars in the GitHub repository"
        >
          {ghStars}
        </var>
      </a>
      <small class="copyright">
        All rights reserved <iconify-icon icon="lucide:copyright" />
        {new Date().getFullYear()}
        <div aria-orientation="vertical" role="separator">&mdash;</div>
        GPL-3.0
      </small>
    </section>
  </div>
</footer>

<style>
footer {
  display: flex;
  flex-direction: column;
  place-content: center;
  background: var(--srf-3);
  border: thin var(--srf-3) solid;
  border-top-color: var(--srf-3-brd);
  border-left-color: var(--srf-3-brd);
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
}

footer :is(a, small) {
  display: flex;
  gap: 0.25rem;
  place-items: center;
}

header {
  display: grid;
  justify-content: space-between;
  padding: clamp(1rem, 3vw, 2rem) 0;
  gap: 2rem 1rem;
  width: min(100% - 2.2rem, var(--md));
  margin-inline: auto;
  grid-template-columns: repeat(8, 1fr);
}

header > * {
  display: flex;
  flex-direction: column;
}

.whosthis {
  position: relative;
  display: flex;
  flex-flow: column wrap;
  place-content: center;
  padding: 2.5rem;
  gap: 0.5rem;
  box-shadow: 4px 8px 8px 0 rgb(0 0 0 / 0.06);
  background: var(--srf-4);
  border: thin var(--srf-4) solid;
  border-top-color: var(--srf-4-brd);
  border-left-color: var(--srf-4-brd);
  border-radius: 1rem;
}

.whosthis p {
  width: min(100%, 30ch);
  max-width: var(--xs);
}

header h3:not(.whosthis h3) {
  font-weight: 500;
  padding: 0.5rem;
  padding-top: 0;
}

.whosthis:after {
  content: '';
  pointer-events: none;

  position: absolute;
  inset: 0;
  margin: auto;

  background-position: center;
  background-size: 100% 123%;
}

:global([data-theme='dark'] .whosthis:after),
:global([data-theme='system'] .whosthis:after) {
  opacity: 0.03;
  background-image: url('/logo.svg');
}

:global([data-theme='light'] .whosthis:after),
:global([data-theme='system-light'] .whosthis:after) {
  opacity: 0.1;
  background-image: url('/logo-light.svg');
}

.whosthis {
  grid-column: span 8;
}

nav,
.projects,
.contact {
  grid-column: span 4;
}

nav {
  grid-row: span 3;
}

@media screen and (min-width: 48rem) {
  nav {
    grid-row: auto;
  }
}

@media screen and (min-width: 64rem) {
  .projects,
  nav {
    order: 2;
  }

  .contact {
    order: 1;
  }

  .whosthis {
    order: 0;
  }

  header {
    grid-template-columns: repeat(12, 1fr);
  }
}

@media screen and (min-width: 80rem) {
  header {
    grid-template-columns: repeat(20, 1fr);
  }
}

.wrapper-bottom-footer {
  display: flex;
  place-content: center;
  background: var(--srf-4);
}

section :is(small, a) {
  font-family: var(--ff-ui);
  font-size: inherit;
  font-variation-settings: 'wght' 500;
  color: var(--text-2);
}

@media (hover: hover) {
  section a:hover,
  section a:hover > * {
    color: var(--clr-red-old);
  }
}

section {
  display: flex;
  flex-flow: column wrap;
  place-items: center;
  gap: 1rem;
  padding: 2.5rem 0;
  width: min(100% - 2rem, var(--md));
  margin-inline: auto;
}

small {
  display: inline-flex;
  flex-wrap: wrap;
  place-content: center;
}

@media screen and (min-width: 80rem) {
  section {
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem 0;
  }
}
</style>
