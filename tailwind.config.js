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


      boxShadow: {
        'inner-strong': 'inset 150px 20px 200px rgba(0, 0, 0, 0.8)',
        'inner-strong-blue': 'inset 150px 20px 200px rgba(0, 0, 255, 0.8)',
        'inner-strong-orange': 'inset 150px 20px 200px rgba(215, 86, 35, 0.8)',
        'inner-soft': 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
        'inner-deep': 'inset 0 4px 6px rgba(0, 0, 0, 0.2), inset 0 -4px 6px rgba(0, 0, 0, 0.15)',
        'inner-outer': 'inset 0 4px 6px rgba(0, 0, 0, 0.3), 0 4px 6px rgba(0, 0, 0, 0.1)'
      },


      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Use 'Inter' as the primary font
      },

     
      screens: {
        'vs': '480px',  // Custom screen for extra small devices
        'xs': '330px',  // Custom breakpoint for small mobile devices (320px)
      },
      
      backgroundImage: {
        'custom-radial': 'radial-gradient(46.35% 478.71% at 50% 62.85%, #E3E3E3 0%, #D7FDF4 73.4%)',
      },
      colors: {
        'glass-dark-solid': '#333A4C',
        'light black': '#1E232E', // Replace with your actual color code
      },


    },
  },
  plugins: [],
}

