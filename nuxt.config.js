export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  debug: true,
  head: {
    title: 'BackEndAgent',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    script: [
      {
        src: '/libs/jquery/jquery.min.js'
      },
      {
        src: '/libs/bootstrap/js/bootstrap.bundle.min.js'
      },
      {
        src: '/libs/simplebar/simplebar.min.js'
      },
      {
        src: '/libs/node-waves/waves.min.js'
      },
      {
        src: '/libs/jquery-sparkline/jquery.sparkline.min.js'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/app.css',
    '~/assets/css/custom.css',
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/icons.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/apexcharts.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
