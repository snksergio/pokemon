module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "react-app",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/react"
  ],
  "plugins": [
    "prettier",
    "react"
  ],
  "env": {
    "node": true,
    "browser": true
  },
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "all",
      }
    ],
    "jsx-a11y/no-autofocus": "off",
    "react/jsx-filename-extension": "off"
  }
}
