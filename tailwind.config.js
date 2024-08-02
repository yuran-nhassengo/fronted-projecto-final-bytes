/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'yellow':'#FFE606',
        'green-2':'#00A86B',
        'red':'#D00000',
        'gray':'#8A8A8E',
        'black':'#051923',
        'white':'#FFFFFF',
        'blue':'#0C7CF9'
      }
    },
  },
  plugins: [],
}

