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
    --fz-2: clamp(1rem, 3vw, 1.2rem);
    --fz-3: clamp(1.3rem, 4vw, 1.6rem);
    --fz-4: clamp(1.6rem, 6vw, 2.6rem);
    --fz-5: clamp(2rem, 9vw, 3.5rem);
    --fz-6: clamp(3rem, 13vw, 4.5rem);
    --fz-7: clamp(3.3rem, 13vw, 5.6rem);
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

    --sc-10: hsl(236 12% 14%);
    --sc-15: hsl(236 12% 16%);
    --sc-20: hsl(236 12% 18%);
    --sc-25: hsl(236 12% 19%);
    --sc-30: hsl(236 12% 21%);
    --sc-35: hsl(236 12% 23%);
    --sc-40: hsl(236 12% 24%);
    --sc-45: hsl(236 12% 26%);
    --sc-50: hsl(236 12% 28%);
    --sc-55: hsl(236 12% 30%);

    --sc-60: hsl(236 12% 35%);
    --sc-65: hsl(236 12% 40%);
    --sc-70: hsl(236 12% 45%);
    --sc-75: hsl(236 12% 50%);
    --sc-80: hsl(236 12% 55%);
    --sc-85: hsl(236 12% 60%);
    --sc-90: hsl(236 12% 65%);
    --sc-95: hsl(236 12% 70%);

    --sc-100: hsl(236 56% 86%);
    --sc-100: hsl(236 54% 87%);
    --sc-100: hsl(236 52% 90%);
    --sc-100: hsl(236 50% 94%);
    --sc-100: hsl(236 48% 96%);

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

  html {
    scroll-behavior: smooth;
    color-scheme: light dark;
    font-family: var(--ff-dflt);
    background-color: var(--sc-10);
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

  a,
  button,
  input,
  form,
  li span {
    --range: var(--fz-2);
    font-size: var(--range);
    line-height: calc(1.2 * var(--range));
    color: var(--txt-A);
  }

  button[disabled] {
    color: var(--sc-65);
  }

  strong {
    font-variation-settings: 'wght' 660;
  }

  h1 {
    --range: var(--fz-7);
    font-size: var(--range);
    line-height: calc(1.2 * var(--range));
    font-variation-settings: 'wght' 800;
  }

  h2 {
    --range: var(--fz-6);
    font-size: var(--range);
    line-height: calc(1.2 * var(--range));
    font-variation-settings: 'wght' 700;
  }

  h3 {
    --range: var(--fz-5);
    font-size: var(--range);
    line-height: calc(1.2 * var(--range));
    font-variation-settings: 'wght' 500;
  }

  p {
    --range: var(--fz-4);
    font-size: var(--range);
    line-height: calc(1.2 * var(--range));
    font-variation-settings: 'wght' 400;
  }

  small {
    --range: clamp(0.5rem, 2vw + 1.5rem, 1rem);
    font-size: var(--range);
    line-height: calc(1.2 * var(--range));
  }

  .trn-border {
    border: 1px solid transparent;
  }

  .shiny {
    --background: var(--sc-40);
    --border: var(--sc-45);
    background-color: var(--background);
    border: 1px solid var(--background);
    border-top-color: var(--border);
    border-left-color: var(--border);
    box-shadow: 0 4px 16px 0 rgba(0 0 0 / 0.1);

    border-radius: var(--radius);
    transition: background-color 50ms, border 80ms, box-shadow 300ms;

    display: flex;
    place-items: center;
    padding: 0.4rem 0.8rem;
    gap: 0.2rem;
    border-radius: 999rem;

    font-variation-settings: 'wght' 550;
  }

  .shiny.less {
    --background: var(--sc-25);
    --border: var(--sc-30);
  }

  .shiny.float {
    box-shadow: 8px 8px 32px 0 rgba(0, 0, 0, 0.4);
  }

  @media (hover: hover) {
    .shiny.hover:hover {
      --background: var(--sc-40);
      --border: var(--sc-50);
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.25);
    }
  }

  .shiny-select {
    border: 1px solid transparent;
    padding: 0.3rem 0.6rem;
    border-radius: 0.6rem;
    color: var(--sc-95);
  }

  input[type='radio']:checked + .shiny-select:active,
  input[type='radio']:checked + .shiny-select {
    --background: var(--sc-15);
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
    --color: var(--sc-10);

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
    padding: 0.4rem 0.8rem;
    gap: 0.2rem;
    border-radius: 999rem;

    font-variation-settings: 'wght' 550;
  }

  .block {
    --background: var(--sc-10);
    --border: var(--sc-40);
    background-color: var(--background);
    border: 1px solid var(--border);
    box-shadow: 0 4px 16px 0 rgba(0 0 0 / 0.1);

    border-radius: 0.8rem;
    transition: background-color 50ms, border 80ms, box-shadow 300ms;

    display: flex;
    place-items: center;
    padding: 0.4rem 0.8rem;
    gap: 0.2rem;
    border-radius: 999rem;
  }

  @media (hover: hover) {
    .block.hover:hover {
      --background: var(--sc-10);
      --border: var(--sc-10);

      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.25);
    }
  }

  .bordered {
    --border: var(--txt-hover);
    border: 2px solid var(--border);
  }

  .bordered:hover {
    --border: var(--sc-65);
  }

  [aria-current='page'] {
    text-decoration: underline solid var(--txt-hover) 3px;
  }

  [aria-orientation='vertical'][role='separator']:empty {
    border-left: 1px solid var(--sc-60);
    height: 2rem;
  }

  .slide-backwards,
  .slide-forwards {
    transition: transform 150ms cubic-bezier(0.215, 0.61, 0.355, 1);

    text-align: left;
    /* width: min(100% - 1rem, var(--base)); */
    margin-right: auto;
    color: var(--sc-95);
    /* margin-inline: auto; */
    font-variation-settings: 'wght' 650;
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

  small {
    color: var(--sc-85);
  }

  time {
    display: flex;
    place-items: center;
  }

  hr {
    width: 100%;
    margin: 0;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border: 1px solid var(--sc-60);
  }

  pre {
    width: min(100% - 1rem, var(--base));
    background-color: var(--sc-25);
    word-wrap: break-word;
    white-space: pre-wrap;
    overflow: auto;
    border-radius: 0.6rem;
    padding: 1rem;
    font-size: clamp(0.8rem, 8vw, 1.2rem);
    font-family: var(--ff-mono);
  }

  kbd {
    pointer-events: none;
    padding-inline: 0.3rem;

    border-radius: 0.4rem;
    background-color: var(--sc-60);
    text-transform: uppercase;
    font-size: 90%;
    font-weight: bold;
  }
</style>
