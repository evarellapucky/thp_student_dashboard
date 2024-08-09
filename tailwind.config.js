/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '95': '97%',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      colors: {
        primary: '#1A202C',
        secondary: '#2D3748',
        accent: '#38B2AC',
        brand: '#0057FF',
        blue: {
          light: '#E6F1FF',
          DEFAULT: '#0057FF',
          dark: '#0041C4',
        },
        gray: {
          light: '#F7F7F7',
          DEFAULT: '#C4C4C4',
          dark: '#2D3748',
        },
        red: {
          light: '#FFEEEE',
          DEFAULT: '#FF0000',
          dark: '#CC0000',
        },
        green: {
          light: '#E6FFEB',
          DEFAULT: '#00FF00',
          dark: '#00CC00',
        },
        yellow: {
          light: '#FFF9E6',
          DEFAULT: '#FFFF00',
          dark: '#CCCC00',
        },
        black: '#000000',
        white: '#FFFFFF',
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(135deg, #0057FF 0%, #00BFFF 100%)',
        'gray-gradient': 'linear-gradient(135deg, #2D3748 0%, #4A5568 100%)',
      },
    },
  },
  plugins: [
    daisyui,
  ],
}
