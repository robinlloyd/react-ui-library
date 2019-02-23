var path = require('path')
var webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    app: ['./examples/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'examples'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  },
  devServer: {
    disableHostCheck: true,
    watchOptions: {
      poll: 1000
    }
  }
}
