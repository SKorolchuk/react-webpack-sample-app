/* eslint-disable import/no-extraneous-dependencies */
const { DefinePlugin } = require('webpack');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new Dotenv({
      path: path.resolve(__dirname, '.env.production'),
    }),
  ],
};
