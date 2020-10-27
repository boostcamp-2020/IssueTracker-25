module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'airbnb-base', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error'],
    'no-use-before-define': ['error', { functions: false }],
  },
};
