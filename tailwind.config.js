/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {

    screens: {
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },




     fontFamily: {
        cereal: ['Avenir', 'sans-serif'],  // Use 'CerealApp' as your custom font
      },

    extend: {

     
      screens: {
        'vs': '480px',  // Custom screen for extra small devices
        'xs': '330px',  // Custom breakpoint for small mobile devices (320px)
      },
      
      backgroundImage: {
        'custom-radial': 'radial-gradient(46.35% 478.71% at 50% 62.85%, #E3E3E3 0%, #D7FDF4 73.4%)',
      },



    },
  },
  plugins: [],
}

