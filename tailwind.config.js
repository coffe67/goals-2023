/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js"
  ],
  theme: {
    fontFamily: {
      sans:['Montserrat', 'sans-serif'],
      montserrat : ['Montserrat', 'sans-serif'],
      sofia : ['"Sofia Sans"', 'serif']
    },
    extend: {
      colors:{
        'primary': '#3674EE',
        'gray-500': '#F1F4F7',
        'brandBlue-500': 'rgba(108, 206, 241, .5)',
        'white-500': 'rgba(255,255,255,.5)',
        'white-300': 'rgba(255,255,255,.3)',
        'white-100': 'rgba(255,255,255,.1)',
        "connected": 'rgb(164,227,80)',
        "disconnected": 'rgb(152,49,49)',
        "successAction": 'rgba(167,243, 208, 1)',
        "black-500": '#242424',
        "low-blue": '#E2E7ED',
        "low-gray": 'rgba(243,245, 247, .8)',
      },
      boxShadow: {
        'gold': '0 0px 20px 0px #C9A750',
        'silver': '0 0px 20px 0px #C6C6C6',
        'bronze': '0 0px 20px 0px #98400F',
        'gold-filter': '0 0px 20px 10px #C9A750',
        'silver-filter': '0 0px 20px 10px #C6C6C6',
        'bronze-filter': '0 0px 20px 10px #98400F',
        'green': '0 0px 10px 0px #60D256',
        'bluegray': '0 0px 10px 0px #E2E8F0',
        'ash': '0 0px 10px 0px #1C1D1C',
        'inner-ash': 'inset 0 0px 10px 0 #2D2E2C',
        'inner-bluegray': 'inset 0 0px 10px 0 #0D1015',
        'inner-lr-black': 'inset -40px 0 20px -25px #FFFFFF, inset 40px 0 20px -25px #FFFFFF',
        'inner-banner': 'inset 0 0px 150px 150px #0D1015',
      },
      backgroundColor: {
        "header": 'rgba(27,33,41, 1)',
        "footer": 'rgba(33, 33, 33, .8)',
        "container": 'rgba(27,33,41,1)',
        "sub-container": 'rgba(15,19,24,1)',
        "footerLight": 'rgba(250,247,247,0.8)',
        "danger": 'rgb(255, 0, 0, .7)',
        "debug": 'rgba(200,114,9,0.8)',
        "nav": 'rgba(8,75,131, 1)',
        "thead": 'rgba(66, 153, 225, 0.4)',
        "thead-800": 'rgba(255,255,255,0.05)',
        'brandBlue-500': 'rgba(108, 206, 241, .5)',
        "connected": 'rgb(164,227,80)',
        "disconnected": 'rgb(152,49,49)',
        "cultured": 'rgba(255,255,255, 1)',
        "grayCustom": 'rgba(61,62,73, .2)',
        "successAction": 'rgba(167,243, 208, 1)'
      },
      backgroundImage: {
        'hero-pattern': "url('/images/bg_hero_section.png')",
        'ctaCryo': "url('/images/cryoSpa.png')",
        'ctaCryoSports': "url('/images/cryoSports.png')",
        'cryo-description': "url('/images/cryoDescriptionBackGround.png')",
        'cryo-description-invert': "url('/images/cryoDescriptionBackGroundInverted.png')",
        'clouds': "url('/images/clouds.png')",
        'gallery1': "url('/images/galleryDemo.png')"
      }
    },
  },
  plugins: []
}