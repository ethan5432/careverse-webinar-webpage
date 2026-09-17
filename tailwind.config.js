/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#18191D',
        body: '#4A4D55',
        muted: '#4A4D55',
        cream: '#F6F3EE',
        soft: '#F1EFE9',
        white: '#FFFFFF',
        line: '#E6E1D8',
        red: {
          DEFAULT: '#E1062C',
          deep: '#B10522',
        },
        night: {
          DEFAULT: '#18191D',
          text: '#9CA3AF',
        },
        good: '#0B9B6B',
      },
      fontFamily: {
        sans: [
          '"Inter"',
          '"Helvetica Neue"',
          'Arial',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        display: [
          '"Poppins"',
          '"Inter"',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      letterSpacing: {
        eyebrow: '0.16em',
      },
      fontSize: {
        h1: ['clamp(48px, 6vw, 80px)', { lineHeight: '0.98', letterSpacing: '-0.04em', fontWeight: '700' }],
        h2: ['clamp(32px, 4vw, 48px)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        h3: ['clamp(24px, 3vw, 30px)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
      },
      borderRadius: {
        card: '20px',
      },
      transitionDuration: {
        '220': '220ms',
      },
    },
  },
  plugins: [],
};
