import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'late4-ink': '#030B18',
        'late4-blue-deep': '#061A40',
        'late4-blue': '#0B3A66',
        'late4-blue-bright': '#1D8ED8',
        'late4-ivory': '#F5F1E8',
        'late4-paper': '#F2F4F7',
        'late4-slate': '#657083',
        'late4-gold': '#C8A24A',
        'late4-gold-light': '#E1BD63',
        'late4-navy': '#061A40',
        'late4-dark-gray': '#1F2937',
        'late4-gray': '#6B7280',
        'late4-light-gray': '#F3F4F6',
        'late4-white': '#FFFFFF',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-serif)'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};

export default config;
