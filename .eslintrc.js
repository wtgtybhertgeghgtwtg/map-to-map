const path = require('path');

// Rushstack: "This is a workaround for https://github.com/eslint/eslint/issues/3458".
require('@rushstack/eslint-config/patch/modern-module-resolution');

module.exports = {
  extends: [
    '@rushstack/eslint-config/profile/node',
    '@rushstack/eslint-config/mixins/tsdoc',
    'plugin:eslint-comments/recommended',
    'plugin:unicorn/recommended',
  ],
  overrides: [
    {
      files: ['types/*.d.ts'],
      rules: {
        // Type files should have the name of the packages that use them, which don't necessarily follow this rule (e.g. `JSONStream`).
        'unicorn/filename-case': 'off',
      },
    },
    {
      files: ['*.ts'],
      rules: {
        '@rushstack/typedef-var': 'off',
      },
    },
  ],
  parserOptions: {
    project: path.join(__dirname, './tsconfig.json'),
  },
  rules: {
    'eslint-comments/no-unused-disable': 'error',
    // Since this is covered by 'eslint-comments/no-unlimited-disable'.
    'unicorn/no-abusive-eslint-disable': 'off',
    'unicorn/no-unsafe-regex': 'error',
  },
};
