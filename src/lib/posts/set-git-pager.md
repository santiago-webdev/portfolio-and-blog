---
title: A better git pager
description: Setup a custom git pager instead of the default "more"
datetime: 2023-06-23 10:46
tags: [Publish, Git]
finished: true
---

# My preference

If you are already using [bat](https://github.com/sharkdp/bat) you'll enjoy
using it:

```bash
git config --global core.pager 'bat -pp'
```
