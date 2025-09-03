module.exports = {
  root: true,
  env: {
    'react-native/react-native': true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', '@typescript-eslint', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'react-native': {
      components: ['ThemedText'],
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'react-native/no-raw-text': 'off',
    'react-native/sort-styles': 'off',
  },
};
