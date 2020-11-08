/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  theme: {
    screens: {
      ph: "320px",
      ph2: "450px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      xl1: "1450px"
    },
    fontFamily: {
      sans: ["system-ui", "-apple-system", "sans-serif"],
      serif: ["Georgia", "Cambria", "serif"],
      mono: ["Menlo", "Monaco", "monospace"],
      display: ["Neucha", "cursive"]
    },
    extend: {
      width: {
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%"
      },
      keyframes: {
        popup: {
          "0%": { transform: " translateY(-30px)", opacity:"1" },
          "100%": { transform: "translateY(0px)", opacity:"0" }
        }
      },
      animation: {
        popup: "popup 5s ease-in-out "
      }
    }
  },
  variants: {
    animation: ['responsive', 'hover'],
    // rotate: ["responsive", "hover", "group-hover"],
    // scale: ["responsive", "hover", "group-hover"]
  },
  plugins: [require("@tailwindcss/custom-forms")],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js"
    ]
  }
};
