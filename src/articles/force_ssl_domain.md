# Force SSL On Domain

## Force all web traffic to use HTTPS

Insert the following lines of code in the .htaccess file in your website’s root folder.

> [!IMPORTANT]
> If you have existing code in your .htaccess, add this above where there are already rules with a similar starting prefix.

```txt
RewriteEngine On
RewriteCond %{SERVER_PORT} 80 
RewriteRule ^(.*)$ https://www.yourdomain.com/$1 [R,L]
```

Be sure to replace **www.yourdomain.com** with your actual domain name.

## Force a specific domain to use HTTPS (v1)

Use the following lines of code in the .htaccess file in your website's root folder:

```txt
RewriteEngine On 
RewriteCond %{HTTP_HOST} ^example\.com [NC]
RewriteCond %{SERVER_PORT} 80 
RewriteRule ^(.*)$ https://www.yourdomain.com/$1 [R,L]
```

Make sure to replace **example\.com** with the domain name you're trying force to https. Additionally, you need to replace **www.yourdomain.com** with your actual domain name.

## Force a specific domain to use HTTPS (v2)

This version works on subdomains too. Just put the code in the root folder of the subdomain.

```
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

This is the one I'm currently using.

## Force SSL on a specific folder

Insert the code below into a .htaccess file placed in that specific folder:

```txt
RewriteEngine On 
RewriteCond %{SERVER_PORT} 80 
RewriteCond %{REQUEST_URI} folder 
RewriteRule ^(.*)$ https://www.yourdomain.com/folder/$1 [R,L]
```

Make sure you change the _folder_ reference to the actual folder name. Then be sure to replace _www.yourdomain.com/folder_ with your actual domain name and folder you want to force the SSL on.
