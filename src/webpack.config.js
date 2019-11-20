import path from 'path';
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const env = process.env.NODE_ENV;

const config = {
  mode: env || 'development', // production || development
  entry: [
    './public/javascripts/app',
    './public/scss/offset.scss',
    './public/scss/theme.scss',
    './public/scss/selfIntro.scss',
    './public/scss/toolbox.scss',
    './public/scss/playground.scss',
  ],
  // devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.join(__dirname, '../public/compile'),
    filename: 'build.js'
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.jsx', '.scss', '.css' ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        enforce: "pre",
        exclude: /node_modules/,
        use: [
          {
            loader: "source-map-loader"
          },
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ],
              plugins: [
                '@babel/plugin-transform-runtime',
                ['@babel/plugin-proposal-decorators', { 'legacy': true }],
                ['@babel/plugin-proposal-class-properties', { "loose": true }]
              ]
            },
          },
          // {
          //   loader: 'ts-loader'
          // }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      },
      {
        test: /\.(s?css)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../'
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
};

export default config;
