# Markup and Code-Behind Examples for reveal.js

## Markup

### Animate Slide Transitions

The `data-auto-animate` decorator causes automatic display transition styling of matching header markup on slides.

```html
<section data-auto-animate>
  <h2>Slide One</h2>
  <p>Contents</p>
</section>
<section data-auto-animate>
  <h2>Slide Two</h2>
  <p>Contents</p>
</section>
```

### Block Quote

```html
<blockquote>
  Text of block quote.
</blockquote>
```

### Fragments

Show text incrementally on a slide:

```html
<section>
  <h2>Fragments</h2>
  <p>Hit the next arrow...</p>
  <p class="fragment">... to step through ...</p>
  <p><span class="fragment">... a</span> <span class="fragment">fragmented</span> <span class="fragment">slide.</span></p>
</section>
```

### Image Backgrounds

```html
<section data-background="image.png">
  <h2>Data Backgrounds</h2>
</section>
```

### Scale Image

```html
<img src="image.png" class="stretch" />
```

### Small Text

Nice formatting for long paragraphs.

```html
<small>
Text of paragraph.
</small>
```

### Syntax Highlighting

```html
<p> <pre><code class="language-c"> printf("Hello!\n"); </code></pre> </p>
```

## Customization

### Default Background Image

Add this _after_ the Reveal.initialize block:

```javascript
for (var slide of document.getElementsByTagName('section')) {
	if (!(slide.getAttribute('data-background') || slide.getAttribute('data-background-video') || slide.getAttribute('data-background-iframe') || slide.getAttribute('data-background-image'))) {
		slide.setAttribute('data-background-image', 'img/default-background.png')
	}
}
```

### Make Text Stand Out

For text that is hard to read, you can make it stand out by enclosing it in a translucent box.

First, create a `css/custom.js` file, and add this style:

```css
.background-box-black {
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 20px;
}
```

Include the custom CSS in your index.html:

```html
<link rel="stylesheet" href="css/custom.css">
```

Then, use it in a slide like this:

```html
<section>
  <div class="background-box-black">
    <p>Some text!</p>
  </div>
</section>
```

Here's some additional CSS for enhancing text display:

```css
.green-bold {
  color: green;
  font-weight: bold;
}
 
.red-bold {
  color: red;
  font-weight: bold;
}
 
.blue-bold {
  color: blue;
  font-weight: bold;
}
 
.simple-quote {
  background-color: rgba(0, 0, 0, 0.8);
  font-style: italic;
}
 
.force-italic {
  font-style: italic;
}
```
