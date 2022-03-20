

module.exports = {
  mode: 'jit',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/*.{vue,js,ts,jsx,tsx}',
    './src/components/**/*.{vue,js,ts,jsx,tsx}'


  ],
  theme: {
    extend: {

      height: {
        30: '30vh',
        50: '50vh',
        60: '60vh',
        70: '70vh',
        80: '80vh',
        90: '90vh',
        92: '92.2vh',
        95: '95vh'
      },

      width: {
        btn: '10vw',
        30: '30vw',
        40: '40vw',
        50: '50vw',
        60: '60vw',
        70: '70vw',
        80: '80vw',
        85: '85vw',
        90: '90vw',
        92: '92w',
        95: '95vw'
      },


    },
  },
  plugins: [],
}
