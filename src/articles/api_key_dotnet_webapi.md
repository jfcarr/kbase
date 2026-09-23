# API Key in .NET WebAPI Project

Create a webapi project, e.g.:

```bash
dotnet new webapi -o MyMicroservice
```

Add a middleware class:

```csharp
public class ApiKeyMiddleware
{
    private readonly string _apiKeyName;
    private readonly string _apiKeyValue;

    private readonly RequestDelegate _next;

    public ApiKeyMiddleware(RequestDelegate next, string apiKeyName, string apiKeyValue)
    {
        _next = next;
        _apiKeyName = apiKeyName;
        _apiKeyValue = apiKeyValue;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        if (!context.Request.Headers.TryGetValue(_apiKeyName, out var extractedApiKey))
        {
            context.Response.StatusCode = 401;
            await context.Response.WriteAsync("API Key was not provided.");
            return;
        }

        if (!_apiKeyValue.Equals(extractedApiKey))
        {
            context.Response.StatusCode = 403;
            await context.Response.WriteAsync("Unauthorized client.");
            return;
        }

        await _next(context);
    }
}
```

Handle the API key check in Program.cs with the following code.  Place this before the `app.MapControllers()` call:

```csharp
string? apiKeyName = "My-Api-Key-Name";
string? apiKeyValue = "85a80751-cc34-4a6e-9ad9-4d9c9bea403c";  // Do NOT store your actual key value inline!
                                                               // Retrieve it from a protected
                                                               // location, e.g., an Azure key vault.

// Validate the request:
app.UseMiddleware<ApiKeyMiddleware>(apiKeyName, apiKeyValue);
```

Calls to the API look like this:

```http
GET https://your_webservice_url/some_endpoint
Accept: application/json
My-Api-Key-Name: 85a80751-cc34-4a6e-9ad9-4d9c9bea403c
```
