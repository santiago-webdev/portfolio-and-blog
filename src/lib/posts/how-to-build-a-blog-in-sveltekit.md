---
title: How this blog was built
date: 2023-03-05
description: How to build your own static blog written in sveltekit and deploy it to GitHub Pages.
finished: false
---

# Let's get started

## Here I'll explain how I built this blog using Sveltekit

### Test

Let's get started

```bash
yarn create svelte .
```

### More tests

```typescript
let hello: string = 'world';
const printHello = () => console.log(hello);
```

```svelte
<script lang="ts">
  import IconSearch from '$lib/Icons/IconSearch.svelte';
  import { FilteredPosts } from '$lib/components/Search/store';
  import { base } from '$app/paths';
  import { goto } from '$app/navigation';
  import { inPixels, readableDate } from '$lib/utils/utils';
  import { onMount } from 'svelte';
  import { searchHandler } from '$lib/components/Search/utils';
  import Separator from './Separator.svelte';

  var modal: HTMLDialogElement,
    input: HTMLInputElement,
    value = '',
    onDesktop = true,
    outerWidth = 0,
    complex = true,
    touchSupport = false;

  const toggleModal = () =>
    modal.open
      ? (modal.close(), (value = ''))
      : (modal.showModal(), input.focus());

  function onCtrlK(event: KeyboardEvent) {
    let { key, ctrlKey, repeat } = event;
    if (repeat) return;

    switch (key) {
      case 'k':
        if (ctrlKey) {
          event.preventDefault();
          toggleModal();
          break;
        }
    }
  }

  async function handleSubmit() {
    toggleModal();
    await goto(`${base}/blog${$FilteredPosts[0].href}`);
  }

  onMount(() => (touchSupport = 'ontouchstart' in window ? true : false));
  onMount(() =>
    modal.addEventListener('click', event => {
      if (event.target === modal) {
        modal.close();
      }
    })
  );
  $: onDesktop = outerWidth > inPixels('48rem') ? true : false;
  $: complex = onDesktop || !touchSupport;
</script>
```
