# Bundling a Multiple Module Python Project Into a Zip File

A Python project with multiple modules can be bundled into a single .zip file for easy deployment, similar to a [JAR file](https://en.wikipedia.org/wiki/JAR_(file_format)). This doesn't manage dependencies (like [Freeze](https://wiki.python.org/moin/Freeze) or [py2exe](https://www.py2exe.org/)) but for systems where you know that the project dependencies (and a Python interpreter) are already installed, it makes using the project much easier.

Here's a simple example. Let's say you have a Python project with two modules: `__main__.py` and `mygreeting.py`. (For the .zip bundle to work, the entry point must be in a file named `__main__.py`)

main.py
```python
import mygreeting
import sys
    
arg_count = len(sys.argv)
    
print('Number of arguments:', arg_count, 'argument(s).')
print('Argument List:', str(sys.argv))
    
greeter = mygreeting.MyGreeter()
    
greeter.say_hello("" if arg_count == 1 else sys.argv[1])
```

mygreeting.py
```python
class MyGreeter:
    def __init__(self) -> None:
        pass
    
    def say_hello(self, name = ""):
        print("Hello there!" if name == "" else f"Hello, {name}!")
```

Compress all of the source files into a .zip file:

```bash
zip myapp.zip *.py
```

Then, execute the bundle with the Python interpreter:

```bash
python3 myapp.zip
```

Output:

```txt
Number of arguments: 1 argument(s).
Argument List: ['myapp.zip']
Hello there!
```

You can also pass arguments to the bundle:

```bash
python3 myapp.zip Jim
```

Output:

```txt
Number of arguments: 2 argument(s).
Argument List: ['myapp.zip', 'Jim']
Hello, Jim!
```

You can also make a bundle that can be run directly:

```bash
echo '#!/usr/bin/env python3' | cat - myapp.zip > myapp
 
chmod u+x myapp
```

Run it:

```bash
./myapp
```

Same output:

```txt
Number of arguments: 1 argument(s).
Argument List: ['myapp.zip']
Hello there!
```

You can copy the .zip or executable bundle anywhere on your system as a single file, and it will be runnable. Very handy!
