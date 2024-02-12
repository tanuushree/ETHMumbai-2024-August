/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx',
    './src/*.jsx',
    './pages/**/*.jsx',
    './components/**/*.jsx',
  ],  
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '1.5px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    }
  },
  plugins: [],
}