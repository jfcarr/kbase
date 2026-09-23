# Side-by-Side .NET Core Installations

## Setup

This describes a setup where .NET Core 3.1 was installed first, then .NET Core 2.2 was installed later.

Since .NET Core 3.1 is the newest version, issuing a command like this:

```bash
dotnet new console -o MyConsoleApp
```

…creates a console application that targets v3.1. If you look at the .csproj file, you’ll see this:

```xml
<TargetFramework>netcoreapp3.1</TargetFramework>
```

## Project Level

There are a couple of ways to target v2.2. Different templates support different methods.

For a console app, simply edit the .csproj to reflect the version you want:

```xml
<TargetFramework>netcoreapp2.2</TargetFramework>
```

…and then restore:

```bash
dotnet restore
```

Some templates, like **webapi** and **mvc**, allow you to target an alternate version when you create the project:

```bash
dotnet new webapi -f netcoreapp2.2 -o MyWebService
```

## Framework Level

You can also control the default framework used by the CLI. We’ll continue using our example described above, where .NET Core 3.1 was installed first, then .NET Core 2.2 was installed later.

Since 2.2 was installed last, that makes it the default SDK:

```bash
dotnet --version
```

Result:

```txt
2.2.108
```

To change the default SDK version, first list your installed versions, and note the version you want to use as the default:

```bash
dotnet --list-sdks
```

Result:

```txt
2.2.108
3.1.301
```

(We’ll change our default to 3.1.301)

Create a global.json file. The setting in the global.json file will affect the dotnet cli when it’s invoked in any subdirectory under the location of the global.json file, so you’ll probably want to create it in a location like $HOME (for Linux), or C:\ (for Windows):

```bash
dotnet new globaljson
```

Then, edit the new global.json file, and update the “version” value to reflect the version you wish to be the default:

```json
{
  "sdk": {
    "version": "3.1.301"
  }
}
```

Then, the version reported by the CLI will match:

```bash
dotnet --version
```

Result:

```txt
3.1.301
```

## More Information

[How to install multiple versions of .NET Core side by side on ubuntu - Stack Overflow](https://stackoverflow.com/questions/39233865/how-to-install-multiple-versions-of-net-core-side-by-side-on-ubuntu)

[Side by Side user scoped .NET Core installations on Linux with dotnet-install.sh - Scott Hanselman's Blog](https://www.hanselman.com/blog/side-by-side-user-scoped-net-core-installations-on-linux-with-dotnetinstallsh)

[Switching between .NET Core SDK Versions](https://www.markheath.net/post/switching-between-netcore-sdk-versions)
