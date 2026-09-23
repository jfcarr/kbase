# Hostname On Linux

## View

```bash
hostname
```

Result:

```txt
linux-host-name
```

## Change

First:

```bash
sudo hostnamectl set-hostname new-linux-host-name
```

Then, update /etc/hosts entry to reflect the new name.

Finally, use `hostname` again to verify the change:

```bash
hostname
```

Result:

```txt
new-linux-host-name
```
