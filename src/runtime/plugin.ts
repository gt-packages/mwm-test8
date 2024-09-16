import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin({
  name: 'mwm-test8-plugin',
  // eslint-disable-next-line unused-imports/no-unused-vars
  setup: (nuxtApp) => {
    console.log('mwm-test8-plugin setup')
  },
  hooks: {
    'app:created'() {
      console.log('mwm-test8-plugin app:created')
    },
  },
})
