module.exports = {
  content: [
     "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {},
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
