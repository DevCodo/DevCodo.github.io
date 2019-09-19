
module.exports = {
  mode: 'universal',

  head: {
    title: 'blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: 'blue' },

  css: [
    '@/theme/index.scss',
    'element-ui/lib/theme-chalk/index.css'
  ],

  plugins: [
    '@/plugins/globals'
  ],

  buildModules: [
  ],

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
  },

  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
