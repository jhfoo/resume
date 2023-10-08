// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    host: '0.0.0.0',
    port: 8000,
  },
  modules: [
    'nuxt-quasar-ui',
    '@pinia/nuxt',
  ],
  quasar: { /* */ },
  
})
