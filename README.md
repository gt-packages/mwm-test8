# mwm-test8

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![code style][code-style-src]][code-style-href]

mwm Test 8 desc

- [✨ Release Notes](/CHANGELOG.md)
- [🏀 Online playground](https://stackblitz.com/github/gt-packages/mwm-test8?file=playground%2Fapp.vue)

## Install

```bash
pnpm install add -D @gt-packages/mwm-test8
```

## Usage

### Nuxt

Add the plugin to your `nuxt.config.js`:

```ts
export default defineNuxtConfig({
  modules: [
    '@gt-packages/mwm-test8'
  ],

  mwmTest8: {
    // your module options
  }
})
```

## Release

Add your `GITHUB_TOKEN` to `.env` file or use web based login:

```bash
GITHUB_TOKEN=your_token
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@gt-packages/mwm-test8/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@gt-packages/mwm-test8
[npm-downloads-src]: https://img.shields.io/npm/dm/@gt-packages/mwm-test8.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@gt-packages/mwm-test8
[license-src]: https://img.shields.io/npm/l/@gt-packages/mwm-test8.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@gt-packages/mwm-test8
[code-style-src]: https://antfu.me/badge-code-style.svg
[code-style-href]: https://github.com/gt-packages/antfu-eslint-config
