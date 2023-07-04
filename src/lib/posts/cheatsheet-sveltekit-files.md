---
title: Sveltekit files cheat sheet
datetime: 2023-06-03 22:25
description: Cheatsheet with all of the files sveltekit related to routing
finished: true
tags: [Publish, SvelteKit]
---

<script>
  import { base } from '$app/paths';
</script>

# The files

To pass data to either +layout.svelte or +page.svelte you do it through the
load() function. Read the [docs](https://kit.svelte.dev/docs/load#page-data) for
more information.

Note that this is not in order of execution, it's just a general view, if you
want to see the order you can check
[the order in this other post]({base}/blog/execution-order-of-files-in-sveltekit).

| Dedicated files | What does it do?                                                                            |
| --------------- | ------------------------------------------------------------------------------------------- |
| app.html        | Base HTML template for any page of your application, it's used before any client-side code. |
| hooks.server.js | Runs logic on the server each time they receive a request                                   |
| hooks.client.js | Runs when the application starts in the client                                              |
| +server.js      | Standalone API endpoint                                                                     |
| +error.js       | Used to display errors when your application crashes 😝                                     |

| Layout files      | What does it do?                                             |
| ----------------- | ------------------------------------------------------------ |
| +layout.server.js | Pass server-only data to +layout.svelte and child routes     |
| +layout.js        | Pass data to +layout.svelte, is run in the client and server |
| +layout.svelte    | Read the data and wrap sibling +page.svelte content          |

| Page files      | What does it do?                                           |
| --------------- | ---------------------------------------------------------- |
| +page.server.js | Pass server-only data to +page.svelte and form actions     |
| +page.js        | Pass data to +page.svelte, is run in the client and server |
| +page.svelte    | Read the data and render the page                          |
