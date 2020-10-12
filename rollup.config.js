import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.ts',
  output: [
    {
      exports: 'default',
      file: 'dist/index.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
    },
  ],
  plugins: [
    babel({babelHelpers: 'bundled', extensions: ['.ts']}),
    nodeResolve({extensions: ['.ts']}),
  ],
};
