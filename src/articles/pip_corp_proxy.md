# Pip Behind a Corporate Proxy

Call Pip like this:

```bash
pip3 install --trusted-host pypi.org --trusted-host pypi.python.org --trusted-host files.pythonhosted.org <package-name>
```

Without the trusted-host options, you get something similar to this:

```txt
Could not fetch URL https://pypi.python.org/simple/<package-name>/:
There was a problem confirming the ssl certificate: [SSL: CERTIFICATE_VERIFY_FAILED] certificate
 verify failed (_ssl.c:777) - skipping
```
