# Create An ISO File From a CD or DVD-ROM Using the Terminal

Insert the CD/DVD in the drive.

Open a terminal.

Install `dcfldd`, if it isn’t already:

```bash
sudo apt-get install dcfldd
```

Figure out where your CD/DVD is mounted:

```bash
mount
```

(On my system it’s mounted as `/dev/sr0`)

Unmount it:

```bash
umount /dev/sr0
```

Create the ISO image:

```bash
dcfldd if=/dev/sr0 of=image.iso
```

In the example above, “image.iso” will be created in the current directory. You can change the “of” argument to whatever you want, e.g., different name, full path, etc.
