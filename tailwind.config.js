/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      keyframes: {
        "animar-cursor": {
          "0%": {
            color: "rgb(124,58,237)",
          },
          "100%": {
            color: "rgb(0,0,0)",
          },
        },
      },
      animation: {
        "animar-cursor": "animar-cursor .8s infinite",
      },
    },
  },
  plugins: [],
}
