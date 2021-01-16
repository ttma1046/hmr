const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/app.js'),
  // 2
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  // 3
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    hot: true,
  }
};
