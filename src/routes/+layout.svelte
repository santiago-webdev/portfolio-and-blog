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

  html {
    scroll-behavior: smooth;
  }
</style>
