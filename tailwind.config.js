export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto, sans-serif",
        adventPro: "Advent Pro, sans-serif",
        amatic: "Amatic SC, sans-serif",
        Montserrat:"Montserrat, sans-serif"
      },
      colors: {
        orange: "#F69B00",
        white: "#fff",
        lightOrange: "#FFF9EF",
        lightgray: "#878787",
        green: "#285e28",
        othergreen: "#659833",
        bgafter: "#00000060",
        bggray: "#e7e9f15b",
      },
      screens: {
        xs: "480px",
        sm: "620px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
      maxWidth: {
        tablet: "768px",
        laptop: "992px",
        desktop: "1200px",
      },
      keyframes: {
        breathe: {
          '0%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1.15)' },
          '100%': { transform: 'scale(1.1)' },
        },
        slideAndRotate: {
          '0%': { 
            transform: 'translate(-100%, -100%) rotate(-90deg)', 
            opacity: '0' 
          },
          '100%': { 
            transform: 'translate(0, 0) rotate(0deg)', 
            opacity: '1' 
          },
        },
      },
      animation: {
        breathe: 'breathe 12s ease-in-out infinite',
        slideAndRotate: 'slideAndRotate 0.9s ease-out 0.3s 1 forwards',
        spinslow: 'spin 15s linear infinite',
      },
    },
  },
  plugins: [],
}