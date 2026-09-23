# Rip DVD in Ubuntu

> [!IMPORTANT]
> Please be a good citizen and only rip media that you own!

# Dependencies

Install **dvdbackup** and **ffmpeg**:

```bash
sudo apt install dvdbackup ffmpeg
```

Most commercial DVDs are encrypted with CSS (the Content Scramble System), which attempts to restrict the software that can play a DVD. To enable reading of encrypted DVDs, you'll also need to compile and install **libdvdcss**.  This will step you through it:

```bash
sudo apt install libdvd-pkg && sudo dpkg-reconfigure libdvd-pkg
```

More info [here](https://help.ubuntu.com/community/RestrictedFormats/PlayingDVDs).

# Steps

Insert DVD and note mount path, e.g., `/media/username/SIDEWAYS_169`.

Extract VOB files for feature:

```bash
dvdbackup -i /media/username/SIDEWAYS_169 -o output -F -n "Sideways" -p
```

Browse to `output/Sideways/VIDEO_TS`.

Determine which .VOB files contain the actual movie.  You can use Celluloid to preview.  Remove non-feature .VOB files like trailers, making-of, etc.

Combine the remaining .VOB files into one:

```bash
cat *.VOB > Sideways.VOB
```

Convert the .VOB file to .mp4:

```bash
ffmpeg -i Sideways.VOB Sideways.mp4
```
