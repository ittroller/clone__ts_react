const { override, fixBabelImports } = require('customize-cra');
const addLessLoader = require('customize-cra-less-loader');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true, // change importing css to less
  }),
  addLessLoader({
    lessLoaderOptions: {
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: {},
      },
    },
  }),
);
