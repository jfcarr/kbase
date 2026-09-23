# Check and Update .NET 10 Project Templates

List all installed templates, all columns (this will _not_ show update status, though):

```bash
dotnet new list --columns-all
```

Show templates that have updates available, but don't update them:

```bash
dotnet new update --check-only
```

Update all templates to latest version(s):

```bash
dotnet new update
```
