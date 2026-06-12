/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brutal: {
          yellow: '#FFD54A',
          purple: '#BCA9FF',
          orange: '#FFA45B',
          green: '#8AD29B',
          coral: '#FF7373',
          cream: '#F6F3EA',
          surface: '#ECE8DD',
          black: '#000000',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      boxShadow: {
        'brutal-sm': '3px 3px 0 0 #000000',
        'brutal': '6px 6px 0 0 #000000',
        'brutal-lg': '8px 8px 0 0 #000000',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '5': '5px',
      }
    },
  },
  plugins: [],
}
