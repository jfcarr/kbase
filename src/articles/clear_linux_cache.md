# Clear Linux Cache

There are 3 types of caches in Linux:

**PageCache** is cached files. Files that were recently accessed are stored here so they will not need to be queried from the hard disk again, unless that file changes or the cache is cleared to make room for other data. This puts less read and write impact on a hard drive and increases speed since files can be read from RAM much faster.

**Dentry and inode cache** is directory and file attributes. This information goes hand in hand with PageCache, although it doesn’t contain the actual contents of any files. This cache also cuts down on disk input and ouput operations.

## Clearing Caches

> [!caution]
> Assumes you're using a distro with `systemd`.

To clear PageCache only:

```bash
sudo sysctl vm.drop_caches=1
```

To clear dentries and inodes:

```bash
sudo sysctl vm.drop_caches=2
```

To clear PageCache, plus dentries and inodes:

```bash
sudo sysctl vm.drop_caches=3
```

---

Source: <https://linuxconfig.org/clear-cache-on-linux>

