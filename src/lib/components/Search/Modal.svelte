<script lang="ts">
  import SearchBar from '$lib/components/Search/SearchBar.svelte';

  let modal: HTMLDialogElement;

  const handleModal = () => {
    modal.showModal()
  }

	function onCtrlK(event: KeyboardEvent) {
    let { key, ctrlKey, repeat } = event
		if (repeat) return;

		switch (key) {
			case "k":
				if(ctrlKey) {
					event.preventDefault();
					handleModal();
					break;
				}
		}
	}
</script>

<svelte:window on:keydown={onCtrlK} />

<dialog bind:this={modal}>
  <SearchBar/>
</dialog>
