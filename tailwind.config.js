/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        tablet: { max: '768px' },
        mobilelg: { max: '650px' },
        tabletlg: { max: '992px' },
        desktop: { max: '1200px' },
        mobile: { max: '575px' },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontSize: '32px',
              fontWeight: '700',
            },
            h2: {
              fontSize: '28px',
              fontWeight: '600',
            },
          },
        },
      }),
    },
  },
  plugins: [],
};
