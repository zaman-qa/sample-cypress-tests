module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:cypress/recommended"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {},
};
