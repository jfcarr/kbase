# Manual Installation of .NET SDK in Linux

If you've already installed one or more .NET SDK versions via the package manager, uninstall them before proceeding.

Download the SDK versions you want to install from [here](https://dotnet.microsoft.com/en-us/download/dotnet). For this example, I'll be installing .NET 8 and .NET 10, downloaded as **dotnet-sdk-8.0.416-linux-x64.tar.gz** and **dotnet-sdk-10.0.100-linux-x64.tar.gz**, respectively.

Open a terminal.

If `~/.dotnet` already exists (from a previous installation), remove it:

```bash
rm -rf ~/.dotnet
```

Create a new, empty .dotnet directory:

```bash
mkdir ~/.dotnet
```

Extract the SDK archive(s) into the .dotnet directory:

```bash
tar zxf dotnet-sdk-8.0.416-linux-x64.tar.gz -C ~/.dotnet/

tar zxf dotnet-sdk-10.0.100-linux-x64.tar.gz -C ~/.dotnet/
```

Add to .profile:

```txt
export DOTNET_ROOT=$HOME/.dotnet
 
export PATH=$PATH:$DOTNET_ROOT:$DOTNET_ROOT/tools
```

Restart to apply the new .profile settings.

Open a new terminal and verify that the dotnet CLI is working correctly:

```bash
dotnet --list-sdks
```

You should see something like this:

```txt
8.0.416 [/home/username/.dotnet/sdk]
10.0.100 [/home/username/.dotnet/sdk]
```

Taken from here: <https://learn.microsoft.com/en-us/dotnet/core/install/linux-scripted-manual#manual-install>
