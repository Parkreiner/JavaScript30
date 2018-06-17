# Things I Picked Up While Working Through JS30
This is for things that I picked up by working through JS 30.

## HTML Stuff

### Elements
#### `<audio>` elements
HTML supports `<audio>` elements, which, as the name implies, embed an audio link into the document. If you have a
reference to them in a JS script, you can play them with the `.play()` method. Like the `<img>` element, these require
a "source" to work at all, but you can either define that through the element's `src` attribute or by nesting a
`<source>` element inside it. You can also place plain text inside them. When you do, it will be displayed when the
audio player fails to load at all. You can also link `label` elements to them by giving them an `id` attribute.

#### `<source>` elements
`<source>` elements allow you to define a source for the `<picture>`, `<audio>`, or `<video>` elements. It's most
commonly used to provide multiple file formats for the same content, to ensure the highest degree of compatability.

### General Attributes
#### `data-*`
The `data-*` attribute (you can choose what the asterisk is) allows you to create custom data types in your HTML
document, to be retrieved and manipulated by other languages like JS. 

## CSS Stuff

## JS Stuff