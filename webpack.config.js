const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js') ,
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    //aponta para meu diretorio que contem os arquivos publicos
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        //expressao regular
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader',
        }
      }
    ]
  }
};