# Root Access on Raspberry Pi

## Create a Password for root

```bash
sudo passwd
```

You should see something like this:

```
user@raspberrypi:~ $ sudo passwd
New password:
Retype new password:
passwd: password updated successfully
```

## Allow SSH Access for root

> [!CAUTION]
> This will allow remote root access to your server via SSH, and also SFTP.

The root user now has a password set, but you cannot access your Raspberry Pi with this account directly, yet.  You need to edit the SSH server configuration file to allow root to log in:

Open the SSH configuration file:

```bash
sudo vi /etc/ssh/sshd_config
```

Find this line:

```
#PermitRootLogin prohibit-password
```

Change to this:

```
PermitRootLogin yes
```

Save the change, then restart the SSH server:

```bash
sudo service ssh restart
```
