# 📘 Foundation of JavaScript - In Depth

## 📚 Table of Contents

1. [Introduction to JavaScript](#introduction-to-javascript)
2. [JavaScript Syntax](#javascript-syntax)
3. [Variables and Data Types](#variables-and-data-types)
4. [Operators](#operators)
5. [Control Structures](#control-structures)
6. [Functions](#functions)
7. [Objects and Arrays](#objects-and-arrays)
8. [Scope and Closures](#scope-and-closures)
9. [Hoisting](#hoisting)
10. [This Keyword](#this-keyword)
11. [DOM Manipulation](#dom-manipulation)
12. [Events](#events)
13. [Error Handling](#error-handling)
14. [ES6+ Features](#es6-features)
15. [Asynchronous JavaScript](#asynchronous-javascript)
16. [Best Practices](#best-practices)
17. [References](#references)

## 🧾 Introduction to JavaScript

- JavaScript is a **high-level**, **interpreted**, and **dynamically typed** programming language.
- It is primarily used to build **interactive web applications**.
- Originally created by **Brendan Eich** in 1995 at Netscape.

**Use Cases:**

- Front-end development (browser interaction)
- Back-end development (Node.js)
- Mobile apps, desktop apps, games, IoT

---

## ✍️ JavaScript Syntax

```javascript
// Single-line comment

/*
 Multi-line comment
*/

let name = "Arsha"; // Variable declaration
console.log(name); // Output to console
```

- Case-sensitive
- Semicolons are optional (but recommended)
- Statements are executed sequentially

---

## 🔤 Variables and Data Types

### Variable Declarations

| Keyword | Scope    | Re-assignable | Re-declarable |
| ------- | -------- | ------------- | ------------- |
| `var`   | Function | ✅ Yes        | ✅ Yes        |
| `let`   | Block    | ✅ Yes        | ❌ No         |
| `const` | Block    | ❌ No         | ❌ No         |

### Data Types

- **Primitive Types**: `String`, `Number`, `Boolean`, `Undefined`, `Null`, `BigInt`, `Symbol`
- **Reference Types**: `Object`, `Array`, `Function`

```javascript
let str = "Hello";
let num = 10;
let isActive = true;
let undef;
let nul = null;
```

---

## ➕ Operators

### Arithmetic Operators

```javascript
+, -, *, /, %, ++, --
```

### Comparison Operators

```javascript
==, ===, !=, !==, >, <, >=, <=
```

### Logical Operators

```javascript
&&, ||, !
```

### Assignment Operators

```javascript
=, +=, -=, *=, /=, %=
```

### Ternary Operator

```javascript
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
```

---

## 🔁 Control Structures

### If-Else

```javascript
if (condition) {
  // code
} else if (condition) {
  // code
} else {
  // code
}
```

### Switch

```javascript
switch (value) {
  case 1:
    break;
  default:
}
```

### Loops

- **for**, **while**, **do-while**

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

---

## 🔧 Functions

```javascript
function greet(name) {
  return "Hello " + name;
}

const greetArrow = (name) => `Hi ${name}`;
```

### Function Types

- Function Declaration
- Function Expression
- Arrow Functions
- IIFE (Immediately Invoked Function Expression)

---

## 🧱 Objects and Arrays

### Objects

```javascript
const person = {
  name: "John",
  age: 30,
  greet() {
    console.log("Hello");
  },
};
```

### Arrays

```javascript
let fruits = ["Apple", "Banana"];
fruits.push("Mango");
```

### Useful Methods

- Array: `map`, `filter`, `reduce`, `forEach`, `find`
- Object: `Object.keys()`, `Object.values()`, `Object.entries()`

---

## 🔒 Scope and Closures

### Scope

- **Global Scope**
- **Function Scope**
- **Block Scope** (`let`, `const`)

### Closure

A closure is a function that retains access to variables from its lexical scope even when executed outside that scope.

```javascript
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
```

---

## 🏗️ Hoisting

- **Declarations** are hoisted, **initializations** are not.

```javascript
console.log(a); // undefined
var a = 10;
```

`let` and `const` are hoisted but not initialized (Temporal Dead Zone).

---

## 👤 `this` Keyword

- Refers to the **context** in which a function is called.

```javascript
const person = {
  name: "John",
  greet() {
    console.log(this.name);
  },
};
```

- Arrow functions do **not** have their own `this`.

---

## 🌐 DOM Manipulation

### Selecting Elements

```javascript
document.getElementById("id");
document.querySelector(".class");
```

### Changing Content

```javascript
element.textContent = "Hello";
element.innerHTML = "<b>Bold</b>";
```

### Changing Styles

```javascript
element.style.color = "red";
```

---

## 🧩 Events

```javascript
element.addEventListener("click", function () {
  alert("Clicked!");
});
```

Common Events: `click`, `mouseover`, `keydown`, `submit`

---

## 🛑 Error Handling

```javascript
try {
  // code that may fail
} catch (error) {
  console.error(error);
} finally {
  console.log("Always runs");
}
```

---

## 🚀 ES6+ Features

- `let`, `const`
- Arrow functions
- Template literals `Hello ${name}`
- Destructuring
- Spread & Rest
- Promises
- Classes

```javascript
const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
```

---

## ⏳ Asynchronous JavaScript

### Callbacks

```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched");
  }, 1000);
}
```

### Promises

```javascript
let promise = new Promise((resolve, reject) => {
  resolve("Success");
});
```

### Async/Await

```javascript
async function fetchData() {
  let data = await fetch("url");
}
```

---

## ✅ Best Practices

- Use `const` and `let` instead of `var`
- Avoid global variables
- Use strict equality (`===`)
- Use semicolons consistently
- Handle errors gracefully
- Modularize your code

---

## 📚 References

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)
- [You Don’t Know JS (Book Series)](https://github.com/getify/You-Dont-Know-JS)
