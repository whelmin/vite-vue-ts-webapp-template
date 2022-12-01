module.exports = {
  // see: https://eslint.org/docs/latest/user-guide/configuring/language-options
  env: {
    // 识别 ES 的代码
    es6: true,
    // 识别 CommonJS, 如 module.exports语法, *.cjs
    node: true,
    // 支持浏览器环境
    browser: true,
  },
  extends: 'eslint:recommended',
  plugins: ['prettier'],
  rules: {
    // 违反 Prettier 的规则就报 error
    'prettier/prettier': 'error',
  },
};
