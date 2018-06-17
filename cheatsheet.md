This is for things that I picked up while working through JS 30.

# HTML Stuff

## Elements
### `<audio>` elements
HTML supports `<audio>` elements, which, as the name implies, embed an audio link into the document. If you have a
reference to them in a JS script, you can play them with the `.play()` method. Like the `<img>` element, these require
a "source" to work at all, but you can either define that through the element's `src` attribute or by nesting a
`<source>` element inside it. You can also place plain text inside them. When you do, it will be displayed when the
audio player fails to load at all. You can also link `label` elements to them by giving them an `id` attribute.

### `<source>` elements
`<source>` elements allow you to define a source for the `<picture>`, `<audio>`, or `<video>` elements. It's most
commonly used to provide multiple file formats for the same content, to ensure the highest degree of compatability.

## General Attributes
### `data-*`
The `data-*` attribute (you can choose what the asterisk is) allows you to create custom data types in your HTML
document, to be later retrieved and manipulated by other languages like JS. To access them through JS, you need to use
the `.dataset` property on a referenced HTML element. You can then reference a specific data attribute by using the
data name as a property of that. So, say that you give an element an attribute of `data-example="Blah"`. Once you have a
reference to that element, you can reference the data type through `element.dataset.example`.

You can also use hyphens in your data names in HTML, but you can't do the same in JS. If you give an element an
attribute like `data-obnoxiously-long-nonsense=":)"`, you have to render it as `element.dataset.obnoxiouslyLongNonsense`
in JS.

# CSS Stuff
## Selectors
### Attribute Selector – `[attribute]` or `element[attribute]`
Selects all elements that have the attribute contained within brackets. Has seven possible forms:
* `[attribute]` – Targets all elements that contain the given attribute; it's value isn't considered
* `[attribute=value]` – Targets all elements that contain the given attribute and the specified value
* `[attribute*=value]` – Targets all elements that contain the value somewhere inside
* `[attribute~=value]` – Targets all elements that contain this value within their space-separated list of values
* `[attribute^=value]` – Targets all elements with the attribute and a value that **starts** with the characters in the selector's value
* `[attribute|=value]` – Targets all elements with the attribute and a value that **starts** with the characters in the selector's value – in a hyphen-seperated list
* `[attribute$=value]` – Targets all elements with the attribute and a value that **ends** with the characters in the selector's value

For example of `attribute|=value`, say that you have two HTML elements. One has a `data-years` value of `1900-2000`,
while the other has a value of `1800-1900`. If you use `[data-years|="1900"]`, you'll select the first, but not the
second.

# JS Stuff

## Events
### Event Types
#### Keyboard Events
* `keypress` – For when the user presses a key other than the more "control-based" ones, like `Ctrl` and `Shift`. This event seems like it can only be placed on `Window`.
#### Animation Events
* `transitionend` - For when a CSS transition ends

### Event Properties
* `.target` – Allows you to retrieve which element the event fired on

## Array Methods
### `Array.from()`
You can create an array from any other data type, such as a node list, through the `Array.from()` method. You just need
to place the other data inside it as an argument. Doing so will strip any prototype methods, so if you end up using
`for (let i in variable)`, the prototype methods will never be iterated over.

### `.forEach()`
Takes a function as its argument. Applies that function to each element within an array.

## DOM Methods
### `.addEventListener()`
Takes up to three arguments, the third of which is optional. The first is the event type, the second is the function
that gets called when that event type happens on the specified element, and the third can be four things:
* Nothing (completely omitted)
* options (an object)
* useCapture (a boolean)
* wantsUntrusted (Firefox-exclusive boolean)

I'll look up what possible values 2–4 are later.

## DOM Properties
### `classList`
Returns a DOMTokenList object. Doesn't have that many properties. Has `.add` and `.remove` methods for adding and
removing classes.

## Document Selectors
* `document.querySelector()` – Returns first HTML element that can be targeted by CSS selector passed as argument
* `document.querySelectorAll()` – Returns nodeList of all elements that can be targeted by the CSS selector passed as an argument
* `document.getElementById()` – Gets a single element, based on the string passed as an argument.
* `document.getElementsByClass()` – Returns HTMLCollection object containing all elements that have the class name provided as the argument.
