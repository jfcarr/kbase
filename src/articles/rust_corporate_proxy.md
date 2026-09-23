# Rust/Cargo Behind a Corporate Proxy

## Problem

Cargo can't fetch external repositories because it is unable to validate the SSL connection due to a “man-in-the-middle” corporate proxy.

## Solution

Go to your Rust installation folder. (Usually something like `c:\Users\<username>\.cargo` in Windows.)

Create a file called “config”.

Add the following lines to the file:

```ini
[http]
check-revoke = false
sslVerify = false
```
