# Neovim Qt Startup Error

It's not a fatal error, but it's annoying. If you see this when you start nvim-qt (in Ubuntu):

```
Failed to load module "atk-bridge": 'gtk_module_display_init': /usr/lib/x86_64-linux-gnu/gtk-2.0/modules/libgail.so: undefined symbol: gtk_module_display_init
```

You can fix it with this:

```bash
sudo apt install libatk-adaptor
```
