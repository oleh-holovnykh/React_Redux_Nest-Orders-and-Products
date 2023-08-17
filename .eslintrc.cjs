module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['@mate-academy/eslint-config'],
  ignorePatterns: ['dist', '.eslintrc.cjs', '/.husky/pre-commit'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    quotes: ['error', 'single'],
    'prettier/prettier': 'error',
  },
};
