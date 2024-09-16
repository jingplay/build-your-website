/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontWeight: '700',
              textAlign: 'center'
            },
            h2: {
              fontWeight: '600'
            },
            a: {
              color: '#2563EB',
              textDecoration: 'none'
            },
            code: {
              color: '#d14',
              backgroundColor: '#F3F4F6',
              borderRadius: '0.25rem'
            },
            pre: {
              margin: '0'
            },
            'pre code': {
              backgroundColor: 'initial',
              borderRadius: '0'
            },
            'code::before': {
              content: 'normal'
            },
            'code::after': {
              content: 'normal'
            },
            '.highlight': {
              borderWidth: '1px',
              borderColor: '#D1D5DB',
              borderRadius: '0.375rem'
            }
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
