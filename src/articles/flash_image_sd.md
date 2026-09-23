# Flash Disk Image to SD Card

Download the image or zip file from a mirror or torrent.

Open a terminal session in the folder where you downloaded the image.

If it's a zip file, extract the image file:

```bash
unzip <filename>.zip
```

Run `df` to see which devices are currently mounted:

```bash
df -h
```

Insert the SD card.

Run df again. The new device is your card. It will probably be something like “/dev/sdc1”. The last part (e.g. “1”) is the partition number, while the first part (e.g. “/dev/sdc”) is the actual device name. Note that multiple partitions of the device may be mounted separately, so you may see multiple entries like “/dev/sdc1”, “/dev/sdc2”, etc.

Unmount _all_ partitions, e.g.:

```bash
umount /dev/sdc1
 
umount /dev/sdc2
```

Write the image file to the device as follows. (Make sure you use the device name, _not_ the partition, and make sure the device name matches what you found in the df check above.)

> [!IMPORTANT]
> It is absolutely critical that you use the correct device name in this step. Using the wrong name can result in you wiping out the wrong drive!

```bash
sudo dd bs=4M status=progress if=<filename>.img of=/dev/sdc
```

A block size of 4M usually works, but if you have trouble, you should try 1M. Keep in mind that using a block size of 1M will take longer to write the image.

After the dd command finishes, flush the cache to ensure that all data is written:

```bash
sudo sync
```

Remove the SD card. 
