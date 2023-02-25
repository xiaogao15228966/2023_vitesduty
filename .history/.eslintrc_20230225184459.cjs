module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    parser: '@typescript-eslint/parser'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'no-console': 'off'
  }
}
