const CracoLessPlugin = require('craco-less');

const antdCustomTheme = require('./src/styles/antd.custom.js');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: antdCustomTheme,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
