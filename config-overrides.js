const { override, fixBabelImports } = require('customize-cra');
const addLessLoader = require('customize-cra-less-loader');

// const webpack = require('webpack');

// const web3React = config => {
//   const fallback = config.resolve.fallback || {};
//   Object.assign(fallback, {
//     crypto: require.resolve('crypto-browserify'),
//     stream: require.resolve('stream-browserify'),
//     assert: require.resolve('assert'),
//     http: require.resolve('stream-http'),
//     https: require.resolve('https-browserify'),
//     os: require.resolve('os-browserify'),
//     url: require.resolve('url'),
//   });
//   config.resolve.fallback = fallback;
//   config.plugins = (config.plugins || []).concat([
//     new webpack.ProvidePlugin({
//       process: 'process/browser',
//       Buffer: ['buffer', 'Buffer'],
//     }),
//   ]);

//   return config;
// };

const ignoreWarnings = value => config => {
  config.ignoreWarnings = value;
  return config;
};

module.exports = {
  webpack: override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    addLessLoader({
      lessLoaderOptions: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {},
        },
      },
    }),
    ignoreWarnings([/Failed to parse source map/]),
  ),
  // web3React
  resolve: {
    fallback: {
      assert: require.resolve('assert'),
      buffer: require.resolve('buffer'),
      crypto: require.resolve('crypto-browserify'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      stream: require.resolve('stream-browserify'),
      url: require.resolve('url'),
    },
  },
};
