# Compress and Extract Entire Directory Tree With Tar

_This assumes you are using [tar](https://duckduckgo.com/?q=tar+%21man) in Linux or Cygwin._

First, open a terminal/bash session.

Change to the root directory you want to compress, then issue this command:

```bash
tar -cvzf archive_name.tgz *
```

To extract the archive file, copy it to an empty directory, then issue this command:

```bash
tar -xvf archive_name.tgz
```
