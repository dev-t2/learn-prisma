module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'arrow-parens': 0,
    'no-use-before-define': 0,
    'react/jsx-filename-extension': 0,
    'linebreak-style': 0,
    'no-shadow': 0,
    'arrow-body-style': 0,
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-unused-vars': 0,
  },
};
