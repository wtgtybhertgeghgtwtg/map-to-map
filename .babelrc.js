module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: process.env.NODE_ENV === 'test' && 'commonjs',
        targets: {node: '8'},
      },
    ],
    '@babel/preset-flow',
  ],
};
