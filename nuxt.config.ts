// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    'nuxt-auth-utils',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  content: {
    experimental: {
      sqliteConnector: 'native'
    }
  },
  runtimeConfig: {
    supabase: {
      url: '',
      serviceRoleKey: '',
    },
  },
})
