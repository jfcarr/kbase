# Slim Framework

## System Requirements

* Your web server must support URL rewriting
* PHP 7.2 or newer

You’ll need the Composer tool. You can download it from the [Composer website](https://getcomposer.org), or install it from your package manager.

## New Project Setup

Go to the root folder of your project, and execute this command to install the Slim dependencies:

```bash
composer require slim/slim:"4.*"
```

The Slim files will be placed in your project’s vendor/ directory.

You’ll also need to install a PSR-7 implementation. Slim [supports several](https://www.slimframework.com/docs/v4/start/installation.html#step-3-install-a-psr-7-implementation-and-serverrequest-creator) . I used Slim PSR-7:

```bash
composer require slim/psr7
```

The PSR-7 files will also be placed in the vendor/ directory.

Create a public/ folder to hold your project files. You’ll now have two sub-directories in your project root, vendor/ and public/.

Create an .htaccess file in public/, and add the following contents:

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.php [QSA,L]
```

Create an index.php file in public/, and add the following contents:

```php
<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

require __DIR__ . '/../vendor/autoload.php';

$app = AppFactory::create();

$app->get('/', function ($request, $response, $args) {
$response->getBody()->write("Hello world!");
return $response;
});

$app->get('/value/{id}', function ($request, $response, $args) {
$passed_value = $args['id'];
$response->getBody()->write("Value is $passed_value");
return $response;
});

$app->run();
```

To test your new project, cd into public/, and start a PHP development server instance:

```bash
php -S localhost:8080
```

Open a web browser, and navigate to <http://localhost:8080>. You should see the following:

```txt
Hello world!
```

Navigate to <http://localhost:8080/value/2>. You should see the following:

```txt
Value is 2
```

You now have a simple starting configuration, with routing for the root URL, and also a simple RESTful endpoint at /value/{id}.

## Deployment

The entire project folder must be deployed to your web server, but the project should be served from the public/ directory.

For example, let’s say that you want your new service to be published in a subdomain at <https://myservice.your_domain_name.com/>:

1. Create a directory for your project on your web server, e.g., /home/username/www/myservice.
2. Upload your entire project folder to /home/username/www/myservice.
3. Configure the new subdomain <https://myservice.your_domain_name.com/> to be served from /home/username/www/myservice/public.
