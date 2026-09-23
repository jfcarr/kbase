# MiniDLNA - A lightweight, simple media server

If you'd like to set up a home media server, but you're limited by memory and processing power, then MiniDLNA might be just what you're looking for.  It doesn't have the bells-and-whistles of something like Plex Media Server, but it gets the job done, and all you need is a DLNA-compliant media client to access it.

> The Digital Living Network Alliance (DLNA) was founded by a group of PC and consumer electronics companies in June 2003 to develop and promote a set of interoperability guidelines for sharing digital media among multimedia devices under the auspices of a certification standard.
>
> _from [Wikipedia](https://en.wikipedia.org/wiki/Digital_Living_Network_Alliance)._

These instructions are for the Raspberry Pi 4, but MiniDLNA can be installed on just about any flavor of Linux, and it should be easy to adapt these instructions accordingly.

## Requirements

A Raspberry Pi 4, running Rasbian.  That's it!

## Setup

Ensure that your Raspberry Pi is up-to-date:

```bash
sudo apt update

sudo apt upgrade
```

Then, install MiniDLNA:

```bash
sudo apt install minidlna
```

The MiniDLNA daemon starts automatically after installation.  It reads configuration information from /etc/minidlna.conf.

Edit the configuration file:

```bash
sudo vi /etc/minidlna.conf
```

Then, look for the section specifying the location(s) to scan for media files:

```txt
# * "A" for audio (eg. media_dir=A,/var/lib/minidlna/music)
# * "P" for pictures (eg. media_dir=P,/var/lib/minidlna/pictures)
# * "V" for video (eg. media_dir=V,/var/lib/minidlna/videos)
```

I created my media folders in my home directory, and my entries look like this:

```txt
media_dir=A,/home/pi/minidlna/music
media_dir=P,/home/pi/minidlna/pictures
media_dir=V,/home/pi/minidlna/video
```

The only other required setting is a friendly DLNA host name for your server.  Look for this entry:

```txt
#friendly_name=
```

Uncomment it, and add a friendly name of your choosing, e.g.:

```txt
friendly_name=MyMediaServer
```

Your MiniDLNA installation is now ready to use.

## Adding Media Files

Copy media files to the MiniDLNA folders appropriate for their type, e.g.:

* .mp3 files in /home/pi/minidlna/music
* .jpg files in /home/pi/minidlna/pictures
* .mp4 files in /home/pi/minidlna/video

The MiniDLNA daemon is sensitive to read permissions, so make your media readable by everyone:

```bash
chmod -R a+r /home/pi/minidlna
```

After adding media files, the MiniDLNA daemon must be restarted:

```bash
sudo systemctl restart minidlna
```

## Client Access

The MiniDLNA server should be accessible by any DLNA-compliant media client on your network.  Examples:

* Roku Media Player
* Universal Plug-n-Play in the VLC media player

## Monitoring

You can check the status of your media server from a browser anywhere on your network by going to <http://192.168.0.140:8200>.  (Change the IP address to match the address of your server.)
