/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "rainbow-gradient":
          "linear-gradient(90deg, #ff0000 0%, #ff4500 10%, #ff6347 20%, #ff7f50 30%, #ffa07a 40%, #ffff00 50%, #00ff00 60%, #0000ff 70%, #4b0082 80%, #8b00ff 90%, #ff00ff 100%)",
        "blue-gradient": "linear-gradient(180deg, #15A3FF 0%, #0081E3 100%)",
        "gray-gradient": "linear-gradient(135deg, #343A40 0%, #5C5F63 100%)",
      },
      boxShadow: {
        inner: `
          inset 4px 4px 16px rgba(1, 1, 1, 0.15), 
          inset -4px -4px 16px rgba(1, 1, 1, 0.15);
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
        95: "98%",  // Remplacé par 95% pour cohérence avec votre intention
        88: "360px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        primary: "#343A40",
        secondary: "#007BFF",
        info: "#4EB8DF",
        success: "#4ECB5A",
        warning: "#D5C107",
        error: "#E64B4B",
        accent: "#38B2AC",
        brand: "#0057FF",
        lightgray: "#E0E0E0", // pour les tabs du profil, car le composant tab récupère la couleur ds la confid tailwind et non daisy + "gray-light" ne fonctionne pas
        blue: {
          light: "#E6F1FF",
          DEFAULT: "#0057FF",
          dark: "#0041C4",
        },
        gray: {
          light: "#E0E0E0",
          medium: "#BDBDBD",
          DEFAULT: "#828282",
          dark: "#4F4F4F",
          darker: "#333333"
        },
        red: {
          light: "#FFEEEE",
          DEFAULT: "#FF0000",
          dark: "#CC0000",
        },
        green: {
          light: "#E6FFEB",
          DEFAULT: "#00FF00",
          dark: "#00CC00",
        },
        yellow: {
          light: "#FFF9E6",
          DEFAULT: "#FFFF00",
          dark: "#CCCC00",
        },
        black: "#000000",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
        primary: "#343A40",
        secondary: "#007BFF",
        info: "#4EB8DF",
        success: "#4ECB5A",
        warning: "#D5C107",
        error: "#E64B4B",
        accent: "#38B2AC",
        brand: "#0057FF",
        
        },
      },
    ],
  },
};
