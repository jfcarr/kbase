# SQL Server in Linux

## Installation

Distro | Instructions
---------|----------
Red Hat | [link](https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-red-hat)
Suse | [link](https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-suse)
Ubuntu | [link](https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-ubuntu)
Docker | [link](https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker)

## Server Control

Check status of SQL Server Service:

```bash
systemctl status mssql-server
```

Stop the SQL Server Service:

```bash
sudo systemctl stop mssql-server
```

Start the SQL Server Service:

```bash
sudo systemctl start mssql-server
```

Restart the SQL Server Service:

```bash
sudo systemctl restart mssql-server
```

Disable the SQL Server Service:

```bash
sudo systemctl stop mssql-server
 
sudo systemctl disable mssql-server
```

Enable the SQL Server Service:

```bash
sudo systemctl enable mssql-server
 
sudo systemctl start mssql-server
```

(You can get a script to simplify these commands [here](https://github.com/jfcarr/shell-scripts/blob/master/ssctrl.sh).)

## Log Files

Type | Location
---------|----------
SQL Server engine | /var/opt/mssql/log/errorlog
Installer | /var/opt/mssql/setup-< time stamp representing time of install>

Log files are UTF-16 encoded. If needed (e.g., for 'more' or 'less' commands), you can encode in UTF-8 as follows:

```bash
sudo iconv –f UTF-16LE –t UTF-8 <errorlog> -o <output errorlog file>
```
