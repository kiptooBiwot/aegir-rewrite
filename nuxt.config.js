// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // baseURL: process.env.NUXT_APP_BASE_URL || '/'
    public: {
      BASE_API: process.env.BASE_URL
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  buildModules: [
    '@nuxtjs/google-fonts'
  ],

  css: [
    '~/assets/css/tailwind.css',
    'locomotive-scroll/dist/locomotive-scroll.css'
  ],

  build: {
    transpile: ['gsap'],
  },

  devtools: {
    enabled: true,
  },
})
