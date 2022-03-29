module.exports = {
  devServer: {
    port: 8080,
    https: true,
    compress: true,
    public: 'juliuskites' // That solved it
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/styles/css/theme.scss";
        @import "@/styles/css/buttons.scss";
        @import "@/styles/css/typography.scss";
        `
      }
    }
  }
}
