<div class="wrapper-table">
  <table>
    <slot />
  </table>
</div>

<style>
.wrapper-table {
  border-radius: 14px;
  border: thin var(--srf-1) solid;
  overflow: hidden;
}

table {
  width: 100%;
  background-color: var(--srf-3);
  display: grid;
}

:global(thead) {
  display: grid;
}

:global(thead th:first-child),
:global(tbody td:first-child) {
  min-width: 14ch;
}
</style>
