/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Authentic brand colors matching The Austin Cakery's logo:
        // Aqua / Watercolor Turquoise
        aqua: {
          50: '#F0FAF9',
          100: '#E2F5F4',
          200: '#C2EAE8',
          300: '#94D9D7',
          400: '#5EC2C0',
          500: '#40A9A7',
          600: '#2E8B89',
          700: '#266F6E',
          800: '#235958',
          900: '#204A49',
        },
        // Rose Gold & Copper
        rosegold: {
          50: '#FBF6F4',
          100: '#F6ECE8',
          200: '#EDD7CF',
          300: '#E1BFAF',
          400: '#D2A18D',
          500: '#C58F7C', // Main rose gold
          600: '#B47863',
          700: '#965E4C',
          800: '#7B4D3F',
          900: '#643F35',
        },
        // Soft blush & petals
        blush: {
          50: '#FDF7F8',
          100: '#FCEEF0',
          200: '#F8D8DC',
          300: '#F2B9C0',
          400: '#E8909B',
          500: '#D96E7C',
        },
        // Espresso & Charcoal for high-contrast crisp text
        espresso: {
          50: '#F7F7F6',
          100: '#EEEDE9',
          200: '#DDDCDB',
          300: '#B8B9B1',
          600: '#676960',
          800: '#3D3E38',
          900: '#292A25',
          950: '#1A1B17',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        script: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(64, 169, 167, 0.08), 0 2px 8px -2px rgba(197, 143, 124, 0.08)',
        'elevated': '0 12px 32px -4px rgba(46, 139, 137, 0.12), 0 4px 12px -2px rgba(197, 143, 124, 0.1)',
        'modal': '0 25px 60px -15px rgba(26, 27, 23, 0.3)',
        'rosegold': '0 8px 24px -4px rgba(197, 143, 124, 0.3)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
}
