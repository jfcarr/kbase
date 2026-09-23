# MySQL command line -- quick tips

## From Bash

### Login (localhost access)

```bash
mysql -u <userid> -p
```

## From the MySQL command prompt

### List all databases on the current server

```txt
mysql> show databases;
```

### Switch to a database

```txt
mysql> use <db name>;
```

### Show all tables in the currently selected database

```txt
mysql> show tables;
```

### View a table’s schema

```txt
mysql> describe <table name>;
```

### Issue a select statement (example)

```txt
mysql> select * from <table name>;
```

### Limit number of rows returned in a select

> [!NOTE]
> TOP doesn’t work in MySQL…

```txt
mysql> select * from <table name> limit 0,10;
```
