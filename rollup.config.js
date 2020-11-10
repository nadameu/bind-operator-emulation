import typescript from '@rollup/plugin-typescript';
import * as path from 'path';

/** @type {import('rollup').RollupOptions} */
const options = {
  input: path.resolve('src', 'example.ts'),
  output: {
    dir: path.resolve('lib'),
    format: 'esm',
  },
  treeshake: { moduleSideEffects: false },
  plugins: [typescript()],
};

export default options;
