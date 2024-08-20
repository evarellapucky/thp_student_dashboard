/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'rainbow-gradient': 'linear-gradient(90deg, #ff0000 0%, #ff4500 10%, #ff6347 20%, #ff7f50 30%, #ffa07a 40%, #ffff00 50%, #00ff00 60%, #0000ff 70%, #4b0082 80%, #8b00ff 90%, #ff00ff 100%)',
        'blue-gradient': 'linear-gradient(135deg, #0057FF 0%, #00BFFF 100%)',
        'gray-gradient': 'linear-gradient(135deg, #2D3748 0%, #4A5568 100%)',
      },
      boxShadow: {
        inner: `
          inset 6px 6px 12px rgba(0, 0, 0, 0.25), 
          inset -6px -6px 12px rgba(255, 255, 255, 0.8)
        `,
        out: `
          8px 8px 16px rgba(0, 0, 0, 0.25), 
          -8px -8px 16px rgba(255, 255, 255, 0.8)
        `,
        lightInner: `
        inset 4px 4px 8px rgba(0, 0, 0, 0.15), 
        inset -4px -4px 8px rgba(255, 255, 255, 0.5)
      `,
      lightOut: `
        4px 4px 8px rgba(0, 0, 0, 0.15), 
        -4px -4px 8px rgba(255, 255, 255, 0.5)
      `,
      },
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
    },
  },
  plugins: [
    daisyui,
  ],
}