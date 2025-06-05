/** @type {import('tailwindcss').Config} */

//import tailwindScrollBar from 'tailwind-scrollbar';

 export default {
   content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
   theme: {
     extend: {
      fontFamily: {
        'sans' : ['Syne', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'fade-in-up': 'fadeInUp 0.3s ease-in-out',
        'fade-out': 'fadeOut 0.3s ease-in-out',
        'fade-out-down': 'fadeOutDown 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        fadeOutDown: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(10px)' },
        },
      },
     },
   },
   plugins: [/*tailwindScrollBar*/],
 }