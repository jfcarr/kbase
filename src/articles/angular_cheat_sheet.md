# Angular Cheat Sheet

## Create Application

```bash
ng new my-app
```

(ng is the [Angular CLI](angular_cli.md))

Questions asked during project creation:

```txt
Angular routing? Yes/**No**

Stylesheet format?

  * **CSS**
  * SCSS
  * Sass
  * Less
```

## Serve the Application

```bash
cd my-app

ng serve --open
```

`ng serve` builds the application and starts the development server.

The `--open` flag opens the running application in a browser.

## Bundle for Distribution

First, go to the root of the project:

```bash
cd my-app
```

Then, you can build for dev:

```bash
ng build
```

Or for production, which will result in smaller files:

```bash
ng build --prod
```

Production files are generated in the `dist/` directory.

## Related

[NPM Cheat Sheet](npm_cheat_sheet.md)
