const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: colors.neutral,
        primary: colors.sky,
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xs: "1rem",
        sm: "2rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },

    screens: {

      sm: '480px',
      md: '568px',
      lg: '976px',
      xl: '1440px'

    },


    
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
}
