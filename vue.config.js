module.exports = {
    devServer: {
      port: 8080,
      https: true,
      compress: true,
      public: 'juliuskites' // That solved it
    },
  }