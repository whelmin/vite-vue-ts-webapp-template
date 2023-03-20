# Vite + Vue 3 + TypeScript + ESLint + Prettier Repository Template

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## 技术栈

- Vue 3: The Progressive JavaScript Framework
- Pinia: The intuitive store for Vue TODO. 加到项目中
- Vite: Next Generation Frontend Tooling, Get ready for a development environment that can finally catch up with you.
- TypeScript
- Vue-router TODO. 加到项目中

## 项目代码风格管理

- eslint
- stylelint
- prettier
- commitlint // TODO. add README
- husky
- lint-staged

## Env

- node v16.19.1
- npm 8.19.3
- TODO. 加到项目中，脚本检测 env 是否正确
- TODO. 构建多页面应用配置
- TODO. 版本概念
- TODO. CICD

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

## ESLint

主要拥有两大功能：
- Formatting rules: 代码风格规则。
- Code-quality rules: 代码质量规则。

1. install `npm i -D eslint`
2. config new file: `.eslintrc.cjs`
3. Visual Studio Code 安装扩展: `ESLint`，开启在控制台展示 ESLint 错误， 开启保存时自动修复

  ```
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  },
  ```

## Prettier

- 用于格式化代码，支持各种语言，属于 opinionated, 强约定性

1. install `npm i -D prettier`
2. config new file: `.prettierrc.json` `.prettierignore`

项目安装了 eslint 和 prettier 后，由于 eslint 的格式化能力很弱，比如不规律空格、不规律换行都检测不出来，所以安装 eslint-plugin-prettier 来加载 prettier 的代码风格和启用自动修复功能。

## eslint-plugin-prettier

- 使用 eslint-plugin-prettier 来加载 prettier 的 js 代码风格和启用自动修复功能。

1. install `npm i -D eslint-plugin-prettier`
2. enable `eslint-plugin-prettier`
    ```
    // .eslintrc.cjs add below config
    plugins: ['prettier'],
    rules: {
      // 违反 Prettier 的规则就报 error
      'prettier/prettier': 'error',
    },
    ```
## eslint-config-prettier

- Turns off all rules that are unnecessary or might conflict with Prettier. 关闭所有不必要的或可能与 Prettier 冲突的规则。即 eslint 和 prettier 的规则发生冲突时，关闭 eslint 规则。

1. install `npm i -D eslint-config-prettier`
2. enabled `eslint-config-prettier`
    ```
    extends: [..., 'prettier'], 
    // (Make sure to put it last, so it gets the chance to override other configs.)
    ```

## eslint-plugin-vue

- Support .vue file

1. install `npm i -D eslint-plugin-vue`
2. enable `eslint-plugin-vue`
    ```
    // .eslintrc.cjs update below config
    module.exports = {
      extends: [
        // add more generic rulesets here, such as:
        // 'eslint:recommended',
        'plugin:vue/vue3-recommended',
        // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
      ],
      rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
      }
    }
    ```

## vue-eslint-parser @typescript-eslint/parser

- Support ts in .vue

1. install `npm i -D vue-eslint-parser @typescript-eslint/parser`
2. enabled
    ```
    // .eslintrc.cjs update below config
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
    ```

## StyleLint

1. install `npm i -D stylelint stylelint-prettier stylelint-config-prettier stylelint-config-standard`
   - stylelint-prettier 类似 eslint-plugin-prettier, 启用该插件来加载 prettier 的 style 代码风格和启用自动修复功能，如 .css, style。
   - stylelint-config-prettier, 关闭与 prettier 规则冲突的 stylelint
   - stylelint-config-standard, 推荐的规则集

2. config new file: `stylelint.config.cjs`
    ```
    // stylelint.config.cjs
    module.exports = {
      "plugins": ["stylelint-prettier"],
      "extends": [
        "stylelint-config-standard",
        "stylelint-config-prettier"
      ],
      "rules": {
        "prettier/prettier": true
      }
    }
    ```

3. Visual Studio Code 安装扩展: `Stylelint`，开启在控制台展示 StyleLint 错误，保存时自动修复

    ```
    // .vscode/settings.json
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": true,
    },
    ```
