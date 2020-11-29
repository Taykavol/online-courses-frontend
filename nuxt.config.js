
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel:"stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"},
      {rel:"stylesheet",href:"https://unpkg.com/pattern.css"}
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    "~plugins/vue-js-modal.js",
    "~plugins/vue-notifications.js",
  ],
  env: {
    baseUrl: process.env.NODE_ENV == 'production'? "production Frontend" : 'http://localhost:3000',
    dev: process.env.NODE_ENV !== 'production',
    // https://my-prisma-app-vologda.herokuapp.com
    baseUrlBackend: process.env.NODE_ENV == 'production'? 'production Backend' : 'http://localhost:4000',
    s3Url:process.env.s3Url || 'https://chess-courses.hb.bizmrg.com/'
  },
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,

  
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */

 build: {
  vendor: ['vue-notifications','vue-js-modal']
},

}
