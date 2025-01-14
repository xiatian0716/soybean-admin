import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}', 'public/**/*.{html}', './*.html'],
    exclude: ['node_modules', '.git']
  },
  darkMode: 'class',
  shortcuts: {
    'wh-full': 'w-full h-full',
    'center-layout': 'w-1280px mx-auto px-15px',
    'flex-center': 'flex justify-center items-center',
    'flex-col-center': 'flex-center flex-col',
    'flex-x-center': 'flex justify-center',
    'flex-y-center': 'flex items-center',
    'inline-flex-center': 'inline-flex justify-center items-center',
    'inline-flex-x-center': 'inline-flex justify-center',
    'inline-flex-y-center': 'inline-flex items-center',
    'flex-col-stretch': 'flex flex-col items-stretch',
    'inline-flex-col-stretch': 'flex flex-col items-stretch',
    'flex-1-hidden': 'flex-1 overflow-hidden',
    'absolute-center': 'absolute left-0 top-0 flex-center wh-full',
    'absolute-lt': 'absolute left-0 top-0',
    'absolute-lb': 'absolute left-0 bottom-0',
    'absolute-rt': 'absolute right-0 top-0',
    'absolute-rb': 'absolute right-0 bottom-0',
    'fixed-center': 'fixed left-0 top-0 flex-center wh-full',
    'nowrap-hidden': 'whitespace-nowrap overflow-hidden',
    'ellipsis-text': 'nowrap-hidden overflow-ellipsis'
  },
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        'primary-hover': 'var(--primary-color-hover)',
        'primary-pressed': 'var(--primary-color-pressed)',
        'primary-active': 'var(--primary-color-active)',
        info: 'var(--info-color)',
        'info-hover': 'var(--info-color-hover)',
        'info-pressed': 'var(--info-color-pressed)',
        'info-active': 'var(--info-color-active)',
        success: 'var(--success-color)',
        'success-hover': 'var(--success-color-hover)',
        'success-pressed': 'var(--success-color-pressed)',
        'success-active': 'var(--success-color-active)',
        warning: 'var(--warning-color)',
        'warning-hover': 'var(--warning-color-hover)',
        'warning-pressed': 'var(--warning-color-pressed)',
        'warning-active': 'var(--warning-color-active)',
        error: 'var(--error-color)',
        'error-hover': 'var(--error-color-hover)',
        'error-pressed': 'var(--error-color-pressed)',
        'error-active': 'var(--error-color-active)',
        light: '#ffffff',
        dark: '#18181c',
        'deep-dark': '#101014'
      },
      transitionProperty: ['width', 'height', 'background', 'background-color']
    }
  },
  variants: {},
  plugins: []
});
