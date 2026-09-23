# Call Async Method from Non-Async Method in C#

When you call an asynchronous method with an await, the method you're calling _from_ must also be asynchronous. But, sometimes that's problematic: Perhaps you're working with existing code, or you're implementing code in a context where it's difficult to make it asynchronous.

You can “localize” the management of asynchronous calls using `Task.Run()`. In the following code, look at the two instances of `Task.Run()`, `Wait()`, and `Result` to see how to do it:

```csharp
using (HttpContent content = new StringContent(text, Encoding.UTF8, "text/xml"))
using (HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Post, url))
{
    request.Headers.Add("SOAPAction", "");
    request.Content = content;
    var task1 = Task.Run(() => httpClient.SendAsync(request, HttpCompletionOption.ResponseHeadersRead));
    task1.Wait();
    var response = task1.Result;
 
    var task2 = Task.Run(() => response.Content.ReadAsStreamAsync());
    task2.Wait();
    var stream = task2.Result;
 
    using var reader = new StreamReader(stream);
    return reader.ReadToEnd();
}
```
