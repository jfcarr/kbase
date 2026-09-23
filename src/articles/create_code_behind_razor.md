# Create Code Behind File for Razor Page In Blazor Application

This example will use the Counter.razor page in the default Blazor WebAssembly App project.

Default Counter.razor page contains this:

Counter.razor
```csharp
@page "/counter"
    
<PageTitle>Counter</PageTitle>
    
<h1>Counter</h1>
    
<p role="status">Current count: @currentCount</p>
    
<button class="btn btn-primary" @onclick="IncrementCount">Click me</button>
    
@code {
    private int currentCount = 0;
    
    private void IncrementCount()
    {
        currentCount++;
    }
}
```

In the same directory, create a new class file named `Counter.razor.cs` with this content:

Counter.razor.cs
```csharp
namespace BlazorCodeBehind.Pages
{
    public partial class Counter
    {
    
    }
}
```

(Change `BlazorCodeBehind.Pages` to match the namespace for your project)

Copy and paste the contents of the @code block from Counter.razor into the class file so that it looks like this:

Counter.razor.cs
```csharp
namespace BlazorCodeBehind.Pages
{
    public partial class Counter
    {
        private int currentCount = 0;
    
        private void IncrementCount()
        {
            currentCount++;
        }
    }
}
```

Remove the code block from Counter.razor so that it looks like this:

Counter.razor
```csharp
@page "/counter"
    
<PageTitle>Counter</PageTitle>
    
<h1>Counter</h1>
    
<p role="status">Current count: @currentCount</p>
    
<button class="btn btn-primary" @onclick="IncrementCount">Click me</button>
```
