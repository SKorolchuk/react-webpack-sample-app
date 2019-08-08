/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const webpackMerge = require('webpack-merge');

const commonConfig = require('./build/webpack.common.config');

const getAddons = addonsArgs => {
  const addons = Array.isArray(addonsArgs)
    ? addonsArgs
    : [addonsArgs];

  return addons
    .filter(Boolean)
    .map(name => require(`./addons/webpack.${name}.js`));
};

module.exports = ({ env, addon }) => {
  const envConfig = require(`./build/webpack.${env}.config.js`);

  return webpackMerge(commonConfig, envConfig, ...getAddons(addon));
};
