/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Updated color theme based on logo
        primary: '#2C2C54',
        secondary: '#6A0DAD',
        accent: '#8B5CF6',
        lightAccent: '#A78BFA',
        lightBg: '#F7F8FC',
        midnight: '#1a1a2e',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
