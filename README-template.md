# fp-and-or
[![npm version](https://img.shields.io/npm/v/fp-and-or.svg)](https://npmjs.org/package/fp-and-or)

Simple `and` and `or` functional programming predicates.

- `or(...args): boolean` - a higher-order function that composes multiple predicates into one, such that the composed predicate will return true if **at least** one of the arguments are true or evaluate to true.
- `and(...args): boolean` - a higher-order function that composes multiple predicates into one, such that the composed predicate will return true **all** of the arguments are true or evaluate to true.

(A predicate is a function that returns a `boolean`, commonly used in `Array.prototype.filter`)

e.g.

```js
const isEven = n => n%2 === 0
const isPositive = n => n > 0

// un-fancy
items.filter(x => isEven(x) || isPositive(x))

// fancy
items.filter(or(isEven, isPositive))
```

## Install

```sh
npm install --save fp-and-or
```

## Usage

```js
const { and, or } = require('fp-and-or')

<%=usage%>
