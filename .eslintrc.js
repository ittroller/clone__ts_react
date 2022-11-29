module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  plugins: ['react'],
  rules: {
    'comma-dangle': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',

    'no-console': 'warn',
    semi: 'off',
    eqeqeq: 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
    requireConfigFile: false,
    project: ['./tsconfig.json'],
  },
};
