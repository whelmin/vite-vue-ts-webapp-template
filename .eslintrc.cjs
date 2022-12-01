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
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'], // dep: eslint-config-prettier (Make sure to put it last, so it gets the chance to override other configs.)
  plugins: ['prettier'], // dep: eslint-plugin-prettier
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: {
      // Script parser for `<script>`
      js: 'espree',

      // Script parser for `<script lang="ts">`
      ts: '@typescript-eslint/parser',

      // Script parser for vue directives (e.g. `v-if=` or `:attribute=`)
      // and vue interpolations (e.g. `{{variable}}`).
      // If not specified, the parser determined by `<script lang ="...">` is used.
      '<template>': 'espree',
    },
  },
  rules: {
    // 违反 Prettier 的规则就报 error
    'prettier/prettier': 'error',
    // override eslint-plugin-vue/vue3-recommended some rule
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 3,
        },
        multiline: {
          max: 2,
        },
      },
    ],
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'beside',
        multiline: 'below',
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/html-indent': [
      'error',
      2,
      {
        closeBracket: {
          startTag: 1,
        },
      },
    ],
  },
};
