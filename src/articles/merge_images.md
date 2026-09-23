# Merge Images

## Side-by-Side (vertical)

```bash
convert ./input/*.jpg -append output.jpg
```

## Side-by-Side (horizontal)

```bash
convert ./input/*.jpg +append output.jpg
```

## Overlay

```bash
composite -blend 80 -gravity center input1.png input2.jpg output.png
```
