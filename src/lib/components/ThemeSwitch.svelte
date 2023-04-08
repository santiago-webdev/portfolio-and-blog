<script lang="ts">
  import { onMount } from 'svelte'

  type Theme = 'system' | 'system-light' | 'dark' | 'light'
  let theme: Theme = 'system',
    prefers_light = true

  function toggleTheme() {
    switch (theme) {
      case 'system':
      case 'system-light':
        theme = 'dark'
        break
      case 'dark':
        theme = 'light'
        break
      case 'light':
        if (prefers_light) theme = 'system-light'
        else theme = 'system'
        break
      default:
        return (prefers_light && 'system-light') || 'system'
    }
  }

  function setThemeCookie() {
    const ONE_YEAR_IN_MS = 31_536_000_000 // number of milliseconds in one year
    const expireDate = new Date(Date.now() + ONE_YEAR_IN_MS) // set expiration date to one year from now
    document.cookie = `theme=${theme}; expires=${expireDate.toUTCString()}; path=/; SameSite=None; secure=true;`
  }

  function click() {
    toggleTheme()
    document.documentElement.dataset.theme = theme
    setThemeCookie()
  }

  onMount(() => {
    let doc = document.documentElement.dataset
    theme = doc.theme as Theme

    prefers_light = !window.matchMedia('(prefers-color-scheme: dark)').matches
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event: MediaQueryListEvent) => {
        prefers_light = !event.matches

        if (!theme.startsWith('system')) return
        event.matches ? (theme = 'system') : (theme = 'system-light')
        doc.theme = theme
      })
  })
</script>

<button class="shiny" on:click={click}>
  <div class="theme-wrapper">
    <iconify-icon width="24" id="sun" icon="lucide:sun" />
    <iconify-icon width="24" id="moon" icon="lucide:moon" />
    <iconify-icon width="24" id="system" icon="mdi:circle-half-full" />
  </div>
  Theme
</button>

<style>
  button {
    /* cursor: pointer; */
    border-radius: 0.8rem;
    overflow: hidden;
    /* height: 2.4rem; */
    /* width: 2.4rem; */
    display: flex;
    flex-flow: row;
    padding: 0.4rem 0.8rem;
    gap: 0.4rem;
  }

  .theme-wrapper {
    /* height: 100%; */
    /* width: 100%; */
    /* margin-inline: auto; */
    position: relative;

    display: flex;

    place-content: center;
    place-items: center;
  }

  iconify-icon:first-child {
    position: absolute;
  }

  iconify-icon:nth-child(2) {
    position: absolute;
  }

  iconify-icon {
    pointer-events: none;
    /* margin-inline: auto; */
    display: flex;
    transition: all 300ms cubic-bezier(0.3, 0, 0.3, 1);
  }

  #system {
    color: var(--txt-A);
    transform: translateX(15rem);
  }

  :global([data-theme='system'] #system),
  :global([data-theme='system-light'] #system) {
    transform: translateX(0);
  }

  #sun {
    color: orangered;
    transform: rotate(90deg);
    transform-origin: 50% 6rem;
  }

  :global([data-theme='light'] #sun) {
    transform: rotate(0deg);
  }

  #moon {
    color: orange;
    transform: rotate(-90deg);
    transform-origin: -50% -6rem;
  }

  :global([data-theme='dark'] #moon) {
    transform: rotate(0deg);
  }
</style>
