module.exports = {
  env: {
    browser: true,
  },
  extends: [
    "eslint-config-next",
    "plugin:react/recommended",
    "plugin:i18next/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "airbnb",
    "plugin:react/jsx-runtime",
    "prettier",
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["react", "i18next"],
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
    "i18next/no-literal-string": 1,
    "no-param-reassign": 0,
    "react/prop-types": 0,
    camelcase: 0,
  },
};
