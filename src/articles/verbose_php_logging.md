# Verbose PHP Logging To Web Browser

I was doing some local PHP development using the built-in PHP web server, e.g.:

```bash
php -S localhost:5000
```

I had a failing statement, and all I was getting was an Internal Server Error message.  I finally tracking down the problem by adding the following statements (temporarily) to my PHP code:

```php
error_reporting(2047);

ini_set("display_errors",1);
```

This caused verbose logging to be dumped to my browser, allowing me to understand the problem.
