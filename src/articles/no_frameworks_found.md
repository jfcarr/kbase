# No Frameworks Were Found error

Error when executing dotnet cli in Linux:

```txt
No frameworks were found
```

To fix this, first remove the existing dotnet installation:

```bash
sudo apt remove 'dotnet*'

sudo apt remove 'aspnetcore*'

sudo apt remove 'netstandard*'
```

Then, reinstall each SDK:

```bash
sudo apt install dotnet-sdk-6.0

sudo apt install dotnet-sdk-7.0
```

---

Source: <https://stackoverflow.com/questions/73312785/dotnet-sdk-is-installed-but-not-recognized-linux-ubuntu-popos-22-04>
