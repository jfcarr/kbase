# Scaffold a Simple Go Project

For this exercise, we'll create a Go project called "my-greeter".

## Create the project

Create a directory for the project and `cd` into it:

```bash
mkdir my-greeter

cd my-greeter
```

When you import packages from other modules, those dependencies are managed through your code's module.  This is defined by a go.mod file that will track those modules. The go.mod file must stay with your project, including in your source code repository (if applicable).

When you enable dependency tracking, you should provide a name that reflects the module your code will be in.  For actual development, this will typically be the repository location where your source code will be kept. For example, the module path might be `github.com/mymodule`. If you plan to publish your module for others to use, the module path must be a location from which Go tools can download your module. Learn more here: [Managing dependencies](https://go.dev/doc/modules/managing-dependencies#naming_module).

For this example, just use `example/my-greeter`:

```bash
go mod init example/my-greeter
```

Output:

```
go: creating new go.mod: module example/my-greeter
```

This will create a `go.mod` file with contents similar to this:

```
module example/my-greeter

go 1.27.1
```

## Add a program

Next, create a `greeter.go` file and paste this content into it:

```go
package main

import "fmt"

func main() {
	fmt.Println("Greetings!")
}
```

In this code:

* A `main` package is declared.  A package provides a way to group functions.
* The [fmt package](https://pkg.go.dev/fmt/) is imported. It provides functions for formatting text, including printing to the console. This package is part of the standard library, so it doesn't need to be added as an external package.
* A `main()` function is implemented, providing an entry point into the program.

Run the file:

```bash
go run greeter.go
```

Output:

```
Greetings!
```

## Call an external package

We'll add a "quote" package and call a function in it.

1. Go to pkg.go.dev and [search for a "quote" package](https://pkg.go.dev/search?q=quote).
2. Locate and click on `v1` of the `rsc.io/quote` package. You'll see a list of functions available in the package.  (We'll be using the `Go()` function)

Update `greeter.go` so that it looks like this:

```go
package main

import (
	"fmt"

	"rsc.io/quote"
)

func main() {
	fmt.Println("Greetings! Here's a quote:")

	fmt.Println(quote.Go())
}
```

You'll notice a couple of changes:

1. We've added an import for the external "quote" package, and
2. We're calling the Go() function in that package.

But this alone is not adequate. If we try to run the project now, we get an error:

```bash
go run greeter.go
```

Output:

```
greeter.go:6:2: no required module provides package rsc.io/quote; to add it:
	go get rsc.io/quote
```

This is because we're attempting to import a package that hasn't been added to the project.  Let's fix it:

```bash
go get rsc.io/quote
```

Output:

```
go: downloading rsc.io/quote v1.5.2
go: downloading rsc.io/sampler v1.3.0
go: downloading golang.org/x/text v0.0.0-20170915032832-14c0d48ead0c
go: added golang.org/x/text v0.0.0-20170915032832-14c0d48ead0c
go: added rsc.io/quote v1.5.2
go: added rsc.io/sampler v1.3.0
```

The `go get` command adds the quote package to the project, along with references to additional packages that quote depends on.

To accomplish this, the `go.mod` file gets updated:

```
module example/my-greeter

go 1.27.1

require (
	rsc.io/quote v1.5.2
	golang.org/x/text v0.0.0-20170915032832-14c0d48ead0c // indirect
	rsc.io/sampler v1.3.0 // indirect
)
```

And a new `go.sum` file is added:

```
golang.org/x/text v0.0.0-20170915032832-14c0d48ead0c h1:qgOY6WgZOaTkIIMiVjBQcw93ERBE4m30iBm00nkL0i8=
golang.org/x/text v0.0.0-20170915032832-14c0d48ead0c/go.mod h1:NqM8EUOU14njkJ3fqMW+pc6Ldnwhi/IjpwHt7yyuwOQ=
rsc.io/quote v1.5.2 h1:w5fcysjrx7yqtD/aO+QwRjYZOKnaM9Uh2b40tElTs3Y=
rsc.io/quote v1.5.2/go.mod h1:LzX7hefJvL54yjefDEDHNONDjII0t9xZLPXsUe+TKr0=
rsc.io/sampler v1.3.0 h1:7uVkIFmeBqHfdjD+gZwtXXI+RODJ2Wc4O7MPEh/QiW4=
rsc.io/sampler v1.3.0/go.mod h1:T1hPZKmBbMNahiBKFy5HrXp6adAjACjK9JXDnKaTXpA=
```

Now, our program works:

```bash
go run greeter.go
```

Output:

```
Greetings! Here's a quote:
Don't communicate by sharing memory, share memory by communicating.
```

References can also be refreshed at any time with this:

```bash
go mod tidy
```

If we run it now, we see that `go.mod` gets reorganized a bit:

```
module example/my-greeter

go 1.27.1

require rsc.io/quote v1.5.2

require (
	golang.org/x/text v0.0.0-20170915032832-14c0d48ead0c // indirect
	rsc.io/sampler v1.3.0 // indirect
)
```

Finally, we can generate a standalone executable with this:

```bash
go build
```

This produces a statically linked binary:

```bash
file my-greeter
```

Output:

```
my-greeter: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), statically linked,
Go BuildID=L3BxWSF4oD-DWwXKLm72/Bz3veI-EabZcdQArLtVF/DxUbGthXdYMhCtveD6dv/wnXe8ZvLnaBOp751-Odv,
BuildID[sha1]=611276cb88c0cd80efc9142e96779c266816d23f, with debug_info, not stripped
```

And we can run it directly:

```bash
./my-greeter
```

Output:

```
Greetings! Here's a quote:
Don't communicate by sharing memory, share memory by communicating.
```
