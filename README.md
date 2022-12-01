# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

## ESLint

- Formatting rules: 代码风格规则。
- Code-quality rules: 代码质量规则。

1. install `npm i -D eslint`
2. config new file: `.eslintrc.cjs`
3. auto check: Visual Studio Code 安装扩展

## Prettier

- 用于格式化代码，支持各种语言，属于 opinionated

1. install `npm i -D prettier`
2. config new file: `.prettierrc.json` `.prettierignore`

安装了 eslint 和 prettier 后，由于 eslint 的格式化能力很弱，比如不规律空格、不规律换行都检测不出来，所以安装 eslint-plugin-prettier 来加载 prettier 的代码风格和自动修复功能。



## eslint-plugin-prettier

1. install `npm i -D eslint-plugin-prettier`
2. enable eslint-plugin-prettier
   ```
    // .eslintrc.cjs add below config
    plugins: ['prettier'],
    rules: {
      // 违反 Prettier 的规则就报 error
      'prettier/prettier': 'error',
    },
   ```