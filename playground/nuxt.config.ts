export default defineNuxtConfig({
  compatibilityDate: '2024-09-14',

  modules: [
    '@nuxt/eslint',
    '../src/module',
  ],

  mwmTest8: {},

  eslint: {
    checker: true,
    config: {
      standalone: false,
    },
  },

  devtools: { enabled: true },
})
