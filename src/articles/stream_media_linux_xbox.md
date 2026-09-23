# Stream Media from Ubuntu/Mint Linux to XBox360

> **UPDATE**: uShare is still the best (in my opinion) way to quickly get a UPnP server running, with low overhead.  If you’re interested in a more comprehensive solution, though, I recommend that you check out [Plex Media Server](http://www.plexapp.com/).  It’s a bit more work to set up, and also more taxing on your host machine, but _very_ feature-rich.  (It has a [Roku](https://en.wikipedia.org/wiki/Roku) client channel too, which uShare does not.)
>
> I also have a newer article discussing [MiniDLNA](minidlna.md), another lightweight media server.

## Original Article =====

The UPnP media server standard employed by Windows Media Center can be emulated using a utility called uShare.

```bash
sudo apt-get install ushare
```

Then, edit /etc/ushare.conf and make the following changes:

```ini
USHARE_NAME=uShareMedia  # The name you want to be visible on your network.
 
# Interface to listen to (default is eth0).
USHARE_IFACE=eth1  # Change this to your active interface
 
# Port to listen to (default is random from IANA Dynamic Ports range)
# Ex : USHARE_PORT=49200
USHARE_PORT=  # You probably won't need to change this.
 
# Port to listen for Telnet connections
# Ex : USHARE_TELNET_PORT=1337
USHARE_TELNET_PORT=  # Same here.
 
# Directories to be shared (space or CSV list).
USHARE_DIR=/dir1,/dir2  # Point this to the directory/ies containing the media files you want to share.
 
# Use XboX 360 compatibility mode (yes/no)
USHARE_ENABLE_XBOX=yes  # This one's important.  Allows your XBox console to access the media share
 
# Use DLNA profile (yes/no)
# This is needed for PlayStation3 to work (among other devices)
USHARE_ENABLE_DLNA=yes
```

Use this command to start up the service:

```bash
ushare -xD
```

If you need to “cycle” the service (eg, to pick up new media files), use this:

```bash
killall -q ushare
 
ushare -xD
```
