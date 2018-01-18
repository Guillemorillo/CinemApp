module.exports = {
  css: ['~/assets/styles/main.scss'],
  /*
  ** Headers of the page
  */
  head: {
    title: 'CinemApp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'CinemApp, movies and opinion ' },
      { hid: 'keywords', name: 'keywords', content: 'cine, moovie, peli, pelicula' },
      { hid: 'image', property: 'og:image', name: 'og:image', content: '' },
      { hid: 'url', property: 'og:url', name: 'og:url', content: 'https://www.cinemapp.com' },
      { hid: 'title', property: 'og:title', name: 'og:title', content: 'CinemApp' },
      { hid: 'ogdescription', property: 'og:description', name: 'og:description', content: 'CinemApp, movies and opinion ' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' }

    ],
    script: [
      { type: 'text/javascript', src: '/jquery.js' },
      { type: 'text/javascript', src: '/tether.js' },
      { type: 'text/javascript', src: '/bootstrap.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
