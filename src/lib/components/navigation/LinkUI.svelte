<script lang="ts">
  export let orientation = 'right'
  export let href = '/'
  export let classes = 'defaults'
</script>

<a
  class={`${orientation} ${classes}`}
  {href}>
  <slot />
</a>

<style>
  .defaults {
    font-size: inherit;
    line-height: inherit;
  }

  .left,
  .right {
    transition: transform 150ms cubic-bezier(0.215, 0.61, 0.355, 1);

    text-align: left;
    color: var(--clr-85);
    font-variation-settings: 'wght' 650;
  }

  .left {
    margin-right: auto;
  }

  .slide-fordwards {
    margin-left: auto;
  }

  .left:before {
    content: '<- ';
    padding-left: 0.2ch;
  }

  .right:after {
    content: ' ->';
    padding-right: 0.2ch;
  }

  .right:hover {
    transform: translateX(0.5ch);
  }

  .left:hover {
    transform: translateX(-0.5ch);
  }
</style>
