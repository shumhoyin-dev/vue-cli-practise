module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: 'off',
    semi: 'off',
    'comma-dangle': 'off',
    'vue/multi-word-component-names': 'off',
    "vuejs-accessibility/label-has-for": ["error", {
      "required": {
        "some": ["nesting", "id"]
      }
    }]
  },
};
