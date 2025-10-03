import prettier from 'eslint-plugin-prettier/recommended';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-unused-vars': 'warn',
      eqeqeq: 'error',
    },
  },
  prettier, // integrates Prettier with ESLint
];
