/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'fade-left-to-right': 'fadeLeftToRight 1s ease-out'
      },
      keyframes: {
        fadeLeftToRight: {
          '0%': {
            opacity: '0.8',
            transform: 'translateX(-100%)'
          },
          '50%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        fadeIn: {
          '0%': {
            opacity: '0'
          },
          '50%': {
            opacity: '1'
          }
        }
      }
    },
  },
  plugins: [],
}

