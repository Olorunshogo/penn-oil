import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['./assets/css/main.css'],
  modules: ['@nuxt/image', '@nuxt/icon'],

  app: {
    head: {
      title: 'Penn Petro Energy Corporation - Human Energy | https://vercel.com/bom-projects/pen-oil',
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes',
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/Logo/Logo_transparent_bg.png' },
        
        { rel: 'icon', sizes: '192x192', href: '/favicons/android-chrome-192x192.png' },
        { rel: 'icon', sizes: '512x512', href: '/favicons/android-chrome-512x512.png' },
        
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
        
        { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
        { rel: 'manifest', href: '/favicons/site.webmanifest' },

      ]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },

  plugins: [
    './plugins/aos.client.js'
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ]
  }

  
});