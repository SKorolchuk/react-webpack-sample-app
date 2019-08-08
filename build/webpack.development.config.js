/* eslint-disable import/no-extraneous-dependencies */
const { DefinePlugin } = require('webpack');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new Dotenv({
      path: path.resolve(__dirname, '.env.development'),
    }),
  ],
};
