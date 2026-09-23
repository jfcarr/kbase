# Entity Framework

## Model Generation

Instructions are for .NET 7

### MySQL

```bash
dotnet new console –o applicationName
 
cd applicationName
 
dotnet add package MySql.EntityFrameworkCore --version 7.0.2
 
dotnet add package Microsoft.EntityFrameworkCore.Tools --version 7.0.14
```

If the Entity Framework tool is not already installed:

```bash
dotnet tool install --global dotnet-ef --version 7.*
```

Then, generate the model files in the models directory:

```bash
dotnet ef dbcontext scaffold "server=127.0.0.1;port=3306;uid=jimc;pwd=password;database=database_name" MySql.EntityFrameworkCore -o models -f
```

### SQL Server

```bash
dotnet new console –o applicationName
 
cd applicationName
 
dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 7.0.14
 
dotnet add package Microsoft.EntityFrameworkCore.Tools --version 7.0.14
```

If the Entity Framework tool is not already installed:

```bash
dotnet tool install --global dotnet-ef --version 7.*
```

Then, generate the model files in the models directory:

```bash
dotnet ef dbcontext scaffold "Server=server_ip_address;User Id=sa;Password=password;Database=database_name;Encrypt = No" Microsoft.EntityFrameworkCore.SqlServer -o models -f
```

## More Info

[Entity Framework Core](https://learn.microsoft.com/en-us/ef/core/)

[Data Annotations - Column Attribute in EF 6 & EF Core](https://www.entityframeworktutorial.net/code-first/column-dataannotations-attribute-in-code-first.aspx)

[Querying and Finding Entities](https://learn.microsoft.com/en-us/ef/ef6/querying/)
