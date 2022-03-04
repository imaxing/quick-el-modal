module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended', 'plugin:prettier/recommended'],
  rules: {
    'no-unused-vars': 0,
    'vue/no-v-html': 0,
    'no-debugger': 2,
    'no-console': 0,
    'prettier/prettier': 'error',
    'vue/require-default-prop': 2,
    'vue/max-attributes-per-line': 0
  }
}
