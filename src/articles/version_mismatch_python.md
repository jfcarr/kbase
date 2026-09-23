# Version Mismatch in Python Package

I recently encountered a problem while I was trying to use Astropy v3.1.2.  It was complaining about my Numpy version:

```txt
Traceback (most recent call last):
  File "./body-local.py", line 3, in <module>
    from astropy.time import Time
  File "/home/username/.local/lib/python3.6/site-packages/astropy/__init__.py", line 121, in <module>
    _check_numpy()
  File "/home/username/.local/lib/python3.6/site-packages/astropy/__init__.py", line 115, in _check_numpy
    raise ImportError(msg)
ImportError: Numpy version 1.13.0 or later must be installed to use Astropy

```

The strange part?  When I checked my Numpy version, it reported 1.16.2.

After a bit of digging, I discovered that this behavior can occur when you have multiple versions of the same package installed.  This can happen when you install a package globally //and// locally, or when packages are installed by other processes.  In any case, the solution was this:

First, repeatedly uninstall the offending package until no more installations are found:

```bash
pip3 uninstall numpy

sudo pip3 uninstall numpy
```

Then, reinstall:

```bash
sudo pip3 install numpy
```
