# Query Windows shares from the command line in Ubuntu Linux

If you find that network (Windows) shares are not being displayed in Nautilus (but are otherwise available), you can query them by opening a terminal and entering “smbtree”. For example, if you want to open a share on a Windows machine named “win2″, but you aren’t sure of the name, do this:

1. Open a terminal.

2. Type this:

```bash
smbtree
```

3. Note the name of the share in the list. For this example, we’ll say it’s “my files”.

4. Go to Nautilus, and type `smb://win2//my files` in the address bar, and hit “ENTER”.
