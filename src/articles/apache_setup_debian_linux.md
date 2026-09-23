# Apache Setup in Debian/Ubuntu

> [!TIP]
> This works for Raspberry Pi as well, if you are running Raspberry Pi OS (a Debian derivative)

## Setup

Install Apache, with PHP support:

```bash
sudo apt update

sudo apt install apache2 php libapache2-mod-php php-cli
```

Optionally, add support for some commonly-used PHP modules:

```bash
sudo apt install php-mysql php-curl php-gd php-mbstring php-xml
```

The PHP module will be enabled automatically.

Restart Apache:

```bash
sudo systemctl enable --now apache2

sudo systemctl restart apache2
```

Verify that both services are available and working:

```bash
systemctl status apache2

php -v
```

## Test

Create this test page as `/var/www/html/info.php`:

```html
<!DOCTYPE html>
<html>

<head>
    <title>PHP Test Site</title>
</head>

<body>
    <?php
    phpinfo();
    ?>
</body>

</html>
```

Then open it in a web browser to test.

Locally: `http://localhost/info.php`

or

From another computer:  `http://SERVER_IP/info.php`

If it displays the PHP information page, Apache is processing PHP correctly.

> [!IMPORTANT]
> Remove the test file afterward because it exposes configuration details.

## Serve Additional Sites

This will use "site1", on port 8080, as an example.

### Create directory with index file

Create local directory:

```bash
sudo mkdir -p /var/www/site1
```

Add a simple index file:

```bash
echo "<html><body><p>Site 1</p></body></html>" | sudo tee /var/www/site1/index.html
```

### Add ports to Apache

Edit the ports configuration:

```bash
sudo vi /etc/apache2/ports.conf
```

Add:

```apache
Listen 8080
```

### Create virtual-host configuration

Create `/etc/apache2/sites-available/site1.conf` and add:

```apache
<VirtualHost *:8080>
    ServerName site1.local

    DocumentRoot /var/www/site1

    <Directory /var/www/site1>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/site1-error.log
    CustomLog ${APACHE_LOG_DIR}/site1-access.log combined
</VirtualHost>
```

> [!NOTE]
> The ServerName value is only a label. Since the site uses a different port, you don't need a subdomain or local DNS.

### Enable the site

```bash
sudo a2ensite site1.conf
```

Test the configuration:

```bash
sudo apachectl configtest
```

Restart Apache:

```bash
sudo systemctl reload apache2
```

### Test locally and over the network

On the Apache server:

```bash
curl http://localhost:8080
```

From another device on the LAN, open: `http://SERVER_IP:8080`

