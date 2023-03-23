/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './routes/**/*.{md,mdx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary : {
          100: "#DCF9F4",
          200: "#BAF3ED",
          300: "#8FDBD9",
          400: "#67B2B7",
          500: "#397C87",
          600: "#296374",
          700: "#1C4C61",
          800: "#12374E",
          900: "#0A2840",
        },
        
        success:{
          100: "#E9FBD6",
          200: "#CEF8AF",
          300: "#A7EA83",
          400: "#80D560",
          500: "#4DBA32",
          600: "#339F24",
          700: "#1E8519",
          800: "#0F6B12",
          900: "#095911",
        },

        info: {
          100: "#D0E8FE",
          200: "#A3CEFD",
          300: "#74AFFA",
          400: "#5193F5",
          500: "#1A68EF",
          600: "#1350CD",
          700: "#0D3BAC",
          800: "#08298A",
          900: "#041C72",
        },

        warning: {
          100: "#FEFBCD",
          200: "#FDF69B",
          300: "#FAEE69",
          400: "#F5E544",
          500: "#EFD809",
          600: "#CDB706",
          700: "#AC9704",
          800: "#8A7802",
          900: "#726201",
        },

        danger: {
          100: "#FDDDD5",
          200: "#FBB4AC",
          300: "#F48281",
          400: "#EA606D",
          500: "#DD3050",
          600: "#BE234E",
          700: "#9F184A",
          800: "#800F44",
          900: "#6A093F"
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'h1, h2': {
              color: theme('colors.primary.800'),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
