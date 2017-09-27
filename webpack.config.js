module.exports = {
  entry: {
    app: [__dirname + "/src/app.js"]
  },
  output: {
    path: __dirname + '/public',
    filename: 'js/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        include: __dirname + '/src/app.js',
        exclude: /node_modules/,
        options: {
          presets: [
            'es2015',
            'react',
            'stage-0'
          ]
        }
      },
      {
        test: /\.less$/,
        loaders: [
          'style',
          'css',
          'less'
        ]
      }
    ]
  }
}
