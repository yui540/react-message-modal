module.exports = {
  mode: process.env.MODE,
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: `${__dirname}/examples`,
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  devServer: {
    open: true,
    contentBase: `${__dirname}/examples`,
    port: 8080,
    historyApiFallback: true,
  },
}
