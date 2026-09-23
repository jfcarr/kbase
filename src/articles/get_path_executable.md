# Get Path For Executable (.NET/C#)

To get the path that a .NET console executable resides in, regardless of where the executable was launched from:

```csharp
var exePath = Path.GetDirectoryName(Environment.ProcessPath ?? "")
```

This is useful in a scenario where you want to access a file that resides in the same directory, e.g., a configuration file:

```csharp
IConfiguration config = new ConfigurationBuilder()
    .AddJsonFile(Path.Join(Path.GetDirectoryName(Environment.ProcessPath ?? ""), "my-app-config.json"))
    .AddEnvironmentVariables()
    .Build();
```
