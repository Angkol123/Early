/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('./src/assets/Images/rec-1.png')",
        'hero-group': "url('./src/assets/Images/backbone.png')",
        'hero-tsk': "url('./src/assets/Images/pillar.png')",
      })
    },
  },
  plugins: [],
}