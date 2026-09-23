# Deploy Blazor WebAssembly to GitHub Pages

Create a Blazor webassembly project, e.g.:

```bash
dotnet new blazorwasm -o BlazorWasmTest
```

Publish:

```bash
dotnet publish -c Release -o output
```

The **base** tag in **output/wwwroot/index.html** needs to be updated.  Change this tag:

```html
<base href="/" />
```

To this:

```html
<base href="https://root-of-github-page/" />
```

For example, if your GitHub username is **johndoe**, and your repo name is **my-cool-repo**, then your GitHub page URL tag will be this:

```html
<base href="https://johndoe.github.io/my-cool-repo/" />
```

If you want to simplify this, e.g., in a Makefile, use these commands in a Makefile target:

```bash
dotnet publish -c Release -o output
cd output/wwwroot; sed -i 's|<base href="/" />|<base href="https://johndoe.github.io/my-cool-repo/" />|' index.html
```

In the repo, enable GitHub pages and add a Static HTML GitHub action as the deployment method.  Update the static.yml file for the action as follows: In **jobs**, **deploy**, **steps**, **with**, **path**, change `path: '.'` to `path: 'output/wwwroot'`.

When you commit, the contents of output/wwwroot will automatically be deployed.
