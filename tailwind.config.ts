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
        'late4-ink': '#061D34',
        'late4-blue-deep': '#03182B',
        'late4-blue': '#0B4A63',
        'late4-blue-bright': '#18A7B5',
        'late4-teal': '#138C8C',
        'late4-teal-soft': '#E7F4F3',
        'late4-ivory': '#F8F6F3',
        'late4-paper': '#F3F2F0',
        'late4-slate': '#667085',
        'late4-gold': '#C8A24A',
        'late4-gold-light': '#E1BD63',
        'late4-navy': '#03182B',
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
