module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {ecmaVersion: 2020, sourceType: 'module', ecmaFeatures: {jsx: true}},
  env: {browser: true, node: true, es6: true},
  settings: {react: {version: 'detect'}},
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:security/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['react', 'prettier', '@typescript-eslint'],
  ignorePatterns: '*.ts',
  rules: {
    '@typescript-eslint/no-empty-function': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx', '.tsx']}],
    'implicit-arrow-linebreak': 'off',
    'comma-dangle': 'off',
    indent: 'off',
    'no-trailing-spaces': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'dot-notation': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-cycle': 'off',
    'class-methods-use-this': 'off',
    'no-plusplus': 'off',
    'no-case-declarations': 'off',
    'no-else-return': 'off',
    'import/prefer-default-export': 'off',
    'react/no-array-index-key': 'off',
    'max-len': ['error', {code: 140}],
    'no-console': 'warn',
    'security/detect-object-injection': 'off',
    'react/no-unknown-property': [
      'error',
      {ignore: ['preconnect', 'onError', 'variant', 'cancel_selector', 'fp_auth_key']},
    ],
  },
}
