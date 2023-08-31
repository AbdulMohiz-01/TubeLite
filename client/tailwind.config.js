/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        background: "#121212", // Dark Background
        blue: {
          vivid: "#3A86FF", // Vivid Blue
        },
        magenta: {
          lively: "#FF0080", // Lively Magenta
        },
        green: {
          bold: "#00CC66", // Bold Green
        },
        purple: {
          electric: "#A100FF", // Electric Purple
        },
        yellow: {
          energetic: "#FFD600", // Energetic Yellow
        },
      },
    },
  },
  plugins: [],
};


