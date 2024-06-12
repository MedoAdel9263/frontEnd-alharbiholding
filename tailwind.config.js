const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        spin: 'spin 1s linear infinite',
        fadeIn: 'fadeIn 0.5s ease-in-out',
        marquee: 'marquee 20s linear infinite',
      },
      fontFamily: {
        secondary: ['Rajdhani', 'sans-serif'],
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
        '4xl': '5rem',
        '5xl': '6rem',
      },
      colors: {
        primary: {
          light: '#a5966e',
          DEFAULT: '#00503a',
        },
        accent: {
          100: '#F5F4FA',
          200: '#E3E3E3',
          300: '#FBF3F2',
          700: '#1A1A1C',
          800: '#616670',
          900: '#141416',
        },
      }
    },
  },
  
  plugins: [
    require('flowbite/plugin'),
    flowbite.plugin(),

  ],
}