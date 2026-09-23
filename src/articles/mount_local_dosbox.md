# Mount local folder as drive C in DOSBox

Running DOSBox in Linux you can mount a local folder as drive C: as follows:

Open a Terminal.

```bash
cd .dosbox
 
vi dosbox-0.##.conf
```

(Use whatever editor you want.)

Add the following line in the `[autoexec]` section:

```txt
mount c ~/local_path
```

You can also add additional drives, if you want. Just specify another unique drive letter and local path on a new line.
