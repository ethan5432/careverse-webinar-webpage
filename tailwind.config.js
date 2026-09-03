/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#223b47',
        body: '#49494a',
        blush: '#f9c7e0',
        pinkwash: '#fce7f3',
        bluewash: '#d1e1f1',
        softwhite: '#fffafb',
      },
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
      },
      fontWeight: {
        650: '650',
      },
      letterSpacing: {
        eyebrow: '0.08em',
        h1: '-0.03em',
        h2: '-0.02em',
      },
    },
  },
  plugins: [],
};
