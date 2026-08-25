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
        // Paleta del rediseno (landing)
        'l4-blue': '#1652F0',
        'l4-blue-dark': '#0F3CC4',
        'l4-blue-soft': '#EEF3FF',
        'l4-green': '#12A150',
        'l4-green-soft': '#E9F7EF',
        'l4-night': '#0B1220',
        'l4-muted': '#5B6572',
        'l4-line': '#E4E7EC',
        'l4-surface': '#F1F3F5',
        'l4-band': '#E8EAED',

        // Paleta previa (en uso por el CRM interno)
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
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};

export default config;
