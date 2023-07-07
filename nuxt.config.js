// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    // baseURL: process.env.NUXT_APP_BASE_URL || '/'
    public: {
      BASE_API: process.env.BASE_URL
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    ['@dargmuesli/nuxt-cookie-control', {
      // untyped module options
      colors: {
        barBackground: '#1F2937',
        barButtonBackground: '#fff',
        barButtonColor: '#000',
        barButtonHoverBackground: '#333',
        barButtonHoverColor: '#fff',
        barTextColor: '#fff',
        checkboxActiveBackground: '#000',
        checkboxActiveCircleBackground: '#fff',
        checkboxDisabledBackground: '#ddd',
        checkboxDisabledCircleBackground: '#fff',
        checkboxInactiveBackground: '#000',
        checkboxInactiveCircleBackground: '#fff',
        controlButtonBackground: '#fff',
        controlButtonHoverBackground: '#000',
        controlButtonIconColor: '#000',
        controlButtonIconHoverColor: '#fff',
        focusRingColor: '#808080',
        modalBackground: '#fff',
        modalButtonBackground: '#000',
        modalButtonColor: '#fff',
        modalButtonHoverBackground: '#333',
        modalButtonHoverColor: '#fff',
        modalOverlay: '#000',
        modalOverlayOpacity: 0.8,
        modalTextColor: '#000',
        modalUnsavedColor: '#fff',
      },

      cookies: {
        necessary: [
          {
            //if multilanguage
            name: {
              en: 'Default Cookies'
            },
            //else
            name: 'Default Cookies',
            //if multilanguage
            description: {
              en: 'Used for cookie control.'
            },
            //else
            description: 'Used for cookie control.',
            cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies']
          }

        ],
        optional: [
          {
            name: 'Google Analitycs',
            //if you don't set identifier, slugified name will be used
            identifier: 'ga',
            //if multilanguage
            description: {
              en: 'Google GTM is ...'
            },
            //else
            description: 'Google GTM is...',

            initialState: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=<API-KEY>',
            async: true,
            cookies: ['_ga', '_gat', '_gid'],
            accepted: () => {
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
              });
            },
            declined: () => {
            }
          }

        ],
      },

      // The milliseconds from now until expiry of the cookies that are being set by this module.
      cookieExpiryOffsetMs: 1000 * 60 * 60 * 24 * 365, // one year

      // Names for the cookies that are being set by this module.
      cookieNameIsConsentGiven: 'ncc_c',
      cookieNameCookiesEnabledIds: 'ncc_e',

      // Switch to toggle the button that opens the configuration modal.
      isControlButtonEnabled: true,

      text: {
        locale: {
          en: {
            barTitle: 'Cookies Different',
            barDescription: 'We use our own cookies and third-party...',
          },
        },

        //this will override locale text
        barTitle: 'Override Title'
      }


    }]
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
