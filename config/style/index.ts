import { CSSOptions } from 'vite';

/**
 *  css样式配置
 */
const cssOption: CSSOptions = {
  // modules: {
  //   localsConvention: 'camelCaseOnly',
  // },
  preprocessorOptions: {
    less: {
      javascriptEnabled: true,
      modifyVars: {
        // hack: `true; @import (reference)  "./src/assets/less/variable.less";`,
      },
    },
    // scss: {
    //   additionalData: '@import "./src/assets/scss/varible.scss";',
    // },
  },
};
export default cssOption;
