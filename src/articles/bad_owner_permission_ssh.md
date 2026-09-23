# Bad owner or permissions on ssh config file

Sometimes, after you makes changes to a .ssh/config file, you'll start to see the following error when you try to connect to a host:

```txt
Bad owner or permissions on /share/homes/admin/.ssh/config
```

This is because the permissions have been altered on the config file. Fix it with this:

```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/*
```

Source: <https://superuser.com/questions/1212402/bad-owner-or-permissions-on-ssh-config-file>