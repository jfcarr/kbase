# User Limit On Inotify Instances

## Error Message

Example:

```
The configured user limit (128) on the number of inotify instances has been reached
```

This message means your system-wide limit for inotify instances (Linux file-watchers) is too low for what’s running (often IDEs, file indexers, dev servers, Docker, etc.). Fix it by raising the limits and/or stopping the process that’s consuming them.

## Quick fix (temporary until reboot)

```bash
sudo sysctl -w fs.inotify.max_user_instances=1024
sudo sysctl -w fs.inotify.max_user_watches=524288
sudo sysctl -w fs.inotify.max_queued_events=65536
```

## Make it permanent

Create a sysctl config file:

```bash
sudo tee /etc/sysctl.d/99-inotify.conf >/dev/null <<'EOF'
fs.inotify.max_user_instances=1024
fs.inotify.max_user_watches=524288
fs.inotify.max_queued_events=65536
EOF
```

Apply:

```bash
sudo sysctl --system
```
