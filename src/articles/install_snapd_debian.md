# Install Snapd on Debian

source: [Linux Capable](https://linuxcapable.com/how-to-install-snapd-and-snap-store-on-debian-linux)

Update Debian packages before Snapd installation:

```bash
sudo apt update && sudo apt upgrade
```

Install Snapd via APT command:

```bash
sudo apt install snapd
```

Verify Snapd installation:

```bash
snap version
```

Check the systemctl status of Snapd:

```bash
systemctl status snapd
```

If the service hasn’t activated, you can manually start it and enable it to start automatically at system boot using the following command:

```bash
sudo systemctl enable --now snapd.socket
```

Install Snap core:

```bash
sudo snap install core
```

Enable classic confinement for Snap packages:

```bash
sudo ln -s /var/lib/snapd/snap /snap
```
