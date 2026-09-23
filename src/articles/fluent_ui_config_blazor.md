# FluentUI Configuration In Blazor Application

# Project File

```xml
<ItemGroup>
   <PackageReference Include="Microsoft.FluentUI.AspNetCore.Components" Version="4.10.4" />
   <PackageReference Include="Microsoft.FluentUI.AspNetCore.Components.Icons" Version="4.10.4" />
</ItemGroup>
```

# Program.cs

```csharp
using Microsoft.FluentUI.AspNetCore.Components;
```

```csharp
builder.Services.AddRazorComponents()
   .AddInteractiveServerComponents();

builder.Services.AddFluentUIComponents();  // add this

var app = builder.Build();
```
# _Imports.razor

```txt
@using Microsoft.FluentUI.AspNetCore.Components
```

# Links

[FluentUI Blazor Components](https://www.fluentui-blazor.net/)
