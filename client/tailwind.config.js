module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    // fontSize: {
    //   text3xl: '60px',
    //   text2xl: '32px',
    //   textxl: '20px',
    //   textlg: '19px',
    //   textmd: '16px',
    //   textsm: '14px',
    //   textxs: '12px',
    // },
    extend: {
      height: {
        102: '50rem',
      },
      textColor: {
        themeColor: 'var(--theme-color)',
        textLink: 'var(--text-link)',
        dark: {
          textPrimary: '#adbac7',
          textSecondary: 'var(--text-secondary-dark)',
          textLink: 'var(--text-link)',
        },
        light: {
          textPrimary: '#173EAD',
          textSecondary: 'var(--text-secondary-light)',
        },
      },
      backgroundColor: {
        dark: {
          themeBgDark: 'var(--theme-bg-dark)',
          bgMutedDark: 'var(--theme-bg-muted-dark)',
          bgAccentDark: 'var(--theme-bg-accent-dark)',
        },
        light: {
          bgPrimary: '#E8EDFB',
          bgNuetral: '#F8FAFC',
          bgBlue: '#1D4ED8',
          bgAccent: '#E8EDFB',
        },
      },
      colors: {
        dark: {
          primary: 'var(--text-primary-dark)',
          secondary: 'var(--theme-bg-accent-dark)',
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
