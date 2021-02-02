import CracoLessPlugin from 'craco-less';
import antdCustomTheme from './src/styles/antd.custom.js';

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
