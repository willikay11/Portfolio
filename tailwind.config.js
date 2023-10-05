/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        'sofia-pro',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    extend: {
      fontSize: {
        'x13': ['0.8125rem', '1.125rem'],
        'x8': ['0.5rem', '1rem'],
        'x15': ['0.8rem', "1.2rem"]
      },
    },
  },
  plugins: [],
}

