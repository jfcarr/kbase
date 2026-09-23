# Start an X Windows session in Cygwin

First, make sure you’ve installed X Windows with a window manager in Cygwin. (I use WindowMaker.) Start a bash session, and enter the following:

```bash
xinit -e wmaker
```

(If you are using a window manager other than WindowMaker, you’ll need to change “wmaker” to match its name.)
