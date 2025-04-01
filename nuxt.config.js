import colors from 'vuetify/es5/util/colors'

export default {
  ssr: false,
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - pinakes.IA',
    title: 'PINAKES.IA',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/pinakes.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/services.ts'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  auth: {
    strategies: {
      keycloak: {
        scheme: '~/plugins/keycloak.js',
        endpoints: {
          authorization: "https://cobib-keycloak.tcti.ibict.br/realms/ibict/protocol/openid-connect/auth",
          userInfo: "https://cobib-keycloak.tcti.ibict.br/realms/ibict/protocol/openid-connect/userinfo",
          token: "https://cobib-keycloak.tcti.ibict.br/realms/ibict/protocol/openid-connect/token",
          logout: "https://cobib-keycloak.tcti.ibict.br/realms/ibict/protocol/openid-connect/logout"
        },
        token: {
          property: 'access_token',
          type: 'Bearer',
          name: 'Authorization',
          maxAge: 1800
        },
        refreshToken: {
          property: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30,
        },
        logoutRedirectUri: 'https://frontend-ccn.tcti.ibict.br/',
        responseType: 'code',
        grantType: 'authorization_code',
        clientId: 'ibict-frontend',
        scope: ['profile', 'email','realm_access.roles', 'openid'],
        codeChallengeMethod: 'S256',
      },
    },
    redirect: {
      login: '/',
      callback: '/auth/callback',
      home: '/home',
      logout: '/',
    },
  },

  axios: {
    baseURL: 'https://pinakesia.api.pinakesdev.com/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
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
  build: {}
}
