# stdio.h: No such file or directory

As a part of testing out Linux Mint XFCE 16, I created a simple “hello world” in C:

```c
#include <stdio.h>
 
main()
{
 printf ("Hello, world!\n");
}
```

But, when I tried to compile it:

```bash
gcc hello.c
```

I got this:

```txt
stdio.h: No such file or directory
```

It seems that there are a few libraries that are not installed by default. It's easy to add them, though:

```bash
sudo apt-get install build-essential
```

After doing this, the code compiles. 
