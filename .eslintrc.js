module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'react-native'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-unused-vars': ['warn'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'prettier/prettier': 'off',
        'react-native/no-inline-styles': 'off',
      },
    },
  ],
};
