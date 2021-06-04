const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {
        test: /.(jsx?)$/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [new HtmlWebpackPlugin({
    templateContent:
`<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <style>
        body,html {
            padding: 0;
            margin: 0;
        }
        </style>
      <title>Portafolio | Oscar Ramos</title>
      <link rel="icon" 
      type="image/png" 
      href="https://cdn158.picsart.com/225524786016202.png?type=webp&to=min&r=640" />
      <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap" rel="stylesheet"> 
    </head>
    <body>
      <div id="root"></div>
    </body>
</html>`,
  })],
}
