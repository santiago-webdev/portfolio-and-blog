<script lang="ts">
  import '$lib/styles/reset.css'
</script>

<slot />

<style global>
  :root {
    --ff-dflt: 'Manrope', system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Breakpoints */
    --xs: 20rem; /* 320px */
    --sm: 48rem; /* 768px */
    --base: 64rem; /* 1024px Prose */
    --md: 85.375rem; /* 1366px */
    --lg: 90rem; /* 1440px */
    --xl: 120rem; /* 1920px */
  }

  [data-theme='system'],
  [data-theme='dark'] {
    color-scheme: dark;
    /* Foreground colors */
    --txt-A: hsl(228 60% 86%);
    --txt-B: hsl(228 60% 87%);
    --txt-C: hsl(228 60% 90%);
    --txt-D: hsl(228 60% 95%);
    --txt-E: hsl(228 60% 100%);
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
    --bg-100: hsl(236 13% 12%);
    --bg-200: hsl(236 13% 14%);
    --bg-300: hsl(236 13% 16%);
    --bg-350: hsl(236 13% 18%);
    --bg-400: hsl(236 13% 19%);
    --bg-500: hsl(236 13% 21%);
    --bg-600: hsl(236 12% 23%);
    --bg-700: hsl(236 12% 24%);
    --bg-800: hsl(236 12% 26%);
    --bg-900: hsl(236 12% 28%);

    /* Transparent background colors */
    --bg-trp-400: hsl(236 13% 19% / 94%);
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
    background-color: var(--bg-200);
    color: var(--txt-A);
  }
</style>
