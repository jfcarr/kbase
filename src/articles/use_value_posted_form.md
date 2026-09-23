# Use a value from a posted form in PHP

When you post a form, the receiving page can process the form variables (in PHP) as follows:

```php
$targetvar = $_POST['formvariablename'];
```

It’s also a good idea to make sure you handle special HTML characters properly:

```php
$targetvar = htmlspecialchars($_POST['formvariablename']);
```
