/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '300px', // Custom xs breakpoint at 480px
        'sm': '640px', 
      },
      rotate: {
        '10': '10deg',
        '20': '20deg',
        '30': '30deg',
      },
    },
   
  },
 
  plugins: [],
};
