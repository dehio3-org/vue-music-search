module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.GITHUB_REPOSITORY ? '/' + process.env.GITHUB_REPOSITORY.split('/')[1] : "",
  // devServer: {
  //   proxy: {
  //     '^/itunes': {
  //       target: 'https://itunes.apple.com',
  //       changeOrigin: true
  //     }
  //   }
  // }
}
