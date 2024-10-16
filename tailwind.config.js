/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      animation:{
        glow: "glow 2s infinite"
      },
      keyframes:{
        glow:{
         
            "0%": {
                filter: "brightness(1)  saturate(1);"
            },
        
            "50%": {
                filter: "brightness(2)  saturate(2);"
            },
        
            "100%": {
                filter: "brightness(1)  saturate(1);"
            }
        }
      }
    },
  },
  plugins: [],
}