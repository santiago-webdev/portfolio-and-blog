<script context="module">
  import { img } from '$lib/mdsvex_components/index'
  export { img }
</script>

<script lang="ts">
  import site from '$lib/site.json'
  import { page } from '$app/stores'
  import Hollow from './Hollow.svelte'
  import { readableDate, relativeTime } from '$lib/utils/utils'
  import { base } from '$app/paths'
  import LinkUI from './navigation/LinkUI.svelte'

  export let title = ''
  export let datetime = ''
  export let description = ''
  export let finished = false
  export let tags = ['']

  const symbol_javascript = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 128 128"><path fill="currentColor" d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401c-6.271 1.44-12.269.619-16.731-2.059c-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071c1.214 2.034 2.261 3.474 4.319 4.485c2.022.69 6.461 1.131 8.175-2.427c1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152c.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176c-1.916-2.165-3.117-3.296-4.26-5.795c4.819-2.772 4.819-2.772 9.508-5.485c2.547 3.915 4.902 6.068 9.139 6.949c5.748.702 11.531-1.273 10.234-7.378c-1.333-4.986-11.77-6.199-18.873-11.531c-7.211-4.843-8.901-16.611-2.975-23.335c1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355c.904.916 1.642 1.904 3.022 4.045c-3.772 2.404-3.76 2.381-9.163 5.879c-1.154-2.486-3.069-4.046-5.093-4.724c-3.142-.952-7.104.083-7.926 3.403c-.285 1.023-.226 1.975.227 3.665c1.273 2.903 5.545 4.165 9.377 5.926c11.031 4.474 14.756 9.271 15.672 14.981c.882 4.916-.213 8.105-.38 8.581z"/></svg>`
  const symbol_typescript = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 128 128"><path fill="currentColor" d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 0 1 7.82 4.5a20.58 20.58 0 0 1 3 4c0 .16-5.4 3.81-8.69 5.85c-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 0 0-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 0 0 .54 2.34c.83 1.73 2.38 2.76 7.24 4.86c8.95 3.85 12.78 6.39 15.16 10c2.66 4 3.25 10.46 1.45 15.24c-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 0 1-9.52-.1A23 23 0 0 1 80 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 0 1 1.15-.73l4.6-2.64l3.59-2.08l.75 1.11a16.78 16.78 0 0 0 4.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 0 0 .69-6.92c-1-1.39-3-2.56-8.59-5c-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 0 1-3.43-6.25a25 25 0 0 1-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 0 1 9.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 0 1 .14-5.16c.06-.08 10-.12 22-.1h21.81z"/></svg>`
  const symbol_svelte = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 128 128"><path fill="currentColor" d="M110.293 16.914C98.586-.086 75.668-5 58.02 5.707l-29.856 18.98a33.94 33.94 0 0 0-15.418 22.938a35.543 35.543 0 0 0 3.566 23.102a33.01 33.01 0 0 0-5.066 12.793a36.517 36.517 0 0 0 6.191 27.52c11.727 16.96 34.583 21.897 52.27 11.312l29.879-19a34.025 34.025 0 0 0 15.355-22.938a35.44 35.44 0 0 0-3.586-23.02c7.938-12.456 7.52-28.48-1.062-40.48zm-55.254 95.773a23.645 23.645 0 0 1-25.394-9.433c-3.461-4.793-4.73-10.711-3.73-16.586l.585-2.832l.54-1.75l1.605 1.062c3.52 2.668 7.46 4.582 11.668 5.875l1.082.375l-.122 1.067c-.105 1.48.332 3.144 1.188 4.414c1.75 2.52 4.793 3.73 7.727 2.937c.644-.207 1.273-.418 1.812-.754l29.754-18.976c1.5-.961 2.457-2.398 2.832-4.106c.328-1.773-.106-3.585-1.066-5.02c-1.774-2.46-4.793-3.565-7.727-2.831c-.645.226-1.332.48-1.879.812l-11.25 7.145c-10.644 6.328-24.394 3.355-31.46-6.832a21.854 21.854 0 0 1-3.75-16.586a20.643 20.643 0 0 1 9.456-13.875l29.692-18.98c1.875-1.168 3.894-2.02 6.082-2.668c9.605-2.5 19.726 1.27 25.394 9.394a22.027 22.027 0 0 1 3.043 19.398l-.543 1.77l-1.539-1.062a39.399 39.399 0 0 0-11.727-5.875l-1.066-.313l.106-1.066c.105-1.563-.332-3.207-1.188-4.48c-1.754-2.52-4.793-3.583-7.727-2.833c-.644.211-1.273.418-1.812.754L45.812 49.977c-1.5 1-2.46 2.394-2.773 4.144c-.312 1.707.106 3.582 1.066 4.957c1.708 2.524 4.81 3.586 7.688 2.832c.687-.207 1.332-.414 1.855-.75l11.375-7.254c1.856-1.226 3.938-2.12 6.067-2.707c9.668-2.52 19.75 1.274 25.394 9.438c3.461 4.793 4.793 10.707 3.832 16.52a20.487 20.487 0 0 1-9.332 13.874L61.23 109.97a25.82 25.82 0 0 1-6.187 2.707zm0 0"/></svg>`
  const symbol_html = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 128 128"><path fill="currentColor" d="m9.032 2l10.005 112.093l44.896 12.401l45.02-12.387L118.968 2H9.032zm89.126 26.539l-.627 7.172L97.255 39H44.59l1.257 14h50.156l-.336 3.471l-3.233 36.119l-.238 2.27L64 102.609v.002l-.034.018l-28.177-7.423L33.876 74h13.815l.979 10.919L63.957 89H64v-.546l15.355-3.875L80.959 67H33.261l-3.383-38.117L29.549 25h68.939l-.33 3.539z"/></svg>`
  const symbol_css = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 128 128"><path fill="currentColor" d="m8.76 1l10.055 112.883l45.118 12.58l45.244-12.626L119.24 1H8.76zm89.591 25.862l-3.347 37.605l.01.203l-.014.467v-.004l-2.378 26.294l-.262 2.336L64 101.607v.001l-.022.019l-28.311-7.888L33.75 72h13.883l.985 11.054l15.386 4.17l-.004.008v-.002l15.443-4.229L81.075 65H48.792l-.277-3.043l-.631-7.129L47.553 51h34.749l1.264-14H30.64l-.277-3.041l-.63-7.131L29.401 23h69.281l-.331 3.862z"/></svg>`
  const symbol_github = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 250"><path fill="currentColor" d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403Z"/></svg>`

  function retrieve_icon(symbol: string): string | undefined {
    switch (symbol.toLowerCase()) {
      case 'javascript':
        return symbol_javascript
      case 'typescript':
        return symbol_typescript
      case 'sveltekit':
      case 'svelte':
        return symbol_svelte
      case 'html':
        return symbol_html
      case 'css':
        return symbol_css
      case 'github rest api':
        return symbol_github
      default:
        return ''
    }
  }

  const dateRelative = !datetime
    ? datetime
    : relativeTime(new Date(), new Date(datetime))
  const dateReadable = !datetime ? datetime : readableDate(datetime)

  let isHollow = false
  let hollowPrefix = ''
  let fillSuffix = ''

  const keywords = ['How', 'How to', 'How to:', 'How To']

  if (title) {
    keywords.some(keyword => {
      if (title.startsWith(keyword)) {
        hollowPrefix = keyword
        fillSuffix = title.replace(keyword, '')
        isHollow = true
      }
    })
  }
</script>

<section>
  <div role="banner">
    <div class="back-button">
      <LinkUI orientation="left" href="{base}/blog">Back to Blog</LinkUI>
    </div>
    <div class="wrapper-header">
      {#if isHollow}
        <h1 class="font-80">
          <Hollow color={'var(--clr-100)'}>{hollowPrefix}</Hollow>
          {fillSuffix}
        </h1>
      {:else}
        <h1 class="font-80">{title}</h1>
      {/if}
      <p>{description}</p>
      {#if tags[0] !== ''}
        <ul class="tags inline-items">
          {#each tags as tag}
            <li class="shiny">{@html retrieve_icon(tag)}{tag}</li>
          {/each}
        </ul>
      {/if}

      {#if datetime}
        <time {datetime}>
          <svg
            aria-label="Published: "
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2">
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <path d="M16 2v4M8 2v4m-5 4h18" />
            </g>
          </svg>&nbsp;{dateRelative}
          <div aria-orientation="vertical" role="separator">&nbsp;•&nbsp;</div>
          {dateReadable}
        </time>
      {/if}

      {#if !finished}
        <div class="wip">
          <small>🏗 Construction site, keep out 🏗</small>
          <small>🚧 This article is not finished 🚧</small>
        </div>
      {/if}
      <br />
    </div>
  </div>
  <main>
    <slot />
  </main>
</section>

<svelte:head>
  <title>{title} - {site.blog.title_append}</title>

  <!-- HTML Meta Tags -->
  <meta name="description" content={description} />

  <!-- Google / Search Engine Tags -->
  <meta itemprop="name" content={title} />
  <meta itemprop="description" content={description} />
  <meta itemprop="image" content="" />
  <!-- TODO(santigo-zero): Add image -->

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content={$page.url.toString()} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="" />
  <!-- TODO(santigo-zero): Add image -->

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content="" />
  <!-- TODO(santigo-zero): Add image -->
</svelte:head>

<style>
  [role='banner'] {
    background-color: var(--clr-25);
    border-bottom-right-radius: 1.6rem;
    border-bottom-left-radius: 1.6rem;
    display: flex;
    flex-direction: column;
    place-items: start;
    padding-bottom: 1rem;
  }

  .back-button {
    margin-inline: auto;
    width: min(92%, var(--base));
    margin-top: 0.8rem;
    margin-bottom: 0.4rem;
  }

  .wrapper-header,
  .wip {
    display: grid;
    width: min(92%, var(--xl));
    margin-inline: auto;
  }

  main {
    width: min(92%, var(--base));
    margin-inline: auto;
    padding-top: 1rem;
  }

  :global(main p) {
    width: min(100%, 60ch);
  }

  .wrapper-header {
    gap: 1rem;
    text-align: center;
  }

  .wrapper-header p {
    max-width: 44ch;
    margin-inline: auto;
  }

  .wip {
    place-items: center;
    margin-top: 0.6rem;
  }

  small {
    font-weight: 500;
  }

  .tags {
    /* width: min(100%, var(--sm)); */
    max-width: var(--sm);
    margin-inline: auto;
  }

  .tags li {
    margin-top: 0.6rem;
    display: flex;
    gap: 0.5ch;
    padding: 0.4rem 0.8rem;
    border-radius: 0.75rem;
  }

  time {
    display: flex;
    place-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
