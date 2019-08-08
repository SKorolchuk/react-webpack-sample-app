/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { BundleAnalyzerPlugin as WebpackBundleAnalyzer } from 'webpack-bundle-analyzer';

export const plugins = [
  new WebpackBundleAnalyzer({
    analyzerMode: 'static',
    reportFilename: './report.html',
    openAnalyzer: false,
  }),
];
