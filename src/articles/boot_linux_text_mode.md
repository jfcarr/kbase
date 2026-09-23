# Boot Linux to text mode

> [!NOTE]
> This assumes that you’re using [GRUB](http://en.wikipedia.org/wiki/GNU_GRUB).

```bash
sudo vi /etc/default/grub
```

Change this line:

```txt
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"
```

to:

```txt
GRUB_CMDLINE_LINUX_DEFAULT="text"
```

Save the file, then:

```bash
sudo update-grub
 
sudo reboot
```

When you’re ready to go back to booting into graphical mode, change the value back to "quiet splash".
