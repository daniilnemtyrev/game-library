module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@next/next/recommended",
    "airbnb",
    "airbnb/hooks",
  ],
  globals: {
    React: "writable",
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@next/next"],
  rules: {
    "import/no-unresolved": 0,
    "react/require-default-props": 0,
    "import/prefer-default-export": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".jsx"],
      },
    ],
    "react/button-has-type": 1,
    "no-unused-vars": 1,
    "react/jsx-props-no-spreading": 0,
    "no-shadow": 0,
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "react/function-component-definition": 0,
    "no-underscore-dangle": 0,
    "no-param-reassign": 0,
    "react/prop-types": 0,
    "implicit-arrow-linebreak": 0,
    "function-paren-newline": 0,
    quotes: ["error", "double"],
    camelcase: 0,
  },
};
