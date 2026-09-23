# Install php7-xml to avoid utf encode/decode issue

## Issue

1. Try to run a local instance of the Dokuwiki installer, using PHP 7's build-in dev server.

2. Get these errors:

```txt
PHP function utf8_encode is not available. Maybe your hosting provider disabled it for some reason?

PHP function utf8_decode is not available. Maybe your hosting provider disabled it for some reason?
```

## Solution

Use your package manager to install the `php7-xml` package.
