module.exports = {
  env: {
    node: true,
    es6: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:jest/recommended',
    'eslint:recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': ['error'],
    'no-use-before-define': ['error', { functions: false }],
    'import/no-dynamic-require': 1,
    'global-require': 1,
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    requireConfigFile: false,
  },
  settings: {
    jest: {
      version: 26,
    },
  },
};
