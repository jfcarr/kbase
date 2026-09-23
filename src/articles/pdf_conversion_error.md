# PDF Conversion Policy Error

**Error**:

```txt
convert-im6.q16: attempt to perform an operation not allowed by the security policy `PDF' @ error/constitute.c/IsCoderAuthorized/421.
```

**Cause**: Parsing PDF was disabled in `/etc/ImageMagick-7/policy.xml` due to its inherent insecurity. The same thing did Ubuntu and perhaps more distros will follow as this is recommendation from security researchers.

**Fix**: Enable it locally by removing 'PDF' from below line: `<policy domain=“coder” rights=“none” pattern=“{PS,PS2,PS3,EPS,PDF,XPS}” />`

File to edit: `/etc/ImageMagick-7/policy.xml`

---

Source: <https://bugs.archlinux.org/task/60580>
