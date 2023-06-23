<script lang="ts">
export let href = '/';
</script>

<a
  class={href.startsWith('/') || href.startsWith('#')
    ? 'internal-link'
    : 'link'}
  {href}
  rel={href.startsWith('/') || href.startsWith('#') ? '' : 'external'}
  target={href.startsWith('/') || href.startsWith('#') ? '' : '_blank'}
>
  <slot />
</a>
