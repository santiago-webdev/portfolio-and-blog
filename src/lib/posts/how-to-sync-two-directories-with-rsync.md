---
title: How to sync two directories with rsync
description: Description
tags: [Publish, Vault]
finished: true
id: '000000'
datetime: 2023-07-06 09:46
---

# How to sync two directories with rsync

If you have a `source_dir` and want a `target_dir` to have
_the same contents_ as your source you **need the
trailing slash** at `./source_dir/`

And the flags

- `-a`: Do the sync preserving all filesystem attributes
- `-v`: Verbosity
- `-u`: Coy files with newer modification time or size difference if the times are equal
- `--ignore-existing`: With this flag you prevent from overwriting files that
  are the same in the target directory, it makes no sense to be copying the same
  files over and over
- `--delete`: You could add this flag if you want to delete files from the
  target that are not in the source but I don't really have a use case for this
  class

```bash
rsync -avu --ignore-existing ./source_dir/ /path/path/target_dir
```
