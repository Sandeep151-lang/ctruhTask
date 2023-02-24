/* eslint-disable no-undef */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest":true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
         //"prettier"
    ],
    "settings":{
        "react":{
            "version":"detect"
        }
    },
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/react-in-jsx-scope":"off",
       
  "no-empty": "warn"
    }
}
