const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: '/frontend/src/app.js',
    mode: 'development',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
    },
    devServer: {
      historyApiFallback: true
    },
    plugins: [
      new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './public/index.html'
      })
    ],
    module: {
        rules: [
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }],
                  "@babel/preset-react"
                ]
              }
            }
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
        ],
      },
  }