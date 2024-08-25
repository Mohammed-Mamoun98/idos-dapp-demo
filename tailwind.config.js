import daisyui from 'daisyui';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      accentColor: {
        primary: 'var(--Background-Button-primary)',
      },
      fontSize: {
        '3xl': '30px',
      },
      boxShadow: {
        'shadow-md': '0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      backgroundColor: {
        primary: 'var(--Background-Primary)',
        secondary: 'var(--Background-Secondary)',
        tirtiary: 'var(--Background-tirtiary)',
        'btn-primary': 'var(--Background-Button-primary)',
        'btn-secondary': 'var(--Background-Button-secondary)',
      },
      backgroundImage: {
        'landing-card-gredient': 'linear-gradient(270deg, var(--Background-Button-primary) 0%, #63002A 75%);',
        'landing-kid-gredient': 'radial-gradient(175.3% 77.56% at 76.93% 59.88%, #EDD57F 0%, #E0BD49 75%);',
      },
      colors: {
        'content-primary': 'var(--Content-Primary)',
        'chart-text-btn': '#600023',
        'burgundy':"#9E0144",
        'button-secondary': '#FEF2F2',
        'content-secondary': 'var(--Content-Secondary)',
        error: 'var(--error)',
        success: 'var(--success)',
        'content-tirtiary': 'var(--Content-Tertiary)',
        'btn-primary': 'var(--Content-Button-link-primary)',
        'btn-link-secondary': 'var(--Content-Button-link-secondary)',
        gold: 'var(--brand-old-gold)',
        'border-primary': 'var(--Border-Primary)',
        'border-secondary': 'var(--Border-Secondary)',
      },
      letterSpacing: {
        tighter: 'var(--Letter-spacing-Large)',
        tight: 'var(--Letter-spacing-Large)',
        normal: 'var(--Letter-spacing-Normal)',
        wide: 'var(--Letter-spacing-Small)',
      },
    },
    // keyframes: {
    //   fadeIn: { from: { opacity: 0 }, to: { opacity: 0.85 } },
    //   fadeOut: { from: { opacity: 0.85 }, to: { opacity: 0 } },
    // },
    // animation: {
    //   fadeIn: 'fadeIn 170ms ease-in-out',
    //   fadeOut: 'fadeOut 170ms ease-in-out',
    // },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [],
  },
};
