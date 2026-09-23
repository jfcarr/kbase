# Component Not Found error in VirtualBox

After a reboot, I started getting a **VERR_SUPDRV_COMPONENT_NOT_FOUND** error when trying to start a VM in VirtualBox. This error is related to VirtualBox’s usage of the `vboxnetflt` driver. I found that this was caused by the fact that I had updated my Linux kernel, but VirtualBox was not aware of the change. The fix is as follows:

1. Open a Terminal session.

2. Issue the following command:

```bash
sudo /etc/init.d/vboxdrv setup
```

This will re-compile the VirtualBox kernel module, and everything should start working again.
