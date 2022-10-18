import colors from 'vuetify/es5/util/colors'

export default {
  server: {
    host: '0',
    port: process.env.APP_PORT
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - projeto-financas',
    title: 'projeto-financas',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    'cookie-universal-nuxt',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    proxy: true,
    credentials: true,
  },
  proxy: {
    '/laravel': {
       target: process.env.API_URL,
       pathRewrite: { '^/laravel': '/' }
     }
  },
  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: `${process.env.MY_DOMAIN_URL}/laravel`,
        endpoints: {
          login: {
            url: '/login' // metodo de login vindo a api
          },
          logout:{
            url: '/logout' // metodo de logout vindo a api
          },
          user:{
            url: '/api/user/auth', // metodo que pega as informaÃ§Ãµes do user vindo a api
            method: 'GET'
          }
        },
      }
    },
    redirect:{
      login: '/login', // caso n esteja logado serÃ¡ redirecionado para essa pagina
      logout: '/login', // pÃ¡gina que o user Ã© redirecionado quando desloga
      home: '/' // pagina que o cliente Ã© redirecionando quando faz o login com sucesso
    }
  },

  router: {
    middleware: ['auth']
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
