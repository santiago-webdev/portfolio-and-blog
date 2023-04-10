<script lang="ts">
  import '$lib/styles/reset.css'
  import 'iconify-icon'
</script>

<slot />

<style global>
  :root {
    --ff-dflt: 'Manrope', system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol';
    --ff-mono: Dank Mono, Operator Mono, Inconsolata, Fira Mono, ui-monospace,
      SF Mono, Monaco, Droid Sans Mono, Source Code Pro, monospace;

    /* Breakpoints */
    --xs: 20rem;
    /* 320px */
    --sm: 48rem;
    /* 768px */
    --base: 64rem;
    /* 1024px Prose */
    --md: 85.375rem;
    /* 1366px */
    --lg: 90rem;
    /* 1440px */
    --xl: 120rem;
    /* 1920px */

    --fz-1: clamp(0.75rem, 2vw, 1rem);
    --fz-2: clamp(1.2rem, 4vw, 1.8rem);
    --fz-3: clamp(1.6rem, 6vw, 2.6rem);
    --fz-4: clamp(2rem, 9vw, 3.5rem);
    --fz-5: clamp(3rem, 13vw, 4.5rem);
    --fz-6: clamp(3.3rem, 13vw, 5.6rem);
  }

  [data-theme='system'],
  [data-theme='dark'] {
    color-scheme: dark;
    /* Foreground colors */
    --txt-A: hsl(228 50% 86%);
    --txt-B: hsl(228 50% 87%);
    --txt-C: hsl(228 50% 90%);
    --txt-D: hsl(228 50% 94%);
    --txt-E: hsl(228 50% 96%);
    --txt-hover: hsl(220 20% 70%);
    --txt-clicked: hsl(228 70% 80%);

    /* Midground colors: this set of colors have enough contrast with both
     * foreground and background colors, it's being used mainly for outlines,
     * but it could be used for text, hover states, as a fill color or for text
     * depending on the situation.
     * */
    --dim-100: hsl(236 12% 25%);
    --dim-150: hsl(236 12% 27%);
    --dim-200: hsl(236 12% 30%);
    --dim-250: hsl(236 12% 35%);
    --dim-300: hsl(236 12% 40%);
    --dim-400: hsl(236 12% 50%);
    --dim-500: hsl(236 12% 55%);
    --dim-600: hsl(236 12% 60%);
    --dim-700: hsl(236 12% 70%);

    /* Background colors */
    --bg-100: hsl(236 12% 12%);
    --bg-200: hsl(236 12% 14%);
    --bg-300: hsl(236 12% 16%);
    --bg-350: hsl(236 12% 18%);
    --bg-400: hsl(236 12% 19%);
    --bg-500: hsl(236 12% 21%);
    --bg-600: hsl(236 12% 23%);
    --bg-700: hsl(236 12% 24%);
    --bg-800: hsl(236 12% 26%);
    --bg-900: hsl(236 12% 28%);

    /* Transparent background colors */
    --bg-trp-400: hsl(236 13% 19% / 88%);
    --bg-trp-600: hsl(236 12% 23% / 94%);

    /* For elements that have some kind of selection */
    --bg-select-100: hsl(240 10% 30%);
    --bg-select-200: hsl(240 10% 35%);
    --bg-select-300: hsl(240 10% 40%);
    --bg-select-400: hsl(240 10% 45%);
    --bg-select-500: hsl(240 10% 50%);
    --bg-select-600: hsl(240 10% 55%);
    --bg-select-700: hsl(240 10% 60%);
    --bg-select-800: hsl(240 10% 65%);
    --bg-select-900: hsl(240 10% 70%);
  }

  [data-theme='system-light'],
  [data-theme='light'] {
    color-scheme: light;

    --txt-A: hsl(270 2% 25%);
    --txt-B: hsl(270 4% 26%);
    --txt-C: hsl(270 6% 27%);
    --txt-F: hsl(270 13% 30%);
    --txt-G: hsl(270 8% 26%);

    --txt-hover: hsl(240 0% 0%);
    --txt-clicked: hsl(220 30% 30%);

    --dim-100: hsl(210 5% 76%);
    --dim-150: hsl(210 5% 74%);
    --dim-200: hsl(210 5% 72%);
    --dim-300: hsl(210 5% 45%);
    --dim-400: hsl(210 5% 50%);
    --dim-500: hsl(210 5% 55%);
    --dim-600: hsl(210 5% 60%);
    --dim-700: hsl(210 5% 70%);

    --bg-100: hsl(210 5% 70%);
    --bg-200: hsl(210 5% 72%);
    --bg-300: hsl(210 10% 84%);
    --bg-400: hsl(210 10% 86%);
    --bg-500: hsl(210 10% 88%);
    --bg-600: hsl(210 10% 90%);
    --bg-700: hsl(210 10% 60%);
    --bg-800: hsl(210 10% 90%);
    --bg-900: hsl(210 10% 92%);

    --trp-bg-100: hsl(240 9% 7% / 94%);
    --trp-bg-200: hsl(240 9% 11% / 94%);
    --trp-bg-300: hsl(240 9% 15% / 94%);
    --trp-bg-400: hsl(240 9% 19% / 94%);
    --trp-bg-600: hsl(240 8% 23% / 94%);
    --trp-bg-700: hsl(240 8% 27% / 94%);
    --trp-bg-800: hsl(240 8% 31% / 94%);
    --trp-bg-900: hsl(240 8% 35% / 94%);

    --bg-select-100: hsl(240 10% 35%);
    --bg-select-200: hsl(240 10% 40%);
    --bg-select-300: hsl(240 10% 42%);
    --bg-select-400: hsl(240 10% 44%);
  }

  html {
    scroll-behavior: smooth;
    color-scheme: light dark;
    font-family: var(--ff-dflt);
    background-color: var(--bg-200);
    color: var(--txt-A);
  }

  var {
    font: normal 1em/1.5 var(--ff-mono);
    margin-top: 1px;
  }

  address {
    font-style: normal;
  }

  ul {
    padding: 0;
  }

  a {
    color: var(--txt-A);
  }

  strong {
    font-variation-settings: 'wght' 660;
  }

  h1 {
    --range: var(--fz-6);
    font-size: var(--range);
    line-height: calc(1.2 * var(--range));
    font-variation-settings: 'wght' 800;
  }

  h2 {
    --range: var(--fz-5);
    font-size: var(--range);
    line-height: calc(1.2 * var(--range));
    font-variation-settings: 'wght' 700;
  }

  h3 {
    font-weight: 500;
    font-size: clamp(0.8rem, 2vw + 1.5rem, 1.75rem);
    /* line-height: calc(1.5 * clamp(2.3rem, 8vw, 3.6rem)); */
  }

  .ff-sz-700,
  p {
    --range: clamp(0.8rem, 2vw + 1.5rem, 1.2rem);
    font-size: var(--range);
    line-height: calc(1.2 * var(--range));

    font-variation-settings: 'wght' 400;
  }

  .ff-sz-800,
  small {
    --range: clamp(0.5rem, 2vw + 1.5rem, 1rem);
    font-size: var(--range);
    line-height: calc(1.2 * var(--range));
  }

  .ff-sz-900 {
    --range: clamp(0.8rem, 2vw + 1.5rem, 1.1rem);
    font-size: var(--range);
    line-height: calc(1.2 * var(--range));
    color: var(--txt-A);
  }

  .trn-border {
    border: 1px solid transparent;
  }

  .shiny {
    --background: var(--bg-700);
    --border: var(--bg-800);
    background-color: var(--background);
    border: 1px solid var(--background);
    border-top-color: var(--border);
    border-left-color: var(--border);
    box-shadow: 0 4px 16px 0 rgba(0 0 0 / 0.1);

    border-radius: var(--radius);
    transition: background-color 50ms, border 80ms, box-shadow 300ms;

    display: flex;
    place-items: center;
    width: max-content;
    padding: 0.4rem 0.8rem;
    gap: 0.2rem;
    border-radius: 999rem;
  }

  .shiny.less {
    --background: var(--bg-400);
    --border: var(--bg-600);
  }

  .shiny.float {
    box-shadow: 8px 8px 32px 0 rgba(0, 0, 0, 0.4);
  }

  @media (hover: hover) {
    .shiny.hover:hover {
      --background: var(--bg-700);
      --border: var(--bg-900);
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.25);
    }
  }

  .shiny-select {
    border: 1px solid transparent;
    padding: 0.3rem 0.6rem;
    border-radius: 0.4rem;
    color: var(--dim-700);
  }

  input[type='radio']:checked + .shiny-select:active,
  input[type='radio']:checked + .shiny-select {
    --background: var(--bg-300);
    --border: var(--bg-select-200);
    --color: var(--txt-A);
    background-color: var(--background);
    border: 1px solid var(--border);
    font-variation-settings: 'wght' 500;
    color: var(--color);
  }

  @media (hover: hover) {
    input[type='radio']:hover + .shiny-select,
    .shiny-select:hover {
      --background: var(--bg-select-100);
      --border: var(--bg-select-200);
      --color: var(--txt-A);
      background-color: var(--background);
      border: 1px solid var(--background);
      border-left-color: var(--border);
      border-top-color: var(--border);
      color: var(--color);
    }
  }

  .reverse {
    --background: var(--txt-A);
    --border: var(--txt-C);
    --color: var(--bg-200);

    background-color: var(--background);
    border: 1px solid var(--background);
    border-top-color: var(--border);
    border-left-color: var(--border);
    box-shadow: 0 4px 16px 0 rgba(0 0 0 / 0.2);

    border-radius: var(--radius);
    transition: background-color 50ms, border 80ms, box-shadow 300ms;
    color: var(--color);

    display: flex;
    place-items: center;
    width: max-content;
    padding: 0.4rem 0.8rem;
    gap: 0.2rem;
    border-radius: 999rem;

    font-variation-settings: 'wght' 550;
  }

  .block {
    --background: var(--bg-200);
    --border: var(--bg-700);
    background-color: var(--background);
    border: 1px solid var(--border);
    box-shadow: 0 4px 16px 0 rgba(0 0 0 / 0.1);

    border-radius: 0.8rem;
    transition: background-color 50ms, border 80ms, box-shadow 300ms;

    display: flex;
    place-items: center;
    width: max-content;
    padding: 0.4rem 0.8rem;
    gap: 0.2rem;
    border-radius: 999rem;
  }

  @media (hover: hover) {
    .block.hover:hover {
      --background: var(--bg-100);
      --border: var(--bg-100);

      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.25);
    }
  }

  .bordered {
    --border: var(--txt-hover);
    border: 2px solid var(--border);
  }

  .bordered:hover {
    --border: var(--dim-300);
  }

  [aria-current='page'] {
    text-decoration: underline solid var(--txt-hover) 3px;
  }

  [aria-orientation='vertical'][role='separator']:empty {
    border-left: 1px solid var(--dim-100);
    height: 2rem;
  }

  .slide-backwards,
  .slide-forwards {
    transition: transform 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .slide-backwards:before {
    content: '<- ';
    padding-left: 0.2ch;
  }

  .slide-forwards:after {
    content: ' ->';
    padding-right: 0.2ch;
  }

  .slide-forwards:hover {
    transform: translateX(0.5ch);
  }

  .slide-backwards:hover {
    transform: translateX(-0.5ch);
  }

  hr {
    width: 100%;
    margin: 0;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border: 1px solid var(--dim-250);
  }

  kbd {
    pointer-events: none;
    padding-inline: 0.3rem;

    border-radius: 0.4rem;
    background-color: var(--dim-250);
    text-transform: uppercase;
    font-size: 90%;
    font-weight: bold;
  }
</style>
