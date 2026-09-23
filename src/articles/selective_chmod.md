# Selective chmod for directories and files

Here’s how to apply one set of permissions to all files, and a different set of permissions to all directories, in Linux (example):

First cd to the directory containing the subdirectories and files you want to change. Then:

For directories:

```bash
find . -type d -exec chmod 755 {} \;
```

For files:

```bash
find . -type f -exec chmod 644 {} \;
```

(Change the 755 and 644 to the actual permissions you want)
