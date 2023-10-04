module.exports = {
    "extends": [
        "react-app",
        "react-app/jest"
      ],
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:react/recommended",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "rules": {
        "no-console": "warn",
        "no-alert": "warn",
        "no-debugger": "warn",
        "max-lines": ["error", 1000],
        "max-lines-per-function": ["error", 100],
        "max-params": ["error", 7],
        "max-len": [
            "error",
            {
                "code": 120
            }
        ],
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "object-curly-spacing": ["warn", "always"],
        "space-before-blocks": "warn",
        "comma-dangle": ["error", "never"],
        "semi": ["warn", "always"],
        "dot-notation": "error",
        "quotes": ["error", "single"],
    }
}
