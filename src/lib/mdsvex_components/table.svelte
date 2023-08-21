<div class="wrapper-table">
  <table>
    <slot />
  </table>
</div>

<style>
.wrapper-table {
  border-radius: 0.75rem;
  border: thin var(--clr-700) solid;
  overflow: hidden;
}

table {
  width: 100%;
  background-color: var(--clr-300);
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
