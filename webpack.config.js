const webpackMerge = require('webpack-merge');

const commonConfig = require('./build/webpack.common.config');

module.exports = ({ env }) => {
  const envConfig = require(`./build/webpack.${env}.config`);

  return webpackMerge(commonConfig, envConfig);
};