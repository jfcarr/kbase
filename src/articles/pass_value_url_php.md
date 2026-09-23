# Passing a value in the URL for use by PHP

When you pass a value in a URL, like this: <https://www.mysite.com/mypage.php?id=20>

You can access the value (or values) passed as follows:

```php
$myid = $_GET['id'];
```
