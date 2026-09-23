# NT_STATUS_UNSUCCESSFUL error when browsing machines/shares in Ubuntu Linux

Here’s a workaround if you encounter this error when using smbtree or using the network browser in Nautilus:

1. First edit the Samba config file:

```bash
vi /etc/samba/smb.conf
```

2. Then, find the line `name resolve order = lmhosts host wins bcast` and change to `name resolve order = lmhosts wins bcast host`

You may need to reboot in order for Nautilus to pick up the change.
