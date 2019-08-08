/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const webpackMajorVersion = require('webpack/package.json').version.split(
  '.',
)[0];

const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, '..'),
  output: {
    path: path.join(
      __dirname,
      '..',
      'dist',
      `webpack-${webpackMajorVersion}`,
    ),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, '..', 'dist'),
    hot: true,
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [require('precss'), require('autoprefixer')];
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: `${path.resolve(
        __dirname,
        '..',
        'src',
        'index.html',
      )}`,
      title: 'Test Webpack & React project',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
