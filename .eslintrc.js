/*
? Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint. 
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! ?
*/
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "@typescript-eslint/eslint-plugin"],
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "warn",
    "@typescript-eslint/array-type": [
      "warn",
      {
        default: "array-simple",
      },
    ],
    "@typescript-eslint/ban-types": [
      "off",
      {
        types: {
          Object: {
            message: "Avoid using the `Object` type. Did you mean `object`?",
          },
          Function: {
            message:
              "Avoid using the `Function` type. Prefer a specific function type, like `() => void`.",
          },
          Boolean: {
            message: "Avoid using the `Boolean` type. Did you mean `boolean`?",
          },
          Number: {
            message: "Avoid using the `Number` type. Did you mean `number`?",
          },
          String: {
            message: "Avoid using the `String` type. Did you mean `string`?",
          },
          Symbol: {
            message: "Avoid using the `Symbol` type. Did you mean `symbol`?",
          },
        },
      },
    ],
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/class-name-casing": "off",
    "@typescript-eslint/consistent-type-assertions": "warn",
    "@typescript-eslint/consistent-type-definitions": "warn",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/indent": [
      "warn",
      2,
      {
        CallExpression: {
          arguments: "first",
        },
        FunctionDeclaration: {
          parameters: "first",
        },
        FunctionExpression: {
          parameters: "first",
        },
        SwitchCase: 1,
      },
    ],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/member-delimiter-style": [
      "warn",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
      },
    ],
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-misused-new": "warn",
    "@typescript-eslint/no-misused-promises": [
      "warn",
      {
        checksVoidReturn: false,
        checksConditionals: false,
      },
    ],
    "@typescript-eslint/no-namespace": "warn",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-unnecessary-type-assertion": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-use-before-define": "warn",
    "@typescript-eslint/no-var-requires": "warn",
    "@typescript-eslint/prefer-for-of": "warn",
    "@typescript-eslint/prefer-function-type": "warn",
    "@typescript-eslint/prefer-namespace-keyword": "warn",
    "@typescript-eslint/quotes": ["warn", "double"],
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/restrict-plus-operands": "warn",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/semi": ["warn", "always"],
    "@typescript-eslint/triple-slash-reference": "warn",
    "@typescript-eslint/type-annotation-spacing": "warn",
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/unified-signatures": "warn",
    "arrow-body-style": "off",
    "arrow-parens": ["off", "always"],
    camelcase: "warn",
    "comma-dangle": "off",
    complexity: "off",
    "constructor-super": "warn",
    curly: "off",
    "default-case": "warn",
    "dot-notation": "warn",
    "eol-last": "off",
    eqeqeq: ["warn", "smart"],
    "guard-for-in": "warn",
    "id-blacklist": ["warn", "any", "Undefined", "undefined"],
    "id-match": "warn",
    "import/order": "off",
    "jsdoc/check-alignment": "off",
    "jsdoc/check-indentation": "off",
    "jsdoc/newline-after-description": "off",
    "linebreak-style": "off",
    "max-classes-per-file": ["warn", 1],
    "max-len": [
      "warn",
      {
        code: 120,
      },
    ],
    "new-parens": "off",
    "newline-per-chained-call": "off",
    "no-bitwise": "off",
    "no-caller": "warn",
    "no-cond-assign": "warn",
    "no-console": [
      "warn",
      {
        allow: [
          "log",
          "warn",
          "dir",
          "timeLog",
          "assert",
          "clear",
          "count",
          "countReset",
          "group",
          "groupEnd",
          "table",
          "dirxml",
          "groupCollapsed",
          "Console",
          "profile",
          "profileEnd",
          "timeStamp",
          "context",
        ],
      },
    ],
    "no-debugger": "warn",
    "no-empty": "warn",
    "no-eval": "warn",
    "no-extra-semi": "off",
    "no-fallthrough": "warn",
    "no-invalid-this": "off",
    "no-irregular-whitespace": "off",
    "no-multiple-empty-lines": "warn",
    "no-new-wrappers": "warn",
    "no-redeclare": "warn",
    "no-shadow": ["warn", { builtinGlobals: false, hoist: "functions", allow: [] }],
    "no-throw-literal": "warn",
    "no-trailing-spaces": "off",
    "no-undef-init": "warn",
    "no-underscore-dangle": "off",
    "no-unsafe-finally": "warn",
    "no-unused-expressions": "warn",
    "no-unused-labels": "warn",
    "no-var": "warn",
    "object-shorthand": "warn",
    "one-var": ["warn", "never"],
    "prefer-arrow/prefer-arrow-functions": "off",
    "prefer-const": "warn",
    "quote-props": "off",
    radix: "warn",
    "space-before-function-paren": "off",
    "space-in-parens": ["off", "never"],
    "spaced-comment": "warn",
    "use-isnan": "warn",
    "valid-typeof": "off",
  },
};