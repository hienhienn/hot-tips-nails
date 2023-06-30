/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'small': '768px',
      'medium': '990px',
      'large': '1024px'
    },
    extend: {
      colors: {
        'gray': '#dcdcdc',
        'bglight': '#f2f2f2',
        'black': '#000000',
        'light-black': '#303030',
        'pink': '#ff5656'
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        oswald: ["Oswald", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

