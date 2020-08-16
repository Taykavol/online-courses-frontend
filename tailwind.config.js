/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      'xl1': '1450px',

    },
    // minWidth: {
    //   "0": "0",
    //   "24": "6rem",
    //   "32": "8rem",
    //   "1/4": "25%",
    //   "1/2": "50%",
    //   "3/4": "75%",
    //   full: "100%"
    // },
    // translate: {
    //   full: "100%"
    // }
    
  },
  variants: {
    // rotate: ["responsive", "hover", "group-hover"],
    // scale: ["responsive", "hover", "group-hover"]
  },
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
