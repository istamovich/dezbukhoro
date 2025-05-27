/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          roboto: ['Roboto', 'sans-serif'],
          unbounded: ['Unbounded', 'sans-serif'],
        },
        screens: {
          'phone': '376px',
          'phone-sm': '426px',
          'phone-320': '322px',
          'table-850': '850px',
        },
      },
    },
    plugins: [],
    
  }
  