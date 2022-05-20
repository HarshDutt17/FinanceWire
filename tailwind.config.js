module.exports = {
  content: [
     "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    backgroundImage: {
      'calculation': "url('../tileimg/calculation.jpg')",
      'stocks' : "url('../tileimg/stocks.jpg')",
      'discussion' : "url('../tileimg/discussion.jpg')",
      'realdata' : "url('../tileimg/realtimedata.jpg')",
      'smallhouse' : "url('../tileimg/smallhouse.jpg')",
      'footer' : "url('../tileimg/trianglefooter.jpg')",
    },
    // colors:{
    //   ...colors,
    //   'button': '#0892a5',
    // }
  },

  future: {
    removeDeprecatedGapUtilities: true
  },
  
  plugins: [],
}
