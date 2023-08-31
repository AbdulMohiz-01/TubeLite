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
        gray: {
          1000: "#272727"
        }
      },
      fontFamily: {
        roboto: ["Roboto Condensed", "sans-serif"]
      }

    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.fancy-scroll::-webkit-scrollbar': {
          width: '8px',
        },
        '.fancy-scroll::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '.fancy-scroll::-webkit-scrollbar-thumb': {
          background: 'rgba(255, 255, 255, 0.3)',
          borderRadius: '8px',
        },
        '.fancy-scroll::-webkit-scrollbar-thumb:hover': {
          background: 'rgba(255, 255, 255, 0.5)',
        },
      }, ['responsive', 'hover']);
    },
  ],
};


