/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#18191D',
        body: '#4A4D55',
        muted: '#6B6E76',
        cream: '#F6F3EE',
        soft: '#F3F1EC',
        white: '#FFFFFF',
        line: '#E6E1D8',
        red: {
          DEFAULT: '#E1062C',
          deep: '#B10522',
        },
        night: {
          DEFAULT: '#14151A',
          text: '#C8CAD1',
        },
        good: '#0B9B6B',
        // keep old tokens for backward compat during transition
        blush: '#E1062C',
        pinkwash: '#FCE7F3',
        bluewash: '#D1E1F1',
        softwhite: '#F6F3EE',
      },
      fontFamily: {
        sans: [
          '"Inter"',
          '"Avenir Next"',
          '"Helvetica Neue"',
          'Arial',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      fontWeight: {
        650: '650',
      },
      letterSpacing: {
        eyebrow: '0.16em',
        caption: '0.08em',
        h1: '-0.06em',
        h2: '-0.05em',
        h3: '-0.03em',
      },
      fontSize: {
        h1: ['clamp(56px, 6.7vw, 88px)', { lineHeight: '0.94', letterSpacing: '-0.06em', fontWeight: '700' }],
        h2: ['clamp(38px, 5vw, 64px)', { lineHeight: '1.02', letterSpacing: '-0.05em', fontWeight: '700' }],
        h3: ['clamp(28px, 3.5vw, 32px)', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '700' }],
      },
      borderRadius: {
        card: '28px',
      },
      transitionDuration: {
        '220': '220ms',
      },
    },
  },
  plugins: [],
};
