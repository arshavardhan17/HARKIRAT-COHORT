````markdown
# 📘 HTML & CSS Deep Dive

Welcome to the **HTML & CSS In-Depth Guide**. This documentation explores fundamental to advanced concepts of HTML elements, attributes, and CSS styling. It is ideal for beginners, intermediate learners, and even advanced developers seeking revision or in-depth understanding.

---

## 📒 Table of Contents

- [HTML Introduction](#html-introduction)
- [HTML Tags](#html-tags)
  - [Structural Tags](#structural-tags)
  - [Text Formatting Tags](#text-formatting-tags)
  - [List Tags](#list-tags)
  - [Form Tags](#form-tags)
  - [Media Tags](#media-tags)
  - [Table Tags](#table-tags)
  - [Semantic Tags (HTML5)](#semantic-tags-html5)
- [HTML Attributes](#html-attributes)
  - [Global Attributes](#global-attributes)
  - [Event Attributes](#event-attributes)
  - [Form Attributes](#form-attributes)
- [CSS Introduction](#css-introduction)
  - [CSS Syntax](#css-syntax)
  - [CSS Selectors](#css-selectors)
  - [CSS Properties](#css-properties)
  - [CSS Box Model](#css-box-model)
  - [CSS Positioning](#css-positioning)
  - [CSS Display & Flexbox](#css-display--flexbox)
  - [CSS Grid](#css-grid)
  - [CSS Media Queries (Responsive Design)](#css-media-queries-responsive-design)
  - [CSS Animations & Transitions](#css-animations--transitions)
- [Useful Tips & Best Practices](#useful-tips--best-practices)
- [Resources](#resources)

---

## 💡 HTML Introduction

**HTML (HyperText Markup Language)** is the standard markup language used to create the structure of web pages. HTML is composed of elements (tags) enclosed in angle brackets like `<tagname>`.

Example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```
````

---

## 🔖 HTML Tags

### Structural Tags

- `<html>` – Root of the HTML document
- `<head>` – Metadata section
- `<title>` – Page title
- `<body>` – Visible content
- `<header>`, `<main>`, `<footer>`, `<section>`, `<article>`, `<aside>`

### Text Formatting Tags

- `<h1>` to `<h6>` – Headings
- `<p>` – Paragraph
- `<strong>`, `<em>`, `<b>`, `<i>`, `<u>`, `<mark>`, `<small>`
- `<br>` – Line break
- `<hr>` – Horizontal rule
- `<pre>` – Preformatted text
- `<code>` – Inline code snippet
- `<blockquote>` – Quoted section

### List Tags

- `<ul>` – Unordered list
- `<ol>` – Ordered list
- `<li>` – List item
- `<dl>`, `<dt>`, `<dd>` – Description list

### Form Tags

- `<form>` – Form container
- `<input>` – Text field, checkbox, radio, file, etc.
- `<textarea>` – Multiline input
- `<button>` – Button
- `<select>` and `<option>` – Dropdown
- `<label>` – Label for input

### Media Tags

- `<img>` – Display image
- `<audio>` – Embed audio
- `<video>` – Embed video
- `<iframe>` – Embed external content
- `<canvas>` – Draw graphics
- `<svg>` – Scalable Vector Graphics

### Table Tags

- `<table>` – Table container
- `<tr>` – Table row
- `<td>` – Table data
- `<th>` – Table heading
- `<thead>`, `<tbody>`, `<tfoot>`, `<caption>`, `<colgroup>`

### Semantic Tags (HTML5)

- `<nav>`, `<header>`, `<footer>`, `<article>`, `<section>`, `<main>`, `<aside>`, `<figure>`, `<figcaption>`

---

## 🏷️ HTML Attributes

Attributes provide additional information about HTML elements.

### Global Attributes (used in any tag)

- `id` – Unique identifier
- `class` – Used for styling and scripting
- `style` – Inline CSS
- `title` – Tooltip
- `hidden` – Hides the element
- `tabindex` – Keyboard tab order
- `draggable` – Enables dragging
- `data-*` – Custom data attribute

### Event Attributes

- `onclick`, `onmouseover`, `onchange`, `oninput`, `onkeydown`, `onload`, `onerror`, etc.

### Form Attributes

- `action`, `method`, `enctype`, `placeholder`, `required`, `disabled`, `readonly`, `maxlength`, `pattern`, `value`, `autofocus`, `name`, `type`

---

## 🎨 CSS Introduction

CSS (Cascading Style Sheets) is used to control the layout and appearance of HTML elements.

### CSS Syntax

```css
selector {
  property: value;
}
```

Example:

```css
h1 {
  color: blue;
  font-size: 32px;
}
```

### CSS Selectors

- Universal: `*`
- Element: `div`, `p`
- Class: `.className`
- ID: `#idName`
- Grouping: `h1, h2, h3`
- Descendant: `div p`
- Child: `ul > li`
- Pseudo-class: `a:hover`, `li:first-child`
- Pseudo-element: `p::before`, `h1::after`
- Attribute: `input[type="text"]`

### CSS Properties

- **Text**: `color`, `font-family`, `font-size`, `line-height`, `letter-spacing`, `text-align`, `text-decoration`
- **Box**: `margin`, `padding`, `border`, `width`, `height`
- **Background**: `background-color`, `background-image`, `background-position`, `background-size`
- **Flexbox**: `display: flex`, `justify-content`, `align-items`, `flex-direction`
- **Positioning**: `position`, `top`, `left`, `z-index`
- **Display**: `block`, `inline`, `inline-block`, `none`, `flex`, `grid`
- **Others**: `opacity`, `visibility`, `overflow`, `box-shadow`, `border-radius`

---

## 📦 CSS Box Model

Every HTML element is a box made up of:

```markdown
+---------------------------+
| margin (outside) |
| +-------------------+ |
| | border | |
| | +-------------+ | |
| | | padding | | |
| | | +--------+ | | |
| | | | content| | | |
| | | +--------+ | | |
| | +-------------+ | |
| +-------------------+ |
+---------------------------+
```

---

## 📍 CSS Positioning

- `static` – Default
- `relative` – Moves relative to its normal position
- `absolute` – Positioned relative to nearest non-static parent
- `fixed` – Relative to viewport
- `sticky` – Scrolls until it hits threshold

---

## 📐 CSS Display & Flexbox

### `display`

- `block`, `inline`, `inline-block`
- `flex`, `grid`, `none`

### Flexbox

```css
.container {
  display: flex;
  flex-direction: row | column;
  justify-content: space-between | center;
  align-items: center | stretch;
}
```

---

## 🧱 CSS Grid

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
```

- `grid-template-rows`, `grid-column`, `grid-row`, `grid-area`

---

## 📱 CSS Media Queries (Responsive Design)

```css
@media (max-width: 768px) {
  body {
    background-color: lightblue;
  }
}
```

- Use for making layouts responsive on different devices

---

## 🎞️ CSS Animations & Transitions

### Transition

```css
button {
  transition: background-color 0.3s ease;
}
```

### Animation

```css
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100px);
  }
}

.box {
  animation: slide 2s infinite;
}
```

---

## 🛠️ Useful Tips & Best Practices

- Use external CSS for maintainability
- Use semantic HTML tags for better accessibility
- Avoid inline styles unless necessary
- Use class names that describe purpose, not appearance
- Combine and minify CSS in production
- Use `rem`/`em` for responsive font sizes
- Practice mobile-first design
- Use CSS variables (`--main-color`) for theme consistency

---

## 📚 Resources

- [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [W3Schools](https://www.w3schools.com/)
- [CSS-Tricks](https://css-tricks.com/)
- [freeCodeCamp](https://www.freecodecamp.org/)

---
