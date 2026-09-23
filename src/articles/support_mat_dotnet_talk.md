# Supporting Material for '.NET and Linux' tech talk

## Code Snippets

### Unguarded Code

```csharp
var registryValue =
	Registry.GetValue("HKEY_CURRENT_USER", "value", "blarg");

Console.WriteLine(registryValue);
```

This code will raise a type initializer exception if run on a non-Windows system.

It will also generate a compile-time warning: **“warning CA1416: This call site is reachable on all platforms. ‘Registry.GetValue(string, string?, object?)’ is only supported on: ‘windows'”**

### Guarded Code

```csharp
var registryValue = (OperatingSystem.IsWindows())
	? Registry.GetValue("HKEY_CURRENT_USER", "value", "blarg")
	: $"Registry does not exist in {Environment.OSVersion}";

Console.WriteLine(registryValue);
```

This code will run successfully on all platforms. It will not generate a compile-time warning, as the compiler will see that the code is guarded.

### Simple IoT Example

This is a simple code example for blinking an LED on a breakout board attached to a Raspberry Pi.

```csharp
using System;
using System.Device.Gpio;
using System.Threading;

Console.WriteLine("Blinking LED. Press Ctrl+C to end.");
int pin = 18;
using var controller = new GpioController();
controller.OpenPin(pin, PinMode.Output);
bool ledOn = true;
while (true)
{
    controller.Write(pin, ((ledOn) ? PinValue.High : PinValue.Low));
    Thread.Sleep(1000);
    ledOn = !ledOn;
}
```

Full example is [here](https://docs.microsoft.com/en-us/dotnet/iot/tutorials/blink-led).

## Links

[Download .NET](https://dotnet.microsoft.com/en-us/download) - Downloads for .NET, including ASP.NET Core.

[Install .NET on Linux Distributions](https://docs.microsoft.com/en-us/dotnet/core/install/linux)

[.NET Runtime Identifier (RID) catalog](https://docs.microsoft.com/en-us/dotnet/core/rid-catalog)

[.NET IoT](https://docs.microsoft.com/en-us/dotnet/iot/intro) - Develop apps for IoT devices with the .NET IoT Libraries.

[Writing cross platform P/Invoke code](https://docs.microsoft.com/en-us/dotnet/standard/native-interop/cross-platform)

### Language Comparison - Go

[go.dev](https://go.dev/) - Go home page

[Tutorial: Get Started with Go](https://go.dev/doc/tutorial/getting-started)

[Go by Example](https://gobyexample.com/) - Annotated example programs.

[Go GOOS and GOARCH](https://gist.github.com/asukakenji/f15ba7e588ac42795f421b48b8aede63) - Platform targeting values.

### Language Comparison - Rust

[Rust Programming Language](https://www.rust-lang.org/) - Rust home page

[Rust by Example](https://doc.rust-lang.org/stable/rust-by-example/) - Collection of runnable example programs illustrating various Rust concepts.

[Rust Cookbook](https://rust-lang-nursery.github.io/rust-cookbook/) - Collection of simple examples that demonstrate good practices to accomplish common programming tasks.

[Platform Support](https://doc.rust-lang.org/nightly/rustc/platform-support.html)