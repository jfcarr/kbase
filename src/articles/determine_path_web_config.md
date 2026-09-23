# Determine path to web.config at runtime

In C#, you can determine which web.config is being used with this:

```csharp
String pathToConfig = System.Web.HttpContext.Current.Server.MapPath("/Web.config");
```
