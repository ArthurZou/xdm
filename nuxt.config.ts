import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    'nuxt-auth-utils',
    '@nuxtjs/color-mode',
  ],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light',
  },
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
