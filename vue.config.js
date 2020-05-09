module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: '/' + process.env.GITHUB_REPOSITORY.split('/')[1],
  devServer: {
    proxy: {
      "/search": {
        target: 'https://itunes.apple.com',
        secure: false
      }
    }
  }
}
