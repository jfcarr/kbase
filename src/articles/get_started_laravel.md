# Get Started With Laravel

Laravel is an open-source PHP web framework. It follows the [model-view-controller](../glossary.md#modelviewcontroller-mvc) architectural pattern, and is based on Symfony.

To use it, you’ll first need the **composer** tool, which you can install from your package manager.

Then, install the Laravel CLI as follows:

```bash
composer global require laravel/installer
```

If it complains about ext-zip, similar to this:

```txt
laravel/installer v2.0.1 requires ext-zip * → the requested PHP extension zip is missing from your system.
```

...then determine which version of PHP you’re running, and install the appropriate PHP zip version:

```bash
php --version
 
sudo apt-get install php7.2-zip
```

After Laravel CLI is installed, you can create a new Laravel project as follows.

Example project named “blog”:

```bash
laravel new blog
```

If the Laravel CLI complains about ext-dom, install it as follows (making sure you’re referencing the correct PHP version):

```bash
sudo apt-get install php7.2-xml
```
