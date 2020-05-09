module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: '/' + process.env.GITHUB_REPOSITORY.split('/')[1],
  devServer: {
    proxy: 'https://itunes.apple.com'
  }
}
