import GScroll from '@grcmichael/gscroll'

export default defineNuxtPlugin((/*nuxtApp*/) => {
  // nuxtApp.VueApp.use(GScroll)
  return {
    provide: {
      GScroll
    }
  }
})