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
        'late4-navy': '#061A40',
        'late4-blue': '#003B73',
        'late4-dark-gray': '#1F2937',
        'late4-gray': '#6B7280',
        'late4-light-gray': '#F3F4F6',
        'late4-white': '#FFFFFF',
        'late4-gold': '#C8A24A',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      spacing: {
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};

export default config;
