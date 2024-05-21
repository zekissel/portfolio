/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        light: '#e0e0e0',
        light2: '#c2c2c2',
        dark: '#212121',
        dark2: '#0f0f0f',
      },
    },
  },
  plugins: [],
}

