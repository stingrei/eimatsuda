export default {

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - ' + 'Ei Matsuda',
    title: 'Ei Matsuda',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hi! I am an experienced Front-end developer based in TORONTO moved from TOKYO.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#FFE072' },
      { name: 'theme-color', content: '#FFE072' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Ei Matsuda' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://ei-matsuda.com/' },
      { hid: 'og:title', property: 'og:title', content: 'Ei Matsuda' },
      { hid: 'og:description', property: 'og:description', content: 'Hi! I am an experienced Front-end developer based in TORONTO moved from TOKYO.' },
      { hid: 'og:image', property: 'og:image', content: 'https://ei-matsuda.com/portrait_new.jpg' },
      { name: 'twitter:card', content: 'summary' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap' },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/icons/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/icons/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/icons/favicon-16x16.png" },
      { rel: "manifest", href: "/icons/site.webmanifest" },
      { rel: "mask-icon", color: "#FFE072", href: "/icons/safari-pinned-tab.svg" },
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/6e604703b1.js',
        crossorigin: 'anonymous'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~/assets/sass/common.scss', lang: 'scss' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/assets/plugins/utils.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'G-HMZDVQPDK5',
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: 'G-HMZDVQPDK5'
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // ssr: true
}
