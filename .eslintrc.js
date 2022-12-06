/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "prettier",
  ],
  env: {
    node: true,
    browser: true,
  },
};
