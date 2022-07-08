/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'sidebar-active':
          '#0076FF',
      },
      backgroundImage: {
        'sidebar-gradient':
          "linear-gradient(141.08deg, #0A69DA 32.24%, #0856C8 115.93%, #0231A5 164.9%)",
        'home-gradient':
          "linear-gradient(168.05deg, #023B96 5.04%, #022357 91.26%)",
      },
      maxWidth: {
        'container': '1400px',
        'main': '1120px',
        'main-active': '1280px'
      },
      minWidth: {
        'main': '1120px'
      },
      height: {
        'sidebar': '640px'
      }
    },
  },
  plugins: [],
}
