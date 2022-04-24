export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Song Quiz',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icons/desktop/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Prompt:wght@700&display=swap',
      },
    ],
  },

  loading: '~/components/UI/LoadingBar/LoadingBar.vue',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/scss/base.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~plugins/global-components.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    [
      '@nuxtjs/axios',
      { baseUrl: 'https://levi9-song-quiz.herokuapp.com/api/' },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  transition: {
    name: 'fade',
    mode: 'out-in',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
