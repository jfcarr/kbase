# Quarto Special Markup

## Code Block with Filename

````txt
```{.c filename="main.c"}
#include <stdio.h>

int main() {
    printf("Hello, world!\n");

    return(0);
}
```
````

## Callout Blocks

```txt
:::{.callout-note}
This is a note.
:::
```

```txt
:::{.callout-tip}
This is a tip.
:::
```

```txt
:::{.callout-warning}
This is a warning.
:::
```

```txt
:::{.callout-caution}
This is a caution.
:::
```

```txt
:::{.callout-important}
This is important!
:::
```

## Spans

```txt
[This text is smallcaps]{.smallcaps}

[This text is underlined]{.underline}

[This text is highlighted]{.mark}
```

## Diagrams

Quarto has native support for embedding Mermaid and Graphviz diagrams. This enables you to create flowcharts, sequence diagrams, state diagrams, Gantt charts, and more using a plain text syntax inspired by markdown.

For example, here we embed a flowchart created using Mermaid:

````txt
```{mermaid}
flowchart LR
  A[Hard edge] --> B(Round edge)
  B --> C{Decision}
  C --> D[Result one]
  C --> E[Result two]
```
````

## Equations

```txt
inline math: $E = mc^{2}$
```

display math:

```txt
$$E = mc^{2}$$
```

## Raw Content

````txt
```{=html}
<iframe src="https://quarto.org/" width="500" height="400"></iframe>
```
````

## Videos

```txt
{{< video https://www.youtube.com/embed/wo9vZccmqwc >}}
```
