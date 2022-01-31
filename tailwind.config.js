module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      letterSpacing: {
        tightest: '-0.25em',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
        display: 'var(--font-display)',
        mono: 'var(--font-mono)',
      },
      colors: {
        primary: {
          disabled: 'var(--primary-400)',
          default: 'var(--primary-500)',
          hover: 'var(--primary-600)',
          active: 'var(--primary-700)',
        },
        secondary: {
          hover: 'var(--secondary-300)',
          active: 'var(--secondary-400)',
        },
        white: {
          transparent: 'var(--white-400)',
          default: 'var(--white-500)',
        },
        gray: {
          lightest: 'var(--gray-200)',
          lighter: 'var(--gray-300)',
          light: 'var(--gray-400)',
          default: 'var(--gray-500)',
          dark: 'var(--gray-600)',
        },
        black: {
          default: 'var(--black-500)',
        },
        red: {
          lighter: 'var(--red-300)',
          light: 'var(--red-400)',
          default: 'var(--red-500)',
          super: 'var(--red-600)',
        },
        green: {
          default: 'var(--green-500)',
        },
        on: {
          primary: {
            disabled: 'var(--primary-400)',
            default: 'var(--primary-500)',
            hover: 'var(--primary-600)',
            active: 'var(--primary-700)',
          },
          white: {
            transparent: 'var(--white-400)',
            default: 'var(--white-500)',
          },
          gray: {
            lightest: 'var(--gray-200)',
            lighter: 'var(--gray-300)',
            light: 'var(--gray-400)',
            default: 'var(--gray-500)',
            dark: 'var(--gray-800)',
          },
          black: {
            default: 'var(--black-500)',
          },
          red: {
            lighter: 'var(--red-300)',
            light: 'var(--red-400)',
            default: 'var(--red-500)',
            super: 'var(--red-600)',
          },
          green: {
            default: 'var(--green-500)',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },

  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
