export { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
   extends: 'content-wind',
   modules: [
    '@vite-pwa/nuxt'
  ],
  pwa: {
    /* PWA options */
  }
})
