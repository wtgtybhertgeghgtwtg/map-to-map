module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: process.env.NODE_ENV === 'test' && 'commonjs',
        targets: {node: '10'},
      },
    ],
    '@babel/typescript',
  ],
};
