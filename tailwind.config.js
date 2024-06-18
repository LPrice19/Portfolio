/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",        // Include classes used in index.html
    "./src/**/*.{js,ts,jsx,tsx}",  // Include classes used in JS/TS/JSX/TSX files under src directory
  ],
  theme: {
    extend: {fontFamily: {
      'space-mono': ['"Space Mono"', 'monospace'],
    },},  // Extend Tailwind's default theme here if needed
  },
  plugins: [],  // Any additional plugins can be added here
}
