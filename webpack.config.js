module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'bundle.js',
  },

  target: 'web',
  devServer: {
    // port: '3000',
    // static: ['./public'],
    // open: true,
    // hot: true,
    // liveReload: true,
    contentBase: './build',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
