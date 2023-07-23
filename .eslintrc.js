module.exports = {
    env: {
        'browser': true,
        'es2021': true
    },
    extends: [
        'airbnb-typescript/base',
        'prettier',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
    ],
    overrides: [
    ],
    parserOptions: {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.eslint.json',
    },
    plugins: ['react', 'react-native', '@typescript-eslint', 'prettier'],
    rules: {
      'no-var': 'error',
      'no-debugger': 'off',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': ['error'],
      'import/extensions': 'off',
      'import/prefer-default-export': 'off',
      'no-console': 1,
      'import/no-extraneous-dependencies': 'off',
      'prettier/prettier': ['error'],
    }
}
