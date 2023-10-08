/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1800px'
    },
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
        'sm': ['0.875rem', '1.5rem'],
        'x13': ['0.8125rem', '1.5rem'],
        'x8': ['0.5rem', '1rem'],
        'x15': ['0.8rem', "1.2rem"]
      },
    },
  },
  plugins: [
      require('tailwindcss-animated')
  ],
}
