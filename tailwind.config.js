/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0d1b2a',
        'navy-2': '#13283c',
        'navy-3': '#1a3248',
        'brand-orange': '#e8620a',
        'brand-orange-soft': '#f47b25',
        'brand-orange-deep': '#cc5208',
        'orange-tint': '#fff1e8',
        'orange-tint2': '#fde8d6',
        gold: '#b8860b',
        off: '#f6f8fb',
        'off-2': '#eef2f7',
        'clean-bg': '#f2f6f4',
        ink: '#16202e',
        'ink-soft': '#33414f',
        muted: '#5e6b7a',
        faint: '#9aa5b2',
        'border-color': '#d9e0e9',
        'border-strong': '#bcc7d4',
        'brand-green': '#0a8a5a',
        'green-tint': '#e8f8f1',
      },
      borderRadius: {
        rs: '10px',
        r: '16px',
        rl: '24px',
      },
      boxShadow: {
        sh: '0 6px 28px rgba(13, 27, 42, 0.08)',
        sh2: '0 16px 50px rgba(13, 27, 42, 0.12)',
      },
    },
  },
  plugins: [],
};
