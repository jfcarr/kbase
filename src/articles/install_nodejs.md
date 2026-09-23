# Install Node.js

The Node.js/NPM versions in the Linux package manager are usually pretty old, so it's best to manually install a newer version.

First, go to <https://nodejs.org> and download either the LTS or Current binary archive, depending on your needs.

Then (update the VERSION and DISTRO values accordingly):

1. Unzip the binary archive to `/usr/local/lib/nodejs`.

```bash
VERSION=v10.15.0
DISTRO=linux-x64
sudo mkdir -p /usr/local/lib/nodejs
sudo tar -xJvf node-$VERSION-$DISTRO.tar.xz -C /usr/local/lib/nodejs 
```

2. Add the following at the end of `~/.profile`:

```bash
# Nodejs
VERSION=v10.15.0
DISTRO=linux-x64
export PATH=/usr/local/lib/nodejs/node-$VERSION-$DISTRO/bin:$PATH
```

3. Refresh your profile:

```bash
. ~/.profile
```

4. Test the installation:

```bash
node -v
```

```bash
npm version
```

```bash
npx -v
```

---

Source: <https://github.com/nodejs/help/wiki/Installation#how-to-install-nodejs-via-binary-archive-on-linux>
