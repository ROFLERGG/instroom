/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1300px',
    },
    fontFamily: {
      'raleway': ['Raleway', 'sans-serif'],
      'prosto': ['Prosto One', 'sans-serif'],
    },
    fontSize: {
      xs: ['12px', {
        lineHeight: '14px',
      }],
      sm: ['14px', {
        lineHeight: '16px',
      }],
      base: ['16px', {
        lineHeight: '20px',
      }],
      lg: ['18px', {
        lineHeight: '20px',
      }],
      xl: ['20px', {
        lineHeight: '24px',
      }],
    },
    // lineHeight: {
    //   '14': '14px',
    //   '16': '16px',
    //   '20': '20px',
    //   '24': '24px',
    // },
    extend: {
      colors: {
        'coal': '#212526',
        'background': '#F2F5F7',
        'black': '#000000',
        'darkgray': '#3B3B3B',
        'gray': '#DEDBDB',
        'orange': '#F05A00',
        'red': '#FC573B',
        'smoky': '#8A8A8A',
        'white': '#FFFFFF',
      }
    },
  },
  plugins: [],
}

