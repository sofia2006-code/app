/* @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'naranja': '#DF6B00',
        'celeste': '#00A3FF',
        'azul': '#0038FF'
      },
    }
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    extend: {},
    fontFamily:{
      "Quattrocento":["Quattrocento Sans", "sans-serif"]
    }
  },
  plugins: [],
}
