# bind-operator-emulation

## "Emulates" some of the behavior of the bind operator (::) proposal

This repository was built to exemplify how to achieve some of the benefits of the [bind operator (::) proposal](https://github.com/tc39/proposal-bind-operator) using current JavaScript technology.

## Example (based on the TC39 proposal)

The proposal introduces a new operator `::`, which can't be used in JavaScript currently.

The solution, as it will be explained below, would work like this:

```js
import * as S from 'some-library';

getPlayers()
  [S.map](x => x.character())
  [S.takeWhile](x => x.strength > 100)
  [S.forEach](x => console.log(x));
```
## How does it work?

Our hypothetical library exports a symbol, which is the name of the function, and adds a corresponding method in JavaScript's native object prototype(s).

This example would create a `takeWhile` function, which would only work in arrays:

```js
export const takeWhile = Symbol(); // create a unique symbol for this method

Array.prototype[takeWhile] = function (/* ... */) { /* ... */ } // Actual implementation
```

The following would work on _most_ JavaScript values, except `undefined`, `null` or `Object`s created with `Object.create(null)`:

```js
export const customMethod = Symbol();

Object.prototype[customMethod] = function (/* ... */) { /* ... */ }
```

The benefit is that a library may export tens of methods, and only those used by the library consumer would be included in the bundle (see next section).

Most JavaScript developers would agree that changing the prototype of native objects is not recommended. However, this method at least doesn't introduce the chance of naming conflicts.

## Testing it yourself

If you clone this repository and run `yarn install` and `yarn build`, the file `lib/example.js` will be created. Only the necessary functions will be included in this file, although the `src/fake-library` module exports other functions.

In `rollup.config.js`, the option `treeshake.moduleSideEffects` has to be `false` in order for unused modules to be tree-shaken.
