module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"media",
  theme: {
    extend: {
      width:{
        "5vh":"5vh",
        "10vh":"10vh",
        "20vh":"20vh",
        "28p":"28px",
        "80vh":"80vw",
        "80p":"80px",
        "150p":"150px",
        "250p":"250px",
        "400p":"400px",
        "25w":"25vw",
        "75w":"75vw",
        "500p":"500px"
      },
      height:{
        "10vh":"10vh",
        "17vh":"17vh",
        "20vh":"20vh",
        "83vh":"83vh",
        "90vh":"90vh",
        "28p":"28px",
        "140p":"140px",
        "200p":"200px",
        "320p":"320px"
      },
      fontSize:{
        "1em":"1em",
        "2em":"2em"
      },
      spacing:{
        "negative":"-100%",
        "1e":"1em",
        "10v":"10vh",
        "17v":"17vh"
      },
      listStyleType: {
        square:"square",
        roman: 'upper-roman',
      }
    },
  },
  plugins: [],
}
