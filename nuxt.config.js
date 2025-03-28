// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  // runtimeConfig: {
  //   // baseURL: process.env.NUXT_APP_BASE_URL || '/'
  //   public: {
  //     baseUrl: '' //process.env.BASE_URL
  //   }
  // },
  head() {
    return {
      meta: [{
        hid: 'Aegir Consult Limited',
        property: 'Developing Innovative Solutions',
        content: 'Your trusted technology partner in Nairobi, Kenya, and the Sub-Saharan region. We specialize in cutting-edge geo-informatics, enterprise systems, systems integration, and hardware supply and configuration. With an exceptional roster of experienced, dedicated and knowledgeable Team, we pride ourselves on delivering tailor-made solutions that perfectly align with your unique business needs. '
      }]
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
    '@nuxtjs/google-fonts',
  ],

  css: [
    '~/assets/css/tailwind.css',
    'locomotive-scroll/dist/locomotive-scroll.css'
  ],

  build: {
    transpile: ['gsap'],
  },

  runtimeConfig: {
    public: {
      gtagId: 'G-MCWN9S0043',
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL
    }
  },

  devtools: {
    enabled: true,
  },
})
