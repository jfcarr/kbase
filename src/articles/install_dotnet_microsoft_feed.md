# Install .NET From Microsoft Feed in Ubuntu

## Remove Existing Installs

source: <https://learn.microsoft.com/en-gb/dotnet/core/install/linux-package-mixup?pivots=os-linux-ubuntu#i-need-a-version-of-net-that-isnt-provided-by-my-linux-distribution>

```bash
sudo apt remove 'dotnet*' 'aspnet*' 'netstandard*'
```

Create /etc/apt/preferences, if it doesn't already exist:

```bash
touch /etc/apt/preferences
```

Open /etc/apt/preferences in an editor and add the following settings, which prevents packages that start with dotnet, aspnetcore, or netstandard from being sourced from the distribution's repository:

```txt
Package: dotnet* aspnet* netstandard*
Pin: origin "<your-package-source>"
Pin-Priority: -10
```

Replace `<your-package-source>` with your distribution's package source. You can determine what it is with this:

```bash
apt-cache policy '~ndotnet.*' | grep -v microsoft | grep '/ubuntu' | grep updates | cut -d"/" -f3 | sort -u
```

## Reinstall .NET From the Microsoft Package Feed

source: <https://learn.microsoft.com/en-gb/dotnet/core/install/linux-ubuntu#register-the-microsoft-package-repository>

Open a terminal and run the following commands:

```bash
# Get Ubuntu version
declare repo_version=$(if command -v lsb_release &> /dev/null; then lsb_release -r -s; else grep -oP '(?<=^VERSION_ID=).+' /etc/os-release | tr -d '"'; fi)
 
# Download Microsoft signing key and repository
wget https://packages.microsoft.com/config/ubuntu/$repo_version/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
 
# Install Microsoft signing key and repository
sudo dpkg -i packages-microsoft-prod.deb
 
# Clean up
rm packages-microsoft-prod.deb
 
# Update packages
sudo apt update
```

Install the SDK you want, e.g., 8.0:

```bash
sudo apt install dotnet-sdk-8.0
```
