# bind-operator-emulation

## Emulates the behavior of the bind operator proposal

See `src/example.ts` (taken from the TC39 proposal).

If you clone this repository and run `yarn install` and `yarn build`, the file `lib/example.js` will be created. Only the necessary functions will be included in this file, although the `src/fake-library` module exports other functions.

In `rollup.config.js`, the option `treeshake.moduleSideEffects` has to be `true` in order for unused functions to be tree-shaken.
