# Manually Install Firefox

Download Firefox from this page: <https://www.mozilla.org/en-US/firefox/all/#product-desktop-release>

Open a terminal and go to the folder where your download has been saved. For example:

```bash
cd ~/Downloads
```

Extract the contents of the downloaded file:

```bash
tar xjf firefox-*.tar.bz2
```

The following commands must be executed as root, or preceded by sudo.

Move the uncompressed Firefox folder to /opt:

```bash
mv firefox /opt
```

Create a symlink to the Firefox executable:

```bash
ln -s /opt/firefox/firefox /usr/local/bin/firefox
```

Download a copy of the desktop file:

```bash
wget https://raw.githubusercontent.com/mozilla/sumo-kb/main/install-firefox-linux/firefox.desktop -P /usr/local/share/applications
```
