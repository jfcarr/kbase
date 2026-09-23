# Add Settings File to .NET Console Application

## App Settings File

Create `appsettings.json` file in project root. Example contents:

```json
{
  "Settings": {
    "Title": "My Application",
    "Timeout": 30
  }
}
```

## Packages / Project Output

Add the following packages to the project's .csproj file:

```xml
<ItemGroup>
  <PackageReference Include="Microsoft.Extensions.Configuration.Binder" Version="7.0.4" />
  <PackageReference Include="Microsoft.Extensions.Configuration.EnvironmentVariables" Version="7.0.0" />
  <PackageReference Include="Microsoft.Extensions.Configuration.Json" Version="7.0.0" />
</ItemGroup>
```

Add the following directive to copy the appsettings file with the binary:

```xml
<ItemGroup>
  <Content Include="appsettings.json">
    <CopyToOutputDirectory>Always</CopyToOutputDirectory>
  </Content>
</ItemGroup>
```

## Settings Class

Create a class to hold the settings:

```csharp
public sealed class AppSettings
{
  public required string Title { get; set; }
  public required int Timeout { get; set; }
}
```

## Initialize Configuration

Initialize the configuration, and retrieve the settings:

```csharp
IConfiguration config = new ConfigurationBuilder()
  .AddJsonFile("appsettings.json")
  .AddEnvironmentVariables()
  .Build();

AppSettings appSettings = config.GetRequiredSection("Settings").Get<AppSettings>();
```

## Access Settings

Access the settings:

```csharp
var title = appSettings.Title;
var timeout = appSettings.Timeout;
```

## Alternate Access Method

> [!TIP]
> If you use this method exclusively, you don't need the settings class.

```csharp
var title = config.GetValue<string>("Settings:Title");
var timeout = config.GetValue<int>("Settings:Timeout");
```
