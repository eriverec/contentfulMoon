require('dotenv').config();
const contentful = require('contentful');
export default {
  // Target (https://go.nuxtjs.dev/config-target)
  //target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'contentfulMoon',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap' }
    ],
    script: [{
      src: 'https://www.googletagmanager.com/gtag/js?id=UA-185905564-1',
      async: true
    }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'vuesax/dist/vuesax.css',
    'assets/main.css',
    'boxicons/css/boxicons.min.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/vuesax',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/google-analytics',
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit'
  ],

  markdownit: {
    injected: true,
    html: true,
    quotes: '“”‘’',
    linkify: true,
    typographer: true
  },

  googleAnalytics: {
    id: 'UA-185905564-1'
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    /*
       ** Run ESLint on save
       */
    extend(config, { isDev, isClient }) {

      config.node = {
        fs: 'empty'
      }
    }
  },

  generate: {
    routes: () => {
      const client = contentful.createClient({
        space: process.env.CTF_SPACE_ID,
        accessToken: process.env.CTF_CD_ACCESS_TOKEN
      });

      return client.getEntries({
        content_type: 'seccionOverol'
      }).then((response) => {
        return response.items.map(entry => {
          return {
            route: entry.fields.slug,
            payload: entry
          };
        });
      });
    }
  }
}
