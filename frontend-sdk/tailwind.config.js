/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "phorange": "#F09124",
        "greneu": "#6EE7B7",
      },
      fontFamily: {
        poppins: ['Poppins', "sans-serif"],
        mont: ['Montserrat', "sans-serif"],
      },
      screens: {
        'mobile': '360px',
      }

    },
  },
  plugins:
    [require("daisyui"),
    require('tailwind-scrollbar-hide')],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {

          "primary": "#661AE6",

          "secondary": "#D926AA",

          "accent": "#1FB2A5",

          "neutral": "#D3D3D3",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",

  },




  animation: {
    none: {
      '0%, 100%': { transform: 'scale(1)' },
    }
  }
}
