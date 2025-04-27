import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['./assets/css/main.css'],
  modules: ['@nuxt/image', '@nuxt/icon'],

  app: {
    head: {
      title: 'Chevron Corporation - Human Energy | Chevron.com',
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes',
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/Chevron/Chevron-logo.png' }
        // { rel: 'icon', type: 'image/x-icon', href: '/favicons/apple-touch-icon.png' },
        // { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
        // { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
        // { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
        // { rel: 'manifest', href: '/favicons/site.webmanifest' },

      ]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },

  vite: {
    plugins: [
      tailwindcss(),
    ]
  }

  
});