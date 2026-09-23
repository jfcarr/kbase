# Display GRUB Menu

If your [GRUB](https://en.wikipedia.org/wiki/GNU_GRUB) menu is not displaying and/or the shortcut key is being ignored, you can force a timed display as follows:

Edit the GRUB configuration:

```bash
sudo vi /etc/default/grub
```

If you see a line like `GRUB_HIDDEN_TIMEOUT=0` or `GRUB_TIMEOUT_STYLE=hidden`, comment it out:

```txt
#GRUB_HIDDEN_TIMEOUT=0
```

Then, specify the amount of time you want the GRUB menu to display on startup, where ‘#’ is seconds:

```txt
GRUB_TIMEOUT=#
```

After making changes, run `sudo update-grub` to update the grub configuration.
