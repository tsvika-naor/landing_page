module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'phone': '200px',
      'tablet': '640px',
      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px'
      // => @media (min-width: 1280px) { ... }
    },
      extend: {},
    },
    variants: {
      extend: { gridTemplateColumns: ['hover', 'focus'] },
    },
    plugins: [
      require('tailwind-direction').default
    ],
    presets: [
      require("tailwind-direction").configPreset,
    ],
  }
