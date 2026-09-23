# MVS Turnkey in Docker

Assumes that you already have Docker installed and running. If you don’t, you can find instructions [here](docker_linux.md).

**Depending on your configuration, you may have to sudo your docker commands.**

## Pull Ubuntu Image

Pull the latest Ubuntu image:

```bash
docker pull ubuntu
```

Verify image:

```bash
docker image list
```

Results should look something like this:

```txt
REPOSITORY   TAG       IMAGE ID       CREATED      SIZE
ubuntu       latest    597ce1600cf4   6 days ago   72.8MB
```

## Create Container / Start a Shell

Create a container in the ubuntu image, and start a shell:

```bash
docker run --interactive --tty --name mvs_container ubuntu /bin/bash
```

(You can use any name you like. **mvs_container** is just an example.)

## Get IP Address

Update your package list, install net-tools, run ifconfig, and note your IP address (you’ll need it later):

```bash
apt update
 
apt install net-tools
 
ifconfig
```

## Retrieve the MVS Turnkey Archive

Change to /root, create a downloads directory, install wget, and retrieve the turnkey archive:

```bash
cd /root
 
mkdir downloads
 
cd downloads
 
apt install wget
 
wget https://wotho.ethz.ch/tk4-/tk4-_v1.00_current.zip
```

## Install and Run MVS

Change to the /opt directory, create a mvs directory, install unzip, and then extract the turnkey archive into the mvs directory:

```bash
cd /opt
 
mkdir mvs
 
cd mvs
 
apt install unzip
 
unzip /root/downloads/tk4-_v1.00_current.zip
```

Turn on console mode:

```bash
cd unattended
 
./set_console_mode
 
cd ..
```

Start MVS:

```bash
./mvs
```

When the startup is complete:

![](../images/mainframe_rpi/tk4-startup-complete.png)

You can open an instance of the x3270 terminal emulator, and connect to the running instance using the IP address you noted earlier. Detailed MVS operations instructions can be found [here](mainframe_emulation_rpi.md). (Just note that these instructions are for running on the Raspberry Pi, so adapt accordingly.)

After you complete your session and exit the container, you can return to it later:

```bash
docker start --interactive mvs_container
```
