module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme0": "#1976d3",
        "theme1": "#b5daff",
        "texttheme": "#fafafa"
      },
      letterSpacing: {
        widest: '0.25em'
      },
      flexBasis: {
        '1/50': '2.5%',
      }
    },
  },
  plugins: [],
}