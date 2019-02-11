module.exports = {
  publicPath : '',
  outputDir : 'build',
  configureWebpack: {
    output: {
      filename: 'app.js'
    },
    optimization: {
      splitChunks: false
    },
  },
  filenameHashing: false
}