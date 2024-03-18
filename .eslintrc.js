module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:react-native/all'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-native', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react-native/no-inline-styles': 'off',
    'react-native/no-raw-text': 'off',
    'react-native/no-color-literals': 'warn',
    'react-native/no-unused-styles': 'warn',

    'no-shadow': 'error',
    'no-unused-vars': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-shadow': ['error'],
    'react-hooks/exhaustive-deps': 'off',
    'no-undef': 'off',
    curly: 'off',
  },
};
