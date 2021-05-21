module.exports = {
  env: {
    node: true,
    mocha: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "linebreak-style":[
      0,
      "windows"
    ],
    "no-return-assign":[
      2,
      "except-parens"
    ],
    "comma-dangle":[
      "error",
      "never"
    ],
    "brace-style":[
      "error",
      "stroustrup"
    ],
    "max-len": ["error", { "code": 200 }],
    "no-console": ["error", { allow: ["warn", "error","log"] }]
  },
};
