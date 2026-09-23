# HP Laptop Keyboard Not Working At Boot Start

[Original article](https://forums.linuxmint.com/viewtopic.php?p=2108184#p2108184) is for Linux Mint, but this affects Ubuntu as well.

> [!WARNING]
> This disables the caps lock indicator.

```bash
sudo vi /etc/default/grub
```

Update the GRUB command line to include the i8042 entry, e.g.:

```properties
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash i8042.dumbkbd=1"
```

Save the file, then run `sudo update-grub` and reboot.
