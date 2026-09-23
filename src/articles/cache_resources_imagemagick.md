# Cache Resources Exhausted in Imagemagick

When you try to convert multiple image files into a single PDF, you may see a series of errors that look like this:

```txt
convert-im6.q16: cache resources exhausted `file1.jpg'
@ error/cache.c/OpenPixelCache/4095.
```

You can solve this by increasing the amount of memory available to Imagemagick. First, locate the Imagemagick policy file. It will be something like `/etc/ImageMagick-6/policy.xml`. Then, find a line that looks like this:

```xml
<policy domain="resource" name="disk" value="1GiB"/>
```

And increase the value, e.g.:

```xml
<policy domain="resource" name="disk" value="8GiB"/>
```
