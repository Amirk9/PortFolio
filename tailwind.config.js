/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primaryDark: '#020617',
        grayText: '#9CA3AF',
        linkHover: '#00BFFF',
      },
      fontSize: {
        base: '16px',
        lg: '18px',
        xl: '20px',
      },
      fontWeight: {
        normal: '400',
        semibold: '600',
        bold: '800',
      },
      spacing: {
        '6': '1.5rem',  // 24px
        '20': '5rem',   // 80px
      }
    },
  },
  plugins: [],
}
