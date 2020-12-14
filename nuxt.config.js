
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
      {rel:"stylesheet",href:"https://unpkg.com/pattern.css"},
      {rel:"stylesheet",href:"https://fonts.gstatic.com"},
      {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700;800;900&family=Montserrat:wght@800&family=Neuton&display=swap"}
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
  // router: {
  //   trailingSlash: true
  // },
  plugins: [
    "~plugins/vue-js-modal.js",
    "~plugins/vue-notifications.js",
    "~plugins/v-mask.js",
    "~plugins/LoadScript.js"
  ],
  env: {
    baseUrl: process.env.NODE_ENV == 'production'? "https://chess-courses.com" : 'http://localhost:3000',
    dev: process.env.NODE_ENV !== 'production',
    // https://my-prisma-app-vologda.herokuapp.com
    baseUrlBackend: process.env.NODE_ENV == 'production'? 'https://my-prisma-app-vologda.herokuapp.com' : 'http://localhost:4000',
    s3Url:process.env.NODE_ENV == 'production'? 'https://chess-courses.hb.bizmrg.com/' : 'https://chess-courses.hb.bizmrg.com/',
    lichessClientId:process.env.NODE_ENV == 'production'? 'HiJRdVFcIWpn8yj2':'IKGglix7XImcYLPc',
    // https://api-m.sandbox.paypal.com
    // https://www.sandbox.paypal.com
    paypalURL: process.env.NODE_ENV == 'production' ? 'https://paypal.com' :'https://www.sandbox.paypal.com',
    paypalClientId: process.env.NODE_ENV == 'production' ? 'AcKBt7lr_UgmiD9FJY6II7FQEPslK6sg-hKqdIo2PMazineptAtEWO_pxXC-TFu9RNNdAlVkeRBbTEs6' : 'AQecO_cPaI4jsY-S7rBVo0QxhQv_NP7gzZML2kACL8P6LqDWabpeo1JfkLFuwFYl3zRG6wB7cxu2h7NO'
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
