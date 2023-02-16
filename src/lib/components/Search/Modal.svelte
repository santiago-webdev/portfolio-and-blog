<script lang="ts">
  import SearchBar from '$lib/components/Search/SearchBar.svelte';

  let input: HTMLInputElement;
  let modal: HTMLDialogElement;

  const handleModal = (async() => {
    if (modal.open) {
      modal.close()
    } else {
      modal.showModal();
      input.focus();
    }
  });

  function onCtrlK(event: KeyboardEvent) {
    let { key, ctrlKey, repeat } = event;
    if (repeat) return;

    switch (key) {
      case 'k':
        if (ctrlKey) {
          event.preventDefault();
          handleModal();
          break;
        }
    }
  }
</script>

<svelte:window on:keydown={onCtrlK} />

<dialog bind:this={modal}>
  <SearchBar bind:input insideModal={true} />
</dialog>

<style>
  :modal {
    padding: 0;
    border: 0;
    border-radius: 1.1rem;
  }

  :modal::backdrop {
    background: linear-gradient(
      130deg,
      rgba(43 42 51 / 0.03),
      rgba(0 0 0 / 0.04)
    );
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    /* border: 0.13rem solid rgba(255, 255, 255, 0.18); */
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
  }
</style>
